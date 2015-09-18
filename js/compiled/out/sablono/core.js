// Compiled by ClojureScript 1.7.122 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__24495__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__24494 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__24494,(0),null);
var body = cljs.core.nthnext.call(null,vec__24494,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__24495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24496__i = 0, G__24496__a = new Array(arguments.length -  0);
while (G__24496__i < G__24496__a.length) {G__24496__a[G__24496__i] = arguments[G__24496__i + 0]; ++G__24496__i;}
  args = new cljs.core.IndexedSeq(G__24496__a,0);
} 
return G__24495__delegate.call(this,args);};
G__24495.cljs$lang$maxFixedArity = 0;
G__24495.cljs$lang$applyTo = (function (arglist__24497){
var args = cljs.core.seq(arglist__24497);
return G__24495__delegate(args);
});
G__24495.cljs$core$IFn$_invoke$arity$variadic = G__24495__delegate;
return G__24495;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17262__auto__ = (function sablono$core$update_arglists_$_iter__24502(s__24503){
return (new cljs.core.LazySeq(null,(function (){
var s__24503__$1 = s__24503;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24503__$1);
if(temp__4425__auto__){
var s__24503__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24503__$2)){
var c__17260__auto__ = cljs.core.chunk_first.call(null,s__24503__$2);
var size__17261__auto__ = cljs.core.count.call(null,c__17260__auto__);
var b__24505 = cljs.core.chunk_buffer.call(null,size__17261__auto__);
if((function (){var i__24504 = (0);
while(true){
if((i__24504 < size__17261__auto__)){
var args = cljs.core._nth.call(null,c__17260__auto__,i__24504);
cljs.core.chunk_append.call(null,b__24505,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24506 = (i__24504 + (1));
i__24504 = G__24506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24505),sablono$core$update_arglists_$_iter__24502.call(null,cljs.core.chunk_rest.call(null,s__24503__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24505),null);
}
} else {
var args = cljs.core.first.call(null,s__24503__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__24502.call(null,cljs.core.rest.call(null,s__24503__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17262__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17555__auto__ = [];
var len__17548__auto___24512 = arguments.length;
var i__17549__auto___24513 = (0);
while(true){
if((i__17549__auto___24513 < len__17548__auto___24512)){
args__17555__auto__.push((arguments[i__17549__auto___24513]));

var G__24514 = (i__17549__auto___24513 + (1));
i__17549__auto___24513 = G__24514;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((0) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17556__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17262__auto__ = (function sablono$core$iter__24508(s__24509){
return (new cljs.core.LazySeq(null,(function (){
var s__24509__$1 = s__24509;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24509__$1);
if(temp__4425__auto__){
var s__24509__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24509__$2)){
var c__17260__auto__ = cljs.core.chunk_first.call(null,s__24509__$2);
var size__17261__auto__ = cljs.core.count.call(null,c__17260__auto__);
var b__24511 = cljs.core.chunk_buffer.call(null,size__17261__auto__);
if((function (){var i__24510 = (0);
while(true){
if((i__24510 < size__17261__auto__)){
var style = cljs.core._nth.call(null,c__17260__auto__,i__24510);
cljs.core.chunk_append.call(null,b__24511,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__24515 = (i__24510 + (1));
i__24510 = G__24515;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24511),sablono$core$iter__24508.call(null,cljs.core.chunk_rest.call(null,s__24509__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24511),null);
}
} else {
var style = cljs.core.first.call(null,s__24509__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__24508.call(null,cljs.core.rest.call(null,s__24509__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17262__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq24507){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24507));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to24516 = (function sablono$core$link_to24516(var_args){
var args__17555__auto__ = [];
var len__17548__auto___24519 = arguments.length;
var i__17549__auto___24520 = (0);
while(true){
if((i__17549__auto___24520 < len__17548__auto___24519)){
args__17555__auto__.push((arguments[i__17549__auto___24520]));

var G__24521 = (i__17549__auto___24520 + (1));
i__17549__auto___24520 = G__24521;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((1) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((1)),(0))):null);
return sablono.core.link_to24516.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17556__auto__);
});

sablono.core.link_to24516.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to24516.cljs$lang$maxFixedArity = (1);

sablono.core.link_to24516.cljs$lang$applyTo = (function (seq24517){
var G__24518 = cljs.core.first.call(null,seq24517);
var seq24517__$1 = cljs.core.next.call(null,seq24517);
return sablono.core.link_to24516.cljs$core$IFn$_invoke$arity$variadic(G__24518,seq24517__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to24516);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to24522 = (function sablono$core$mail_to24522(var_args){
var args__17555__auto__ = [];
var len__17548__auto___24527 = arguments.length;
var i__17549__auto___24528 = (0);
while(true){
if((i__17549__auto___24528 < len__17548__auto___24527)){
args__17555__auto__.push((arguments[i__17549__auto___24528]));

var G__24529 = (i__17549__auto___24528 + (1));
i__17549__auto___24528 = G__24529;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((1) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((1)),(0))):null);
return sablono.core.mail_to24522.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17556__auto__);
});

sablono.core.mail_to24522.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__24525){
var vec__24526 = p__24525;
var content = cljs.core.nth.call(null,vec__24526,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16490__auto__ = content;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to24522.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to24522.cljs$lang$applyTo = (function (seq24523){
var G__24524 = cljs.core.first.call(null,seq24523);
var seq24523__$1 = cljs.core.next.call(null,seq24523);
return sablono.core.mail_to24522.cljs$core$IFn$_invoke$arity$variadic(G__24524,seq24523__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to24522);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list24530 = (function sablono$core$unordered_list24530(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17262__auto__ = (function sablono$core$unordered_list24530_$_iter__24535(s__24536){
return (new cljs.core.LazySeq(null,(function (){
var s__24536__$1 = s__24536;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24536__$1);
if(temp__4425__auto__){
var s__24536__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24536__$2)){
var c__17260__auto__ = cljs.core.chunk_first.call(null,s__24536__$2);
var size__17261__auto__ = cljs.core.count.call(null,c__17260__auto__);
var b__24538 = cljs.core.chunk_buffer.call(null,size__17261__auto__);
if((function (){var i__24537 = (0);
while(true){
if((i__24537 < size__17261__auto__)){
var x = cljs.core._nth.call(null,c__17260__auto__,i__24537);
cljs.core.chunk_append.call(null,b__24538,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24539 = (i__24537 + (1));
i__24537 = G__24539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24538),sablono$core$unordered_list24530_$_iter__24535.call(null,cljs.core.chunk_rest.call(null,s__24536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24538),null);
}
} else {
var x = cljs.core.first.call(null,s__24536__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list24530_$_iter__24535.call(null,cljs.core.rest.call(null,s__24536__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17262__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list24530);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list24540 = (function sablono$core$ordered_list24540(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17262__auto__ = (function sablono$core$ordered_list24540_$_iter__24545(s__24546){
return (new cljs.core.LazySeq(null,(function (){
var s__24546__$1 = s__24546;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24546__$1);
if(temp__4425__auto__){
var s__24546__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24546__$2)){
var c__17260__auto__ = cljs.core.chunk_first.call(null,s__24546__$2);
var size__17261__auto__ = cljs.core.count.call(null,c__17260__auto__);
var b__24548 = cljs.core.chunk_buffer.call(null,size__17261__auto__);
if((function (){var i__24547 = (0);
while(true){
if((i__24547 < size__17261__auto__)){
var x = cljs.core._nth.call(null,c__17260__auto__,i__24547);
cljs.core.chunk_append.call(null,b__24548,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24549 = (i__24547 + (1));
i__24547 = G__24549;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24548),sablono$core$ordered_list24540_$_iter__24545.call(null,cljs.core.chunk_rest.call(null,s__24546__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24548),null);
}
} else {
var x = cljs.core.first.call(null,s__24546__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list24540_$_iter__24545.call(null,cljs.core.rest.call(null,s__24546__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17262__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list24540);
/**
 * Create an image element.
 */
sablono.core.image24550 = (function sablono$core$image24550(var_args){
var args24551 = [];
var len__17548__auto___24554 = arguments.length;
var i__17549__auto___24555 = (0);
while(true){
if((i__17549__auto___24555 < len__17548__auto___24554)){
args24551.push((arguments[i__17549__auto___24555]));

var G__24556 = (i__17549__auto___24555 + (1));
i__17549__auto___24555 = G__24556;
continue;
} else {
}
break;
}

var G__24553 = args24551.length;
switch (G__24553) {
case 1:
return sablono.core.image24550.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image24550.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24551.length)].join('')));

}
});

sablono.core.image24550.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image24550.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image24550.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image24550);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__24558_SHARP_,p2__24559_SHARP_){
return [cljs.core.str(p1__24558_SHARP_),cljs.core.str("["),cljs.core.str(p2__24559_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__24560_SHARP_,p2__24561_SHARP_){
return [cljs.core.str(p1__24560_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24561_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field24562 = (function sablono$core$color_field24562(var_args){
var args24563 = [];
var len__17548__auto___24630 = arguments.length;
var i__17549__auto___24631 = (0);
while(true){
if((i__17549__auto___24631 < len__17548__auto___24630)){
args24563.push((arguments[i__17549__auto___24631]));

var G__24632 = (i__17549__auto___24631 + (1));
i__17549__auto___24631 = G__24632;
continue;
} else {
}
break;
}

var G__24565 = args24563.length;
switch (G__24565) {
case 1:
return sablono.core.color_field24562.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field24562.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24563.length)].join('')));

}
});

sablono.core.color_field24562.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.color_field24562.call(null,name__23970__auto__,null);
});

sablono.core.color_field24562.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.color_field24562.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field24562);

/**
 * Creates a date input field.
 */
sablono.core.date_field24566 = (function sablono$core$date_field24566(var_args){
var args24567 = [];
var len__17548__auto___24634 = arguments.length;
var i__17549__auto___24635 = (0);
while(true){
if((i__17549__auto___24635 < len__17548__auto___24634)){
args24567.push((arguments[i__17549__auto___24635]));

var G__24636 = (i__17549__auto___24635 + (1));
i__17549__auto___24635 = G__24636;
continue;
} else {
}
break;
}

var G__24569 = args24567.length;
switch (G__24569) {
case 1:
return sablono.core.date_field24566.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field24566.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24567.length)].join('')));

}
});

sablono.core.date_field24566.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.date_field24566.call(null,name__23970__auto__,null);
});

sablono.core.date_field24566.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.date_field24566.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field24566);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field24570 = (function sablono$core$datetime_field24570(var_args){
var args24571 = [];
var len__17548__auto___24638 = arguments.length;
var i__17549__auto___24639 = (0);
while(true){
if((i__17549__auto___24639 < len__17548__auto___24638)){
args24571.push((arguments[i__17549__auto___24639]));

var G__24640 = (i__17549__auto___24639 + (1));
i__17549__auto___24639 = G__24640;
continue;
} else {
}
break;
}

var G__24573 = args24571.length;
switch (G__24573) {
case 1:
return sablono.core.datetime_field24570.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field24570.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24571.length)].join('')));

}
});

sablono.core.datetime_field24570.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.datetime_field24570.call(null,name__23970__auto__,null);
});

sablono.core.datetime_field24570.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.datetime_field24570.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field24570);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field24574 = (function sablono$core$datetime_local_field24574(var_args){
var args24575 = [];
var len__17548__auto___24642 = arguments.length;
var i__17549__auto___24643 = (0);
while(true){
if((i__17549__auto___24643 < len__17548__auto___24642)){
args24575.push((arguments[i__17549__auto___24643]));

var G__24644 = (i__17549__auto___24643 + (1));
i__17549__auto___24643 = G__24644;
continue;
} else {
}
break;
}

var G__24577 = args24575.length;
switch (G__24577) {
case 1:
return sablono.core.datetime_local_field24574.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field24574.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24575.length)].join('')));

}
});

sablono.core.datetime_local_field24574.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.datetime_local_field24574.call(null,name__23970__auto__,null);
});

sablono.core.datetime_local_field24574.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.datetime_local_field24574.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field24574);

/**
 * Creates a email input field.
 */
sablono.core.email_field24578 = (function sablono$core$email_field24578(var_args){
var args24579 = [];
var len__17548__auto___24646 = arguments.length;
var i__17549__auto___24647 = (0);
while(true){
if((i__17549__auto___24647 < len__17548__auto___24646)){
args24579.push((arguments[i__17549__auto___24647]));

var G__24648 = (i__17549__auto___24647 + (1));
i__17549__auto___24647 = G__24648;
continue;
} else {
}
break;
}

var G__24581 = args24579.length;
switch (G__24581) {
case 1:
return sablono.core.email_field24578.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field24578.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24579.length)].join('')));

}
});

sablono.core.email_field24578.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.email_field24578.call(null,name__23970__auto__,null);
});

sablono.core.email_field24578.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.email_field24578.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field24578);

/**
 * Creates a file input field.
 */
sablono.core.file_field24582 = (function sablono$core$file_field24582(var_args){
var args24583 = [];
var len__17548__auto___24650 = arguments.length;
var i__17549__auto___24651 = (0);
while(true){
if((i__17549__auto___24651 < len__17548__auto___24650)){
args24583.push((arguments[i__17549__auto___24651]));

var G__24652 = (i__17549__auto___24651 + (1));
i__17549__auto___24651 = G__24652;
continue;
} else {
}
break;
}

var G__24585 = args24583.length;
switch (G__24585) {
case 1:
return sablono.core.file_field24582.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field24582.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24583.length)].join('')));

}
});

sablono.core.file_field24582.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.file_field24582.call(null,name__23970__auto__,null);
});

sablono.core.file_field24582.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.file_field24582.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field24582);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field24586 = (function sablono$core$hidden_field24586(var_args){
var args24587 = [];
var len__17548__auto___24654 = arguments.length;
var i__17549__auto___24655 = (0);
while(true){
if((i__17549__auto___24655 < len__17548__auto___24654)){
args24587.push((arguments[i__17549__auto___24655]));

var G__24656 = (i__17549__auto___24655 + (1));
i__17549__auto___24655 = G__24656;
continue;
} else {
}
break;
}

var G__24589 = args24587.length;
switch (G__24589) {
case 1:
return sablono.core.hidden_field24586.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field24586.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24587.length)].join('')));

}
});

sablono.core.hidden_field24586.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.hidden_field24586.call(null,name__23970__auto__,null);
});

sablono.core.hidden_field24586.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.hidden_field24586.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field24586);

/**
 * Creates a month input field.
 */
sablono.core.month_field24590 = (function sablono$core$month_field24590(var_args){
var args24591 = [];
var len__17548__auto___24658 = arguments.length;
var i__17549__auto___24659 = (0);
while(true){
if((i__17549__auto___24659 < len__17548__auto___24658)){
args24591.push((arguments[i__17549__auto___24659]));

var G__24660 = (i__17549__auto___24659 + (1));
i__17549__auto___24659 = G__24660;
continue;
} else {
}
break;
}

var G__24593 = args24591.length;
switch (G__24593) {
case 1:
return sablono.core.month_field24590.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field24590.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24591.length)].join('')));

}
});

