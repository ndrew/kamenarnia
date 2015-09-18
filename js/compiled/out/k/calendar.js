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
k.calendar.locations = new cljs.core.PersistentArrayMap(null, 4, ["D.O.T \u043F\u0456\u0434\u0437\u0435\u043C\u043D\u0430 \u0441\u0446\u0435\u043D\u0430 (42 \u043F\u0430\u0432\u0456\u043B\u044C\u0439\u043E\u043D)","pavilion42","\u0410\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u0430 \u043C\u0443\u0437\u0438\u0447\u043D\u0430 \u0441\u0446\u0435\u043D\u0430 (19 \u041F\u0430\u0432\u0456\u043B\u044C\u0439\u043E\u043D)","pavilion19","1 \u041F\u0430\u0432\u0456\u043B\u044C\u0439\u043E\u043D","pavilion1","\u0415\u043A\u043E-\u043F\u0440\u043E\u0441\u0442\u0456\u0440 \"\u0411\u0435\u0440\u0456\u0437\u043A\u0438\"","berizky"], null);
k.calendar.read_transit = (function k$calendar$read_transit(s){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
});
k.calendar.ajax = (function k$calendar$ajax(var_args){
var args__17556__auto__ = [];
var len__17549__auto___20288 = arguments.length;
var i__17550__auto___20289 = (0);
while(true){
if((i__17550__auto___20289 < len__17549__auto___20288)){
args__17556__auto__.push((arguments[i__17550__auto___20289]));

var G__20290 = (i__17550__auto___20289 + (1));
i__17550__auto___20289 = G__20290;
continue;
} else {
}
break;
}

var argseq__17557__auto__ = ((((2) < args__17556__auto__.length))?(new cljs.core.IndexedSeq(args__17556__auto__.slice((2)),(0))):null);
return k.calendar.ajax.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17557__auto__);
});

k.calendar.ajax.cljs$core$IFn$_invoke$arity$variadic = (function (url,callback,p__20286){
var vec__20287 = p__20286;
var method = cljs.core.nth.call(null,vec__20287,(0),null);
return goog.net.XhrIo.send(url,((function (vec__20287,method){
return (function (reply){
var body = reply.target.getResponseText();
var res = k.calendar.read_transit.call(null,body);
if(cljs.core.truth_(callback)){
return setTimeout(((function (body,res,vec__20287,method){
return (function (){
return callback.call(null,res);
});})(body,res,vec__20287,method))
,(0));
} else {
return null;
}
});})(vec__20287,method))
,(function (){var or__16490__auto__ = method;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return "GET";
}
})());
});

k.calendar.ajax.cljs$lang$maxFixedArity = (2);

