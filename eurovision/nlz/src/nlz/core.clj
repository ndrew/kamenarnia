(ns nlz.core
  (:gen-class)
  (:require

    [nlz.html :as html]
    [nlz.dict :as dict]
    [nlz.helpers :as helpers]

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




;;
;; S T A T E
;;


;; we are taking lyrics from
(defonce base-url "http://4lyrics.eu/eurovision")


(defonce CACHE (atom {}))

(defn- put-to-cache!
  "stores kv in cache"
  [k f]

  (if-not (get @CACHE k)
    (swap! CACHE assoc k (f k)))
  (get @CACHE k )
)

;; list of songs with meta information ( :country :url :winner :artist :song )
(defonce EUROVISION-DATA (atom []))


;;
;; STEP 1 — fetch urls for all eurovision songs since 2000
;;


(defn- parse-year [raw-year]
  (if (clojure.string/starts-with? raw-year "y")
    (subs raw-year 1)
    raw-year))


(defn- parse-row!
  "parses rows from eurovision songs html — UGLY, but works"
  [year row]

  (let [d (atom {:year year})]
    (enlive/at row [(enlive/nth-child 2)]
               (fn[a]
                 (let [[country] (:content a)]
                   (if-not (= "Artist" country)
                     (swap! d assoc :country country)))))

    (when (:country @d)
      (enlive/at row [(enlive/nth-child 3)]
                 (fn[a]
                   (let [[artist] (:content a)]
                     (swap! d assoc :artist (if (:content artist) (first (:content artist)) artist))
                     (when (= "results-td-winner" (:id (:attrs a)))
                       (swap! d assoc :winner true)))))

      (enlive/at row [(enlive/nth-child 4) :a]
                 (fn[a]
                   (swap! d assoc :url (:href (:attrs a)))
                   (swap! d assoc :song (first (:content a)) )))


      (swap! EUROVISION-DATA conj @d))))



(defn parse-metadata! [html-content]

  (let [{attrs :attrs} html-content
        year (parse-year (:class attrs))]

    (html/parse-table-rows html-content (partial parse-row! year))))



;;

#_(let [stop-list ; non-participating entities and in between performances
    {
      ; 2002
      "B’Avarija" #{"We All"}

      ; 2005
      "Angelica Agurbash" #{"Boys and Girls"}
      "Aline Lahoud" #{"Quand tout s’enfuit"}


      ; 2006
      "Virginie Pouchain" #{"Vous, c’est nous"}
      "No Name" #{"Moja ljubavi"}

      ; 2009
      "Stephane & 3G" #{"We Don’t Wanna Put In"}
      ;"Márk Zentai" #{"If You Wanna Party"} ; has no link
      "Kátya Tompos" #{"Magányos csónak"}


      ; 2010
      "3+2" #{"Far Away"}
      "Alyosha" #{"To Be Free"}
      "Vasyl Lazarovych" #{"I Love You"}

      ; 2011
      "Anastasiya Vinnikova"  #{"I Am Belarusian"}

      ; 2012
      "Alyona Lanskaya" #{"All My Life" "Rhythm of Love"} ; 2013 also
      "Nina Zilli" #{"Per sempre"}

      ; 2013
      ; already there "Alyona Lanskaya"
      "Elitsa Todorova & Stoyan Yankoulov" #{"Kismet"}
      "Esma & Lozano" #{"Imperija"}

      ; 2015
      "Elhaida Dani" #{"Diell"}
      "Andreas Kümmert" #{"Heart of Stone"}

      ; 2016
       "Ira Losco" #{"Chameleon"}
       "Ovidiu Anton" #{"Moment of Silence"}
      ; 2017
       "Julia Samoylova" #{"Flame Is Burning"} ; HA-HA
      }]

  (println "parsing html for songs metadata")
  (reset! EUROVISION-DATA [])
  (doall ; as enlive is lazy
    (html/parse "data/eurovision-songs-links.html" [:table] parse-metadata!))


  (println "meta-data saved, filtering non-participating artists")

  (reset! EUROVISION-DATA (filter (fn[a]
          (if-let [songs (get stop-list (:artist a))]
            (not (songs (:song a)))
            ;;
            (:url a) ;; sorry Márk Zentai
           )
          ) @EUROVISION-DATA))

  (println "visually checking data:")

  (clojure.pprint/pprint (reduce (fn[a b]
          (-> a
              (update-in [:years] conj (:year b))
              (update-in [:countries] conj (:country b))))
        { :countries #{}
          :years #{}
          }
        @EUROVISION-DATA))


  (binding [*print-length* nil]
    (spit "data/song-urls.edn" (pr-str @EUROVISION-DATA)))

  (println "saved to data to " "data/song-urls.edn")

)


