// Compiled by ClojureScript 1.7.170 {}
goog.provide('tops_cljs.core');
goog.require('cljs.core');
goog.require('rum.core');
tops_cljs.core.el = (function tops_cljs$core$el(id){
return document.getElementById(id);
});
tops_cljs.core.q = (function tops_cljs$core$q(selector){
return document.querySelectorAll(selector);
});
tops_cljs.core.data = (function tops_cljs$core$data(el,key){
return el.getAttribute([cljs.core.str("data-"),cljs.core.str(key)].join(''));
});
tops_cljs.core.domready = (function tops_cljs$core$domready(handler){
return window.addEventListener("DOMContentLoaded",handler);
});
cljs.core.enable_console_print_BANG_.call(null);
if(typeof tops_cljs.core.app_state !== 'undefined'){
} else {
tops_cljs.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
tops_cljs.core.bandcamp = (function (){var render_mixin__19371__auto__ = rum.core.render_state__GT_mixin.call(null,(function (p__19520,p__19521){
var map__19522 = p__19520;
var map__19522__$1 = ((((!((map__19522 == null)))?((((map__19522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19522):map__19522);
var state = cljs.core.get.call(null,map__19522__$1,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
var map__19523 = p__19521;
var map__19523__$1 = ((((!((map__19523 == null)))?((((map__19523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19523):map__19523);
var href = cljs.core.get.call(null,map__19523__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var src = cljs.core.get.call(null,map__19523__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var h = cljs.core.get.call(null,map__19523__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var w = cljs.core.get.call(null,map__19523__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var preview = cljs.core.get.call(null,map__19523__$1,new cljs.core.Keyword(null,"preview","preview",451279890));
if(cljs.core.truth_(cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206)))){
return React.createElement("a",{"href": href},React.createElement("iframe",{"src": src, "style": {"border": (0), "width": w, "height": h}}));
} else {
return React.createElement("div",{"style": {"width": w, "height": (function (){var x__17164__auto__ = h;
var y__17165__auto__ = w;
return ((x__17164__auto__ < y__17165__auto__) ? x__17164__auto__ : y__17165__auto__);
})(), "background": [cljs.core.str("url("),cljs.core.str(preview),cljs.core.str(")")].join(''), "backgroundRepeat": "no-repeat", "backgroundSize": "contain", "outline": "1px solid red", "margin": "0 auto 2.5rem auto"}},React.createElement("svg",{"style": {"width": "100%", "height": "100%"}, "viewBox": "0 0 36 36", "onClick": ((function (map__19522,map__19522__$1,state,map__19523,map__19523__$1,href,src,h,w,preview){
return (function (_){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),true);
});})(map__19522,map__19522__$1,state,map__19523,map__19523__$1,href,src,h,w,preview))
},React.createElement("path",{"d": "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28", "className": "play-icon"})));
}
}));
var class__19372__auto__ = rum.core.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__19371__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.local.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loaded?","loaded?",-1108015206),false], null))], null)),"bandcamp");
var ctor__19373__auto__ = ((function (render_mixin__19371__auto__,class__19372__auto__){
return (function() { 
var G__19528__delegate = function (args__19374__auto__){
var state__19375__auto__ = rum.core.args__GT_state.call(null,args__19374__auto__);
return rum.core.element.call(null,class__19372__auto__,state__19375__auto__,null);
};
var G__19528 = function (var_args){
var args__19374__auto__ = null;
if (arguments.length > 0) {
var G__19529__i = 0, G__19529__a = new Array(arguments.length -  0);
while (G__19529__i < G__19529__a.length) {G__19529__a[G__19529__i] = arguments[G__19529__i + 0]; ++G__19529__i;}
  args__19374__auto__ = new cljs.core.IndexedSeq(G__19529__a,0);
} 
return G__19528__delegate.call(this,args__19374__auto__);};
G__19528.cljs$lang$maxFixedArity = 0;
G__19528.cljs$lang$applyTo = (function (arglist__19530){
var args__19374__auto__ = cljs.core.seq(arglist__19530);
return G__19528__delegate(args__19374__auto__);
});
G__19528.cljs$core$IFn$_invoke$arity$variadic = G__19528__delegate;
return G__19528;
})()
;})(render_mixin__19371__auto__,class__19372__auto__))
;
return cljs.core.with_meta.call(null,ctor__19373__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__19372__auto__], null));
})();
tops_cljs.core.lazyload_bandcamp = (function tops_cljs$core$lazyload_bandcamp(){
var els = tops_cljs.core.q.call(null,".bandcamp");
var seq__19536 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (els){
return (function (p1__19531_SHARP_){
return els.item(p1__19531_SHARP_);
});})(els))
,cljs.core.range.call(null,els.length)));
var chunk__19537 = null;
var count__19538 = (0);
var i__19539 = (0);
while(true){
if((i__19539 < count__19538)){
var el = cljs.core._nth.call(null,chunk__19537,i__19539);
rum.core.mount.call(null,tops_cljs.core.bandcamp.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"href","href",-793805698),tops_cljs.core.data.call(null,el,"href"),new cljs.core.Keyword(null,"src","src",-1651076051),tops_cljs.core.data.call(null,el,"src"),new cljs.core.Keyword(null,"width","width",-384071477),tops_cljs.core.data.call(null,el,"width"),new cljs.core.Keyword(null,"height","height",1025178622),tops_cljs.core.data.call(null,el,"height"),new cljs.core.Keyword(null,"preview","preview",451279890),tops_cljs.core.data.call(null,el,"preview")], null)),el);

var G__19540 = seq__19536;
var G__19541 = chunk__19537;
var G__19542 = count__19538;
var G__19543 = (i__19539 + (1));
seq__19536 = G__19540;
chunk__19537 = G__19541;
count__19538 = G__19542;
i__19539 = G__19543;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19536);
if(temp__4425__auto__){
var seq__19536__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19536__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__19536__$1);
var G__19544 = cljs.core.chunk_rest.call(null,seq__19536__$1);
var G__19545 = c__17629__auto__;
var G__19546 = cljs.core.count.call(null,c__17629__auto__);
var G__19547 = (0);
seq__19536 = G__19544;
chunk__19537 = G__19545;
count__19538 = G__19546;
i__19539 = G__19547;
continue;
} else {
var el = cljs.core.first.call(null,seq__19536__$1);
rum.core.mount.call(null,tops_cljs.core.bandcamp.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"href","href",-793805698),tops_cljs.core.data.call(null,el,"href"),new cljs.core.Keyword(null,"src","src",-1651076051),tops_cljs.core.data.call(null,el,"src"),new cljs.core.Keyword(null,"width","width",-384071477),tops_cljs.core.data.call(null,el,"width"),new cljs.core.Keyword(null,"height","height",1025178622),tops_cljs.core.data.call(null,el,"height"),new cljs.core.Keyword(null,"preview","preview",451279890),tops_cljs.core.data.call(null,el,"preview")], null)),el);

var G__19548 = cljs.core.next.call(null,seq__19536__$1);
var G__19549 = null;
var G__19550 = (0);
var G__19551 = (0);
seq__19536 = G__19548;
chunk__19537 = G__19549;
count__19538 = G__19550;
i__19539 = G__19551;
continue;
}
} else {
return null;
}
}
break;
}
});
tops_cljs.core.domready.call(null,(function (){
return null;
}));
tops_cljs.core.on_js_reload = (function tops_cljs$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1459435486421