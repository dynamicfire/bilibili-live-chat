(function(e){function t(t){for(var a,i,u=t[0],o=t[1],s=t[2],l=0,d=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,u=1;u<n.length;u++){var o=n[u];0!==r[o]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={live:0},c=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=o;c.push([1,"chunk-common","chunk-live-vendors"]),n()})({1:function(e,t,n){e.exports=n("bf33")},2:function(e,t){},"2cf40":function(e,t,n){"use strict";n("cbee")},3:function(e,t){},"587d":function(e,t,n){"use strict";n("ff78")},7899:function(e,t,n){"use strict";n("fac7")},bf33:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("5595");var a=n("830f"),r=n("5c40");function c(e,t){var n=Object(r["v"])("danmaku-item"),a=Object(r["v"])("live");return e.errMsg?Object(r["k"])(n,{key:0,type:"warning",message:e.errMsg},null,8,["message"]):e.ready?Object(r["k"])(a,Object(r["n"])({key:1},e.props),null,16):Object(r["h"])("",!0)}n("18a5");var i=n("a1e9"),u=n("f6cc"),o=(n("d3b7"),n("ac1f"),n("5319"),n("72bf")),s=!0,f=function(e){return s=e},l=function(e){return fetch(e).then((function(e){return e.json()}))},d=function(e){return fetch("https://json2jsonp.com/?".concat(Object(o["stringify"])({url:e,callback:"_"}))).then((function(e){return e.text()})).then((function(e){return JSON.parse(e.replace(/^_\((.*)\)$/,"$1"))}))},b=function(e){return s?l(e):d(e)},p=(n("99af"),n("4de4"),n("a630"),n("caad"),n("4ec9"),n("4fad"),n("2532"),n("3ca3"),n("1276"),n("ddb0"),n("96cf"),n("1da1")),m=n("3835"),v=n("4416"),j=n.n(v),O=n("3bb8"),g=n.n(O),h=n("b047"),k=n.n(h),y=n("5d2d"),w=function(){return Math.floor(Date.now()/864e5)},x={method:"false",expireDay:7},L=function(e){return Object.assign(x,e)},S=function(e){switch(x.method){case"imjad":return l("https://api.imjad.cn/bilibili/v2/?get=space&vmid=".concat(e,"&pagesize=1")).then((function(e){var t,n;return null===(t=e.data)||void 0===t||null===(n=t.card)||void 0===n?void 0:n.face}));default:return b("https://api.bilibili.com/x/space/acc/info?mid=".concat(e)).then((function(e){var t;return null===(t=e.data)||void 0===t?void 0:t.face}))}},R=function(e){var t=Object(m["a"])(e,2),n=t[0],a=t[1];a||(a="member/noface.jpg");var r=j()(a.split(".")),c="https://i".concat(n,".hdslb.com/bfs/face/").concat(a);return"gif"===r?[[c,0]]:[["".concat(c,"_48x48.").concat(r),2e3],[c,5e3]]},D=function(e){var t=Object(m["a"])(e,3),n=t[2];return!n||w()-n<=x.expireDay},M=new Map(Object.entries(Object(y["a"])("face",{})).filter((function(e){var t=Object(m["a"])(e,2),n=t[1];return!D(n)}))),T=k()((function(){return Object(y["b"])("face",g()(Array.from(M)))}),5e3,{maxWait:5e3}),N=function(e,t){var n;if(t){var a=parseInt(null===(n=/\/\/i(\d+)\./.exec(t))||void 0===n?void 0:n[1])||0,r=j()(t.split("/")),c=r.includes("noface")?[0,null,w()]:[a,r,w()];return M.set(e,c),T(),c}},P=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=M.get(t),!n||D(n)){e.next=3;break}return e.abrupt("return",R(n));case 3:return e.t0=R,e.t1=N,e.t2=t,e.next=8,S(t);case 8:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.abrupt("return",(0,e.t0)(e.t4));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I={id:"live"};function _(e,t){var n=Object(r["v"])("danmaku-list");return Object(r["s"])(),Object(r["g"])("div",I,[e.props.giftPin?Object(r["k"])(n,Object(r["n"])({key:0,ref:"giftPinList"},e.props,{"gift-show-face":e.giftShowFace,"is-gift-list":!0}),null,16,["gift-show-face"]):Object(r["h"])("",!0),Object(r["k"])(n,Object(r["n"])({ref:"danmakuList"},e.props),null,16)])}var F=n("5530"),B=n("96ac"),E={key:0,class:"danmaku-list-pinned",ref:"danmakuListRef"},G={class:"danmaku-list hidden"},q={class:"danmaku-list absolute",ref:"giftListRef"},A={key:1,class:"danmaku-list",ref:"danmakuListRef"},C={key:0,class:"danmaku-list-placeholder"};function H(e,t){var n=Object(r["v"])("danmaku-item");return e.isGiftList?(Object(r["s"])(),Object(r["g"])("div",E,[Object(r["k"])("div",G,[(Object(r["s"])(!0),Object(r["g"])(r["c"],null,Object(r["t"])(e.giftPin,(function(t){return Object(r["s"])(),Object(r["g"])(n,{key:t,"show-face":e.giftShowFace,type:"gift",uname:"某人",giftName:"礼物",num:t},null,8,["show-face","num"])})),128))]),Object(r["k"])("div",q,[(Object(r["s"])(!0),Object(r["g"])(r["c"],null,Object(r["t"])(e.danmakuList,(function(e){return Object(r["s"])(),Object(r["g"])(n,Object(r["n"])({key:e.key},e.props,{hidden:e.hidden,ref:function(t){return e.el=t}}),null,16,["hidden"])})),128))],512)],512)):(Object(r["s"])(),Object(r["g"])("div",A,["bottom"===e.display?(Object(r["s"])(),Object(r["g"])("div",C)):Object(r["h"])("",!0),(Object(r["s"])(!0),Object(r["g"])(r["c"],null,Object(r["t"])(e.danmakuList,(function(e){return Object(r["s"])(),Object(r["g"])(n,Object(r["n"])({key:e.key},e.props,{hidden:e.hidden,ref:function(t){return e.el=t}}),null,16,["hidden"])})),128))],512))}n("7db0"),n("c740"),n("4160"),n("d81d"),n("a434"),n("b64b"),n("159b");var z=n("443d"),J=n.n(z),$=n("ec26"),W=n("53ca"),K=n("b85c"),U=function(e,t){return new Promise((function(n,a){var r=0,c=new XMLHttpRequest,i=setTimeout((function(){c.abort()}),1e4),u=t?setTimeout((function(){0===r&&c.abort()}),t):null;c.open("GET",e,!0),c.onprogress=function(e){e.lengthComputable&&(r=e.loaded/e.total)},c.onload=function(){clearTimeout(u),clearTimeout(i),n(e)},c.onerror=a,c.onabort=a,c.send()}))},X=function(){var e=Object(p["a"])(regeneratorRuntime.mark((function e(t){var n,a,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=Object(K["a"])(t),e.prev=1,r=regeneratorRuntime.mark((function e(){var t,n,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(m["a"])(a.value,2),n=t[0],r=t[1],e.next=3,U(n,r).catch((function(){console.warn("Timeout",n)}));case 3:if(c=e.sent,!c){e.next=6;break}return e.abrupt("return",{v:c});case 6:case"end":return e.stop()}}),e)})),n.s();case 4:if((a=n.n()).done){e.next=11;break}return e.delegateYield(r(),"t0",6);case 6:if(c=e.t0,"object"!==Object(W["a"])(c)){e.next=9;break}return e.abrupt("return",c.v);case 9:e.next=4;break;case 11:e.next=16;break;case 13:e.prev=13,e.t1=e["catch"](1),n.e(e.t1);case 16:return e.prev=16,n.f(),e.finish(16);case 19:return e.abrupt("return",t[0][0]||"");case 20:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));return function(t){return e.apply(this,arguments)}}(),Y={key:0,class:"danmaku-content"},Q={class:"danmaku-message"},V={key:1,class:"danmaku-content"},Z=Object(r["k"])("span",{class:"danmaku-message"},"感谢 ",-1),ee={class:"danmaku-author-name"},te=Object(r["k"])("span",{class:"danmaku-message"}," 赠送 ",-1),ne={class:"danmaku-gift-name"},ae=Object(r["k"])("span",{class:"danmaku-message"}," × ",-1),re={class:"danmaku-gift-num"},ce={key:2,class:"danmaku-content"},ie={class:"danmaku-message"};function ue(e,t){return Object(r["s"])(),Object(r["g"])("div",{class:["danmaku-item",{hidden:e.isHidden}]},[e.showFace?(Object(r["s"])(),Object(r["g"])("div",{key:0,class:"danmaku-author-face",style:{backgroundImage:e.face?"url(".concat(e.face,")"):""}},null,4)):Object(r["h"])("",!0),"message"===e.type?(Object(r["s"])(),Object(r["g"])("div",Y,[Object(r["k"])("span",{class:["danmaku-author-name with-colon",{anchor:e.isAnchor,owner:e.isOwner}]},Object(r["y"])(e.uname),3),Object(r["k"])("span",Q,Object(r["y"])(e.message),1)])):"gift"===e.type?(Object(r["s"])(),Object(r["g"])("div",V,[Z,Object(r["k"])("span",ee,Object(r["y"])(e.uname),1),te,Object(r["k"])("span",ne,Object(r["y"])(e.giftName),1),ae,Object(r["k"])("span",re,Object(r["y"])(e.num),1)])):"warning"===e.type?(Object(r["s"])(),Object(r["g"])("div",ce,[Object(r["k"])("span",ie,Object(r["y"])(e.message),1)])):Object(r["h"])("",!0)],2)}n("a9e3");var oe={props:{type:{type:String,default:"message"},showFace:Boolean,face:String,uid:Number,uname:String,message:String,isAnchor:Boolean,isOwner:Boolean,action:String,giftName:String,num:Number,stay:Number,hidden:Boolean},setup:function(e){var t=Object(i["i"])(!1);if(e.stay){var n=setTimeout((function(){return t.value=!0}),e.stay);Object(r["p"])((function(){return clearTimeout(n)}))}var a=Object(r["f"])((function(){return e.hidden||t.value}));return Object(F["a"])(Object(F["a"])({},Object(i["n"])(e)),{},{isHidden:a})}};n("587d");oe.render=ue;var se=oe,fe=new Map,le={components:{DanmakuItem:se},props:Object(F["a"])(Object(F["a"])({},u["d"]),{},{isGiftList:Boolean,giftShowFace:Boolean}),setup:function(e){var t=!0;Object(r["p"])((function(){return t=!1}));var n=Object(i["i"])([]),a=Object(i["i"])(null),c=Object(i["i"])(null);Object(r["q"])((function(){var e=a.value.getBoundingClientRect().top,t=function(){var t=n.value.findIndex((function(t){var n,a,r,c=null!==(n=null===(a=t.el)||void 0===a||null===(r=a.$el)||void 0===r?void 0:r.getBoundingClientRect())&&void 0!==n?n:{},i=c.top,u=void 0===i?e:i,o=c.height,s=void 0===o?0:o;return u<e&&(t.hidden=!0),u+s>e}));t>0&&n.value.splice(0,t)},c=setInterval(t,100);Object(r["p"])((function(){return clearInterval(c)}))}));var u=function(){var t=Object(i["q"])(e.isGiftList?c:a);t&&(t.scrollTop=t.scrollHeight)};e.isGiftList||(Object(r["q"])((function(){return window.addEventListener("resize",u)})),Object(r["p"])((function(){return window.removeEventListener("resize",u)})));var o=[],s=function e(){var a=200,c=o.length;c>0&&(a=Math.min(a,1e3/c),n.value.push(o.shift()),Object(r["o"])(u)),t&&setTimeout(e,a)};s();var f=function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(n){var a,r,c,i,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.showFace){t.next=19;break}return t.next=3,P(n.uid);case 3:if(a=t.sent,c=a.find((function(e){var t=Object(m["a"])(e,1),n=t[0];return r=fe.get(n)}))||[""],i=Object(m["a"])(c,1),u=i[0],u){t.next=14;break}return r=X(a),fe.set(u,r),t.next=10,r;case 10:u=t.sent,fe.set(u,!0),t.next=18;break;case 14:if(!0===r){t.next=18;break}return t.next=17,r;case 17:u=t.sent;case 18:n.face=u;case 19:n.stay="bottom"===e.display?e.stay:0,o.push({props:n,key:Object($["a"])(),el:null,hidden:!1});case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=[];if(e.limit){var d=setInterval((function(){var t=l.splice(0);t.length&&(t.length>e.limit&&(t=J()(Object.keys(t),e.limit).sort().map((function(e){return t[e]}))),t.forEach((function(e){return f(e)})))}),1e3);Object(r["p"])((function(){return clearInterval(d)}))}var b=function(e){return l.push(e)};return Object(F["a"])(Object(F["a"])({},Object(i["n"])(e)),{},{danmakuList:n,danmakuListRef:a,giftListRef:c,addDanmaku:f,addSpeedLimitDanmaku:b})}};n("d957");le.render=H;var de=le,be={components:{DanmakuList:de},props:u["d"],setup:function(e){console.log("正在连接直播弹幕服务器");var t=new B["KeepLiveWS"](e.room);Object(r["p"])((function(){return t.close()})),t.on("open",(function(){return console.log("已连接直播弹幕服务器")})),t.on("live",(function(){return console.log("已进入直播间",e.room)})),t.on("close",(function(){return console.log("已断开与直播弹幕服务器的连接")})),t.on("heartbeat",(function(e){return console.log("当前人气值",e)})),window.closeLive=function(){return t.close()};var n=Object(i["i"])(null),a=Object(i["i"])(null),c=new Map,u=Object(r["f"])((function(){return!["false","gift"].includes(e.face)}));return Object(r["q"])((function(){var r=e.giftPin?n:a;t.on("SEND_GIFT",(function(t){var n=t.data,a=n.uid,i=n.uname,u=n.action,o=n.giftName,s=n.num,f=n.face;if(N(a,f),e.giftComb){var l="".concat(a,"-").concat(o),d=c.get(l);d?c.set(l,Object(F["a"])(Object(F["a"])({},d),{},{num:d.num+s})):(c.set(l,{type:"gift",showFace:"false"!==e.face,uid:a,uname:i,action:u,giftName:o,num:s}),setTimeout((function(){r.value.addDanmaku(c.get(l)),c.delete(l)}),e.giftComb))}else r.value.addDanmaku({type:"gift",showFace:"false"!==e.face,uid:a,uname:i,action:u,giftName:o,num:s})})),t.on("DANMU_MSG",(function(t){var n=Object(m["a"])(t.info,3),r=n[1],c=Object(m["a"])(n[2],3),i=c[0],o=c[1],s=c[2],f={type:"message",showFace:u.value,uid:i,uname:o,message:r,isAnchor:i===e.anchor,isOwner:!!s};e.limit?a.value.addSpeedLimitDanmaku(f):a.value.addDanmaku(f)}))})),{props:e,giftShowFace:u,giftPinList:n,danmakuList:a}}};n("7899");be.render=_;var pe=be,me={components:{Live:pe,DanmakuItem:se},setup:function(){var e=function(){return window.location.reload()};window.addEventListener("hashchange",e),Object(r["p"])((function(){return window.removeEventListener("hashchange",e)}));var t=Object(i["g"])(Object(u["c"])(window.location.hash)),n="true"===t.cors;f(n),L({method:t.face,expireDay:t.faceExpireDay});var a=Object(i["i"])(!1),c=Object(i["i"])("");return b("https://api.live.bilibili.com/room_ex/v1/RoomNews/get?roomid=".concat(t.room)).then((function(e){var n=e.code,r=e.msg,i=e.data,u=i.roomid,o=i.uid;0===n?(t.room=parseInt(u),t.anchor=parseInt(o),a.value=!0):c.value=r})).catch((function(){c.value="获取房间信息失败",n&&(c.value+="，请检查是否正确禁用了浏览器的 web security 以允许直接跨域")})),{props:t,ready:a,errMsg:c}}};n("2cf40");me.render=c;var ve=me;Object(a["a"])(ve).mount("#app")},cbee:function(e,t,n){},d957:function(e,t,n){"use strict";n("ee94")},ee94:function(e,t,n){},fac7:function(e,t,n){},ff78:function(e,t,n){}});