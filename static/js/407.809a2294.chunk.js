"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[407],{7:function(n,t,r){r.d(t,{Df:function(){return u},TP:function(){return f},Wf:function(){return p},jP:function(){return s},zv:function(){return d}});var e=r(861),a=r(757),o=r.n(a),i=r(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="api_key=5040d68806cb7397c0075ca3c1bc5559",u=function(){var n=(0,e.Z)(o().mark((function n(){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/all/week?".concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?".concat(c,"&query=").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?").concat(c));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?").concat(c));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?").concat(c));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},407:function(n,t,r){r.r(t);var e=r(439),a=r(791),o=r(689),i=r(87),c=r(7),u=r(140),p=r(184);t.default=function(){var n,t=(0,a.useState)([]),r=(0,e.Z)(t,2),s=r[0],f=r[1],d=(0,o.TH)(),x=(0,o.UO)().movieId;return(0,a.useEffect)((function(){(0,c.zv)(x).then((function(n){f(n.cast)}))}),[x]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u.pM,{type:"button",children:(0,p.jsx)(i.rU,{to:null!==(n=null===d||void 0===d?void 0:d.state)&&void 0!==n?n:"/movies/".concat(x),children:"Hide cast"})}),s&&(0,p.jsx)(u.aV,{children:s.map((function(n){return(0,p.jsxs)(u.ck,{children:[(0,p.jsx)(u.Ei,{src:n.profile_path?"".concat("https://image.tmdb.org/t/p/w300").concat(n.profile_path):"\ud83e\udd14",alt:n.name}),(0,p.jsxs)(u.Dx,{children:["name: ",n.name]}),(0,p.jsxs)(u.Dx,{children:["character: ",n.character]})]},n.id)}))})]})}},140:function(n,t,r){r.d(t,{Dx:function(){return b},Ei:function(){return h},II:function(){return g},aV:function(){return x},ck:function(){return l},l0:function(){return m},pM:function(){return w},pp:function(){return v}});var e,a,o,i,c,u,p,s,f=r(168),d=r(444).default,x=d.ul(e||(e=(0,f.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 30px;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),l=d.li(a||(a=(0,f.Z)(["\n  width: 100%;\n  height: 520px;\n  border-radius: 15px;\n  box-shadow: -1px -2px 19px -3px rgba(162, 86, 225, 0.53);\n"]))),h=d.img(o||(o=(0,f.Z)(["\n  width: 100%;\n  height: 460px;\n  object-fit: cover;\n  border-radius: 15px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n     transform: scale(1.02);\n     cursor: pointer;\n  }\n"]))),b=d.p(i||(i=(0,f.Z)(["\nfont-size: 18px;\nfont-weight: 700;\ncolor: black;\nlist-style: none;\ntext-align: center;\nmargin-top: 20px;\n"]))),m=d.form(c||(c=(0,f.Z)(["\nmargin-top: 30px;\n"]))),g=d.input(u||(u=(0,f.Z)(["\n  display: inline-block;\n  width: 400px;\n  height: 50px;\n  border:  7px inset #7A24A4;\n  border-radius: 5px;\n"]))),v=d.button(p||(p=(0,f.Z)(["\n  height: 50px;\n  width: 70px;\n  margin-left: 5px;\n  border:  7px inset #7A24A4;\n  border-radius: 5px;\n  background: #ffffff;\n  cursor: pointer;\n  color: black;\n  font-weight: 500;\n  font-size: 14px;\n  transition-property: color, background-color;\n  transition-duration: 500ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  :hover{\n    background: #dbbae7;\n    color: white;\n  }\n"]))),w=d.button(s||(s=(0,f.Z)(["\n  margin: 10px;\n  height: 50px;\n  width: 100px;\n  margin-left: 5px;\n  border:  7px double #8E52A4;\n  border-radius: 5px;\n  background: #ffffff;\n  cursor: pointer;\n  color: black;\n  font-weight: 500;\n  font-size: 14px;\n  box-shadow: -1px -2px 19px -3px rgba(162, 86, 225, 0.53);\n  :hover{\n    background: #dbbae7;\n    color: white;\n  }\n"])))}}]);
//# sourceMappingURL=407.809a2294.chunk.js.map