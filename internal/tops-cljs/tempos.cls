;; Anything you type in here will be executed
;; immediately with the results shown on the
;; right.

; t=100 | i i i | i i i

; t=

;[[1 4] [1 5]]


(defn lng [t bpb bars]
  (-> 60 (/ t) (* bpb) (* bars)))

(defn tempo[length bpb bars]
  (-> 60
            (* bpb)
            (* bars)
            (/ length)))

(tempo (lng 100 4 2)
       4 1)




(defn to-s [t bpb bars]

  (reduce (fn[a x]
             (apply str (repeat bpb "x"))
             ) "" (range bars))
  )


(to-s 100 4 2)



