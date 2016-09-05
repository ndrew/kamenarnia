// Compiled by ClojureScript 1.7.170 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
var last_id_6562 = cljs.core.volatile_BANG_.call(null,(0));
rum.core.next_id = ((function (last_id_6562){
return (function rum$core$next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_6562,(cljs.core._deref.call(null,last_id_6562) + (1)));
});})(last_id_6562))
;
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.id = (function rum$core$id(comp){
return new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rum.core.state.call(null,comp)));
});
rum.core.collect = (function rum$core$collect(fn_key,classes){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,fn_key,classes));
});
rum.core.call_all = (function rum$core$call_all(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6566 = arguments.length;
var i__5727__auto___6567 = (0);
while(true){
if((i__5727__auto___6567 < len__5726__auto___6566)){
args__5733__auto__.push((arguments[i__5727__auto___6567]));

var G__6568 = (i__5727__auto___6567 + (1));
i__5727__auto___6567 = G__6568;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((2) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((2)),(0))):null);
return rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5734__auto__);
});

rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.core.call_all.cljs$lang$maxFixedArity = (2);

rum.core.call_all.cljs$lang$applyTo = (function (seq6563){
var G__6564 = cljs.core.first.call(null,seq6563);
var seq6563__$1 = cljs.core.next.call(null,seq6563);
var G__6565 = cljs.core.first.call(null,seq6563__$1);
var seq6563__$2 = cljs.core.next.call(null,seq6563__$1);
return rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic(G__6564,G__6565,seq6563__$2);
});
rum.core.build_class = (function rum$core$build_class(classes,display_name){
if(cljs.core.sequential_QMARK_.call(null,classes)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),new cljs.core.Symbol(null,"classes","classes",-616631259,null))))].join('')));
}

var init = rum.core.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),classes);
var will_mount = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),classes);
var did_mount = rum.core.collect.call(null,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),classes);
var transfer_state = rum.core.collect.call(null,new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),classes);
var should_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),classes);
var will_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-update","will-update",328062998),classes);
var render = cljs.core.first.call(null,rum.core.collect.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),classes));
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render){
return (function (p1__6570_SHARP_,p2__6569_SHARP_){
return p2__6569_SHARP_.call(null,p1__6570_SHARP_);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render))
,render,rum.core.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),classes));
var did_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),classes);
var will_unmount = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount){
return (function (props){
return rum.core.call_all.call(null,(props[":rum/initial-state"]),init,props);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount))
;
var child_context = rum.core.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),classes);
var class_properties = cljs.core.reduce.call(null,cljs.core.merge,rum.core.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),classes));
return React.createClass(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var next_state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state.call(null,next_props));
var next_state__$1 = cljs.core.reduce.call(null,((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__6572_SHARP_,p2__6571_SHARP_){
return p2__6571_SHARP_.call(null,old_state,p1__6572_SHARP_);
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,next_state,transfer_state);
return this$.setState({":rum/state": cljs.core.volatile_BANG_.call(null,next_state__$1)});
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__4668__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__6573_SHARP_){
return p1__6573_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,should_update);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__6576 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__6576,(0),null);
var next_state = cljs.core.nth.call(null,vec__6576,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (p1__6574_SHARP_){
return p1__6574_SHARP_.call(null,state);
});})(state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.core.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
var props = this$.props;
var state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),rum.core.next_id.call(null)], null),props__GT_state.call(null,props));
return {":rum/state": cljs.core.volatile_BANG_.call(null,state)};
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context,class_properties))
)]),class_properties)));
});
rum.core.schedule = (function (){var or__4668__auto__ = (function (){var and__4656__auto__ = typeof window !== 'undefined';
if(and__4656__auto__){
var or__4668__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
var or__4668__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4668__auto____$1)){
return or__4668__auto____$1;
} else {
var or__4668__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4668__auto____$2)){
return or__4668__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return ((function (or__4668__auto__){
return (function (p1__6577_SHARP_){
return setTimeout(p1__6577_SHARP_,(16));
});
;})(or__4668__auto__))
}
})();
rum.core.compare_by = (function rum$core$compare_by(keyfn){
return (function (x,y){
return cljs.core.compare.call(null,keyfn.call(null,x),keyfn.call(null,y));
});
});
rum.core.empty_queue = cljs.core.sorted_set_by.call(null,rum.core.compare_by.call(null,rum.core.id));
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

