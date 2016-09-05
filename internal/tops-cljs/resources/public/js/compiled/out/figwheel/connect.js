// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('tops_cljs.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19410__delegate = function (x){
if(cljs.core.truth_(tops_cljs.core.on_js_reload)){
return cljs.core.apply.call(null,tops_cljs.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'tops-cljs.core/on-js-reload' is missing");
}
};
var G__19410 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19411__i = 0, G__19411__a = new Array(arguments.length -  0);
while (G__19411__i < G__19411__a.length) {G__19411__a[G__19411__i] = arguments[G__19411__i + 0]; ++G__19411__i;}
  x = new cljs.core.IndexedSeq(G__19411__a,0);
} 
return G__19410__delegate.call(this,x);};
G__19410.cljs$lang$maxFixedArity = 0;
G__19410.cljs$lang$applyTo = (function (arglist__19412){
var x = cljs.core.seq(arglist__19412);
return G__19410__delegate(x);
});
G__19410.cljs$core$IFn$_invoke$arity$variadic = G__19410__delegate;
return G__19410;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1460999026442