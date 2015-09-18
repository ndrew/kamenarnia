// Compiled by ClojureScript 1.7.122 {}
goog.provide('k.calendar');
goog.require('cljs.core');
goog.require('rum');
goog.require('clojure.string');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
if(typeof k.calendar.events !== 'undefined'){
} else {
k.calendar.events = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
}
k.calendar.ordered_tags = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0410\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u0430 \u041C\u0443\u0437\u0438\u043A\u0430","\u0410\u043A\u0430\u0434\u0435\u043C\u0456\u0447\u043D\u0430 \u043C\u0443\u0437\u0438\u043A\u0430","\u041F\u0435\u0440\u0444\u043E\u0440\u043C\u0430\u043D\u0441","\u041A\u0456\u043D\u043E","\u0412\u0456\u0437\u0443\u0430\u043B\u044C\u043D\u0435 \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432\u043E","\u0422\u0435\u0430\u0442\u0440","\u041B\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430","\u0415\u043A\u043E-\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430","\u0422\u0430\u043D\u0435\u0446\u044C","\u0424\u0435\u0448\u043D-\u0430\u0440\u0442","\u0414\u0438\u0442\u044F\u0447\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430","\u041E\u0441\u0432\u0456\u0442\u043D\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430"], null);
k.calendar.locations = cljs.core.PersistentHashMap.fromArrays(["D.O.T \u043F\u0456\u0434\u0437\u0435\u043C\u043D\u0430 \u0441\u0446\u0435\u043D\u0430 (42 \u043F\u0430\u0432\u0456\u043B\u044C\u0439\u043E\u043D)","Fashion Art (10 \u041F\u0430\u0432\u0456\u043B\u044C\u0439\u043E\u043D)","\u0422\u0435\u0430\u0442\u0440\u0430\u043B\u044C\u043D\u0430 \u0432\u0435\u043B\u0438\u043A\u0430 \u0441\u0446\u0435\u043D\u0430 (17 \u041F\u0430\u0432\u0456\u043B\u044C\u0439\u043E\u043D)","\u0425\u043E\u0440\u0435\u043E\u0433\u0440\u0430\u0444\u0456\u044F (13 \u041F\u0430\u0432\u0456\u043B\u044C\u0439\u043E\u043D)","\u041B\u0435\u043A\u0442\u043E\u0440\u0456\u0439 (2 \u041F\u0430\u0432\u0456\u043B\u044C\u0439\u043E\u043D)","\u0414\u0438\u0442\u044F\u0447\u0438\u0439 \u043F\u0440\u043E\u0441\u0442\u0456\u0440 (11 \u041F\u0430\u0432\u0456\u043B\u044C\u0439\u043E\u043D)","\u0410\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u0430 \u043C\u0443\u0437\u0438\u0447\u043D\u0430 \u0441\u0446\u0435\u043D\u0430 (19 \u041F\u0430\u0432\u0456\u043B\u044C\u0439\u043E\u043D)","1 \u041F\u0430\u0432\u0456\u043B\u044C\u0439\u043E\u043D","\u041A\u0456\u043D\u043E\u0442\u0435\u0430\u0442\u0440 (6 \u041F\u0430\u0432\u0456\u043B\u044C\u0439\u043E\u043D)","\u0412\u0456\u0437\u0443\u0430\u043B\u044C\u043D\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430 (21 \u043F\u0430\u0432\u0456\u043B\u044C\u0439\u043E\u043D)","DIYA (\u041A\u0456\u043D\u043E\u0441\u0442\u0443\u0434\u0456\u044F \u0456\u043C\u0435\u043D\u0456 \u0414\u043E\u0432\u0436\u0435\u043D\u043A\u0430)","\u041B\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u0438\u0439 \u043F\u0440\u043E\u0441\u0442\u0456\u0440 (38 \u041F\u0430\u0432\u0456\u043B\u044C\u0439\u043E\u043D)","\u0426\u0421\u041C \u0414\u0410\u0425","\u0415\u043A\u043E-\u043F\u0440\u043E\u0441\u0442\u0456\u0440 \"\u0411\u0435\u0440\u0456\u0437\u043A\u0438\"","Totem Art Space (\u0414\u0435\u0433\u0442\u044F\u0440\u0456\u0432\u0441\u044C\u043A\u0430 8\u0410)","\u0412\u0435\u043B\u0438\u043A\u0430 \u0421\u0446\u0435\u043D\u0430-1 (9 \u041F\u0430\u0432\u0456\u043B\u044C\u0439\u043E\u043D)"],["pavilion42","pavilion10","pavilion17","pavilion13","pavilion2","pavilion11","pavilion19","pavilion1","pavilion6","pavilion21","","pavilion38","","berizky","","pavilion9"]);
k.calendar.read_transit = (function k$calendar$read_transit(s){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
});
k.calendar.ajax = (function k$calendar$ajax(var_args){
var args__17555__auto__ = [];
var len__17548__auto___34979 = arguments.length;
var i__17549__auto___34980 = (0);
while(true){
if((i__17549__auto___34980 < len__17548__auto___34979)){
args__17555__auto__.push((arguments[i__17549__auto___34980]));

var G__34981 = (i__17549__auto___34980 + (1));
i__17549__auto___34980 = G__34981;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((2) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((2)),(0))):null);
return k.calendar.ajax.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17556__auto__);
});

