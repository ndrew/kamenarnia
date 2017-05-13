(ns nlz.core
  (:require
            [goog.net.XhrIo :as xhr]

            [rum.core :as rum]
            [cljs.pprint :as pprint]
            [cognitect.transit :as t]
    ))


(enable-console-print!)


(def ALL-YEARS "всі роки")


(defonce TESTER-STATE (atom []))

(defonce app-state
  (atom {:debug true
         :tester TESTER-STATE

          ;; TODO:
         :all-data []
         :dict {}
         :ui {}
         :state (atom {:current-year nil;ALL-YEARS
                       :current-country nil})
         }))



(defn load-song! [year]
  (xhr/send (str year ".json")
              (fn [event]
                (let [res (-> event .-target .getResponseText)]
                  (let [json (t/read (t/reader :json) res)]
                    ;;(println json)
                    (reset! TESTER-STATE json))))))



(defn- pos->style [pos]
  (case pos
    ":" "crap"
    "." "crap"
    "," "crap"
    "``" "crap"
    "''" "crap"

    "-LRB-" "crap"
    "-RRB-" "crap"

    "PRP$" "PRB_BANG"

    pos)
  )

(rum/defc sentiment < rum/reactive
  [data]

  (into [:div ]
            (map (fn[[pos token]] [:span {:class [ (str "sentiment-" (pos->style pos))]}
                         token])
                   (partition 2 data))
        )

)

(rum/defc sentiments < rum/reactive
  [data]

  (into [:div {:class "sentiments"}]

        (map sentiment data)
        )
)

(rum/defc song-link < { :key-fn (fn [d f]
                                  (str (:artist d) " - " (:song d))) }
  [d f]

  (let [id (str (:artist d) " - " (:song d))]
    [:div
       [:a {:href (str "http://4lyrics.eu/eurovision/" (:url d))
            :on-click f
            } id]
     (str " (" (:country d) ")")
     ]))




(rum/defcs tester < (rum/local nil ::selected)
  [local-state state]

  (let [selected (::selected local-state)
        ; d (first @state)
        ] ;; for now only use first
    [:div {:class "tester"}

      [:div {:class "years"}
       (map (fn[a]
              [:a {:href "#"
                   :on-click (fn[_] (load-song! a) )} a]
              ) ["2017" "2016" "2015" "2014" "2013" "2012" "2011" "2010" "2009" "2008" "2007" "2006" "2005" "2004" "2003" "2002" "2001" "2000"])
       ]

     (if-not @selected
      (map-indexed (fn[i d ]
                     (song-link d (fn [e]
                                    (reset! selected i)
                                    (.preventDefault e)
                                    )))  @state)

       (let [d (nth @state @selected)
             ]
         [:div
           [:div  [:a {:href "#"
                       :on-click (fn[_] (reset! selected nil))
                       }
                   "<-"
                   ] " "
                  [:a {:href (str "http://4lyrics.eu/eurovision/" (:url d))}
                  (str (:artist d) " - " (:song d))
                  ] (str " (" (:country d) ")")]

           ;[:pre (:raw-lyrics d)]

           [:header "Popular words:"]
          (sentiments [(apply concat (map (fn[[[pos token] freq]]
                           [pos (str token " × " freq)]
                               ) (partition 2 (:freq d))))])

           [:header "Lyrics" ]
           (sentiments (:structure d))

            [:hr]






          ]

         )

       )


     ]
    )
)


(rum/mount (tester TESTER-STATE) (.getElementById js/document "app"))

(add-watch TESTER-STATE :stuff
             (fn [_ a old-val new-val]
               (rum/mount (tester a) (.getElementById js/document "app"))))


(load-song! "2017")