sablono.core.month_field24590.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.month_field24590.call(null,name__23970__auto__,null);
});

sablono.core.month_field24590.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.month_field24590.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field24590);

/**
 * Creates a number input field.
 */
sablono.core.number_field24594 = (function sablono$core$number_field24594(var_args){
var args24595 = [];
var len__17548__auto___24662 = arguments.length;
var i__17549__auto___24663 = (0);
while(true){
if((i__17549__auto___24663 < len__17548__auto___24662)){
args24595.push((arguments[i__17549__auto___24663]));

var G__24664 = (i__17549__auto___24663 + (1));
i__17549__auto___24663 = G__24664;
continue;
} else {
}
break;
}

var G__24597 = args24595.length;
switch (G__24597) {
case 1:
return sablono.core.number_field24594.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field24594.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24595.length)].join('')));

}
});

sablono.core.number_field24594.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.number_field24594.call(null,name__23970__auto__,null);
});

sablono.core.number_field24594.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.number_field24594.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field24594);

/**
 * Creates a password input field.
 */
sablono.core.password_field24598 = (function sablono$core$password_field24598(var_args){
var args24599 = [];
var len__17548__auto___24666 = arguments.length;
var i__17549__auto___24667 = (0);
while(true){
if((i__17549__auto___24667 < len__17548__auto___24666)){
args24599.push((arguments[i__17549__auto___24667]));

var G__24668 = (i__17549__auto___24667 + (1));
i__17549__auto___24667 = G__24668;
continue;
} else {
}
break;
}

var G__24601 = args24599.length;
switch (G__24601) {
case 1:
return sablono.core.password_field24598.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field24598.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24599.length)].join('')));

}
});

