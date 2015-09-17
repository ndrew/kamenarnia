(ns ^:figwheel-always k.calendar
  (:require
    	[rum :include-macros true]
    	[clojure.string :refer [replace trim]]
      [cognitect.transit :as transit])
  (:import
    	goog.net.XhrIo))



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


(defn read-transit [s]
  (transit/read (transit/reader :json) s))


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
              ;; clean-data

              (swap! events merge data)
              )))




;;;

(defn group-events [events]
  (reduce (fn[a data]
            (let [{title "title"
                   place "place"
                   tag "tag"
                   t "time"} data
                  groupped (if-let [items (get a tag)] items (sorted-map))
                  ]
                (assoc a tag

                  (assoc groupped
                         t (if-let [g (get groupped t)] (conj g data) [data]))))

            ) {} events))


(rum/defc event-cmp < rum/reactive [tag data]
  [:div
   tag
   [:pre (pr-str data)]
   ]
  )


(rum/defc calendar-cmp < rum/reactive [state]
  (let [events @state
        today (js/Date. )

        buffer (atom #{})] ;; ?

 		  [:section
        [:pre "Сьогодні " (str today)]
        [:pre "Тут будуть фільтри \n"]
        [:hr]
        (into [:div]
		      (map (fn [[k v]]
                 ;(rum/with-props seat-col % :rum/key %)
                 [:div
                    [:header (str k " ")]
                    [:pre

                      (into [:div ] ;; (str  "Час не вказано\n" all-day  "\nРешта\n" )
                            (let [groupped (group-events v)]
                                ;; (pr-str (group-events v))
                                (map
                                   (fn[tag]
                                      (rum/with-key (event-cmp tag (get groupped tag)) (str tag " " k))
                                 ) ordered-tags)))

                     ]]) events))


  				[:button {:on-click (fn [_]

              #_(load-jsons state)


              #_(println
                (transit/write (transit/writer :json-verbose)

                          (clojure.set/rename-keys events
                            {
                             "СР 23" (js/Date. "2015-09-23T12:00:00")
                             "ЧТ 24" (js/Date. "2015-09-24T12:00:00")
                             "ПН 21" (js/Date. "2015-09-21T12:00:00")
                             "ВТ 22" (js/Date. "2015-09-22T12:00:00")
                             "ПТ 25" (js/Date. "2015-09-25T12:00:00")
                             "ПТ 18" (js/Date. "2015-09-18T12:00:00")
                             "НД 27" (js/Date. "2015-09-27T12:00:00")
                             "СБ 19" (js/Date. "2015-09-19T12:00:00")
                             "ЧТ 17" (js/Date. "2015-09-17T12:00:00")
                             "СБ 26" (js/Date. "2015-09-26T12:00:00")
                             "НД 20" (js/Date. "2015-09-20T12:00:00")
                             })

                               ;; {(js/Date.) "test"}

                               )
                 ;;(pr-str (js/Date.))
               )


            #_(println (transit/write (transit/writer :json-verbose)
                                    @state))

  					)}
            [:pre (pr-str @buffer)]

  					"Testo!"
  				]]))



(defn gogol-calendar[el]
  (rum/mount (calendar-cmp events) el)
  (add-watch events :event
      (fn [_ _ _ new-val]
      	(rum/mount (calendar-cmp events) el))))
