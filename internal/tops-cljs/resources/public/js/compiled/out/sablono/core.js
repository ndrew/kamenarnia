// Compiled by ClojureScript 1.7.170 {}
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
var G__6242__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__6241 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__6241,(0),null);
var body = cljs.core.nthnext.call(null,vec__6241,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__6242 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6243__i = 0, G__6243__a = new Array(arguments.length -  0);
while (G__6243__i < G__6243__a.length) {G__6243__a[G__6243__i] = arguments[G__6243__i + 0]; ++G__6243__i;}
  args = new cljs.core.IndexedSeq(G__6243__a,0);
} 
return G__6242__delegate.call(this,args);};
G__6242.cljs$lang$maxFixedArity = 0;
G__6242.cljs$lang$applyTo = (function (arglist__6244){
var args = cljs.core.seq(arglist__6244);
return G__6242__delegate(args);
});
G__6242.cljs$core$IFn$_invoke$arity$variadic = G__6242__delegate;
return G__6242;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5440__auto__ = (function sablono$core$update_arglists_$_iter__6249(s__6250){
return (new cljs.core.LazySeq(null,(function (){
var s__6250__$1 = s__6250;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6250__$1);
if(temp__4425__auto__){
var s__6250__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6250__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__6250__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__6252 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__6251 = (0);
while(true){
if((i__6251 < size__5439__auto__)){
var args = cljs.core._nth.call(null,c__5438__auto__,i__6251);
cljs.core.chunk_append.call(null,b__6252,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__6253 = (i__6251 + (1));
i__6251 = G__6253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6252),sablono$core$update_arglists_$_iter__6249.call(null,cljs.core.chunk_rest.call(null,s__6250__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6252),null);
}
} else {
var args = cljs.core.first.call(null,s__6250__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__6249.call(null,cljs.core.rest.call(null,s__6250__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,arglists);
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
var args__5733__auto__ = [];
var len__5726__auto___6259 = arguments.length;
var i__5727__auto___6260 = (0);
while(true){
if((i__5727__auto___6260 < len__5726__auto___6259)){
args__5733__auto__.push((arguments[i__5727__auto___6260]));

var G__6261 = (i__5727__auto___6260 + (1));
i__5727__auto___6260 = G__6261;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5440__auto__ = (function sablono$core$iter__6255(s__6256){
return (new cljs.core.LazySeq(null,(function (){
var s__6256__$1 = s__6256;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6256__$1);
if(temp__4425__auto__){
var s__6256__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6256__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__6256__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__6258 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__6257 = (0);
while(true){
if((i__6257 < size__5439__auto__)){
var style = cljs.core._nth.call(null,c__5438__auto__,i__6257);
cljs.core.chunk_append.call(null,b__6258,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__6262 = (i__6257 + (1));
i__6257 = G__6262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6258),sablono$core$iter__6255.call(null,cljs.core.chunk_rest.call(null,s__6256__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6258),null);
}
} else {
var style = cljs.core.first.call(null,s__6256__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__6255.call(null,cljs.core.rest.call(null,s__6256__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq6254){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6254));
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
sablono.core.link_to6263 = (function sablono$core$link_to6263(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6266 = arguments.length;
var i__5727__auto___6267 = (0);
while(true){
if((i__5727__auto___6267 < len__5726__auto___6266)){
args__5733__auto__.push((arguments[i__5727__auto___6267]));

var G__6268 = (i__5727__auto___6267 + (1));
i__5727__auto___6267 = G__6268;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return sablono.core.link_to6263.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

sablono.core.link_to6263.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to6263.cljs$lang$maxFixedArity = (1);

sablono.core.link_to6263.cljs$lang$applyTo = (function (seq6264){
var G__6265 = cljs.core.first.call(null,seq6264);
var seq6264__$1 = cljs.core.next.call(null,seq6264);
return sablono.core.link_to6263.cljs$core$IFn$_invoke$arity$variadic(G__6265,seq6264__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to6263);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to6269 = (function sablono$core$mail_to6269(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6274 = arguments.length;
var i__5727__auto___6275 = (0);
while(true){
if((i__5727__auto___6275 < len__5726__auto___6274)){
args__5733__auto__.push((arguments[i__5727__auto___6275]));

var G__6276 = (i__5727__auto___6275 + (1));
i__5727__auto___6275 = G__6276;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return sablono.core.mail_to6269.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

sablono.core.mail_to6269.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__6272){
var vec__6273 = p__6272;
var content = cljs.core.nth.call(null,vec__6273,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4668__auto__ = content;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to6269.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to6269.cljs$lang$applyTo = (function (seq6270){
var G__6271 = cljs.core.first.call(null,seq6270);
var seq6270__$1 = cljs.core.next.call(null,seq6270);
return sablono.core.mail_to6269.cljs$core$IFn$_invoke$arity$variadic(G__6271,seq6270__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to6269);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list6277 = (function sablono$core$unordered_list6277(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5440__auto__ = (function sablono$core$unordered_list6277_$_iter__6282(s__6283){
return (new cljs.core.LazySeq(null,(function (){
var s__6283__$1 = s__6283;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6283__$1);
if(temp__4425__auto__){
var s__6283__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6283__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__6283__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__6285 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__6284 = (0);
while(true){
if((i__6284 < size__5439__auto__)){
var x = cljs.core._nth.call(null,c__5438__auto__,i__6284);
cljs.core.chunk_append.call(null,b__6285,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__6286 = (i__6284 + (1));
i__6284 = G__6286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6285),sablono$core$unordered_list6277_$_iter__6282.call(null,cljs.core.chunk_rest.call(null,s__6283__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6285),null);
}
} else {
var x = cljs.core.first.call(null,s__6283__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list6277_$_iter__6282.call(null,cljs.core.rest.call(null,s__6283__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list6277);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list6287 = (function sablono$core$ordered_list6287(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5440__auto__ = (function sablono$core$ordered_list6287_$_iter__6292(s__6293){
return (new cljs.core.LazySeq(null,(function (){
var s__6293__$1 = s__6293;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6293__$1);
if(temp__4425__auto__){
var s__6293__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6293__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__6293__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__6295 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__6294 = (0);
while(true){
if((i__6294 < size__5439__auto__)){
var x = cljs.core._nth.call(null,c__5438__auto__,i__6294);
cljs.core.chunk_append.call(null,b__6295,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__6296 = (i__6294 + (1));
i__6294 = G__6296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6295),sablono$core$ordered_list6287_$_iter__6292.call(null,cljs.core.chunk_rest.call(null,s__6293__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6295),null);
}
} else {
var x = cljs.core.first.call(null,s__6293__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list6287_$_iter__6292.call(null,cljs.core.rest.call(null,s__6293__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list6287);
/**
 * Create an image element.
 */
sablono.core.image6297 = (function sablono$core$image6297(var_args){
var args6298 = [];
var len__5726__auto___6301 = arguments.length;
var i__5727__auto___6302 = (0);
while(true){
if((i__5727__auto___6302 < len__5726__auto___6301)){
args6298.push((arguments[i__5727__auto___6302]));

var G__6303 = (i__5727__auto___6302 + (1));
i__5727__auto___6302 = G__6303;
continue;
} else {
}
break;
}

var G__6300 = args6298.length;
switch (G__6300) {
case 1:
return sablono.core.image6297.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image6297.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6298.length)].join('')));

}
});

sablono.core.image6297.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image6297.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image6297.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image6297);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__6305_SHARP_,p2__6306_SHARP_){
return [cljs.core.str(p1__6305_SHARP_),cljs.core.str("["),cljs.core.str(p2__6306_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__6307_SHARP_,p2__6308_SHARP_){
return [cljs.core.str(p1__6307_SHARP_),cljs.core.str("-"),cljs.core.str(p2__6308_SHARP_)].join('');
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
sablono.core.color_field6309 = (function sablono$core$color_field6309(var_args){
var args6310 = [];
var len__5726__auto___6377 = arguments.length;
var i__5727__auto___6378 = (0);
while(true){
if((i__5727__auto___6378 < len__5726__auto___6377)){
args6310.push((arguments[i__5727__auto___6378]));

var G__6379 = (i__5727__auto___6378 + (1));
i__5727__auto___6378 = G__6379;
continue;
} else {
}
break;
}

var G__6312 = args6310.length;
switch (G__6312) {
case 1:
return sablono.core.color_field6309.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field6309.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6310.length)].join('')));

}
});

sablono.core.color_field6309.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.color_field6309.call(null,name__6230__auto__,null);
});

sablono.core.color_field6309.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.color_field6309.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field6309);

/**
 * Creates a date input field.
 */
sablono.core.date_field6313 = (function sablono$core$date_field6313(var_args){
var args6314 = [];
var len__5726__auto___6381 = arguments.length;
var i__5727__auto___6382 = (0);
while(true){
if((i__5727__auto___6382 < len__5726__auto___6381)){
args6314.push((arguments[i__5727__auto___6382]));

var G__6383 = (i__5727__auto___6382 + (1));
i__5727__auto___6382 = G__6383;
continue;
} else {
}
break;
}

var G__6316 = args6314.length;
switch (G__6316) {
case 1:
return sablono.core.date_field6313.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field6313.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6314.length)].join('')));

}
});

sablono.core.date_field6313.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.date_field6313.call(null,name__6230__auto__,null);
});

sablono.core.date_field6313.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.date_field6313.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field6313);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field6317 = (function sablono$core$datetime_field6317(var_args){
var args6318 = [];
var len__5726__auto___6385 = arguments.length;
var i__5727__auto___6386 = (0);
while(true){
if((i__5727__auto___6386 < len__5726__auto___6385)){
args6318.push((arguments[i__5727__auto___6386]));

var G__6387 = (i__5727__auto___6386 + (1));
i__5727__auto___6386 = G__6387;
continue;
} else {
}
break;
}

var G__6320 = args6318.length;
switch (G__6320) {
case 1:
return sablono.core.datetime_field6317.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field6317.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6318.length)].join('')));

}
});

sablono.core.datetime_field6317.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.datetime_field6317.call(null,name__6230__auto__,null);
});

sablono.core.datetime_field6317.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.datetime_field6317.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field6317);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field6321 = (function sablono$core$datetime_local_field6321(var_args){
var args6322 = [];
var len__5726__auto___6389 = arguments.length;
var i__5727__auto___6390 = (0);
while(true){
if((i__5727__auto___6390 < len__5726__auto___6389)){
args6322.push((arguments[i__5727__auto___6390]));

var G__6391 = (i__5727__auto___6390 + (1));
i__5727__auto___6390 = G__6391;
continue;
} else {
}
break;
}

var G__6324 = args6322.length;
switch (G__6324) {
case 1:
return sablono.core.datetime_local_field6321.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field6321.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6322.length)].join('')));

}
});

sablono.core.datetime_local_field6321.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.datetime_local_field6321.call(null,name__6230__auto__,null);
});

sablono.core.datetime_local_field6321.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.datetime_local_field6321.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field6321);

/**
 * Creates a email input field.
 */
sablono.core.email_field6325 = (function sablono$core$email_field6325(var_args){
var args6326 = [];
var len__5726__auto___6393 = arguments.length;
var i__5727__auto___6394 = (0);
while(true){
if((i__5727__auto___6394 < len__5726__auto___6393)){
args6326.push((arguments[i__5727__auto___6394]));

var G__6395 = (i__5727__auto___6394 + (1));
i__5727__auto___6394 = G__6395;
continue;
} else {
}
break;
}

var G__6328 = args6326.length;
switch (G__6328) {
case 1:
return sablono.core.email_field6325.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field6325.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6326.length)].join('')));

}
});

sablono.core.email_field6325.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.email_field6325.call(null,name__6230__auto__,null);
});

sablono.core.email_field6325.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.email_field6325.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field6325);

/**
 * Creates a file input field.
 */
sablono.core.file_field6329 = (function sablono$core$file_field6329(var_args){
var args6330 = [];
var len__5726__auto___6397 = arguments.length;
var i__5727__auto___6398 = (0);
while(true){
if((i__5727__auto___6398 < len__5726__auto___6397)){
args6330.push((arguments[i__5727__auto___6398]));

var G__6399 = (i__5727__auto___6398 + (1));
i__5727__auto___6398 = G__6399;
continue;
} else {
}
break;
}

var G__6332 = args6330.length;
switch (G__6332) {
case 1:
return sablono.core.file_field6329.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field6329.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6330.length)].join('')));

}
});

sablono.core.file_field6329.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.file_field6329.call(null,name__6230__auto__,null);
});

sablono.core.file_field6329.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.file_field6329.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field6329);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field6333 = (function sablono$core$hidden_field6333(var_args){
var args6334 = [];
var len__5726__auto___6401 = arguments.length;
var i__5727__auto___6402 = (0);
while(true){
if((i__5727__auto___6402 < len__5726__auto___6401)){
args6334.push((arguments[i__5727__auto___6402]));

var G__6403 = (i__5727__auto___6402 + (1));
i__5727__auto___6402 = G__6403;
continue;
} else {
}
break;
}

var G__6336 = args6334.length;
switch (G__6336) {
case 1:
return sablono.core.hidden_field6333.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field6333.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6334.length)].join('')));

}
});

sablono.core.hidden_field6333.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.hidden_field6333.call(null,name__6230__auto__,null);
});

sablono.core.hidden_field6333.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.hidden_field6333.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field6333);

/**
 * Creates a month input field.
 */
sablono.core.month_field6337 = (function sablono$core$month_field6337(var_args){
var args6338 = [];
var len__5726__auto___6405 = arguments.length;
var i__5727__auto___6406 = (0);
while(true){
if((i__5727__auto___6406 < len__5726__auto___6405)){
args6338.push((arguments[i__5727__auto___6406]));

var G__6407 = (i__5727__auto___6406 + (1));
i__5727__auto___6406 = G__6407;
continue;
} else {
}
break;
}

var G__6340 = args6338.length;
switch (G__6340) {
case 1:
return sablono.core.month_field6337.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field6337.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6338.length)].join('')));

}
});