sablono.core.password_field24598.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.password_field24598.call(null,name__23970__auto__,null);
});

sablono.core.password_field24598.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.password_field24598.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field24598);

/**
 * Creates a range input field.
 */
sablono.core.range_field24602 = (function sablono$core$range_field24602(var_args){
var args24603 = [];
var len__17548__auto___24670 = arguments.length;
var i__17549__auto___24671 = (0);
while(true){
if((i__17549__auto___24671 < len__17548__auto___24670)){
args24603.push((arguments[i__17549__auto___24671]));

var G__24672 = (i__17549__auto___24671 + (1));
i__17549__auto___24671 = G__24672;
continue;
} else {
}
break;
}

var G__24605 = args24603.length;
switch (G__24605) {
case 1:
return sablono.core.range_field24602.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field24602.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24603.length)].join('')));

}
});

sablono.core.range_field24602.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.range_field24602.call(null,name__23970__auto__,null);
});

sablono.core.range_field24602.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.range_field24602.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field24602);

/**
 * Creates a search input field.
 */
sablono.core.search_field24606 = (function sablono$core$search_field24606(var_args){
var args24607 = [];
var len__17548__auto___24674 = arguments.length;
var i__17549__auto___24675 = (0);
while(true){
if((i__17549__auto___24675 < len__17548__auto___24674)){
args24607.push((arguments[i__17549__auto___24675]));

var G__24676 = (i__17549__auto___24675 + (1));
i__17549__auto___24675 = G__24676;
continue;
} else {
}
break;
}

var G__24609 = args24607.length;
switch (G__24609) {
case 1:
return sablono.core.search_field24606.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field24606.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24607.length)].join('')));

}
});

