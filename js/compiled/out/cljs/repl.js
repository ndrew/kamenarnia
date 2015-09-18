// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25965_25979 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25966_25980 = null;
var count__25967_25981 = (0);
var i__25968_25982 = (0);
while(true){
if((i__25968_25982 < count__25967_25981)){
var f_25983 = cljs.core._nth.call(null,chunk__25966_25980,i__25968_25982);
cljs.core.println.call(null,"  ",f_25983);

var G__25984 = seq__25965_25979;
var G__25985 = chunk__25966_25980;
var G__25986 = count__25967_25981;
var G__25987 = (i__25968_25982 + (1));
seq__25965_25979 = G__25984;
chunk__25966_25980 = G__25985;
count__25967_25981 = G__25986;
i__25968_25982 = G__25987;
continue;
} else {
var temp__4425__auto___25988 = cljs.core.seq.call(null,seq__25965_25979);
if(temp__4425__auto___25988){
var seq__25965_25989__$1 = temp__4425__auto___25988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25965_25989__$1)){
var c__17293__auto___25990 = cljs.core.chunk_first.call(null,seq__25965_25989__$1);
var G__25991 = cljs.core.chunk_rest.call(null,seq__25965_25989__$1);
var G__25992 = c__17293__auto___25990;
var G__25993 = cljs.core.count.call(null,c__17293__auto___25990);
var G__25994 = (0);
seq__25965_25979 = G__25991;
chunk__25966_25980 = G__25992;
count__25967_25981 = G__25993;
i__25968_25982 = G__25994;
continue;
} else {
var f_25995 = cljs.core.first.call(null,seq__25965_25989__$1);
cljs.core.println.call(null,"  ",f_25995);

var G__25996 = cljs.core.next.call(null,seq__25965_25989__$1);
var G__25997 = null;
var G__25998 = (0);
var G__25999 = (0);
seq__25965_25979 = G__25996;
chunk__25966_25980 = G__25997;
count__25967_25981 = G__25998;
i__25968_25982 = G__25999;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26000 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16490__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26000);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26000)))?cljs.core.second.call(null,arglists_26000):arglists_26000));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25969 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25970 = null;
var count__25971 = (0);
var i__25972 = (0);
while(true){
if((i__25972 < count__25971)){
var vec__25973 = cljs.core._nth.call(null,chunk__25970,i__25972);
var name = cljs.core.nth.call(null,vec__25973,(0),null);
var map__25974 = cljs.core.nth.call(null,vec__25973,(1),null);
var map__25974__$1 = ((((!((map__25974 == null)))?((((map__25974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25974):map__25974);
var doc = cljs.core.get.call(null,map__25974__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25974__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26001 = seq__25969;
var G__26002 = chunk__25970;
var G__26003 = count__25971;
var G__26004 = (i__25972 + (1));
seq__25969 = G__26001;
chunk__25970 = G__26002;
count__25971 = G__26003;
i__25972 = G__26004;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25969);
if(temp__4425__auto__){
var seq__25969__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25969__$1)){
var c__17293__auto__ = cljs.core.chunk_first.call(null,seq__25969__$1);
var G__26005 = cljs.core.chunk_rest.call(null,seq__25969__$1);
var G__26006 = c__17293__auto__;
var G__26007 = cljs.core.count.call(null,c__17293__auto__);
var G__26008 = (0);
seq__25969 = G__26005;
chunk__25970 = G__26006;
count__25971 = G__26007;
i__25972 = G__26008;
continue;
} else {
var vec__25976 = cljs.core.first.call(null,seq__25969__$1);
var name = cljs.core.nth.call(null,vec__25976,(0),null);
var map__25977 = cljs.core.nth.call(null,vec__25976,(1),null);
var map__25977__$1 = ((((!((map__25977 == null)))?((((map__25977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25977):map__25977);
var doc = cljs.core.get.call(null,map__25977__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25977__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26009 = cljs.core.next.call(null,seq__25969__$1);
var G__26010 = null;
var G__26011 = (0);
var G__26012 = (0);
seq__25969 = G__26009;
chunk__25970 = G__26010;
count__25971 = G__26011;
i__25972 = G__26012;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1441471066318