sablono.core.month_field6337.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.month_field6337.call(null,name__6230__auto__,null);
});

sablono.core.month_field6337.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.month_field6337.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field6337);

/**
 * Creates a number input field.
 */
sablono.core.number_field6341 = (function sablono$core$number_field6341(var_args){
var args6342 = [];
var len__5726__auto___6409 = arguments.length;
var i__5727__auto___6410 = (0);
while(true){
if((i__5727__auto___6410 < len__5726__auto___6409)){
args6342.push((arguments[i__5727__auto___6410]));

var G__6411 = (i__5727__auto___6410 + (1));
i__5727__auto___6410 = G__6411;
continue;
} else {
}
break;
}

var G__6344 = args6342.length;
switch (G__6344) {
case 1:
return sablono.core.number_field6341.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field6341.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6342.length)].join('')));

}
});

sablono.core.number_field6341.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.number_field6341.call(null,name__6230__auto__,null);
});

sablono.core.number_field6341.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.number_field6341.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field6341);

/**
 * Creates a password input field.
 */
sablono.core.password_field6345 = (function sablono$core$password_field6345(var_args){
var args6346 = [];
var len__5726__auto___6413 = arguments.length;
var i__5727__auto___6414 = (0);
while(true){
if((i__5727__auto___6414 < len__5726__auto___6413)){
args6346.push((arguments[i__5727__auto___6414]));

var G__6415 = (i__5727__auto___6414 + (1));
i__5727__auto___6414 = G__6415;
continue;
} else {
}
break;
}

var G__6348 = args6346.length;
switch (G__6348) {
case 1:
return sablono.core.password_field6345.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field6345.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6346.length)].join('')));

}
});