k.calendar.ajax.cljs$lang$applyTo = (function (seq20283){
var G__20284 = cljs.core.first.call(null,seq20283);
var seq20283__$1 = cljs.core.next.call(null,seq20283);
var G__20285 = cljs.core.first.call(null,seq20283__$1);
var seq20283__$2 = cljs.core.next.call(null,seq20283__$1);
return k.calendar.ajax.cljs$core$IFn$_invoke$arity$variadic(G__20284,G__20285,seq20283__$2);
});
k.calendar.load_jsons = (function k$calendar$load_jsons(state){
var r = cljs.core.range.call(null,(17),(28));
var seq__20295 = cljs.core.seq.call(null,r);
var chunk__20296 = null;
var count__20297 = (0);
var i__20298 = (0);
while(true){
if((i__20298 < count__20297)){
var i = cljs.core._nth.call(null,chunk__20296,i__20298);
k.calendar.ajax.call(null,[cljs.core.str("/"),cljs.core.str(i),cljs.core.str(".json")].join(''),((function (seq__20295,chunk__20296,count__20297,i__20298,i,r){
return (function (data){
return cljs.core.swap_BANG_.call(null,state,cljs.core.merge,data);
});})(seq__20295,chunk__20296,count__20297,i__20298,i,r))
);

var G__20299 = seq__20295;
var G__20300 = chunk__20296;
var G__20301 = count__20297;
var G__20302 = (i__20298 + (1));
seq__20295 = G__20299;
chunk__20296 = G__20300;
count__20297 = G__20301;
i__20298 = G__20302;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20295);
if(temp__4425__auto__){
var seq__20295__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20295__$1)){
var c__17294__auto__ = cljs.core.chunk_first.call(null,seq__20295__$1);
var G__20303 = cljs.core.chunk_rest.call(null,seq__20295__$1);
var G__20304 = c__17294__auto__;
var G__20305 = cljs.core.count.call(null,c__17294__auto__);
var G__20306 = (0);
seq__20295 = G__20303;
chunk__20296 = G__20304;
count__20297 = G__20305;
i__20298 = G__20306;
continue;
} else {
var i = cljs.core.first.call(null,seq__20295__$1);
k.calendar.ajax.call(null,[cljs.core.str("/"),cljs.core.str(i),cljs.core.str(".json")].join(''),((function (seq__20295,chunk__20296,count__20297,i__20298,i,seq__20295__$1,temp__4425__auto__,r){
return (function (data){
return cljs.core.swap_BANG_.call(null,state,cljs.core.merge,data);
});})(seq__20295,chunk__20296,count__20297,i__20298,i,seq__20295__$1,temp__4425__auto__,r))
);

var G__20307 = cljs.core.next.call(null,seq__20295__$1);
var G__20308 = null;
var G__20309 = (0);
var G__20310 = (0);
seq__20295 = G__20307;
chunk__20296 = G__20308;
count__20297 = G__20309;
i__20298 = G__20310;
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
var map__20313 = data;
var map__20313__$1 = ((((!((map__20313 == null)))?((((map__20313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20313):map__20313);
var tag = cljs.core.get.call(null,map__20313__$1,"tag");
var t = cljs.core.get.call(null,map__20313__$1,"time");
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
k.calendar.event_cmp = (function (){var render_mixin__20036__auto__ = rum.render__GT_mixin.call(null,(function (t,event,class$){
return sablono.interpreter.interpret.call(null,(function (){var map__20315 = event;
var map__20315__$1 = ((((!((map__20315 == null)))?((((map__20315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20315):map__20315);
var title = cljs.core.get.call(null,map__20315__$1,"title");
var place = cljs.core.get.call(null,map__20315__$1,"place");
var url = cljs.core.get.call(null,map__20315__$1,"url");
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(cljs.core.get.call(null,k.calendar.locations,place))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("//gogolfest.org.ua"),cljs.core.str(url)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"link"], null),"\u2192"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"place"], null),place], null)], null);
})());
}));
var class__20037__auto__ = rum.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__20036__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.reactive], null)),"event-cmp");
var ctor__20038__auto__ = ((function (render_mixin__20036__auto__,class__20037__auto__){
return (function() { 
var G__20317__delegate = function (args__20039__auto__){
var state__20040__auto__ = rum.args__GT_state.call(null,args__20039__auto__);
return rum.element.call(null,class__20037__auto__,state__20040__auto__,null);
};
var G__20317 = function (var_args){
var args__20039__auto__ = null;
if (arguments.length > 0) {
var G__20318__i = 0, G__20318__a = new Array(arguments.length -  0);
while (G__20318__i < G__20318__a.length) {G__20318__a[G__20318__i] = arguments[G__20318__i + 0]; ++G__20318__i;}
  args__20039__auto__ = new cljs.core.IndexedSeq(G__20318__a,0);
} 
return G__20317__delegate.call(this,args__20039__auto__);};
G__20317.cljs$lang$maxFixedArity = 0;
G__20317.cljs$lang$applyTo = (function (arglist__20319){
var args__20039__auto__ = cljs.core.seq(arglist__20319);
return G__20317__delegate(args__20039__auto__);
});
G__20317.cljs$core$IFn$_invoke$arity$variadic = G__20317__delegate;
return G__20317;
})()
;})(render_mixin__20036__auto__,class__20037__auto__))
;
return cljs.core.with_meta.call(null,ctor__20038__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__20037__auto__], null));
})();
k.calendar.events_cmp = (function (){var render_mixin__20036__auto__ = rum.render__GT_mixin.call(null,(function (tag,data){
return sablono.interpreter.interpret.call(null,((!(cljs.core.empty_QMARK_.call(null,data)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"artdir"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"genre"], null),tag], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"group"], null)], null),cljs.core.map.call(null,(function (p__20320){
var vec__20321 = p__20320;
var t = cljs.core.nth.call(null,vec__20321,(0),null);
var events = cljs.core.nth.call(null,vec__20321,(1),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-0 time"], null),((cljs.core._EQ_.call(null,"",t))?"\u0432\u0435\u0441\u044C \u0434\u0435\u043D\u044C":t)], null)], null),cljs.core.map.call(null,((function (vec__20321,t,events){
return (function (a){
return rum.with_key.call(null,k.calendar.event_cmp.call(null,t,a,[cljs.core.str("col-"),cljs.core.str(cljs.core.count.call(null,events))].join('')),[cljs.core.str(t),cljs.core.str(a)].join(''));
});})(vec__20321,t,events))
,events));
}),data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"clearfix"], null)], null)], null):null));
}));
var class__20037__auto__ = rum.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__20036__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.reactive], null)),"events-cmp");
var ctor__20038__auto__ = ((function (render_mixin__20036__auto__,class__20037__auto__){
return (function() { 
var G__20322__delegate = function (args__20039__auto__){
var state__20040__auto__ = rum.args__GT_state.call(null,args__20039__auto__);
return rum.element.call(null,class__20037__auto__,state__20040__auto__,null);
};
var G__20322 = function (var_args){
var args__20039__auto__ = null;
if (arguments.length > 0) {
var G__20323__i = 0, G__20323__a = new Array(arguments.length -  0);
while (G__20323__i < G__20323__a.length) {G__20323__a[G__20323__i] = arguments[G__20323__i + 0]; ++G__20323__i;}
  args__20039__auto__ = new cljs.core.IndexedSeq(G__20323__a,0);
} 
return G__20322__delegate.call(this,args__20039__auto__);};
G__20322.cljs$lang$maxFixedArity = 0;
G__20322.cljs$lang$applyTo = (function (arglist__20324){
var args__20039__auto__ = cljs.core.seq(arglist__20324);
return G__20322__delegate(args__20039__auto__);
});
G__20322.cljs$core$IFn$_invoke$arity$variadic = G__20322__delegate;
return G__20322;
})()
;})(render_mixin__20036__auto__,class__20037__auto__))
;
return cljs.core.with_meta.call(null,ctor__20038__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__20037__auto__], null));
})();
k.calendar.map_cmp = (function (){var render_mixin__20036__auto__ = rum.render__GT_mixin.call(null,(function (){
return React.createElement("img",{"src": "map.png", "className": "map"});
}));
var class__20037__auto__ = rum.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__20036__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.reactive], null)),"map-cmp");
var ctor__20038__auto__ = ((function (render_mixin__20036__auto__,class__20037__auto__){
return (function() { 
var G__20327__delegate = function (args__20039__auto__){
var state__20040__auto__ = rum.args__GT_state.call(null,args__20039__auto__);
return rum.element.call(null,class__20037__auto__,state__20040__auto__,null);
};
var G__20327 = function (var_args){
var args__20039__auto__ = null;
if (arguments.length > 0) {
var G__20328__i = 0, G__20328__a = new Array(arguments.length -  0);
while (G__20328__i < G__20328__a.length) {G__20328__a[G__20328__i] = arguments[G__20328__i + 0]; ++G__20328__i;}
  args__20039__auto__ = new cljs.core.IndexedSeq(G__20328__a,0);
} 
return G__20327__delegate.call(this,args__20039__auto__);};
G__20327.cljs$lang$maxFixedArity = 0;
G__20327.cljs$lang$applyTo = (function (arglist__20329){
var args__20039__auto__ = cljs.core.seq(arglist__20329);
return G__20327__delegate(args__20039__auto__);
});
G__20327.cljs$core$IFn$_invoke$arity$variadic = G__20327__delegate;
return G__20327;
})()
;})(render_mixin__20036__auto__,class__20037__auto__))
;
return cljs.core.with_meta.call(null,ctor__20038__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__20037__auto__], null));
})();
k.calendar.format_date = (function k$calendar$format_date(d){
var dmap = new cljs.core.PersistentArrayMap(null, 7, [(1),"\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A",(2),"\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A",(3),"\u0441\u0435\u0440\u0435\u0434\u0430",(4),"\u0447\u0435\u0442\u0432\u0435\u0440",(5),"\u043F'\u044F\u0442\u043D\u0438\u0446\u044F",(6),"\u0441\u0443\u0431\u043E\u0442\u0430",(7),"\u043D\u0435\u0434\u0456\u043B\u044F"], null);
var date = d.getDate();
var day = d.getDay();
var month = "\u0432\u0435\u0440\u0435\u0441\u043D\u044F";
return [cljs.core.str(date),cljs.core.str(" "),cljs.core.str(month),cljs.core.str(" ("),cljs.core.str(cljs.core.get.call(null,dmap,day)),cljs.core.str(")")].join('');
});
k.calendar.calendar_cmp = (function (){var render_mixin__20036__auto__ = rum.render__GT_mixin.call(null,(function (state){
return sablono.interpreter.interpret.call(null,(function (){var events = cljs.core.deref.call(null,state);
var today = (new Date());
var buffer = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),k.calendar.map_cmp.call(null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.map.call(null,((function (events,today,buffer){
return (function (p__20330){
var vec__20331 = p__20330;
var k__$1 = cljs.core.nth.call(null,vec__20331,(0),null);
var v = cljs.core.nth.call(null,vec__20331,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"day"], null),k.calendar.format_date.call(null,k__$1)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),(function (){var groupped = k.calendar.group_events.call(null,v);
return cljs.core.map.call(null,((function (groupped,vec__20331,k__$1,v,events,today,buffer){
return (function (tag){
return rum.with_key.call(null,k.calendar.events_cmp.call(null,tag,cljs.core.get.call(null,groupped,tag)),[cljs.core.str(tag),cljs.core.str(" "),cljs.core.str(k__$1)].join(''));
});})(groupped,vec__20331,k__$1,v,events,today,buffer))
,k.calendar.ordered_tags);
})())], null);
});})(events,today,buffer))
,events))], null);
})());
}));
var class__20037__auto__ = rum.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__20036__auto__], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.reactive], null)),"calendar-cmp");
var ctor__20038__auto__ = ((function (render_mixin__20036__auto__,class__20037__auto__){
return (function() { 
var G__20332__delegate = function (args__20039__auto__){
var state__20040__auto__ = rum.args__GT_state.call(null,args__20039__auto__);
return rum.element.call(null,class__20037__auto__,state__20040__auto__,null);
};
var G__20332 = function (var_args){
var args__20039__auto__ = null;
if (arguments.length > 0) {
var G__20333__i = 0, G__20333__a = new Array(arguments.length -  0);
while (G__20333__i < G__20333__a.length) {G__20333__a[G__20333__i] = arguments[G__20333__i + 0]; ++G__20333__i;}
  args__20039__auto__ = new cljs.core.IndexedSeq(G__20333__a,0);
} 
return G__20332__delegate.call(this,args__20039__auto__);};
G__20332.cljs$lang$maxFixedArity = 0;
G__20332.cljs$lang$applyTo = (function (arglist__20334){
var args__20039__auto__ = cljs.core.seq(arglist__20334);
return G__20332__delegate(args__20039__auto__);
});
G__20332.cljs$core$IFn$_invoke$arity$variadic = G__20332__delegate;
return G__20332;
})()
;})(render_mixin__20036__auto__,class__20037__auto__))
;
return cljs.core.with_meta.call(null,ctor__20038__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__20037__auto__], null));
})();
k.calendar.gogol_calendar = (function k$calendar$gogol_calendar(el){
rum.mount.call(null,k.calendar.calendar_cmp.call(null,k.calendar.events),el);

return cljs.core.add_watch.call(null,k.calendar.events,new cljs.core.Keyword(null,"event","event",301435442),(function (_,___$1,___$2,new_val){
return rum.mount.call(null,k.calendar.calendar_cmp.call(null,k.calendar.events),el);
}));
});

//# sourceMappingURL=calendar.js.map?rel=1442577816394