"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[721],{721:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r,a,c=n(861),s=n(439),i=n(757),u=n.n(i),o=n(791),p=n(87),l=n(689),f=n(168),h=n(444),v=h.ZP.ul(r||(r=(0,f.Z)(["\n  list-style-type: none;\n      margin-bottom: 10px;\n    font-size: 20px;\n    justify-content: space-around;\n    display: flex;\n    flex-wrap: wrap;\n    /* gap: 15px; */\n    padding: 0;\n"]))),d=h.ZP.li(a||(a=(0,f.Z)(["\n/* width: calc((100% / 3)-50px); */\npadding:10px;\ndisplay: flex;\nflex-direction:column ;\n"]))),m=n(407),w="home_mainTitle__V0pd9",x="home_title__wNn6R",g="home_poster__G9a7q",_="home_movieItem__MmdJy",b="home_loading__ko1Ql",y=n(402),k=n(184),Z=function(){var t=(0,o.useState)(null),e=(0,s.Z)(t,2),n=e[0],r=e[1],a=(0,o.useState)(!0),i=(0,s.Z)(a,2),f=i[0],h=i[1],Z=(0,l.TH)();return(0,o.useEffect)((function(){var t=function(){var t=(0,c.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(!0),t.next=4,(0,m.Df)();case 4:e=t.sent,r(e),h(!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("h2",{className:w,children:"Trending movies:"}),(0,k.jsx)(v,{children:f?(0,k.jsx)("div",{className:b,children:(0,k.jsx)(y.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{margin:"auto"},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}):n.map((function(t){var e=t.title,n=t.id,r=t.poster_path;return(0,k.jsx)(d,{className:_,children:(0,k.jsxs)(p.rU,{to:"/movies/".concat(n),state:{from:Z},children:[(0,k.jsx)("img",{className:g,src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"./src/img/no-poster-available.jpg",alt:e}),(0,k.jsx)("p",{className:x,children:e})]})},n)}))})]})}},407:function(t,e,n){n.d(e,{Df:function(){return i},M1:function(){return l},TP:function(){return o},qF:function(){return d},tx:function(){return h}});var r=n(861),a=n(757),c=n.n(a),s=n(263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"31449444226ba6345698313fe055564a",language:"en-US"}});function i(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/week",t.prev=1,t.next=4,s.get("/trending/movie/week");case 4:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e),t.prev=1,t.next=4,s.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/credits"),t.prev=1,t.next=4,s.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/movie/".concat(e,"/reviews"),t.prev=1,t.next=4,s.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/search/movie?query=".concat(e),t.prev=1,t.next=4,s.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=721.ed7ce5d1.chunk.js.map