var seq__6584 = cljs.core.seq.call(null,queue);
var chunk__6586 = null;
var count__6587 = (0);
var i__6588 = (0);
while(true){
if((i__6588 < count__6587)){
var comp = cljs.core._nth.call(null,chunk__6586,i__6588);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__6590 = seq__6584;
var G__6591 = chunk__6586;
var G__6592 = count__6587;
var G__6593 = (i__6588 + (1));
seq__6584 = G__6590;
chunk__6586 = G__6591;
count__6587 = G__6592;
i__6588 = G__6593;
continue;
} else {
var G__6594 = seq__6584;
var G__6595 = chunk__6586;
var G__6596 = count__6587;
var G__6597 = (i__6588 + (1));
seq__6584 = G__6594;
chunk__6586 = G__6595;
count__6587 = G__6596;
i__6588 = G__6597;
continue;
}
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6584);
if(temp__4425__auto__){
var seq__6584__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6584__$1)){
var c__5471__auto__ = cljs.core.chunk_first.call(null,seq__6584__$1);
var G__6598 = cljs.core.chunk_rest.call(null,seq__6584__$1);
var G__6599 = c__5471__auto__;
var G__6600 = cljs.core.count.call(null,c__5471__auto__);
var G__6601 = (0);
seq__6584 = G__6598;
chunk__6586 = G__6599;
count__6587 = G__6600;
i__6588 = G__6601;
continue;
} else {
var comp = cljs.core.first.call(null,seq__6584__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__6602 = cljs.core.next.call(null,seq__6584__$1);
var G__6603 = null;
var G__6604 = (0);
var G__6605 = (0);
seq__6584 = G__6602;
chunk__6586 = G__6603;
count__6587 = G__6604;
i__6588 = G__6605;
continue;
} else {
var G__6606 = cljs.core.next.call(null,seq__6584__$1);
var G__6607 = null;
var G__6608 = (0);
var G__6609 = (0);
seq__6584 = G__6606;
chunk__6586 = G__6607;
count__6587 = G__6608;
i__6588 = G__6609;
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
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
rum.core.mount = (function rum$core$mount(component,node){
return ReactDOM.render(component,node);
});
rum.core.render__GT_mixin = (function rum$core$render__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_state__GT_mixin = (function rum$core$render_state__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_comp__GT_mixin = (function rum$core$render_comp__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.args__GT_state = (function rum$core$args__GT_state(args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null);
});
rum.core.element = (function rum$core$element(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6615 = arguments.length;
var i__5727__auto___6616 = (0);
while(true){
if((i__5727__auto___6616 < len__5726__auto___6615)){
args__5733__auto__.push((arguments[i__5727__auto___6616]));

var G__6617 = (i__5727__auto___6616 + (1));
i__5727__auto___6616 = G__6617;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((2) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((2)),(0))):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5734__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__6613){
var vec__6614 = p__6613;
var props = cljs.core.nth.call(null,vec__6614,(0),null);
var props__$1 = (function (){var or__4668__auto__ = props;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return {};
}
})();
(props__$1[":rum/initial-state"] = state);

return React.createElement(class$,props__$1);
});

rum.core.element.cljs$lang$maxFixedArity = (2);

rum.core.element.cljs$lang$applyTo = (function (seq6610){
var G__6611 = cljs.core.first.call(null,seq6610);
var seq6610__$1 = cljs.core.next.call(null,seq6610);
var G__6612 = cljs.core.first.call(null,seq6610__$1);
var seq6610__$2 = cljs.core.next.call(null,seq6610__$1);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(G__6611,G__6612,seq6610__$2);
});
rum.core.ctor__GT_class = (function rum$core$ctor__GT_class(ctor){
return new cljs.core.Keyword("rum","class","rum/class",-2030775258).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor));
});
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,{"key": key},null);
});
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,{"ref": ref},null);
});
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Adds an atom to component’s state that can be used as local state.
 * Atom is stored under key `:rum/local`.
 * Component will be automatically re-rendered if atom’s value changes
 */