sablono.core.password_field6345.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.password_field6345.call(null,name__6230__auto__,null);
});

sablono.core.password_field6345.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.password_field6345.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field6345);

/**
 * Creates a range input field.
 */
sablono.core.range_field6349 = (function sablono$core$range_field6349(var_args){
var args6350 = [];
var len__5726__auto___6417 = arguments.length;
var i__5727__auto___6418 = (0);
while(true){
if((i__5727__auto___6418 < len__5726__auto___6417)){
args6350.push((arguments[i__5727__auto___6418]));

var G__6419 = (i__5727__auto___6418 + (1));
i__5727__auto___6418 = G__6419;
continue;
} else {
}
break;
}

var G__6352 = args6350.length;
switch (G__6352) {
case 1:
return sablono.core.range_field6349.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field6349.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6350.length)].join('')));

}
});

sablono.core.range_field6349.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.range_field6349.call(null,name__6230__auto__,null);
});

sablono.core.range_field6349.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.range_field6349.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field6349);

/**
 * Creates a search input field.
 */
sablono.core.search_field6353 = (function sablono$core$search_field6353(var_args){
var args6354 = [];
var len__5726__auto___6421 = arguments.length;
var i__5727__auto___6422 = (0);
while(true){
if((i__5727__auto___6422 < len__5726__auto___6421)){
args6354.push((arguments[i__5727__auto___6422]));

var G__6423 = (i__5727__auto___6422 + (1));
i__5727__auto___6422 = G__6423;
continue;
} else {
}
break;
}

var G__6356 = args6354.length;
switch (G__6356) {
case 1:
return sablono.core.search_field6353.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field6353.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6354.length)].join('')));

}
});

