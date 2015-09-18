// Compiled by ClojureScript 1.7.122 {}
goog.provide('rum');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('sablono.core');
var last_id_24269 = cljs.core.volatile_BANG_.call(null,(0));
rum.next_id = ((function (last_id_24269){
return (function rum$next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_24269,(cljs.core._deref.call(null,last_id_24269) + (1)));
});})(last_id_24269))
;
rum.state = (function rum$state(comp){
return (comp.state[":rum/state"]);
});
rum.id = (function rum$id(comp){
return new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rum.state.call(null,comp)));
});
rum.collect = (function rum$collect(fn_key,classes){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,fn_key,classes));
});
rum.call_all = (function rum$call_all(var_args){
var args__17555__auto__ = [];
var len__17548__auto___24273 = arguments.length;
var i__17549__auto___24274 = (0);
while(true){
if((i__17549__auto___24274 < len__17548__auto___24273)){
args__17555__auto__.push((arguments[i__17549__auto___24274]));

var G__24275 = (i__17549__auto___24274 + (1));
i__17549__auto___24274 = G__24275;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((2) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((2)),(0))):null);
return rum.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17556__auto__);
});

rum.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.call_all.cljs$lang$maxFixedArity = (2);

rum.call_all.cljs$lang$applyTo = (function (seq24270){
var G__24271 = cljs.core.first.call(null,seq24270);
var seq24270__$1 = cljs.core.next.call(null,seq24270);
var G__24272 = cljs.core.first.call(null,seq24270__$1);
var seq24270__$2 = cljs.core.next.call(null,seq24270__$1);
return rum.call_all.cljs$core$IFn$_invoke$arity$variadic(G__24271,G__24272,seq24270__$2);
});
rum.build_class = (function rum$build_class(classes,display_name){
var init = rum.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),classes);
var will_mount = rum.collect.call(null,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),classes);
var did_mount = rum.collect.call(null,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),classes);
var transfer_state = rum.collect.call(null,new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),classes);
var should_update = rum.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),classes);
var will_update = rum.collect.call(null,new cljs.core.Keyword(null,"will-update","will-update",328062998),classes);
var render = cljs.core.first.call(null,rum.collect.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),classes));
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render){
return (function (p1__24277_SHARP_,p2__24276_SHARP_){
return p2__24276_SHARP_.call(null,p1__24277_SHARP_);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render))
,render,rum.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),classes));
var did_update = rum.collect.call(null,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),classes);
var will_unmount = rum.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount){
return (function (props){
return rum.call_all.call(null,(props[":rum/initial-state"]),init,props);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount))
;
var child_context_types = rum.collect.call(null,new cljs.core.Keyword(null,"child-context-types","child-context-types",1863743773),classes);
var child_context = rum.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),classes);
var context_types = rum.collect.call(null,new cljs.core.Keyword(null,"context-types","context-types",1252270646),classes);
return React.createClass({"componentDidUpdate": ((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.state.call(null,this$),rum.call_all.call(null,cljs.core._deref.call(null,rum.state.call(null,this$)),did_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "childContextTypes": ((cljs.core.empty_QMARK_.call(null,child_context_types))?null:cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.merge,child_context_types))), "displayName": display_name, "contextTypes": ((cljs.core.empty_QMARK_.call(null,context_types))?null:cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.merge,context_types))), "componentWillUnmount": ((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.state.call(null,this$),rum.call_all.call(null,cljs.core._deref.call(null,rum.state.call(null,this$)),will_unmount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "componentWillReceiveProps": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.state.call(null,this$));
var next_state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state.call(null,next_props));
var next_state__$1 = cljs.core.reduce.call(null,((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (p1__24279_SHARP_,p2__24278_SHARP_){
return p2__24278_SHARP_.call(null,old_state,p1__24279_SHARP_);
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
,next_state,transfer_state);
return this$.setState({":rum/state": cljs.core.volatile_BANG_.call(null,next_state__$1)});
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
, "shouldComponentUpdate": ((cljs.core.empty_QMARK_.call(null,should_update))?cljs.core.constantly.call(null,true):((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__16490__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (p1__24280_SHARP_){
return p1__24280_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
,should_update);
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "render": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
var state = rum.state.call(null,this$);
var vec__24283 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__24283,(0),null);
var next_state = cljs.core.nth.call(null,vec__24283,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
, "getChildContext": ((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (p1__24281_SHARP_){
return p1__24281_SHARP_.call(null,state);
});})(state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "componentWillUpdate": ((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "getInitialState": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
var props = this$.props;
var state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),rum.next_id.call(null)], null),props__GT_state.call(null,props));
return {":rum/state": cljs.core.volatile_BANG_.call(null,state)};
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
, "componentDidMount": ((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.state.call(null,this$),rum.call_all.call(null,cljs.core._deref.call(null,rum.state.call(null,this$)),did_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "componentWillMount": ((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.state.call(null,this$),rum.call_all.call(null,cljs.core._deref.call(null,rum.state.call(null,this$)),will_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
)});
});
rum.schedule = (function (){var and__16478__auto__ = typeof window !== 'undefined';
if(and__16478__auto__){
var or__16490__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
var or__16490__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__16490__auto____$1)){
return or__16490__auto____$1;
} else {
var or__16490__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__16490__auto____$2)){
return or__16490__auto____$2;
} else {
var or__16490__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__16490__auto____$3)){
return or__16490__auto____$3;
} else {
return ((function (or__16490__auto____$3,or__16490__auto____$2,or__16490__auto____$1,or__16490__auto__,and__16478__auto__){
return (function (p1__24284_SHARP_){
return setTimeout(p1__24284_SHARP_,(16));
});
;})(or__16490__auto____$3,or__16490__auto____$2,or__16490__auto____$1,or__16490__auto__,and__16478__auto__))
}
}
}
}
} else {
return and__16478__auto__;
}
})();
rum.compare_by = (function rum$compare_by(keyfn){
return (function (x,y){
return cljs.core.compare.call(null,keyfn.call(null,x),keyfn.call(null,y));
});
});
rum.empty_queue = cljs.core.sorted_set_by.call(null,rum.compare_by.call(null,rum.id));
rum.render_queue = cljs.core.volatile_BANG_.call(null,rum.empty_queue);
rum.render = (function rum$render(){
var queue = cljs.core.deref.call(null,rum.render_queue);
cljs.core.vreset_BANG_.call(null,rum.render_queue,rum.empty_queue);

var seq__24291 = cljs.core.seq.call(null,queue);
var chunk__24293 = null;
var count__24294 = (0);
var i__24295 = (0);
while(true){
if((i__24295 < count__24294)){
var comp = cljs.core._nth.call(null,chunk__24293,i__24295);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__24297 = seq__24291;
var G__24298 = chunk__24293;
var G__24299 = count__24294;
var G__24300 = (i__24295 + (1));
seq__24291 = G__24297;
chunk__24293 = G__24298;
count__24294 = G__24299;
i__24295 = G__24300;
continue;
} else {
var G__24301 = seq__24291;
var G__24302 = chunk__24293;
var G__24303 = count__24294;
var G__24304 = (i__24295 + (1));
seq__24291 = G__24301;
chunk__24293 = G__24302;
count__24294 = G__24303;
i__24295 = G__24304;
continue;
}
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24291);
if(temp__4425__auto__){
var seq__24291__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24291__$1)){
var c__17293__auto__ = cljs.core.chunk_first.call(null,seq__24291__$1);
var G__24305 = cljs.core.chunk_rest.call(null,seq__24291__$1);
var G__24306 = c__17293__auto__;
var G__24307 = cljs.core.count.call(null,c__17293__auto__);
var G__24308 = (0);
seq__24291 = G__24305;
chunk__24293 = G__24306;
count__24294 = G__24307;
i__24295 = G__24308;
continue;
} else {
var comp = cljs.core.first.call(null,seq__24291__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__24309 = cljs.core.next.call(null,seq__24291__$1);
var G__24310 = null;
var G__24311 = (0);
var G__24312 = (0);
seq__24291 = G__24309;
chunk__24293 = G__24310;
count__24294 = G__24311;
i__24295 = G__24312;
continue;
} else {
var G__24313 = cljs.core.next.call(null,seq__24291__$1);
var G__24314 = null;
var G__24315 = (0);
var G__24316 = (0);
seq__24291 = G__24313;
chunk__24293 = G__24314;
count__24294 = G__24315;
i__24295 = G__24316;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.request_render = (function rum$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.render_queue))){
rum.schedule.call(null,rum.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.render_queue),component));
});
rum.mount = (function rum$mount(component,node){
return React.render(component,node);
});
rum.render__GT_mixin = (function rum$render__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.render_state__GT_mixin = (function rum$render_state__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.render_comp__GT_mixin = (function rum$render_comp__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.args__GT_state = (function rum$args__GT_state(args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null);
});
rum.element = (function rum$element(var_args){
var args__17555__auto__ = [];
var len__17548__auto___24322 = arguments.length;
var i__17549__auto___24323 = (0);
while(true){
if((i__17549__auto___24323 < len__17548__auto___24322)){
args__17555__auto__.push((arguments[i__17549__auto___24323]));

var G__24324 = (i__17549__auto___24323 + (1));
i__17549__auto___24323 = G__24324;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((2) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((2)),(0))):null);
return rum.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17556__auto__);
});

rum.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__24320){
var vec__24321 = p__24320;
var props = cljs.core.nth.call(null,vec__24321,(0),null);
var props__$1 = (function (){var or__16490__auto__ = props;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return {};
}
})();
(props__$1[":rum/initial-state"] = state);

