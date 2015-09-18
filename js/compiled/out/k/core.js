// Compiled by ClojureScript 1.7.122 {}
goog.provide('k.core');
goog.require('cljs.core');
goog.require('rum');
goog.require('clojure.string');
goog.require('k.namegen');
goog.require('k.calendar');
k.core.el = (function k$core$el(id){
return document.getElementById(id);
});
k.core.gogolfest_calendar = (function k$core$gogolfest_calendar(){
var mount_el = k.core.el.call(null,"gogol-calendar");
return k.calendar.gogol_calendar.call(null,mount_el);
});
window.onload = (function (){
k.core.gogolfest_calendar.call(null);

return k.calendar.load_dates.call(null);
});
k.core.on_js_reload = (function k$core$on_js_reload(){
return k.core.gogolfest_calendar.call(null);
});

//# sourceMappingURL=core.js.map?rel=1442571830083