sablono.core.search_field6353.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.search_field6353.call(null,name__6230__auto__,null);
});

sablono.core.search_field6353.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.search_field6353.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field6353);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field6357 = (function sablono$core$tel_field6357(var_args){
var args6358 = [];
var len__5726__auto___6425 = arguments.length;
var i__5727__auto___6426 = (0);
while(true){
if((i__5727__auto___6426 < len__5726__auto___6425)){
args6358.push((arguments[i__5727__auto___6426]));

var G__6427 = (i__5727__auto___6426 + (1));
i__5727__auto___6426 = G__6427;
continue;
} else {
}
break;
}

var G__6360 = args6358.length;
switch (G__6360) {
case 1:
return sablono.core.tel_field6357.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field6357.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6358.length)].join('')));

}
});

sablono.core.tel_field6357.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.tel_field6357.call(null,name__6230__auto__,null);
});

sablono.core.tel_field6357.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.tel_field6357.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field6357);

/**
 * Creates a text input field.
 */
sablono.core.text_field6361 = (function sablono$core$text_field6361(var_args){
var args6362 = [];
var len__5726__auto___6429 = arguments.length;
var i__5727__auto___6430 = (0);
while(true){
if((i__5727__auto___6430 < len__5726__auto___6429)){
args6362.push((arguments[i__5727__auto___6430]));

var G__6431 = (i__5727__auto___6430 + (1));
i__5727__auto___6430 = G__6431;
continue;
} else {
}
break;
}

var G__6364 = args6362.length;
switch (G__6364) {
case 1:
return sablono.core.text_field6361.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field6361.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6362.length)].join('')));

}
});