k.calendar.ajax.cljs$core$IFn$_invoke$arity$variadic = (function (url,callback,p__34977){
var vec__34978 = p__34977;
var method = cljs.core.nth.call(null,vec__34978,(0),null);
return goog.net.XhrIo.send(url,((function (vec__34978,method){
return (function (reply){
var body = reply.target.getResponseText();
var res = k.calendar.read_transit.call(null,body);
if(cljs.core.truth_(callback)){
return setTimeout(((function (body,res,vec__34978,method){
return (function (){
return callback.call(null,res);
});})(body,res,vec__34978,method))
,(0));
} else {
return null;
}
});})(vec__34978,method))
,(function (){var or__16490__auto__ = method;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return "GET";
}
})());
});

k.calendar.ajax.cljs$lang$maxFixedArity = (2);

k.calendar.ajax.cljs$lang$applyTo = (function (seq34974){
var G__34975 = cljs.core.first.call(null,seq34974);
var seq34974__$1 = cljs.core.next.call(null,seq34974);
var G__34976 = cljs.core.first.call(null,seq34974__$1);
var seq34974__$2 = cljs.core.next.call(null,seq34974__$1);
return k.calendar.ajax.cljs$core$IFn$_invoke$arity$variadic(G__34975,G__34976,seq34974__$2);
});
k.calendar.load_jsons = (function k$calendar$load_jsons(state){
var r = cljs.core.range.call(null,(17),(28));
var seq__34986 = cljs.core.seq.call(null,r);
var chunk__34987 = null;
var count__34988 = (0);
var i__34989 = (0);
while(true){
if((i__34989 < count__34988)){
var i = cljs.core._nth.call(null,chunk__34987,i__34989);
k.calendar.ajax.call(null,[cljs.core.str("/"),cljs.core.str(i),cljs.core.str(".json")].join(''),((function (seq__34986,chunk__34987,count__34988,i__34989,i,r){
return (function (data){
return cljs.core.swap_BANG_.call(null,state,cljs.core.merge,data);
});})(seq__34986,chunk__34987,count__34988,i__34989,i,r))
);

var G__34990 = seq__34986;
var G__34991 = chunk__34987;
var G__34992 = count__34988;
var G__34993 = (i__34989 + (1));
seq__34986 = G__34990;
chunk__34987 = G__34991;
count__34988 = G__34992;
i__34989 = G__34993;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34986);
if(temp__4425__auto__){
var seq__34986__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34986__$1)){
var c__17293__auto__ = cljs.core.chunk_first.call(null,seq__34986__$1);
var G__34994 = cljs.core.chunk_rest.call(null,seq__34986__$1);
var G__34995 = c__17293__auto__;
var G__34996 = cljs.core.count.call(null,c__17293__auto__);
var G__34997 = (0);
seq__34986 = G__34994;
chunk__34987 = G__34995;
count__34988 = G__34996;
i__34989 = G__34997;
continue;
} else {
var i = cljs.core.first.call(null,seq__34986__$1);
k.calendar.ajax.call(null,[cljs.core.str("/"),cljs.core.str(i),cljs.core.str(".json")].join(''),((function (seq__34986,chunk__34987,count__34988,i__34989,i,seq__34986__$1,temp__4425__auto__,r){
return (function (data){
return cljs.core.swap_BANG_.call(null,state,cljs.core.merge,data);
});})(seq__34986,chunk__34987,count__34988,i__34989,i,seq__34986__$1,temp__4425__auto__,r))
);

var G__34998 = cljs.core.next.call(null,seq__34986__$1);
var G__34999 = null;
var G__35000 = (0);
var G__35001 = (0);
seq__34986 = G__34998;
chunk__34987 = G__34999;
count__34988 = G__35000;
i__34989 = G__35001;
continue;
}
} else {
return null;
}
}
break;
}
});
k.calendar.load_dates = (function k$calendar$load_dates(){
return k.calendar.ajax.call(null,"gogolfest.json",(function (data){
return cljs.core.swap_BANG_.call(null,k.calendar.events,cljs.core.merge,data);
}));
});
k.calendar.group_events = (function k$calendar$group_events(events){
return cljs.core.reduce.call(null,(function (a,data){
var map__35004 = data;
var map__35004__$1 = ((((!((map__35004 == null)))?((((map__35004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35004):map__35004);
var tag = cljs.core.get.call(null,map__35004__$1,"tag");
var t = cljs.core.get.call(null,map__35004__$1,"time");
var groupped = (function (){var temp__4423__auto__ = cljs.core.get.call(null,a,tag);
if(cljs.core.truth_(temp__4423__auto__)){
var items = temp__4423__auto__;
return items;
} else {
return cljs.core.sorted_map.call(null);
}
})();
return cljs.core.assoc.call(null,a,tag,cljs.core.assoc.call(null,groupped,t,(function (){var temp__4423__auto__ = cljs.core.get.call(null,groupped,t);
if(cljs.core.truth_(temp__4423__auto__)){
var g = temp__4423__auto__;
return cljs.core.conj.call(null,g,data);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null);
}
})()));
}),cljs.core.PersistentArrayMap.EMPTY,events);
});
k.calendar.event_cmp = (function (){var render_mixin__24152__auto__ = rum.render__GT_mixin.call(null,(function (t,event,class$){
return sablono.interpreter.interpret.call(null,(function (){var map__35006 = event;
var map__35006__$1 = ((((!((map__35006 == null)))?((((map__35006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35006):map__35006);
var title = cljs.core.get.call(null,map__35006__$1,"title");
var place = cljs.core.get.call(null,map__35006__$1,"place");
var url = cljs.core.get.call(null,map__35006__$1,"url");
cljs.core.println.call(null,cljs.core.pr_str.call(null,place));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(cljs.core.get.call(null,k.calendar.locations,place))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("//gogolfest.org.ua"),cljs.core.str(url)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"link"], null),"\u2192"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"place"], null),place], null)], null);
})());
}));
var class__24153__auto__ = rum.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__24152__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.reactive], null)),"event-cmp");
var ctor__24154__auto__ = ((function (render_mixin__24152__auto__,class__24153__auto__){
return (function() { 
var G__35008__delegate = function (args__24155__auto__){
var state__24156__auto__ = rum.args__GT_state.call(null,args__24155__auto__);
return rum.element.call(null,class__24153__auto__,state__24156__auto__,null);
};
var G__35008 = function (var_args){
var args__24155__auto__ = null;
if (arguments.length > 0) {
var G__35009__i = 0, G__35009__a = new Array(arguments.length -  0);
while (G__35009__i < G__35009__a.length) {G__35009__a[G__35009__i] = arguments[G__35009__i + 0]; ++G__35009__i;}
  args__24155__auto__ = new cljs.core.IndexedSeq(G__35009__a,0);
} 
return G__35008__delegate.call(this,args__24155__auto__);};
G__35008.cljs$lang$maxFixedArity = 0;
G__35008.cljs$lang$applyTo = (function (arglist__35010){
var args__24155__auto__ = cljs.core.seq(arglist__35010);
return G__35008__delegate(args__24155__auto__);
});
G__35008.cljs$core$IFn$_invoke$arity$variadic = G__35008__delegate;
return G__35008;
})()
;})(render_mixin__24152__auto__,class__24153__auto__))
;
return cljs.core.with_meta.call(null,ctor__24154__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__24153__auto__], null));
})();
k.calendar.events_cmp = (function (){var render_mixin__24152__auto__ = rum.render__GT_mixin.call(null,(function (tag,data){
return sablono.interpreter.interpret.call(null,((!(cljs.core.empty_QMARK_.call(null,data)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"artdir"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"genre"], null),tag], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group"], null)], null),cljs.core.map.call(null,(function (p__35011){
var vec__35012 = p__35011;
var t = cljs.core.nth.call(null,vec__35012,(0),null);
var events = cljs.core.nth.call(null,vec__35012,(1),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-0 time"], null),((cljs.core._EQ_.call(null,"",t))?"\u0432\u0435\u0441\u044C \u0434\u0435\u043D\u044C":t)], null)], null),cljs.core.map.call(null,((function (vec__35012,t,events){
return (function (a){
return rum.with_key.call(null,k.calendar.event_cmp.call(null,t,a,[cljs.core.str("col-"),cljs.core.str(cljs.core.count.call(null,events))].join('')),[cljs.core.str(t),cljs.core.str(a)].join(''));
});})(vec__35012,t,events))
,events));
}),data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"clearfix"], null)], null)], null):null));
}));
var class__24153__auto__ = rum.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__24152__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.reactive], null)),"events-cmp");
var ctor__24154__auto__ = ((function (render_mixin__24152__auto__,class__24153__auto__){
return (function() { 
var G__35013__delegate = function (args__24155__auto__){
var state__24156__auto__ = rum.args__GT_state.call(null,args__24155__auto__);
return rum.element.call(null,class__24153__auto__,state__24156__auto__,null);
};
var G__35013 = function (var_args){
var args__24155__auto__ = null;
if (arguments.length > 0) {
var G__35014__i = 0, G__35014__a = new Array(arguments.length -  0);
while (G__35014__i < G__35014__a.length) {G__35014__a[G__35014__i] = arguments[G__35014__i + 0]; ++G__35014__i;}
  args__24155__auto__ = new cljs.core.IndexedSeq(G__35014__a,0);
} 
return G__35013__delegate.call(this,args__24155__auto__);};
G__35013.cljs$lang$maxFixedArity = 0;
G__35013.cljs$lang$applyTo = (function (arglist__35015){
var args__24155__auto__ = cljs.core.seq(arglist__35015);
return G__35013__delegate(args__24155__auto__);
});
G__35013.cljs$core$IFn$_invoke$arity$variadic = G__35013__delegate;
return G__35013;
})()
;})(render_mixin__24152__auto__,class__24153__auto__))
;
return cljs.core.with_meta.call(null,ctor__24154__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__24153__auto__], null));
})();
if(typeof k.calendar.settings !== 'undefined'){
} else {
k.calendar.settings = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-map","show-map",1337390566),false], null));
}
k.calendar.map_cmp = (function (){var render_mixin__24152__auto__ = rum.render__GT_mixin.call(null,(function (state){
return sablono.interpreter.interpret.call(null,(function (){var show = new cljs.core.Keyword(null,"show-map","show-map",1337390566).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"id","id",-1388402092),"map-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show){
return (function (e){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"show-map","show-map",1337390566),cljs.core.not.call(null,show));

if(cljs.core.truth_(show)){
} else {
setTimeout(((function (show){
return (function (){
var el = document.getElementById("map");
return window.scroll(document.body,(el["offsetTop"]),(0));
});})(show))
,(500));
}

return e.preventDefault();
});})(show))
], null),(cljs.core.truth_(show)?"\u0421\u0445\u043E\u0432\u0430\u0442\u0438 \u0441\u0445\u0435\u043C\u0443":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0441\u0445\u0435\u043C\u0443")], null)], null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(cljs.core.truth_(show)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"map.png",new cljs.core.Keyword(null,"class","class",-2030961996),"map",new cljs.core.Keyword(null,"id","id",-1388402092),"map"], null)], null):null)));
})());
}));
var class__24153__auto__ = rum.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__24152__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.reactive], null)),"map-cmp");
var ctor__24154__auto__ = ((function (render_mixin__24152__auto__,class__24153__auto__){
return (function() { 
var G__35016__delegate = function (args__24155__auto__){
var state__24156__auto__ = rum.args__GT_state.call(null,args__24155__auto__);
return rum.element.call(null,class__24153__auto__,state__24156__auto__,null);
};
var G__35016 = function (var_args){
var args__24155__auto__ = null;
if (arguments.length > 0) {
var G__35017__i = 0, G__35017__a = new Array(arguments.length -  0);
while (G__35017__i < G__35017__a.length) {G__35017__a[G__35017__i] = arguments[G__35017__i + 0]; ++G__35017__i;}
  args__24155__auto__ = new cljs.core.IndexedSeq(G__35017__a,0);
} 
return G__35016__delegate.call(this,args__24155__auto__);};
G__35016.cljs$lang$maxFixedArity = 0;
G__35016.cljs$lang$applyTo = (function (arglist__35018){
var args__24155__auto__ = cljs.core.seq(arglist__35018);
return G__35016__delegate(args__24155__auto__);
});
G__35016.cljs$core$IFn$_invoke$arity$variadic = G__35016__delegate;
return G__35016;
})()
;})(render_mixin__24152__auto__,class__24153__auto__))
;
return cljs.core.with_meta.call(null,ctor__24154__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__24153__auto__], null));
})();
k.calendar.format_date = (function k$calendar$format_date(d){
var dmap = new cljs.core.PersistentArrayMap(null, 7, [(1),"\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A",(2),"\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A",(3),"\u0441\u0435\u0440\u0435\u0434\u0430",(4),"\u0447\u0435\u0442\u0432\u0435\u0440",(5),"\u043F'\u044F\u0442\u043D\u0438\u0446\u044F",(6),"\u0441\u0443\u0431\u043E\u0442\u0430",(0),"\u043D\u0435\u0434\u0456\u043B\u044F"], null);
var date = d.getDate();
var day = d.getDay();
var month = "\u0432\u0435\u0440\u0435\u0441\u043D\u044F";
return [cljs.core.str(date),cljs.core.str(" "),cljs.core.str(month),cljs.core.str(" ("),cljs.core.str(cljs.core.get.call(null,dmap,day)),cljs.core.str(")")].join('');
});
k.calendar.calendar_cmp = (function (){var render_mixin__24152__auto__ = rum.render__GT_mixin.call(null,(function (state){
return sablono.interpreter.interpret.call(null,(function (){var events = cljs.core.deref.call(null,state);
var today = (new Date());
var buffer = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),k.calendar.map_cmp.call(null,k.calendar.settings),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.call(null,((function (events,today,buffer){
return (function (p__35019){
var vec__35020 = p__35019;
var k__$1 = cljs.core.nth.call(null,vec__35020,(0),null);
var v = cljs.core.nth.call(null,vec__35020,(1),null);
if((k__$1.getDate() >= today.getDate())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"day"], null),k.calendar.format_date.call(null,k__$1)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var groupped = k.calendar.group_events.call(null,v);
return cljs.core.map.call(null,((function (groupped,vec__35020,k__$1,v,events,today,buffer){
return (function (tag){
return rum.with_key.call(null,k.calendar.events_cmp.call(null,tag,cljs.core.get.call(null,groupped,tag)),[cljs.core.str(tag),cljs.core.str(" "),cljs.core.str(k__$1)].join(''));
});})(groupped,vec__35020,k__$1,v,events,today,buffer))
,k.calendar.ordered_tags);
})())], null);
} else {
return null;
}
});})(events,today,buffer))
,events))], null);
})());
}));
var class__24153__auto__ = rum.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__24152__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.reactive], null)),"calendar-cmp");
var ctor__24154__auto__ = ((function (render_mixin__24152__auto__,class__24153__auto__){
return (function() { 
var G__35021__delegate = function (args__24155__auto__){
var state__24156__auto__ = rum.args__GT_state.call(null,args__24155__auto__);
return rum.element.call(null,class__24153__auto__,state__24156__auto__,null);
};
var G__35021 = function (var_args){
var args__24155__auto__ = null;
if (arguments.length > 0) {
var G__35022__i = 0, G__35022__a = new Array(arguments.length -  0);
while (G__35022__i < G__35022__a.length) {G__35022__a[G__35022__i] = arguments[G__35022__i + 0]; ++G__35022__i;}
  args__24155__auto__ = new cljs.core.IndexedSeq(G__35022__a,0);
} 
return G__35021__delegate.call(this,args__24155__auto__);};
G__35021.cljs$lang$maxFixedArity = 0;
G__35021.cljs$lang$applyTo = (function (arglist__35023){
var args__24155__auto__ = cljs.core.seq(arglist__35023);
return G__35021__delegate(args__24155__auto__);
});
G__35021.cljs$core$IFn$_invoke$arity$variadic = G__35021__delegate;
return G__35021;
})()
;})(render_mixin__24152__auto__,class__24153__auto__))
;
return cljs.core.with_meta.call(null,ctor__24154__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__24153__auto__], null));
})();
k.calendar.gogol_calendar = (function k$calendar$gogol_calendar(el){
rum.mount.call(null,k.calendar.calendar_cmp.call(null,k.calendar.events),el);

cljs.core.add_watch.call(null,k.calendar.events,new cljs.core.Keyword(null,"event","event",301435442),(function (_,___$1,___$2,new_val){
return rum.mount.call(null,k.calendar.calendar_cmp.call(null,k.calendar.events),el);
}));

return cljs.core.add_watch.call(null,k.calendar.settings,new cljs.core.Keyword(null,"event","event",301435442),(function (_,___$1,___$2,new_val){
return rum.mount.call(null,k.calendar.calendar_cmp.call(null,k.calendar.events),el);
}));
});

//# sourceMappingURL=calendar.js.map?rel=1442594124412