sablono.core.search_field24606.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.search_field24606.call(null,name__23970__auto__,null);
});

sablono.core.search_field24606.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.search_field24606.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field24606);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field24610 = (function sablono$core$tel_field24610(var_args){
var args24611 = [];
var len__17548__auto___24678 = arguments.length;
var i__17549__auto___24679 = (0);
while(true){
if((i__17549__auto___24679 < len__17548__auto___24678)){
args24611.push((arguments[i__17549__auto___24679]));

var G__24680 = (i__17549__auto___24679 + (1));
i__17549__auto___24679 = G__24680;
continue;
} else {
}
break;
}

var G__24613 = args24611.length;
switch (G__24613) {
case 1:
return sablono.core.tel_field24610.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field24610.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24611.length)].join('')));

}
});

sablono.core.tel_field24610.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.tel_field24610.call(null,name__23970__auto__,null);
});

sablono.core.tel_field24610.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.tel_field24610.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field24610);

/**
 * Creates a text input field.
 */
sablono.core.text_field24614 = (function sablono$core$text_field24614(var_args){
var args24615 = [];
var len__17548__auto___24682 = arguments.length;
var i__17549__auto___24683 = (0);
while(true){
if((i__17549__auto___24683 < len__17548__auto___24682)){
args24615.push((arguments[i__17549__auto___24683]));

var G__24684 = (i__17549__auto___24683 + (1));
i__17549__auto___24683 = G__24684;
continue;
} else {
}
break;
}

var G__24617 = args24615.length;
switch (G__24617) {
case 1:
return sablono.core.text_field24614.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field24614.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24615.length)].join('')));

}
});