sablono.core.text_field6361.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.text_field6361.call(null,name__6230__auto__,null);
});

sablono.core.text_field6361.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.text_field6361.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field6361);

/**
 * Creates a time input field.
 */
sablono.core.time_field6365 = (function sablono$core$time_field6365(var_args){
var args6366 = [];
var len__5726__auto___6433 = arguments.length;
var i__5727__auto___6434 = (0);
while(true){
if((i__5727__auto___6434 < len__5726__auto___6433)){
args6366.push((arguments[i__5727__auto___6434]));

var G__6435 = (i__5727__auto___6434 + (1));
i__5727__auto___6434 = G__6435;
continue;
} else {
}
break;
}

var G__6368 = args6366.length;
switch (G__6368) {
case 1:
return sablono.core.time_field6365.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field6365.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6366.length)].join('')));

}
});

sablono.core.time_field6365.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.time_field6365.call(null,name__6230__auto__,null);
});

sablono.core.time_field6365.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.time_field6365.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field6365);

/**
 * Creates a url input field.
 */
sablono.core.url_field6369 = (function sablono$core$url_field6369(var_args){
var args6370 = [];
var len__5726__auto___6437 = arguments.length;
var i__5727__auto___6438 = (0);
while(true){
if((i__5727__auto___6438 < len__5726__auto___6437)){
args6370.push((arguments[i__5727__auto___6438]));

var G__6439 = (i__5727__auto___6438 + (1));
i__5727__auto___6438 = G__6439;
continue;
} else {
}
break;
}

var G__6372 = args6370.length;
switch (G__6372) {
case 1:
return sablono.core.url_field6369.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field6369.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6370.length)].join('')));

}
});

