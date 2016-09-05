// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16826__auto__){
return or__16826__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21936_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__21936_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__21941 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__21942 = null;
var count__21943 = (0);
var i__21944 = (0);
while(true){
if((i__21944 < count__21943)){
var n = cljs.core._nth.call(null,chunk__21942,i__21944);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21945 = seq__21941;
var G__21946 = chunk__21942;
var G__21947 = count__21943;
var G__21948 = (i__21944 + (1));
seq__21941 = G__21945;
chunk__21942 = G__21946;
count__21943 = G__21947;
i__21944 = G__21948;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21941);
if(temp__4425__auto__){
var seq__21941__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21941__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__21941__$1);
var G__21949 = cljs.core.chunk_rest.call(null,seq__21941__$1);
var G__21950 = c__17629__auto__;
var G__21951 = cljs.core.count.call(null,c__17629__auto__);
var G__21952 = (0);
seq__21941 = G__21949;
chunk__21942 = G__21950;
count__21943 = G__21951;
i__21944 = G__21952;
continue;
} else {
var n = cljs.core.first.call(null,seq__21941__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21953 = cljs.core.next.call(null,seq__21941__$1);
var G__21954 = null;
var G__21955 = (0);
var G__21956 = (0);
seq__21941 = G__21953;
chunk__21942 = G__21954;
count__21943 = G__21955;
i__21944 = G__21956;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__21995_22002 = cljs.core.seq.call(null,deps);
var chunk__21996_22003 = null;
var count__21997_22004 = (0);
var i__21998_22005 = (0);
while(true){
if((i__21998_22005 < count__21997_22004)){
var dep_22006 = cljs.core._nth.call(null,chunk__21996_22003,i__21998_22005);
topo_sort_helper_STAR_.call(null,dep_22006,(depth + (1)),state);

var G__22007 = seq__21995_22002;
var G__22008 = chunk__21996_22003;
var G__22009 = count__21997_22004;
var G__22010 = (i__21998_22005 + (1));
seq__21995_22002 = G__22007;
chunk__21996_22003 = G__22008;
count__21997_22004 = G__22009;
i__21998_22005 = G__22010;
continue;
} else {
var temp__4425__auto___22011 = cljs.core.seq.call(null,seq__21995_22002);
if(temp__4425__auto___22011){
var seq__21995_22012__$1 = temp__4425__auto___22011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21995_22012__$1)){
var c__17629__auto___22013 = cljs.core.chunk_first.call(null,seq__21995_22012__$1);
var G__22014 = cljs.core.chunk_rest.call(null,seq__21995_22012__$1);
var G__22015 = c__17629__auto___22013;
var G__22016 = cljs.core.count.call(null,c__17629__auto___22013);
var G__22017 = (0);
seq__21995_22002 = G__22014;
chunk__21996_22003 = G__22015;
count__21997_22004 = G__22016;
i__21998_22005 = G__22017;
continue;
} else {
var dep_22018 = cljs.core.first.call(null,seq__21995_22012__$1);
topo_sort_helper_STAR_.call(null,dep_22018,(depth + (1)),state);

var G__22019 = cljs.core.next.call(null,seq__21995_22012__$1);
var G__22020 = null;
var G__22021 = (0);
var G__22022 = (0);
seq__21995_22002 = G__22019;
chunk__21996_22003 = G__22020;
count__21997_22004 = G__22021;
i__21998_22005 = G__22022;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__21999){
var vec__22001 = p__21999;
var x = cljs.core.nth.call(null,vec__22001,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22001,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22001,x,xs,get_deps__$1){
return (function (p1__21957_SHARP_){
return clojure.set.difference.call(null,p1__21957_SHARP_,x);
});})(vec__22001,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22035 = cljs.core.seq.call(null,provides);
var chunk__22036 = null;
var count__22037 = (0);
var i__22038 = (0);
while(true){
if((i__22038 < count__22037)){
var prov = cljs.core._nth.call(null,chunk__22036,i__22038);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22039_22047 = cljs.core.seq.call(null,requires);
var chunk__22040_22048 = null;
var count__22041_22049 = (0);
var i__22042_22050 = (0);
while(true){
if((i__22042_22050 < count__22041_22049)){
var req_22051 = cljs.core._nth.call(null,chunk__22040_22048,i__22042_22050);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22051,prov);

var G__22052 = seq__22039_22047;
var G__22053 = chunk__22040_22048;
var G__22054 = count__22041_22049;
var G__22055 = (i__22042_22050 + (1));
seq__22039_22047 = G__22052;
chunk__22040_22048 = G__22053;
count__22041_22049 = G__22054;
i__22042_22050 = G__22055;
continue;
} else {
var temp__4425__auto___22056 = cljs.core.seq.call(null,seq__22039_22047);
if(temp__4425__auto___22056){
var seq__22039_22057__$1 = temp__4425__auto___22056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22039_22057__$1)){
var c__17629__auto___22058 = cljs.core.chunk_first.call(null,seq__22039_22057__$1);
var G__22059 = cljs.core.chunk_rest.call(null,seq__22039_22057__$1);
var G__22060 = c__17629__auto___22058;
var G__22061 = cljs.core.count.call(null,c__17629__auto___22058);
var G__22062 = (0);
seq__22039_22047 = G__22059;
chunk__22040_22048 = G__22060;
count__22041_22049 = G__22061;
i__22042_22050 = G__22062;
continue;
} else {
var req_22063 = cljs.core.first.call(null,seq__22039_22057__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22063,prov);

var G__22064 = cljs.core.next.call(null,seq__22039_22057__$1);
var G__22065 = null;
var G__22066 = (0);
var G__22067 = (0);
seq__22039_22047 = G__22064;
chunk__22040_22048 = G__22065;
count__22041_22049 = G__22066;
i__22042_22050 = G__22067;
continue;
}
} else {
}
}
break;
}

var G__22068 = seq__22035;
var G__22069 = chunk__22036;
var G__22070 = count__22037;
var G__22071 = (i__22038 + (1));
seq__22035 = G__22068;
chunk__22036 = G__22069;
count__22037 = G__22070;
i__22038 = G__22071;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22035);
if(temp__4425__auto__){
var seq__22035__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22035__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22035__$1);
var G__22072 = cljs.core.chunk_rest.call(null,seq__22035__$1);
var G__22073 = c__17629__auto__;
var G__22074 = cljs.core.count.call(null,c__17629__auto__);
var G__22075 = (0);
seq__22035 = G__22072;
chunk__22036 = G__22073;
count__22037 = G__22074;
i__22038 = G__22075;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22035__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22043_22076 = cljs.core.seq.call(null,requires);
var chunk__22044_22077 = null;
var count__22045_22078 = (0);
var i__22046_22079 = (0);
while(true){
if((i__22046_22079 < count__22045_22078)){
var req_22080 = cljs.core._nth.call(null,chunk__22044_22077,i__22046_22079);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22080,prov);

var G__22081 = seq__22043_22076;
var G__22082 = chunk__22044_22077;
var G__22083 = count__22045_22078;
var G__22084 = (i__22046_22079 + (1));
seq__22043_22076 = G__22081;
chunk__22044_22077 = G__22082;
count__22045_22078 = G__22083;
i__22046_22079 = G__22084;
continue;
} else {
var temp__4425__auto___22085__$1 = cljs.core.seq.call(null,seq__22043_22076);
if(temp__4425__auto___22085__$1){
var seq__22043_22086__$1 = temp__4425__auto___22085__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22043_22086__$1)){
var c__17629__auto___22087 = cljs.core.chunk_first.call(null,seq__22043_22086__$1);
var G__22088 = cljs.core.chunk_rest.call(null,seq__22043_22086__$1);
var G__22089 = c__17629__auto___22087;
var G__22090 = cljs.core.count.call(null,c__17629__auto___22087);
var G__22091 = (0);
seq__22043_22076 = G__22088;
chunk__22044_22077 = G__22089;
count__22045_22078 = G__22090;
i__22046_22079 = G__22091;
continue;
} else {
var req_22092 = cljs.core.first.call(null,seq__22043_22086__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22092,prov);

var G__22093 = cljs.core.next.call(null,seq__22043_22086__$1);
var G__22094 = null;
var G__22095 = (0);
var G__22096 = (0);
seq__22043_22076 = G__22093;
chunk__22044_22077 = G__22094;
count__22045_22078 = G__22095;
i__22046_22079 = G__22096;
continue;
}
} else {
}
}
break;
}

