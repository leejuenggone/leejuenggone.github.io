(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{15:function(n,e,t){n.exports=t(25)},20:function(n,e,t){},21:function(n,e,t){n.exports=t.p+"static/media/logo.5d5d9eef.svg"},22:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),a=t(11),c=t.n(a),i=(t(20),t(4)),u=t(5),l=t(1),p=(t(21),t(22),t(2));function d(){var n=Object(l.a)(["\n  width: 500px;\n  height: 600px;\n\n  background: #fff;\n  margin: 0 auto;\n\n  margin-top: 80px;\n\n  position: relative;\n\n  border-radius: 25px;\n\n  box-shadow: 5px 5px 12px 0px #d6d6d6;\n  display: flex;\n  flex-direction: column;\n"]);return d=function(){return n},n}var f=p.b.div(d());var b=function(n){var e=n.children;return r.a.createElement(f,null," ",e," ")};function s(){var n=Object(l.a)(["\n  padding: 20px 40px;\n  width: 100%;\n  text-align: left;\n  box-sizing: border-box;\n  border-bottom: 1px solid #eee;\n\n  h1 {\n    margin: 0;\n    font-size: 30px;\n  }\n\n  p {\n    color: #555;\n    font-size: 18px;\n    font-weight: 500;\n  }\n  span {\n    color: #20c997;\n    font-weight: 700;\n    font-size: 20px;\n  }\n"]);return s=function(){return n},n}var x=p.b.div(s());var m=function(n){var e=n.data,t=new Date,o=t.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),a=t.toLocaleDateString("ko-KR",{weekday:"long"}),c=e.filter((function(n){return!0===n.content}));return r.a.createElement(x,null,r.a.createElement("h1",null,o),r.a.createElement("p",null,a),r.a.createElement("span",null,"\ud560 \uc77c "+c.length+"\uac1c \ub0a8\uc74c"))};function g(){var n=Object(l.a)(["\n  flex: 1;\n  padding: 20px 32px;\n  padding-bottom: 48px;\n  overflow-y: auto; /* \uc0ac\uc774\uc988 \uc870\uc815\uc774 \uc798 \ub418\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud55c \uc784\uc2dc \uc2a4\ud0c0\uc77c */\n"]);return g=function(){return n},n}var v=p.b.div(g());var h=function(n){var e=n.children;return r.a.createElement(v,null,e)};function E(){var n=Object(l.a)(["\n  //   background: #333;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: space-between;\n  &:hover {\n    "," {\n      display: block;\n    }\n  }\n  p {\n    flex: 1;\n    padding-left: 20px;\n    font-size: 20px;\n    margin: 0;\n    line-height: 40px;\n    font-weight: 700;\n  }\n  button {\n    cursor: pointer;\n    padding: 0;\n    border: 4px solid #eee;\n    width: 40px;\n    height: 40px;\n    border-radius: 40px;\n    background: none;\n    font-weight: 800;\n  }\n"]);return E=function(){return n},n}function j(){var n=Object(l.a)(["\n  font-size: 14px;\n  margin-left: 10px;\n  color: #ff6767;\n  font-weight: 900;\n"]);return j=function(){return n},n}function w(){var n=Object(l.a)(["\n  color: #ff0000;\n  display: none;\n  line-height: 40px;\n  font-weight: 900;\n  cursor: pointer;\n"]);return w=function(){return n},n}var k=p.b.div(w()),O=p.b.span(j()),y=p.b.div(E(),k);var S=function(n){var e=n.data,t=n.onCheck,a=n.onRemove,c=n.onSpan;return Object(o.useEffect)((function(){setTimeout((function(){c()}),2e3)}),[]),r.a.createElement(y,null,r.a.createElement("button",{onClick:t,style:{borderColor:e.content?"#eee":"#20c997",color:e.content?"#eee":"#20c997"}},e.content?"":"\u2714"),r.a.createElement("p",{style:{color:e.content?"black":"#ddd"}},e.text,e.span?r.a.createElement(O,null,"\uc2e0\uaddc \ub4f1\ub85d!!"):null),r.a.createElement(k,{onClick:a},"\uc0ad\uc81c"))};function C(){var n=Object(l.a)(["\n  width: 70px;\n  height: 70px;\n  border-radius: 70px;\n  position: absolute;\n  bottom: -35px;\n  left: 50%;\n  margin-left: -35px;\n  border: none;\n  //   background: #20c997;\n  cursor: pointer;\n  &:hover {\n    background: #49e0b3;\n  }\n"]);return C=function(){return n},n}function z(){var n=Object(l.a)(["\n  width: 100%;\n  height: 130px;\n  background: #f1f1f1;\n  border-radius: 0 0 25px 25px;\n  display: flex;\n  justify-content: center;\n  border-top: 2px solid #eee;\n  input {\n    margin-top: 20px;\n    width: 400px;\n    height: 50px;\n    border: none;\n    border-radius: 10px;\n    padding: 0 20px;\n    box-sizing: border-box;\n  }\n"]);return z=function(){return n},n}var B=p.b.div(z()),D=p.b.button(C());var R=function(n){var e=n.input,t=n.onCh,o=n.onSubmit,a=n.create,c=n.onBox;return r.a.createElement(r.a.Fragment,null,1==a?r.a.createElement(B,null,r.a.createElement("form",{onSubmit:o},r.a.createElement("input",{autoFocus:!0,onChange:t,placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud6c4,\uc5d4\ud130\ub97c \ub204\ub974\uc138\uc694",name:"text",value:e}))):null,r.a.createElement(D,{onClick:c,style:{background:a?"#ff6767":"#49e0b3"}}))},F=[{id:0,text:"\uc624\ub298 \ud560 \uc77c \uccab\ubc88\uc9f8",content:!0,span:!1},{id:1,text:"\uc624\ub298 \ud560 \uc77c \ub450\ubc88\uc9f8",content:!0,span:!1},{id:2,text:"\uc624\ub298 \ud560 \uc77c \uc138\ubc88\uc9f8",content:!0,span:!1}];function J(){var n=Object(l.a)(["\n  body {\n    background: #e9ecef;\n  }\n"]);return J=function(){return n},n}var K=Object(p.a)(J());var L=function(){var n=Object(o.useState)(F),e=Object(u.a)(n,2),t=e[0],a=e[1],c=Object(o.useState)(""),l=Object(u.a)(c,2),p=l[0],d=l[1],f=Object(o.useState)(2),s=Object(u.a)(f,2),x=s[0],g=s[1],v=Object(o.useState)(!1),E=Object(u.a)(v,2),j=E[0],w=E[1];return r.a.createElement("div",{className:"App"},r.a.createElement(K,null),r.a.createElement(b,null,r.a.createElement(m,{data:t}),r.a.createElement(h,null,t.map((function(n,e){return r.a.createElement(S,{onSpan:function(){!function(n){var e=Object(i.a)(t);e[n].span=!1,a(e)}(e)},onRemove:function(){!function(n){var e=Object(i.a)(t);e.splice(n,1),a(e)}(e)},data:t[e],key:e,onCheck:function(){!function(n){var e=Object(i.a)(t);e[n].content=!e[n].content,a(e)}(e)}})}))),r.a.createElement(R,{create:j,input:p,onCh:function(n){d(n.target.value)},onSubmit:function(n){n.preventDefault();var e=Object(i.a)(t);e.push({id:x+1,text:p,content:!0,span:!0}),a(e),d(""),g(x+1),w(!j)},onBox:function(){w(!j)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.60671574.chunk.js.map