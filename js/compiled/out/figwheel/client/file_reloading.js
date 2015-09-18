// Compiled by ClojureScript 1.7.122 {}
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
var or__16490__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16490__auto__){
return or__16490__auto__;
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
var or__16490__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26017_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26017_SHARP_));
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
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k__$1,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k__$1,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k__$1);
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
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k__$1,o){
return goog.string.startsWith(k__$1,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k__$1,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26022 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k__$1));
var chunk__26023 = null;
var count__26024 = (0);
var i__26025 = (0);
while(true){
if((i__26025 < count__26024)){
var n = cljs.core._nth.call(null,chunk__26023,i__26025);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26026 = seq__26022;
var G__26027 = chunk__26023;
var G__26028 = count__26024;
var G__26029 = (i__26025 + (1));
seq__26022 = G__26026;
chunk__26023 = G__26027;
count__26024 = G__26028;
i__26025 = G__26029;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26022);
if(temp__4425__auto__){
var seq__26022__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26022__$1)){
var c__17293__auto__ = cljs.core.chunk_first.call(null,seq__26022__$1);
var G__26030 = cljs.core.chunk_rest.call(null,seq__26022__$1);
var G__26031 = c__17293__auto__;
var G__26032 = cljs.core.count.call(null,c__17293__auto__);
var G__26033 = (0);
seq__26022 = G__26030;
chunk__26023 = G__26031;
count__26024 = G__26032;
i__26025 = G__26033;
continue;
} else {
var n = cljs.core.first.call(null,seq__26022__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26034 = cljs.core.next.call(null,seq__26022__$1);
var G__26035 = null;
var G__26036 = (0);
var G__26037 = (0);
seq__26022 = G__26034;
chunk__26023 = G__26035;
count__26024 = G__26036;
i__26025 = G__26037;
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

var seq__26076_26083 = cljs.core.seq.call(null,deps);
var chunk__26077_26084 = null;
var count__26078_26085 = (0);
var i__26079_26086 = (0);
while(true){
if((i__26079_26086 < count__26078_26085)){
var dep_26087 = cljs.core._nth.call(null,chunk__26077_26084,i__26079_26086);
topo_sort_helper_STAR_.call(null,dep_26087,(depth + (1)),state);

var G__26088 = seq__26076_26083;
var G__26089 = chunk__26077_26084;
var G__26090 = count__26078_26085;
var G__26091 = (i__26079_26086 + (1));
seq__26076_26083 = G__26088;
chunk__26077_26084 = G__26089;
count__26078_26085 = G__26090;
i__26079_26086 = G__26091;
continue;
} else {
var temp__4425__auto___26092 = cljs.core.seq.call(null,seq__26076_26083);
if(temp__4425__auto___26092){
var seq__26076_26093__$1 = temp__4425__auto___26092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26076_26093__$1)){
var c__17293__auto___26094 = cljs.core.chunk_first.call(null,seq__26076_26093__$1);
var G__26095 = cljs.core.chunk_rest.call(null,seq__26076_26093__$1);
var G__26096 = c__17293__auto___26094;
var G__26097 = cljs.core.count.call(null,c__17293__auto___26094);
var G__26098 = (0);
seq__26076_26083 = G__26095;
chunk__26077_26084 = G__26096;
count__26078_26085 = G__26097;
i__26079_26086 = G__26098;
continue;
} else {
var dep_26099 = cljs.core.first.call(null,seq__26076_26093__$1);
topo_sort_helper_STAR_.call(null,dep_26099,(depth + (1)),state);

var G__26100 = cljs.core.next.call(null,seq__26076_26093__$1);
var G__26101 = null;
var G__26102 = (0);
var G__26103 = (0);
seq__26076_26083 = G__26100;
chunk__26077_26084 = G__26101;
count__26078_26085 = G__26102;
i__26079_26086 = G__26103;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26080){
var vec__26082 = p__26080;
var x = cljs.core.nth.call(null,vec__26082,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26082,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26082,x,xs,get_deps__$1){
return (function (p1__26038_SHARP_){
return clojure.set.difference.call(null,p1__26038_SHARP_,x);
});})(vec__26082,x,xs,get_deps__$1))
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
var seq__26116 = cljs.core.seq.call(null,provides);
var chunk__26117 = null;
var count__26118 = (0);
var i__26119 = (0);
while(true){
if((i__26119 < count__26118)){
var prov = cljs.core._nth.call(null,chunk__26117,i__26119);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26120_26128 = cljs.core.seq.call(null,requires);
var chunk__26121_26129 = null;
var count__26122_26130 = (0);
var i__26123_26131 = (0);
while(true){
if((i__26123_26131 < count__26122_26130)){
var req_26132 = cljs.core._nth.call(null,chunk__26121_26129,i__26123_26131);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26132,prov);

var G__26133 = seq__26120_26128;
var G__26134 = chunk__26121_26129;
var G__26135 = count__26122_26130;
var G__26136 = (i__26123_26131 + (1));
seq__26120_26128 = G__26133;
chunk__26121_26129 = G__26134;
count__26122_26130 = G__26135;
i__26123_26131 = G__26136;
continue;
} else {
var temp__4425__auto___26137 = cljs.core.seq.call(null,seq__26120_26128);
if(temp__4425__auto___26137){
var seq__26120_26138__$1 = temp__4425__auto___26137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26120_26138__$1)){
var c__17293__auto___26139 = cljs.core.chunk_first.call(null,seq__26120_26138__$1);
var G__26140 = cljs.core.chunk_rest.call(null,seq__26120_26138__$1);
var G__26141 = c__17293__auto___26139;
var G__26142 = cljs.core.count.call(null,c__17293__auto___26139);
var G__26143 = (0);
seq__26120_26128 = G__26140;
chunk__26121_26129 = G__26141;
count__26122_26130 = G__26142;
i__26123_26131 = G__26143;
continue;
} else {
var req_26144 = cljs.core.first.call(null,seq__26120_26138__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26144,prov);

var G__26145 = cljs.core.next.call(null,seq__26120_26138__$1);
var G__26146 = null;
var G__26147 = (0);
var G__26148 = (0);
seq__26120_26128 = G__26145;
chunk__26121_26129 = G__26146;
count__26122_26130 = G__26147;
i__26123_26131 = G__26148;
continue;
}
} else {
}
}
break;
}

var G__26149 = seq__26116;
var G__26150 = chunk__26117;
var G__26151 = count__26118;
var G__26152 = (i__26119 + (1));
seq__26116 = G__26149;
chunk__26117 = G__26150;
count__26118 = G__26151;
i__26119 = G__26152;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26116);
if(temp__4425__auto__){
var seq__26116__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26116__$1)){
var c__17293__auto__ = cljs.core.chunk_first.call(null,seq__26116__$1);
var G__26153 = cljs.core.chunk_rest.call(null,seq__26116__$1);
var G__26154 = c__17293__auto__;
var G__26155 = cljs.core.count.call(null,c__17293__auto__);
var G__26156 = (0);
seq__26116 = G__26153;
chunk__26117 = G__26154;
count__26118 = G__26155;
i__26119 = G__26156;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26116__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26124_26157 = cljs.core.seq.call(null,requires);
var chunk__26125_26158 = null;
var count__26126_26159 = (0);
var i__26127_26160 = (0);
while(true){
if((i__26127_26160 < count__26126_26159)){
var req_26161 = cljs.core._nth.call(null,chunk__26125_26158,i__26127_26160);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26161,prov);

var G__26162 = seq__26124_26157;
var G__26163 = chunk__26125_26158;
var G__26164 = count__26126_26159;
var G__26165 = (i__26127_26160 + (1));
seq__26124_26157 = G__26162;
chunk__26125_26158 = G__26163;
count__26126_26159 = G__26164;
i__26127_26160 = G__26165;
continue;
} else {
var temp__4425__auto___26166__$1 = cljs.core.seq.call(null,seq__26124_26157);
if(temp__4425__auto___26166__$1){
var seq__26124_26167__$1 = temp__4425__auto___26166__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26124_26167__$1)){
var c__17293__auto___26168 = cljs.core.chunk_first.call(null,seq__26124_26167__$1);
var G__26169 = cljs.core.chunk_rest.call(null,seq__26124_26167__$1);
var G__26170 = c__17293__auto___26168;
var G__26171 = cljs.core.count.call(null,c__17293__auto___26168);
var G__26172 = (0);
seq__26124_26157 = G__26169;
chunk__26125_26158 = G__26170;
count__26126_26159 = G__26171;
i__26127_26160 = G__26172;
continue;
} else {
var req_26173 = cljs.core.first.call(null,seq__26124_26167__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26173,prov);

var G__26174 = cljs.core.next.call(null,seq__26124_26167__$1);
var G__26175 = null;
var G__26176 = (0);
var G__26177 = (0);
seq__26124_26157 = G__26174;
chunk__26125_26158 = G__26175;
count__26126_26159 = G__26176;
i__26127_26160 = G__26177;
continue;
}
} else {
}
}
break;
}