rum.core.local = (function rum$core$local(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6622 = arguments.length;
var i__5727__auto___6623 = (0);
while(true){
if((i__5727__auto___6623 < len__5726__auto___6622)){
args__5733__auto__.push((arguments[i__5727__auto___6623]));

var G__6624 = (i__5727__auto___6623 + (1));
i__5727__auto___6623 = G__6624;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__6620){
var vec__6621 = p__6620;
var key = cljs.core.nth.call(null,vec__6621,(0),null);
var key__$1 = (function (){var or__4668__auto__ = key;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return new cljs.core.Keyword("rum","local","rum/local",-1497916586);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),((function (key__$1,vec__6621,key){
return (function (old,new$){
return cljs.core.assoc.call(null,new$,key__$1,old.call(null,key__$1));
});})(key__$1,vec__6621,key))
,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),((function (key__$1,vec__6621,key){
return (function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key__$1,((function (local_state,component,key__$1,vec__6621,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component,key__$1,vec__6621,key))
);

return cljs.core.assoc.call(null,state,key__$1,local_state);
});})(key__$1,vec__6621,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

rum.core.local.cljs$lang$applyTo = (function (seq6618){
var G__6619 = cljs.core.first.call(null,seq6618);
var seq6618__$1 = cljs.core.next.call(null,seq6618);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic(G__6619,seq6618__$1);
});
rum.core._STAR_reactions_STAR_;
rum.core.reactive_key = (function rum$core$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_6625 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__6626 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__6626,(0),null);
var next_state = cljs.core.nth.call(null,vec__6626,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = rum.core.reactive_key.call(null,state);
var seq__6627_6639 = cljs.core.seq.call(null,old_reactions);
var chunk__6628_6640 = null;
var count__6629_6641 = (0);
var i__6630_6642 = (0);
while(true){
if((i__6630_6642 < count__6629_6641)){
var ref_6643 = cljs.core._nth.call(null,chunk__6628_6640,i__6630_6642);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_6643)){
} else {
cljs.core.remove_watch.call(null,ref_6643,key);
}

var G__6644 = seq__6627_6639;
var G__6645 = chunk__6628_6640;
var G__6646 = count__6629_6641;
var G__6647 = (i__6630_6642 + (1));
seq__6627_6639 = G__6644;
chunk__6628_6640 = G__6645;
count__6629_6641 = G__6646;
i__6630_6642 = G__6647;
continue;
} else {
var temp__4425__auto___6648 = cljs.core.seq.call(null,seq__6627_6639);
if(temp__4425__auto___6648){
var seq__6627_6649__$1 = temp__4425__auto___6648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6627_6649__$1)){
var c__5471__auto___6650 = cljs.core.chunk_first.call(null,seq__6627_6649__$1);
var G__6651 = cljs.core.chunk_rest.call(null,seq__6627_6649__$1);
var G__6652 = c__5471__auto___6650;
var G__6653 = cljs.core.count.call(null,c__5471__auto___6650);
var G__6654 = (0);
seq__6627_6639 = G__6651;
chunk__6628_6640 = G__6652;
count__6629_6641 = G__6653;
i__6630_6642 = G__6654;
continue;
} else {
var ref_6655 = cljs.core.first.call(null,seq__6627_6649__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_6655)){
} else {
cljs.core.remove_watch.call(null,ref_6655,key);
}

var G__6656 = cljs.core.next.call(null,seq__6627_6649__$1);
var G__6657 = null;
var G__6658 = (0);
var G__6659 = (0);
seq__6627_6639 = G__6656;
chunk__6628_6640 = G__6657;
count__6629_6641 = G__6658;
i__6630_6642 = G__6659;
continue;
}
} else {
}
}
break;
}

var seq__6631_6660 = cljs.core.seq.call(null,new_reactions);
var chunk__6632_6661 = null;
var count__6633_6662 = (0);
var i__6634_6663 = (0);
while(true){
if((i__6634_6663 < count__6633_6662)){
var ref_6664 = cljs.core._nth.call(null,chunk__6632_6661,i__6634_6663);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_6664)){
} else {
cljs.core.add_watch.call(null,ref_6664,key,((function (seq__6631_6660,chunk__6632_6661,count__6633_6662,i__6634_6663,ref_6664,comp,old_reactions,vec__6626,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6625){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__6631_6660,chunk__6632_6661,count__6633_6662,i__6634_6663,ref_6664,comp,old_reactions,vec__6626,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6625))
);
}

var G__6665 = seq__6631_6660;
var G__6666 = chunk__6632_6661;
var G__6667 = count__6633_6662;
var G__6668 = (i__6634_6663 + (1));
seq__6631_6660 = G__6665;
chunk__6632_6661 = G__6666;
count__6633_6662 = G__6667;
i__6634_6663 = G__6668;
continue;
} else {
var temp__4425__auto___6669 = cljs.core.seq.call(null,seq__6631_6660);
if(temp__4425__auto___6669){
var seq__6631_6670__$1 = temp__4425__auto___6669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6631_6670__$1)){
var c__5471__auto___6671 = cljs.core.chunk_first.call(null,seq__6631_6670__$1);
var G__6672 = cljs.core.chunk_rest.call(null,seq__6631_6670__$1);
var G__6673 = c__5471__auto___6671;
var G__6674 = cljs.core.count.call(null,c__5471__auto___6671);
var G__6675 = (0);
seq__6631_6660 = G__6672;
chunk__6632_6661 = G__6673;
count__6633_6662 = G__6674;
i__6634_6663 = G__6675;
continue;
} else {
var ref_6676 = cljs.core.first.call(null,seq__6631_6670__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_6676)){
} else {
cljs.core.add_watch.call(null,ref_6676,key,((function (seq__6631_6660,chunk__6632_6661,count__6633_6662,i__6634_6663,ref_6676,seq__6631_6670__$1,temp__4425__auto___6669,comp,old_reactions,vec__6626,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6625){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__6631_6660,chunk__6632_6661,count__6633_6662,i__6634_6663,ref_6676,seq__6631_6670__$1,temp__4425__auto___6669,comp,old_reactions,vec__6626,dom,next_state,new_reactions,key,_STAR_reactions_STAR_6625))
);
}

var G__6677 = cljs.core.next.call(null,seq__6631_6670__$1);
var G__6678 = null;
var G__6679 = (0);
var G__6680 = (0);
seq__6631_6660 = G__6677;
chunk__6632_6661 = G__6678;
count__6633_6662 = G__6679;
i__6634_6663 = G__6680;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_6625;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_6681 = rum.core.reactive_key.call(null,state);
var seq__6635_6682 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__6636_6683 = null;
var count__6637_6684 = (0);
var i__6638_6685 = (0);
while(true){
if((i__6638_6685 < count__6637_6684)){
var ref_6686 = cljs.core._nth.call(null,chunk__6636_6683,i__6638_6685);
cljs.core.remove_watch.call(null,ref_6686,key_6681);

var G__6687 = seq__6635_6682;
var G__6688 = chunk__6636_6683;
var G__6689 = count__6637_6684;
var G__6690 = (i__6638_6685 + (1));
seq__6635_6682 = G__6687;
chunk__6636_6683 = G__6688;
count__6637_6684 = G__6689;
i__6638_6685 = G__6690;
continue;
} else {
var temp__4425__auto___6691 = cljs.core.seq.call(null,seq__6635_6682);
if(temp__4425__auto___6691){
var seq__6635_6692__$1 = temp__4425__auto___6691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6635_6692__$1)){
var c__5471__auto___6693 = cljs.core.chunk_first.call(null,seq__6635_6692__$1);
var G__6694 = cljs.core.chunk_rest.call(null,seq__6635_6692__$1);
var G__6695 = c__5471__auto___6693;
var G__6696 = cljs.core.count.call(null,c__5471__auto___6693);
var G__6697 = (0);
seq__6635_6682 = G__6694;
chunk__6636_6683 = G__6695;
count__6637_6684 = G__6696;
i__6638_6685 = G__6697;
continue;
} else {
var ref_6698 = cljs.core.first.call(null,seq__6635_6692__$1);
cljs.core.remove_watch.call(null,ref_6698,key_6681);

var G__6699 = cljs.core.next.call(null,seq__6635_6692__$1);
var G__6700 = null;
var G__6701 = (0);
var G__6702 = (0);
seq__6635_6682 = G__6699;
chunk__6636_6683 = G__6700;
count__6637_6684 = G__6701;
i__6638_6685 = G__6702;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630));
})], null);
rum.core.react = (function rum$core$react(ref){
cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});