sablono.core.text_field24614.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.text_field24614.call(null,name__23970__auto__,null);
});

sablono.core.text_field24614.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.text_field24614.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field24614);

/**
 * Creates a time input field.
 */
sablono.core.time_field24618 = (function sablono$core$time_field24618(var_args){
var args24619 = [];
var len__17548__auto___24686 = arguments.length;
var i__17549__auto___24687 = (0);
while(true){
if((i__17549__auto___24687 < len__17548__auto___24686)){
args24619.push((arguments[i__17549__auto___24687]));

var G__24688 = (i__17549__auto___24687 + (1));
i__17549__auto___24687 = G__24688;
continue;
} else {
}
break;
}

var G__24621 = args24619.length;
switch (G__24621) {
case 1:
return sablono.core.time_field24618.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field24618.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24619.length)].join('')));

}
});

sablono.core.time_field24618.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.time_field24618.call(null,name__23970__auto__,null);
});

sablono.core.time_field24618.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.time_field24618.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field24618);

/**
 * Creates a url input field.
 */
sablono.core.url_field24622 = (function sablono$core$url_field24622(var_args){
var args24623 = [];
var len__17548__auto___24690 = arguments.length;
var i__17549__auto___24691 = (0);
while(true){
if((i__17549__auto___24691 < len__17548__auto___24690)){
args24623.push((arguments[i__17549__auto___24691]));

var G__24692 = (i__17549__auto___24691 + (1));
i__17549__auto___24691 = G__24692;
continue;
} else {
}
break;
}

var G__24625 = args24623.length;
switch (G__24625) {
case 1:
return sablono.core.url_field24622.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field24622.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24623.length)].join('')));

}
});

