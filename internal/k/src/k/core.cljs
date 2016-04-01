(ns ^:figwheel-always k.core
    (:require
    	[rum.core :as rum]
    	[clojure.string :refer [replace]]
      [k.namegen :as band-gen]

      ;[k.calendar :as c]
     ))


(defn el [id] (js/document.getElementById id))


;(defn gogolfest-calendar []
;  (let [mount-el (el "gogol-calendar")]
;            (c/gogol-calendar mount-el)))

;;
;; entry point
(set! (.-onload js/window)
      (fn []
         (let [mount-el (el "generator")]
            (band-gen/band-name-generator mount-el))
        ; (gogolfest-calendar)
        ; load date only ones
        ; (c/load-dates)

        ))


;;
;; figwheel stuff

(defn on-js-reload []
  ; refresh gogolfest calendar
  ; (gogolfest-calendar)
  )