sablono.core.url_field6369.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.url_field6369.call(null,name__6230__auto__,null);
});

sablono.core.url_field6369.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.url_field6369.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field6369);

/**
 * Creates a week input field.
 */
sablono.core.week_field6373 = (function sablono$core$week_field6373(var_args){
var args6374 = [];
var len__5726__auto___6441 = arguments.length;
var i__5727__auto___6442 = (0);
while(true){
if((i__5727__auto___6442 < len__5726__auto___6441)){
args6374.push((arguments[i__5727__auto___6442]));

var G__6443 = (i__5727__auto___6442 + (1));
i__5727__auto___6442 = G__6443;
continue;
} else {
}
break;
}

var G__6376 = args6374.length;
switch (G__6376) {
case 1:
return sablono.core.week_field6373.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field6373.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6374.length)].join('')));

}
});

sablono.core.week_field6373.cljs$core$IFn$_invoke$arity$1 = (function (name__6230__auto__){
return sablono.core.week_field6373.call(null,name__6230__auto__,null);
});

sablono.core.week_field6373.cljs$core$IFn$_invoke$arity$2 = (function (name__6230__auto__,value__6231__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6230__auto__,value__6231__auto__);
});

sablono.core.week_field6373.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field6373);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box6445 = (function sablono$core$check_box6445(var_args){
var args6446 = [];
var len__5726__auto___6449 = arguments.length;
var i__5727__auto___6450 = (0);
while(true){
if((i__5727__auto___6450 < len__5726__auto___6449)){
args6446.push((arguments[i__5727__auto___6450]));

var G__6451 = (i__5727__auto___6450 + (1));
i__5727__auto___6450 = G__6451;
continue;
} else {
}
break;
}

var G__6448 = args6446.length;
switch (G__6448) {
case 1:
return sablono.core.check_box6445.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box6445.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box6445.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6446.length)].join('')));

}
});

sablono.core.check_box6445.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box6445.call(null,name,null);
});

sablono.core.check_box6445.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box6445.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box6445.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box6445.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box6445);
/**
 * Creates a radio button.
 */
sablono.core.radio_button6453 = (function sablono$core$radio_button6453(var_args){
var args6454 = [];
var len__5726__auto___6457 = arguments.length;
var i__5727__auto___6458 = (0);
while(true){
if((i__5727__auto___6458 < len__5726__auto___6457)){
args6454.push((arguments[i__5727__auto___6458]));

var G__6459 = (i__5727__auto___6458 + (1));
i__5727__auto___6458 = G__6459;
continue;
} else {
}
break;
}

var G__6456 = args6454.length;
switch (G__6456) {
case 1:
return sablono.core.radio_button6453.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button6453.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button6453.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6454.length)].join('')));

}
});

sablono.core.radio_button6453.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button6453.call(null,group,null);
});