sablono.core.url_field24622.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.url_field24622.call(null,name__23970__auto__,null);
});

sablono.core.url_field24622.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.url_field24622.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field24622);

/**
 * Creates a week input field.
 */
sablono.core.week_field24626 = (function sablono$core$week_field24626(var_args){
var args24627 = [];
var len__17548__auto___24694 = arguments.length;
var i__17549__auto___24695 = (0);
while(true){
if((i__17549__auto___24695 < len__17548__auto___24694)){
args24627.push((arguments[i__17549__auto___24695]));

var G__24696 = (i__17549__auto___24695 + (1));
i__17549__auto___24695 = G__24696;
continue;
} else {
}
break;
}

var G__24629 = args24627.length;
switch (G__24629) {
case 1:
return sablono.core.week_field24626.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field24626.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24627.length)].join('')));

}
});

sablono.core.week_field24626.cljs$core$IFn$_invoke$arity$1 = (function (name__23970__auto__){
return sablono.core.week_field24626.call(null,name__23970__auto__,null);
});

sablono.core.week_field24626.cljs$core$IFn$_invoke$arity$2 = (function (name__23970__auto__,value__23971__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23970__auto__,value__23971__auto__);
});

sablono.core.week_field24626.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field24626);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box24698 = (function sablono$core$check_box24698(var_args){
var args24699 = [];
var len__17548__auto___24702 = arguments.length;
var i__17549__auto___24703 = (0);
while(true){
if((i__17549__auto___24703 < len__17548__auto___24702)){
args24699.push((arguments[i__17549__auto___24703]));

var G__24704 = (i__17549__auto___24703 + (1));
i__17549__auto___24703 = G__24704;
continue;
} else {
}
break;
}

var G__24701 = args24699.length;
switch (G__24701) {
case 1:
return sablono.core.check_box24698.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box24698.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box24698.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24699.length)].join('')));

}
});

sablono.core.check_box24698.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box24698.call(null,name,null);
});

sablono.core.check_box24698.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box24698.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box24698.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box24698.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box24698);
/**
 * Creates a radio button.
 */
sablono.core.radio_button24706 = (function sablono$core$radio_button24706(var_args){
var args24707 = [];
var len__17548__auto___24710 = arguments.length;
var i__17549__auto___24711 = (0);
while(true){
if((i__17549__auto___24711 < len__17548__auto___24710)){
args24707.push((arguments[i__17549__auto___24711]));

var G__24712 = (i__17549__auto___24711 + (1));
i__17549__auto___24711 = G__24712;
continue;
} else {
}
break;
}

var G__24709 = args24707.length;
switch (G__24709) {
case 1:
return sablono.core.radio_button24706.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button24706.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button24706.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24707.length)].join('')));

}
});

sablono.core.radio_button24706.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button24706.call(null,group,null);
});

