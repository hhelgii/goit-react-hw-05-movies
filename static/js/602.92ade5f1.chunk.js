"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[602],{602:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),u=n(689),o=n(87),p=n(784),f=n(390),l=n(184),h=(0,i.lazy)((function(){return n.e(390).then(n.bind(n,726))})),d=(0,i.lazy)((function(){return n.e(23).then(n.bind(n,23))}));t.default=function(){var e,t,n=(0,i.useState)(null),c=(0,a.Z)(n,2),v=c[0],x=c[1],m=(0,u.UO)().movieId,w=(0,u.TH)(),j=(0,i.useRef)(null!==(e=null===(t=w.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies");return(0,i.useEffect)((function(){if(m){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.t2)(m);case 3:t=e.sent,x(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[m]),v&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.rU,{to:j.current,children:"Go back"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w342/".concat(v.poster_path),alt:v.title}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:v.title}),(0,l.jsxs)("p",{children:["User score ",v.vote_average.toFixed(1)]}),(0,l.jsx)("h4",{children:"Overview"}),(0,l.jsx)("p",{children:v.overview})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(o.rU,{to:"cast",children:"Cast"}),(0,l.jsx)(o.rU,{to:"reviews",children:"Reviews"}),(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)(p.a,{}),children:(0,l.jsxs)(u.Z5,{children:[(0,l.jsx)(u.AW,{path:"cast",element:(0,l.jsx)(h,{movieId:m})}),(0,l.jsx)(u.AW,{path:"reviews",element:(0,l.jsx)(d,{movieId:m})})]})})]})]})}},390:function(e,t,n){n.d(t,{Hg:function(){return o},gH:function(){return v},t2:function(){return f},w3:function(){return h}});var r=n(861),a=n(757),c=n.n(a),s=n(243),i="41b8f9437bf3f899281f8a3f9bdc0891",u="https://api.themoviedb.org/3";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/movie/").concat(t,"/").concat(n,"?api_key=").concat(i));case 2:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=602.92ade5f1.chunk.js.map