// Compiled by ClojureScript 1.7.122 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k__$1,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k__$1,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__24830_SHARP_){
return (max === p1__24830_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 */
clojure.set.union = (function clojure$set$union(var_args){
var args24831 = [];
var len__17548__auto___24837 = arguments.length;
var i__17549__auto___24838 = (0);
while(true){
if((i__17549__auto___24838 < len__17548__auto___24837)){
args24831.push((arguments[i__17549__auto___24838]));

var G__24839 = (i__17549__auto___24838 + (1));
i__17549__auto___24838 = G__24839;
continue;
} else {
}
break;
}

var G__24836 = args24831.length;
switch (G__24836) {
case 0:
return clojure.set.union.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.set.union.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17567__auto__ = (new cljs.core.IndexedSeq(args24831.slice((2)),(0)));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17567__auto__);

}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.union.cljs$lang$applyTo = (function (seq24832){
var G__24833 = cljs.core.first.call(null,seq24832);
var seq24832__$1 = cljs.core.next.call(null,seq24832);
var G__24834 = cljs.core.first.call(null,seq24832__$1);
var seq24832__$2 = cljs.core.next.call(null,seq24832__$1);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__24833,G__24834,seq24832__$2);
});

clojure.set.union.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the intersection of the input sets
 */
clojure.set.intersection = (function clojure$set$intersection(var_args){
var args24842 = [];
var len__17548__auto___24848 = arguments.length;
var i__17549__auto___24849 = (0);
while(true){
if((i__17549__auto___24849 < len__17548__auto___24848)){
args24842.push((arguments[i__17549__auto___24849]));

var G__24850 = (i__17549__auto___24849 + (1));
i__17549__auto___24849 = G__24850;
continue;
} else {
}
break;
}

var G__24847 = args24842.length;
switch (G__24847) {
case 1:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17567__auto__ = (new cljs.core.IndexedSeq(args24842.slice((2)),(0)));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17567__auto__);

}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__24852 = s2;
var G__24853 = s1;
s1 = G__24852;
s2 = G__24853;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__24841_SHARP_){
return (- cljs.core.count.call(null,p1__24841_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure.set.intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.intersection.cljs$lang$applyTo = (function (seq24843){
var G__24844 = cljs.core.first.call(null,seq24843);
var seq24843__$1 = cljs.core.next.call(null,seq24843);
var G__24845 = cljs.core.first.call(null,seq24843__$1);
var seq24843__$2 = cljs.core.next.call(null,seq24843__$1);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic(G__24844,G__24845,seq24843__$2);
});

clojure.set.intersection.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the first set without elements of the remaining sets
 */
clojure.set.difference = (function clojure$set$difference(var_args){
var args24854 = [];
var len__17548__auto___24860 = arguments.length;
var i__17549__auto___24861 = (0);
while(true){
if((i__17549__auto___24861 < len__17548__auto___24860)){
args24854.push((arguments[i__17549__auto___24861]));

var G__24862 = (i__17549__auto___24861 + (1));
i__17549__auto___24861 = G__24862;
continue;
} else {
}
break;
}

var G__24859 = args24854.length;
switch (G__24859) {
case 1:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17567__auto__ = (new cljs.core.IndexedSeq(args24854.slice((2)),(0)));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17567__auto__);

}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.call(null,clojure.set.difference,s1,cljs.core.conj.call(null,sets,s2));
});

clojure.set.difference.cljs$lang$applyTo = (function (seq24855){
var G__24856 = cljs.core.first.call(null,seq24855);
var seq24855__$1 = cljs.core.next.call(null,seq24855);
var G__24857 = cljs.core.first.call(null,seq24855__$1);
var seq24855__$2 = cljs.core.next.call(null,seq24855__$1);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(G__24856,G__24857,seq24855__$2);
});

clojure.set.difference.cljs$lang$maxFixedArity = (2);
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k__$1){
if(cljs.core.truth_(pred.call(null,k__$1))){
return s;
} else {
return cljs.core.disj.call(null,s,k__$1);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__24864_SHARP_){
return cljs.core.select_keys.call(null,p1__24864_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__24867){
var vec__24868 = p__24867;
var old = cljs.core.nth.call(null,vec__24868,(0),null);
var new$ = cljs.core.nth.call(null,vec__24868,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__24869_SHARP_){
return clojure.set.rename_keys.call(null,p1__24869_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 *   set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__24872){
var vec__24873 = p__24872;
var k__$1 = cljs.core.nth.call(null,vec__24873,(0),null);
var v = cljs.core.nth.call(null,vec__24873,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k__$1);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 *   join. When passed an additional keymap, joins on the corresponding
 *   keys.
 */
clojure.set.join = (function clojure$set$join(var_args){
var args24878 = [];
var len__17548__auto___24883 = arguments.length;
var i__17549__auto___24884 = (0);
while(true){
if((i__17549__auto___24884 < len__17548__auto___24883)){
args24878.push((arguments[i__17549__auto___24884]));

var G__24885 = (i__17549__auto___24884 + (1));
i__17549__auto___24884 = G__24885;
continue;
} else {
}
break;
}

var G__24880 = args24878.length;
switch (G__24880) {
case 2:
return clojure.set.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.set.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24878.length)].join('')));

}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__24881 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__24881,(0),null);
var s = cljs.core.nth.call(null,vec__24881,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__24881,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__24881,r,s,idx){
return (function (p1__24874_SHARP_,p2__24875_SHARP_){
return cljs.core.conj.call(null,p1__24874_SHARP_,cljs.core.merge.call(null,p2__24875_SHARP_,x));
});})(found,ks,vec__24881,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__24881,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$3 = (function (xrel,yrel,km){
var vec__24882 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__24882,(0),null);
var s = cljs.core.nth.call(null,vec__24882,(1),null);
var k__$1 = cljs.core.nth.call(null,vec__24882,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k__$1));
return cljs.core.reduce.call(null,((function (vec__24882,r,s,k__$1,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k__$1)),k__$1));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__24882,r,s,k__$1,idx){
return (function (p1__24876_SHARP_,p2__24877_SHARP_){
return cljs.core.conj.call(null,p1__24876_SHARP_,cljs.core.merge.call(null,p2__24877_SHARP_,x));
});})(found,vec__24882,r,s,k__$1,idx))
,ret,found);
} else {
return ret;
}
});})(vec__24882,r,s,k__$1,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});

clojure.set.join.cljs$lang$maxFixedArity = 3;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__24887_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__24887_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__24888_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__24888_SHARP_);
}),set2));
});

//# sourceMappingURL=set.js.map?rel=1441471064142