sablono.core.radio_button24706.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button24706.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button24706.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button24706.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button24706);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options24714 = (function sablono$core$select_options24714(coll){
var iter__17262__auto__ = (function sablono$core$select_options24714_$_iter__24723(s__24724){
return (new cljs.core.LazySeq(null,(function (){
var s__24724__$1 = s__24724;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24724__$1);
if(temp__4425__auto__){
var s__24724__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24724__$2)){
var c__17260__auto__ = cljs.core.chunk_first.call(null,s__24724__$2);
var size__17261__auto__ = cljs.core.count.call(null,c__17260__auto__);
var b__24726 = cljs.core.chunk_buffer.call(null,size__17261__auto__);
if((function (){var i__24725 = (0);
while(true){
if((i__24725 < size__17261__auto__)){
var x = cljs.core._nth.call(null,c__17260__auto__,i__24725);
cljs.core.chunk_append.call(null,b__24726,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24729 = x;
var text = cljs.core.nth.call(null,vec__24729,(0),null);
var val = cljs.core.nth.call(null,vec__24729,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24729,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24714.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__24731 = (i__24725 + (1));
i__24725 = G__24731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24726),sablono$core$select_options24714_$_iter__24723.call(null,cljs.core.chunk_rest.call(null,s__24724__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24726),null);
}
} else {
var x = cljs.core.first.call(null,s__24724__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24730 = x;
var text = cljs.core.nth.call(null,vec__24730,(0),null);
var val = cljs.core.nth.call(null,vec__24730,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24730,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24714.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options24714_$_iter__24723.call(null,cljs.core.rest.call(null,s__24724__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17262__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options24714);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down24732 = (function sablono$core$drop_down24732(var_args){
var args24733 = [];
var len__17548__auto___24736 = arguments.length;
var i__17549__auto___24737 = (0);
while(true){
if((i__17549__auto___24737 < len__17548__auto___24736)){
args24733.push((arguments[i__17549__auto___24737]));

var G__24738 = (i__17549__auto___24737 + (1));
i__17549__auto___24737 = G__24738;
continue;
} else {
}
break;
}

var G__24735 = args24733.length;
switch (G__24735) {
case 2:
return sablono.core.drop_down24732.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down24732.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24733.length)].join('')));

}
});

sablono.core.drop_down24732.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down24732.call(null,name,options,null);
});

sablono.core.drop_down24732.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down24732.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down24732);
/**
 * Creates a text area element.
 */
sablono.core.text_area24740 = (function sablono$core$text_area24740(var_args){
var args24741 = [];
var len__17548__auto___24744 = arguments.length;
var i__17549__auto___24745 = (0);
while(true){
if((i__17549__auto___24745 < len__17548__auto___24744)){
args24741.push((arguments[i__17549__auto___24745]));

var G__24746 = (i__17549__auto___24745 + (1));
i__17549__auto___24745 = G__24746;
continue;
} else {
}
break;
}

var G__24743 = args24741.length;
switch (G__24743) {
case 1:
return sablono.core.text_area24740.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area24740.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24741.length)].join('')));

}
});

sablono.core.text_area24740.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area24740.call(null,name,null);
});

sablono.core.text_area24740.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area24740.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area24740);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label24748 = (function sablono$core$label24748(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label24748);
/**
 * Creates a submit button.
 */
sablono.core.submit_button24749 = (function sablono$core$submit_button24749(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button24749);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button24750 = (function sablono$core$reset_button24750(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button24750);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to24751 = (function sablono$core$form_to24751(var_args){
var args__17555__auto__ = [];
var len__17548__auto___24756 = arguments.length;
var i__17549__auto___24757 = (0);
while(true){
if((i__17549__auto___24757 < len__17548__auto___24756)){
args__17555__auto__.push((arguments[i__17549__auto___24757]));

var G__24758 = (i__17549__auto___24757 + (1));
i__17549__auto___24757 = G__24758;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((1) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((1)),(0))):null);
return sablono.core.form_to24751.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17556__auto__);
});

sablono.core.form_to24751.cljs$core$IFn$_invoke$arity$variadic = (function (p__24754,body){
var vec__24755 = p__24754;
var method = cljs.core.nth.call(null,vec__24755,(0),null);
var action = cljs.core.nth.call(null,vec__24755,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to24751.cljs$lang$maxFixedArity = (1);

sablono.core.form_to24751.cljs$lang$applyTo = (function (seq24752){
var G__24753 = cljs.core.first.call(null,seq24752);
var seq24752__$1 = cljs.core.next.call(null,seq24752);
return sablono.core.form_to24751.cljs$core$IFn$_invoke$arity$variadic(G__24753,seq24752__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to24751);

//# sourceMappingURL=core.js.map?rel=1441471063445