;;
;; part 2 — fetch lyrics
;;

(defn get-lyrics!
  "fetches data from and strips lyrics"
  [url]
  (let [full-url (html/concat-url base-url url)
        data (put-to-cache! full-url #(html/html5-resource %))    ]

    (html/strip-tags data [:#page_body :p])
))


#_(do

    (reset! EUROVISION-DATA (read-string (slurp "data/song-urls.edn")))

    (println "fetching lyrics")
    ;; this may need to be called several times, due to network errors

    (reset! EUROVISION-DATA
            (doall
              (map (fn[a]
                     (if-not (nil? (:url a))
                       (assoc a :raw-lyrics
                         (get-lyrics! (:url a)))
                       )
                     )
                   @EUROVISION-DATA)))

    (binding [*print-length* nil]
      (spit "data/song-raw.edn" (pr-str @EUROVISION-DATA)))

    (println "saved to data to " "data/song-raw.edn")


    :ok
    )



;;
;; part 3 - parse lyrics
;;

#_(reset! EUROVISION-DATA (read-string (slurp "data/song-raw.edn")))


#_(binding [*print-length* nil]
    (spit "cache.edn"
          (pr-str @CACHE)))


#_(reset! CACHE (read-string (slurp "cache.edn")))



#_(binding [*print-length* nil]
  (spit "data/raw-songs.json"
        (helpers/transit-write {:data @EUROVISION-DATA})))






(defn- clean-up-song [data]
  (-> data
      (update :raw-lyrics clojure.string/replace "\\n" "")
      (update :raw-lyrics clojure.string/replace "\n.\n." ".\n")
      (update :raw-lyrics clojure.string/replace ".\n." ".")
      )
  )



(defn- compress-sentiments
  "transform list of maps into flat list"
  [sentiments]


  (map (fn[{tokens :tokens}]
         (reduce (fn[a {pos :pos token :token}]
                   (conj a pos token)
                   ) [] tokens)

         ) sentiments)
  )

(def pos-stoplist #{":" "." "," "``" "''" "-LRB-" "-RRB-" "?" ;; filter parenthesis and punctuation

                                    "TO" ;; to
                                    "DT" ;; the, ...
                                    "PDT" ;; all

                                    "POS" ;; filter '
                                    "CC" ;; filter conjunctions

                                    "MD" ;; filter auxiluary verbs 'd will would

                                    "IN" ;; in, of, ...

                                    "PRP" ;; TODO: handle PRP separately -

                                    "WDT" ;; what
                                    "WP" ;;

                                    "UH" ;; uh,oh,... ;; TODO: handle separately
                                    "FW" ;; la

                                     "EX" ;; there, ...

                                    })




(defn- normalize-pos [pos]
  (case pos
    "NNP" "NN"
    "VBP" "VB"
    pos)
  )




(def verbs #{"VB" "VBP" "VBD" "VBG" "VBZ" "VBN"})
(def adverbs #{"RB" "RP" })

(def common-verbs #{"'re" "'s" "'m"
                    "be" "is" "do" "does" "are" "been" "am"
                    "'ve"
                    "let" "gon"

                    })

(defn- filter-common-verbs
  [data]

  (if-let [[pos token] data]
    (if-not (verbs pos)
      [pos token]
      (if-not (common-verbs token)
        [pos token]
        )
      )
    )

)


;, how, when, ever, how,

(def common-adverbs #{"so" "n't" "just" "on" "not"
                      "yet" "too"
                      })


(defn- filter-common-advebs
  [data]

  (if-let [[pos token] data]
    (if-not (adverbs  pos)
      [pos token]
      (if-not (common-adverbs token)
        [pos token]
        )
      )
    ))



(defn- normalize-word [pos token]
  (let [_pos (normalize-pos pos)
        _token (-> token
                 (clojure.string/lower-case))]

    (-> [_pos _token]
        (filter-common-verbs)
        (filter-common-advebs)
        )
    )

  )

;(concat [] [])

(defn- filter-useless [structure]
 ;; add one more reduce
  (reduce #(let [filtered (reduce (fn[a [pos token]] ;
                    (if (pos-stoplist pos)
                      a
                      (concat a (normalize-word pos token))
                    )
                  ) [] (partition 2 %2))]
             (if (seq filtered)
               (conj %1 filtered)
               %1
               )

             )
     [] structure)


  )