return React.createElement(class$,props__$1);
});

rum.element.cljs$lang$maxFixedArity = (2);

rum.element.cljs$lang$applyTo = (function (seq24317){
var G__24318 = cljs.core.first.call(null,seq24317);
var seq24317__$1 = cljs.core.next.call(null,seq24317);
var G__24319 = cljs.core.first.call(null,seq24317__$1);
var seq24317__$2 = cljs.core.next.call(null,seq24317__$1);
return rum.element.cljs$core$IFn$_invoke$arity$variadic(G__24318,G__24319,seq24317__$2);
});
rum.ctor__GT_class = (function rum$ctor__GT_class(ctor){
return new cljs.core.Keyword("rum","class","rum/class",-2030775258).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor));
});
rum.with_key = (function rum$with_key(element,key){
return React.cloneElement(element,{"key": key},null);
});
rum.with_ref = (function rum$with_ref(element,ref){
return React.cloneElement(element,{"ref": ref},null);
});
rum.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Adds an atom to component’s state that can be used as local state.
 * Atom is stored under key `:rum/local`.
 * Component will be automatically re-rendered if atom’s value changes
 */
rum.local = (function rum$local(var_args){
var args__17555__auto__ = [];
var len__17548__auto___24329 = arguments.length;
var i__17549__auto___24330 = (0);
while(true){
if((i__17549__auto___24330 < len__17548__auto___24329)){
args__17555__auto__.push((arguments[i__17549__auto___24330]));

var G__24331 = (i__17549__auto___24330 + (1));
i__17549__auto___24330 = G__24331;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((1) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((1)),(0))):null);
return rum.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17556__auto__);
});

