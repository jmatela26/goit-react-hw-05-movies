"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,r,n){n.r(r),n.d(r,{default:function(){return v}});var e=n(861),a=n(439),c=n(311),u=n.n(c),s=n(791),o=n(689),i=n(279),f="Cast_cast-container__VofqV",p="Cast_cast-list-item__qDS0x",h="Cast_cast-image__Lf-J8",l="Cast_cast-name__4kFaz",d="Cast_cast-not-found__zVQNh",m=n(184),v=function(){var t=(0,s.useState)(null),r=(0,a.Z)(t,2),n=r[0],c=r[1],v=(0,o.UO)().movieId;return(0,s.useEffect)((function(){var t=function(){var t=(0,e.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.Ad)(v);case 3:r=t.sent,c(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:return t.prev=10,t.finish(10);case 12:case"end":return t.stop()}}),t,null,[[0,7,10,12]])})));return function(){return t.apply(this,arguments)}}();t()}),[v]),(0,m.jsx)("ul",{className:f,children:n&&n.length>0?n.map((function(t){var r=t.name,n=t.profile_path;return(0,m.jsxs)("li",{className:p,children:[(0,m.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w500".concat(n):"https://live.staticflickr.com/65535/51349451747_f6d7898f2c_n.jpg",alt:r,className:h}),(0,m.jsx)("h3",{className:l,children:r})]},r)})):(0,m.jsx)("li",{className:d,children:"Not found"})})}},279:function(t,r,n){n.d(r,{Ad:function(){return p},LI:function(){return l},Sg:function(){return f},YE:function(){return i},mo:function(){return h}});var e=n(861),a=n(311),c=n.n(a),u=n(340),s="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDRkNjQ5YmYyOWIxM2YxNWY3YzA5ZTNhN2M1MDRkZCIsInN1YiI6IjY1ZDM1NDQ3MmRhODQ2MDE4NTI2MzE1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TDx983zsZiX2YGdKyqnHoNB0tBfNTgYu5H9MjFWr_fE",o="https://api.themoviedb.org/3",i=function(){var t=(0,e.Z)(c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(o,"/trending/movie/day"),{headers:{Authorization:"Bearer ".concat(s)}});case 2:return r=t.sent,n=r.data.results,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(o,"/movie/").concat(r),{headers:{Authorization:"Bearer ".concat(s)}});case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(o,"/movie/").concat(r,"/credits"),{headers:{Authorization:"Bearer ".concat(s)}});case 2:return n=t.sent,e=n.data,t.abrupt("return",e.cast);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),h=function(){var t=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(o,"/movie/").concat(r,"/reviews"),{headers:{Authorization:"Bearer ".concat(s)}});case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(c().mark((function t(r){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("".concat(o,"/search/movie?query=").concat(r),{headers:{Authorization:"Bearer ".concat(s)}});case 2:return n=t.sent,e=n.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.eaae277c.chunk.js.map