(defn- word-frequency [structure]
  (reduce (fn[all items]
          (merge-with + all (frequencies (partition 2 items))))
              {} (filter-useless structure)
          )
  )




;;

(defn- reduce-freqs [u]
  (reduce (fn[a [_ f]] (+ a f)) 0 u) )

(defn- reduce-pos [u]
  (reduce (fn[a [pos _]]
            ;(println a pos)

          (cond
            (nil? a) pos
            (= [a pos] ["NN" "JJ"]) "NN"

            (= [a pos] ["VBG" "JJ"]) "VBP" ;; wan
            (= [a pos] ["VBG" "NN"]) "NN" ;; feeling

            (= [a pos] ["VB" "VBP"]) "VB" ;; see
            (= [a pos] ["VBP" "VB"]) "VB" ;; make

            :else

              (do
                (println [a pos])

                pos)
            )

          ) nil u))




(defn- merge-words
  [wf] ; (word-frequency [["JJ" "Yeah" "NN" "yeah"]])

  (let [used (atom {})
      duplicates (reduce-kv (fn [m [pos token] freq]
               (if-let [u (@used token)]
                   (do (println token)
                   (swap! used assoc token [[(reduce-pos (conj u [pos freq]))
                                             (reduce-freqs (conj u [pos freq]))]])
                     )
                   (swap! used assoc token [[pos freq]])
                 )) {} wf)
      ]

    (reduce-kv (fn [m [pos token]  freq]
                 (let [[[nu-pos nu-freq]] (get duplicates token)]
                   (assoc m [nu-pos token] nu-freq)
                   )
                 ) {} wf)

    ;duplicates

  )
  )



(defn- process-song
  "initial clean-up for the songs"
  [data]
  (let [d (clean-up-song data)
        id (str (:artist d) " - " (:song d))
        sentiments (put-to-cache! id (fn[x] (nlp/sentiment-ner-maps (:raw-lyrics d))))
        structure (compress-sentiments sentiments)
        ]

      (-> d
          (assoc :structure structure)
          (dissoc :raw-lyrics)
          (assoc :freq (reduce concat (reverse (sort-by second

                                                        (merge-words (word-frequency structure)))))
        ))
    ))





(let [
       ;data (first @EUROVISION-DATA)
       ;data [(process-song (rand-nth @EUROVISION-DATA))]
       year "2017"
       data (map process-song ;(take 10
                                    (filter #(= year (:year %)) @EUROVISION-DATA));)

       ;data (map process-song (take 2 @EUROVISION-DATA))
      ]


  (binding [*print-length* nil]
    (spit (str "resources/public/" year ".json")
          (helpers/transit-write data)))

  ;(process-song data)

  )








#_(word-frequency [["PRP" "We" "VBP" "'re" "RB" "so" "RB" "alike" "," ","
   "RB" "yet" "JJ" "different" "IN" "At"
   "DT" "a" "NN" "loss" "IN" "for"
   "NNS" "words" "," "," "VBG" "stuttering"
   "PRP" "It" "VBP" "do" "RB" "n't"
   "VB" "make" "NN" "sense" "," ","
   "WP" "what" "VBZ" "'s" "VBG" "happening" "." "?"]])

#_(filter-useless  ; sampling!
  [["," ","]
    ["PRP" "We" "VBP" "'re" "RB" "so" "RB" "alike" "," ","
   "RB" "yet" "JJ" "different" "IN" "At"
   "DT" "a" "NN" "loss" "IN" "for"
   "NNS" "words" "," "," "VBG" "stuttering"
   "PRP" "It" "VBP" "do" "RB" "n't"
   "VB" "make" "NN" "sense" "," ","
   "WP" "what" "VBZ" "'s" "VBG" "happening" "." "?"]])






; (word-frequency [["JJ" "Yeah" "NN" "yeah" "NN" "yo"]])

;(merge-words (word-frequency [["JJ" "Yeah" "NN" "yeah" "NN" "yo"]]))

