/**
* @constructor
 * @implements {rum.core.Object}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
rum.core.LensCursor = (function (parent,getter,setter){
this.parent = parent;
this.getter = getter;
this.setter = setter;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
})
rum.core.LensCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

rum.core.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.core.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.getter.call(null,cljs.core._deref.call(null,self__.parent));
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
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

rum.core.LensCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1));

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

rum.core.LensCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.parent,self__.setter,new_value);

return new_value;
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1)));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a,b));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core._deref.call(null,this$__$1),a,b,xs));
});

rum.core.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,cljs.core._deref.call(null,this$__$1),writer,opts);

return cljs.core._write.call(null,writer,">");
});

rum.core.LensCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null)], null);
});

rum.core.LensCursor.cljs$lang$type = true;

rum.core.LensCursor.cljs$lang$ctorStr = "rum.core/LensCursor";

rum.core.LensCursor.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"rum.core/LensCursor");
});

rum.core.__GT_LensCursor = (function rum$core$__GT_LensCursor(parent,getter,setter){
return (new rum.core.LensCursor(parent,getter,setter));
});

rum.core.cursor = (function rum$core$cursor(ref,path){
var getter = (function (p1__6703_SHARP_){
return cljs.core.get_in.call(null,p1__6703_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__6704_SHARP_,p2__6705_SHARP_){
return cljs.core.assoc_in.call(null,p1__6704_SHARP_,path,p2__6705_SHARP_);
});})(getter))
;
if((ref instanceof rum.core.LensCursor)){
return (new rum.core.LensCursor(ref.parent,cljs.core.comp.call(null,getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = ref.getter.call(null,where);
var focus__$1 = setter.call(null,focus,what);
var focus__$2 = ref.setter.call(null,where,focus__$1);
return focus__$2;
});})(getter,setter))
));
} else {
return (new rum.core.LensCursor(ref,getter,setter));
}
});
rum.core.deref_args = (function rum$core$deref_args(xs){
return cljs.core.mapv.call(null,(function (p1__6706_SHARP_){
if(((!((p1__6706_SHARP_ == null)))?((((p1__6706_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || (p1__6706_SHARP_.cljs$core$IDeref$))?true:(((!p1__6706_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__6706_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__6706_SHARP_))){
return cljs.core.deref.call(null,p1__6706_SHARP_);
} else {
return p1__6706_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__6709 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__6709,(0),null);
var next_state = cljs.core.nth.call(null,vec__6709,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__6710_6726 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__6712_6727 = null;
var count__6713_6728 = (0);
var i__6714_6729 = (0);
while(true){
if((i__6714_6729 < count__6713_6728)){
var arg_6730 = cljs.core._nth.call(null,chunk__6712_6727,i__6714_6729);
if(((!((arg_6730 == null)))?((((arg_6730.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_6730.cljs$core$IWatchable$))?true:(((!arg_6730.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6730):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6730))){
cljs.core.add_watch.call(null,arg_6730,rum.core.cursored_key.call(null,state),((function (seq__6710_6726,chunk__6712_6727,count__6713_6728,i__6714_6729,arg_6730){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__6710_6726,chunk__6712_6727,count__6713_6728,i__6714_6729,arg_6730))
);

var G__6731 = seq__6710_6726;
var G__6732 = chunk__6712_6727;
var G__6733 = count__6713_6728;
var G__6734 = (i__6714_6729 + (1));
seq__6710_6726 = G__6731;
chunk__6712_6727 = G__6732;
count__6713_6728 = G__6733;
i__6714_6729 = G__6734;
continue;
} else {
var G__6735 = seq__6710_6726;
var G__6736 = chunk__6712_6727;
var G__6737 = count__6713_6728;
var G__6738 = (i__6714_6729 + (1));
seq__6710_6726 = G__6735;
chunk__6712_6727 = G__6736;
count__6713_6728 = G__6737;
i__6714_6729 = G__6738;
continue;
}
} else {
var temp__4425__auto___6739 = cljs.core.seq.call(null,seq__6710_6726);
if(temp__4425__auto___6739){
var seq__6710_6740__$1 = temp__4425__auto___6739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6710_6740__$1)){
var c__5471__auto___6741 = cljs.core.chunk_first.call(null,seq__6710_6740__$1);
var G__6742 = cljs.core.chunk_rest.call(null,seq__6710_6740__$1);
var G__6743 = c__5471__auto___6741;
var G__6744 = cljs.core.count.call(null,c__5471__auto___6741);
var G__6745 = (0);
seq__6710_6726 = G__6742;
chunk__6712_6727 = G__6743;
count__6713_6728 = G__6744;
i__6714_6729 = G__6745;
continue;
} else {
var arg_6746 = cljs.core.first.call(null,seq__6710_6740__$1);
if(((!((arg_6746 == null)))?((((arg_6746.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_6746.cljs$core$IWatchable$))?true:(((!arg_6746.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6746):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6746))){
cljs.core.add_watch.call(null,arg_6746,rum.core.cursored_key.call(null,state),((function (seq__6710_6726,chunk__6712_6727,count__6713_6728,i__6714_6729,arg_6746,seq__6710_6740__$1,temp__4425__auto___6739){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__6710_6726,chunk__6712_6727,count__6713_6728,i__6714_6729,arg_6746,seq__6710_6740__$1,temp__4425__auto___6739))
);

var G__6747 = cljs.core.next.call(null,seq__6710_6740__$1);
var G__6748 = null;
var G__6749 = (0);
var G__6750 = (0);
seq__6710_6726 = G__6747;
chunk__6712_6727 = G__6748;
count__6713_6728 = G__6749;
i__6714_6729 = G__6750;
continue;
} else {
var G__6751 = cljs.core.next.call(null,seq__6710_6740__$1);
var G__6752 = null;
var G__6753 = (0);
var G__6754 = (0);
seq__6710_6726 = G__6751;
chunk__6712_6727 = G__6752;
count__6713_6728 = G__6753;
i__6714_6729 = G__6754;
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
var seq__6718_6755 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__6720_6756 = null;
var count__6721_6757 = (0);
var i__6722_6758 = (0);
while(true){
if((i__6722_6758 < count__6721_6757)){
var arg_6759 = cljs.core._nth.call(null,chunk__6720_6756,i__6722_6758);
if(((!((arg_6759 == null)))?((((arg_6759.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_6759.cljs$core$IWatchable$))?true:(((!arg_6759.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6759):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6759))){
cljs.core.remove_watch.call(null,arg_6759,rum.core.cursored_key.call(null,state));

var G__6760 = seq__6718_6755;
var G__6761 = chunk__6720_6756;
var G__6762 = count__6721_6757;
var G__6763 = (i__6722_6758 + (1));
seq__6718_6755 = G__6760;
chunk__6720_6756 = G__6761;
count__6721_6757 = G__6762;
i__6722_6758 = G__6763;
continue;
} else {
var G__6764 = seq__6718_6755;
var G__6765 = chunk__6720_6756;
var G__6766 = count__6721_6757;
var G__6767 = (i__6722_6758 + (1));
seq__6718_6755 = G__6764;
chunk__6720_6756 = G__6765;
count__6721_6757 = G__6766;
i__6722_6758 = G__6767;
continue;
}
} else {
var temp__4425__auto___6768 = cljs.core.seq.call(null,seq__6718_6755);
if(temp__4425__auto___6768){
var seq__6718_6769__$1 = temp__4425__auto___6768;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6718_6769__$1)){
var c__5471__auto___6770 = cljs.core.chunk_first.call(null,seq__6718_6769__$1);
var G__6771 = cljs.core.chunk_rest.call(null,seq__6718_6769__$1);
var G__6772 = c__5471__auto___6770;
var G__6773 = cljs.core.count.call(null,c__5471__auto___6770);
var G__6774 = (0);
seq__6718_6755 = G__6771;
chunk__6720_6756 = G__6772;
count__6721_6757 = G__6773;
i__6722_6758 = G__6774;
continue;
} else {
var arg_6775 = cljs.core.first.call(null,seq__6718_6769__$1);
if(((!((arg_6775 == null)))?((((arg_6775.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_6775.cljs$core$IWatchable$))?true:(((!arg_6775.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6775):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_6775))){
cljs.core.remove_watch.call(null,arg_6775,rum.core.cursored_key.call(null,state));

var G__6776 = cljs.core.next.call(null,seq__6718_6769__$1);
var G__6777 = null;
var G__6778 = (0);
var G__6779 = (0);
seq__6718_6755 = G__6776;
chunk__6720_6756 = G__6777;
count__6721_6757 = G__6778;
i__6722_6758 = G__6779;
continue;
} else {
var G__6780 = cljs.core.next.call(null,seq__6718_6769__$1);
var G__6781 = null;
var G__6782 = (0);
var G__6783 = (0);
seq__6718_6755 = G__6780;
chunk__6720_6756 = G__6781;
count__6721_6757 = G__6782;
i__6722_6758 = G__6783;
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

//# sourceMappingURL=core.js.map?rel=1456160136092