sablono.core.radio_button6453.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button6453.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button6453.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button6453.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button6453);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options6461 = (function sablono$core$select_options6461(coll){
var iter__5440__auto__ = (function sablono$core$select_options6461_$_iter__6470(s__6471){
return (new cljs.core.LazySeq(null,(function (){
var s__6471__$1 = s__6471;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__6471__$1);
if(temp__4425__auto__){
var s__6471__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6471__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__6471__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__6473 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__6472 = (0);
while(true){
if((i__6472 < size__5439__auto__)){
var x = cljs.core._nth.call(null,c__5438__auto__,i__6472);
cljs.core.chunk_append.call(null,b__6473,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__6476 = x;
var text = cljs.core.nth.call(null,vec__6476,(0),null);
var val = cljs.core.nth.call(null,vec__6476,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__6476,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options6461.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__6478 = (i__6472 + (1));
i__6472 = G__6478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6473),sablono$core$select_options6461_$_iter__6470.call(null,cljs.core.chunk_rest.call(null,s__6471__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6473),null);
}
} else {
var x = cljs.core.first.call(null,s__6471__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__6477 = x;
var text = cljs.core.nth.call(null,vec__6477,(0),null);
var val = cljs.core.nth.call(null,vec__6477,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__6477,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options6461.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options6461_$_iter__6470.call(null,cljs.core.rest.call(null,s__6471__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options6461);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down6479 = (function sablono$core$drop_down6479(var_args){
var args6480 = [];
var len__5726__auto___6483 = arguments.length;
var i__5727__auto___6484 = (0);
while(true){
if((i__5727__auto___6484 < len__5726__auto___6483)){
args6480.push((arguments[i__5727__auto___6484]));

var G__6485 = (i__5727__auto___6484 + (1));
i__5727__auto___6484 = G__6485;
continue;
} else {
}
break;
}

var G__6482 = args6480.length;
switch (G__6482) {
case 2:
return sablono.core.drop_down6479.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down6479.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6480.length)].join('')));

}
});

sablono.core.drop_down6479.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down6479.call(null,name,options,null);
});

sablono.core.drop_down6479.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down6479.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down6479);
/**
 * Creates a text area element.
 */
sablono.core.text_area6487 = (function sablono$core$text_area6487(var_args){
var args6488 = [];
var len__5726__auto___6491 = arguments.length;
var i__5727__auto___6492 = (0);
while(true){
if((i__5727__auto___6492 < len__5726__auto___6491)){
args6488.push((arguments[i__5727__auto___6492]));

var G__6493 = (i__5727__auto___6492 + (1));
i__5727__auto___6492 = G__6493;
continue;
} else {
}
break;
}

var G__6490 = args6488.length;
switch (G__6490) {
case 1:
return sablono.core.text_area6487.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area6487.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6488.length)].join('')));

}
});

sablono.core.text_area6487.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area6487.call(null,name,null);
});

sablono.core.text_area6487.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area6487.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area6487);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label6495 = (function sablono$core$label6495(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label6495);
/**
 * Creates a submit button.
 */
sablono.core.submit_button6496 = (function sablono$core$submit_button6496(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button6496);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button6497 = (function sablono$core$reset_button6497(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button6497);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to6498 = (function sablono$core$form_to6498(var_args){
var args__5733__auto__ = [];
var len__5726__auto___6503 = arguments.length;
var i__5727__auto___6504 = (0);
while(true){
if((i__5727__auto___6504 < len__5726__auto___6503)){
args__5733__auto__.push((arguments[i__5727__auto___6504]));

var G__6505 = (i__5727__auto___6504 + (1));
i__5727__auto___6504 = G__6505;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return sablono.core.form_to6498.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

sablono.core.form_to6498.cljs$core$IFn$_invoke$arity$variadic = (function (p__6501,body){
var vec__6502 = p__6501;
var method = cljs.core.nth.call(null,vec__6502,(0),null);
var action = cljs.core.nth.call(null,vec__6502,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to6498.cljs$lang$maxFixedArity = (1);

sablono.core.form_to6498.cljs$lang$applyTo = (function (seq6499){
var G__6500 = cljs.core.first.call(null,seq6499);
var seq6499__$1 = cljs.core.next.call(null,seq6499);
return sablono.core.form_to6498.cljs$core$IFn$_invoke$arity$variadic(G__6500,seq6499__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to6498);

//# sourceMappingURL=core.js.map?rel=1456160135847