(comment



;(nlp/pos-ner-maps "Johny")


(comment

  (defonce ppp (atom nil))
  (let [lyrics (get-lyrics (:url
                (first @parsed-data)))]

    (reset! ppp (nlp/sentiment-ner-maps lyrics)))

  ;(get (reduce conj [] @ppp) 7)
  ;; (clojure.pprint/pprint @ppp)

  (keys (group-by
    :pos

    ;(fn[a] (#{"NN"}) )
            (:tokens (first @ppp))))

  ;; JJ - adjective or numeral, ordinal
  ;; hird ill-mannered pre-war regrettable oiled calamitous first separable ectoplasmic battery-powered participatory fourth still-to-be-named multilingual multi-disciplinary ..

  ;; adjective
  ;#{"JJ"}

  ;; verbs
  ;#{"VB" "VBD" "VBG" "VBN" "VBP" "VBZ"}

  ;; VB - verb, base form
  ;;
  ;; VBZ - verb, present tense, 3rd person singular


  ;#{"NNS" "NNPS"}

)



(defn parse-lyrics[lyrics]
 (reduce conj []
  (nlp/sentiment-ner-maps lyrics)))






;;(count @parsed-data)


#_(doseq [a (take 50 (drop 250 @parsed-data))]
  (println (:country a) (:artist a) (:song a)  (:year a))
  )



#_(let [results (reduce (fn [all a]

        ;(if-not (:lyrics a)
        ;  (println a)
        ;  )

          (let [words (clojure.string/split
                        (if (:lyrics a) (:lyrics a) "") #"\s+")]




            ;(merge-with + all (frequencies (if (nil? words) [] words)))

            (if ;(= (Integer/parseInt (:year a)) 2000)

              ;(= (:country a) "Armenia")

              ;(>= (Integer/parseInt (:year a)) 2008)
              true
              ;;(:winner a)


              (merge-with + all (frequencies (if (nil? words) [] words)))
              all
              )
            )
          ) {} @parsed-data)]


;(spit "euro-freq.txt" (with-out-str  (clojure.pprint/pprint

  (take 300 (into (sorted-map-by (fn[k1 k2]
                         (> (get results k1) (get results k2)) ))

      results))

;    )))

  )




