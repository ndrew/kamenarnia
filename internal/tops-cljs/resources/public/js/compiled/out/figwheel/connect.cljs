(ns figwheel.connect (:require [figwheel.client] [tops-cljs.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/tops-cljs.core.on-js-reload (apply js/tops-cljs.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'tops-cljs.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

