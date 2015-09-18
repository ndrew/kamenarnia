// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17555__auto__ = [];
var len__17548__auto___25717 = arguments.length;
var i__17549__auto___25718 = (0);
while(true){
if((i__17549__auto___25718 < len__17548__auto___25717)){
args__17555__auto__.push((arguments[i__17549__auto___25718]));

var G__25719 = (i__17549__auto___25718 + (1));
i__17549__auto___25718 = G__25719;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((2) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17556__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__25709_25720 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__25710_25721 = null;
var count__25711_25722 = (0);
var i__25712_25723 = (0);
while(true){
if((i__25712_25723 < count__25711_25722)){
var k_25724__$1 = cljs.core._nth.call(null,chunk__25710_25721,i__25712_25723);
e.setAttribute(cljs.core.name.call(null,k_25724__$1),cljs.core.get.call(null,attrs,k_25724__$1));

var G__25725 = seq__25709_25720;
var G__25726 = chunk__25710_25721;
var G__25727 = count__25711_25722;
var G__25728 = (i__25712_25723 + (1));
seq__25709_25720 = G__25725;
chunk__25710_25721 = G__25726;
count__25711_25722 = G__25727;
i__25712_25723 = G__25728;
continue;
} else {
var temp__4425__auto___25729 = cljs.core.seq.call(null,seq__25709_25720);
if(temp__4425__auto___25729){
var seq__25709_25730__$1 = temp__4425__auto___25729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25709_25730__$1)){
var c__17293__auto___25731 = cljs.core.chunk_first.call(null,seq__25709_25730__$1);
var G__25732 = cljs.core.chunk_rest.call(null,seq__25709_25730__$1);
var G__25733 = c__17293__auto___25731;
var G__25734 = cljs.core.count.call(null,c__17293__auto___25731);
var G__25735 = (0);
seq__25709_25720 = G__25732;
chunk__25710_25721 = G__25733;
count__25711_25722 = G__25734;
i__25712_25723 = G__25735;
continue;
} else {
var k_25736__$1 = cljs.core.first.call(null,seq__25709_25730__$1);
e.setAttribute(cljs.core.name.call(null,k_25736__$1),cljs.core.get.call(null,attrs,k_25736__$1));

var G__25737 = cljs.core.next.call(null,seq__25709_25730__$1);
var G__25738 = null;
var G__25739 = (0);
var G__25740 = (0);
seq__25709_25720 = G__25737;
chunk__25710_25721 = G__25738;
count__25711_25722 = G__25739;
i__25712_25723 = G__25740;
continue;
}
} else {
}
}
break;
}

var seq__25713_25741 = cljs.core.seq.call(null,children);
var chunk__25714_25742 = null;
var count__25715_25743 = (0);
var i__25716_25744 = (0);
while(true){
if((i__25716_25744 < count__25715_25743)){
var ch_25745 = cljs.core._nth.call(null,chunk__25714_25742,i__25716_25744);
e.appendChild(ch_25745);

var G__25746 = seq__25713_25741;
var G__25747 = chunk__25714_25742;
var G__25748 = count__25715_25743;
var G__25749 = (i__25716_25744 + (1));
seq__25713_25741 = G__25746;
chunk__25714_25742 = G__25747;
count__25715_25743 = G__25748;
i__25716_25744 = G__25749;
continue;
} else {
var temp__4425__auto___25750 = cljs.core.seq.call(null,seq__25713_25741);
if(temp__4425__auto___25750){
var seq__25713_25751__$1 = temp__4425__auto___25750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25713_25751__$1)){
var c__17293__auto___25752 = cljs.core.chunk_first.call(null,seq__25713_25751__$1);
var G__25753 = cljs.core.chunk_rest.call(null,seq__25713_25751__$1);
var G__25754 = c__17293__auto___25752;
var G__25755 = cljs.core.count.call(null,c__17293__auto___25752);
var G__25756 = (0);
seq__25713_25741 = G__25753;
chunk__25714_25742 = G__25754;
count__25715_25743 = G__25755;
i__25716_25744 = G__25756;
continue;
} else {
var ch_25757 = cljs.core.first.call(null,seq__25713_25751__$1);
e.appendChild(ch_25757);

var G__25758 = cljs.core.next.call(null,seq__25713_25751__$1);
var G__25759 = null;
var G__25760 = (0);
var G__25761 = (0);
seq__25713_25741 = G__25758;
chunk__25714_25742 = G__25759;
count__25715_25743 = G__25760;
i__25716_25744 = G__25761;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq25706){
var G__25707 = cljs.core.first.call(null,seq25706);
var seq25706__$1 = cljs.core.next.call(null,seq25706);
var G__25708 = cljs.core.first.call(null,seq25706__$1);
var seq25706__$2 = cljs.core.next.call(null,seq25706__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__25707,G__25708,seq25706__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17404__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17405__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17406__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17407__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17403__auto__,prefer_table__17404__auto__,method_cache__17405__auto__,cached_hierarchy__17406__auto__,hierarchy__17407__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17403__auto__,prefer_table__17404__auto__,method_cache__17405__auto__,cached_hierarchy__17406__auto__,hierarchy__17407__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17407__auto__,method_table__17403__auto__,prefer_table__17404__auto__,method_cache__17405__auto__,cached_hierarchy__17406__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_25762 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_25762.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_25762.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_25762.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_25762);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__25763,st_map){
var map__25768 = p__25763;
var map__25768__$1 = ((((!((map__25768 == null)))?((((map__25768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25768):map__25768);
var container_el = cljs.core.get.call(null,map__25768__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__25768,map__25768__$1,container_el){
return (function (p__25770){
var vec__25771 = p__25770;
var k__$1 = cljs.core.nth.call(null,vec__25771,(0),null);
var v = cljs.core.nth.call(null,vec__25771,(1),null);
return (container_el.style[cljs.core.name.call(null,k__$1)] = v);
});})(map__25768,map__25768__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__25772,dom_str){
var map__25775 = p__25772;
var map__25775__$1 = ((((!((map__25775 == null)))?((((map__25775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25775):map__25775);
var c = map__25775__$1;
var content_area_el = cljs.core.get.call(null,map__25775__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__25777){
var map__25780 = p__25777;
var map__25780__$1 = ((((!((map__25780 == null)))?((((map__25780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25780):map__25780);
var content_area_el = cljs.core.get.call(null,map__25780__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto__){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto__){
return (function (state_25823){
var state_val_25824 = (state_25823[(1)]);
if((state_val_25824 === (1))){
var inst_25808 = (state_25823[(7)]);
var inst_25808__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25809 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25810 = ["10px","10px","100%","68px","1.0"];
var inst_25811 = cljs.core.PersistentHashMap.fromArrays(inst_25809,inst_25810);
var inst_25812 = cljs.core.merge.call(null,inst_25811,style);
var inst_25813 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25808__$1,inst_25812);
var inst_25814 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25808__$1,msg);
var inst_25815 = cljs.core.async.timeout.call(null,(300));
var state_25823__$1 = (function (){var statearr_25825 = state_25823;
(statearr_25825[(8)] = inst_25814);

(statearr_25825[(9)] = inst_25813);

(statearr_25825[(7)] = inst_25808__$1);

return statearr_25825;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25823__$1,(2),inst_25815);
} else {
if((state_val_25824 === (2))){
var inst_25808 = (state_25823[(7)]);
var inst_25817 = (state_25823[(2)]);
var inst_25818 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25819 = ["auto"];
var inst_25820 = cljs.core.PersistentHashMap.fromArrays(inst_25818,inst_25819);
var inst_25821 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25808,inst_25820);
var state_25823__$1 = (function (){var statearr_25826 = state_25823;
(statearr_25826[(10)] = inst_25817);

return statearr_25826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25823__$1,inst_25821);
} else {
return null;
}
}
});})(c__19571__auto__))
;
return ((function (switch__19506__auto__,c__19571__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19507__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19507__auto____0 = (function (){
var statearr_25830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25830[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19507__auto__);

(statearr_25830[(1)] = (1));

return statearr_25830;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19507__auto____1 = (function (state_25823){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_25823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e25831){if((e25831 instanceof Object)){
var ex__19510__auto__ = e25831;
var statearr_25832_25834 = state_25823;
(statearr_25832_25834[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25835 = state_25823;
state_25823 = G__25835;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19507__auto__ = function(state_25823){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19507__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19507__auto____1.call(this,state_25823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19507__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19507__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto__))
})();
var state__19573__auto__ = (function (){var statearr_25833 = f__19572__auto__.call(null);
(statearr_25833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto__);

return statearr_25833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto__))
);

return c__19571__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__25837 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__25837,(0),null);
var ln = cljs.core.nth.call(null,vec__25837,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25840 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25840,(0),null);
var file_line = cljs.core.nth.call(null,vec__25840,(1),null);
var file_column = cljs.core.nth.call(null,vec__25840,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25840,file_name,file_line,file_column){
return (function (p1__25838_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__25838_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__25840,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16490__auto__ = file_line;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
var and__16478__auto__ = cause;
if(cljs.core.truth_(and__16478__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16478__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__25843 = figwheel.client.heads_up.ensure_container.call(null);
var map__25843__$1 = ((((!((map__25843 == null)))?((((map__25843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25843):map__25843);
var content_area_el = cljs.core.get.call(null,map__25843__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto__){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto__){
return (function (state_25891){
var state_val_25892 = (state_25891[(1)]);
if((state_val_25892 === (1))){
var inst_25874 = (state_25891[(7)]);
var inst_25874__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25875 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25876 = ["0.0"];
var inst_25877 = cljs.core.PersistentHashMap.fromArrays(inst_25875,inst_25876);
var inst_25878 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25874__$1,inst_25877);
var inst_25879 = cljs.core.async.timeout.call(null,(300));
var state_25891__$1 = (function (){var statearr_25893 = state_25891;
(statearr_25893[(7)] = inst_25874__$1);

(statearr_25893[(8)] = inst_25878);

return statearr_25893;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25891__$1,(2),inst_25879);
} else {
if((state_val_25892 === (2))){
var inst_25874 = (state_25891[(7)]);
var inst_25881 = (state_25891[(2)]);
var inst_25882 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25883 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25884 = cljs.core.PersistentHashMap.fromArrays(inst_25882,inst_25883);
var inst_25885 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25874,inst_25884);
var inst_25886 = cljs.core.async.timeout.call(null,(200));
var state_25891__$1 = (function (){var statearr_25894 = state_25891;
(statearr_25894[(9)] = inst_25885);

(statearr_25894[(10)] = inst_25881);

return statearr_25894;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25891__$1,(3),inst_25886);
} else {
if((state_val_25892 === (3))){
var inst_25874 = (state_25891[(7)]);
var inst_25888 = (state_25891[(2)]);
var inst_25889 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25874,"");
var state_25891__$1 = (function (){var statearr_25895 = state_25891;
(statearr_25895[(11)] = inst_25888);

return statearr_25895;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25891__$1,inst_25889);
} else {
return null;
}
}
}
});})(c__19571__auto__))
;
return ((function (switch__19506__auto__,c__19571__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19507__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19507__auto____0 = (function (){
var statearr_25899 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25899[(0)] = figwheel$client$heads_up$clear_$_state_machine__19507__auto__);

(statearr_25899[(1)] = (1));

return statearr_25899;
});
var figwheel$client$heads_up$clear_$_state_machine__19507__auto____1 = (function (state_25891){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_25891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e25900){if((e25900 instanceof Object)){
var ex__19510__auto__ = e25900;
var statearr_25901_25903 = state_25891;
(statearr_25901_25903[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25904 = state_25891;
state_25891 = G__25904;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19507__auto__ = function(state_25891){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19507__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19507__auto____1.call(this,state_25891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19507__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19507__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto__))
})();
var state__19573__auto__ = (function (){var statearr_25902 = f__19572__auto__.call(null);
(statearr_25902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto__);

return statearr_25902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto__))
);

return c__19571__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto__){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto__){
return (function (state_25936){
var state_val_25937 = (state_25936[(1)]);
if((state_val_25937 === (1))){
var inst_25926 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25936__$1 = state_25936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25936__$1,(2),inst_25926);
} else {
if((state_val_25937 === (2))){
var inst_25928 = (state_25936[(2)]);
var inst_25929 = cljs.core.async.timeout.call(null,(400));
var state_25936__$1 = (function (){var statearr_25938 = state_25936;
(statearr_25938[(7)] = inst_25928);

return statearr_25938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25936__$1,(3),inst_25929);
} else {
if((state_val_25937 === (3))){
var inst_25931 = (state_25936[(2)]);
var inst_25932 = figwheel.client.heads_up.clear.call(null);
var state_25936__$1 = (function (){var statearr_25939 = state_25936;
(statearr_25939[(8)] = inst_25931);

return statearr_25939;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25936__$1,(4),inst_25932);
} else {
if((state_val_25937 === (4))){
var inst_25934 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25936__$1,inst_25934);
} else {
return null;
}
}
}
}
});})(c__19571__auto__))
;
return ((function (switch__19506__auto__,c__19571__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19507__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19507__auto____0 = (function (){
var statearr_25943 = [null,null,null,null,null,null,null,null,null];
(statearr_25943[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19507__auto__);

(statearr_25943[(1)] = (1));

return statearr_25943;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19507__auto____1 = (function (state_25936){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_25936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e25944){if((e25944 instanceof Object)){
var ex__19510__auto__ = e25944;
var statearr_25945_25947 = state_25936;
(statearr_25945_25947[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25948 = state_25936;
state_25936 = G__25948;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19507__auto__ = function(state_25936){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19507__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19507__auto____1.call(this,state_25936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19507__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19507__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto__))
})();
var state__19573__auto__ = (function (){var statearr_25946 = f__19572__auto__.call(null);
(statearr_25946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto__);

return statearr_25946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto__))
);

return c__19571__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1441471066159