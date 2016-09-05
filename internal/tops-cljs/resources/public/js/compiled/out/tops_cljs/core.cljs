(ns tops-cljs.core
  (:require [rum.core :as rum]))

;;
;; helpers

(defn el [id] (js/document.getElementById id))

(defn q [selector] (.querySelectorAll js/document selector))

(defn data [el key]
  (.getAttribute el (str "data-" key)))

(defn domready [handler]
  (.addEventListener js/window "DOMContentLoaded" handler))

;;
;; init stuff

(enable-console-print!)
(defonce app-state (atom {:text "Hello world!"}))


(rum/defcs bandcamp < (rum/local {:loaded? false}) [
                                                    {state :rum/local}
                                                    {href :href
                                                     src :src
                                                     h :height
                                                     w :width
                                                     preview :preview
                                                     } ]
  (if (@state :loaded?)
    [:a {:href href}
     [:iframe
      {:src src
       :style {:border 0
               :width w
               :height h
               }}

      ]
     ]
    [:div {:style {
                   :width w
                   :height (min h w)
                   :background (str "url(" preview ")")
                   :background-repeat "no-repeat"
                   :background-size "contain"
                   :outline "1px solid red"
                   :margin "0 auto 2.5rem auto"
                   }
           }

     [:svg {
            :style {:width "100%" :height "100%"} :viewBox "0 0 36 36"
            :on-click (fn[_]
                        (swap! state assoc :loaded? true)
                        )

            }
      [:path {:class "play-icon" :d "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28"}]
      ]

     ]
    )
  )


(defn lazyload-bandcamp[]
  (let [els (q ".bandcamp")]
    (doseq [el (map #(.item els %) (range (.-length els)))]
      (rum/mount
       (bandcamp {
                  :href (data el "href")
                  :src (data el "src")

                  :width (data el "width")
                  :height (data el "height")

                  :preview (data el "preview")
                  }) el)
      )
    )
  )

(domready (fn[]



             ))




(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)