rum.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__24327){
var vec__24328 = p__24327;
var key = cljs.core.nth.call(null,vec__24328,(0),null);
var key__$1 = (function (){var or__16490__auto__ = key;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return new cljs.core.Keyword("rum","local","rum/local",-1497916586);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),((function (key__$1,vec__24328,key){
return (function (old,new$){
return cljs.core.assoc.call(null,new$,key__$1,old.call(null,key__$1));
});})(key__$1,vec__24328,key))
,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),((function (key__$1,vec__24328,key){
return (function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key__$1,((function (local_state,component,key__$1,vec__24328,key){
return (function (_,___$1,___$2,___$3){
return rum.request_render.call(null,component);
});})(local_state,component,key__$1,vec__24328,key))
);

return cljs.core.assoc.call(null,state,key__$1,local_state);
});})(key__$1,vec__24328,key))
], null);
});

rum.local.cljs$lang$maxFixedArity = (1);

rum.local.cljs$lang$applyTo = (function (seq24325){
var G__24326 = cljs.core.first.call(null,seq24325);
var seq24325__$1 = cljs.core.next.call(null,seq24325);
return rum.local.cljs$core$IFn$_invoke$arity$variadic(G__24326,seq24325__$1);
});
rum._STAR_reactions_STAR_;
rum.reactive_key = (function rum$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_24332 = rum._STAR_reactions_STAR_;
rum._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__24333 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__24333,(0),null);
var next_state = cljs.core.nth.call(null,vec__24333,(1),null);
var new_reactions = cljs.core.deref.call(null,rum._STAR_reactions_STAR_);
var key = rum.reactive_key.call(null,state);
var seq__24334_24346 = cljs.core.seq.call(null,old_reactions);
var chunk__24335_24347 = null;
var count__24336_24348 = (0);
var i__24337_24349 = (0);
while(true){
if((i__24337_24349 < count__24336_24348)){
var ref_24350 = cljs.core._nth.call(null,chunk__24335_24347,i__24337_24349);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24350)){
} else {
cljs.core.remove_watch.call(null,ref_24350,key);
}