(comment




;;
;; data




(defn- build-ui-data [data]
  (reduce (fn[a b]
            (merge a {:years (conj (:years a) (:year b))
                      :countries (conj (:countries a) (:country b))})
            ) { ;; TODO:
               :years #{}
               :countries #{}
               :data []} data)
  )


(defn- dict[w]
  (get (:dict @app-state) w)
  )


(defn- prepare-word-map [d]

  (reduce (fn[a x]
            (let [d (dissoc x :words)
                  words-map (reduce (fn[a [k v]]
                                      (assoc a k [v [(:country d) v]])) {} (:words x))]

              ;(println (pr-str words-map))

              (merge-with (fn[a b] (concat (update-in a [0] + (first b))
                                           (rest b)))
                          words-map a))) {} (take 10 d)))



(defn- build-data [pred year]
  (let [data (:all-data @app-state)
        d (filter pred data)
        w (prepare-word-map d)
        sw (into (sorted-map-by (fn[k1 k2]
                        (> (first (get w k1)) (first (get w k2))) )) w)]

    (println (pr-str (first w)))

    {:data d
     :year year
     :words sw
     :max (first (second (first sw)))}
))



(add-watch (:state @app-state) :zzz
           (fn [_ a old nu]

             (let [year-changed (not= (:current-year old) (:current-year nu))
                   country-changed (not= (:current-country old) (:current-country nu))

                   year (:current-year nu)
                   country (:current-country nu)

                   update-ui (fn[pred year]
                               (swap! app-state update-in [:ui]
                                      merge (build-data pred year)))


                   ]

               ;; (println year year-changed)

               (cond
                 year-changed (do
                                (if (= year ALL-YEARS)
                                  (do
                                    (swap! app-state update-in [:ui] (:all @app-state))
                                    )


                                  (update-ui (fn[a] (= (:year a) year)) year)
                                  )

                                )

                 country-changed (do


                                  (update-ui (fn[a] (= (:country a) country)) country)

                                   )
                 )


               )

             ))






;;
;; actions


(defn load-json! []
  (xhr/send "transit-2.json"
              (fn [event]
                (let [res (-> event .-target .getResponseText)]
                  (let [json (t/read (t/reader :json) res)
                        data (:data json)
                        ui-data (build-ui-data data)]

                    (swap! app-state assoc :dict (:dict json))
                    (swap! app-state assoc :all-data data :ui ui-data)

                    (swap! (:state @app-state) assoc :current-year "2017")
                    )))))



;;
;; components

; field (rum/cursor-in state [k])

(rum/defc combo-cmp < rum/reactive
  [field label values]
    [:span [:label label]
     (into [:select {:default-value (rum/react field)
                     :on-change #(reset! field (.. % -target -value))
                     }]
           (map (fn[l] [:option {:value l} l]) values))])



(rum/defc preloader < rum/static
  []

  [:div {:class "loader"} "завантажую дані..."])


(rum/defc menu < rum/reactive
  [state]

  (let [;data (:all-data @state) ;; FIXME
        update-ui (fn[pred year]
                    (swap! state update-in [:ui]
                           merge (build-data pred year)))
        ui-state (:ui @state)

         year-field (rum/cursor-in (:state @state) [:current-year])
         country-field (rum/cursor-in (:state @state) [:current-country])
         ]

    [:div {:class "menu"}
     [:header "Громадське Культура проаналізувало частоту ужитку слів в піснях учасників Євробачення з 2000го року."]
     "Виберіть "
     (combo-cmp year-field "рік" (reverse (sort (:years ui-state)))
                ;(conj (reverse (sort (:years ui-state))) "всі роки")
                )
      ;" aбо "
      ;(combo-cmp country-field "країну" (conj (sort (:countries ui-state)) nil))
     ]

  )
)







(rum/defc word < rum/static
  [[word [c & r]] m]

  (let [colors [

;"#01579b"
;"#0277bd"
;"#0288d1"
;"#039be5"
;"#03a9f4"
;"#29b6f6"
"#4fc3f7"
"#81d4fa"
"#b3e5fc"
"#e1f5fe"
]
         lim 10
         freqs (sort (fn[[_ a] [_ b]] (> a b)) r)

                rrr (reduce (fn[a [b c]]
                                ["..." (+ c (second a)) ]
                            ) ["..." 0] (drop lim freqs) )

        limited-freqs   (take lim freqs)
                        ;(if (= 0 (second rrr))
                       ; freqs
                        ;(concat (take lim freqs) (list rrr) )
                        ;)





        f (fn[j [i c]]
                     [:div {:class "part"
                            :style {:flexShrink (inc j)
                                    ;:backgroundColor (get colors j "#e1f5fe")
                                    }
                            }
                      [:img {:class "country"
                                :src (if (= "..." i)
                                       "/icons/gif/other.gif"
                                       (str "/icons/gif/" i ".gif")
                                       )
                                }]

                      [:span {:class "count" }c]
                      ]
                     )]



    (conj
        [:div {:class "word"}
         [:span {:class "c"} c]
         [:span {:class "w"} (dict word)]
        ]
        ;;[:pre (pr-str freqs)]
        (into [:div {:class "gauge"}]

              (let [parts (map-indexed f limited-freqs)]
                (if (= 0 (second rrr))
                  parts
                  (concat parts (list (f 1 rrr)))

                  )
                )

              )
        )
    )

  )



(rum/defc legend < rum/static
  [ui-state]

  ;(println (pr-str ui-state))
  [:div (pr-str
          (reduce (fn[a x]
            (conj a (:country x))
            ) #{} (:data ui-state))
          )]
  )


(rum/defc ui < rum/reactive
  [state]

  (let [ui-state (:ui @state)]

     (into
           [:div (menu state)
            ; (legend ui-state)

            ]


           ;[(pr-str (first (:words ui-state)))]
           (map (fn[x]
                    (word x (:max ui-state))
                  ) (:words ui-state))

           ;[(:max ui-state)]
           )
    ;[:div (count (:data ui-state))]

    ;[:pre (pr-str (:countries ui-state))]

      )



    )






(rum/defc app < rum/reactive
  [state]

  (let [d (:all-data @state)]
    (if (empty? d)
      (preloader)
      (ui state)
      )
    )
;;   (if (:data @state))
)


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)


)








;(load-json!)

(rum/mount (app app-state) (.getElementById js/document "app"))

(add-watch app-state :stuff
             (fn [_ a old-val new-val]



               #_(if-not (seq (:all-data old-val))
                 (println
                    (take 30 (:words (build-data (fn[a] true) ALL-YEARS)))

                          )
                 )

               #_(if-not (seq (:all-data old-val))
                  #_(js/setTimeout (fn[x]
                                   (swap! app-state assoc-in [:all]

                                          {:data d
     :year year
     :words sw
     :max 1000}

                                          (build-data (fn[a] true) ALL-YEARS)

                                          )
                                   ))
                 )

               (rum/mount (app app-state) (.getElementById js/document "app"))))


(set! (.-onload js/window)
      (fn [] ;; This function is also never called.
        (load-json!)))


)