var G__26178 = cljs.core.next.call(null,seq__26116__$1);
var G__26179 = null;
var G__26180 = (0);
var G__26181 = (0);
seq__26116 = G__26178;
chunk__26117 = G__26179;
count__26118 = G__26180;
i__26119 = G__26181;
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
var seq__26186_26190 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26187_26191 = null;
var count__26188_26192 = (0);
var i__26189_26193 = (0);
while(true){
if((i__26189_26193 < count__26188_26192)){
var ns_26194 = cljs.core._nth.call(null,chunk__26187_26191,i__26189_26193);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26194);

var G__26195 = seq__26186_26190;
var G__26196 = chunk__26187_26191;
var G__26197 = count__26188_26192;
var G__26198 = (i__26189_26193 + (1));
seq__26186_26190 = G__26195;
chunk__26187_26191 = G__26196;
count__26188_26192 = G__26197;
i__26189_26193 = G__26198;
continue;
} else {
var temp__4425__auto___26199 = cljs.core.seq.call(null,seq__26186_26190);
if(temp__4425__auto___26199){
var seq__26186_26200__$1 = temp__4425__auto___26199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26186_26200__$1)){
var c__17293__auto___26201 = cljs.core.chunk_first.call(null,seq__26186_26200__$1);
var G__26202 = cljs.core.chunk_rest.call(null,seq__26186_26200__$1);
var G__26203 = c__17293__auto___26201;
var G__26204 = cljs.core.count.call(null,c__17293__auto___26201);
var G__26205 = (0);
seq__26186_26190 = G__26202;
chunk__26187_26191 = G__26203;
count__26188_26192 = G__26204;
i__26189_26193 = G__26205;
continue;
} else {
var ns_26206 = cljs.core.first.call(null,seq__26186_26200__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26206);

var G__26207 = cljs.core.next.call(null,seq__26186_26200__$1);
var G__26208 = null;
var G__26209 = (0);
var G__26210 = (0);
seq__26186_26190 = G__26207;
chunk__26187_26191 = G__26208;
count__26188_26192 = G__26209;
i__26189_26193 = G__26210;
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
goog.require_figwheel_backup_ = (function (){var or__16490__auto__ = goog.require__;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
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
var G__26211__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26212__i = 0, G__26212__a = new Array(arguments.length -  0);
while (G__26212__i < G__26212__a.length) {G__26212__a[G__26212__i] = arguments[G__26212__i + 0]; ++G__26212__i;}
  args = new cljs.core.IndexedSeq(G__26212__a,0);
} 
return G__26211__delegate.call(this,args);};
G__26211.cljs$lang$maxFixedArity = 0;
G__26211.cljs$lang$applyTo = (function (arglist__26213){
var args = cljs.core.seq(arglist__26213);
return G__26211__delegate(args);
});
G__26211.cljs$core$IFn$_invoke$arity$variadic = G__26211__delegate;
return G__26211;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26214 = cljs.core._EQ_;
var expr__26215 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26214.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26215))){
return ((function (pred__26214,expr__26215){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e26217){if((e26217 instanceof Error)){
var e = e26217;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26217;

}
}})());
});
;})(pred__26214,expr__26215))
} else {
if(cljs.core.truth_(pred__26214.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26215))){
return ((function (pred__26214,expr__26215){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26214,expr__26215){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26214,expr__26215))
);

return deferred.addErrback(((function (deferred,pred__26214,expr__26215){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26214,expr__26215))
);
});
;})(pred__26214,expr__26215))
} else {
return ((function (pred__26214,expr__26215){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26214,expr__26215))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26218,callback){
var map__26221 = p__26218;
var map__26221__$1 = ((((!((map__26221 == null)))?((((map__26221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26221):map__26221);
var file_msg = map__26221__$1;
var request_url = cljs.core.get.call(null,map__26221__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26221,map__26221__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26221,map__26221__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto__){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto__){
return (function (state_26245){
var state_val_26246 = (state_26245[(1)]);
if((state_val_26246 === (7))){
var inst_26241 = (state_26245[(2)]);
var state_26245__$1 = state_26245;
var statearr_26247_26267 = state_26245__$1;
(statearr_26247_26267[(2)] = inst_26241);

(statearr_26247_26267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (1))){
var state_26245__$1 = state_26245;
var statearr_26248_26268 = state_26245__$1;
(statearr_26248_26268[(2)] = null);

(statearr_26248_26268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (4))){
var inst_26225 = (state_26245[(7)]);
var inst_26225__$1 = (state_26245[(2)]);
var state_26245__$1 = (function (){var statearr_26249 = state_26245;
(statearr_26249[(7)] = inst_26225__$1);

return statearr_26249;
})();
if(cljs.core.truth_(inst_26225__$1)){
var statearr_26250_26269 = state_26245__$1;
(statearr_26250_26269[(1)] = (5));

} else {
var statearr_26251_26270 = state_26245__$1;
(statearr_26251_26270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (6))){
var state_26245__$1 = state_26245;
var statearr_26252_26271 = state_26245__$1;
(statearr_26252_26271[(2)] = null);

(statearr_26252_26271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (3))){
var inst_26243 = (state_26245[(2)]);
var state_26245__$1 = state_26245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26245__$1,inst_26243);
} else {
if((state_val_26246 === (2))){
var state_26245__$1 = state_26245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26245__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26246 === (11))){
var inst_26237 = (state_26245[(2)]);
var state_26245__$1 = (function (){var statearr_26253 = state_26245;
(statearr_26253[(8)] = inst_26237);

return statearr_26253;
})();
var statearr_26254_26272 = state_26245__$1;
(statearr_26254_26272[(2)] = null);

(statearr_26254_26272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (9))){
var inst_26231 = (state_26245[(9)]);
var inst_26229 = (state_26245[(10)]);
var inst_26233 = inst_26231.call(null,inst_26229);
var state_26245__$1 = state_26245;
var statearr_26255_26273 = state_26245__$1;
(statearr_26255_26273[(2)] = inst_26233);

(statearr_26255_26273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (5))){
var inst_26225 = (state_26245[(7)]);
var inst_26227 = figwheel.client.file_reloading.blocking_load.call(null,inst_26225);
var state_26245__$1 = state_26245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26245__$1,(8),inst_26227);
} else {
if((state_val_26246 === (10))){
var inst_26229 = (state_26245[(10)]);
var inst_26235 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26229);
var state_26245__$1 = state_26245;
var statearr_26256_26274 = state_26245__$1;
(statearr_26256_26274[(2)] = inst_26235);

(statearr_26256_26274[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26246 === (8))){
var inst_26231 = (state_26245[(9)]);
var inst_26225 = (state_26245[(7)]);
var inst_26229 = (state_26245[(2)]);
var inst_26230 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26231__$1 = cljs.core.get.call(null,inst_26230,inst_26225);
var state_26245__$1 = (function (){var statearr_26257 = state_26245;
(statearr_26257[(9)] = inst_26231__$1);

(statearr_26257[(10)] = inst_26229);

return statearr_26257;
})();
if(cljs.core.truth_(inst_26231__$1)){
var statearr_26258_26275 = state_26245__$1;
(statearr_26258_26275[(1)] = (9));

} else {
var statearr_26259_26276 = state_26245__$1;
(statearr_26259_26276[(1)] = (10));

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
});})(c__19571__auto__))
;
return ((function (switch__19506__auto__,c__19571__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19507__auto__ = null;
var figwheel$client$file_reloading$state_machine__19507__auto____0 = (function (){
var statearr_26263 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26263[(0)] = figwheel$client$file_reloading$state_machine__19507__auto__);

(statearr_26263[(1)] = (1));

return statearr_26263;
});
var figwheel$client$file_reloading$state_machine__19507__auto____1 = (function (state_26245){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_26245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e26264){if((e26264 instanceof Object)){
var ex__19510__auto__ = e26264;
var statearr_26265_26277 = state_26245;
(statearr_26265_26277[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26278 = state_26245;
state_26245 = G__26278;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19507__auto__ = function(state_26245){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19507__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19507__auto____1.call(this,state_26245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19507__auto____0;
figwheel$client$file_reloading$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19507__auto____1;
return figwheel$client$file_reloading$state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto__))
})();
var state__19573__auto__ = (function (){var statearr_26266 = f__19572__auto__.call(null);
(statearr_26266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto__);

return statearr_26266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto__))
);

return c__19571__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26279,callback){
var map__26282 = p__26279;
var map__26282__$1 = ((((!((map__26282 == null)))?((((map__26282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26282):map__26282);
var file_msg = map__26282__$1;
var namespace = cljs.core.get.call(null,map__26282__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26282,map__26282__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26282,map__26282__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26284){
var map__26287 = p__26284;
var map__26287__$1 = ((((!((map__26287 == null)))?((((map__26287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26287):map__26287);
var file_msg = map__26287__$1;
var namespace = cljs.core.get.call(null,map__26287__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16478__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16478__auto__){
var or__16490__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
var or__16490__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16490__auto____$1)){
return or__16490__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16478__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26289,callback){
var map__26292 = p__26289;
var map__26292__$1 = ((((!((map__26292 == null)))?((((map__26292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26292):map__26292);
var file_msg = map__26292__$1;
var request_url = cljs.core.get.call(null,map__26292__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26292__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19571__auto___26380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___26380,out){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___26380,out){
return (function (state_26362){
var state_val_26363 = (state_26362[(1)]);
if((state_val_26363 === (1))){
var inst_26340 = cljs.core.nth.call(null,files,(0),null);
var inst_26341 = cljs.core.nthnext.call(null,files,(1));
var inst_26342 = files;
var state_26362__$1 = (function (){var statearr_26364 = state_26362;
(statearr_26364[(7)] = inst_26342);

(statearr_26364[(8)] = inst_26341);

(statearr_26364[(9)] = inst_26340);

return statearr_26364;
})();
var statearr_26365_26381 = state_26362__$1;
(statearr_26365_26381[(2)] = null);

(statearr_26365_26381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (2))){
var inst_26342 = (state_26362[(7)]);
var inst_26345 = (state_26362[(10)]);
var inst_26345__$1 = cljs.core.nth.call(null,inst_26342,(0),null);
var inst_26346 = cljs.core.nthnext.call(null,inst_26342,(1));
var inst_26347 = (inst_26345__$1 == null);
var inst_26348 = cljs.core.not.call(null,inst_26347);
var state_26362__$1 = (function (){var statearr_26366 = state_26362;
(statearr_26366[(11)] = inst_26346);

(statearr_26366[(10)] = inst_26345__$1);

return statearr_26366;
})();
if(inst_26348){
var statearr_26367_26382 = state_26362__$1;
(statearr_26367_26382[(1)] = (4));

} else {
var statearr_26368_26383 = state_26362__$1;
(statearr_26368_26383[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (3))){
var inst_26360 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26362__$1,inst_26360);
} else {
if((state_val_26363 === (4))){
var inst_26345 = (state_26362[(10)]);
var inst_26350 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26345);
var state_26362__$1 = state_26362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26362__$1,(7),inst_26350);
} else {
if((state_val_26363 === (5))){
var inst_26356 = cljs.core.async.close_BANG_.call(null,out);
var state_26362__$1 = state_26362;
var statearr_26369_26384 = state_26362__$1;
(statearr_26369_26384[(2)] = inst_26356);

(statearr_26369_26384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (6))){
var inst_26358 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
var statearr_26370_26385 = state_26362__$1;
(statearr_26370_26385[(2)] = inst_26358);

(statearr_26370_26385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (7))){
var inst_26346 = (state_26362[(11)]);
var inst_26352 = (state_26362[(2)]);
var inst_26353 = cljs.core.async.put_BANG_.call(null,out,inst_26352);
var inst_26342 = inst_26346;
var state_26362__$1 = (function (){var statearr_26371 = state_26362;
(statearr_26371[(7)] = inst_26342);

(statearr_26371[(12)] = inst_26353);

return statearr_26371;
})();
var statearr_26372_26386 = state_26362__$1;
(statearr_26372_26386[(2)] = null);

(statearr_26372_26386[(1)] = (2));


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
});})(c__19571__auto___26380,out))
;
return ((function (switch__19506__auto__,c__19571__auto___26380,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19507__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19507__auto____0 = (function (){
var statearr_26376 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26376[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19507__auto__);

(statearr_26376[(1)] = (1));

return statearr_26376;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19507__auto____1 = (function (state_26362){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_26362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e26377){if((e26377 instanceof Object)){
var ex__19510__auto__ = e26377;
var statearr_26378_26387 = state_26362;
(statearr_26378_26387[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26388 = state_26362;
state_26362 = G__26388;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19507__auto__ = function(state_26362){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19507__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19507__auto____1.call(this,state_26362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19507__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19507__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___26380,out))
})();
var state__19573__auto__ = (function (){var statearr_26379 = f__19572__auto__.call(null);
(statearr_26379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___26380);

return statearr_26379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___26380,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26389,opts){
var map__26393 = p__26389;
var map__26393__$1 = ((((!((map__26393 == null)))?((((map__26393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26393):map__26393);
var eval_body__$1 = cljs.core.get.call(null,map__26393__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26393__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16478__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16478__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16478__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26395){var e = e26395;
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
return (function (p1__26396_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26396_SHARP_),n);
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
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26401){
var vec__26402 = p__26401;
var k__$1 = cljs.core.nth.call(null,vec__26402,(0),null);
var v = cljs.core.nth.call(null,vec__26402,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26403){
var vec__26404 = p__26403;
var k__$1 = cljs.core.nth.call(null,vec__26404,(0),null);
var v = cljs.core.nth.call(null,vec__26404,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26408,p__26409){
var map__26656 = p__26408;
var map__26656__$1 = ((((!((map__26656 == null)))?((((map__26656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26656):map__26656);
var opts = map__26656__$1;
var before_jsload = cljs.core.get.call(null,map__26656__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26656__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26656__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26657 = p__26409;
var map__26657__$1 = ((((!((map__26657 == null)))?((((map__26657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26657):map__26657);
var msg = map__26657__$1;
var files = cljs.core.get.call(null,map__26657__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26657__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26657__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26810){
var state_val_26811 = (state_26810[(1)]);
if((state_val_26811 === (7))){
var inst_26673 = (state_26810[(7)]);
var inst_26671 = (state_26810[(8)]);
var inst_26674 = (state_26810[(9)]);
var inst_26672 = (state_26810[(10)]);
var inst_26679 = cljs.core._nth.call(null,inst_26672,inst_26674);
var inst_26680 = figwheel.client.file_reloading.eval_body.call(null,inst_26679,opts);
var inst_26681 = (inst_26674 + (1));
var tmp26812 = inst_26673;
var tmp26813 = inst_26671;
var tmp26814 = inst_26672;
var inst_26671__$1 = tmp26813;
var inst_26672__$1 = tmp26814;
var inst_26673__$1 = tmp26812;
var inst_26674__$1 = inst_26681;
var state_26810__$1 = (function (){var statearr_26815 = state_26810;
(statearr_26815[(7)] = inst_26673__$1);

(statearr_26815[(8)] = inst_26671__$1);

(statearr_26815[(9)] = inst_26674__$1);

(statearr_26815[(11)] = inst_26680);

(statearr_26815[(10)] = inst_26672__$1);

return statearr_26815;
})();
var statearr_26816_26902 = state_26810__$1;
(statearr_26816_26902[(2)] = null);

(statearr_26816_26902[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (20))){
var inst_26714 = (state_26810[(12)]);
var inst_26722 = figwheel.client.file_reloading.sort_files.call(null,inst_26714);
var state_26810__$1 = state_26810;
var statearr_26817_26903 = state_26810__$1;
(statearr_26817_26903[(2)] = inst_26722);

(statearr_26817_26903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (27))){
var state_26810__$1 = state_26810;
var statearr_26818_26904 = state_26810__$1;
(statearr_26818_26904[(2)] = null);

(statearr_26818_26904[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (1))){
var inst_26663 = (state_26810[(13)]);
var inst_26660 = before_jsload.call(null,files);
var inst_26661 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26662 = (function (){return ((function (inst_26663,inst_26660,inst_26661,state_val_26811,c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26405_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26405_SHARP_);
});
;})(inst_26663,inst_26660,inst_26661,state_val_26811,c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26663__$1 = cljs.core.filter.call(null,inst_26662,files);
var inst_26664 = cljs.core.not_empty.call(null,inst_26663__$1);
var state_26810__$1 = (function (){var statearr_26819 = state_26810;
(statearr_26819[(14)] = inst_26660);

(statearr_26819[(15)] = inst_26661);

(statearr_26819[(13)] = inst_26663__$1);

return statearr_26819;
})();
if(cljs.core.truth_(inst_26664)){
var statearr_26820_26905 = state_26810__$1;
(statearr_26820_26905[(1)] = (2));

} else {
var statearr_26821_26906 = state_26810__$1;
(statearr_26821_26906[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (24))){
var state_26810__$1 = state_26810;
var statearr_26822_26907 = state_26810__$1;
(statearr_26822_26907[(2)] = null);

(statearr_26822_26907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (39))){
var inst_26764 = (state_26810[(16)]);
var state_26810__$1 = state_26810;
var statearr_26823_26908 = state_26810__$1;
(statearr_26823_26908[(2)] = inst_26764);

(statearr_26823_26908[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (46))){
var inst_26805 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
var statearr_26824_26909 = state_26810__$1;
(statearr_26824_26909[(2)] = inst_26805);

(statearr_26824_26909[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (4))){
var inst_26708 = (state_26810[(2)]);
var inst_26709 = cljs.core.List.EMPTY;
var inst_26710 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26709);
var inst_26711 = (function (){return ((function (inst_26708,inst_26709,inst_26710,state_val_26811,c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26406_SHARP_){
var and__16478__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26406_SHARP_);
if(cljs.core.truth_(and__16478__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26406_SHARP_));
} else {
return and__16478__auto__;
}
});
;})(inst_26708,inst_26709,inst_26710,state_val_26811,c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26712 = cljs.core.filter.call(null,inst_26711,files);
var inst_26713 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26714 = cljs.core.concat.call(null,inst_26712,inst_26713);
var state_26810__$1 = (function (){var statearr_26825 = state_26810;
(statearr_26825[(12)] = inst_26714);

(statearr_26825[(17)] = inst_26710);

(statearr_26825[(18)] = inst_26708);

return statearr_26825;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26826_26910 = state_26810__$1;
(statearr_26826_26910[(1)] = (16));

} else {
var statearr_26827_26911 = state_26810__$1;
(statearr_26827_26911[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (15))){
var inst_26698 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
var statearr_26828_26912 = state_26810__$1;
(statearr_26828_26912[(2)] = inst_26698);

(statearr_26828_26912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (21))){
var inst_26724 = (state_26810[(19)]);
var inst_26724__$1 = (state_26810[(2)]);
var inst_26725 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26724__$1);
var state_26810__$1 = (function (){var statearr_26829 = state_26810;
(statearr_26829[(19)] = inst_26724__$1);

return statearr_26829;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26810__$1,(22),inst_26725);
} else {
if((state_val_26811 === (31))){
var inst_26808 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26810__$1,inst_26808);
} else {
if((state_val_26811 === (32))){
var inst_26764 = (state_26810[(16)]);
var inst_26769 = inst_26764.cljs$lang$protocol_mask$partition0$;
var inst_26770 = (inst_26769 & (64));
var inst_26771 = inst_26764.cljs$core$ISeq$;
var inst_26772 = (inst_26770) || (inst_26771);
var state_26810__$1 = state_26810;
if(cljs.core.truth_(inst_26772)){
var statearr_26830_26913 = state_26810__$1;
(statearr_26830_26913[(1)] = (35));

} else {
var statearr_26831_26914 = state_26810__$1;
(statearr_26831_26914[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (40))){
var inst_26785 = (state_26810[(20)]);
var inst_26784 = (state_26810[(2)]);
var inst_26785__$1 = cljs.core.get.call(null,inst_26784,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26786 = cljs.core.get.call(null,inst_26784,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26787 = cljs.core.not_empty.call(null,inst_26785__$1);
var state_26810__$1 = (function (){var statearr_26832 = state_26810;
(statearr_26832[(21)] = inst_26786);

(statearr_26832[(20)] = inst_26785__$1);

return statearr_26832;
})();
if(cljs.core.truth_(inst_26787)){
var statearr_26833_26915 = state_26810__$1;
(statearr_26833_26915[(1)] = (41));

} else {
var statearr_26834_26916 = state_26810__$1;
(statearr_26834_26916[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (33))){
var state_26810__$1 = state_26810;
var statearr_26835_26917 = state_26810__$1;
(statearr_26835_26917[(2)] = false);

(statearr_26835_26917[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (13))){
var inst_26684 = (state_26810[(22)]);
var inst_26688 = cljs.core.chunk_first.call(null,inst_26684);
var inst_26689 = cljs.core.chunk_rest.call(null,inst_26684);
var inst_26690 = cljs.core.count.call(null,inst_26688);
var inst_26671 = inst_26689;
var inst_26672 = inst_26688;
var inst_26673 = inst_26690;
var inst_26674 = (0);
var state_26810__$1 = (function (){var statearr_26836 = state_26810;
(statearr_26836[(7)] = inst_26673);

(statearr_26836[(8)] = inst_26671);

(statearr_26836[(9)] = inst_26674);

(statearr_26836[(10)] = inst_26672);

return statearr_26836;
})();
var statearr_26837_26918 = state_26810__$1;
(statearr_26837_26918[(2)] = null);

(statearr_26837_26918[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (22))){
var inst_26728 = (state_26810[(23)]);
var inst_26727 = (state_26810[(24)]);
var inst_26724 = (state_26810[(19)]);
var inst_26732 = (state_26810[(25)]);
var inst_26727__$1 = (state_26810[(2)]);
var inst_26728__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26727__$1);
var inst_26729 = (function (){var all_files = inst_26724;
var res_SINGLEQUOTE_ = inst_26727__$1;
var res = inst_26728__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26728,inst_26727,inst_26724,inst_26732,inst_26727__$1,inst_26728__$1,state_val_26811,c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26407_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26407_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26728,inst_26727,inst_26724,inst_26732,inst_26727__$1,inst_26728__$1,state_val_26811,c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26730 = cljs.core.filter.call(null,inst_26729,inst_26727__$1);
var inst_26731 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26732__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26731);
var inst_26733 = cljs.core.not_empty.call(null,inst_26732__$1);
var state_26810__$1 = (function (){var statearr_26838 = state_26810;
(statearr_26838[(23)] = inst_26728__$1);

(statearr_26838[(24)] = inst_26727__$1);

(statearr_26838[(25)] = inst_26732__$1);

(statearr_26838[(26)] = inst_26730);

return statearr_26838;
})();
if(cljs.core.truth_(inst_26733)){
var statearr_26839_26919 = state_26810__$1;
(statearr_26839_26919[(1)] = (23));

} else {
var statearr_26840_26920 = state_26810__$1;
(statearr_26840_26920[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (36))){
var state_26810__$1 = state_26810;
var statearr_26841_26921 = state_26810__$1;
(statearr_26841_26921[(2)] = false);

(statearr_26841_26921[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (41))){
var inst_26785 = (state_26810[(20)]);
var inst_26789 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26790 = cljs.core.map.call(null,inst_26789,inst_26785);
var inst_26791 = cljs.core.pr_str.call(null,inst_26790);
var inst_26792 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26791)].join('');
var inst_26793 = figwheel.client.utils.log.call(null,inst_26792);
var state_26810__$1 = state_26810;
var statearr_26842_26922 = state_26810__$1;
(statearr_26842_26922[(2)] = inst_26793);

(statearr_26842_26922[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (43))){
var inst_26786 = (state_26810[(21)]);
var inst_26796 = (state_26810[(2)]);
var inst_26797 = cljs.core.not_empty.call(null,inst_26786);
var state_26810__$1 = (function (){var statearr_26843 = state_26810;
(statearr_26843[(27)] = inst_26796);

return statearr_26843;
})();
if(cljs.core.truth_(inst_26797)){
var statearr_26844_26923 = state_26810__$1;
(statearr_26844_26923[(1)] = (44));

} else {
var statearr_26845_26924 = state_26810__$1;
(statearr_26845_26924[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (29))){
var inst_26728 = (state_26810[(23)]);
var inst_26727 = (state_26810[(24)]);
var inst_26724 = (state_26810[(19)]);
var inst_26764 = (state_26810[(16)]);
var inst_26732 = (state_26810[(25)]);
var inst_26730 = (state_26810[(26)]);
var inst_26760 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26763 = (function (){var all_files = inst_26724;
var res_SINGLEQUOTE_ = inst_26727;
var res = inst_26728;
var files_not_loaded = inst_26730;
var dependencies_that_loaded = inst_26732;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26728,inst_26727,inst_26724,inst_26764,inst_26732,inst_26730,inst_26760,state_val_26811,c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26762){
var map__26846 = p__26762;
var map__26846__$1 = ((((!((map__26846 == null)))?((((map__26846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26846):map__26846);
var namespace = cljs.core.get.call(null,map__26846__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26728,inst_26727,inst_26724,inst_26764,inst_26732,inst_26730,inst_26760,state_val_26811,c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26764__$1 = cljs.core.group_by.call(null,inst_26763,inst_26730);
var inst_26766 = (inst_26764__$1 == null);
var inst_26767 = cljs.core.not.call(null,inst_26766);
var state_26810__$1 = (function (){var statearr_26848 = state_26810;
(statearr_26848[(28)] = inst_26760);

(statearr_26848[(16)] = inst_26764__$1);

return statearr_26848;
})();
if(inst_26767){
var statearr_26849_26925 = state_26810__$1;
(statearr_26849_26925[(1)] = (32));

} else {
var statearr_26850_26926 = state_26810__$1;
(statearr_26850_26926[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (44))){
var inst_26786 = (state_26810[(21)]);
var inst_26799 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26786);
var inst_26800 = cljs.core.pr_str.call(null,inst_26799);
var inst_26801 = [cljs.core.str("not required: "),cljs.core.str(inst_26800)].join('');
var inst_26802 = figwheel.client.utils.log.call(null,inst_26801);
var state_26810__$1 = state_26810;
var statearr_26851_26927 = state_26810__$1;
(statearr_26851_26927[(2)] = inst_26802);

(statearr_26851_26927[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (6))){
var inst_26705 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
var statearr_26852_26928 = state_26810__$1;
(statearr_26852_26928[(2)] = inst_26705);

(statearr_26852_26928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (28))){
var inst_26730 = (state_26810[(26)]);
var inst_26757 = (state_26810[(2)]);
var inst_26758 = cljs.core.not_empty.call(null,inst_26730);
var state_26810__$1 = (function (){var statearr_26853 = state_26810;
(statearr_26853[(29)] = inst_26757);

return statearr_26853;
})();
if(cljs.core.truth_(inst_26758)){
var statearr_26854_26929 = state_26810__$1;
(statearr_26854_26929[(1)] = (29));

} else {
var statearr_26855_26930 = state_26810__$1;
(statearr_26855_26930[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (25))){
var inst_26728 = (state_26810[(23)]);
var inst_26744 = (state_26810[(2)]);
var inst_26745 = cljs.core.not_empty.call(null,inst_26728);
var state_26810__$1 = (function (){var statearr_26856 = state_26810;
(statearr_26856[(30)] = inst_26744);

return statearr_26856;
})();
if(cljs.core.truth_(inst_26745)){
var statearr_26857_26931 = state_26810__$1;
(statearr_26857_26931[(1)] = (26));

} else {
var statearr_26858_26932 = state_26810__$1;
(statearr_26858_26932[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (34))){
var inst_26779 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
if(cljs.core.truth_(inst_26779)){
var statearr_26859_26933 = state_26810__$1;
(statearr_26859_26933[(1)] = (38));

} else {
var statearr_26860_26934 = state_26810__$1;
(statearr_26860_26934[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (17))){
var state_26810__$1 = state_26810;
var statearr_26861_26935 = state_26810__$1;
(statearr_26861_26935[(2)] = recompile_dependents);

(statearr_26861_26935[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (3))){
var state_26810__$1 = state_26810;
var statearr_26862_26936 = state_26810__$1;
(statearr_26862_26936[(2)] = null);

(statearr_26862_26936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (12))){
var inst_26701 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
var statearr_26863_26937 = state_26810__$1;
(statearr_26863_26937[(2)] = inst_26701);

(statearr_26863_26937[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (2))){
var inst_26663 = (state_26810[(13)]);
var inst_26670 = cljs.core.seq.call(null,inst_26663);
var inst_26671 = inst_26670;
var inst_26672 = null;
var inst_26673 = (0);
var inst_26674 = (0);
var state_26810__$1 = (function (){var statearr_26864 = state_26810;
(statearr_26864[(7)] = inst_26673);

(statearr_26864[(8)] = inst_26671);

(statearr_26864[(9)] = inst_26674);

(statearr_26864[(10)] = inst_26672);

return statearr_26864;
})();
var statearr_26865_26938 = state_26810__$1;
(statearr_26865_26938[(2)] = null);

(statearr_26865_26938[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (23))){
var inst_26728 = (state_26810[(23)]);
var inst_26727 = (state_26810[(24)]);
var inst_26724 = (state_26810[(19)]);
var inst_26732 = (state_26810[(25)]);
var inst_26730 = (state_26810[(26)]);
var inst_26735 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26737 = (function (){var all_files = inst_26724;
var res_SINGLEQUOTE_ = inst_26727;
var res = inst_26728;
var files_not_loaded = inst_26730;
var dependencies_that_loaded = inst_26732;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26728,inst_26727,inst_26724,inst_26732,inst_26730,inst_26735,state_val_26811,c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26736){
var map__26866 = p__26736;
var map__26866__$1 = ((((!((map__26866 == null)))?((((map__26866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26866):map__26866);
var request_url = cljs.core.get.call(null,map__26866__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26728,inst_26727,inst_26724,inst_26732,inst_26730,inst_26735,state_val_26811,c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26738 = cljs.core.reverse.call(null,inst_26732);
var inst_26739 = cljs.core.map.call(null,inst_26737,inst_26738);
var inst_26740 = cljs.core.pr_str.call(null,inst_26739);
var inst_26741 = figwheel.client.utils.log.call(null,inst_26740);
var state_26810__$1 = (function (){var statearr_26868 = state_26810;
(statearr_26868[(31)] = inst_26735);

return statearr_26868;
})();
var statearr_26869_26939 = state_26810__$1;
(statearr_26869_26939[(2)] = inst_26741);

(statearr_26869_26939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (35))){
var state_26810__$1 = state_26810;
var statearr_26870_26940 = state_26810__$1;
(statearr_26870_26940[(2)] = true);

(statearr_26870_26940[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (19))){
var inst_26714 = (state_26810[(12)]);
var inst_26720 = figwheel.client.file_reloading.expand_files.call(null,inst_26714);
var state_26810__$1 = state_26810;
var statearr_26871_26941 = state_26810__$1;
(statearr_26871_26941[(2)] = inst_26720);

(statearr_26871_26941[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (11))){
var state_26810__$1 = state_26810;
var statearr_26872_26942 = state_26810__$1;
(statearr_26872_26942[(2)] = null);

(statearr_26872_26942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (9))){
var inst_26703 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
var statearr_26873_26943 = state_26810__$1;
(statearr_26873_26943[(2)] = inst_26703);

(statearr_26873_26943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (5))){
var inst_26673 = (state_26810[(7)]);
var inst_26674 = (state_26810[(9)]);
var inst_26676 = (inst_26674 < inst_26673);
var inst_26677 = inst_26676;
var state_26810__$1 = state_26810;
if(cljs.core.truth_(inst_26677)){
var statearr_26874_26944 = state_26810__$1;
(statearr_26874_26944[(1)] = (7));

} else {
var statearr_26875_26945 = state_26810__$1;
(statearr_26875_26945[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (14))){
var inst_26684 = (state_26810[(22)]);
var inst_26693 = cljs.core.first.call(null,inst_26684);
var inst_26694 = figwheel.client.file_reloading.eval_body.call(null,inst_26693,opts);
var inst_26695 = cljs.core.next.call(null,inst_26684);
var inst_26671 = inst_26695;
var inst_26672 = null;
var inst_26673 = (0);
var inst_26674 = (0);
var state_26810__$1 = (function (){var statearr_26876 = state_26810;
(statearr_26876[(7)] = inst_26673);

(statearr_26876[(8)] = inst_26671);

(statearr_26876[(9)] = inst_26674);

(statearr_26876[(32)] = inst_26694);

(statearr_26876[(10)] = inst_26672);

return statearr_26876;
})();
var statearr_26877_26946 = state_26810__$1;
(statearr_26877_26946[(2)] = null);

(statearr_26877_26946[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (45))){
var state_26810__$1 = state_26810;
var statearr_26878_26947 = state_26810__$1;
(statearr_26878_26947[(2)] = null);

(statearr_26878_26947[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (26))){
var inst_26728 = (state_26810[(23)]);
var inst_26727 = (state_26810[(24)]);
var inst_26724 = (state_26810[(19)]);
var inst_26732 = (state_26810[(25)]);
var inst_26730 = (state_26810[(26)]);
var inst_26747 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26749 = (function (){var all_files = inst_26724;
var res_SINGLEQUOTE_ = inst_26727;
var res = inst_26728;
var files_not_loaded = inst_26730;
var dependencies_that_loaded = inst_26732;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26728,inst_26727,inst_26724,inst_26732,inst_26730,inst_26747,state_val_26811,c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26748){
var map__26879 = p__26748;
var map__26879__$1 = ((((!((map__26879 == null)))?((((map__26879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26879):map__26879);
var namespace = cljs.core.get.call(null,map__26879__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26879__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26728,inst_26727,inst_26724,inst_26732,inst_26730,inst_26747,state_val_26811,c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26750 = cljs.core.map.call(null,inst_26749,inst_26728);
var inst_26751 = cljs.core.pr_str.call(null,inst_26750);
var inst_26752 = figwheel.client.utils.log.call(null,inst_26751);
var inst_26753 = (function (){var all_files = inst_26724;
var res_SINGLEQUOTE_ = inst_26727;
var res = inst_26728;
var files_not_loaded = inst_26730;
var dependencies_that_loaded = inst_26732;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26728,inst_26727,inst_26724,inst_26732,inst_26730,inst_26747,inst_26749,inst_26750,inst_26751,inst_26752,state_val_26811,c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26728,inst_26727,inst_26724,inst_26732,inst_26730,inst_26747,inst_26749,inst_26750,inst_26751,inst_26752,state_val_26811,c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26754 = setTimeout(inst_26753,(10));
var state_26810__$1 = (function (){var statearr_26881 = state_26810;
(statearr_26881[(33)] = inst_26752);

(statearr_26881[(34)] = inst_26747);

return statearr_26881;
})();
var statearr_26882_26948 = state_26810__$1;
(statearr_26882_26948[(2)] = inst_26754);

(statearr_26882_26948[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (16))){
var state_26810__$1 = state_26810;
var statearr_26883_26949 = state_26810__$1;
(statearr_26883_26949[(2)] = reload_dependents);

(statearr_26883_26949[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (38))){
var inst_26764 = (state_26810[(16)]);
var inst_26781 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26764);
var state_26810__$1 = state_26810;
var statearr_26884_26950 = state_26810__$1;
(statearr_26884_26950[(2)] = inst_26781);

(statearr_26884_26950[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (30))){
var state_26810__$1 = state_26810;
var statearr_26885_26951 = state_26810__$1;
(statearr_26885_26951[(2)] = null);

(statearr_26885_26951[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (10))){
var inst_26684 = (state_26810[(22)]);
var inst_26686 = cljs.core.chunked_seq_QMARK_.call(null,inst_26684);
var state_26810__$1 = state_26810;
if(inst_26686){
var statearr_26886_26952 = state_26810__$1;
(statearr_26886_26952[(1)] = (13));

} else {
var statearr_26887_26953 = state_26810__$1;
(statearr_26887_26953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (18))){
var inst_26718 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
if(cljs.core.truth_(inst_26718)){
var statearr_26888_26954 = state_26810__$1;
(statearr_26888_26954[(1)] = (19));

} else {
var statearr_26889_26955 = state_26810__$1;
(statearr_26889_26955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (42))){
var state_26810__$1 = state_26810;
var statearr_26890_26956 = state_26810__$1;
(statearr_26890_26956[(2)] = null);

(statearr_26890_26956[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (37))){
var inst_26776 = (state_26810[(2)]);
var state_26810__$1 = state_26810;
var statearr_26891_26957 = state_26810__$1;
(statearr_26891_26957[(2)] = inst_26776);

(statearr_26891_26957[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26811 === (8))){
var inst_26684 = (state_26810[(22)]);
var inst_26671 = (state_26810[(8)]);
var inst_26684__$1 = cljs.core.seq.call(null,inst_26671);
var state_26810__$1 = (function (){var statearr_26892 = state_26810;
(statearr_26892[(22)] = inst_26684__$1);

return statearr_26892;
})();
if(inst_26684__$1){
var statearr_26893_26958 = state_26810__$1;
(statearr_26893_26958[(1)] = (10));

} else {
var statearr_26894_26959 = state_26810__$1;
(statearr_26894_26959[(1)] = (11));

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
});})(c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19506__auto__,c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19507__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19507__auto____0 = (function (){
var statearr_26898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26898[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19507__auto__);

(statearr_26898[(1)] = (1));

return statearr_26898;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19507__auto____1 = (function (state_26810){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_26810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e26899){if((e26899 instanceof Object)){
var ex__19510__auto__ = e26899;
var statearr_26900_26960 = state_26810;
(statearr_26900_26960[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26961 = state_26810;
state_26810 = G__26961;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19507__auto__ = function(state_26810){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19507__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19507__auto____1.call(this,state_26810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19507__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19507__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19573__auto__ = (function (){var statearr_26901 = f__19572__auto__.call(null);
(statearr_26901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto__);

return statearr_26901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto__,map__26656,map__26656__$1,opts,before_jsload,on_jsload,reload_dependents,map__26657,map__26657__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19571__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26964,link){
var map__26967 = p__26964;
var map__26967__$1 = ((((!((map__26967 == null)))?((((map__26967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26967):map__26967);
var file = cljs.core.get.call(null,map__26967__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26967,map__26967__$1,file){
return (function (p1__26962_SHARP_,p2__26963_SHARP_){
if(cljs.core._EQ_.call(null,p1__26962_SHARP_,p2__26963_SHARP_)){
return p1__26962_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26967,map__26967__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26973){
var map__26974 = p__26973;
var map__26974__$1 = ((((!((map__26974 == null)))?((((map__26974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26974):map__26974);
var match_length = cljs.core.get.call(null,map__26974__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26974__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26969_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26969_SHARP_);
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
var args26976 = [];
var len__17548__auto___26979 = arguments.length;
var i__17549__auto___26980 = (0);
while(true){
if((i__17549__auto___26980 < len__17548__auto___26979)){
args26976.push((arguments[i__17549__auto___26980]));

var G__26981 = (i__17549__auto___26980 + (1));
i__17549__auto___26980 = G__26981;
continue;
} else {
}
break;
}

var G__26978 = args26976.length;
switch (G__26978) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26976.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26983_SHARP_,p2__26984_SHARP_){
return cljs.core.assoc.call(null,p1__26983_SHARP_,cljs.core.get.call(null,p2__26984_SHARP_,key),p2__26984_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26985){
var map__26988 = p__26985;
var map__26988__$1 = ((((!((map__26988 == null)))?((((map__26988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26988):map__26988);
var f_data = map__26988__$1;
var file = cljs.core.get.call(null,map__26988__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26990,files_msg){
var map__26997 = p__26990;
var map__26997__$1 = ((((!((map__26997 == null)))?((((map__26997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26997):map__26997);
var opts = map__26997__$1;
var on_cssload = cljs.core.get.call(null,map__26997__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26999_27003 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27000_27004 = null;
var count__27001_27005 = (0);
var i__27002_27006 = (0);
while(true){
if((i__27002_27006 < count__27001_27005)){
var f_27007 = cljs.core._nth.call(null,chunk__27000_27004,i__27002_27006);
figwheel.client.file_reloading.reload_css_file.call(null,f_27007);

var G__27008 = seq__26999_27003;
var G__27009 = chunk__27000_27004;
var G__27010 = count__27001_27005;
var G__27011 = (i__27002_27006 + (1));
seq__26999_27003 = G__27008;
chunk__27000_27004 = G__27009;
count__27001_27005 = G__27010;
i__27002_27006 = G__27011;
continue;
} else {
var temp__4425__auto___27012 = cljs.core.seq.call(null,seq__26999_27003);
if(temp__4425__auto___27012){
var seq__26999_27013__$1 = temp__4425__auto___27012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26999_27013__$1)){
var c__17293__auto___27014 = cljs.core.chunk_first.call(null,seq__26999_27013__$1);
var G__27015 = cljs.core.chunk_rest.call(null,seq__26999_27013__$1);
var G__27016 = c__17293__auto___27014;
var G__27017 = cljs.core.count.call(null,c__17293__auto___27014);
var G__27018 = (0);
seq__26999_27003 = G__27015;
chunk__27000_27004 = G__27016;
count__27001_27005 = G__27017;
i__27002_27006 = G__27018;
continue;
} else {
var f_27019 = cljs.core.first.call(null,seq__26999_27013__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27019);

var G__27020 = cljs.core.next.call(null,seq__26999_27013__$1);
var G__27021 = null;
var G__27022 = (0);
var G__27023 = (0);
seq__26999_27003 = G__27020;
chunk__27000_27004 = G__27021;
count__27001_27005 = G__27022;
i__27002_27006 = G__27023;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26997,map__26997__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26997,map__26997__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1441471067157