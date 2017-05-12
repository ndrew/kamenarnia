(ns nlz.html
  "stuff for parsing html"
  (:require
    [net.cgrand.enlive-html :as enlive]
    [clojure.java.io :as io]
    [net.cgrand.jsoup :as jsoup]

    [clojure.zip :as zip]
    [clojure.string :as s]

    [cognitect.transit :as transit]
    )
  (:import [java.io ByteArrayInputStream ByteArrayOutputStream]))


;;
;; enlive stuff

(defn parse-html-string [html]
  "parses html string as html5 code via jsoup enlive parser"

  (enlive/html-resource
    (java.io.ByteArrayInputStream.
      (.getBytes html "utf-8"))
    {:parser jsoup/parser} ) )



(defn parse-html ;; TODO: rename
  "reads and parses html from file"
  [file-path]
 (parse-html-string (slurp file-path)))


(defn- fetch-data! ;; TODO: rename
  "tries to get html data from url via gzip or html"
  [url]
  (try
    (-> url java.net.URL.
        .getContent (java.util.zip.GZIPInputStream. ))
    (catch Exception e
      (java.net.URL. url))))


(defn html5-resource
  "fetches and parses html5 resource from url"
  [url]

  (enlive/html-resource
    (fetch-data! url)
    {:parser jsoup/parser})
  )


(defn parse
  "parses html via url, gets the part via selector and then applies f"
  [url selector f]

  (let [template (parse-html url)]
    ((enlive/do-> #(enlive/at % selector f)) template))

  )

; "data/eurovision-songs-links.html" [:table] parse-metadata!

(defn parse-table-rows
  [html f]
  (enlive/at html [:tr] f))



;; urls

(defn concat-url
  "concats urls"
  [base-url url]
  (str base-url
       (if (clojure.string/starts-with? url "/")
          url
          (str "/" url))))




;; text processing

(defn- normalize-text
  "Extract text: parse html, remove tags."
  [text]
  (->> text
;    clojure.string/lower-case
    java.io.StringReader.
    enlive/html-resource
    first
    zip/xml-zip
    (iterate zip/next)
    (take-while (complement zip/end?))
    (filter (complement zip/branch?))
    (map zip/node)
    (apply str)))


    ;(normalize-text
    ;  (apply str (enlive/emit* (rest (enlive/select (get @cache full-url ) [:#page_body :p])))))



(defn strip-tags
  "strips tags (kinda) and replaces them with new-lines"
  [enlive-res selector]

  (normalize-text (s/replace
                    (apply str (enlive/emit* (rest (enlive/select enlive-res selector))))
                    "</p>" "</p>.\n")) ;; TODO: \\n
)

