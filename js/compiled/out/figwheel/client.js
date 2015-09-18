// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24918__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24919__i = 0, G__24919__a = new Array(arguments.length -  0);
while (G__24919__i < G__24919__a.length) {G__24919__a[G__24919__i] = arguments[G__24919__i + 0]; ++G__24919__i;}
  args = new cljs.core.IndexedSeq(G__24919__a,0);
} 
return G__24918__delegate.call(this,args);};
G__24918.cljs$lang$maxFixedArity = 0;
G__24918.cljs$lang$applyTo = (function (arglist__24920){
var args = cljs.core.seq(arglist__24920);
return G__24918__delegate(args);
});
G__24918.cljs$core$IFn$_invoke$arity$variadic = G__24918__delegate;
return G__24918;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24921){
var map__24924 = p__24921;
var map__24924__$1 = ((((!((map__24924 == null)))?((((map__24924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24924):map__24924);
var message = cljs.core.get.call(null,map__24924__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24924__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16490__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16478__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16478__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16478__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19571__auto___25054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___25054,ch){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___25054,ch){
return (function (state_25028){
var state_val_25029 = (state_25028[(1)]);
if((state_val_25029 === (7))){
var inst_25024 = (state_25028[(2)]);
var state_25028__$1 = state_25028;
var statearr_25030_25055 = state_25028__$1;
(statearr_25030_25055[(2)] = inst_25024);

(statearr_25030_25055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (1))){
var state_25028__$1 = state_25028;
var statearr_25031_25056 = state_25028__$1;
(statearr_25031_25056[(2)] = null);

(statearr_25031_25056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (4))){
var inst_24992 = (state_25028[(7)]);
var inst_24992__$1 = (state_25028[(2)]);
var state_25028__$1 = (function (){var statearr_25032 = state_25028;
(statearr_25032[(7)] = inst_24992__$1);

return statearr_25032;
})();
if(cljs.core.truth_(inst_24992__$1)){
var statearr_25033_25057 = state_25028__$1;
(statearr_25033_25057[(1)] = (5));

} else {
var statearr_25034_25058 = state_25028__$1;
(statearr_25034_25058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (13))){
var state_25028__$1 = state_25028;
var statearr_25035_25059 = state_25028__$1;
(statearr_25035_25059[(2)] = null);

(statearr_25035_25059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (6))){
var state_25028__$1 = state_25028;
var statearr_25036_25060 = state_25028__$1;
(statearr_25036_25060[(2)] = null);

(statearr_25036_25060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (3))){
var inst_25026 = (state_25028[(2)]);
var state_25028__$1 = state_25028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25028__$1,inst_25026);
} else {
if((state_val_25029 === (12))){
var inst_24999 = (state_25028[(8)]);
var inst_25012 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24999);
var inst_25013 = cljs.core.first.call(null,inst_25012);
var inst_25014 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25013);
var inst_25015 = console.warn("Figwheel: Not loading code with warnings - ",inst_25014);
var state_25028__$1 = state_25028;
var statearr_25037_25061 = state_25028__$1;
(statearr_25037_25061[(2)] = inst_25015);

(statearr_25037_25061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (2))){
var state_25028__$1 = state_25028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25028__$1,(4),ch);
} else {
if((state_val_25029 === (11))){
var inst_25008 = (state_25028[(2)]);
var state_25028__$1 = state_25028;
var statearr_25038_25062 = state_25028__$1;
(statearr_25038_25062[(2)] = inst_25008);

(statearr_25038_25062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (9))){
var inst_24998 = (state_25028[(9)]);
var inst_25010 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24998,opts);
var state_25028__$1 = state_25028;
if(cljs.core.truth_(inst_25010)){
var statearr_25039_25063 = state_25028__$1;
(statearr_25039_25063[(1)] = (12));

} else {
var statearr_25040_25064 = state_25028__$1;
(statearr_25040_25064[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (5))){
var inst_24992 = (state_25028[(7)]);
var inst_24998 = (state_25028[(9)]);
var inst_24994 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24995 = (new cljs.core.PersistentArrayMap(null,2,inst_24994,null));
var inst_24996 = (new cljs.core.PersistentHashSet(null,inst_24995,null));
var inst_24997 = figwheel.client.focus_msgs.call(null,inst_24996,inst_24992);
var inst_24998__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24997);
var inst_24999 = cljs.core.first.call(null,inst_24997);
var inst_25000 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24998__$1,opts);
var state_25028__$1 = (function (){var statearr_25041 = state_25028;
(statearr_25041[(8)] = inst_24999);

(statearr_25041[(9)] = inst_24998__$1);

return statearr_25041;
})();
if(cljs.core.truth_(inst_25000)){
var statearr_25042_25065 = state_25028__$1;
(statearr_25042_25065[(1)] = (8));

} else {
var statearr_25043_25066 = state_25028__$1;
(statearr_25043_25066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (14))){
var inst_25018 = (state_25028[(2)]);
var state_25028__$1 = state_25028;
var statearr_25044_25067 = state_25028__$1;
(statearr_25044_25067[(2)] = inst_25018);

(statearr_25044_25067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (10))){
var inst_25020 = (state_25028[(2)]);
var state_25028__$1 = (function (){var statearr_25045 = state_25028;
(statearr_25045[(10)] = inst_25020);

return statearr_25045;
})();
var statearr_25046_25068 = state_25028__$1;
(statearr_25046_25068[(2)] = null);

(statearr_25046_25068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25029 === (8))){
var inst_24999 = (state_25028[(8)]);
var inst_25002 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25003 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24999);
var inst_25004 = cljs.core.async.timeout.call(null,(1000));
var inst_25005 = [inst_25003,inst_25004];
var inst_25006 = (new cljs.core.PersistentVector(null,2,(5),inst_25002,inst_25005,null));
var state_25028__$1 = state_25028;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25028__$1,(11),inst_25006);
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
});})(c__19571__auto___25054,ch))
;
return ((function (switch__19506__auto__,c__19571__auto___25054,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19507__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19507__auto____0 = (function (){
var statearr_25050 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25050[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19507__auto__);

(statearr_25050[(1)] = (1));

return statearr_25050;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19507__auto____1 = (function (state_25028){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_25028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e25051){if((e25051 instanceof Object)){
var ex__19510__auto__ = e25051;
var statearr_25052_25069 = state_25028;
(statearr_25052_25069[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25070 = state_25028;
state_25028 = G__25070;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19507__auto__ = function(state_25028){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19507__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19507__auto____1.call(this,state_25028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19507__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19507__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___25054,ch))
})();
var state__19573__auto__ = (function (){var statearr_25053 = f__19572__auto__.call(null);
(statearr_25053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___25054);

return statearr_25053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___25054,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25071_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25071_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_25078 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25078){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25076 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25077 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25076,_STAR_print_newline_STAR_25077,base_path_25078){
return (function() { 
var G__25079__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25079 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25080__i = 0, G__25080__a = new Array(arguments.length -  0);
while (G__25080__i < G__25080__a.length) {G__25080__a[G__25080__i] = arguments[G__25080__i + 0]; ++G__25080__i;}
  args = new cljs.core.IndexedSeq(G__25080__a,0);
} 
return G__25079__delegate.call(this,args);};
G__25079.cljs$lang$maxFixedArity = 0;
G__25079.cljs$lang$applyTo = (function (arglist__25081){
var args = cljs.core.seq(arglist__25081);
return G__25079__delegate(args);
});
G__25079.cljs$core$IFn$_invoke$arity$variadic = G__25079__delegate;
return G__25079;
})()
;})(_STAR_print_fn_STAR_25076,_STAR_print_newline_STAR_25077,base_path_25078))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25077;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25076;
}}catch (e25075){if((e25075 instanceof Error)){
var e = e25075;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25078], null));
} else {
var e = e25075;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25078))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25082){
var map__25089 = p__25082;
var map__25089__$1 = ((((!((map__25089 == null)))?((((map__25089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25089):map__25089);
var opts = map__25089__$1;
var build_id = cljs.core.get.call(null,map__25089__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25089,map__25089__$1,opts,build_id){
return (function (p__25091){
var vec__25092 = p__25091;
var map__25093 = cljs.core.nth.call(null,vec__25092,(0),null);
var map__25093__$1 = ((((!((map__25093 == null)))?((((map__25093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25093):map__25093);
var msg = map__25093__$1;
var msg_name = cljs.core.get.call(null,map__25093__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25092,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25092,map__25093,map__25093__$1,msg,msg_name,_,map__25089,map__25089__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25092,map__25093,map__25093__$1,msg,msg_name,_,map__25089,map__25089__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25089,map__25089__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25099){
var vec__25100 = p__25099;
var map__25101 = cljs.core.nth.call(null,vec__25100,(0),null);
var map__25101__$1 = ((((!((map__25101 == null)))?((((map__25101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25101):map__25101);
var msg = map__25101__$1;
var msg_name = cljs.core.get.call(null,map__25101__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25100,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25103){
var map__25113 = p__25103;
var map__25113__$1 = ((((!((map__25113 == null)))?((((map__25113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25113):map__25113);
var on_compile_warning = cljs.core.get.call(null,map__25113__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25113__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25113,map__25113__$1,on_compile_warning,on_compile_fail){
return (function (p__25115){
var vec__25116 = p__25115;
var map__25117 = cljs.core.nth.call(null,vec__25116,(0),null);
var map__25117__$1 = ((((!((map__25117 == null)))?((((map__25117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25117):map__25117);
var msg = map__25117__$1;
var msg_name = cljs.core.get.call(null,map__25117__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25116,(1));
var pred__25119 = cljs.core._EQ_;
var expr__25120 = msg_name;
if(cljs.core.truth_(pred__25119.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25120))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25119.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25120))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25113,map__25113__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto__,msg_hist,msg_names,msg){
return (function (state_25321){
var state_val_25322 = (state_25321[(1)]);
if((state_val_25322 === (7))){
var inst_25255 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25323_25364 = state_25321__$1;
(statearr_25323_25364[(2)] = inst_25255);

(statearr_25323_25364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (20))){
var inst_25283 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25321__$1 = state_25321;
if(cljs.core.truth_(inst_25283)){
var statearr_25324_25365 = state_25321__$1;
(statearr_25324_25365[(1)] = (22));

} else {
var statearr_25325_25366 = state_25321__$1;
(statearr_25325_25366[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (27))){
var inst_25295 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25296 = figwheel.client.heads_up.display_warning.call(null,inst_25295);
var state_25321__$1 = state_25321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25321__$1,(30),inst_25296);
} else {
if((state_val_25322 === (1))){
var inst_25243 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25321__$1 = state_25321;
if(cljs.core.truth_(inst_25243)){
var statearr_25326_25367 = state_25321__$1;
(statearr_25326_25367[(1)] = (2));

} else {
var statearr_25327_25368 = state_25321__$1;
(statearr_25327_25368[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (24))){
var inst_25311 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25328_25369 = state_25321__$1;
(statearr_25328_25369[(2)] = inst_25311);

(statearr_25328_25369[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (4))){
var inst_25319 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25321__$1,inst_25319);
} else {
if((state_val_25322 === (15))){
var inst_25271 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25272 = figwheel.client.format_messages.call(null,inst_25271);
var inst_25273 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25274 = figwheel.client.heads_up.display_error.call(null,inst_25272,inst_25273);
var state_25321__$1 = state_25321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25321__$1,(18),inst_25274);
} else {
if((state_val_25322 === (21))){
var inst_25313 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25329_25370 = state_25321__$1;
(statearr_25329_25370[(2)] = inst_25313);

(statearr_25329_25370[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (31))){
var inst_25302 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25321__$1 = state_25321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25321__$1,(34),inst_25302);
} else {
if((state_val_25322 === (32))){
var state_25321__$1 = state_25321;
var statearr_25330_25371 = state_25321__$1;
(statearr_25330_25371[(2)] = null);

(statearr_25330_25371[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (33))){
var inst_25307 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25331_25372 = state_25321__$1;
(statearr_25331_25372[(2)] = inst_25307);

(statearr_25331_25372[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (13))){
var inst_25261 = (state_25321[(2)]);
var inst_25262 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25263 = figwheel.client.format_messages.call(null,inst_25262);
var inst_25264 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25265 = figwheel.client.heads_up.display_error.call(null,inst_25263,inst_25264);
var state_25321__$1 = (function (){var statearr_25332 = state_25321;
(statearr_25332[(7)] = inst_25261);

return statearr_25332;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25321__$1,(14),inst_25265);
} else {
if((state_val_25322 === (22))){
var inst_25285 = figwheel.client.heads_up.clear.call(null);
var state_25321__$1 = state_25321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25321__$1,(25),inst_25285);
} else {
if((state_val_25322 === (29))){
var inst_25309 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25333_25373 = state_25321__$1;
(statearr_25333_25373[(2)] = inst_25309);

(statearr_25333_25373[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (6))){
var inst_25251 = figwheel.client.heads_up.clear.call(null);
var state_25321__$1 = state_25321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25321__$1,(9),inst_25251);
} else {
if((state_val_25322 === (28))){
var inst_25300 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25321__$1 = state_25321;
if(cljs.core.truth_(inst_25300)){
var statearr_25334_25374 = state_25321__$1;
(statearr_25334_25374[(1)] = (31));

} else {
var statearr_25335_25375 = state_25321__$1;
(statearr_25335_25375[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (25))){
var inst_25287 = (state_25321[(2)]);
var inst_25288 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25289 = figwheel.client.heads_up.display_warning.call(null,inst_25288);
var state_25321__$1 = (function (){var statearr_25336 = state_25321;
(statearr_25336[(8)] = inst_25287);

return statearr_25336;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25321__$1,(26),inst_25289);
} else {
if((state_val_25322 === (34))){
var inst_25304 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25337_25376 = state_25321__$1;
(statearr_25337_25376[(2)] = inst_25304);

(statearr_25337_25376[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (17))){
var inst_25315 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25338_25377 = state_25321__$1;
(statearr_25338_25377[(2)] = inst_25315);

(statearr_25338_25377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (3))){
var inst_25257 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25321__$1 = state_25321;
if(cljs.core.truth_(inst_25257)){
var statearr_25339_25378 = state_25321__$1;
(statearr_25339_25378[(1)] = (10));

} else {
var statearr_25340_25379 = state_25321__$1;
(statearr_25340_25379[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (12))){
var inst_25317 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25341_25380 = state_25321__$1;
(statearr_25341_25380[(2)] = inst_25317);

(statearr_25341_25380[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (2))){
var inst_25245 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25321__$1 = state_25321;
if(cljs.core.truth_(inst_25245)){
var statearr_25342_25381 = state_25321__$1;
(statearr_25342_25381[(1)] = (5));

} else {
var statearr_25343_25382 = state_25321__$1;
(statearr_25343_25382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (23))){
var inst_25293 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25321__$1 = state_25321;
if(cljs.core.truth_(inst_25293)){
var statearr_25344_25383 = state_25321__$1;
(statearr_25344_25383[(1)] = (27));

} else {
var statearr_25345_25384 = state_25321__$1;
(statearr_25345_25384[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (19))){
var inst_25280 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25281 = figwheel.client.heads_up.append_message.call(null,inst_25280);
var state_25321__$1 = state_25321;
var statearr_25346_25385 = state_25321__$1;
(statearr_25346_25385[(2)] = inst_25281);

(statearr_25346_25385[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (11))){
var inst_25269 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25321__$1 = state_25321;
if(cljs.core.truth_(inst_25269)){
var statearr_25347_25386 = state_25321__$1;
(statearr_25347_25386[(1)] = (15));

} else {
var statearr_25348_25387 = state_25321__$1;
(statearr_25348_25387[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (9))){
var inst_25253 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25349_25388 = state_25321__$1;
(statearr_25349_25388[(2)] = inst_25253);

(statearr_25349_25388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (5))){
var inst_25247 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25321__$1 = state_25321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25321__$1,(8),inst_25247);
} else {
if((state_val_25322 === (14))){
var inst_25267 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25350_25389 = state_25321__$1;
(statearr_25350_25389[(2)] = inst_25267);

(statearr_25350_25389[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (26))){
var inst_25291 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25351_25390 = state_25321__$1;
(statearr_25351_25390[(2)] = inst_25291);

(statearr_25351_25390[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (16))){
var inst_25278 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25321__$1 = state_25321;
if(cljs.core.truth_(inst_25278)){
var statearr_25352_25391 = state_25321__$1;
(statearr_25352_25391[(1)] = (19));

} else {
var statearr_25353_25392 = state_25321__$1;
(statearr_25353_25392[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (30))){
var inst_25298 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25354_25393 = state_25321__$1;
(statearr_25354_25393[(2)] = inst_25298);

(statearr_25354_25393[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (10))){
var inst_25259 = figwheel.client.heads_up.clear.call(null);
var state_25321__$1 = state_25321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25321__$1,(13),inst_25259);
} else {
if((state_val_25322 === (18))){
var inst_25276 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25355_25394 = state_25321__$1;
(statearr_25355_25394[(2)] = inst_25276);

(statearr_25355_25394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25322 === (8))){
var inst_25249 = (state_25321[(2)]);
var state_25321__$1 = state_25321;
var statearr_25356_25395 = state_25321__$1;
(statearr_25356_25395[(2)] = inst_25249);

(statearr_25356_25395[(1)] = (7));


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
});})(c__19571__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19506__auto__,c__19571__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19507__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19507__auto____0 = (function (){
var statearr_25360 = [null,null,null,null,null,null,null,null,null];
(statearr_25360[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19507__auto__);

(statearr_25360[(1)] = (1));

return statearr_25360;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19507__auto____1 = (function (state_25321){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_25321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e25361){if((e25361 instanceof Object)){
var ex__19510__auto__ = e25361;
var statearr_25362_25396 = state_25321;
(statearr_25362_25396[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25397 = state_25321;
state_25321 = G__25397;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19507__auto__ = function(state_25321){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19507__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19507__auto____1.call(this,state_25321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19507__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19507__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto__,msg_hist,msg_names,msg))
})();
var state__19573__auto__ = (function (){var statearr_25363 = f__19572__auto__.call(null);
(statearr_25363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto__);

return statearr_25363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto__,msg_hist,msg_names,msg))
);

return c__19571__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19571__auto___25460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___25460,ch){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___25460,ch){
return (function (state_25443){
var state_val_25444 = (state_25443[(1)]);
if((state_val_25444 === (1))){
var state_25443__$1 = state_25443;
var statearr_25445_25461 = state_25443__$1;
(statearr_25445_25461[(2)] = null);

(statearr_25445_25461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (2))){
var state_25443__$1 = state_25443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25443__$1,(4),ch);
} else {
if((state_val_25444 === (3))){
var inst_25441 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25443__$1,inst_25441);
} else {
if((state_val_25444 === (4))){
var inst_25431 = (state_25443[(7)]);
var inst_25431__$1 = (state_25443[(2)]);
var state_25443__$1 = (function (){var statearr_25446 = state_25443;
(statearr_25446[(7)] = inst_25431__$1);

return statearr_25446;
})();
if(cljs.core.truth_(inst_25431__$1)){
var statearr_25447_25462 = state_25443__$1;
(statearr_25447_25462[(1)] = (5));

} else {
var statearr_25448_25463 = state_25443__$1;
(statearr_25448_25463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (5))){
var inst_25431 = (state_25443[(7)]);
var inst_25433 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25431);
var state_25443__$1 = state_25443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25443__$1,(8),inst_25433);
} else {
if((state_val_25444 === (6))){
var state_25443__$1 = state_25443;
var statearr_25449_25464 = state_25443__$1;
(statearr_25449_25464[(2)] = null);

(statearr_25449_25464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (7))){
var inst_25439 = (state_25443[(2)]);
var state_25443__$1 = state_25443;
var statearr_25450_25465 = state_25443__$1;
(statearr_25450_25465[(2)] = inst_25439);

(statearr_25450_25465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25444 === (8))){
var inst_25435 = (state_25443[(2)]);
var state_25443__$1 = (function (){var statearr_25451 = state_25443;
(statearr_25451[(8)] = inst_25435);

return statearr_25451;
})();
var statearr_25452_25466 = state_25443__$1;
(statearr_25452_25466[(2)] = null);

(statearr_25452_25466[(1)] = (2));


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
});})(c__19571__auto___25460,ch))
;
return ((function (switch__19506__auto__,c__19571__auto___25460,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19507__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19507__auto____0 = (function (){
var statearr_25456 = [null,null,null,null,null,null,null,null,null];
(statearr_25456[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19507__auto__);

(statearr_25456[(1)] = (1));

return statearr_25456;
});
var figwheel$client$heads_up_plugin_$_state_machine__19507__auto____1 = (function (state_25443){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_25443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e25457){if((e25457 instanceof Object)){
var ex__19510__auto__ = e25457;
var statearr_25458_25467 = state_25443;
(statearr_25458_25467[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25468 = state_25443;
state_25443 = G__25468;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19507__auto__ = function(state_25443){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19507__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19507__auto____1.call(this,state_25443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19507__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19507__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___25460,ch))
})();
var state__19573__auto__ = (function (){var statearr_25459 = f__19572__auto__.call(null);
(statearr_25459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___25460);

return statearr_25459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___25460,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto__){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto__){
return (function (state_25489){
var state_val_25490 = (state_25489[(1)]);
if((state_val_25490 === (1))){
var inst_25484 = cljs.core.async.timeout.call(null,(3000));
var state_25489__$1 = state_25489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25489__$1,(2),inst_25484);
} else {
if((state_val_25490 === (2))){
var inst_25486 = (state_25489[(2)]);
var inst_25487 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25489__$1 = (function (){var statearr_25491 = state_25489;
(statearr_25491[(7)] = inst_25486);

return statearr_25491;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25489__$1,inst_25487);
} else {
return null;
}
}
});})(c__19571__auto__))
;
return ((function (switch__19506__auto__,c__19571__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19507__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19507__auto____0 = (function (){
var statearr_25495 = [null,null,null,null,null,null,null,null];
(statearr_25495[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19507__auto__);

(statearr_25495[(1)] = (1));

return statearr_25495;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19507__auto____1 = (function (state_25489){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_25489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e25496){if((e25496 instanceof Object)){
var ex__19510__auto__ = e25496;
var statearr_25497_25499 = state_25489;
(statearr_25497_25499[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25500 = state_25489;
state_25489 = G__25500;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19507__auto__ = function(state_25489){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19507__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19507__auto____1.call(this,state_25489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19507__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19507__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto__))
})();
var state__19573__auto__ = (function (){var statearr_25498 = f__19572__auto__.call(null);
(statearr_25498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto__);

return statearr_25498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto__))
);

return c__19571__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25501){
var map__25508 = p__25501;
var map__25508__$1 = ((((!((map__25508 == null)))?((((map__25508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25508):map__25508);
var ed = map__25508__$1;
var formatted_exception = cljs.core.get.call(null,map__25508__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25508__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25508__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25510_25514 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25511_25515 = null;
var count__25512_25516 = (0);
var i__25513_25517 = (0);
while(true){
if((i__25513_25517 < count__25512_25516)){
var msg_25518 = cljs.core._nth.call(null,chunk__25511_25515,i__25513_25517);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25518);

var G__25519 = seq__25510_25514;
var G__25520 = chunk__25511_25515;
var G__25521 = count__25512_25516;
var G__25522 = (i__25513_25517 + (1));
seq__25510_25514 = G__25519;
chunk__25511_25515 = G__25520;
count__25512_25516 = G__25521;
i__25513_25517 = G__25522;
continue;
} else {
var temp__4425__auto___25523 = cljs.core.seq.call(null,seq__25510_25514);
if(temp__4425__auto___25523){
var seq__25510_25524__$1 = temp__4425__auto___25523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25510_25524__$1)){
var c__17293__auto___25525 = cljs.core.chunk_first.call(null,seq__25510_25524__$1);
var G__25526 = cljs.core.chunk_rest.call(null,seq__25510_25524__$1);
var G__25527 = c__17293__auto___25525;
var G__25528 = cljs.core.count.call(null,c__17293__auto___25525);
var G__25529 = (0);
seq__25510_25514 = G__25526;
chunk__25511_25515 = G__25527;
count__25512_25516 = G__25528;
i__25513_25517 = G__25529;
continue;
} else {
var msg_25530 = cljs.core.first.call(null,seq__25510_25524__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25530);

var G__25531 = cljs.core.next.call(null,seq__25510_25524__$1);
var G__25532 = null;
var G__25533 = (0);
var G__25534 = (0);
seq__25510_25514 = G__25531;
chunk__25511_25515 = G__25532;
count__25512_25516 = G__25533;
i__25513_25517 = G__25534;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25535){
var map__25538 = p__25535;
var map__25538__$1 = ((((!((map__25538 == null)))?((((map__25538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25538):map__25538);
var w = map__25538__$1;
var message = cljs.core.get.call(null,map__25538__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16478__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16478__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16478__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25546 = cljs.core.seq.call(null,plugins);
var chunk__25547 = null;
var count__25548 = (0);
var i__25549 = (0);
while(true){
if((i__25549 < count__25548)){
var vec__25550 = cljs.core._nth.call(null,chunk__25547,i__25549);
var k__$1 = cljs.core.nth.call(null,vec__25550,(0),null);
var plugin = cljs.core.nth.call(null,vec__25550,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25552 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k__$1,((function (seq__25546,chunk__25547,count__25548,i__25549,pl_25552,vec__25550,k__$1,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25552.call(null,msg_hist);
});})(seq__25546,chunk__25547,count__25548,i__25549,pl_25552,vec__25550,k__$1,plugin))
);
} else {
}

var G__25553 = seq__25546;
var G__25554 = chunk__25547;
var G__25555 = count__25548;
var G__25556 = (i__25549 + (1));
seq__25546 = G__25553;
chunk__25547 = G__25554;
count__25548 = G__25555;
i__25549 = G__25556;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25546);
if(temp__4425__auto__){
var seq__25546__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25546__$1)){
var c__17293__auto__ = cljs.core.chunk_first.call(null,seq__25546__$1);
var G__25557 = cljs.core.chunk_rest.call(null,seq__25546__$1);
var G__25558 = c__17293__auto__;
var G__25559 = cljs.core.count.call(null,c__17293__auto__);
var G__25560 = (0);
seq__25546 = G__25557;
chunk__25547 = G__25558;
count__25548 = G__25559;
i__25549 = G__25560;
continue;
} else {
var vec__25551 = cljs.core.first.call(null,seq__25546__$1);
var k__$1 = cljs.core.nth.call(null,vec__25551,(0),null);
var plugin = cljs.core.nth.call(null,vec__25551,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25561 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k__$1,((function (seq__25546,chunk__25547,count__25548,i__25549,pl_25561,vec__25551,k__$1,plugin,seq__25546__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25561.call(null,msg_hist);
});})(seq__25546,chunk__25547,count__25548,i__25549,pl_25561,vec__25551,k__$1,plugin,seq__25546__$1,temp__4425__auto__))
);
} else {
}

var G__25562 = cljs.core.next.call(null,seq__25546__$1);
var G__25563 = null;
var G__25564 = (0);
var G__25565 = (0);
seq__25546 = G__25562;
chunk__25547 = G__25563;
count__25548 = G__25564;
i__25549 = G__25565;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25566 = [];
var len__17548__auto___25569 = arguments.length;
var i__17549__auto___25570 = (0);
while(true){
if((i__17549__auto___25570 < len__17548__auto___25569)){
args25566.push((arguments[i__17549__auto___25570]));

var G__25571 = (i__17549__auto___25570 + (1));
i__17549__auto___25570 = G__25571;
continue;
} else {
}
break;
}

var G__25568 = args25566.length;
switch (G__25568) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25566.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17555__auto__ = [];
var len__17548__auto___25577 = arguments.length;
var i__17549__auto___25578 = (0);
while(true){
if((i__17549__auto___25578 < len__17548__auto___25577)){
args__17555__auto__.push((arguments[i__17549__auto___25578]));

var G__25579 = (i__17549__auto___25578 + (1));
i__17549__auto___25578 = G__25579;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((0) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17556__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25574){
var map__25575 = p__25574;
var map__25575__$1 = ((((!((map__25575 == null)))?((((map__25575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25575):map__25575);
var opts = map__25575__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25573){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25573));
});

//# sourceMappingURL=client.js.map?rel=1441471065117