#_(let [[a] @parsed-data]
  (frequencies (clojure.string/split (:lyrics a) #"\s+"))
  )




(defonce res (atom []))


(defn -main
  "I don't do a whole lot ... yet."
  [& args]


  (println "start parsing")
  (let [template (parse-html "../euro.html")]
    (reset! parsed-data [])
    ((enlive/do-> #(enlive/at % [:table] parse-metadata)) template))
  (println "metadata parsed")


  (let [D 600
        T 100]
  (drop (+ D T)
       (swap! res
       concat

       (pmap (fn[a]
          (println "parsing " (:url a) )

          (if (nil? (:url a))
            (do
              (println "ERROR" a)
              (assoc a :lyrics ""))

            (assoc a :lyrics
              (parse-lyrics
                (get-lyrics (:url a))))))

            (take T (drop D @parsed-data))))))


  ;(spit "data-test.edn" @res)

  (println "data-test.edn written")
)


#_(count @parsed-data)


#_(binding [*print-length* nil]
  (spit "ddddd.edn" (pr-str @res)))


; (second (read-string (slurp "ddddd.edn")))



;  (spit "d14.edn" (into [] (take 50 (drop 650 @res))))


#_(read-string (slurp "d14.edn"))


;(reset! res [])



;;
;; clean up data
;;;;;;;;


(defonce data (read-string (slurp "ddd.edn"))) ; "ddddd.edn"


#_(binding [*print-length* nil]
 (spit "ddd.edn"
    (pr-str (map (fn [x]
                   ;(assoc x :country (get country-mapping (:country x)))

                   (if (= "002" (:year x))

                     (assoc x :year "2002" :country (get country-mapping (:country x)))
                     (assoc x :country (get country-mapping (:country x)))
                     )

                   ) data))))




(defn group-data [d]
  (reduce

    (sorted-map)
    d
    )
  )


#_(count
  (filter (fn[a]
          (= "2017" (:year a))
          ) data)
  )









(defonce token-map (atom {}))

;; (reset! token-map {})


(get @token-map "not")


(defn- skip-token? [token]
  (or (#{"..." "." "-rrb-" "-lrb-" "\\" "n." "`" "?" "'m" "'ll" "," "the" "to" "a" "``" "n't" "in" "--" "'s" "'re" "!"
         "'ve" "oh" "ooh"
         "do" "is" "be" "are" "'d" "n" "s"
         "and" "will" "can"

         "na" "wan" "got" "ca" "da" "gon" "get" "la" "o" "z"

         "mon"

         "wo" "tu"  "ti" "lala"
         "que"

         "да" "laj" "du" "и"

         "je" "ne" "an" "et" "si" "el" "mi" "e" "lo"

         "à" "il"
         } token)
    (if-let [t (@token-map token)]
      (not (empty? (clojure.set/intersection t #{"IN" "POS" "PRP" "PRP$" "." ":" "UH" "WDT" "WP" "WRB" "CC" "RB"})))
      ;;false;true ;(clojure.set/intersection t #{"VB" "VBD" "VBG" "VBN" "VBP" "VBZ"})

      false
      )
))


(defn- prepare-token [t]
  (if-not (skip-token? (clojure.string/lower-case (:token t)))
    (do

      (swap! token-map
             (fn[a b c]
                   (update-in a [b] (fn[a b] (if (nil? a)
                                               #{b}
                                               (conj a b)
                                               )) c))
              (clojure.string/lower-case (:token t))
               (:pos t))

      (update-in (dissoc t :ner) [:token]  clojure.string/lower-case)

      )
    )
)





;(keys


(defn get-frequencies[lyrics]
  (reduce-kv #(assoc %1 %2 (count %3)) {}
    (group-by :token
      (reduce #(concat %1
                (reduce (fn[a x] (if-let [d (prepare-token x)]
                                      (conj a d)
                                      a
                                      )) '() (:tokens %2)))
                  '() lyrics))))





#_(merge-with +
  (get-frequencies (:lyrics (first data)))
  (get-frequencies (:lyrics (second data)))
            )



;(:lyrics (first data))


; (merge-with +





; (defonce final-data )







#_(keys (reduce (fn[a x]
          (merge-with + (:words x) a)
          ) {}
      (map (fn[a]
              (dissoc (assoc a :words (get-frequencies (:lyrics a))) :url :lyrics)) (take 50 data ))

        ))




; "na" "wan" "got" "ca" "da" "gon" "get" "la" "o"


(def all-words
  ;(reduce (fn[a x]
  ;        (merge-with + (:words x) a)
  ;        ) {}

  (map (fn[a]
          (dissoc (assoc a :words (get-frequencies (:lyrics a))) :url :lyrics)) data))

;)




(def word-map (reduce (fn[a x]
          (merge-with + a (:words x))
          ) {} all-words))

;(word-map "sense")



;(count word-map-sorted)


(def words-dict (reduce-indexed (fn[a i [w _]]
                  (assoc a i w)
                  ) {} word-map))


(def words-dict-rev (reduce-kv (fn[a k v] (assoc a v k) ) {} words-dict))

;(count words-dict-rev)
;;(first all-words)

(def compressed-data (map (fn[x]
       (assoc x :words
         (reduce-kv (fn[a w freq]
                      (when (nil? (get words-dict-rev w))
                        (println w)
                        )

                      (assoc a (get words-dict-rev w) freq)

                      ) {} (:words x))
         )
       ) all-words))

;(first compressed-data)



(binding [*print-length* nil]
  (spit "transit-2.json"
        (transit-write {:dict words-dict
                         :data compressed-data
                  ;;:tokens @token-map
                  })))





(reduce-kv (fn[a k v] (assoc a v k) ) {}
{"Albania" "al"
"Andorra" "ad"
"Armenia"  "am"
"Australia" "au"
"Austria"  "at"
"Azerbaijan" "az"
"Belarus" "by"
"Belgium" "be"
"Bosnia and Herzegovina" "ba"
"Bulgaria" "bg"
"Croatia" "hr"
"Cyprus" "cy"
"Czech Republic" "cz"
"Denmark" "dk"
"Estonia" "ee"
"Finland" "fi"
"France" "fr"
"FYR Macedonia" "mk"
"Georgia" "ge"
"Germany" "de"
"Greece" "gr"
"Hungary" "hu"
"Iceland" "is"
"Ireland" "ie"
"Israel" "il"
"Italy" "it"
"Latvia" "lv"
"Lebanon" "lb"
"Lithuania" "lt"
"Malta" "mt"
"Moldova" "md"
"Monaco" "mc"
"Montenegro" "me"
"Netherlands" "nl"
"Norway" "no"
"Poland" "pl"
"Portugal" "pt"
"Romania" "ro"
"Russia" "ru"
"San Marino" "sm"
"Serbia and Montenegro" "cs"
"Serbia" "rs"
"Slovakia" "sk"
"Slovenia" "si"
"Spain" "es"
"Sweden" "se"
"Switzerland" "ch"
"Turkey" "tr"
"Ukraine" "ua"
"United Kingdom" "gb"

   }
           )


  )