var G__22097 = cljs.core.next.call(null,seq__22035__$1);
var G__22098 = null;
var G__22099 = (0);
var G__22100 = (0);
seq__22035 = G__22097;
chunk__22036 = G__22098;
count__22037 = G__22099;
i__22038 = G__22100;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22105_22109 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22106_22110 = null;
var count__22107_22111 = (0);
var i__22108_22112 = (0);
while(true){
if((i__22108_22112 < count__22107_22111)){
var ns_22113 = cljs.core._nth.call(null,chunk__22106_22110,i__22108_22112);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22113);

var G__22114 = seq__22105_22109;
var G__22115 = chunk__22106_22110;
var G__22116 = count__22107_22111;
var G__22117 = (i__22108_22112 + (1));
seq__22105_22109 = G__22114;
chunk__22106_22110 = G__22115;
count__22107_22111 = G__22116;
i__22108_22112 = G__22117;
continue;
} else {
var temp__4425__auto___22118 = cljs.core.seq.call(null,seq__22105_22109);
if(temp__4425__auto___22118){
var seq__22105_22119__$1 = temp__4425__auto___22118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22105_22119__$1)){
var c__17629__auto___22120 = cljs.core.chunk_first.call(null,seq__22105_22119__$1);
var G__22121 = cljs.core.chunk_rest.call(null,seq__22105_22119__$1);
var G__22122 = c__17629__auto___22120;
var G__22123 = cljs.core.count.call(null,c__17629__auto___22120);
var G__22124 = (0);
seq__22105_22109 = G__22121;
chunk__22106_22110 = G__22122;
count__22107_22111 = G__22123;
i__22108_22112 = G__22124;
continue;
} else {
var ns_22125 = cljs.core.first.call(null,seq__22105_22119__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22125);

var G__22126 = cljs.core.next.call(null,seq__22105_22119__$1);
var G__22127 = null;
var G__22128 = (0);
var G__22129 = (0);
seq__22105_22109 = G__22126;
chunk__22106_22110 = G__22127;
count__22107_22111 = G__22128;
i__22108_22112 = G__22129;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16826__auto__ = goog.require__;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22130__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22131__i = 0, G__22131__a = new Array(arguments.length -  0);
while (G__22131__i < G__22131__a.length) {G__22131__a[G__22131__i] = arguments[G__22131__i + 0]; ++G__22131__i;}
  args = new cljs.core.IndexedSeq(G__22131__a,0);
} 
return G__22130__delegate.call(this,args);};
G__22130.cljs$lang$maxFixedArity = 0;
G__22130.cljs$lang$applyTo = (function (arglist__22132){
var args = cljs.core.seq(arglist__22132);
return G__22130__delegate(args);
});
G__22130.cljs$core$IFn$_invoke$arity$variadic = G__22130__delegate;
return G__22130;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22134 = cljs.core._EQ_;
var expr__22135 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22134.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22135))){
var path_parts = ((function (pred__22134,expr__22135){
return (function (p1__22133_SHARP_){
return clojure.string.split.call(null,p1__22133_SHARP_,/[\/\\]/);
});})(pred__22134,expr__22135))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22134,expr__22135){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22137){if((e22137 instanceof Error)){
var e = e22137;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22137;

}
}})());
});
;})(path_parts,sep,root,pred__22134,expr__22135))
} else {
if(cljs.core.truth_(pred__22134.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22135))){
return ((function (pred__22134,expr__22135){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22134,expr__22135){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22134,expr__22135))
);

return deferred.addErrback(((function (deferred,pred__22134,expr__22135){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22134,expr__22135))
);
});
;})(pred__22134,expr__22135))
} else {
return ((function (pred__22134,expr__22135){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22134,expr__22135))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22138,callback){
var map__22141 = p__22138;
var map__22141__$1 = ((((!((map__22141 == null)))?((((map__22141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22141):map__22141);
var file_msg = map__22141__$1;
var request_url = cljs.core.get.call(null,map__22141__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22141,map__22141__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22141,map__22141__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto__){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto__){
return (function (state_22165){
var state_val_22166 = (state_22165[(1)]);
if((state_val_22166 === (7))){
var inst_22161 = (state_22165[(2)]);
var state_22165__$1 = state_22165;
var statearr_22167_22187 = state_22165__$1;
(statearr_22167_22187[(2)] = inst_22161);

(statearr_22167_22187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (1))){
var state_22165__$1 = state_22165;
var statearr_22168_22188 = state_22165__$1;
(statearr_22168_22188[(2)] = null);

(statearr_22168_22188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (4))){
var inst_22145 = (state_22165[(7)]);
var inst_22145__$1 = (state_22165[(2)]);
var state_22165__$1 = (function (){var statearr_22169 = state_22165;
(statearr_22169[(7)] = inst_22145__$1);

return statearr_22169;
})();
if(cljs.core.truth_(inst_22145__$1)){
var statearr_22170_22189 = state_22165__$1;
(statearr_22170_22189[(1)] = (5));

} else {
var statearr_22171_22190 = state_22165__$1;
(statearr_22171_22190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (6))){
var state_22165__$1 = state_22165;
var statearr_22172_22191 = state_22165__$1;
(statearr_22172_22191[(2)] = null);

(statearr_22172_22191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (3))){
var inst_22163 = (state_22165[(2)]);
var state_22165__$1 = state_22165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22165__$1,inst_22163);
} else {
if((state_val_22166 === (2))){
var state_22165__$1 = state_22165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22165__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22166 === (11))){
var inst_22157 = (state_22165[(2)]);
var state_22165__$1 = (function (){var statearr_22173 = state_22165;
(statearr_22173[(8)] = inst_22157);

return statearr_22173;
})();
var statearr_22174_22192 = state_22165__$1;
(statearr_22174_22192[(2)] = null);

(statearr_22174_22192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (9))){
var inst_22151 = (state_22165[(9)]);
var inst_22149 = (state_22165[(10)]);
var inst_22153 = inst_22151.call(null,inst_22149);
var state_22165__$1 = state_22165;
var statearr_22175_22193 = state_22165__$1;
(statearr_22175_22193[(2)] = inst_22153);

(statearr_22175_22193[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (5))){
var inst_22145 = (state_22165[(7)]);
var inst_22147 = figwheel.client.file_reloading.blocking_load.call(null,inst_22145);
var state_22165__$1 = state_22165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22165__$1,(8),inst_22147);
} else {
if((state_val_22166 === (10))){
var inst_22149 = (state_22165[(10)]);
var inst_22155 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22149);
var state_22165__$1 = state_22165;
var statearr_22176_22194 = state_22165__$1;
(statearr_22176_22194[(2)] = inst_22155);

(statearr_22176_22194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22166 === (8))){
var inst_22151 = (state_22165[(9)]);
var inst_22145 = (state_22165[(7)]);
var inst_22149 = (state_22165[(2)]);
var inst_22150 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22151__$1 = cljs.core.get.call(null,inst_22150,inst_22145);
var state_22165__$1 = (function (){var statearr_22177 = state_22165;
(statearr_22177[(9)] = inst_22151__$1);

(statearr_22177[(10)] = inst_22149);

return statearr_22177;
})();
if(cljs.core.truth_(inst_22151__$1)){
var statearr_22178_22195 = state_22165__$1;
(statearr_22178_22195[(1)] = (9));

} else {
var statearr_22179_22196 = state_22165__$1;
(statearr_22179_22196[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18993__auto__))
;
return ((function (switch__18881__auto__,c__18993__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18882__auto__ = null;
var figwheel$client$file_reloading$state_machine__18882__auto____0 = (function (){
var statearr_22183 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22183[(0)] = figwheel$client$file_reloading$state_machine__18882__auto__);

(statearr_22183[(1)] = (1));

return statearr_22183;
});
var figwheel$client$file_reloading$state_machine__18882__auto____1 = (function (state_22165){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_22165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e22184){if((e22184 instanceof Object)){
var ex__18885__auto__ = e22184;
var statearr_22185_22197 = state_22165;
(statearr_22185_22197[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22198 = state_22165;
state_22165 = G__22198;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18882__auto__ = function(state_22165){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18882__auto____1.call(this,state_22165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18882__auto____0;
figwheel$client$file_reloading$state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18882__auto____1;
return figwheel$client$file_reloading$state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto__))
})();
var state__18995__auto__ = (function (){var statearr_22186 = f__18994__auto__.call(null);
(statearr_22186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto__);

return statearr_22186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto__))
);

return c__18993__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22199,callback){
var map__22202 = p__22199;
var map__22202__$1 = ((((!((map__22202 == null)))?((((map__22202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22202):map__22202);
var file_msg = map__22202__$1;
var namespace = cljs.core.get.call(null,map__22202__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22202,map__22202__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22202,map__22202__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22204){
var map__22207 = p__22204;
var map__22207__$1 = ((((!((map__22207 == null)))?((((map__22207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22207):map__22207);
var file_msg = map__22207__$1;
var namespace = cljs.core.get.call(null,map__22207__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16814__auto__){
var or__16826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22209,callback){
var map__22212 = p__22209;
var map__22212__$1 = ((((!((map__22212 == null)))?((((map__22212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22212):map__22212);
var file_msg = map__22212__$1;
var request_url = cljs.core.get.call(null,map__22212__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22212__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18993__auto___22300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto___22300,out){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto___22300,out){
return (function (state_22282){
var state_val_22283 = (state_22282[(1)]);
if((state_val_22283 === (1))){
var inst_22260 = cljs.core.nth.call(null,files,(0),null);
var inst_22261 = cljs.core.nthnext.call(null,files,(1));
var inst_22262 = files;
var state_22282__$1 = (function (){var statearr_22284 = state_22282;
(statearr_22284[(7)] = inst_22261);

(statearr_22284[(8)] = inst_22260);

(statearr_22284[(9)] = inst_22262);

return statearr_22284;
})();
var statearr_22285_22301 = state_22282__$1;
(statearr_22285_22301[(2)] = null);

(statearr_22285_22301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22283 === (2))){
var inst_22265 = (state_22282[(10)]);
var inst_22262 = (state_22282[(9)]);
var inst_22265__$1 = cljs.core.nth.call(null,inst_22262,(0),null);
var inst_22266 = cljs.core.nthnext.call(null,inst_22262,(1));
var inst_22267 = (inst_22265__$1 == null);
var inst_22268 = cljs.core.not.call(null,inst_22267);
var state_22282__$1 = (function (){var statearr_22286 = state_22282;
(statearr_22286[(10)] = inst_22265__$1);

(statearr_22286[(11)] = inst_22266);

return statearr_22286;
})();
if(inst_22268){
var statearr_22287_22302 = state_22282__$1;
(statearr_22287_22302[(1)] = (4));

} else {
var statearr_22288_22303 = state_22282__$1;
(statearr_22288_22303[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22283 === (3))){
var inst_22280 = (state_22282[(2)]);
var state_22282__$1 = state_22282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22282__$1,inst_22280);
} else {
if((state_val_22283 === (4))){
var inst_22265 = (state_22282[(10)]);
var inst_22270 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22265);
var state_22282__$1 = state_22282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22282__$1,(7),inst_22270);
} else {
if((state_val_22283 === (5))){
var inst_22276 = cljs.core.async.close_BANG_.call(null,out);
var state_22282__$1 = state_22282;
var statearr_22289_22304 = state_22282__$1;
(statearr_22289_22304[(2)] = inst_22276);

(statearr_22289_22304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22283 === (6))){
var inst_22278 = (state_22282[(2)]);
var state_22282__$1 = state_22282;
var statearr_22290_22305 = state_22282__$1;
(statearr_22290_22305[(2)] = inst_22278);

(statearr_22290_22305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22283 === (7))){
var inst_22266 = (state_22282[(11)]);
var inst_22272 = (state_22282[(2)]);
var inst_22273 = cljs.core.async.put_BANG_.call(null,out,inst_22272);
var inst_22262 = inst_22266;
var state_22282__$1 = (function (){var statearr_22291 = state_22282;
(statearr_22291[(12)] = inst_22273);

(statearr_22291[(9)] = inst_22262);

return statearr_22291;
})();
var statearr_22292_22306 = state_22282__$1;
(statearr_22292_22306[(2)] = null);

(statearr_22292_22306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18993__auto___22300,out))
;
return ((function (switch__18881__auto__,c__18993__auto___22300,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto____0 = (function (){
var statearr_22296 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22296[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto__);

(statearr_22296[(1)] = (1));

return statearr_22296;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto____1 = (function (state_22282){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_22282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e22297){if((e22297 instanceof Object)){
var ex__18885__auto__ = e22297;
var statearr_22298_22307 = state_22282;
(statearr_22298_22307[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22308 = state_22282;
state_22282 = G__22308;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto__ = function(state_22282){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto____1.call(this,state_22282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto___22300,out))
})();
var state__18995__auto__ = (function (){var statearr_22299 = f__18994__auto__.call(null);
(statearr_22299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto___22300);

return statearr_22299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto___22300,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22309,opts){
var map__22313 = p__22309;
var map__22313__$1 = ((((!((map__22313 == null)))?((((map__22313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22313):map__22313);
var eval_body__$1 = cljs.core.get.call(null,map__22313__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22313__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16814__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16814__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16814__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22315){var e = e22315;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22316_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22316_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22321){
var vec__22322 = p__22321;
var k = cljs.core.nth.call(null,vec__22322,(0),null);
var v = cljs.core.nth.call(null,vec__22322,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22323){
var vec__22324 = p__22323;
var k = cljs.core.nth.call(null,vec__22324,(0),null);
var v = cljs.core.nth.call(null,vec__22324,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22328,p__22329){
var map__22576 = p__22328;
var map__22576__$1 = ((((!((map__22576 == null)))?((((map__22576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22576):map__22576);
var opts = map__22576__$1;
var before_jsload = cljs.core.get.call(null,map__22576__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22576__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22576__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22577 = p__22329;
var map__22577__$1 = ((((!((map__22577 == null)))?((((map__22577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22577):map__22577);
var msg = map__22577__$1;
var files = cljs.core.get.call(null,map__22577__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22577__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22577__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18993__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18994__auto__ = (function (){var switch__18881__auto__ = ((function (c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22730){
var state_val_22731 = (state_22730[(1)]);
if((state_val_22731 === (7))){
var inst_22593 = (state_22730[(7)]);
var inst_22594 = (state_22730[(8)]);
var inst_22592 = (state_22730[(9)]);
var inst_22591 = (state_22730[(10)]);
var inst_22599 = cljs.core._nth.call(null,inst_22592,inst_22594);
var inst_22600 = figwheel.client.file_reloading.eval_body.call(null,inst_22599,opts);
var inst_22601 = (inst_22594 + (1));
var tmp22732 = inst_22593;
var tmp22733 = inst_22592;
var tmp22734 = inst_22591;
var inst_22591__$1 = tmp22734;
var inst_22592__$1 = tmp22733;
var inst_22593__$1 = tmp22732;
var inst_22594__$1 = inst_22601;
var state_22730__$1 = (function (){var statearr_22735 = state_22730;
(statearr_22735[(7)] = inst_22593__$1);

(statearr_22735[(11)] = inst_22600);

(statearr_22735[(8)] = inst_22594__$1);

(statearr_22735[(9)] = inst_22592__$1);

(statearr_22735[(10)] = inst_22591__$1);

return statearr_22735;
})();
var statearr_22736_22822 = state_22730__$1;
(statearr_22736_22822[(2)] = null);

(statearr_22736_22822[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (20))){
var inst_22634 = (state_22730[(12)]);
var inst_22642 = figwheel.client.file_reloading.sort_files.call(null,inst_22634);
var state_22730__$1 = state_22730;
var statearr_22737_22823 = state_22730__$1;
(statearr_22737_22823[(2)] = inst_22642);

(statearr_22737_22823[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (27))){
var state_22730__$1 = state_22730;
var statearr_22738_22824 = state_22730__$1;
(statearr_22738_22824[(2)] = null);

(statearr_22738_22824[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (1))){
var inst_22583 = (state_22730[(13)]);
var inst_22580 = before_jsload.call(null,files);
var inst_22581 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22582 = (function (){return ((function (inst_22583,inst_22580,inst_22581,state_val_22731,c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22325_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22325_SHARP_);
});
;})(inst_22583,inst_22580,inst_22581,state_val_22731,c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22583__$1 = cljs.core.filter.call(null,inst_22582,files);
var inst_22584 = cljs.core.not_empty.call(null,inst_22583__$1);
var state_22730__$1 = (function (){var statearr_22739 = state_22730;
(statearr_22739[(13)] = inst_22583__$1);

(statearr_22739[(14)] = inst_22580);

(statearr_22739[(15)] = inst_22581);

return statearr_22739;
})();
if(cljs.core.truth_(inst_22584)){
var statearr_22740_22825 = state_22730__$1;
(statearr_22740_22825[(1)] = (2));

} else {
var statearr_22741_22826 = state_22730__$1;
(statearr_22741_22826[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (24))){
var state_22730__$1 = state_22730;
var statearr_22742_22827 = state_22730__$1;
(statearr_22742_22827[(2)] = null);

(statearr_22742_22827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (39))){
var inst_22684 = (state_22730[(16)]);
var state_22730__$1 = state_22730;
var statearr_22743_22828 = state_22730__$1;
(statearr_22743_22828[(2)] = inst_22684);

(statearr_22743_22828[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (46))){
var inst_22725 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
var statearr_22744_22829 = state_22730__$1;
(statearr_22744_22829[(2)] = inst_22725);

(statearr_22744_22829[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (4))){
var inst_22628 = (state_22730[(2)]);
var inst_22629 = cljs.core.List.EMPTY;
var inst_22630 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22629);
var inst_22631 = (function (){return ((function (inst_22628,inst_22629,inst_22630,state_val_22731,c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22326_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22326_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22326_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_22628,inst_22629,inst_22630,state_val_22731,c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22632 = cljs.core.filter.call(null,inst_22631,files);
var inst_22633 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22634 = cljs.core.concat.call(null,inst_22632,inst_22633);
var state_22730__$1 = (function (){var statearr_22745 = state_22730;
(statearr_22745[(12)] = inst_22634);

(statearr_22745[(17)] = inst_22628);

(statearr_22745[(18)] = inst_22630);

return statearr_22745;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22746_22830 = state_22730__$1;
(statearr_22746_22830[(1)] = (16));

} else {
var statearr_22747_22831 = state_22730__$1;
(statearr_22747_22831[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (15))){
var inst_22618 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
var statearr_22748_22832 = state_22730__$1;
(statearr_22748_22832[(2)] = inst_22618);

(statearr_22748_22832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (21))){
var inst_22644 = (state_22730[(19)]);
var inst_22644__$1 = (state_22730[(2)]);
var inst_22645 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22644__$1);
var state_22730__$1 = (function (){var statearr_22749 = state_22730;
(statearr_22749[(19)] = inst_22644__$1);

return statearr_22749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22730__$1,(22),inst_22645);
} else {
if((state_val_22731 === (31))){
var inst_22728 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22730__$1,inst_22728);
} else {
if((state_val_22731 === (32))){
var inst_22684 = (state_22730[(16)]);
var inst_22689 = inst_22684.cljs$lang$protocol_mask$partition0$;
var inst_22690 = (inst_22689 & (64));
var inst_22691 = inst_22684.cljs$core$ISeq$;
var inst_22692 = (inst_22690) || (inst_22691);
var state_22730__$1 = state_22730;
if(cljs.core.truth_(inst_22692)){
var statearr_22750_22833 = state_22730__$1;
(statearr_22750_22833[(1)] = (35));

} else {
var statearr_22751_22834 = state_22730__$1;
(statearr_22751_22834[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (40))){
var inst_22705 = (state_22730[(20)]);
var inst_22704 = (state_22730[(2)]);
var inst_22705__$1 = cljs.core.get.call(null,inst_22704,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22706 = cljs.core.get.call(null,inst_22704,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22707 = cljs.core.not_empty.call(null,inst_22705__$1);
var state_22730__$1 = (function (){var statearr_22752 = state_22730;
(statearr_22752[(21)] = inst_22706);

(statearr_22752[(20)] = inst_22705__$1);

return statearr_22752;
})();
if(cljs.core.truth_(inst_22707)){
var statearr_22753_22835 = state_22730__$1;
(statearr_22753_22835[(1)] = (41));

} else {
var statearr_22754_22836 = state_22730__$1;
(statearr_22754_22836[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (33))){
var state_22730__$1 = state_22730;
var statearr_22755_22837 = state_22730__$1;
(statearr_22755_22837[(2)] = false);

(statearr_22755_22837[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (13))){
var inst_22604 = (state_22730[(22)]);
var inst_22608 = cljs.core.chunk_first.call(null,inst_22604);
var inst_22609 = cljs.core.chunk_rest.call(null,inst_22604);
var inst_22610 = cljs.core.count.call(null,inst_22608);
var inst_22591 = inst_22609;
var inst_22592 = inst_22608;
var inst_22593 = inst_22610;
var inst_22594 = (0);
var state_22730__$1 = (function (){var statearr_22756 = state_22730;
(statearr_22756[(7)] = inst_22593);

(statearr_22756[(8)] = inst_22594);

(statearr_22756[(9)] = inst_22592);

(statearr_22756[(10)] = inst_22591);

return statearr_22756;
})();
var statearr_22757_22838 = state_22730__$1;
(statearr_22757_22838[(2)] = null);

(statearr_22757_22838[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (22))){
var inst_22647 = (state_22730[(23)]);
var inst_22648 = (state_22730[(24)]);
var inst_22652 = (state_22730[(25)]);
var inst_22644 = (state_22730[(19)]);
var inst_22647__$1 = (state_22730[(2)]);
var inst_22648__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22647__$1);
var inst_22649 = (function (){var all_files = inst_22644;
var res_SINGLEQUOTE_ = inst_22647__$1;
var res = inst_22648__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22647,inst_22648,inst_22652,inst_22644,inst_22647__$1,inst_22648__$1,state_val_22731,c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22327_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22327_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22647,inst_22648,inst_22652,inst_22644,inst_22647__$1,inst_22648__$1,state_val_22731,c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22650 = cljs.core.filter.call(null,inst_22649,inst_22647__$1);
var inst_22651 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22652__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22651);
var inst_22653 = cljs.core.not_empty.call(null,inst_22652__$1);
var state_22730__$1 = (function (){var statearr_22758 = state_22730;
(statearr_22758[(23)] = inst_22647__$1);

(statearr_22758[(26)] = inst_22650);

(statearr_22758[(24)] = inst_22648__$1);

(statearr_22758[(25)] = inst_22652__$1);

return statearr_22758;
})();
if(cljs.core.truth_(inst_22653)){
var statearr_22759_22839 = state_22730__$1;
(statearr_22759_22839[(1)] = (23));

} else {
var statearr_22760_22840 = state_22730__$1;
(statearr_22760_22840[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (36))){
var state_22730__$1 = state_22730;
var statearr_22761_22841 = state_22730__$1;
(statearr_22761_22841[(2)] = false);

(statearr_22761_22841[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (41))){
var inst_22705 = (state_22730[(20)]);
var inst_22709 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22710 = cljs.core.map.call(null,inst_22709,inst_22705);
var inst_22711 = cljs.core.pr_str.call(null,inst_22710);
var inst_22712 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_22711)].join('');
var inst_22713 = figwheel.client.utils.log.call(null,inst_22712);
var state_22730__$1 = state_22730;
var statearr_22762_22842 = state_22730__$1;
(statearr_22762_22842[(2)] = inst_22713);

(statearr_22762_22842[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (43))){
var inst_22706 = (state_22730[(21)]);
var inst_22716 = (state_22730[(2)]);
var inst_22717 = cljs.core.not_empty.call(null,inst_22706);
var state_22730__$1 = (function (){var statearr_22763 = state_22730;
(statearr_22763[(27)] = inst_22716);

return statearr_22763;
})();
if(cljs.core.truth_(inst_22717)){
var statearr_22764_22843 = state_22730__$1;
(statearr_22764_22843[(1)] = (44));

} else {
var statearr_22765_22844 = state_22730__$1;
(statearr_22765_22844[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (29))){
var inst_22647 = (state_22730[(23)]);
var inst_22650 = (state_22730[(26)]);
var inst_22648 = (state_22730[(24)]);
var inst_22652 = (state_22730[(25)]);
var inst_22684 = (state_22730[(16)]);
var inst_22644 = (state_22730[(19)]);
var inst_22680 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22683 = (function (){var all_files = inst_22644;
var res_SINGLEQUOTE_ = inst_22647;
var res = inst_22648;
var files_not_loaded = inst_22650;
var dependencies_that_loaded = inst_22652;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22647,inst_22650,inst_22648,inst_22652,inst_22684,inst_22644,inst_22680,state_val_22731,c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22682){
var map__22766 = p__22682;
var map__22766__$1 = ((((!((map__22766 == null)))?((((map__22766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22766):map__22766);
var namespace = cljs.core.get.call(null,map__22766__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22647,inst_22650,inst_22648,inst_22652,inst_22684,inst_22644,inst_22680,state_val_22731,c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22684__$1 = cljs.core.group_by.call(null,inst_22683,inst_22650);
var inst_22686 = (inst_22684__$1 == null);
var inst_22687 = cljs.core.not.call(null,inst_22686);
var state_22730__$1 = (function (){var statearr_22768 = state_22730;
(statearr_22768[(28)] = inst_22680);

(statearr_22768[(16)] = inst_22684__$1);

return statearr_22768;
})();
if(inst_22687){
var statearr_22769_22845 = state_22730__$1;
(statearr_22769_22845[(1)] = (32));

} else {
var statearr_22770_22846 = state_22730__$1;
(statearr_22770_22846[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (44))){
var inst_22706 = (state_22730[(21)]);
var inst_22719 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22706);
var inst_22720 = cljs.core.pr_str.call(null,inst_22719);
var inst_22721 = [cljs.core.str("not required: "),cljs.core.str(inst_22720)].join('');
var inst_22722 = figwheel.client.utils.log.call(null,inst_22721);
var state_22730__$1 = state_22730;
var statearr_22771_22847 = state_22730__$1;
(statearr_22771_22847[(2)] = inst_22722);

(statearr_22771_22847[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (6))){
var inst_22625 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
var statearr_22772_22848 = state_22730__$1;
(statearr_22772_22848[(2)] = inst_22625);

(statearr_22772_22848[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (28))){
var inst_22650 = (state_22730[(26)]);
var inst_22677 = (state_22730[(2)]);
var inst_22678 = cljs.core.not_empty.call(null,inst_22650);
var state_22730__$1 = (function (){var statearr_22773 = state_22730;
(statearr_22773[(29)] = inst_22677);

return statearr_22773;
})();
if(cljs.core.truth_(inst_22678)){
var statearr_22774_22849 = state_22730__$1;
(statearr_22774_22849[(1)] = (29));

} else {
var statearr_22775_22850 = state_22730__$1;
(statearr_22775_22850[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (25))){
var inst_22648 = (state_22730[(24)]);
var inst_22664 = (state_22730[(2)]);
var inst_22665 = cljs.core.not_empty.call(null,inst_22648);
var state_22730__$1 = (function (){var statearr_22776 = state_22730;
(statearr_22776[(30)] = inst_22664);

return statearr_22776;
})();
if(cljs.core.truth_(inst_22665)){
var statearr_22777_22851 = state_22730__$1;
(statearr_22777_22851[(1)] = (26));

} else {
var statearr_22778_22852 = state_22730__$1;
(statearr_22778_22852[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (34))){
var inst_22699 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
if(cljs.core.truth_(inst_22699)){
var statearr_22779_22853 = state_22730__$1;
(statearr_22779_22853[(1)] = (38));

} else {
var statearr_22780_22854 = state_22730__$1;
(statearr_22780_22854[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (17))){
var state_22730__$1 = state_22730;
var statearr_22781_22855 = state_22730__$1;
(statearr_22781_22855[(2)] = recompile_dependents);

(statearr_22781_22855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (3))){
var state_22730__$1 = state_22730;
var statearr_22782_22856 = state_22730__$1;
(statearr_22782_22856[(2)] = null);

(statearr_22782_22856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (12))){
var inst_22621 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
var statearr_22783_22857 = state_22730__$1;
(statearr_22783_22857[(2)] = inst_22621);

(statearr_22783_22857[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (2))){
var inst_22583 = (state_22730[(13)]);
var inst_22590 = cljs.core.seq.call(null,inst_22583);
var inst_22591 = inst_22590;
var inst_22592 = null;
var inst_22593 = (0);
var inst_22594 = (0);
var state_22730__$1 = (function (){var statearr_22784 = state_22730;
(statearr_22784[(7)] = inst_22593);

(statearr_22784[(8)] = inst_22594);

(statearr_22784[(9)] = inst_22592);

(statearr_22784[(10)] = inst_22591);

return statearr_22784;
})();
var statearr_22785_22858 = state_22730__$1;
(statearr_22785_22858[(2)] = null);

(statearr_22785_22858[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (23))){
var inst_22647 = (state_22730[(23)]);
var inst_22650 = (state_22730[(26)]);
var inst_22648 = (state_22730[(24)]);
var inst_22652 = (state_22730[(25)]);
var inst_22644 = (state_22730[(19)]);
var inst_22655 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22657 = (function (){var all_files = inst_22644;
var res_SINGLEQUOTE_ = inst_22647;
var res = inst_22648;
var files_not_loaded = inst_22650;
var dependencies_that_loaded = inst_22652;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22647,inst_22650,inst_22648,inst_22652,inst_22644,inst_22655,state_val_22731,c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22656){
var map__22786 = p__22656;
var map__22786__$1 = ((((!((map__22786 == null)))?((((map__22786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22786):map__22786);
var request_url = cljs.core.get.call(null,map__22786__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22647,inst_22650,inst_22648,inst_22652,inst_22644,inst_22655,state_val_22731,c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22658 = cljs.core.reverse.call(null,inst_22652);
var inst_22659 = cljs.core.map.call(null,inst_22657,inst_22658);
var inst_22660 = cljs.core.pr_str.call(null,inst_22659);
var inst_22661 = figwheel.client.utils.log.call(null,inst_22660);
var state_22730__$1 = (function (){var statearr_22788 = state_22730;
(statearr_22788[(31)] = inst_22655);

return statearr_22788;
})();
var statearr_22789_22859 = state_22730__$1;
(statearr_22789_22859[(2)] = inst_22661);

(statearr_22789_22859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (35))){
var state_22730__$1 = state_22730;
var statearr_22790_22860 = state_22730__$1;
(statearr_22790_22860[(2)] = true);

(statearr_22790_22860[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (19))){
var inst_22634 = (state_22730[(12)]);
var inst_22640 = figwheel.client.file_reloading.expand_files.call(null,inst_22634);
var state_22730__$1 = state_22730;
var statearr_22791_22861 = state_22730__$1;
(statearr_22791_22861[(2)] = inst_22640);

(statearr_22791_22861[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (11))){
var state_22730__$1 = state_22730;
var statearr_22792_22862 = state_22730__$1;
(statearr_22792_22862[(2)] = null);

(statearr_22792_22862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (9))){
var inst_22623 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
var statearr_22793_22863 = state_22730__$1;
(statearr_22793_22863[(2)] = inst_22623);

(statearr_22793_22863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (5))){
var inst_22593 = (state_22730[(7)]);
var inst_22594 = (state_22730[(8)]);
var inst_22596 = (inst_22594 < inst_22593);
var inst_22597 = inst_22596;
var state_22730__$1 = state_22730;
if(cljs.core.truth_(inst_22597)){
var statearr_22794_22864 = state_22730__$1;
(statearr_22794_22864[(1)] = (7));

} else {
var statearr_22795_22865 = state_22730__$1;
(statearr_22795_22865[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (14))){
var inst_22604 = (state_22730[(22)]);
var inst_22613 = cljs.core.first.call(null,inst_22604);
var inst_22614 = figwheel.client.file_reloading.eval_body.call(null,inst_22613,opts);
var inst_22615 = cljs.core.next.call(null,inst_22604);
var inst_22591 = inst_22615;
var inst_22592 = null;
var inst_22593 = (0);
var inst_22594 = (0);
var state_22730__$1 = (function (){var statearr_22796 = state_22730;
(statearr_22796[(7)] = inst_22593);

(statearr_22796[(8)] = inst_22594);

(statearr_22796[(9)] = inst_22592);

(statearr_22796[(10)] = inst_22591);

(statearr_22796[(32)] = inst_22614);

return statearr_22796;
})();
var statearr_22797_22866 = state_22730__$1;
(statearr_22797_22866[(2)] = null);

(statearr_22797_22866[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (45))){
var state_22730__$1 = state_22730;
var statearr_22798_22867 = state_22730__$1;
(statearr_22798_22867[(2)] = null);

(statearr_22798_22867[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (26))){
var inst_22647 = (state_22730[(23)]);
var inst_22650 = (state_22730[(26)]);
var inst_22648 = (state_22730[(24)]);
var inst_22652 = (state_22730[(25)]);
var inst_22644 = (state_22730[(19)]);
var inst_22667 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22669 = (function (){var all_files = inst_22644;
var res_SINGLEQUOTE_ = inst_22647;
var res = inst_22648;
var files_not_loaded = inst_22650;
var dependencies_that_loaded = inst_22652;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22647,inst_22650,inst_22648,inst_22652,inst_22644,inst_22667,state_val_22731,c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22668){
var map__22799 = p__22668;
var map__22799__$1 = ((((!((map__22799 == null)))?((((map__22799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22799):map__22799);
var namespace = cljs.core.get.call(null,map__22799__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22799__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22647,inst_22650,inst_22648,inst_22652,inst_22644,inst_22667,state_val_22731,c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22670 = cljs.core.map.call(null,inst_22669,inst_22648);
var inst_22671 = cljs.core.pr_str.call(null,inst_22670);
var inst_22672 = figwheel.client.utils.log.call(null,inst_22671);
var inst_22673 = (function (){var all_files = inst_22644;
var res_SINGLEQUOTE_ = inst_22647;
var res = inst_22648;
var files_not_loaded = inst_22650;
var dependencies_that_loaded = inst_22652;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22647,inst_22650,inst_22648,inst_22652,inst_22644,inst_22667,inst_22669,inst_22670,inst_22671,inst_22672,state_val_22731,c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22647,inst_22650,inst_22648,inst_22652,inst_22644,inst_22667,inst_22669,inst_22670,inst_22671,inst_22672,state_val_22731,c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22674 = setTimeout(inst_22673,(10));
var state_22730__$1 = (function (){var statearr_22801 = state_22730;
(statearr_22801[(33)] = inst_22672);

(statearr_22801[(34)] = inst_22667);

return statearr_22801;
})();
var statearr_22802_22868 = state_22730__$1;
(statearr_22802_22868[(2)] = inst_22674);

(statearr_22802_22868[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (16))){
var state_22730__$1 = state_22730;
var statearr_22803_22869 = state_22730__$1;
(statearr_22803_22869[(2)] = reload_dependents);

(statearr_22803_22869[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (38))){
var inst_22684 = (state_22730[(16)]);
var inst_22701 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22684);
var state_22730__$1 = state_22730;
var statearr_22804_22870 = state_22730__$1;
(statearr_22804_22870[(2)] = inst_22701);

(statearr_22804_22870[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (30))){
var state_22730__$1 = state_22730;
var statearr_22805_22871 = state_22730__$1;
(statearr_22805_22871[(2)] = null);

(statearr_22805_22871[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (10))){
var inst_22604 = (state_22730[(22)]);
var inst_22606 = cljs.core.chunked_seq_QMARK_.call(null,inst_22604);
var state_22730__$1 = state_22730;
if(inst_22606){
var statearr_22806_22872 = state_22730__$1;
(statearr_22806_22872[(1)] = (13));

} else {
var statearr_22807_22873 = state_22730__$1;
(statearr_22807_22873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (18))){
var inst_22638 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
if(cljs.core.truth_(inst_22638)){
var statearr_22808_22874 = state_22730__$1;
(statearr_22808_22874[(1)] = (19));

} else {
var statearr_22809_22875 = state_22730__$1;
(statearr_22809_22875[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (42))){
var state_22730__$1 = state_22730;
var statearr_22810_22876 = state_22730__$1;
(statearr_22810_22876[(2)] = null);

(statearr_22810_22876[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (37))){
var inst_22696 = (state_22730[(2)]);
var state_22730__$1 = state_22730;
var statearr_22811_22877 = state_22730__$1;
(statearr_22811_22877[(2)] = inst_22696);

(statearr_22811_22877[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22731 === (8))){
var inst_22604 = (state_22730[(22)]);
var inst_22591 = (state_22730[(10)]);
var inst_22604__$1 = cljs.core.seq.call(null,inst_22591);
var state_22730__$1 = (function (){var statearr_22812 = state_22730;
(statearr_22812[(22)] = inst_22604__$1);

return statearr_22812;
})();
if(inst_22604__$1){
var statearr_22813_22878 = state_22730__$1;
(statearr_22813_22878[(1)] = (10));

} else {
var statearr_22814_22879 = state_22730__$1;
(statearr_22814_22879[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18881__auto__,c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto____0 = (function (){
var statearr_22818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22818[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto__);

(statearr_22818[(1)] = (1));

return statearr_22818;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto____1 = (function (state_22730){
while(true){
var ret_value__18883__auto__ = (function (){try{while(true){
var result__18884__auto__ = switch__18881__auto__.call(null,state_22730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18884__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18884__auto__;
}
break;
}
}catch (e22819){if((e22819 instanceof Object)){
var ex__18885__auto__ = e22819;
var statearr_22820_22880 = state_22730;
(statearr_22820_22880[(5)] = ex__18885__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18883__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22881 = state_22730;
state_22730 = G__22881;
continue;
} else {
return ret_value__18883__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto__ = function(state_22730){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto____1.call(this,state_22730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18882__auto__;
})()
;})(switch__18881__auto__,c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18995__auto__ = (function (){var statearr_22821 = f__18994__auto__.call(null);
(statearr_22821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18993__auto__);

return statearr_22821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18995__auto__);
});})(c__18993__auto__,map__22576,map__22576__$1,opts,before_jsload,on_jsload,reload_dependents,map__22577,map__22577__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18993__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22884,link){
var map__22887 = p__22884;
var map__22887__$1 = ((((!((map__22887 == null)))?((((map__22887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22887):map__22887);
var file = cljs.core.get.call(null,map__22887__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__22887,map__22887__$1,file){
return (function (p1__22882_SHARP_,p2__22883_SHARP_){
if(cljs.core._EQ_.call(null,p1__22882_SHARP_,p2__22883_SHARP_)){
return p1__22882_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__22887,map__22887__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22893){
var map__22894 = p__22893;
var map__22894__$1 = ((((!((map__22894 == null)))?((((map__22894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22894):map__22894);
var match_length = cljs.core.get.call(null,map__22894__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22894__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22889_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22889_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args22896 = [];
var len__17884__auto___22899 = arguments.length;
var i__17885__auto___22900 = (0);
while(true){
if((i__17885__auto___22900 < len__17884__auto___22899)){
args22896.push((arguments[i__17885__auto___22900]));

var G__22901 = (i__17885__auto___22900 + (1));
i__17885__auto___22900 = G__22901;
continue;
} else {
}
break;
}

var G__22898 = args22896.length;
switch (G__22898) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22896.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__22903_SHARP_,p2__22904_SHARP_){
return cljs.core.assoc.call(null,p1__22903_SHARP_,cljs.core.get.call(null,p2__22904_SHARP_,key),p2__22904_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__22905){
var map__22908 = p__22905;
var map__22908__$1 = ((((!((map__22908 == null)))?((((map__22908.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22908.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22908):map__22908);
var f_data = map__22908__$1;
var file = cljs.core.get.call(null,map__22908__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22910,files_msg){
var map__22917 = p__22910;
var map__22917__$1 = ((((!((map__22917 == null)))?((((map__22917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22917):map__22917);
var opts = map__22917__$1;
var on_cssload = cljs.core.get.call(null,map__22917__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__22919_22923 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22920_22924 = null;
var count__22921_22925 = (0);
var i__22922_22926 = (0);
while(true){
if((i__22922_22926 < count__22921_22925)){
var f_22927 = cljs.core._nth.call(null,chunk__22920_22924,i__22922_22926);
figwheel.client.file_reloading.reload_css_file.call(null,f_22927);

var G__22928 = seq__22919_22923;
var G__22929 = chunk__22920_22924;
var G__22930 = count__22921_22925;
var G__22931 = (i__22922_22926 + (1));
seq__22919_22923 = G__22928;
chunk__22920_22924 = G__22929;
count__22921_22925 = G__22930;
i__22922_22926 = G__22931;
continue;
} else {
var temp__4425__auto___22932 = cljs.core.seq.call(null,seq__22919_22923);
if(temp__4425__auto___22932){
var seq__22919_22933__$1 = temp__4425__auto___22932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22919_22933__$1)){
var c__17629__auto___22934 = cljs.core.chunk_first.call(null,seq__22919_22933__$1);
var G__22935 = cljs.core.chunk_rest.call(null,seq__22919_22933__$1);
var G__22936 = c__17629__auto___22934;
var G__22937 = cljs.core.count.call(null,c__17629__auto___22934);
var G__22938 = (0);
seq__22919_22923 = G__22935;
chunk__22920_22924 = G__22936;
count__22921_22925 = G__22937;
i__22922_22926 = G__22938;
continue;
} else {
var f_22939 = cljs.core.first.call(null,seq__22919_22933__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_22939);

var G__22940 = cljs.core.next.call(null,seq__22919_22933__$1);
var G__22941 = null;
var G__22942 = (0);
var G__22943 = (0);
seq__22919_22923 = G__22940;
chunk__22920_22924 = G__22941;
count__22921_22925 = G__22942;
i__22922_22926 = G__22943;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__22917,map__22917__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__22917,map__22917__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1451419086970