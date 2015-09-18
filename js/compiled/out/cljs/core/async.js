// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async27029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27029 = (function (fn_handler,f,meta27030){
this.fn_handler = fn_handler;
this.f = f;
this.meta27030 = meta27030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27031,meta27030__$1){
var self__ = this;
var _27031__$1 = this;
return (new cljs.core.async.t_cljs$core$async27029(self__.fn_handler,self__.f,meta27030__$1));
});

cljs.core.async.t_cljs$core$async27029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27031){
var self__ = this;
var _27031__$1 = this;
return self__.meta27030;
});

cljs.core.async.t_cljs$core$async27029.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27029.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27029.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta27030","meta27030",429607450,null)], null);
});

cljs.core.async.t_cljs$core$async27029.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27029.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27029";

cljs.core.async.t_cljs$core$async27029.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async27029");
});

cljs.core.async.__GT_t_cljs$core$async27029 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async27029(fn_handler__$1,f__$1,meta27030){
return (new cljs.core.async.t_cljs$core$async27029(fn_handler__$1,f__$1,meta27030));
});

}

return (new cljs.core.async.t_cljs$core$async27029(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27034 = [];
var len__17548__auto___27037 = arguments.length;
var i__17549__auto___27038 = (0);
while(true){
if((i__17549__auto___27038 < len__17548__auto___27037)){
args27034.push((arguments[i__17549__auto___27038]));

var G__27039 = (i__17549__auto___27038 + (1));
i__17549__auto___27038 = G__27039;
continue;
} else {
}
break;
}

var G__27036 = args27034.length;
switch (G__27036) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27034.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27041 = [];
var len__17548__auto___27044 = arguments.length;
var i__17549__auto___27045 = (0);
while(true){
if((i__17549__auto___27045 < len__17548__auto___27044)){
args27041.push((arguments[i__17549__auto___27045]));

var G__27046 = (i__17549__auto___27045 + (1));
i__17549__auto___27045 = G__27046;
continue;
} else {
}
break;
}

var G__27043 = args27041.length;
switch (G__27043) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27041.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27048 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27048);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27048,ret){
return (function (){
return fn1.call(null,val_27048);
});})(val_27048,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27049 = [];
var len__17548__auto___27052 = arguments.length;
var i__17549__auto___27053 = (0);
while(true){
if((i__17549__auto___27053 < len__17548__auto___27052)){
args27049.push((arguments[i__17549__auto___27053]));

var G__27054 = (i__17549__auto___27053 + (1));
i__17549__auto___27053 = G__27054;
continue;
} else {
}
break;
}

var G__27051 = args27049.length;
switch (G__27051) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27049.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17393__auto___27056 = n;
var x_27057 = (0);
while(true){
if((x_27057 < n__17393__auto___27056)){
(a[x_27057] = (0));

var G__27058 = (x_27057 + (1));
x_27057 = G__27058;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27059 = (i + (1));
i = G__27059;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27063 = (function (alt_flag,flag,meta27064){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27064 = meta27064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27065,meta27064__$1){
var self__ = this;
var _27065__$1 = this;
return (new cljs.core.async.t_cljs$core$async27063(self__.alt_flag,self__.flag,meta27064__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27065){
var self__ = this;
var _27065__$1 = this;
return self__.meta27064;
});})(flag))
;

cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27063.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27064","meta27064",-299085981,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27063.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27063";

cljs.core.async.t_cljs$core$async27063.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async27063");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27063 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27063(alt_flag__$1,flag__$1,meta27064){
return (new cljs.core.async.t_cljs$core$async27063(alt_flag__$1,flag__$1,meta27064));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27063(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27069 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27069 = (function (alt_handler,flag,cb,meta27070){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27070 = meta27070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27071,meta27070__$1){
var self__ = this;
var _27071__$1 = this;
return (new cljs.core.async.t_cljs$core$async27069(self__.alt_handler,self__.flag,self__.cb,meta27070__$1));
});

cljs.core.async.t_cljs$core$async27069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27071){
var self__ = this;
var _27071__$1 = this;
return self__.meta27070;
});

cljs.core.async.t_cljs$core$async27069.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27069.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27069.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27070","meta27070",942933536,null)], null);
});

cljs.core.async.t_cljs$core$async27069.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27069";

cljs.core.async.t_cljs$core$async27069.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async27069");
});

cljs.core.async.__GT_t_cljs$core$async27069 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27069(alt_handler__$1,flag__$1,cb__$1,meta27070){
return (new cljs.core.async.t_cljs$core$async27069(alt_handler__$1,flag__$1,cb__$1,meta27070));
});

}