var G__24351 = seq__24334_24346;
var G__24352 = chunk__24335_24347;
var G__24353 = count__24336_24348;
var G__24354 = (i__24337_24349 + (1));
seq__24334_24346 = G__24351;
chunk__24335_24347 = G__24352;
count__24336_24348 = G__24353;
i__24337_24349 = G__24354;
continue;
} else {
var temp__4425__auto___24355 = cljs.core.seq.call(null,seq__24334_24346);
if(temp__4425__auto___24355){
var seq__24334_24356__$1 = temp__4425__auto___24355;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24334_24356__$1)){
var c__17293__auto___24357 = cljs.core.chunk_first.call(null,seq__24334_24356__$1);
var G__24358 = cljs.core.chunk_rest.call(null,seq__24334_24356__$1);
var G__24359 = c__17293__auto___24357;
var G__24360 = cljs.core.count.call(null,c__17293__auto___24357);
var G__24361 = (0);
seq__24334_24346 = G__24358;
chunk__24335_24347 = G__24359;
count__24336_24348 = G__24360;
i__24337_24349 = G__24361;
continue;
} else {
var ref_24362 = cljs.core.first.call(null,seq__24334_24356__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24362)){
} else {
cljs.core.remove_watch.call(null,ref_24362,key);
}

var G__24363 = cljs.core.next.call(null,seq__24334_24356__$1);
var G__24364 = null;
var G__24365 = (0);
var G__24366 = (0);
seq__24334_24346 = G__24363;
chunk__24335_24347 = G__24364;
count__24336_24348 = G__24365;
i__24337_24349 = G__24366;
continue;
}
} else {
}
}
break;
}

var seq__24338_24367 = cljs.core.seq.call(null,new_reactions);
var chunk__24339_24368 = null;
var count__24340_24369 = (0);
var i__24341_24370 = (0);
while(true){
if((i__24341_24370 < count__24340_24369)){
var ref_24371 = cljs.core._nth.call(null,chunk__24339_24368,i__24341_24370);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24371)){
} else {
cljs.core.add_watch.call(null,ref_24371,key,((function (seq__24338_24367,chunk__24339_24368,count__24340_24369,i__24341_24370,ref_24371,comp,old_reactions,vec__24333,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24332){
return (function (_,___$1,___$2,___$3){
return rum.request_render.call(null,comp);
});})(seq__24338_24367,chunk__24339_24368,count__24340_24369,i__24341_24370,ref_24371,comp,old_reactions,vec__24333,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24332))
);
}

var G__24372 = seq__24338_24367;
var G__24373 = chunk__24339_24368;
var G__24374 = count__24340_24369;
var G__24375 = (i__24341_24370 + (1));
seq__24338_24367 = G__24372;
chunk__24339_24368 = G__24373;
count__24340_24369 = G__24374;
i__24341_24370 = G__24375;
continue;
} else {
var temp__4425__auto___24376 = cljs.core.seq.call(null,seq__24338_24367);
if(temp__4425__auto___24376){
var seq__24338_24377__$1 = temp__4425__auto___24376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24338_24377__$1)){
var c__17293__auto___24378 = cljs.core.chunk_first.call(null,seq__24338_24377__$1);
var G__24379 = cljs.core.chunk_rest.call(null,seq__24338_24377__$1);
var G__24380 = c__17293__auto___24378;
var G__24381 = cljs.core.count.call(null,c__17293__auto___24378);
var G__24382 = (0);
seq__24338_24367 = G__24379;
chunk__24339_24368 = G__24380;
count__24340_24369 = G__24381;
i__24341_24370 = G__24382;
continue;
} else {
var ref_24383 = cljs.core.first.call(null,seq__24338_24377__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24383)){
} else {
cljs.core.add_watch.call(null,ref_24383,key,((function (seq__24338_24367,chunk__24339_24368,count__24340_24369,i__24341_24370,ref_24383,seq__24338_24377__$1,temp__4425__auto___24376,comp,old_reactions,vec__24333,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24332){
return (function (_,___$1,___$2,___$3){
return rum.request_render.call(null,comp);
});})(seq__24338_24367,chunk__24339_24368,count__24340_24369,i__24341_24370,ref_24383,seq__24338_24377__$1,temp__4425__auto___24376,comp,old_reactions,vec__24333,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24332))
);
}

