"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[744],{154:function(t,n,e){e.d(n,{Z:function(){return o}});e(791);var r=e(689),c=e(87),u=e(184),a=function(t){var n=t.movie,e=n.id,a=n.title,o=(0,r.TH)();return(0,u.jsx)("li",{children:(0,u.jsx)(c.rU,{to:"/movies/".concat(e),state:{from:o},children:(0,u.jsx)("p",{children:a})})})},o=function(t){var n=t.movies;return(0,u.jsx)("ul",{children:n.map((function(t){return(0,u.jsx)(a,{movie:t},t.id)}))})}},744:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(861),c=e(439),u=e(757),a=e.n(u),o=e(791),i=e(87),s=e(390),p=e(184),f=function(t){var n=t.onSubmit;return(0,p.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.target.elements.searchInput.value.trim();n(e),t.target.reset()},children:[(0,p.jsx)("input",{name:"searchInput",type:"text"}),(0,p.jsx)("button",{type:"submit",children:"search"})]})},h=e(154),l=function(){var t=(0,o.useState)([]),n=(0,c.Z)(t,2),e=n[0],u=n[1],l=(0,i.lr)(),d=(0,c.Z)(l,2),m=d[0],v=d[1],x=m.get("query");return(0,o.useEffect)((function(){x&&(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.gH)(x);case 2:n=t.sent,u(n.results);case 4:case"end":return t.stop()}}),t)})))()}),[x]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{children:"Found Movies"}),(0,p.jsx)(f,{onSubmit:function(t){if(""===t)return console.log("Type something!");v({query:t})}}),e&&(0,p.jsx)(h.Z,{movies:e}),x&&0===e.length&&(0,p.jsx)("p",{children:"Nothig Found"})]})}},390:function(t,n,e){e.d(n,{Hg:function(){return s},gH:function(){return m},t2:function(){return f},w3:function(){return l}});var r=e(861),c=e(757),u=e.n(c),a=e(243),o="41b8f9437bf3f899281f8a3f9bdc0891",i="https://api.themoviedb.org/3";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(n,e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Z.get("".concat(i,"/movie/").concat(n,"/").concat(e,"?api_key=").concat(o));case 2:return r=t.sent,console.log(r.data),t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=744.f62414fd.chunk.js.map