return (new cljs.core.async.t_cljs$core$async27069(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27072_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27072_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27073_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27073_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16490__auto__ = wport;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27074 = (i + (1));
i = G__27074;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16490__auto__ = ret;
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16478__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16478__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16478__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17555__auto__ = [];
var len__17548__auto___27080 = arguments.length;
var i__17549__auto___27081 = (0);
while(true){
if((i__17549__auto___27081 < len__17548__auto___27080)){
args__17555__auto__.push((arguments[i__17549__auto___27081]));

var G__27082 = (i__17549__auto___27081 + (1));
i__17549__auto___27081 = G__27082;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((1) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17556__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27077){
var map__27078 = p__27077;
var map__27078__$1 = ((((!((map__27078 == null)))?((((map__27078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27078):map__27078);
var opts = map__27078__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27075){
var G__27076 = cljs.core.first.call(null,seq27075);
var seq27075__$1 = cljs.core.next.call(null,seq27075);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27076,seq27075__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27083 = [];
var len__17548__auto___27133 = arguments.length;
var i__17549__auto___27134 = (0);
while(true){
if((i__17549__auto___27134 < len__17548__auto___27133)){
args27083.push((arguments[i__17549__auto___27134]));

var G__27135 = (i__17549__auto___27134 + (1));
i__17549__auto___27134 = G__27135;
continue;
} else {
}
break;
}

var G__27085 = args27083.length;
switch (G__27085) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27083.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19571__auto___27137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___27137){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___27137){
return (function (state_27109){
var state_val_27110 = (state_27109[(1)]);
if((state_val_27110 === (7))){
var inst_27105 = (state_27109[(2)]);
var state_27109__$1 = state_27109;
var statearr_27111_27138 = state_27109__$1;
(statearr_27111_27138[(2)] = inst_27105);

(statearr_27111_27138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (1))){
var state_27109__$1 = state_27109;
var statearr_27112_27139 = state_27109__$1;
(statearr_27112_27139[(2)] = null);

(statearr_27112_27139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (4))){
var inst_27088 = (state_27109[(7)]);
var inst_27088__$1 = (state_27109[(2)]);
var inst_27089 = (inst_27088__$1 == null);
var state_27109__$1 = (function (){var statearr_27113 = state_27109;
(statearr_27113[(7)] = inst_27088__$1);

return statearr_27113;
})();
if(cljs.core.truth_(inst_27089)){
var statearr_27114_27140 = state_27109__$1;
(statearr_27114_27140[(1)] = (5));

} else {
var statearr_27115_27141 = state_27109__$1;
(statearr_27115_27141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (13))){
var state_27109__$1 = state_27109;
var statearr_27116_27142 = state_27109__$1;
(statearr_27116_27142[(2)] = null);

(statearr_27116_27142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (6))){
var inst_27088 = (state_27109[(7)]);
var state_27109__$1 = state_27109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27109__$1,(11),to,inst_27088);
} else {
if((state_val_27110 === (3))){
var inst_27107 = (state_27109[(2)]);
var state_27109__$1 = state_27109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27109__$1,inst_27107);
} else {
if((state_val_27110 === (12))){
var state_27109__$1 = state_27109;
var statearr_27117_27143 = state_27109__$1;
(statearr_27117_27143[(2)] = null);

(statearr_27117_27143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (2))){
var state_27109__$1 = state_27109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27109__$1,(4),from);
} else {
if((state_val_27110 === (11))){
var inst_27098 = (state_27109[(2)]);
var state_27109__$1 = state_27109;
if(cljs.core.truth_(inst_27098)){
var statearr_27118_27144 = state_27109__$1;
(statearr_27118_27144[(1)] = (12));

} else {
var statearr_27119_27145 = state_27109__$1;
(statearr_27119_27145[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (9))){
var state_27109__$1 = state_27109;
var statearr_27120_27146 = state_27109__$1;
(statearr_27120_27146[(2)] = null);

(statearr_27120_27146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (5))){
var state_27109__$1 = state_27109;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27121_27147 = state_27109__$1;
(statearr_27121_27147[(1)] = (8));

} else {
var statearr_27122_27148 = state_27109__$1;
(statearr_27122_27148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (14))){
var inst_27103 = (state_27109[(2)]);
var state_27109__$1 = state_27109;
var statearr_27123_27149 = state_27109__$1;
(statearr_27123_27149[(2)] = inst_27103);

(statearr_27123_27149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (10))){
var inst_27095 = (state_27109[(2)]);
var state_27109__$1 = state_27109;
var statearr_27124_27150 = state_27109__$1;
(statearr_27124_27150[(2)] = inst_27095);

(statearr_27124_27150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27110 === (8))){
var inst_27092 = cljs.core.async.close_BANG_.call(null,to);
var state_27109__$1 = state_27109;
var statearr_27125_27151 = state_27109__$1;
(statearr_27125_27151[(2)] = inst_27092);

(statearr_27125_27151[(1)] = (10));


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
});})(c__19571__auto___27137))
;
return ((function (switch__19506__auto__,c__19571__auto___27137){
return (function() {
var cljs$core$async$state_machine__19507__auto__ = null;
var cljs$core$async$state_machine__19507__auto____0 = (function (){
var statearr_27129 = [null,null,null,null,null,null,null,null];
(statearr_27129[(0)] = cljs$core$async$state_machine__19507__auto__);

(statearr_27129[(1)] = (1));

return statearr_27129;
});
var cljs$core$async$state_machine__19507__auto____1 = (function (state_27109){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_27109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e27130){if((e27130 instanceof Object)){
var ex__19510__auto__ = e27130;
var statearr_27131_27152 = state_27109;
(statearr_27131_27152[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27153 = state_27109;
state_27109 = G__27153;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$state_machine__19507__auto__ = function(state_27109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19507__auto____1.call(this,state_27109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19507__auto____0;
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19507__auto____1;
return cljs$core$async$state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___27137))
})();
var state__19573__auto__ = (function (){var statearr_27132 = f__19572__auto__.call(null);
(statearr_27132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___27137);

return statearr_27132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___27137))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27337){
var vec__27338 = p__27337;
var v = cljs.core.nth.call(null,vec__27338,(0),null);
var p = cljs.core.nth.call(null,vec__27338,(1),null);
var job = vec__27338;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19571__auto___27520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___27520,res,vec__27338,v,p,job,jobs,results){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___27520,res,vec__27338,v,p,job,jobs,results){
return (function (state_27343){
var state_val_27344 = (state_27343[(1)]);
if((state_val_27344 === (1))){
var state_27343__$1 = state_27343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27343__$1,(2),res,v);
} else {
if((state_val_27344 === (2))){
var inst_27340 = (state_27343[(2)]);
var inst_27341 = cljs.core.async.close_BANG_.call(null,res);
var state_27343__$1 = (function (){var statearr_27345 = state_27343;
(statearr_27345[(7)] = inst_27340);

return statearr_27345;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27343__$1,inst_27341);
} else {
return null;
}
}
});})(c__19571__auto___27520,res,vec__27338,v,p,job,jobs,results))
;
return ((function (switch__19506__auto__,c__19571__auto___27520,res,vec__27338,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____0 = (function (){
var statearr_27349 = [null,null,null,null,null,null,null,null];
(statearr_27349[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__);

(statearr_27349[(1)] = (1));

return statearr_27349;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____1 = (function (state_27343){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_27343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e27350){if((e27350 instanceof Object)){
var ex__19510__auto__ = e27350;
var statearr_27351_27521 = state_27343;
(statearr_27351_27521[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27522 = state_27343;
state_27343 = G__27522;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__ = function(state_27343){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____1.call(this,state_27343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___27520,res,vec__27338,v,p,job,jobs,results))
})();
var state__19573__auto__ = (function (){var statearr_27352 = f__19572__auto__.call(null);
(statearr_27352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___27520);

return statearr_27352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___27520,res,vec__27338,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27353){
var vec__27354 = p__27353;
var v = cljs.core.nth.call(null,vec__27354,(0),null);
var p = cljs.core.nth.call(null,vec__27354,(1),null);
var job = vec__27354;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17393__auto___27523 = n;
var __27524 = (0);
while(true){
if((__27524 < n__17393__auto___27523)){
var G__27355_27525 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27355_27525) {
case "compute":
var c__19571__auto___27527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27524,c__19571__auto___27527,G__27355_27525,n__17393__auto___27523,jobs,results,process,async){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (__27524,c__19571__auto___27527,G__27355_27525,n__17393__auto___27523,jobs,results,process,async){
return (function (state_27368){
var state_val_27369 = (state_27368[(1)]);
if((state_val_27369 === (1))){
var state_27368__$1 = state_27368;
var statearr_27370_27528 = state_27368__$1;
(statearr_27370_27528[(2)] = null);

(statearr_27370_27528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (2))){
var state_27368__$1 = state_27368;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27368__$1,(4),jobs);
} else {
if((state_val_27369 === (3))){
var inst_27366 = (state_27368[(2)]);
var state_27368__$1 = state_27368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27368__$1,inst_27366);
} else {
if((state_val_27369 === (4))){
var inst_27358 = (state_27368[(2)]);
var inst_27359 = process.call(null,inst_27358);
var state_27368__$1 = state_27368;
if(cljs.core.truth_(inst_27359)){
var statearr_27371_27529 = state_27368__$1;
(statearr_27371_27529[(1)] = (5));

} else {
var statearr_27372_27530 = state_27368__$1;
(statearr_27372_27530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (5))){
var state_27368__$1 = state_27368;
var statearr_27373_27531 = state_27368__$1;
(statearr_27373_27531[(2)] = null);

(statearr_27373_27531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (6))){
var state_27368__$1 = state_27368;
var statearr_27374_27532 = state_27368__$1;
(statearr_27374_27532[(2)] = null);

(statearr_27374_27532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27369 === (7))){
var inst_27364 = (state_27368[(2)]);
var state_27368__$1 = state_27368;
var statearr_27375_27533 = state_27368__$1;
(statearr_27375_27533[(2)] = inst_27364);

(statearr_27375_27533[(1)] = (3));


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
});})(__27524,c__19571__auto___27527,G__27355_27525,n__17393__auto___27523,jobs,results,process,async))
;
return ((function (__27524,switch__19506__auto__,c__19571__auto___27527,G__27355_27525,n__17393__auto___27523,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____0 = (function (){
var statearr_27379 = [null,null,null,null,null,null,null];
(statearr_27379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__);

(statearr_27379[(1)] = (1));

return statearr_27379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____1 = (function (state_27368){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_27368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e27380){if((e27380 instanceof Object)){
var ex__19510__auto__ = e27380;
var statearr_27381_27534 = state_27368;
(statearr_27381_27534[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27535 = state_27368;
state_27368 = G__27535;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__ = function(state_27368){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____1.call(this,state_27368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__;
})()
;})(__27524,switch__19506__auto__,c__19571__auto___27527,G__27355_27525,n__17393__auto___27523,jobs,results,process,async))
})();
var state__19573__auto__ = (function (){var statearr_27382 = f__19572__auto__.call(null);
(statearr_27382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___27527);

return statearr_27382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(__27524,c__19571__auto___27527,G__27355_27525,n__17393__auto___27523,jobs,results,process,async))
);


break;
case "async":
var c__19571__auto___27536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27524,c__19571__auto___27536,G__27355_27525,n__17393__auto___27523,jobs,results,process,async){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (__27524,c__19571__auto___27536,G__27355_27525,n__17393__auto___27523,jobs,results,process,async){
return (function (state_27395){
var state_val_27396 = (state_27395[(1)]);
if((state_val_27396 === (1))){
var state_27395__$1 = state_27395;
var statearr_27397_27537 = state_27395__$1;
(statearr_27397_27537[(2)] = null);

(statearr_27397_27537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (2))){
var state_27395__$1 = state_27395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27395__$1,(4),jobs);
} else {
if((state_val_27396 === (3))){
var inst_27393 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27395__$1,inst_27393);
} else {
if((state_val_27396 === (4))){
var inst_27385 = (state_27395[(2)]);
var inst_27386 = async.call(null,inst_27385);
var state_27395__$1 = state_27395;
if(cljs.core.truth_(inst_27386)){
var statearr_27398_27538 = state_27395__$1;
(statearr_27398_27538[(1)] = (5));

} else {
var statearr_27399_27539 = state_27395__$1;
(statearr_27399_27539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (5))){
var state_27395__$1 = state_27395;
var statearr_27400_27540 = state_27395__$1;
(statearr_27400_27540[(2)] = null);

(statearr_27400_27540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (6))){
var state_27395__$1 = state_27395;
var statearr_27401_27541 = state_27395__$1;
(statearr_27401_27541[(2)] = null);

(statearr_27401_27541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (7))){
var inst_27391 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
var statearr_27402_27542 = state_27395__$1;
(statearr_27402_27542[(2)] = inst_27391);

(statearr_27402_27542[(1)] = (3));


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
});})(__27524,c__19571__auto___27536,G__27355_27525,n__17393__auto___27523,jobs,results,process,async))
;
return ((function (__27524,switch__19506__auto__,c__19571__auto___27536,G__27355_27525,n__17393__auto___27523,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____0 = (function (){
var statearr_27406 = [null,null,null,null,null,null,null];
(statearr_27406[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__);

(statearr_27406[(1)] = (1));

return statearr_27406;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____1 = (function (state_27395){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_27395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e27407){if((e27407 instanceof Object)){
var ex__19510__auto__ = e27407;
var statearr_27408_27543 = state_27395;
(statearr_27408_27543[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27544 = state_27395;
state_27395 = G__27544;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__ = function(state_27395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____1.call(this,state_27395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__;
})()
;})(__27524,switch__19506__auto__,c__19571__auto___27536,G__27355_27525,n__17393__auto___27523,jobs,results,process,async))
})();
var state__19573__auto__ = (function (){var statearr_27409 = f__19572__auto__.call(null);
(statearr_27409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___27536);

return statearr_27409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(__27524,c__19571__auto___27536,G__27355_27525,n__17393__auto___27523,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27545 = (__27524 + (1));
__27524 = G__27545;
continue;
} else {
}
break;
}

var c__19571__auto___27546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___27546,jobs,results,process,async){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___27546,jobs,results,process,async){
return (function (state_27431){
var state_val_27432 = (state_27431[(1)]);
if((state_val_27432 === (1))){
var state_27431__$1 = state_27431;
var statearr_27433_27547 = state_27431__$1;
(statearr_27433_27547[(2)] = null);

(statearr_27433_27547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27432 === (2))){
var state_27431__$1 = state_27431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27431__$1,(4),from);
} else {
if((state_val_27432 === (3))){
var inst_27429 = (state_27431[(2)]);
var state_27431__$1 = state_27431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27431__$1,inst_27429);
} else {
if((state_val_27432 === (4))){
var inst_27412 = (state_27431[(7)]);
var inst_27412__$1 = (state_27431[(2)]);
var inst_27413 = (inst_27412__$1 == null);
var state_27431__$1 = (function (){var statearr_27434 = state_27431;
(statearr_27434[(7)] = inst_27412__$1);

return statearr_27434;
})();
if(cljs.core.truth_(inst_27413)){
var statearr_27435_27548 = state_27431__$1;
(statearr_27435_27548[(1)] = (5));

} else {
var statearr_27436_27549 = state_27431__$1;
(statearr_27436_27549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27432 === (5))){
var inst_27415 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27431__$1 = state_27431;
var statearr_27437_27550 = state_27431__$1;
(statearr_27437_27550[(2)] = inst_27415);

(statearr_27437_27550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27432 === (6))){
var inst_27412 = (state_27431[(7)]);
var inst_27417 = (state_27431[(8)]);
var inst_27417__$1 = cljs.core.async.chan.call(null,(1));
var inst_27418 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27419 = [inst_27412,inst_27417__$1];
var inst_27420 = (new cljs.core.PersistentVector(null,2,(5),inst_27418,inst_27419,null));
var state_27431__$1 = (function (){var statearr_27438 = state_27431;
(statearr_27438[(8)] = inst_27417__$1);

return statearr_27438;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27431__$1,(8),jobs,inst_27420);
} else {
if((state_val_27432 === (7))){
var inst_27427 = (state_27431[(2)]);
var state_27431__$1 = state_27431;
var statearr_27439_27551 = state_27431__$1;
(statearr_27439_27551[(2)] = inst_27427);

(statearr_27439_27551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27432 === (8))){
var inst_27417 = (state_27431[(8)]);
var inst_27422 = (state_27431[(2)]);
var state_27431__$1 = (function (){var statearr_27440 = state_27431;
(statearr_27440[(9)] = inst_27422);

return statearr_27440;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27431__$1,(9),results,inst_27417);
} else {
if((state_val_27432 === (9))){
var inst_27424 = (state_27431[(2)]);
var state_27431__$1 = (function (){var statearr_27441 = state_27431;
(statearr_27441[(10)] = inst_27424);

return statearr_27441;
})();
var statearr_27442_27552 = state_27431__$1;
(statearr_27442_27552[(2)] = null);

(statearr_27442_27552[(1)] = (2));


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
});})(c__19571__auto___27546,jobs,results,process,async))
;
return ((function (switch__19506__auto__,c__19571__auto___27546,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____0 = (function (){
var statearr_27446 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__);

(statearr_27446[(1)] = (1));

return statearr_27446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____1 = (function (state_27431){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_27431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e27447){if((e27447 instanceof Object)){
var ex__19510__auto__ = e27447;
var statearr_27448_27553 = state_27431;
(statearr_27448_27553[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27554 = state_27431;
state_27431 = G__27554;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__ = function(state_27431){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____1.call(this,state_27431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___27546,jobs,results,process,async))
})();
var state__19573__auto__ = (function (){var statearr_27449 = f__19572__auto__.call(null);
(statearr_27449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___27546);

return statearr_27449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___27546,jobs,results,process,async))
);


var c__19571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto__,jobs,results,process,async){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto__,jobs,results,process,async){
return (function (state_27487){
var state_val_27488 = (state_27487[(1)]);
if((state_val_27488 === (7))){
var inst_27483 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27489_27555 = state_27487__$1;
(statearr_27489_27555[(2)] = inst_27483);

(statearr_27489_27555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (20))){
var state_27487__$1 = state_27487;
var statearr_27490_27556 = state_27487__$1;
(statearr_27490_27556[(2)] = null);

(statearr_27490_27556[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (1))){
var state_27487__$1 = state_27487;
var statearr_27491_27557 = state_27487__$1;
(statearr_27491_27557[(2)] = null);

(statearr_27491_27557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (4))){
var inst_27452 = (state_27487[(7)]);
var inst_27452__$1 = (state_27487[(2)]);
var inst_27453 = (inst_27452__$1 == null);
var state_27487__$1 = (function (){var statearr_27492 = state_27487;
(statearr_27492[(7)] = inst_27452__$1);

return statearr_27492;
})();
if(cljs.core.truth_(inst_27453)){
var statearr_27493_27558 = state_27487__$1;
(statearr_27493_27558[(1)] = (5));

} else {
var statearr_27494_27559 = state_27487__$1;
(statearr_27494_27559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (15))){
var inst_27465 = (state_27487[(8)]);
var state_27487__$1 = state_27487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27487__$1,(18),to,inst_27465);
} else {
if((state_val_27488 === (21))){
var inst_27478 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27495_27560 = state_27487__$1;
(statearr_27495_27560[(2)] = inst_27478);

(statearr_27495_27560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (13))){
var inst_27480 = (state_27487[(2)]);
var state_27487__$1 = (function (){var statearr_27496 = state_27487;
(statearr_27496[(9)] = inst_27480);

return statearr_27496;
})();
var statearr_27497_27561 = state_27487__$1;
(statearr_27497_27561[(2)] = null);

(statearr_27497_27561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (6))){
var inst_27452 = (state_27487[(7)]);
var state_27487__$1 = state_27487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27487__$1,(11),inst_27452);
} else {
if((state_val_27488 === (17))){
var inst_27473 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
if(cljs.core.truth_(inst_27473)){
var statearr_27498_27562 = state_27487__$1;
(statearr_27498_27562[(1)] = (19));

} else {
var statearr_27499_27563 = state_27487__$1;
(statearr_27499_27563[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (3))){
var inst_27485 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27487__$1,inst_27485);
} else {
if((state_val_27488 === (12))){
var inst_27462 = (state_27487[(10)]);
var state_27487__$1 = state_27487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27487__$1,(14),inst_27462);
} else {
if((state_val_27488 === (2))){
var state_27487__$1 = state_27487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27487__$1,(4),results);
} else {
if((state_val_27488 === (19))){
var state_27487__$1 = state_27487;
var statearr_27500_27564 = state_27487__$1;
(statearr_27500_27564[(2)] = null);

(statearr_27500_27564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (11))){
var inst_27462 = (state_27487[(2)]);
var state_27487__$1 = (function (){var statearr_27501 = state_27487;
(statearr_27501[(10)] = inst_27462);

return statearr_27501;
})();
var statearr_27502_27565 = state_27487__$1;
(statearr_27502_27565[(2)] = null);

(statearr_27502_27565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (9))){
var state_27487__$1 = state_27487;
var statearr_27503_27566 = state_27487__$1;
(statearr_27503_27566[(2)] = null);

(statearr_27503_27566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (5))){
var state_27487__$1 = state_27487;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27504_27567 = state_27487__$1;
(statearr_27504_27567[(1)] = (8));

} else {
var statearr_27505_27568 = state_27487__$1;
(statearr_27505_27568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (14))){
var inst_27467 = (state_27487[(11)]);
var inst_27465 = (state_27487[(8)]);
var inst_27465__$1 = (state_27487[(2)]);
var inst_27466 = (inst_27465__$1 == null);
var inst_27467__$1 = cljs.core.not.call(null,inst_27466);
var state_27487__$1 = (function (){var statearr_27506 = state_27487;
(statearr_27506[(11)] = inst_27467__$1);

(statearr_27506[(8)] = inst_27465__$1);

return statearr_27506;
})();
if(inst_27467__$1){
var statearr_27507_27569 = state_27487__$1;
(statearr_27507_27569[(1)] = (15));

} else {
var statearr_27508_27570 = state_27487__$1;
(statearr_27508_27570[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (16))){
var inst_27467 = (state_27487[(11)]);
var state_27487__$1 = state_27487;
var statearr_27509_27571 = state_27487__$1;
(statearr_27509_27571[(2)] = inst_27467);

(statearr_27509_27571[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (10))){
var inst_27459 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27510_27572 = state_27487__$1;
(statearr_27510_27572[(2)] = inst_27459);

(statearr_27510_27572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (18))){
var inst_27470 = (state_27487[(2)]);
var state_27487__$1 = state_27487;
var statearr_27511_27573 = state_27487__$1;
(statearr_27511_27573[(2)] = inst_27470);

(statearr_27511_27573[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27488 === (8))){
var inst_27456 = cljs.core.async.close_BANG_.call(null,to);
var state_27487__$1 = state_27487;
var statearr_27512_27574 = state_27487__$1;
(statearr_27512_27574[(2)] = inst_27456);

(statearr_27512_27574[(1)] = (10));


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
});})(c__19571__auto__,jobs,results,process,async))
;
return ((function (switch__19506__auto__,c__19571__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____0 = (function (){
var statearr_27516 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__);

(statearr_27516[(1)] = (1));

return statearr_27516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____1 = (function (state_27487){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_27487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e27517){if((e27517 instanceof Object)){
var ex__19510__auto__ = e27517;
var statearr_27518_27575 = state_27487;
(statearr_27518_27575[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27576 = state_27487;
state_27487 = G__27576;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__ = function(state_27487){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____1.call(this,state_27487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19507__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto__,jobs,results,process,async))
})();
var state__19573__auto__ = (function (){var statearr_27519 = f__19572__auto__.call(null);
(statearr_27519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto__);

return statearr_27519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto__,jobs,results,process,async))
);

return c__19571__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27577 = [];
var len__17548__auto___27580 = arguments.length;
var i__17549__auto___27581 = (0);
while(true){
if((i__17549__auto___27581 < len__17548__auto___27580)){
args27577.push((arguments[i__17549__auto___27581]));

var G__27582 = (i__17549__auto___27581 + (1));
i__17549__auto___27581 = G__27582;
continue;
} else {
}
break;
}

var G__27579 = args27577.length;
switch (G__27579) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27577.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27584 = [];
var len__17548__auto___27587 = arguments.length;
var i__17549__auto___27588 = (0);
while(true){
if((i__17549__auto___27588 < len__17548__auto___27587)){
args27584.push((arguments[i__17549__auto___27588]));

var G__27589 = (i__17549__auto___27588 + (1));
i__17549__auto___27588 = G__27589;
continue;
} else {
}
break;
}

var G__27586 = args27584.length;
switch (G__27586) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27584.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27591 = [];
var len__17548__auto___27644 = arguments.length;
var i__17549__auto___27645 = (0);
while(true){
if((i__17549__auto___27645 < len__17548__auto___27644)){
args27591.push((arguments[i__17549__auto___27645]));

var G__27646 = (i__17549__auto___27645 + (1));
i__17549__auto___27645 = G__27646;
continue;
} else {
}
break;
}

var G__27593 = args27591.length;
switch (G__27593) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27591.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19571__auto___27648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___27648,tc,fc){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___27648,tc,fc){
return (function (state_27619){
var state_val_27620 = (state_27619[(1)]);
if((state_val_27620 === (7))){
var inst_27615 = (state_27619[(2)]);
var state_27619__$1 = state_27619;
var statearr_27621_27649 = state_27619__$1;
(statearr_27621_27649[(2)] = inst_27615);

(statearr_27621_27649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (1))){
var state_27619__$1 = state_27619;
var statearr_27622_27650 = state_27619__$1;
(statearr_27622_27650[(2)] = null);

(statearr_27622_27650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (4))){
var inst_27596 = (state_27619[(7)]);
var inst_27596__$1 = (state_27619[(2)]);
var inst_27597 = (inst_27596__$1 == null);
var state_27619__$1 = (function (){var statearr_27623 = state_27619;
(statearr_27623[(7)] = inst_27596__$1);

return statearr_27623;
})();
if(cljs.core.truth_(inst_27597)){
var statearr_27624_27651 = state_27619__$1;
(statearr_27624_27651[(1)] = (5));

} else {
var statearr_27625_27652 = state_27619__$1;
(statearr_27625_27652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (13))){
var state_27619__$1 = state_27619;
var statearr_27626_27653 = state_27619__$1;
(statearr_27626_27653[(2)] = null);

(statearr_27626_27653[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (6))){
var inst_27596 = (state_27619[(7)]);
var inst_27602 = p.call(null,inst_27596);
var state_27619__$1 = state_27619;
if(cljs.core.truth_(inst_27602)){
var statearr_27627_27654 = state_27619__$1;
(statearr_27627_27654[(1)] = (9));

} else {
var statearr_27628_27655 = state_27619__$1;
(statearr_27628_27655[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (3))){
var inst_27617 = (state_27619[(2)]);
var state_27619__$1 = state_27619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27619__$1,inst_27617);
} else {
if((state_val_27620 === (12))){
var state_27619__$1 = state_27619;
var statearr_27629_27656 = state_27619__$1;
(statearr_27629_27656[(2)] = null);

(statearr_27629_27656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (2))){
var state_27619__$1 = state_27619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27619__$1,(4),ch);
} else {
if((state_val_27620 === (11))){
var inst_27596 = (state_27619[(7)]);
var inst_27606 = (state_27619[(2)]);
var state_27619__$1 = state_27619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27619__$1,(8),inst_27606,inst_27596);
} else {
if((state_val_27620 === (9))){
var state_27619__$1 = state_27619;
var statearr_27630_27657 = state_27619__$1;
(statearr_27630_27657[(2)] = tc);

(statearr_27630_27657[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (5))){
var inst_27599 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27600 = cljs.core.async.close_BANG_.call(null,fc);
var state_27619__$1 = (function (){var statearr_27631 = state_27619;
(statearr_27631[(8)] = inst_27599);

return statearr_27631;
})();
var statearr_27632_27658 = state_27619__$1;
(statearr_27632_27658[(2)] = inst_27600);

(statearr_27632_27658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (14))){
var inst_27613 = (state_27619[(2)]);
var state_27619__$1 = state_27619;
var statearr_27633_27659 = state_27619__$1;
(statearr_27633_27659[(2)] = inst_27613);

(statearr_27633_27659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (10))){
var state_27619__$1 = state_27619;
var statearr_27634_27660 = state_27619__$1;
(statearr_27634_27660[(2)] = fc);

(statearr_27634_27660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (8))){
var inst_27608 = (state_27619[(2)]);
var state_27619__$1 = state_27619;
if(cljs.core.truth_(inst_27608)){
var statearr_27635_27661 = state_27619__$1;
(statearr_27635_27661[(1)] = (12));

} else {
var statearr_27636_27662 = state_27619__$1;
(statearr_27636_27662[(1)] = (13));

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
});})(c__19571__auto___27648,tc,fc))
;
return ((function (switch__19506__auto__,c__19571__auto___27648,tc,fc){
return (function() {
var cljs$core$async$state_machine__19507__auto__ = null;
var cljs$core$async$state_machine__19507__auto____0 = (function (){
var statearr_27640 = [null,null,null,null,null,null,null,null,null];
(statearr_27640[(0)] = cljs$core$async$state_machine__19507__auto__);

(statearr_27640[(1)] = (1));

return statearr_27640;
});
var cljs$core$async$state_machine__19507__auto____1 = (function (state_27619){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_27619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e27641){if((e27641 instanceof Object)){
var ex__19510__auto__ = e27641;
var statearr_27642_27663 = state_27619;
(statearr_27642_27663[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27664 = state_27619;
state_27619 = G__27664;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$state_machine__19507__auto__ = function(state_27619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19507__auto____1.call(this,state_27619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19507__auto____0;
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19507__auto____1;
return cljs$core$async$state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___27648,tc,fc))
})();
var state__19573__auto__ = (function (){var statearr_27643 = f__19572__auto__.call(null);
(statearr_27643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___27648);

return statearr_27643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___27648,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto__){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto__){
return (function (state_27711){
var state_val_27712 = (state_27711[(1)]);
if((state_val_27712 === (1))){
var inst_27697 = init;
var state_27711__$1 = (function (){var statearr_27713 = state_27711;
(statearr_27713[(7)] = inst_27697);

return statearr_27713;
})();
var statearr_27714_27729 = state_27711__$1;
(statearr_27714_27729[(2)] = null);

(statearr_27714_27729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (2))){
var state_27711__$1 = state_27711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27711__$1,(4),ch);
} else {
if((state_val_27712 === (3))){
var inst_27709 = (state_27711[(2)]);
var state_27711__$1 = state_27711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27711__$1,inst_27709);
} else {
if((state_val_27712 === (4))){
var inst_27700 = (state_27711[(8)]);
var inst_27700__$1 = (state_27711[(2)]);
var inst_27701 = (inst_27700__$1 == null);
var state_27711__$1 = (function (){var statearr_27715 = state_27711;
(statearr_27715[(8)] = inst_27700__$1);

return statearr_27715;
})();
if(cljs.core.truth_(inst_27701)){
var statearr_27716_27730 = state_27711__$1;
(statearr_27716_27730[(1)] = (5));

} else {
var statearr_27717_27731 = state_27711__$1;
(statearr_27717_27731[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (5))){
var inst_27697 = (state_27711[(7)]);
var state_27711__$1 = state_27711;
var statearr_27718_27732 = state_27711__$1;
(statearr_27718_27732[(2)] = inst_27697);

(statearr_27718_27732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (6))){
var inst_27700 = (state_27711[(8)]);
var inst_27697 = (state_27711[(7)]);
var inst_27704 = f.call(null,inst_27697,inst_27700);
var inst_27697__$1 = inst_27704;
var state_27711__$1 = (function (){var statearr_27719 = state_27711;
(statearr_27719[(7)] = inst_27697__$1);

return statearr_27719;
})();
var statearr_27720_27733 = state_27711__$1;
(statearr_27720_27733[(2)] = null);

(statearr_27720_27733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27712 === (7))){
var inst_27707 = (state_27711[(2)]);
var state_27711__$1 = state_27711;
var statearr_27721_27734 = state_27711__$1;
(statearr_27721_27734[(2)] = inst_27707);

(statearr_27721_27734[(1)] = (3));


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
});})(c__19571__auto__))
;
return ((function (switch__19506__auto__,c__19571__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19507__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19507__auto____0 = (function (){
var statearr_27725 = [null,null,null,null,null,null,null,null,null];
(statearr_27725[(0)] = cljs$core$async$reduce_$_state_machine__19507__auto__);

(statearr_27725[(1)] = (1));

return statearr_27725;
});
var cljs$core$async$reduce_$_state_machine__19507__auto____1 = (function (state_27711){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_27711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e27726){if((e27726 instanceof Object)){
var ex__19510__auto__ = e27726;
var statearr_27727_27735 = state_27711;
(statearr_27727_27735[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27736 = state_27711;
state_27711 = G__27736;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19507__auto__ = function(state_27711){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19507__auto____1.call(this,state_27711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19507__auto____0;
cljs$core$async$reduce_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19507__auto____1;
return cljs$core$async$reduce_$_state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto__))
})();
var state__19573__auto__ = (function (){var statearr_27728 = f__19572__auto__.call(null);
(statearr_27728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto__);

return statearr_27728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto__))
);

return c__19571__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27737 = [];
var len__17548__auto___27789 = arguments.length;
var i__17549__auto___27790 = (0);
while(true){
if((i__17549__auto___27790 < len__17548__auto___27789)){
args27737.push((arguments[i__17549__auto___27790]));

var G__27791 = (i__17549__auto___27790 + (1));
i__17549__auto___27790 = G__27791;
continue;
} else {
}
break;
}

var G__27739 = args27737.length;
switch (G__27739) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27737.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto__){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto__){
return (function (state_27764){
var state_val_27765 = (state_27764[(1)]);
if((state_val_27765 === (7))){
var inst_27746 = (state_27764[(2)]);
var state_27764__$1 = state_27764;
var statearr_27766_27793 = state_27764__$1;
(statearr_27766_27793[(2)] = inst_27746);

(statearr_27766_27793[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (1))){
var inst_27740 = cljs.core.seq.call(null,coll);
var inst_27741 = inst_27740;
var state_27764__$1 = (function (){var statearr_27767 = state_27764;
(statearr_27767[(7)] = inst_27741);

return statearr_27767;
})();
var statearr_27768_27794 = state_27764__$1;
(statearr_27768_27794[(2)] = null);

(statearr_27768_27794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (4))){
var inst_27741 = (state_27764[(7)]);
var inst_27744 = cljs.core.first.call(null,inst_27741);
var state_27764__$1 = state_27764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27764__$1,(7),ch,inst_27744);
} else {
if((state_val_27765 === (13))){
var inst_27758 = (state_27764[(2)]);
var state_27764__$1 = state_27764;
var statearr_27769_27795 = state_27764__$1;
(statearr_27769_27795[(2)] = inst_27758);

(statearr_27769_27795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (6))){
var inst_27749 = (state_27764[(2)]);
var state_27764__$1 = state_27764;
if(cljs.core.truth_(inst_27749)){
var statearr_27770_27796 = state_27764__$1;
(statearr_27770_27796[(1)] = (8));

} else {
var statearr_27771_27797 = state_27764__$1;
(statearr_27771_27797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (3))){
var inst_27762 = (state_27764[(2)]);
var state_27764__$1 = state_27764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27764__$1,inst_27762);
} else {
if((state_val_27765 === (12))){
var state_27764__$1 = state_27764;
var statearr_27772_27798 = state_27764__$1;
(statearr_27772_27798[(2)] = null);

(statearr_27772_27798[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (2))){
var inst_27741 = (state_27764[(7)]);
var state_27764__$1 = state_27764;
if(cljs.core.truth_(inst_27741)){
var statearr_27773_27799 = state_27764__$1;
(statearr_27773_27799[(1)] = (4));

} else {
var statearr_27774_27800 = state_27764__$1;
(statearr_27774_27800[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (11))){
var inst_27755 = cljs.core.async.close_BANG_.call(null,ch);
var state_27764__$1 = state_27764;
var statearr_27775_27801 = state_27764__$1;
(statearr_27775_27801[(2)] = inst_27755);

(statearr_27775_27801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (9))){
var state_27764__$1 = state_27764;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27776_27802 = state_27764__$1;
(statearr_27776_27802[(1)] = (11));

} else {
var statearr_27777_27803 = state_27764__$1;
(statearr_27777_27803[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (5))){
var inst_27741 = (state_27764[(7)]);
var state_27764__$1 = state_27764;
var statearr_27778_27804 = state_27764__$1;
(statearr_27778_27804[(2)] = inst_27741);

(statearr_27778_27804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (10))){
var inst_27760 = (state_27764[(2)]);
var state_27764__$1 = state_27764;
var statearr_27779_27805 = state_27764__$1;
(statearr_27779_27805[(2)] = inst_27760);

(statearr_27779_27805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27765 === (8))){
var inst_27741 = (state_27764[(7)]);
var inst_27751 = cljs.core.next.call(null,inst_27741);
var inst_27741__$1 = inst_27751;
var state_27764__$1 = (function (){var statearr_27780 = state_27764;
(statearr_27780[(7)] = inst_27741__$1);

return statearr_27780;
})();
var statearr_27781_27806 = state_27764__$1;
(statearr_27781_27806[(2)] = null);

(statearr_27781_27806[(1)] = (2));


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
});})(c__19571__auto__))
;
return ((function (switch__19506__auto__,c__19571__auto__){
return (function() {
var cljs$core$async$state_machine__19507__auto__ = null;
var cljs$core$async$state_machine__19507__auto____0 = (function (){
var statearr_27785 = [null,null,null,null,null,null,null,null];
(statearr_27785[(0)] = cljs$core$async$state_machine__19507__auto__);

(statearr_27785[(1)] = (1));

return statearr_27785;
});
var cljs$core$async$state_machine__19507__auto____1 = (function (state_27764){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_27764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e27786){if((e27786 instanceof Object)){
var ex__19510__auto__ = e27786;
var statearr_27787_27807 = state_27764;
(statearr_27787_27807[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27808 = state_27764;
state_27764 = G__27808;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$state_machine__19507__auto__ = function(state_27764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19507__auto____1.call(this,state_27764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19507__auto____0;
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19507__auto____1;
return cljs$core$async$state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto__))
})();
var state__19573__auto__ = (function (){var statearr_27788 = f__19572__auto__.call(null);
(statearr_27788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto__);

return statearr_27788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto__))
);

return c__19571__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17145__auto__ = (((_ == null))?null:_);
var m__17146__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,_);
} else {
var m__17146__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17146__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,ch);
} else {
var m__17146__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m);
} else {
var m__17146__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28030 = (function (mult,ch,cs,meta28031){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28031 = meta28031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28032,meta28031__$1){
var self__ = this;
var _28032__$1 = this;
return (new cljs.core.async.t_cljs$core$async28030(self__.mult,self__.ch,self__.cs,meta28031__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28032){
var self__ = this;
var _28032__$1 = this;
return self__.meta28031;
});})(cs))
;

cljs.core.async.t_cljs$core$async28030.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28030.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28030.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28030.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28030.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28030.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28030.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28031","meta28031",-2106031617,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28030";

cljs.core.async.t_cljs$core$async28030.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async28030");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28030 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28030(mult__$1,ch__$1,cs__$1,meta28031){
return (new cljs.core.async.t_cljs$core$async28030(mult__$1,ch__$1,cs__$1,meta28031));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28030(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19571__auto___28251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___28251,cs,m,dchan,dctr,done){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___28251,cs,m,dchan,dctr,done){
return (function (state_28163){
var state_val_28164 = (state_28163[(1)]);
if((state_val_28164 === (7))){
var inst_28159 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28165_28252 = state_28163__$1;
(statearr_28165_28252[(2)] = inst_28159);

(statearr_28165_28252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (20))){
var inst_28064 = (state_28163[(7)]);
var inst_28074 = cljs.core.first.call(null,inst_28064);
var inst_28075 = cljs.core.nth.call(null,inst_28074,(0),null);
var inst_28076 = cljs.core.nth.call(null,inst_28074,(1),null);
var state_28163__$1 = (function (){var statearr_28166 = state_28163;
(statearr_28166[(8)] = inst_28075);

return statearr_28166;
})();
if(cljs.core.truth_(inst_28076)){
var statearr_28167_28253 = state_28163__$1;
(statearr_28167_28253[(1)] = (22));

} else {
var statearr_28168_28254 = state_28163__$1;
(statearr_28168_28254[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (27))){
var inst_28111 = (state_28163[(9)]);
var inst_28104 = (state_28163[(10)]);
var inst_28035 = (state_28163[(11)]);
var inst_28106 = (state_28163[(12)]);
var inst_28111__$1 = cljs.core._nth.call(null,inst_28104,inst_28106);
var inst_28112 = cljs.core.async.put_BANG_.call(null,inst_28111__$1,inst_28035,done);
var state_28163__$1 = (function (){var statearr_28169 = state_28163;
(statearr_28169[(9)] = inst_28111__$1);

return statearr_28169;
})();
if(cljs.core.truth_(inst_28112)){
var statearr_28170_28255 = state_28163__$1;
(statearr_28170_28255[(1)] = (30));

} else {
var statearr_28171_28256 = state_28163__$1;
(statearr_28171_28256[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (1))){
var state_28163__$1 = state_28163;
var statearr_28172_28257 = state_28163__$1;
(statearr_28172_28257[(2)] = null);

(statearr_28172_28257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (24))){
var inst_28064 = (state_28163[(7)]);
var inst_28081 = (state_28163[(2)]);
var inst_28082 = cljs.core.next.call(null,inst_28064);
var inst_28044 = inst_28082;
var inst_28045 = null;
var inst_28046 = (0);
var inst_28047 = (0);
var state_28163__$1 = (function (){var statearr_28173 = state_28163;
(statearr_28173[(13)] = inst_28045);

(statearr_28173[(14)] = inst_28081);

(statearr_28173[(15)] = inst_28047);

(statearr_28173[(16)] = inst_28046);

(statearr_28173[(17)] = inst_28044);

return statearr_28173;
})();
var statearr_28174_28258 = state_28163__$1;
(statearr_28174_28258[(2)] = null);

(statearr_28174_28258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (39))){
var state_28163__$1 = state_28163;
var statearr_28178_28259 = state_28163__$1;
(statearr_28178_28259[(2)] = null);

(statearr_28178_28259[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (4))){
var inst_28035 = (state_28163[(11)]);
var inst_28035__$1 = (state_28163[(2)]);
var inst_28036 = (inst_28035__$1 == null);
var state_28163__$1 = (function (){var statearr_28179 = state_28163;
(statearr_28179[(11)] = inst_28035__$1);

return statearr_28179;
})();
if(cljs.core.truth_(inst_28036)){
var statearr_28180_28260 = state_28163__$1;
(statearr_28180_28260[(1)] = (5));

} else {
var statearr_28181_28261 = state_28163__$1;
(statearr_28181_28261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (15))){
var inst_28045 = (state_28163[(13)]);
var inst_28047 = (state_28163[(15)]);
var inst_28046 = (state_28163[(16)]);
var inst_28044 = (state_28163[(17)]);
var inst_28060 = (state_28163[(2)]);
var inst_28061 = (inst_28047 + (1));
var tmp28175 = inst_28045;
var tmp28176 = inst_28046;
var tmp28177 = inst_28044;
var inst_28044__$1 = tmp28177;
var inst_28045__$1 = tmp28175;
var inst_28046__$1 = tmp28176;
var inst_28047__$1 = inst_28061;
var state_28163__$1 = (function (){var statearr_28182 = state_28163;
(statearr_28182[(13)] = inst_28045__$1);

(statearr_28182[(18)] = inst_28060);

(statearr_28182[(15)] = inst_28047__$1);

(statearr_28182[(16)] = inst_28046__$1);

(statearr_28182[(17)] = inst_28044__$1);

return statearr_28182;
})();
var statearr_28183_28262 = state_28163__$1;
(statearr_28183_28262[(2)] = null);

(statearr_28183_28262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (21))){
var inst_28085 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28187_28263 = state_28163__$1;
(statearr_28187_28263[(2)] = inst_28085);

(statearr_28187_28263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (31))){
var inst_28111 = (state_28163[(9)]);
var inst_28115 = done.call(null,null);
var inst_28116 = cljs.core.async.untap_STAR_.call(null,m,inst_28111);
var state_28163__$1 = (function (){var statearr_28188 = state_28163;
(statearr_28188[(19)] = inst_28115);

return statearr_28188;
})();
var statearr_28189_28264 = state_28163__$1;
(statearr_28189_28264[(2)] = inst_28116);

(statearr_28189_28264[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (32))){
var inst_28104 = (state_28163[(10)]);
var inst_28103 = (state_28163[(20)]);
var inst_28106 = (state_28163[(12)]);
var inst_28105 = (state_28163[(21)]);
var inst_28118 = (state_28163[(2)]);
var inst_28119 = (inst_28106 + (1));
var tmp28184 = inst_28104;
var tmp28185 = inst_28103;
var tmp28186 = inst_28105;
var inst_28103__$1 = tmp28185;
var inst_28104__$1 = tmp28184;
var inst_28105__$1 = tmp28186;
var inst_28106__$1 = inst_28119;
var state_28163__$1 = (function (){var statearr_28190 = state_28163;
(statearr_28190[(10)] = inst_28104__$1);

(statearr_28190[(22)] = inst_28118);

(statearr_28190[(20)] = inst_28103__$1);

(statearr_28190[(12)] = inst_28106__$1);

(statearr_28190[(21)] = inst_28105__$1);

return statearr_28190;
})();
var statearr_28191_28265 = state_28163__$1;
(statearr_28191_28265[(2)] = null);

(statearr_28191_28265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (40))){
var inst_28131 = (state_28163[(23)]);
var inst_28135 = done.call(null,null);
var inst_28136 = cljs.core.async.untap_STAR_.call(null,m,inst_28131);
var state_28163__$1 = (function (){var statearr_28192 = state_28163;
(statearr_28192[(24)] = inst_28135);

return statearr_28192;
})();
var statearr_28193_28266 = state_28163__$1;
(statearr_28193_28266[(2)] = inst_28136);

(statearr_28193_28266[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (33))){
var inst_28122 = (state_28163[(25)]);
var inst_28124 = cljs.core.chunked_seq_QMARK_.call(null,inst_28122);
var state_28163__$1 = state_28163;
if(inst_28124){
var statearr_28194_28267 = state_28163__$1;
(statearr_28194_28267[(1)] = (36));

} else {
var statearr_28195_28268 = state_28163__$1;
(statearr_28195_28268[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (13))){
var inst_28054 = (state_28163[(26)]);
var inst_28057 = cljs.core.async.close_BANG_.call(null,inst_28054);
var state_28163__$1 = state_28163;
var statearr_28196_28269 = state_28163__$1;
(statearr_28196_28269[(2)] = inst_28057);

(statearr_28196_28269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (22))){
var inst_28075 = (state_28163[(8)]);
var inst_28078 = cljs.core.async.close_BANG_.call(null,inst_28075);
var state_28163__$1 = state_28163;
var statearr_28197_28270 = state_28163__$1;
(statearr_28197_28270[(2)] = inst_28078);

(statearr_28197_28270[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (36))){
var inst_28122 = (state_28163[(25)]);
var inst_28126 = cljs.core.chunk_first.call(null,inst_28122);
var inst_28127 = cljs.core.chunk_rest.call(null,inst_28122);
var inst_28128 = cljs.core.count.call(null,inst_28126);
var inst_28103 = inst_28127;
var inst_28104 = inst_28126;
var inst_28105 = inst_28128;
var inst_28106 = (0);
var state_28163__$1 = (function (){var statearr_28198 = state_28163;
(statearr_28198[(10)] = inst_28104);

(statearr_28198[(20)] = inst_28103);

(statearr_28198[(12)] = inst_28106);

(statearr_28198[(21)] = inst_28105);

return statearr_28198;
})();
var statearr_28199_28271 = state_28163__$1;
(statearr_28199_28271[(2)] = null);

(statearr_28199_28271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (41))){
var inst_28122 = (state_28163[(25)]);
var inst_28138 = (state_28163[(2)]);
var inst_28139 = cljs.core.next.call(null,inst_28122);
var inst_28103 = inst_28139;
var inst_28104 = null;
var inst_28105 = (0);
var inst_28106 = (0);
var state_28163__$1 = (function (){var statearr_28200 = state_28163;
(statearr_28200[(10)] = inst_28104);

(statearr_28200[(27)] = inst_28138);

(statearr_28200[(20)] = inst_28103);

(statearr_28200[(12)] = inst_28106);

(statearr_28200[(21)] = inst_28105);

return statearr_28200;
})();
var statearr_28201_28272 = state_28163__$1;
(statearr_28201_28272[(2)] = null);

(statearr_28201_28272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (43))){
var state_28163__$1 = state_28163;
var statearr_28202_28273 = state_28163__$1;
(statearr_28202_28273[(2)] = null);

(statearr_28202_28273[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (29))){
var inst_28147 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28203_28274 = state_28163__$1;
(statearr_28203_28274[(2)] = inst_28147);

(statearr_28203_28274[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (44))){
var inst_28156 = (state_28163[(2)]);
var state_28163__$1 = (function (){var statearr_28204 = state_28163;
(statearr_28204[(28)] = inst_28156);

return statearr_28204;
})();
var statearr_28205_28275 = state_28163__$1;
(statearr_28205_28275[(2)] = null);

(statearr_28205_28275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (6))){
var inst_28095 = (state_28163[(29)]);
var inst_28094 = cljs.core.deref.call(null,cs);
var inst_28095__$1 = cljs.core.keys.call(null,inst_28094);
var inst_28096 = cljs.core.count.call(null,inst_28095__$1);
var inst_28097 = cljs.core.reset_BANG_.call(null,dctr,inst_28096);
var inst_28102 = cljs.core.seq.call(null,inst_28095__$1);
var inst_28103 = inst_28102;
var inst_28104 = null;
var inst_28105 = (0);
var inst_28106 = (0);
var state_28163__$1 = (function (){var statearr_28206 = state_28163;
(statearr_28206[(10)] = inst_28104);

(statearr_28206[(30)] = inst_28097);

(statearr_28206[(29)] = inst_28095__$1);

(statearr_28206[(20)] = inst_28103);

(statearr_28206[(12)] = inst_28106);

(statearr_28206[(21)] = inst_28105);

return statearr_28206;
})();
var statearr_28207_28276 = state_28163__$1;
(statearr_28207_28276[(2)] = null);

(statearr_28207_28276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (28))){
var inst_28103 = (state_28163[(20)]);
var inst_28122 = (state_28163[(25)]);
var inst_28122__$1 = cljs.core.seq.call(null,inst_28103);
var state_28163__$1 = (function (){var statearr_28208 = state_28163;
(statearr_28208[(25)] = inst_28122__$1);

return statearr_28208;
})();
if(inst_28122__$1){
var statearr_28209_28277 = state_28163__$1;
(statearr_28209_28277[(1)] = (33));

} else {
var statearr_28210_28278 = state_28163__$1;
(statearr_28210_28278[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (25))){
var inst_28106 = (state_28163[(12)]);
var inst_28105 = (state_28163[(21)]);
var inst_28108 = (inst_28106 < inst_28105);
var inst_28109 = inst_28108;
var state_28163__$1 = state_28163;
if(cljs.core.truth_(inst_28109)){
var statearr_28211_28279 = state_28163__$1;
(statearr_28211_28279[(1)] = (27));

} else {
var statearr_28212_28280 = state_28163__$1;
(statearr_28212_28280[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (34))){
var state_28163__$1 = state_28163;
var statearr_28213_28281 = state_28163__$1;
(statearr_28213_28281[(2)] = null);

(statearr_28213_28281[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (17))){
var state_28163__$1 = state_28163;
var statearr_28214_28282 = state_28163__$1;
(statearr_28214_28282[(2)] = null);

(statearr_28214_28282[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (3))){
var inst_28161 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28163__$1,inst_28161);
} else {
if((state_val_28164 === (12))){
var inst_28090 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28215_28283 = state_28163__$1;
(statearr_28215_28283[(2)] = inst_28090);

(statearr_28215_28283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (2))){
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28163__$1,(4),ch);
} else {
if((state_val_28164 === (23))){
var state_28163__$1 = state_28163;
var statearr_28216_28284 = state_28163__$1;
(statearr_28216_28284[(2)] = null);

(statearr_28216_28284[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (35))){
var inst_28145 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28217_28285 = state_28163__$1;
(statearr_28217_28285[(2)] = inst_28145);

(statearr_28217_28285[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (19))){
var inst_28064 = (state_28163[(7)]);
var inst_28068 = cljs.core.chunk_first.call(null,inst_28064);
var inst_28069 = cljs.core.chunk_rest.call(null,inst_28064);
var inst_28070 = cljs.core.count.call(null,inst_28068);
var inst_28044 = inst_28069;
var inst_28045 = inst_28068;
var inst_28046 = inst_28070;
var inst_28047 = (0);
var state_28163__$1 = (function (){var statearr_28218 = state_28163;
(statearr_28218[(13)] = inst_28045);

(statearr_28218[(15)] = inst_28047);

(statearr_28218[(16)] = inst_28046);

(statearr_28218[(17)] = inst_28044);

return statearr_28218;
})();
var statearr_28219_28286 = state_28163__$1;
(statearr_28219_28286[(2)] = null);

(statearr_28219_28286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (11))){
var inst_28064 = (state_28163[(7)]);
var inst_28044 = (state_28163[(17)]);
var inst_28064__$1 = cljs.core.seq.call(null,inst_28044);
var state_28163__$1 = (function (){var statearr_28220 = state_28163;
(statearr_28220[(7)] = inst_28064__$1);

return statearr_28220;
})();
if(inst_28064__$1){
var statearr_28221_28287 = state_28163__$1;
(statearr_28221_28287[(1)] = (16));

} else {
var statearr_28222_28288 = state_28163__$1;
(statearr_28222_28288[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (9))){
var inst_28092 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28223_28289 = state_28163__$1;
(statearr_28223_28289[(2)] = inst_28092);

(statearr_28223_28289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (5))){
var inst_28042 = cljs.core.deref.call(null,cs);
var inst_28043 = cljs.core.seq.call(null,inst_28042);
var inst_28044 = inst_28043;
var inst_28045 = null;
var inst_28046 = (0);
var inst_28047 = (0);
var state_28163__$1 = (function (){var statearr_28224 = state_28163;
(statearr_28224[(13)] = inst_28045);

(statearr_28224[(15)] = inst_28047);

(statearr_28224[(16)] = inst_28046);

(statearr_28224[(17)] = inst_28044);

return statearr_28224;
})();
var statearr_28225_28290 = state_28163__$1;
(statearr_28225_28290[(2)] = null);

(statearr_28225_28290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (14))){
var state_28163__$1 = state_28163;
var statearr_28226_28291 = state_28163__$1;
(statearr_28226_28291[(2)] = null);

(statearr_28226_28291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (45))){
var inst_28153 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28227_28292 = state_28163__$1;
(statearr_28227_28292[(2)] = inst_28153);

(statearr_28227_28292[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (26))){
var inst_28095 = (state_28163[(29)]);
var inst_28149 = (state_28163[(2)]);
var inst_28150 = cljs.core.seq.call(null,inst_28095);
var state_28163__$1 = (function (){var statearr_28228 = state_28163;
(statearr_28228[(31)] = inst_28149);

return statearr_28228;
})();
if(inst_28150){
var statearr_28229_28293 = state_28163__$1;
(statearr_28229_28293[(1)] = (42));

} else {
var statearr_28230_28294 = state_28163__$1;
(statearr_28230_28294[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (16))){
var inst_28064 = (state_28163[(7)]);
var inst_28066 = cljs.core.chunked_seq_QMARK_.call(null,inst_28064);
var state_28163__$1 = state_28163;
if(inst_28066){
var statearr_28231_28295 = state_28163__$1;
(statearr_28231_28295[(1)] = (19));

} else {
var statearr_28232_28296 = state_28163__$1;
(statearr_28232_28296[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (38))){
var inst_28142 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28233_28297 = state_28163__$1;
(statearr_28233_28297[(2)] = inst_28142);

(statearr_28233_28297[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (30))){
var state_28163__$1 = state_28163;
var statearr_28234_28298 = state_28163__$1;
(statearr_28234_28298[(2)] = null);

(statearr_28234_28298[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (10))){
var inst_28045 = (state_28163[(13)]);
var inst_28047 = (state_28163[(15)]);
var inst_28053 = cljs.core._nth.call(null,inst_28045,inst_28047);
var inst_28054 = cljs.core.nth.call(null,inst_28053,(0),null);
var inst_28055 = cljs.core.nth.call(null,inst_28053,(1),null);
var state_28163__$1 = (function (){var statearr_28235 = state_28163;
(statearr_28235[(26)] = inst_28054);

return statearr_28235;
})();
if(cljs.core.truth_(inst_28055)){
var statearr_28236_28299 = state_28163__$1;
(statearr_28236_28299[(1)] = (13));

} else {
var statearr_28237_28300 = state_28163__$1;
(statearr_28237_28300[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (18))){
var inst_28088 = (state_28163[(2)]);
var state_28163__$1 = state_28163;
var statearr_28238_28301 = state_28163__$1;
(statearr_28238_28301[(2)] = inst_28088);

(statearr_28238_28301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (42))){
var state_28163__$1 = state_28163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28163__$1,(45),dchan);
} else {
if((state_val_28164 === (37))){
var inst_28131 = (state_28163[(23)]);
var inst_28035 = (state_28163[(11)]);
var inst_28122 = (state_28163[(25)]);
var inst_28131__$1 = cljs.core.first.call(null,inst_28122);
var inst_28132 = cljs.core.async.put_BANG_.call(null,inst_28131__$1,inst_28035,done);
var state_28163__$1 = (function (){var statearr_28239 = state_28163;
(statearr_28239[(23)] = inst_28131__$1);

return statearr_28239;
})();
if(cljs.core.truth_(inst_28132)){
var statearr_28240_28302 = state_28163__$1;
(statearr_28240_28302[(1)] = (39));

} else {
var statearr_28241_28303 = state_28163__$1;
(statearr_28241_28303[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28164 === (8))){
var inst_28047 = (state_28163[(15)]);
var inst_28046 = (state_28163[(16)]);
var inst_28049 = (inst_28047 < inst_28046);
var inst_28050 = inst_28049;
var state_28163__$1 = state_28163;
if(cljs.core.truth_(inst_28050)){
var statearr_28242_28304 = state_28163__$1;
(statearr_28242_28304[(1)] = (10));

} else {
var statearr_28243_28305 = state_28163__$1;
(statearr_28243_28305[(1)] = (11));

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
});})(c__19571__auto___28251,cs,m,dchan,dctr,done))
;
return ((function (switch__19506__auto__,c__19571__auto___28251,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19507__auto__ = null;
var cljs$core$async$mult_$_state_machine__19507__auto____0 = (function (){
var statearr_28247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28247[(0)] = cljs$core$async$mult_$_state_machine__19507__auto__);

(statearr_28247[(1)] = (1));

return statearr_28247;
});
var cljs$core$async$mult_$_state_machine__19507__auto____1 = (function (state_28163){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_28163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e28248){if((e28248 instanceof Object)){
var ex__19510__auto__ = e28248;
var statearr_28249_28306 = state_28163;
(statearr_28249_28306[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28307 = state_28163;
state_28163 = G__28307;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19507__auto__ = function(state_28163){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19507__auto____1.call(this,state_28163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19507__auto____0;
cljs$core$async$mult_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19507__auto____1;
return cljs$core$async$mult_$_state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___28251,cs,m,dchan,dctr,done))
})();
var state__19573__auto__ = (function (){var statearr_28250 = f__19572__auto__.call(null);
(statearr_28250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___28251);

return statearr_28250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___28251,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28308 = [];
var len__17548__auto___28311 = arguments.length;
var i__17549__auto___28312 = (0);
while(true){
if((i__17549__auto___28312 < len__17548__auto___28311)){
args28308.push((arguments[i__17549__auto___28312]));

var G__28313 = (i__17549__auto___28312 + (1));
i__17549__auto___28312 = G__28313;
continue;
} else {
}
break;
}

var G__28310 = args28308.length;
switch (G__28310) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28308.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,ch);
} else {
var m__17146__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,ch);
} else {
var m__17146__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m);
} else {
var m__17146__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,state_map);
} else {
var m__17146__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17145__auto__ = (((m == null))?null:m);
var m__17146__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,m,mode);
} else {
var m__17146__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17555__auto__ = [];
var len__17548__auto___28325 = arguments.length;
var i__17549__auto___28326 = (0);
while(true){
if((i__17549__auto___28326 < len__17548__auto___28325)){
args__17555__auto__.push((arguments[i__17549__auto___28326]));

var G__28327 = (i__17549__auto___28326 + (1));
i__17549__auto___28326 = G__28327;
continue;
} else {
}
break;
}

var argseq__17556__auto__ = ((((3) < args__17555__auto__.length))?(new cljs.core.IndexedSeq(args__17555__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17556__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28319){
var map__28320 = p__28319;
var map__28320__$1 = ((((!((map__28320 == null)))?((((map__28320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28320):map__28320);
var opts = map__28320__$1;
var statearr_28322_28328 = state;
(statearr_28322_28328[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28320,map__28320__$1,opts){
return (function (val){
var statearr_28323_28329 = state;
(statearr_28323_28329[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28320,map__28320__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28324_28330 = state;
(statearr_28324_28330[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28315){
var G__28316 = cljs.core.first.call(null,seq28315);
var seq28315__$1 = cljs.core.next.call(null,seq28315);
var G__28317 = cljs.core.first.call(null,seq28315__$1);
var seq28315__$2 = cljs.core.next.call(null,seq28315__$1);
var G__28318 = cljs.core.first.call(null,seq28315__$2);
var seq28315__$3 = cljs.core.next.call(null,seq28315__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28316,G__28317,G__28318,seq28315__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28494 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28494 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28495){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28495 = meta28495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28496,meta28495__$1){
var self__ = this;
var _28496__$1 = this;
return (new cljs.core.async.t_cljs$core$async28494(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28495__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28496){
var self__ = this;
var _28496__$1 = this;
return self__.meta28495;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28494.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28494.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28494.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28494.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28494.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28494.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28494.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28494.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28494.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28495","meta28495",1615455778,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28494";

cljs.core.async.t_cljs$core$async28494.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async28494");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28494 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28494(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28495){
return (new cljs.core.async.t_cljs$core$async28494(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28495));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28494(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19571__auto___28657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___28657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___28657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28594){
var state_val_28595 = (state_28594[(1)]);
if((state_val_28595 === (7))){
var inst_28512 = (state_28594[(2)]);
var state_28594__$1 = state_28594;
var statearr_28596_28658 = state_28594__$1;
(statearr_28596_28658[(2)] = inst_28512);

(statearr_28596_28658[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (20))){
var inst_28524 = (state_28594[(7)]);
var state_28594__$1 = state_28594;
var statearr_28597_28659 = state_28594__$1;
(statearr_28597_28659[(2)] = inst_28524);

(statearr_28597_28659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (27))){
var state_28594__$1 = state_28594;
var statearr_28598_28660 = state_28594__$1;
(statearr_28598_28660[(2)] = null);

(statearr_28598_28660[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (1))){
var inst_28500 = (state_28594[(8)]);
var inst_28500__$1 = calc_state.call(null);
var inst_28502 = (inst_28500__$1 == null);
var inst_28503 = cljs.core.not.call(null,inst_28502);
var state_28594__$1 = (function (){var statearr_28599 = state_28594;
(statearr_28599[(8)] = inst_28500__$1);

return statearr_28599;
})();
if(inst_28503){
var statearr_28600_28661 = state_28594__$1;
(statearr_28600_28661[(1)] = (2));

} else {
var statearr_28601_28662 = state_28594__$1;
(statearr_28601_28662[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (24))){
var inst_28547 = (state_28594[(9)]);
var inst_28554 = (state_28594[(10)]);
var inst_28568 = (state_28594[(11)]);
var inst_28568__$1 = inst_28547.call(null,inst_28554);
var state_28594__$1 = (function (){var statearr_28602 = state_28594;
(statearr_28602[(11)] = inst_28568__$1);

return statearr_28602;
})();
if(cljs.core.truth_(inst_28568__$1)){
var statearr_28603_28663 = state_28594__$1;
(statearr_28603_28663[(1)] = (29));

} else {
var statearr_28604_28664 = state_28594__$1;
(statearr_28604_28664[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (4))){
var inst_28515 = (state_28594[(2)]);
var state_28594__$1 = state_28594;
if(cljs.core.truth_(inst_28515)){
var statearr_28605_28665 = state_28594__$1;
(statearr_28605_28665[(1)] = (8));

} else {
var statearr_28606_28666 = state_28594__$1;
(statearr_28606_28666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (15))){
var inst_28541 = (state_28594[(2)]);
var state_28594__$1 = state_28594;
if(cljs.core.truth_(inst_28541)){
var statearr_28607_28667 = state_28594__$1;
(statearr_28607_28667[(1)] = (19));

} else {
var statearr_28608_28668 = state_28594__$1;
(statearr_28608_28668[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (21))){
var inst_28546 = (state_28594[(12)]);
var inst_28546__$1 = (state_28594[(2)]);
var inst_28547 = cljs.core.get.call(null,inst_28546__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28548 = cljs.core.get.call(null,inst_28546__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28549 = cljs.core.get.call(null,inst_28546__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28594__$1 = (function (){var statearr_28609 = state_28594;
(statearr_28609[(9)] = inst_28547);

(statearr_28609[(13)] = inst_28548);

(statearr_28609[(12)] = inst_28546__$1);

return statearr_28609;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28594__$1,(22),inst_28549);
} else {
if((state_val_28595 === (31))){
var inst_28576 = (state_28594[(2)]);
var state_28594__$1 = state_28594;
if(cljs.core.truth_(inst_28576)){
var statearr_28610_28669 = state_28594__$1;
(statearr_28610_28669[(1)] = (32));

} else {
var statearr_28611_28670 = state_28594__$1;
(statearr_28611_28670[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (32))){
var inst_28553 = (state_28594[(14)]);
var state_28594__$1 = state_28594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28594__$1,(35),out,inst_28553);
} else {
if((state_val_28595 === (33))){
var inst_28546 = (state_28594[(12)]);
var inst_28524 = inst_28546;
var state_28594__$1 = (function (){var statearr_28612 = state_28594;
(statearr_28612[(7)] = inst_28524);

return statearr_28612;
})();
var statearr_28613_28671 = state_28594__$1;
(statearr_28613_28671[(2)] = null);

(statearr_28613_28671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (13))){
var inst_28524 = (state_28594[(7)]);
var inst_28531 = inst_28524.cljs$lang$protocol_mask$partition0$;
var inst_28532 = (inst_28531 & (64));
var inst_28533 = inst_28524.cljs$core$ISeq$;
var inst_28534 = (inst_28532) || (inst_28533);
var state_28594__$1 = state_28594;
if(cljs.core.truth_(inst_28534)){
var statearr_28614_28672 = state_28594__$1;
(statearr_28614_28672[(1)] = (16));

} else {
var statearr_28615_28673 = state_28594__$1;
(statearr_28615_28673[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (22))){
var inst_28554 = (state_28594[(10)]);
var inst_28553 = (state_28594[(14)]);
var inst_28552 = (state_28594[(2)]);
var inst_28553__$1 = cljs.core.nth.call(null,inst_28552,(0),null);
var inst_28554__$1 = cljs.core.nth.call(null,inst_28552,(1),null);
var inst_28555 = (inst_28553__$1 == null);
var inst_28556 = cljs.core._EQ_.call(null,inst_28554__$1,change);
var inst_28557 = (inst_28555) || (inst_28556);
var state_28594__$1 = (function (){var statearr_28616 = state_28594;
(statearr_28616[(10)] = inst_28554__$1);

(statearr_28616[(14)] = inst_28553__$1);

return statearr_28616;
})();
if(cljs.core.truth_(inst_28557)){
var statearr_28617_28674 = state_28594__$1;
(statearr_28617_28674[(1)] = (23));

} else {
var statearr_28618_28675 = state_28594__$1;
(statearr_28618_28675[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (36))){
var inst_28546 = (state_28594[(12)]);
var inst_28524 = inst_28546;
var state_28594__$1 = (function (){var statearr_28619 = state_28594;
(statearr_28619[(7)] = inst_28524);

return statearr_28619;
})();
var statearr_28620_28676 = state_28594__$1;
(statearr_28620_28676[(2)] = null);

(statearr_28620_28676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (29))){
var inst_28568 = (state_28594[(11)]);
var state_28594__$1 = state_28594;
var statearr_28621_28677 = state_28594__$1;
(statearr_28621_28677[(2)] = inst_28568);

(statearr_28621_28677[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (6))){
var state_28594__$1 = state_28594;
var statearr_28622_28678 = state_28594__$1;
(statearr_28622_28678[(2)] = false);

(statearr_28622_28678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (28))){
var inst_28564 = (state_28594[(2)]);
var inst_28565 = calc_state.call(null);
var inst_28524 = inst_28565;
var state_28594__$1 = (function (){var statearr_28623 = state_28594;
(statearr_28623[(15)] = inst_28564);

(statearr_28623[(7)] = inst_28524);

return statearr_28623;
})();
var statearr_28624_28679 = state_28594__$1;
(statearr_28624_28679[(2)] = null);

(statearr_28624_28679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (25))){
var inst_28590 = (state_28594[(2)]);
var state_28594__$1 = state_28594;
var statearr_28625_28680 = state_28594__$1;
(statearr_28625_28680[(2)] = inst_28590);

(statearr_28625_28680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (34))){
var inst_28588 = (state_28594[(2)]);
var state_28594__$1 = state_28594;
var statearr_28626_28681 = state_28594__$1;
(statearr_28626_28681[(2)] = inst_28588);

(statearr_28626_28681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (17))){
var state_28594__$1 = state_28594;
var statearr_28627_28682 = state_28594__$1;
(statearr_28627_28682[(2)] = false);

(statearr_28627_28682[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (3))){
var state_28594__$1 = state_28594;
var statearr_28628_28683 = state_28594__$1;
(statearr_28628_28683[(2)] = false);

(statearr_28628_28683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (12))){
var inst_28592 = (state_28594[(2)]);
var state_28594__$1 = state_28594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28594__$1,inst_28592);
} else {
if((state_val_28595 === (2))){
var inst_28500 = (state_28594[(8)]);
var inst_28505 = inst_28500.cljs$lang$protocol_mask$partition0$;
var inst_28506 = (inst_28505 & (64));
var inst_28507 = inst_28500.cljs$core$ISeq$;
var inst_28508 = (inst_28506) || (inst_28507);
var state_28594__$1 = state_28594;
if(cljs.core.truth_(inst_28508)){
var statearr_28629_28684 = state_28594__$1;
(statearr_28629_28684[(1)] = (5));

} else {
var statearr_28630_28685 = state_28594__$1;
(statearr_28630_28685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (23))){
var inst_28553 = (state_28594[(14)]);
var inst_28559 = (inst_28553 == null);
var state_28594__$1 = state_28594;
if(cljs.core.truth_(inst_28559)){
var statearr_28631_28686 = state_28594__$1;
(statearr_28631_28686[(1)] = (26));

} else {
var statearr_28632_28687 = state_28594__$1;
(statearr_28632_28687[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (35))){
var inst_28579 = (state_28594[(2)]);
var state_28594__$1 = state_28594;
if(cljs.core.truth_(inst_28579)){
var statearr_28633_28688 = state_28594__$1;
(statearr_28633_28688[(1)] = (36));

} else {
var statearr_28634_28689 = state_28594__$1;
(statearr_28634_28689[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (19))){
var inst_28524 = (state_28594[(7)]);
var inst_28543 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28524);
var state_28594__$1 = state_28594;
var statearr_28635_28690 = state_28594__$1;
(statearr_28635_28690[(2)] = inst_28543);

(statearr_28635_28690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (11))){
var inst_28524 = (state_28594[(7)]);
var inst_28528 = (inst_28524 == null);
var inst_28529 = cljs.core.not.call(null,inst_28528);
var state_28594__$1 = state_28594;
if(inst_28529){
var statearr_28636_28691 = state_28594__$1;
(statearr_28636_28691[(1)] = (13));

} else {
var statearr_28637_28692 = state_28594__$1;
(statearr_28637_28692[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (9))){
var inst_28500 = (state_28594[(8)]);
var state_28594__$1 = state_28594;
var statearr_28638_28693 = state_28594__$1;
(statearr_28638_28693[(2)] = inst_28500);

(statearr_28638_28693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (5))){
var state_28594__$1 = state_28594;
var statearr_28639_28694 = state_28594__$1;
(statearr_28639_28694[(2)] = true);

(statearr_28639_28694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (14))){
var state_28594__$1 = state_28594;
var statearr_28640_28695 = state_28594__$1;
(statearr_28640_28695[(2)] = false);

(statearr_28640_28695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (26))){
var inst_28554 = (state_28594[(10)]);
var inst_28561 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28554);
var state_28594__$1 = state_28594;
var statearr_28641_28696 = state_28594__$1;
(statearr_28641_28696[(2)] = inst_28561);

(statearr_28641_28696[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (16))){
var state_28594__$1 = state_28594;
var statearr_28642_28697 = state_28594__$1;
(statearr_28642_28697[(2)] = true);

(statearr_28642_28697[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (38))){
var inst_28584 = (state_28594[(2)]);
var state_28594__$1 = state_28594;
var statearr_28643_28698 = state_28594__$1;
(statearr_28643_28698[(2)] = inst_28584);

(statearr_28643_28698[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (30))){
var inst_28547 = (state_28594[(9)]);
var inst_28554 = (state_28594[(10)]);
var inst_28548 = (state_28594[(13)]);
var inst_28571 = cljs.core.empty_QMARK_.call(null,inst_28547);
var inst_28572 = inst_28548.call(null,inst_28554);
var inst_28573 = cljs.core.not.call(null,inst_28572);
var inst_28574 = (inst_28571) && (inst_28573);
var state_28594__$1 = state_28594;
var statearr_28644_28699 = state_28594__$1;
(statearr_28644_28699[(2)] = inst_28574);

(statearr_28644_28699[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (10))){
var inst_28500 = (state_28594[(8)]);
var inst_28520 = (state_28594[(2)]);
var inst_28521 = cljs.core.get.call(null,inst_28520,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28522 = cljs.core.get.call(null,inst_28520,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28523 = cljs.core.get.call(null,inst_28520,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28524 = inst_28500;
var state_28594__$1 = (function (){var statearr_28645 = state_28594;
(statearr_28645[(16)] = inst_28521);

(statearr_28645[(17)] = inst_28522);

(statearr_28645[(7)] = inst_28524);

(statearr_28645[(18)] = inst_28523);

return statearr_28645;
})();
var statearr_28646_28700 = state_28594__$1;
(statearr_28646_28700[(2)] = null);

(statearr_28646_28700[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (18))){
var inst_28538 = (state_28594[(2)]);
var state_28594__$1 = state_28594;
var statearr_28647_28701 = state_28594__$1;
(statearr_28647_28701[(2)] = inst_28538);

(statearr_28647_28701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (37))){
var state_28594__$1 = state_28594;
var statearr_28648_28702 = state_28594__$1;
(statearr_28648_28702[(2)] = null);

(statearr_28648_28702[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28595 === (8))){
var inst_28500 = (state_28594[(8)]);
var inst_28517 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28500);
var state_28594__$1 = state_28594;
var statearr_28649_28703 = state_28594__$1;
(statearr_28649_28703[(2)] = inst_28517);

(statearr_28649_28703[(1)] = (10));


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
});})(c__19571__auto___28657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19506__auto__,c__19571__auto___28657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19507__auto__ = null;
var cljs$core$async$mix_$_state_machine__19507__auto____0 = (function (){
var statearr_28653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28653[(0)] = cljs$core$async$mix_$_state_machine__19507__auto__);

(statearr_28653[(1)] = (1));

return statearr_28653;
});
var cljs$core$async$mix_$_state_machine__19507__auto____1 = (function (state_28594){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_28594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e28654){if((e28654 instanceof Object)){
var ex__19510__auto__ = e28654;
var statearr_28655_28704 = state_28594;
(statearr_28655_28704[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28705 = state_28594;
state_28594 = G__28705;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19507__auto__ = function(state_28594){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19507__auto____1.call(this,state_28594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19507__auto____0;
cljs$core$async$mix_$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19507__auto____1;
return cljs$core$async$mix_$_state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___28657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19573__auto__ = (function (){var statearr_28656 = f__19572__auto__.call(null);
(statearr_28656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___28657);

return statearr_28656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___28657,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17145__auto__ = (((p == null))?null:p);
var m__17146__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17146__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17145__auto__ = (((p == null))?null:p);
var m__17146__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,p,v,ch);
} else {
var m__17146__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28706 = [];
var len__17548__auto___28709 = arguments.length;
var i__17549__auto___28710 = (0);
while(true){
if((i__17549__auto___28710 < len__17548__auto___28709)){
args28706.push((arguments[i__17549__auto___28710]));

var G__28711 = (i__17549__auto___28710 + (1));
i__17549__auto___28710 = G__28711;
continue;
} else {
}
break;
}

var G__28708 = args28706.length;
switch (G__28708) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28706.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17145__auto__ = (((p == null))?null:p);
var m__17146__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,p);
} else {
var m__17146__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17145__auto__ = (((p == null))?null:p);
var m__17146__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17145__auto__)]);
if(!((m__17146__auto__ == null))){
return m__17146__auto__.call(null,p,v);
} else {
var m__17146__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17146__auto____$1 == null))){
return m__17146__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28714 = [];
var len__17548__auto___28839 = arguments.length;
var i__17549__auto___28840 = (0);
while(true){
if((i__17549__auto___28840 < len__17548__auto___28839)){
args28714.push((arguments[i__17549__auto___28840]));

var G__28841 = (i__17549__auto___28840 + (1));
i__17549__auto___28840 = G__28841;
continue;
} else {
}
break;
}

var G__28716 = args28714.length;
switch (G__28716) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28714.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16490__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16490__auto__)){
return or__16490__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16490__auto__,mults){
return (function (p1__28713_SHARP_){
if(cljs.core.truth_(p1__28713_SHARP_.call(null,topic))){
return p1__28713_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28713_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16490__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28717 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28717 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28718){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28718 = meta28718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28719,meta28718__$1){
var self__ = this;
var _28719__$1 = this;
return (new cljs.core.async.t_cljs$core$async28717(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28718__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28719){
var self__ = this;
var _28719__$1 = this;
return self__.meta28718;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28717.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28717.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28718","meta28718",1860997832,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28717.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28717";

cljs.core.async.t_cljs$core$async28717.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async28717");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28717 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28717(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28718){
return (new cljs.core.async.t_cljs$core$async28717(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28718));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28717(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19571__auto___28843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___28843,mults,ensure_mult,p){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___28843,mults,ensure_mult,p){
return (function (state_28791){
var state_val_28792 = (state_28791[(1)]);
if((state_val_28792 === (7))){
var inst_28787 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28793_28844 = state_28791__$1;
(statearr_28793_28844[(2)] = inst_28787);

(statearr_28793_28844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (20))){
var state_28791__$1 = state_28791;
var statearr_28794_28845 = state_28791__$1;
(statearr_28794_28845[(2)] = null);

(statearr_28794_28845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (1))){
var state_28791__$1 = state_28791;
var statearr_28795_28846 = state_28791__$1;
(statearr_28795_28846[(2)] = null);

(statearr_28795_28846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (24))){
var inst_28770 = (state_28791[(7)]);
var inst_28779 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28770);
var state_28791__$1 = state_28791;
var statearr_28796_28847 = state_28791__$1;
(statearr_28796_28847[(2)] = inst_28779);

(statearr_28796_28847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (4))){
var inst_28722 = (state_28791[(8)]);
var inst_28722__$1 = (state_28791[(2)]);
var inst_28723 = (inst_28722__$1 == null);
var state_28791__$1 = (function (){var statearr_28797 = state_28791;
(statearr_28797[(8)] = inst_28722__$1);

return statearr_28797;
})();
if(cljs.core.truth_(inst_28723)){
var statearr_28798_28848 = state_28791__$1;
(statearr_28798_28848[(1)] = (5));

} else {
var statearr_28799_28849 = state_28791__$1;
(statearr_28799_28849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (15))){
var inst_28764 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28800_28850 = state_28791__$1;
(statearr_28800_28850[(2)] = inst_28764);

(statearr_28800_28850[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (21))){
var inst_28784 = (state_28791[(2)]);
var state_28791__$1 = (function (){var statearr_28801 = state_28791;
(statearr_28801[(9)] = inst_28784);

return statearr_28801;
})();
var statearr_28802_28851 = state_28791__$1;
(statearr_28802_28851[(2)] = null);

(statearr_28802_28851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (13))){
var inst_28746 = (state_28791[(10)]);
var inst_28748 = cljs.core.chunked_seq_QMARK_.call(null,inst_28746);
var state_28791__$1 = state_28791;
if(inst_28748){
var statearr_28803_28852 = state_28791__$1;
(statearr_28803_28852[(1)] = (16));

} else {
var statearr_28804_28853 = state_28791__$1;
(statearr_28804_28853[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (22))){
var inst_28776 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
if(cljs.core.truth_(inst_28776)){
var statearr_28805_28854 = state_28791__$1;
(statearr_28805_28854[(1)] = (23));

} else {
var statearr_28806_28855 = state_28791__$1;
(statearr_28806_28855[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (6))){
var inst_28770 = (state_28791[(7)]);
var inst_28722 = (state_28791[(8)]);
var inst_28772 = (state_28791[(11)]);
var inst_28770__$1 = topic_fn.call(null,inst_28722);
var inst_28771 = cljs.core.deref.call(null,mults);
var inst_28772__$1 = cljs.core.get.call(null,inst_28771,inst_28770__$1);
var state_28791__$1 = (function (){var statearr_28807 = state_28791;
(statearr_28807[(7)] = inst_28770__$1);

(statearr_28807[(11)] = inst_28772__$1);

return statearr_28807;
})();
if(cljs.core.truth_(inst_28772__$1)){
var statearr_28808_28856 = state_28791__$1;
(statearr_28808_28856[(1)] = (19));

} else {
var statearr_28809_28857 = state_28791__$1;
(statearr_28809_28857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (25))){
var inst_28781 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28810_28858 = state_28791__$1;
(statearr_28810_28858[(2)] = inst_28781);

(statearr_28810_28858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (17))){
var inst_28746 = (state_28791[(10)]);
var inst_28755 = cljs.core.first.call(null,inst_28746);
var inst_28756 = cljs.core.async.muxch_STAR_.call(null,inst_28755);
var inst_28757 = cljs.core.async.close_BANG_.call(null,inst_28756);
var inst_28758 = cljs.core.next.call(null,inst_28746);
var inst_28732 = inst_28758;
var inst_28733 = null;
var inst_28734 = (0);
var inst_28735 = (0);
var state_28791__$1 = (function (){var statearr_28811 = state_28791;
(statearr_28811[(12)] = inst_28757);

(statearr_28811[(13)] = inst_28733);

(statearr_28811[(14)] = inst_28735);

(statearr_28811[(15)] = inst_28732);

(statearr_28811[(16)] = inst_28734);

return statearr_28811;
})();
var statearr_28812_28859 = state_28791__$1;
(statearr_28812_28859[(2)] = null);

(statearr_28812_28859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (3))){
var inst_28789 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28791__$1,inst_28789);
} else {
if((state_val_28792 === (12))){
var inst_28766 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28813_28860 = state_28791__$1;
(statearr_28813_28860[(2)] = inst_28766);

(statearr_28813_28860[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (2))){
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28791__$1,(4),ch);
} else {
if((state_val_28792 === (23))){
var state_28791__$1 = state_28791;
var statearr_28814_28861 = state_28791__$1;
(statearr_28814_28861[(2)] = null);

(statearr_28814_28861[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (19))){
var inst_28722 = (state_28791[(8)]);
var inst_28772 = (state_28791[(11)]);
var inst_28774 = cljs.core.async.muxch_STAR_.call(null,inst_28772);
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28791__$1,(22),inst_28774,inst_28722);
} else {
if((state_val_28792 === (11))){
var inst_28746 = (state_28791[(10)]);
var inst_28732 = (state_28791[(15)]);
var inst_28746__$1 = cljs.core.seq.call(null,inst_28732);
var state_28791__$1 = (function (){var statearr_28815 = state_28791;
(statearr_28815[(10)] = inst_28746__$1);

return statearr_28815;
})();
if(inst_28746__$1){
var statearr_28816_28862 = state_28791__$1;
(statearr_28816_28862[(1)] = (13));

} else {
var statearr_28817_28863 = state_28791__$1;
(statearr_28817_28863[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (9))){
var inst_28768 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28818_28864 = state_28791__$1;
(statearr_28818_28864[(2)] = inst_28768);

(statearr_28818_28864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (5))){
var inst_28729 = cljs.core.deref.call(null,mults);
var inst_28730 = cljs.core.vals.call(null,inst_28729);
var inst_28731 = cljs.core.seq.call(null,inst_28730);
var inst_28732 = inst_28731;
var inst_28733 = null;
var inst_28734 = (0);
var inst_28735 = (0);
var state_28791__$1 = (function (){var statearr_28819 = state_28791;
(statearr_28819[(13)] = inst_28733);

(statearr_28819[(14)] = inst_28735);

(statearr_28819[(15)] = inst_28732);

(statearr_28819[(16)] = inst_28734);

return statearr_28819;
})();
var statearr_28820_28865 = state_28791__$1;
(statearr_28820_28865[(2)] = null);

(statearr_28820_28865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (14))){
var state_28791__$1 = state_28791;
var statearr_28824_28866 = state_28791__$1;
(statearr_28824_28866[(2)] = null);

(statearr_28824_28866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (16))){
var inst_28746 = (state_28791[(10)]);
var inst_28750 = cljs.core.chunk_first.call(null,inst_28746);
var inst_28751 = cljs.core.chunk_rest.call(null,inst_28746);
var inst_28752 = cljs.core.count.call(null,inst_28750);
var inst_28732 = inst_28751;
var inst_28733 = inst_28750;
var inst_28734 = inst_28752;
var inst_28735 = (0);
var state_28791__$1 = (function (){var statearr_28825 = state_28791;
(statearr_28825[(13)] = inst_28733);

(statearr_28825[(14)] = inst_28735);

(statearr_28825[(15)] = inst_28732);

(statearr_28825[(16)] = inst_28734);

return statearr_28825;
})();
var statearr_28826_28867 = state_28791__$1;
(statearr_28826_28867[(2)] = null);

(statearr_28826_28867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (10))){
var inst_28733 = (state_28791[(13)]);
var inst_28735 = (state_28791[(14)]);
var inst_28732 = (state_28791[(15)]);
var inst_28734 = (state_28791[(16)]);
var inst_28740 = cljs.core._nth.call(null,inst_28733,inst_28735);
var inst_28741 = cljs.core.async.muxch_STAR_.call(null,inst_28740);
var inst_28742 = cljs.core.async.close_BANG_.call(null,inst_28741);
var inst_28743 = (inst_28735 + (1));
var tmp28821 = inst_28733;
var tmp28822 = inst_28732;
var tmp28823 = inst_28734;
var inst_28732__$1 = tmp28822;
var inst_28733__$1 = tmp28821;
var inst_28734__$1 = tmp28823;
var inst_28735__$1 = inst_28743;
var state_28791__$1 = (function (){var statearr_28827 = state_28791;
(statearr_28827[(13)] = inst_28733__$1);

(statearr_28827[(17)] = inst_28742);

(statearr_28827[(14)] = inst_28735__$1);

(statearr_28827[(15)] = inst_28732__$1);

(statearr_28827[(16)] = inst_28734__$1);

return statearr_28827;
})();
var statearr_28828_28868 = state_28791__$1;
(statearr_28828_28868[(2)] = null);

(statearr_28828_28868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (18))){
var inst_28761 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28829_28869 = state_28791__$1;
(statearr_28829_28869[(2)] = inst_28761);

(statearr_28829_28869[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (8))){
var inst_28735 = (state_28791[(14)]);
var inst_28734 = (state_28791[(16)]);
var inst_28737 = (inst_28735 < inst_28734);
var inst_28738 = inst_28737;
var state_28791__$1 = state_28791;
if(cljs.core.truth_(inst_28738)){
var statearr_28830_28870 = state_28791__$1;
(statearr_28830_28870[(1)] = (10));

} else {
var statearr_28831_28871 = state_28791__$1;
(statearr_28831_28871[(1)] = (11));

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
});})(c__19571__auto___28843,mults,ensure_mult,p))
;
return ((function (switch__19506__auto__,c__19571__auto___28843,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19507__auto__ = null;
var cljs$core$async$state_machine__19507__auto____0 = (function (){
var statearr_28835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28835[(0)] = cljs$core$async$state_machine__19507__auto__);

(statearr_28835[(1)] = (1));

return statearr_28835;
});
var cljs$core$async$state_machine__19507__auto____1 = (function (state_28791){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_28791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e28836){if((e28836 instanceof Object)){
var ex__19510__auto__ = e28836;
var statearr_28837_28872 = state_28791;
(statearr_28837_28872[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28873 = state_28791;
state_28791 = G__28873;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$state_machine__19507__auto__ = function(state_28791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19507__auto____1.call(this,state_28791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19507__auto____0;
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19507__auto____1;
return cljs$core$async$state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___28843,mults,ensure_mult,p))
})();
var state__19573__auto__ = (function (){var statearr_28838 = f__19572__auto__.call(null);
(statearr_28838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___28843);

return statearr_28838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___28843,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28874 = [];
var len__17548__auto___28877 = arguments.length;
var i__17549__auto___28878 = (0);
while(true){
if((i__17549__auto___28878 < len__17548__auto___28877)){
args28874.push((arguments[i__17549__auto___28878]));

var G__28879 = (i__17549__auto___28878 + (1));
i__17549__auto___28878 = G__28879;
continue;
} else {
}
break;
}

var G__28876 = args28874.length;
switch (G__28876) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28874.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28881 = [];
var len__17548__auto___28884 = arguments.length;
var i__17549__auto___28885 = (0);
while(true){
if((i__17549__auto___28885 < len__17548__auto___28884)){
args28881.push((arguments[i__17549__auto___28885]));

var G__28886 = (i__17549__auto___28885 + (1));
i__17549__auto___28885 = G__28886;
continue;
} else {
}
break;
}

var G__28883 = args28881.length;
switch (G__28883) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28881.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28888 = [];
var len__17548__auto___28959 = arguments.length;
var i__17549__auto___28960 = (0);
while(true){
if((i__17549__auto___28960 < len__17548__auto___28959)){
args28888.push((arguments[i__17549__auto___28960]));

var G__28961 = (i__17549__auto___28960 + (1));
i__17549__auto___28960 = G__28961;
continue;
} else {
}
break;
}

var G__28890 = args28888.length;
switch (G__28890) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28888.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19571__auto___28963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___28963,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___28963,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28929){
var state_val_28930 = (state_28929[(1)]);
if((state_val_28930 === (7))){
var state_28929__$1 = state_28929;
var statearr_28931_28964 = state_28929__$1;
(statearr_28931_28964[(2)] = null);

(statearr_28931_28964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (1))){
var state_28929__$1 = state_28929;
var statearr_28932_28965 = state_28929__$1;
(statearr_28932_28965[(2)] = null);

(statearr_28932_28965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (4))){
var inst_28893 = (state_28929[(7)]);
var inst_28895 = (inst_28893 < cnt);
var state_28929__$1 = state_28929;
if(cljs.core.truth_(inst_28895)){
var statearr_28933_28966 = state_28929__$1;
(statearr_28933_28966[(1)] = (6));

} else {
var statearr_28934_28967 = state_28929__$1;
(statearr_28934_28967[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (15))){
var inst_28925 = (state_28929[(2)]);
var state_28929__$1 = state_28929;
var statearr_28935_28968 = state_28929__$1;
(statearr_28935_28968[(2)] = inst_28925);

(statearr_28935_28968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (13))){
var inst_28918 = cljs.core.async.close_BANG_.call(null,out);
var state_28929__$1 = state_28929;
var statearr_28936_28969 = state_28929__$1;
(statearr_28936_28969[(2)] = inst_28918);

(statearr_28936_28969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (6))){
var state_28929__$1 = state_28929;
var statearr_28937_28970 = state_28929__$1;
(statearr_28937_28970[(2)] = null);

(statearr_28937_28970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (3))){
var inst_28927 = (state_28929[(2)]);
var state_28929__$1 = state_28929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28929__$1,inst_28927);
} else {
if((state_val_28930 === (12))){
var inst_28915 = (state_28929[(8)]);
var inst_28915__$1 = (state_28929[(2)]);
var inst_28916 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28915__$1);
var state_28929__$1 = (function (){var statearr_28938 = state_28929;
(statearr_28938[(8)] = inst_28915__$1);

return statearr_28938;
})();
if(cljs.core.truth_(inst_28916)){
var statearr_28939_28971 = state_28929__$1;
(statearr_28939_28971[(1)] = (13));

} else {
var statearr_28940_28972 = state_28929__$1;
(statearr_28940_28972[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (2))){
var inst_28892 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28893 = (0);
var state_28929__$1 = (function (){var statearr_28941 = state_28929;
(statearr_28941[(9)] = inst_28892);

(statearr_28941[(7)] = inst_28893);

return statearr_28941;
})();
var statearr_28942_28973 = state_28929__$1;
(statearr_28942_28973[(2)] = null);

(statearr_28942_28973[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (11))){
var inst_28893 = (state_28929[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28929,(10),Object,null,(9));
var inst_28902 = chs__$1.call(null,inst_28893);
var inst_28903 = done.call(null,inst_28893);
var inst_28904 = cljs.core.async.take_BANG_.call(null,inst_28902,inst_28903);
var state_28929__$1 = state_28929;
var statearr_28943_28974 = state_28929__$1;
(statearr_28943_28974[(2)] = inst_28904);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28929__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (9))){
var inst_28893 = (state_28929[(7)]);
var inst_28906 = (state_28929[(2)]);
var inst_28907 = (inst_28893 + (1));
var inst_28893__$1 = inst_28907;
var state_28929__$1 = (function (){var statearr_28944 = state_28929;
(statearr_28944[(7)] = inst_28893__$1);

(statearr_28944[(10)] = inst_28906);

return statearr_28944;
})();
var statearr_28945_28975 = state_28929__$1;
(statearr_28945_28975[(2)] = null);

(statearr_28945_28975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (5))){
var inst_28913 = (state_28929[(2)]);
var state_28929__$1 = (function (){var statearr_28946 = state_28929;
(statearr_28946[(11)] = inst_28913);

return statearr_28946;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28929__$1,(12),dchan);
} else {
if((state_val_28930 === (14))){
var inst_28915 = (state_28929[(8)]);
var inst_28920 = cljs.core.apply.call(null,f,inst_28915);
var state_28929__$1 = state_28929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28929__$1,(16),out,inst_28920);
} else {
if((state_val_28930 === (16))){
var inst_28922 = (state_28929[(2)]);
var state_28929__$1 = (function (){var statearr_28947 = state_28929;
(statearr_28947[(12)] = inst_28922);

return statearr_28947;
})();
var statearr_28948_28976 = state_28929__$1;
(statearr_28948_28976[(2)] = null);

(statearr_28948_28976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (10))){
var inst_28897 = (state_28929[(2)]);
var inst_28898 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28929__$1 = (function (){var statearr_28949 = state_28929;
(statearr_28949[(13)] = inst_28897);

return statearr_28949;
})();
var statearr_28950_28977 = state_28929__$1;
(statearr_28950_28977[(2)] = inst_28898);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28929__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28930 === (8))){
var inst_28911 = (state_28929[(2)]);
var state_28929__$1 = state_28929;
var statearr_28951_28978 = state_28929__$1;
(statearr_28951_28978[(2)] = inst_28911);

(statearr_28951_28978[(1)] = (5));


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
});})(c__19571__auto___28963,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19506__auto__,c__19571__auto___28963,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19507__auto__ = null;
var cljs$core$async$state_machine__19507__auto____0 = (function (){
var statearr_28955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28955[(0)] = cljs$core$async$state_machine__19507__auto__);

(statearr_28955[(1)] = (1));

return statearr_28955;
});
var cljs$core$async$state_machine__19507__auto____1 = (function (state_28929){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_28929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e28956){if((e28956 instanceof Object)){
var ex__19510__auto__ = e28956;
var statearr_28957_28979 = state_28929;
(statearr_28957_28979[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28980 = state_28929;
state_28929 = G__28980;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$state_machine__19507__auto__ = function(state_28929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19507__auto____1.call(this,state_28929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19507__auto____0;
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19507__auto____1;
return cljs$core$async$state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___28963,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19573__auto__ = (function (){var statearr_28958 = f__19572__auto__.call(null);
(statearr_28958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___28963);

return statearr_28958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___28963,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args28982 = [];
var len__17548__auto___29038 = arguments.length;
var i__17549__auto___29039 = (0);
while(true){
if((i__17549__auto___29039 < len__17548__auto___29038)){
args28982.push((arguments[i__17549__auto___29039]));

var G__29040 = (i__17549__auto___29039 + (1));
i__17549__auto___29039 = G__29040;
continue;
} else {
}
break;
}

var G__28984 = args28982.length;
switch (G__28984) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28982.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19571__auto___29042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___29042,out){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___29042,out){
return (function (state_29014){
var state_val_29015 = (state_29014[(1)]);
if((state_val_29015 === (7))){
var inst_28994 = (state_29014[(7)]);
var inst_28993 = (state_29014[(8)]);
var inst_28993__$1 = (state_29014[(2)]);
var inst_28994__$1 = cljs.core.nth.call(null,inst_28993__$1,(0),null);
var inst_28995 = cljs.core.nth.call(null,inst_28993__$1,(1),null);
var inst_28996 = (inst_28994__$1 == null);
var state_29014__$1 = (function (){var statearr_29016 = state_29014;
(statearr_29016[(7)] = inst_28994__$1);

(statearr_29016[(9)] = inst_28995);

(statearr_29016[(8)] = inst_28993__$1);

return statearr_29016;
})();
if(cljs.core.truth_(inst_28996)){
var statearr_29017_29043 = state_29014__$1;
(statearr_29017_29043[(1)] = (8));

} else {
var statearr_29018_29044 = state_29014__$1;
(statearr_29018_29044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (1))){
var inst_28985 = cljs.core.vec.call(null,chs);
var inst_28986 = inst_28985;
var state_29014__$1 = (function (){var statearr_29019 = state_29014;
(statearr_29019[(10)] = inst_28986);

return statearr_29019;
})();
var statearr_29020_29045 = state_29014__$1;
(statearr_29020_29045[(2)] = null);

(statearr_29020_29045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (4))){
var inst_28986 = (state_29014[(10)]);
var state_29014__$1 = state_29014;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29014__$1,(7),inst_28986);
} else {
if((state_val_29015 === (6))){
var inst_29010 = (state_29014[(2)]);
var state_29014__$1 = state_29014;
var statearr_29021_29046 = state_29014__$1;
(statearr_29021_29046[(2)] = inst_29010);

(statearr_29021_29046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (3))){
var inst_29012 = (state_29014[(2)]);
var state_29014__$1 = state_29014;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29014__$1,inst_29012);
} else {
if((state_val_29015 === (2))){
var inst_28986 = (state_29014[(10)]);
var inst_28988 = cljs.core.count.call(null,inst_28986);
var inst_28989 = (inst_28988 > (0));
var state_29014__$1 = state_29014;
if(cljs.core.truth_(inst_28989)){
var statearr_29023_29047 = state_29014__$1;
(statearr_29023_29047[(1)] = (4));

} else {
var statearr_29024_29048 = state_29014__$1;
(statearr_29024_29048[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (11))){
var inst_28986 = (state_29014[(10)]);
var inst_29003 = (state_29014[(2)]);
var tmp29022 = inst_28986;
var inst_28986__$1 = tmp29022;
var state_29014__$1 = (function (){var statearr_29025 = state_29014;
(statearr_29025[(10)] = inst_28986__$1);

(statearr_29025[(11)] = inst_29003);

return statearr_29025;
})();
var statearr_29026_29049 = state_29014__$1;
(statearr_29026_29049[(2)] = null);

(statearr_29026_29049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (9))){
var inst_28994 = (state_29014[(7)]);
var state_29014__$1 = state_29014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29014__$1,(11),out,inst_28994);
} else {
if((state_val_29015 === (5))){
var inst_29008 = cljs.core.async.close_BANG_.call(null,out);
var state_29014__$1 = state_29014;
var statearr_29027_29050 = state_29014__$1;
(statearr_29027_29050[(2)] = inst_29008);

(statearr_29027_29050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (10))){
var inst_29006 = (state_29014[(2)]);
var state_29014__$1 = state_29014;
var statearr_29028_29051 = state_29014__$1;
(statearr_29028_29051[(2)] = inst_29006);

(statearr_29028_29051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29015 === (8))){
var inst_28994 = (state_29014[(7)]);
var inst_28986 = (state_29014[(10)]);
var inst_28995 = (state_29014[(9)]);
var inst_28993 = (state_29014[(8)]);
var inst_28998 = (function (){var cs = inst_28986;
var vec__28991 = inst_28993;
var v = inst_28994;
var c = inst_28995;
return ((function (cs,vec__28991,v,c,inst_28994,inst_28986,inst_28995,inst_28993,state_val_29015,c__19571__auto___29042,out){
return (function (p1__28981_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28981_SHARP_);
});
;})(cs,vec__28991,v,c,inst_28994,inst_28986,inst_28995,inst_28993,state_val_29015,c__19571__auto___29042,out))
})();
var inst_28999 = cljs.core.filterv.call(null,inst_28998,inst_28986);
var inst_28986__$1 = inst_28999;
var state_29014__$1 = (function (){var statearr_29029 = state_29014;
(statearr_29029[(10)] = inst_28986__$1);

return statearr_29029;
})();
var statearr_29030_29052 = state_29014__$1;
(statearr_29030_29052[(2)] = null);

(statearr_29030_29052[(1)] = (2));


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
});})(c__19571__auto___29042,out))
;
return ((function (switch__19506__auto__,c__19571__auto___29042,out){
return (function() {
var cljs$core$async$state_machine__19507__auto__ = null;
var cljs$core$async$state_machine__19507__auto____0 = (function (){
var statearr_29034 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29034[(0)] = cljs$core$async$state_machine__19507__auto__);

(statearr_29034[(1)] = (1));

return statearr_29034;
});
var cljs$core$async$state_machine__19507__auto____1 = (function (state_29014){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_29014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e29035){if((e29035 instanceof Object)){
var ex__19510__auto__ = e29035;
var statearr_29036_29053 = state_29014;
(statearr_29036_29053[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29014);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29054 = state_29014;
state_29014 = G__29054;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$state_machine__19507__auto__ = function(state_29014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19507__auto____1.call(this,state_29014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19507__auto____0;
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19507__auto____1;
return cljs$core$async$state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___29042,out))
})();
var state__19573__auto__ = (function (){var statearr_29037 = f__19572__auto__.call(null);
(statearr_29037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___29042);

return statearr_29037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___29042,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29055 = [];
var len__17548__auto___29104 = arguments.length;
var i__17549__auto___29105 = (0);
while(true){
if((i__17549__auto___29105 < len__17548__auto___29104)){
args29055.push((arguments[i__17549__auto___29105]));

var G__29106 = (i__17549__auto___29105 + (1));
i__17549__auto___29105 = G__29106;
continue;
} else {
}
break;
}

var G__29057 = args29055.length;
switch (G__29057) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29055.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19571__auto___29108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___29108,out){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___29108,out){
return (function (state_29081){
var state_val_29082 = (state_29081[(1)]);
if((state_val_29082 === (7))){
var inst_29063 = (state_29081[(7)]);
var inst_29063__$1 = (state_29081[(2)]);
var inst_29064 = (inst_29063__$1 == null);
var inst_29065 = cljs.core.not.call(null,inst_29064);
var state_29081__$1 = (function (){var statearr_29083 = state_29081;
(statearr_29083[(7)] = inst_29063__$1);

return statearr_29083;
})();
if(inst_29065){
var statearr_29084_29109 = state_29081__$1;
(statearr_29084_29109[(1)] = (8));

} else {
var statearr_29085_29110 = state_29081__$1;
(statearr_29085_29110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (1))){
var inst_29058 = (0);
var state_29081__$1 = (function (){var statearr_29086 = state_29081;
(statearr_29086[(8)] = inst_29058);

return statearr_29086;
})();
var statearr_29087_29111 = state_29081__$1;
(statearr_29087_29111[(2)] = null);

(statearr_29087_29111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (4))){
var state_29081__$1 = state_29081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29081__$1,(7),ch);
} else {
if((state_val_29082 === (6))){
var inst_29076 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
var statearr_29088_29112 = state_29081__$1;
(statearr_29088_29112[(2)] = inst_29076);

(statearr_29088_29112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (3))){
var inst_29078 = (state_29081[(2)]);
var inst_29079 = cljs.core.async.close_BANG_.call(null,out);
var state_29081__$1 = (function (){var statearr_29089 = state_29081;
(statearr_29089[(9)] = inst_29078);

return statearr_29089;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29081__$1,inst_29079);
} else {
if((state_val_29082 === (2))){
var inst_29058 = (state_29081[(8)]);
var inst_29060 = (inst_29058 < n);
var state_29081__$1 = state_29081;
if(cljs.core.truth_(inst_29060)){
var statearr_29090_29113 = state_29081__$1;
(statearr_29090_29113[(1)] = (4));

} else {
var statearr_29091_29114 = state_29081__$1;
(statearr_29091_29114[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (11))){
var inst_29058 = (state_29081[(8)]);
var inst_29068 = (state_29081[(2)]);
var inst_29069 = (inst_29058 + (1));
var inst_29058__$1 = inst_29069;
var state_29081__$1 = (function (){var statearr_29092 = state_29081;
(statearr_29092[(10)] = inst_29068);

(statearr_29092[(8)] = inst_29058__$1);

return statearr_29092;
})();
var statearr_29093_29115 = state_29081__$1;
(statearr_29093_29115[(2)] = null);

(statearr_29093_29115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (9))){
var state_29081__$1 = state_29081;
var statearr_29094_29116 = state_29081__$1;
(statearr_29094_29116[(2)] = null);

(statearr_29094_29116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (5))){
var state_29081__$1 = state_29081;
var statearr_29095_29117 = state_29081__$1;
(statearr_29095_29117[(2)] = null);

(statearr_29095_29117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (10))){
var inst_29073 = (state_29081[(2)]);
var state_29081__$1 = state_29081;
var statearr_29096_29118 = state_29081__$1;
(statearr_29096_29118[(2)] = inst_29073);

(statearr_29096_29118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29082 === (8))){
var inst_29063 = (state_29081[(7)]);
var state_29081__$1 = state_29081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29081__$1,(11),out,inst_29063);
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
});})(c__19571__auto___29108,out))
;
return ((function (switch__19506__auto__,c__19571__auto___29108,out){
return (function() {
var cljs$core$async$state_machine__19507__auto__ = null;
var cljs$core$async$state_machine__19507__auto____0 = (function (){
var statearr_29100 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29100[(0)] = cljs$core$async$state_machine__19507__auto__);

(statearr_29100[(1)] = (1));

return statearr_29100;
});
var cljs$core$async$state_machine__19507__auto____1 = (function (state_29081){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_29081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e29101){if((e29101 instanceof Object)){
var ex__19510__auto__ = e29101;
var statearr_29102_29119 = state_29081;
(statearr_29102_29119[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29120 = state_29081;
state_29081 = G__29120;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$state_machine__19507__auto__ = function(state_29081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19507__auto____1.call(this,state_29081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19507__auto____0;
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19507__auto____1;
return cljs$core$async$state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___29108,out))
})();
var state__19573__auto__ = (function (){var statearr_29103 = f__19572__auto__.call(null);
(statearr_29103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___29108);

return statearr_29103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___29108,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29128 = (function (map_LT_,f,ch,meta29129){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29129 = meta29129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29130,meta29129__$1){
var self__ = this;
var _29130__$1 = this;
return (new cljs.core.async.t_cljs$core$async29128(self__.map_LT_,self__.f,self__.ch,meta29129__$1));
});

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29130){
var self__ = this;
var _29130__$1 = this;
return self__.meta29129;
});

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29131 = (function (map_LT_,f,ch,meta29129,_,fn1,meta29132){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29129 = meta29129;
this._ = _;
this.fn1 = fn1;
this.meta29132 = meta29132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29133,meta29132__$1){
var self__ = this;
var _29133__$1 = this;
return (new cljs.core.async.t_cljs$core$async29131(self__.map_LT_,self__.f,self__.ch,self__.meta29129,self__._,self__.fn1,meta29132__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29131.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29133){
var self__ = this;
var _29133__$1 = this;
return self__.meta29132;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29131.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29131.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29131.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29121_SHARP_){
return f1.call(null,(((p1__29121_SHARP_ == null))?null:self__.f.call(null,p1__29121_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29131.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29129","meta29129",1908437554,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29128","cljs.core.async/t_cljs$core$async29128",-1934886226,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29132","meta29132",-245975858,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29131";

cljs.core.async.t_cljs$core$async29131.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async29131");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29131 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29131(map_LT___$1,f__$1,ch__$1,meta29129__$1,___$2,fn1__$1,meta29132){
return (new cljs.core.async.t_cljs$core$async29131(map_LT___$1,f__$1,ch__$1,meta29129__$1,___$2,fn1__$1,meta29132));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29131(self__.map_LT_,self__.f,self__.ch,self__.meta29129,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16478__auto__ = ret;
if(cljs.core.truth_(and__16478__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16478__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29128.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29129","meta29129",1908437554,null)], null);
});

cljs.core.async.t_cljs$core$async29128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29128";

cljs.core.async.t_cljs$core$async29128.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async29128");
});

cljs.core.async.__GT_t_cljs$core$async29128 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29128(map_LT___$1,f__$1,ch__$1,meta29129){
return (new cljs.core.async.t_cljs$core$async29128(map_LT___$1,f__$1,ch__$1,meta29129));
});

}

return (new cljs.core.async.t_cljs$core$async29128(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29137 = (function (map_GT_,f,ch,meta29138){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29138 = meta29138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29139,meta29138__$1){
var self__ = this;
var _29139__$1 = this;
return (new cljs.core.async.t_cljs$core$async29137(self__.map_GT_,self__.f,self__.ch,meta29138__$1));
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29139){
var self__ = this;
var _29139__$1 = this;
return self__.meta29138;
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29138","meta29138",-1389139266,null)], null);
});

cljs.core.async.t_cljs$core$async29137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29137";

cljs.core.async.t_cljs$core$async29137.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async29137");
});

cljs.core.async.__GT_t_cljs$core$async29137 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29137(map_GT___$1,f__$1,ch__$1,meta29138){
return (new cljs.core.async.t_cljs$core$async29137(map_GT___$1,f__$1,ch__$1,meta29138));
});

}

return (new cljs.core.async.t_cljs$core$async29137(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29143 = (function (filter_GT_,p,ch,meta29144){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29144 = meta29144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29145,meta29144__$1){
var self__ = this;
var _29145__$1 = this;
return (new cljs.core.async.t_cljs$core$async29143(self__.filter_GT_,self__.p,self__.ch,meta29144__$1));
});

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29145){
var self__ = this;
var _29145__$1 = this;
return self__.meta29144;
});

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29143.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29144","meta29144",1079442081,null)], null);
});

cljs.core.async.t_cljs$core$async29143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29143";

cljs.core.async.t_cljs$core$async29143.cljs$lang$ctorPrWriter = (function (this__17088__auto__,writer__17089__auto__,opt__17090__auto__){
return cljs.core._write.call(null,writer__17089__auto__,"cljs.core.async/t_cljs$core$async29143");
});

cljs.core.async.__GT_t_cljs$core$async29143 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29143(filter_GT___$1,p__$1,ch__$1,meta29144){
return (new cljs.core.async.t_cljs$core$async29143(filter_GT___$1,p__$1,ch__$1,meta29144));
});

}

return (new cljs.core.async.t_cljs$core$async29143(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29146 = [];
var len__17548__auto___29190 = arguments.length;
var i__17549__auto___29191 = (0);
while(true){
if((i__17549__auto___29191 < len__17548__auto___29190)){
args29146.push((arguments[i__17549__auto___29191]));

var G__29192 = (i__17549__auto___29191 + (1));
i__17549__auto___29191 = G__29192;
continue;
} else {
}
break;
}

var G__29148 = args29146.length;
switch (G__29148) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29146.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19571__auto___29194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___29194,out){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___29194,out){
return (function (state_29169){
var state_val_29170 = (state_29169[(1)]);
if((state_val_29170 === (7))){
var inst_29165 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29171_29195 = state_29169__$1;
(statearr_29171_29195[(2)] = inst_29165);

(statearr_29171_29195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (1))){
var state_29169__$1 = state_29169;
var statearr_29172_29196 = state_29169__$1;
(statearr_29172_29196[(2)] = null);

(statearr_29172_29196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (4))){
var inst_29151 = (state_29169[(7)]);
var inst_29151__$1 = (state_29169[(2)]);
var inst_29152 = (inst_29151__$1 == null);
var state_29169__$1 = (function (){var statearr_29173 = state_29169;
(statearr_29173[(7)] = inst_29151__$1);

return statearr_29173;
})();
if(cljs.core.truth_(inst_29152)){
var statearr_29174_29197 = state_29169__$1;
(statearr_29174_29197[(1)] = (5));

} else {
var statearr_29175_29198 = state_29169__$1;
(statearr_29175_29198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (6))){
var inst_29151 = (state_29169[(7)]);
var inst_29156 = p.call(null,inst_29151);
var state_29169__$1 = state_29169;
if(cljs.core.truth_(inst_29156)){
var statearr_29176_29199 = state_29169__$1;
(statearr_29176_29199[(1)] = (8));

} else {
var statearr_29177_29200 = state_29169__$1;
(statearr_29177_29200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (3))){
var inst_29167 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29169__$1,inst_29167);
} else {
if((state_val_29170 === (2))){
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29169__$1,(4),ch);
} else {
if((state_val_29170 === (11))){
var inst_29159 = (state_29169[(2)]);
var state_29169__$1 = state_29169;
var statearr_29178_29201 = state_29169__$1;
(statearr_29178_29201[(2)] = inst_29159);

(statearr_29178_29201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (9))){
var state_29169__$1 = state_29169;
var statearr_29179_29202 = state_29169__$1;
(statearr_29179_29202[(2)] = null);

(statearr_29179_29202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (5))){
var inst_29154 = cljs.core.async.close_BANG_.call(null,out);
var state_29169__$1 = state_29169;
var statearr_29180_29203 = state_29169__$1;
(statearr_29180_29203[(2)] = inst_29154);

(statearr_29180_29203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (10))){
var inst_29162 = (state_29169[(2)]);
var state_29169__$1 = (function (){var statearr_29181 = state_29169;
(statearr_29181[(8)] = inst_29162);

return statearr_29181;
})();
var statearr_29182_29204 = state_29169__$1;
(statearr_29182_29204[(2)] = null);

(statearr_29182_29204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29170 === (8))){
var inst_29151 = (state_29169[(7)]);
var state_29169__$1 = state_29169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29169__$1,(11),out,inst_29151);
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
});})(c__19571__auto___29194,out))
;
return ((function (switch__19506__auto__,c__19571__auto___29194,out){
return (function() {
var cljs$core$async$state_machine__19507__auto__ = null;
var cljs$core$async$state_machine__19507__auto____0 = (function (){
var statearr_29186 = [null,null,null,null,null,null,null,null,null];
(statearr_29186[(0)] = cljs$core$async$state_machine__19507__auto__);

(statearr_29186[(1)] = (1));

return statearr_29186;
});
var cljs$core$async$state_machine__19507__auto____1 = (function (state_29169){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_29169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e29187){if((e29187 instanceof Object)){
var ex__19510__auto__ = e29187;
var statearr_29188_29205 = state_29169;
(statearr_29188_29205[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29206 = state_29169;
state_29169 = G__29206;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$state_machine__19507__auto__ = function(state_29169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19507__auto____1.call(this,state_29169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19507__auto____0;
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19507__auto____1;
return cljs$core$async$state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___29194,out))
})();
var state__19573__auto__ = (function (){var statearr_29189 = f__19572__auto__.call(null);
(statearr_29189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___29194);

return statearr_29189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___29194,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29207 = [];
var len__17548__auto___29210 = arguments.length;
var i__17549__auto___29211 = (0);
while(true){
if((i__17549__auto___29211 < len__17548__auto___29210)){
args29207.push((arguments[i__17549__auto___29211]));

var G__29212 = (i__17549__auto___29211 + (1));
i__17549__auto___29211 = G__29212;
continue;
} else {
}
break;
}

var G__29209 = args29207.length;
switch (G__29209) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29207.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19571__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto__){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto__){
return (function (state_29379){
var state_val_29380 = (state_29379[(1)]);
if((state_val_29380 === (7))){
var inst_29375 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
var statearr_29381_29422 = state_29379__$1;
(statearr_29381_29422[(2)] = inst_29375);

(statearr_29381_29422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (20))){
var inst_29345 = (state_29379[(7)]);
var inst_29356 = (state_29379[(2)]);
var inst_29357 = cljs.core.next.call(null,inst_29345);
var inst_29331 = inst_29357;
var inst_29332 = null;
var inst_29333 = (0);
var inst_29334 = (0);
var state_29379__$1 = (function (){var statearr_29382 = state_29379;
(statearr_29382[(8)] = inst_29331);

(statearr_29382[(9)] = inst_29334);

(statearr_29382[(10)] = inst_29333);

(statearr_29382[(11)] = inst_29332);

(statearr_29382[(12)] = inst_29356);

return statearr_29382;
})();
var statearr_29383_29423 = state_29379__$1;
(statearr_29383_29423[(2)] = null);

(statearr_29383_29423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (1))){
var state_29379__$1 = state_29379;
var statearr_29384_29424 = state_29379__$1;
(statearr_29384_29424[(2)] = null);

(statearr_29384_29424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (4))){
var inst_29320 = (state_29379[(13)]);
var inst_29320__$1 = (state_29379[(2)]);
var inst_29321 = (inst_29320__$1 == null);
var state_29379__$1 = (function (){var statearr_29385 = state_29379;
(statearr_29385[(13)] = inst_29320__$1);

return statearr_29385;
})();
if(cljs.core.truth_(inst_29321)){
var statearr_29386_29425 = state_29379__$1;
(statearr_29386_29425[(1)] = (5));

} else {
var statearr_29387_29426 = state_29379__$1;
(statearr_29387_29426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (15))){
var state_29379__$1 = state_29379;
var statearr_29391_29427 = state_29379__$1;
(statearr_29391_29427[(2)] = null);

(statearr_29391_29427[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (21))){
var state_29379__$1 = state_29379;
var statearr_29392_29428 = state_29379__$1;
(statearr_29392_29428[(2)] = null);

(statearr_29392_29428[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (13))){
var inst_29331 = (state_29379[(8)]);
var inst_29334 = (state_29379[(9)]);
var inst_29333 = (state_29379[(10)]);
var inst_29332 = (state_29379[(11)]);
var inst_29341 = (state_29379[(2)]);
var inst_29342 = (inst_29334 + (1));
var tmp29388 = inst_29331;
var tmp29389 = inst_29333;
var tmp29390 = inst_29332;
var inst_29331__$1 = tmp29388;
var inst_29332__$1 = tmp29390;
var inst_29333__$1 = tmp29389;
var inst_29334__$1 = inst_29342;
var state_29379__$1 = (function (){var statearr_29393 = state_29379;
(statearr_29393[(8)] = inst_29331__$1);

(statearr_29393[(9)] = inst_29334__$1);

(statearr_29393[(10)] = inst_29333__$1);

(statearr_29393[(11)] = inst_29332__$1);

(statearr_29393[(14)] = inst_29341);

return statearr_29393;
})();
var statearr_29394_29429 = state_29379__$1;
(statearr_29394_29429[(2)] = null);

(statearr_29394_29429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (22))){
var state_29379__$1 = state_29379;
var statearr_29395_29430 = state_29379__$1;
(statearr_29395_29430[(2)] = null);

(statearr_29395_29430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (6))){
var inst_29320 = (state_29379[(13)]);
var inst_29329 = f.call(null,inst_29320);
var inst_29330 = cljs.core.seq.call(null,inst_29329);
var inst_29331 = inst_29330;
var inst_29332 = null;
var inst_29333 = (0);
var inst_29334 = (0);
var state_29379__$1 = (function (){var statearr_29396 = state_29379;
(statearr_29396[(8)] = inst_29331);

(statearr_29396[(9)] = inst_29334);

(statearr_29396[(10)] = inst_29333);

(statearr_29396[(11)] = inst_29332);

return statearr_29396;
})();
var statearr_29397_29431 = state_29379__$1;
(statearr_29397_29431[(2)] = null);

(statearr_29397_29431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (17))){
var inst_29345 = (state_29379[(7)]);
var inst_29349 = cljs.core.chunk_first.call(null,inst_29345);
var inst_29350 = cljs.core.chunk_rest.call(null,inst_29345);
var inst_29351 = cljs.core.count.call(null,inst_29349);
var inst_29331 = inst_29350;
var inst_29332 = inst_29349;
var inst_29333 = inst_29351;
var inst_29334 = (0);
var state_29379__$1 = (function (){var statearr_29398 = state_29379;
(statearr_29398[(8)] = inst_29331);

(statearr_29398[(9)] = inst_29334);

(statearr_29398[(10)] = inst_29333);

(statearr_29398[(11)] = inst_29332);

return statearr_29398;
})();
var statearr_29399_29432 = state_29379__$1;
(statearr_29399_29432[(2)] = null);

(statearr_29399_29432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (3))){
var inst_29377 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29379__$1,inst_29377);
} else {
if((state_val_29380 === (12))){
var inst_29365 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
var statearr_29400_29433 = state_29379__$1;
(statearr_29400_29433[(2)] = inst_29365);

(statearr_29400_29433[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (2))){
var state_29379__$1 = state_29379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29379__$1,(4),in$);
} else {
if((state_val_29380 === (23))){
var inst_29373 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
var statearr_29401_29434 = state_29379__$1;
(statearr_29401_29434[(2)] = inst_29373);

(statearr_29401_29434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (19))){
var inst_29360 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
var statearr_29402_29435 = state_29379__$1;
(statearr_29402_29435[(2)] = inst_29360);

(statearr_29402_29435[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (11))){
var inst_29331 = (state_29379[(8)]);
var inst_29345 = (state_29379[(7)]);
var inst_29345__$1 = cljs.core.seq.call(null,inst_29331);
var state_29379__$1 = (function (){var statearr_29403 = state_29379;
(statearr_29403[(7)] = inst_29345__$1);

return statearr_29403;
})();
if(inst_29345__$1){
var statearr_29404_29436 = state_29379__$1;
(statearr_29404_29436[(1)] = (14));

} else {
var statearr_29405_29437 = state_29379__$1;
(statearr_29405_29437[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (9))){
var inst_29367 = (state_29379[(2)]);
var inst_29368 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29379__$1 = (function (){var statearr_29406 = state_29379;
(statearr_29406[(15)] = inst_29367);

return statearr_29406;
})();
if(cljs.core.truth_(inst_29368)){
var statearr_29407_29438 = state_29379__$1;
(statearr_29407_29438[(1)] = (21));

} else {
var statearr_29408_29439 = state_29379__$1;
(statearr_29408_29439[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (5))){
var inst_29323 = cljs.core.async.close_BANG_.call(null,out);
var state_29379__$1 = state_29379;
var statearr_29409_29440 = state_29379__$1;
(statearr_29409_29440[(2)] = inst_29323);

(statearr_29409_29440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (14))){
var inst_29345 = (state_29379[(7)]);
var inst_29347 = cljs.core.chunked_seq_QMARK_.call(null,inst_29345);
var state_29379__$1 = state_29379;
if(inst_29347){
var statearr_29410_29441 = state_29379__$1;
(statearr_29410_29441[(1)] = (17));

} else {
var statearr_29411_29442 = state_29379__$1;
(statearr_29411_29442[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (16))){
var inst_29363 = (state_29379[(2)]);
var state_29379__$1 = state_29379;
var statearr_29412_29443 = state_29379__$1;
(statearr_29412_29443[(2)] = inst_29363);

(statearr_29412_29443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29380 === (10))){
var inst_29334 = (state_29379[(9)]);
var inst_29332 = (state_29379[(11)]);
var inst_29339 = cljs.core._nth.call(null,inst_29332,inst_29334);
var state_29379__$1 = state_29379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29379__$1,(13),out,inst_29339);
} else {
if((state_val_29380 === (18))){
var inst_29345 = (state_29379[(7)]);
var inst_29354 = cljs.core.first.call(null,inst_29345);
var state_29379__$1 = state_29379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29379__$1,(20),out,inst_29354);
} else {
if((state_val_29380 === (8))){
var inst_29334 = (state_29379[(9)]);
var inst_29333 = (state_29379[(10)]);
var inst_29336 = (inst_29334 < inst_29333);
var inst_29337 = inst_29336;
var state_29379__$1 = state_29379;
if(cljs.core.truth_(inst_29337)){
var statearr_29413_29444 = state_29379__$1;
(statearr_29413_29444[(1)] = (10));

} else {
var statearr_29414_29445 = state_29379__$1;
(statearr_29414_29445[(1)] = (11));

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
});})(c__19571__auto__))
;
return ((function (switch__19506__auto__,c__19571__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19507__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19507__auto____0 = (function (){
var statearr_29418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29418[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19507__auto__);

(statearr_29418[(1)] = (1));

return statearr_29418;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19507__auto____1 = (function (state_29379){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_29379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e29419){if((e29419 instanceof Object)){
var ex__19510__auto__ = e29419;
var statearr_29420_29446 = state_29379;
(statearr_29420_29446[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29447 = state_29379;
state_29379 = G__29447;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19507__auto__ = function(state_29379){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19507__auto____1.call(this,state_29379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19507__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19507__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto__))
})();
var state__19573__auto__ = (function (){var statearr_29421 = f__19572__auto__.call(null);
(statearr_29421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto__);

return statearr_29421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto__))
);

return c__19571__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29448 = [];
var len__17548__auto___29451 = arguments.length;
var i__17549__auto___29452 = (0);
while(true){
if((i__17549__auto___29452 < len__17548__auto___29451)){
args29448.push((arguments[i__17549__auto___29452]));

var G__29453 = (i__17549__auto___29452 + (1));
i__17549__auto___29452 = G__29453;
continue;
} else {
}
break;
}

var G__29450 = args29448.length;
switch (G__29450) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29448.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29455 = [];
var len__17548__auto___29458 = arguments.length;
var i__17549__auto___29459 = (0);
while(true){
if((i__17549__auto___29459 < len__17548__auto___29458)){
args29455.push((arguments[i__17549__auto___29459]));

var G__29460 = (i__17549__auto___29459 + (1));
i__17549__auto___29459 = G__29460;
continue;
} else {
}
break;
}

var G__29457 = args29455.length;
switch (G__29457) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29455.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29462 = [];
var len__17548__auto___29513 = arguments.length;
var i__17549__auto___29514 = (0);
while(true){
if((i__17549__auto___29514 < len__17548__auto___29513)){
args29462.push((arguments[i__17549__auto___29514]));

var G__29515 = (i__17549__auto___29514 + (1));
i__17549__auto___29514 = G__29515;
continue;
} else {
}
break;
}

var G__29464 = args29462.length;
switch (G__29464) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29462.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19571__auto___29517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___29517,out){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___29517,out){
return (function (state_29488){
var state_val_29489 = (state_29488[(1)]);
if((state_val_29489 === (7))){
var inst_29483 = (state_29488[(2)]);
var state_29488__$1 = state_29488;
var statearr_29490_29518 = state_29488__$1;
(statearr_29490_29518[(2)] = inst_29483);

(statearr_29490_29518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (1))){
var inst_29465 = null;
var state_29488__$1 = (function (){var statearr_29491 = state_29488;
(statearr_29491[(7)] = inst_29465);

return statearr_29491;
})();
var statearr_29492_29519 = state_29488__$1;
(statearr_29492_29519[(2)] = null);

(statearr_29492_29519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (4))){
var inst_29468 = (state_29488[(8)]);
var inst_29468__$1 = (state_29488[(2)]);
var inst_29469 = (inst_29468__$1 == null);
var inst_29470 = cljs.core.not.call(null,inst_29469);
var state_29488__$1 = (function (){var statearr_29493 = state_29488;
(statearr_29493[(8)] = inst_29468__$1);

return statearr_29493;
})();
if(inst_29470){
var statearr_29494_29520 = state_29488__$1;
(statearr_29494_29520[(1)] = (5));

} else {
var statearr_29495_29521 = state_29488__$1;
(statearr_29495_29521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (6))){
var state_29488__$1 = state_29488;
var statearr_29496_29522 = state_29488__$1;
(statearr_29496_29522[(2)] = null);

(statearr_29496_29522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (3))){
var inst_29485 = (state_29488[(2)]);
var inst_29486 = cljs.core.async.close_BANG_.call(null,out);
var state_29488__$1 = (function (){var statearr_29497 = state_29488;
(statearr_29497[(9)] = inst_29485);

return statearr_29497;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29488__$1,inst_29486);
} else {
if((state_val_29489 === (2))){
var state_29488__$1 = state_29488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29488__$1,(4),ch);
} else {
if((state_val_29489 === (11))){
var inst_29468 = (state_29488[(8)]);
var inst_29477 = (state_29488[(2)]);
var inst_29465 = inst_29468;
var state_29488__$1 = (function (){var statearr_29498 = state_29488;
(statearr_29498[(7)] = inst_29465);

(statearr_29498[(10)] = inst_29477);

return statearr_29498;
})();
var statearr_29499_29523 = state_29488__$1;
(statearr_29499_29523[(2)] = null);

(statearr_29499_29523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (9))){
var inst_29468 = (state_29488[(8)]);
var state_29488__$1 = state_29488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29488__$1,(11),out,inst_29468);
} else {
if((state_val_29489 === (5))){
var inst_29468 = (state_29488[(8)]);
var inst_29465 = (state_29488[(7)]);
var inst_29472 = cljs.core._EQ_.call(null,inst_29468,inst_29465);
var state_29488__$1 = state_29488;
if(inst_29472){
var statearr_29501_29524 = state_29488__$1;
(statearr_29501_29524[(1)] = (8));

} else {
var statearr_29502_29525 = state_29488__$1;
(statearr_29502_29525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (10))){
var inst_29480 = (state_29488[(2)]);
var state_29488__$1 = state_29488;
var statearr_29503_29526 = state_29488__$1;
(statearr_29503_29526[(2)] = inst_29480);

(statearr_29503_29526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29489 === (8))){
var inst_29465 = (state_29488[(7)]);
var tmp29500 = inst_29465;
var inst_29465__$1 = tmp29500;
var state_29488__$1 = (function (){var statearr_29504 = state_29488;
(statearr_29504[(7)] = inst_29465__$1);

return statearr_29504;
})();
var statearr_29505_29527 = state_29488__$1;
(statearr_29505_29527[(2)] = null);

(statearr_29505_29527[(1)] = (2));


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
});})(c__19571__auto___29517,out))
;
return ((function (switch__19506__auto__,c__19571__auto___29517,out){
return (function() {
var cljs$core$async$state_machine__19507__auto__ = null;
var cljs$core$async$state_machine__19507__auto____0 = (function (){
var statearr_29509 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29509[(0)] = cljs$core$async$state_machine__19507__auto__);

(statearr_29509[(1)] = (1));

return statearr_29509;
});
var cljs$core$async$state_machine__19507__auto____1 = (function (state_29488){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_29488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e29510){if((e29510 instanceof Object)){
var ex__19510__auto__ = e29510;
var statearr_29511_29528 = state_29488;
(statearr_29511_29528[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29529 = state_29488;
state_29488 = G__29529;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$state_machine__19507__auto__ = function(state_29488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19507__auto____1.call(this,state_29488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19507__auto____0;
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19507__auto____1;
return cljs$core$async$state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___29517,out))
})();
var state__19573__auto__ = (function (){var statearr_29512 = f__19572__auto__.call(null);
(statearr_29512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___29517);

return statearr_29512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___29517,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29530 = [];
var len__17548__auto___29600 = arguments.length;
var i__17549__auto___29601 = (0);
while(true){
if((i__17549__auto___29601 < len__17548__auto___29600)){
args29530.push((arguments[i__17549__auto___29601]));

var G__29602 = (i__17549__auto___29601 + (1));
i__17549__auto___29601 = G__29602;
continue;
} else {
}
break;
}

var G__29532 = args29530.length;
switch (G__29532) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29530.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19571__auto___29604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___29604,out){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___29604,out){
return (function (state_29570){
var state_val_29571 = (state_29570[(1)]);
if((state_val_29571 === (7))){
var inst_29566 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
var statearr_29572_29605 = state_29570__$1;
(statearr_29572_29605[(2)] = inst_29566);

(statearr_29572_29605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (1))){
var inst_29533 = (new Array(n));
var inst_29534 = inst_29533;
var inst_29535 = (0);
var state_29570__$1 = (function (){var statearr_29573 = state_29570;
(statearr_29573[(7)] = inst_29534);

(statearr_29573[(8)] = inst_29535);

return statearr_29573;
})();
var statearr_29574_29606 = state_29570__$1;
(statearr_29574_29606[(2)] = null);

(statearr_29574_29606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (4))){
var inst_29538 = (state_29570[(9)]);
var inst_29538__$1 = (state_29570[(2)]);
var inst_29539 = (inst_29538__$1 == null);
var inst_29540 = cljs.core.not.call(null,inst_29539);
var state_29570__$1 = (function (){var statearr_29575 = state_29570;
(statearr_29575[(9)] = inst_29538__$1);

return statearr_29575;
})();
if(inst_29540){
var statearr_29576_29607 = state_29570__$1;
(statearr_29576_29607[(1)] = (5));

} else {
var statearr_29577_29608 = state_29570__$1;
(statearr_29577_29608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (15))){
var inst_29560 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
var statearr_29578_29609 = state_29570__$1;
(statearr_29578_29609[(2)] = inst_29560);

(statearr_29578_29609[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (13))){
var state_29570__$1 = state_29570;
var statearr_29579_29610 = state_29570__$1;
(statearr_29579_29610[(2)] = null);

(statearr_29579_29610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (6))){
var inst_29535 = (state_29570[(8)]);
var inst_29556 = (inst_29535 > (0));
var state_29570__$1 = state_29570;
if(cljs.core.truth_(inst_29556)){
var statearr_29580_29611 = state_29570__$1;
(statearr_29580_29611[(1)] = (12));

} else {
var statearr_29581_29612 = state_29570__$1;
(statearr_29581_29612[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (3))){
var inst_29568 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29570__$1,inst_29568);
} else {
if((state_val_29571 === (12))){
var inst_29534 = (state_29570[(7)]);
var inst_29558 = cljs.core.vec.call(null,inst_29534);
var state_29570__$1 = state_29570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29570__$1,(15),out,inst_29558);
} else {
if((state_val_29571 === (2))){
var state_29570__$1 = state_29570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29570__$1,(4),ch);
} else {
if((state_val_29571 === (11))){
var inst_29550 = (state_29570[(2)]);
var inst_29551 = (new Array(n));
var inst_29534 = inst_29551;
var inst_29535 = (0);
var state_29570__$1 = (function (){var statearr_29582 = state_29570;
(statearr_29582[(10)] = inst_29550);

(statearr_29582[(7)] = inst_29534);

(statearr_29582[(8)] = inst_29535);

return statearr_29582;
})();
var statearr_29583_29613 = state_29570__$1;
(statearr_29583_29613[(2)] = null);

(statearr_29583_29613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (9))){
var inst_29534 = (state_29570[(7)]);
var inst_29548 = cljs.core.vec.call(null,inst_29534);
var state_29570__$1 = state_29570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29570__$1,(11),out,inst_29548);
} else {
if((state_val_29571 === (5))){
var inst_29538 = (state_29570[(9)]);
var inst_29543 = (state_29570[(11)]);
var inst_29534 = (state_29570[(7)]);
var inst_29535 = (state_29570[(8)]);
var inst_29542 = (inst_29534[inst_29535] = inst_29538);
var inst_29543__$1 = (inst_29535 + (1));
var inst_29544 = (inst_29543__$1 < n);
var state_29570__$1 = (function (){var statearr_29584 = state_29570;
(statearr_29584[(12)] = inst_29542);

(statearr_29584[(11)] = inst_29543__$1);

return statearr_29584;
})();
if(cljs.core.truth_(inst_29544)){
var statearr_29585_29614 = state_29570__$1;
(statearr_29585_29614[(1)] = (8));

} else {
var statearr_29586_29615 = state_29570__$1;
(statearr_29586_29615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (14))){
var inst_29563 = (state_29570[(2)]);
var inst_29564 = cljs.core.async.close_BANG_.call(null,out);
var state_29570__$1 = (function (){var statearr_29588 = state_29570;
(statearr_29588[(13)] = inst_29563);

return statearr_29588;
})();
var statearr_29589_29616 = state_29570__$1;
(statearr_29589_29616[(2)] = inst_29564);

(statearr_29589_29616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (10))){
var inst_29554 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
var statearr_29590_29617 = state_29570__$1;
(statearr_29590_29617[(2)] = inst_29554);

(statearr_29590_29617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (8))){
var inst_29543 = (state_29570[(11)]);
var inst_29534 = (state_29570[(7)]);
var tmp29587 = inst_29534;
var inst_29534__$1 = tmp29587;
var inst_29535 = inst_29543;
var state_29570__$1 = (function (){var statearr_29591 = state_29570;
(statearr_29591[(7)] = inst_29534__$1);

(statearr_29591[(8)] = inst_29535);

return statearr_29591;
})();
var statearr_29592_29618 = state_29570__$1;
(statearr_29592_29618[(2)] = null);

(statearr_29592_29618[(1)] = (2));


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
});})(c__19571__auto___29604,out))
;
return ((function (switch__19506__auto__,c__19571__auto___29604,out){
return (function() {
var cljs$core$async$state_machine__19507__auto__ = null;
var cljs$core$async$state_machine__19507__auto____0 = (function (){
var statearr_29596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29596[(0)] = cljs$core$async$state_machine__19507__auto__);

(statearr_29596[(1)] = (1));

return statearr_29596;
});
var cljs$core$async$state_machine__19507__auto____1 = (function (state_29570){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_29570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e29597){if((e29597 instanceof Object)){
var ex__19510__auto__ = e29597;
var statearr_29598_29619 = state_29570;
(statearr_29598_29619[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29620 = state_29570;
state_29570 = G__29620;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$state_machine__19507__auto__ = function(state_29570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19507__auto____1.call(this,state_29570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19507__auto____0;
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19507__auto____1;
return cljs$core$async$state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___29604,out))
})();
var state__19573__auto__ = (function (){var statearr_29599 = f__19572__auto__.call(null);
(statearr_29599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___29604);

return statearr_29599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___29604,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29621 = [];
var len__17548__auto___29695 = arguments.length;
var i__17549__auto___29696 = (0);
while(true){
if((i__17549__auto___29696 < len__17548__auto___29695)){
args29621.push((arguments[i__17549__auto___29696]));

var G__29697 = (i__17549__auto___29696 + (1));
i__17549__auto___29696 = G__29697;
continue;
} else {
}
break;
}

var G__29623 = args29621.length;
switch (G__29623) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29621.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19571__auto___29699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19571__auto___29699,out){
return (function (){
var f__19572__auto__ = (function (){var switch__19506__auto__ = ((function (c__19571__auto___29699,out){
return (function (state_29665){
var state_val_29666 = (state_29665[(1)]);
if((state_val_29666 === (7))){
var inst_29661 = (state_29665[(2)]);
var state_29665__$1 = state_29665;
var statearr_29667_29700 = state_29665__$1;
(statearr_29667_29700[(2)] = inst_29661);

(statearr_29667_29700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (1))){
var inst_29624 = [];
var inst_29625 = inst_29624;
var inst_29626 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29665__$1 = (function (){var statearr_29668 = state_29665;
(statearr_29668[(7)] = inst_29625);

(statearr_29668[(8)] = inst_29626);

return statearr_29668;
})();
var statearr_29669_29701 = state_29665__$1;
(statearr_29669_29701[(2)] = null);

(statearr_29669_29701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (4))){
var inst_29629 = (state_29665[(9)]);
var inst_29629__$1 = (state_29665[(2)]);
var inst_29630 = (inst_29629__$1 == null);
var inst_29631 = cljs.core.not.call(null,inst_29630);
var state_29665__$1 = (function (){var statearr_29670 = state_29665;
(statearr_29670[(9)] = inst_29629__$1);

return statearr_29670;
})();
if(inst_29631){
var statearr_29671_29702 = state_29665__$1;
(statearr_29671_29702[(1)] = (5));

} else {
var statearr_29672_29703 = state_29665__$1;
(statearr_29672_29703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (15))){
var inst_29655 = (state_29665[(2)]);
var state_29665__$1 = state_29665;
var statearr_29673_29704 = state_29665__$1;
(statearr_29673_29704[(2)] = inst_29655);

(statearr_29673_29704[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (13))){
var state_29665__$1 = state_29665;
var statearr_29674_29705 = state_29665__$1;
(statearr_29674_29705[(2)] = null);

(statearr_29674_29705[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (6))){
var inst_29625 = (state_29665[(7)]);
var inst_29650 = inst_29625.length;
var inst_29651 = (inst_29650 > (0));
var state_29665__$1 = state_29665;
if(cljs.core.truth_(inst_29651)){
var statearr_29675_29706 = state_29665__$1;
(statearr_29675_29706[(1)] = (12));

} else {
var statearr_29676_29707 = state_29665__$1;
(statearr_29676_29707[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (3))){
var inst_29663 = (state_29665[(2)]);
var state_29665__$1 = state_29665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29665__$1,inst_29663);
} else {
if((state_val_29666 === (12))){
var inst_29625 = (state_29665[(7)]);
var inst_29653 = cljs.core.vec.call(null,inst_29625);
var state_29665__$1 = state_29665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29665__$1,(15),out,inst_29653);
} else {
if((state_val_29666 === (2))){
var state_29665__$1 = state_29665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29665__$1,(4),ch);
} else {
if((state_val_29666 === (11))){
var inst_29629 = (state_29665[(9)]);
var inst_29633 = (state_29665[(10)]);
var inst_29643 = (state_29665[(2)]);
var inst_29644 = [];
var inst_29645 = inst_29644.push(inst_29629);
var inst_29625 = inst_29644;
var inst_29626 = inst_29633;
var state_29665__$1 = (function (){var statearr_29677 = state_29665;
(statearr_29677[(11)] = inst_29643);

(statearr_29677[(12)] = inst_29645);

(statearr_29677[(7)] = inst_29625);

(statearr_29677[(8)] = inst_29626);

return statearr_29677;
})();
var statearr_29678_29708 = state_29665__$1;
(statearr_29678_29708[(2)] = null);

(statearr_29678_29708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (9))){
var inst_29625 = (state_29665[(7)]);
var inst_29641 = cljs.core.vec.call(null,inst_29625);
var state_29665__$1 = state_29665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29665__$1,(11),out,inst_29641);
} else {
if((state_val_29666 === (5))){
var inst_29629 = (state_29665[(9)]);
var inst_29633 = (state_29665[(10)]);
var inst_29626 = (state_29665[(8)]);
var inst_29633__$1 = f.call(null,inst_29629);
var inst_29634 = cljs.core._EQ_.call(null,inst_29633__$1,inst_29626);
var inst_29635 = cljs.core.keyword_identical_QMARK_.call(null,inst_29626,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29636 = (inst_29634) || (inst_29635);
var state_29665__$1 = (function (){var statearr_29679 = state_29665;
(statearr_29679[(10)] = inst_29633__$1);

return statearr_29679;
})();
if(cljs.core.truth_(inst_29636)){
var statearr_29680_29709 = state_29665__$1;
(statearr_29680_29709[(1)] = (8));

} else {
var statearr_29681_29710 = state_29665__$1;
(statearr_29681_29710[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (14))){
var inst_29658 = (state_29665[(2)]);
var inst_29659 = cljs.core.async.close_BANG_.call(null,out);
var state_29665__$1 = (function (){var statearr_29683 = state_29665;
(statearr_29683[(13)] = inst_29658);

return statearr_29683;
})();
var statearr_29684_29711 = state_29665__$1;
(statearr_29684_29711[(2)] = inst_29659);

(statearr_29684_29711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (10))){
var inst_29648 = (state_29665[(2)]);
var state_29665__$1 = state_29665;
var statearr_29685_29712 = state_29665__$1;
(statearr_29685_29712[(2)] = inst_29648);

(statearr_29685_29712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29666 === (8))){
var inst_29629 = (state_29665[(9)]);
var inst_29633 = (state_29665[(10)]);
var inst_29625 = (state_29665[(7)]);
var inst_29638 = inst_29625.push(inst_29629);
var tmp29682 = inst_29625;
var inst_29625__$1 = tmp29682;
var inst_29626 = inst_29633;
var state_29665__$1 = (function (){var statearr_29686 = state_29665;
(statearr_29686[(14)] = inst_29638);

(statearr_29686[(7)] = inst_29625__$1);

(statearr_29686[(8)] = inst_29626);

return statearr_29686;
})();
var statearr_29687_29713 = state_29665__$1;
(statearr_29687_29713[(2)] = null);

(statearr_29687_29713[(1)] = (2));


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
});})(c__19571__auto___29699,out))
;
return ((function (switch__19506__auto__,c__19571__auto___29699,out){
return (function() {
var cljs$core$async$state_machine__19507__auto__ = null;
var cljs$core$async$state_machine__19507__auto____0 = (function (){
var statearr_29691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29691[(0)] = cljs$core$async$state_machine__19507__auto__);

(statearr_29691[(1)] = (1));

return statearr_29691;
});
var cljs$core$async$state_machine__19507__auto____1 = (function (state_29665){
while(true){
var ret_value__19508__auto__ = (function (){try{while(true){
var result__19509__auto__ = switch__19506__auto__.call(null,state_29665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19509__auto__;
}
break;
}
}catch (e29692){if((e29692 instanceof Object)){
var ex__19510__auto__ = e29692;
var statearr_29693_29714 = state_29665;
(statearr_29693_29714[(5)] = ex__19510__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19508__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29715 = state_29665;
state_29665 = G__29715;
continue;
} else {
return ret_value__19508__auto__;
}
break;
}
});
cljs$core$async$state_machine__19507__auto__ = function(state_29665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19507__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19507__auto____1.call(this,state_29665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19507__auto____0;
cljs$core$async$state_machine__19507__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19507__auto____1;
return cljs$core$async$state_machine__19507__auto__;
})()
;})(switch__19506__auto__,c__19571__auto___29699,out))
})();
var state__19573__auto__ = (function (){var statearr_29694 = f__19572__auto__.call(null);
(statearr_29694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19571__auto___29699);

return statearr_29694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19573__auto__);
});})(c__19571__auto___29699,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1441471072791