var G__24384 = cljs.core.next.call(null,seq__24338_24377__$1);
var G__24385 = null;
var G__24386 = (0);
var G__24387 = (0);
seq__24338_24367 = G__24384;
chunk__24339_24368 = G__24385;
count__24340_24369 = G__24386;
i__24341_24370 = G__24387;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum._STAR_reactions_STAR_ = _STAR_reactions_STAR_24332;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_24388 = rum.reactive_key.call(null,state);
var seq__24342_24389 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__24343_24390 = null;
var count__24344_24391 = (0);
var i__24345_24392 = (0);
while(true){
if((i__24345_24392 < count__24344_24391)){
var ref_24393 = cljs.core._nth.call(null,chunk__24343_24390,i__24345_24392);
cljs.core.remove_watch.call(null,ref_24393,key_24388);

var G__24394 = seq__24342_24389;
var G__24395 = chunk__24343_24390;
var G__24396 = count__24344_24391;
var G__24397 = (i__24345_24392 + (1));
seq__24342_24389 = G__24394;
chunk__24343_24390 = G__24395;
count__24344_24391 = G__24396;
i__24345_24392 = G__24397;
continue;
} else {
var temp__4425__auto___24398 = cljs.core.seq.call(null,seq__24342_24389);
if(temp__4425__auto___24398){
var seq__24342_24399__$1 = temp__4425__auto___24398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24342_24399__$1)){
var c__17293__auto___24400 = cljs.core.chunk_first.call(null,seq__24342_24399__$1);
var G__24401 = cljs.core.chunk_rest.call(null,seq__24342_24399__$1);
var G__24402 = c__17293__auto___24400;
var G__24403 = cljs.core.count.call(null,c__17293__auto___24400);
var G__24404 = (0);
seq__24342_24389 = G__24401;
chunk__24343_24390 = G__24402;
count__24344_24391 = G__24403;
i__24345_24392 = G__24404;
continue;
} else {
var ref_24405 = cljs.core.first.call(null,seq__24342_24399__$1);
cljs.core.remove_watch.call(null,ref_24405,key_24388);

var G__24406 = cljs.core.next.call(null,seq__24342_24399__$1);
var G__24407 = null;
var G__24408 = (0);
var G__24409 = (0);
seq__24342_24389 = G__24406;
chunk__24343_24390 = G__24407;
count__24344_24391 = G__24408;
i__24345_24392 = G__24409;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630));
})], null);
rum.react = (function rum$react(ref){
cljs.core._vreset_BANG_.call(null,rum._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {rum.Object}
 * @implements {cljs.core.IPrintWithWriter}
*/
rum.LensCursor = (function (parent,getter,setter){
this.parent = parent;
this.getter = getter;
this.setter = setter;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
})
rum.LensCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

rum.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.getter.call(null,cljs.core._deref.call(null,self__.parent));
});

rum.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1),((function (this$__$1){
return (function (_,___$1,oldp,newp){
var old = self__.getter.call(null,oldp);
var new$ = self__.getter.call(null,newp);
if(cljs.core.not_EQ_.call(null,old,new$)){
return f.call(null,key,this$__$1,old,new$);
} else {
return null;
}
});})(this$__$1))
);

return this$__$1;
});

rum.LensCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1));

return this$__$1;
});

rum.LensCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

rum.LensCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.parent,self__.setter,new_value);

return new_value;
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1)));
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a));
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a,b));
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core._deref.call(null,this$__$1),a,b,xs));
});

rum.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,cljs.core._deref.call(null,this$__$1),writer,opts);

return cljs.core._write.call(null,writer,">");
});

rum.LensCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null)], null);
});

rum.LensCursor.cljs$lang$type = true;

