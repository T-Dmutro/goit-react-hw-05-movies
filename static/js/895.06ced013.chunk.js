"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[895],{7:function(n,t,r){r.d(t,{Df:function(){return u},TP:function(){return p},Wf:function(){return s},jP:function(){return f},zv:function(){return x}});var e=r(861),c=r(757),a=r.n(c),o=r(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="api_key=5040d68806cb7397c0075ca3c1bc5559",u=function(){var n=(0,e.Z)(a().mark((function n(){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/all/week?".concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?".concat(i,"&query=").concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/reviews?").concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"?").concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(t,"/credits?").concat(i));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},140:function(n,t,r){r.d(t,{Dx:function(){return j},Ei:function(){return E},II:function(){return h},aV:function(){return d},ck:function(){return R},l0:function(){return l},pM:function(){return b},pp:function(){return v}});var e,c,a,o,i,u,s,f,p=r(168),x=r(444).default,d=x.ul(e||(e=(0,p.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 30px;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),R=x.li(c||(c=(0,p.Z)(["\n  width: 100%;\n  height: 520px;\n  border-radius: 15px;\n  box-shadow: -1px -2px 19px -3px rgba(162, 86, 225, 0.53);\n"]))),E=x.img(a||(a=(0,p.Z)(["\n  width: 100%;\n  height: 460px;\n  object-fit: cover;\n  border-radius: 15px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover {\n     transform: scale(1.02);\n     cursor: pointer;\n  }\n"]))),j=x.p(o||(o=(0,p.Z)(["\nfont-size: 18px;\nfont-weight: 700;\ncolor: black;\nlist-style: none;\ntext-align: center;\nmargin-top: 20px;\n"]))),l=x.form(i||(i=(0,p.Z)(["\nmargin-top: 30px;\n"]))),h=x.input(u||(u=(0,p.Z)(["\n  display: inline-block;\n  width: 400px;\n  height: 50px;\n  border:  7px inset #7A24A4;\n  border-radius: 5px;\n"]))),v=x.button(s||(s=(0,p.Z)(["\n  height: 50px;\n  width: 70px;\n  margin-left: 5px;\n  border:  7px inset #7A24A4;\n  border-radius: 5px;\n  background: #ffffff;\n  cursor: pointer;\n  color: black;\n  font-weight: 500;\n  font-size: 14px;\n  transition-property: color, background-color;\n  transition-duration: 500ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  :hover{\n    background: #dbbae7;\n    color: white;\n  }\n"]))),b=x.button(f||(f=(0,p.Z)(["\n  margin: 10px;\n  height: 50px;\n  width: 100px;\n  margin-left: 5px;\n  border:  7px double #8E52A4;\n  border-radius: 5px;\n  background: #ffffff;\n  cursor: pointer;\n  color: black;\n  font-weight: 500;\n  font-size: 14px;\n  box-shadow: -1px -2px 19px -3px rgba(162, 86, 225, 0.53);\n  :hover{\n    background: #dbbae7;\n    color: white;\n  }\n"])))},895:function(n,t,r){r.r(t),r.d(t,{default:function(){return p}});var e=r(439),c=r(791),a=r(87),o=r(140),i=r(7),u=r(689),s=r(184),f=function(n){var t=n.movies,r=(0,u.TH)();return(0,s.jsx)(o.aV,{children:t&&t.map((function(n){return(0,s.jsx)(o.ck,{children:(0,s.jsxs)(a.rU,{to:"".concat(n.id),state:"".concat(r.pathname).concat(r.search),children:[(0,s.jsx)(o.Ei,{src:n.poster_path?"".concat("https://image.tmdb.org/t/p/w400").concat(n.poster_path):"data:image/png;base64,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",alt:n.id}),(0,s.jsx)(o.Dx,{children:n.title})]})},n.id)}))})};var p=function(){var n=(0,c.useState)(!1),t=(0,e.Z)(n,2),r=t[0],u=t[1],p=(0,a.lr)(),x=(0,e.Z)(p,2),d=x[0],R=x[1],E=d.get("query");return(0,c.useEffect)((function(){E&&(0,i.Wf)(E).then((function(n){return u(n.results)}))}),[E]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.l0,{onSubmit:function(n){n.preventDefault(),R({query:n.currentTarget.elements.query.value}),n.currentTarget.reset()},autoComplete:"off",children:[(0,s.jsx)("label",{children:(0,s.jsx)(o.II,{type:"text",name:"query",placeholder:"Search film"})}),(0,s.jsx)(o.pp,{type:"submit",children:"Search"})]}),r&&(0,s.jsx)(f,{movies:r})]})}}}]);
//# sourceMappingURL=895.06ced013.chunk.js.map