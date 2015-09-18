(ns ^:figwheel-always k.calendar
  (:require
    	[rum :include-macros true]
    	[clojure.string :refer [replace trim]]
      [cognitect.transit :as transit]
      [cljs.reader :as cr]
     )
  (:import
    	goog.net.XhrIo))

(defn read-transit [s]
  (transit/read (transit/reader :json) s))


;;; local storage

(defn set-ls-item!
  "Set `key' in browser's localStorage to `val`."
  [key val]
  (.setItem (.-localStorage js/window) key val))

(defn get-ls-item
  "Returns value of `key' from browser's localStorage."
  [key]
   (.getItem (.-localStorage js/window) key))

(defn remove-ls-item!
  "Remove the browser's localStorage value for the given `key`"
  [key]
  (.removeItem (.-localStorage js/window) key))



(defonce events (atom
                 (sorted-map)))



;; ? use for ordering later
(def ordered-tags [ "Альтернативна Музика"
            "Академічна музика"
            "Перформанс"
            "Кіно"
            "Візуальне мистецтво"
            "Театр"
            "Література"
            "Еко-програма"
            "Танець"
            "Фешн-арт"
            "Дитяча програма"
            "Освітня програма"])

(defonce settings (atom
                   {:show-map false
                    :toggled
                      (if-let [toggled (get-ls-item "toggled")]
                        (cr/read-string (get-ls-item "toggled"))
                        (into #{} ordered-tags)
                        )}))


(def locations { "D.O.T підземна сцена (42 павільйон)"          "pavilion42"
                 "Альтернативна музична сцена (19 Павільйон)"  "pavilion19"
                 "1 Павільйон"                                    "pavilion1"
                 "Еко-простір \"Берізки\""                       "berizky"
                 "Кінотеатр (6 Павільйон)"                       "pavilion6"
                 "Велика Сцена-1 (9 Павільйон)"                  "pavilion9"
                 "DIYA (Кіностудія імені Довженка)" ""
                 "Візуальна програма (21 павільйон)"             "pavilion21"
                 "Театральна велика сцена (17 Павільйон)"       "pavilion17"
                 "ЦСМ ДАХ" ""
                 "Літературний простір (38 Павільйон)"          "pavilion38"
                 "Totem Art Space (Дегтярівська 8А)" ""
                 "Хореографія (13 Павільйон)"                    "pavilion13"
                 "Fashion Art (10 Павільйон)"                     "pavilion10"
                 "Дитячий простір (11 Павільйон)"               "pavilion11"
                 "Лекторій (2 Павільйон)"                         "pavilion2"
                 })




(defn ajax [url callback & [method]]
  (.send goog.net.XhrIo url
    (fn [reply]
      (let [body (.getResponseText (.-target reply))
            res (read-transit body)
                ;;;;
                ; (profile (str "read-transit " url " (" (count res) " bytes)") (read-transit res))
            ]
        (when callback
          (js/setTimeout #(callback res) 0))))
    (or method "GET")))





;; temporary
(defn load-jsons [state]
  (let [r (range 17 28)]
    (doseq [i r]
      (ajax (str "/" i ".json")
            (fn [data] (swap! state merge data))))))



(defn load-dates []
      (ajax "gogolfest.json"
            (fn [data]
              (swap! events merge data))))


;;;

(defn group-events [events]
  (reduce (fn[a data]
            (let [{tag "tag"
                   t "time"} data
                  groupped (if-let [items (get a tag)] items (sorted-map))
                  ]
                (assoc a tag

                  (assoc groupped
                         t (if-let [g (get groupped t)] (conj g data) [data]))))

            ) {} events))



(rum/defc event-cmp < rum/reactive [t event class]
  (let [{title "title"
         place "place"
         url "url"
        } event]

      [:div {:class (str class " " (get locations place))}
       [:span {:class "title"} title]
       [:a {:href (str "//gogolfest.org.ua" url) :class "link"} "→"]
       [:span {:class "place"} place]

       ]

    )

  )


(rum/defc events-cmp < rum/reactive [tag data settings]
  (if-not (or (empty? data) (nil? (get-in @settings [:toggled tag])))
    [:div {:class "artdir"}
     [:header {:class "genre"} tag]
     (into [:section {:class "group"}]
           (map (fn[[t events]]
               (into [:div {:class "row"} [:div {:class "col-0 time"}
                            (if (= "" t) "весь день" t)

                            ]]
                     (map (fn[a]
                              (rum/with-key (event-cmp t a (str "col-" (count events) )) (str t a))
                              ;[:span (str (get a "place"))]
                            ) events))

             ) data))
     [:div {:class "clearfix"}]
  ]))



(rum/defc map-cmp < rum/reactive [state]
  (let [show (:show-map @state)]
    (into
      [:div
        [:a {:href "#" :id "map-toggle"
           :on-click (fn [e]
                       (swap! state assoc :show-map (not show))
                         (when-not show
                           (js/setTimeout #(let [el (js/document.getElementById "map")]
                                             (.scroll js/window (.-body js/document) (aget el "offsetTop") 0 )) 500 ))
                          (.preventDefault e))}
         (if show "Сховати схему" "Показати схему")]]
       (list (if show [:img  {:src "map.png" :class "map" :id "map"}])))))


(defn format-date[d]
  (let [dmap {1 "понеділок" 2 "вівторок" 3 "середа" 4 "четвер" 5 "п'ятниця" 6 "субота" 0 "неділя"}
        date (.getDate d)
        day (.getDay d)
        mmap {1 "понеділок" 2 "вівторок" 3 "середа" 4 "четвер" 5 "п'ятниця" 6 "субота" 0 "неділя"}
        month "вересня"
        ]
    (str date " " month  " (" (get dmap day) ")" )))


;;
;;
(rum/defc calendar-cmp < rum/reactive [state settings]
  (let [events @state
        today (js/Date. )
        buffer (atom #{})
        click-handler #(let [genre (.-innerHTML (.-target %))]

                         (if (= "Всі" genre)
                           (swap! settings assoc :toggled (into #{} ordered-tags))

                           (swap! settings update-in [:toggled]
                                (if (get-in @settings [:toggled genre]) disj conj) genre)
                           )

                        )
        ] ;; ?

 		  [:section
        (map-cmp settings)
        ;[:pre "Сьогодні " (str today)]
        (into [:div

               (into [:div {:class "filters"} [:span {:class "filter"} "Події: "]
                      [:span {:class (str "filter "
                                        (if (= (count (:toggled @settings))
                                               (count ordered-tags))
                                          "toggled"))
                              :on-click click-handler} "Всі"] ]
                     (map (fn[a] [:div {:class (str "filter " (if (get-in @settings [:toggled a]) "toggled") )
                                        :on-click click-handler :rum/key a} a]) ordered-tags)
                     ;'([:h1 "test"])
                     )
               ]
		      (map (fn [[k v]]
                 (if (>= (.getDate k) (.getDate today))
                 [:div
                    [:header {:class "day"} (format-date k)]

                    (into [:div ] ;; (str  "Час не вказано\n" all-day  "\nРешта\n" )
                            (let [groupped (group-events v)]
                                (map
                                   (fn[tag]
                                      (rum/with-key (events-cmp tag (get groupped tag) settings) (str tag " " k))
                                 ) ordered-tags)))

                     ])) events))

       ]))



(defn gogol-calendar[el]
  (rum/mount (calendar-cmp events settings) el)
  (add-watch events :event
      (fn [_ _ _ new-val]
      	(rum/mount (calendar-cmp events settings) el)))

  (add-watch settings :toggled
      (fn [new-key _ _ new-val]
        (when (= :toggled new-key)
          (set-ls-item! "toggled" (:toggled new-val)))
      	(rum/mount (calendar-cmp events settings) el)))

  )
