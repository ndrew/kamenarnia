// Compiled by ClojureScript 1.7.170 {}
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
var seq__22960_22974 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22961_22975 = null;
var count__22962_22976 = (0);
var i__22963_22977 = (0);
while(true){
if((i__22963_22977 < count__22962_22976)){
var f_22978 = cljs.core._nth.call(null,chunk__22961_22975,i__22963_22977);
cljs.core.println.call(null,"  ",f_22978);

var G__22979 = seq__22960_22974;
var G__22980 = chunk__22961_22975;
var G__22981 = count__22962_22976;
var G__22982 = (i__22963_22977 + (1));
seq__22960_22974 = G__22979;
chunk__22961_22975 = G__22980;
count__22962_22976 = G__22981;
i__22963_22977 = G__22982;
continue;
} else {
var temp__4425__auto___22983 = cljs.core.seq.call(null,seq__22960_22974);
if(temp__4425__auto___22983){
var seq__22960_22984__$1 = temp__4425__auto___22983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22960_22984__$1)){
var c__17629__auto___22985 = cljs.core.chunk_first.call(null,seq__22960_22984__$1);
var G__22986 = cljs.core.chunk_rest.call(null,seq__22960_22984__$1);
var G__22987 = c__17629__auto___22985;
var G__22988 = cljs.core.count.call(null,c__17629__auto___22985);
var G__22989 = (0);
seq__22960_22974 = G__22986;
chunk__22961_22975 = G__22987;
count__22962_22976 = G__22988;
i__22963_22977 = G__22989;
continue;
} else {
var f_22990 = cljs.core.first.call(null,seq__22960_22984__$1);
cljs.core.println.call(null,"  ",f_22990);

var G__22991 = cljs.core.next.call(null,seq__22960_22984__$1);
var G__22992 = null;
var G__22993 = (0);
var G__22994 = (0);
seq__22960_22974 = G__22991;
chunk__22961_22975 = G__22992;
count__22962_22976 = G__22993;
i__22963_22977 = G__22994;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_22995 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_22995);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_22995)))?cljs.core.second.call(null,arglists_22995):arglists_22995));
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
var seq__22964 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__22965 = null;
var count__22966 = (0);
var i__22967 = (0);
while(true){
if((i__22967 < count__22966)){
var vec__22968 = cljs.core._nth.call(null,chunk__22965,i__22967);
var name = cljs.core.nth.call(null,vec__22968,(0),null);
var map__22969 = cljs.core.nth.call(null,vec__22968,(1),null);
var map__22969__$1 = ((((!((map__22969 == null)))?((((map__22969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22969):map__22969);
var doc = cljs.core.get.call(null,map__22969__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22969__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__22996 = seq__22964;
var G__22997 = chunk__22965;
var G__22998 = count__22966;
var G__22999 = (i__22967 + (1));
seq__22964 = G__22996;
chunk__22965 = G__22997;
count__22966 = G__22998;
i__22967 = G__22999;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22964);
if(temp__4425__auto__){
var seq__22964__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22964__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22964__$1);
var G__23000 = cljs.core.chunk_rest.call(null,seq__22964__$1);
var G__23001 = c__17629__auto__;
var G__23002 = cljs.core.count.call(null,c__17629__auto__);
var G__23003 = (0);
seq__22964 = G__23000;
chunk__22965 = G__23001;
count__22966 = G__23002;
i__22967 = G__23003;
continue;
} else {
var vec__22971 = cljs.core.first.call(null,seq__22964__$1);
var name = cljs.core.nth.call(null,vec__22971,(0),null);
var map__22972 = cljs.core.nth.call(null,vec__22971,(1),null);
var map__22972__$1 = ((((!((map__22972 == null)))?((((map__22972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22972):map__22972);
var doc = cljs.core.get.call(null,map__22972__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__22972__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23004 = cljs.core.next.call(null,seq__22964__$1);
var G__23005 = null;
var G__23006 = (0);
var G__23007 = (0);
seq__22964 = G__23004;
chunk__22965 = G__23005;
count__22966 = G__23006;
i__22967 = G__23007;
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

//# sourceMappingURL=repl.js.map?rel=1451419087050