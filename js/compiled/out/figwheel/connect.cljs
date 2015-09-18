(ns figwheel.connect (:require [figwheel.client] [k.core] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :on-jsload (fn [& x] (if js/k.core.on-js-reload (apply js/k.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'k.core/on-js-reload' is missing"))), :websocket-url "ws://localhost:3449/figwheel-ws"})

