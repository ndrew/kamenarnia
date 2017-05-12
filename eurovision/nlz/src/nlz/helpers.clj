(ns nlz.helpers
  "ns for helpers"
  (:require

;    [nlz.html :as html]
;    [nlz.dict :as dict]

    [net.cgrand.enlive-html :as enlive]

    [clojure.java.io :as io]
    [net.cgrand.jsoup :as jsoup]
    [clojure.zip :as zip]

    [damionjunk.nlp.cmu-ark :as ark]
    [damionjunk.nlp.stanford :as nlp]

    [cognitect.transit :as transit]
    )
  (:import [java.io ByteArrayInputStream ByteArrayOutputStream])
  )



(defn reduce-indexed
  "Reduce while adding an index as the second argument to the function"
  ([f coll]
    (reduce-indexed f (first coll) 0 (rest coll)))

  ([f init coll]
    (reduce-indexed f init 0 coll))

  ([f init ^long i coll]
    (if (empty? coll)
      init
      (let [v (first coll)
            fv (f init i v)]
        (recur f fv (inc i) (rest coll))))))


(defn transit-write
  "data -> transit"
  [data]
  (let [stream (ByteArrayOutputStream. 4096)]
    (-> stream
        (transit/writer :json)
        (transit/write data))
    (.toString stream)))