rum.LensCursor.cljs$lang$ctorStr = "rum/LensCursor";

rum.LensCursor.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"rum/LensCursor");
});

rum.__GT_LensCursor = (function rum$__GT_LensCursor(parent,getter,setter){
return (new rum.LensCursor(parent,getter,setter));
});

rum.cursor = (function rum$cursor(ref,path){
var getter = (function (p1__24410_SHARP_){
return cljs.core.get_in.call(null,p1__24410_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__24411_SHARP_,p2__24412_SHARP_){
return cljs.core.assoc_in.call(null,p1__24411_SHARP_,path,p2__24412_SHARP_);
});})(getter))
;
if((ref instanceof rum.LensCursor)){
return (new rum.LensCursor(ref.parent,cljs.core.comp.call(null,getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = ref.getter.call(null,where);
var focus__$1 = setter.call(null,focus,what);
var focus__$2 = ref.setter.call(null,where,focus__$1);
return focus__$2;
});})(getter,setter))
));
} else {
return (new rum.LensCursor(ref,getter,setter));
}
});
rum.deref_args = (function rum$deref_args(xs){
return cljs.core.mapv.call(null,(function (p1__24413_SHARP_){
if(((!((p1__24413_SHARP_ == null)))?((((p1__24413_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || (p1__24413_SHARP_.cljs$core$IDeref$))?true:(((!p1__24413_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__24413_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__24413_SHARP_))){
return cljs.core.deref.call(null,p1__24413_SHARP_);
} else {
return p1__24413_SHARP_;
}
}),xs);
});
rum.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__24416 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__24416,(0),null);
var next_state = cljs.core.nth.call(null,vec__24416,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.cursored_key = (function rum$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__24417_24433 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__24419_24434 = null;
var count__24420_24435 = (0);
var i__24421_24436 = (0);
while(true){
if((i__24421_24436 < count__24420_24435)){
var arg_24437 = cljs.core._nth.call(null,chunk__24419_24434,i__24421_24436);
if(((!((arg_24437 == null)))?((((arg_24437.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_24437.cljs$core$IWatchable$))?true:(((!arg_24437.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24437):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24437))){
cljs.core.add_watch.call(null,arg_24437,rum.cursored_key.call(null,state),((function (seq__24417_24433,chunk__24419_24434,count__24420_24435,i__24421_24436,arg_24437){
return (function (_,___$1,___$2,___$3){
return rum.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__24417_24433,chunk__24419_24434,count__24420_24435,i__24421_24436,arg_24437))
);

var G__24438 = seq__24417_24433;
var G__24439 = chunk__24419_24434;
var G__24440 = count__24420_24435;
var G__24441 = (i__24421_24436 + (1));
seq__24417_24433 = G__24438;
chunk__24419_24434 = G__24439;
count__24420_24435 = G__24440;
i__24421_24436 = G__24441;
continue;
} else {
var G__24442 = seq__24417_24433;
var G__24443 = chunk__24419_24434;
var G__24444 = count__24420_24435;
var G__24445 = (i__24421_24436 + (1));
seq__24417_24433 = G__24442;
chunk__24419_24434 = G__24443;
count__24420_24435 = G__24444;
i__24421_24436 = G__24445;
continue;
}
} else {
var temp__4425__auto___24446 = cljs.core.seq.call(null,seq__24417_24433);
if(temp__4425__auto___24446){
var seq__24417_24447__$1 = temp__4425__auto___24446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24417_24447__$1)){
var c__17293__auto___24448 = cljs.core.chunk_first.call(null,seq__24417_24447__$1);
var G__24449 = cljs.core.chunk_rest.call(null,seq__24417_24447__$1);
var G__24450 = c__17293__auto___24448;
var G__24451 = cljs.core.count.call(null,c__17293__auto___24448);
var G__24452 = (0);
seq__24417_24433 = G__24449;
chunk__24419_24434 = G__24450;
count__24420_24435 = G__24451;
i__24421_24436 = G__24452;
continue;
} else {
var arg_24453 = cljs.core.first.call(null,seq__24417_24447__$1);
if(((!((arg_24453 == null)))?((((arg_24453.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_24453.cljs$core$IWatchable$))?true:(((!arg_24453.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24453):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24453))){
cljs.core.add_watch.call(null,arg_24453,rum.cursored_key.call(null,state),((function (seq__24417_24433,chunk__24419_24434,count__24420_24435,i__24421_24436,arg_24453,seq__24417_24447__$1,temp__4425__auto___24446){
return (function (_,___$1,___$2,___$3){
return rum.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__24417_24433,chunk__24419_24434,count__24420_24435,i__24421_24436,arg_24453,seq__24417_24447__$1,temp__4425__auto___24446))
);

var G__24454 = cljs.core.next.call(null,seq__24417_24447__$1);
var G__24455 = null;
var G__24456 = (0);
var G__24457 = (0);
seq__24417_24433 = G__24454;
chunk__24419_24434 = G__24455;
count__24420_24435 = G__24456;
i__24421_24436 = G__24457;
continue;
} else {
var G__24458 = cljs.core.next.call(null,seq__24417_24447__$1);
var G__24459 = null;
var G__24460 = (0);
var G__24461 = (0);
seq__24417_24433 = G__24458;
chunk__24419_24434 = G__24459;
count__24420_24435 = G__24460;
i__24421_24436 = G__24461;
continue;
}
}
} else {
}
}
break;
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var seq__24425_24462 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__24427_24463 = null;
var count__24428_24464 = (0);
var i__24429_24465 = (0);
while(true){
if((i__24429_24465 < count__24428_24464)){
var arg_24466 = cljs.core._nth.call(null,chunk__24427_24463,i__24429_24465);
if(((!((arg_24466 == null)))?((((arg_24466.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_24466.cljs$core$IWatchable$))?true:(((!arg_24466.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24466):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24466))){
cljs.core.remove_watch.call(null,arg_24466,rum.cursored_key.call(null,state));

var G__24467 = seq__24425_24462;
var G__24468 = chunk__24427_24463;
var G__24469 = count__24428_24464;
var G__24470 = (i__24429_24465 + (1));
seq__24425_24462 = G__24467;
chunk__24427_24463 = G__24468;
count__24428_24464 = G__24469;
i__24429_24465 = G__24470;
continue;
} else {
var G__24471 = seq__24425_24462;
var G__24472 = chunk__24427_24463;
var G__24473 = count__24428_24464;
var G__24474 = (i__24429_24465 + (1));
seq__24425_24462 = G__24471;
chunk__24427_24463 = G__24472;
count__24428_24464 = G__24473;
i__24429_24465 = G__24474;
continue;
}
} else {
var temp__4425__auto___24475 = cljs.core.seq.call(null,seq__24425_24462);
if(temp__4425__auto___24475){
var seq__24425_24476__$1 = temp__4425__auto___24475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24425_24476__$1)){
var c__17293__auto___24477 = cljs.core.chunk_first.call(null,seq__24425_24476__$1);
var G__24478 = cljs.core.chunk_rest.call(null,seq__24425_24476__$1);
var G__24479 = c__17293__auto___24477;
var G__24480 = cljs.core.count.call(null,c__17293__auto___24477);
var G__24481 = (0);
seq__24425_24462 = G__24478;
chunk__24427_24463 = G__24479;
count__24428_24464 = G__24480;
i__24429_24465 = G__24481;
continue;
} else {
var arg_24482 = cljs.core.first.call(null,seq__24425_24476__$1);
if(((!((arg_24482 == null)))?((((arg_24482.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_24482.cljs$core$IWatchable$))?true:(((!arg_24482.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24482):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_24482))){
cljs.core.remove_watch.call(null,arg_24482,rum.cursored_key.call(null,state));

var G__24483 = cljs.core.next.call(null,seq__24425_24476__$1);
var G__24484 = null;
var G__24485 = (0);
var G__24486 = (0);
seq__24425_24462 = G__24483;
chunk__24427_24463 = G__24484;
count__24428_24464 = G__24485;
i__24429_24465 = G__24486;
continue;
} else {
var G__24487 = cljs.core.next.call(null,seq__24425_24476__$1);
var G__24488 = null;
var G__24489 = (0);
var G__24490 = (0);
seq__24425_24462 = G__24487;
chunk__24427_24463 = G__24488;
count__24428_24464 = G__24489;
i__24429_24465 = G__24490;
continue;
}
}
} else {
}
}
break;
}

return state;
})], null);

//# sourceMappingURL=rum.js.map?rel=1441471062917