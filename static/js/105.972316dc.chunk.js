"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[105],{6148:function(e,t,n){n.d(t,{AE:function(){return d},Df:function(){return i},Io:function(){return f},Jh:function(){return h},TP:function(){return u},Wf:function(){return s},cC:function(){return l},zv:function(){return p}});var r=n(5861),a=n(7757),o=n.n(a),c="ed69d95ca692b419d92a1a545c626337",i=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day?",e.next=3,fetch("".concat("https://api.themoviedb.org/3/trending/movie/day?","api_key=").concat(c,"&page=").concat(t)).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(o().mark((function e(t,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie",e.next=3,fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(c,"&language=en-US&query=").concat(t,"&page=").concat(n,"&include_adult=false")).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/",e.next=3,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(t,"?api_key=").concat(c,"&language=en-US")).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/",e.next=3,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/credits?api_key=").concat(c,"&language=en-US")).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/",e.next=3,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/reviews?api_key=").concat(c)).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/person/",e.next=3,fetch("".concat("https://api.themoviedb.org/3/person/").concat(t,"/movie_credits?api_key=").concat(c,"&language=en-US")).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/person/",e.next=3,fetch("".concat("https://api.themoviedb.org/3/person/").concat(t,"?api_key=").concat(c,"&language=en-US")).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/",e.next=3,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/videos?api_key=").concat(c,"&language=en-US")).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},8910:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(1087),a=n(7689),o="MovieCard_list__7H6w7",c="MovieCard_card__GBwV4",i="MovieCard_info__JXbV6",s="MovieCard_name__MWhdH",u="MovieCard_date__+9g9i",p=n(5536),h=n(184),l=function(e){var t=e.items;console.log(t);var n=(0,a.TH)();return(0,h.jsx)("ul",{className:o,children:t.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsxs)(r.rU,{to:"/movies/".concat(e.id),className:c,state:{from:n},children:[(0,h.jsx)(p.Z,{poster:e.poster_path,alt:e.title}),(0,h.jsxs)("div",{className:i,children:[(0,h.jsx)("h3",{className:s,children:e.title}),(0,h.jsx)("p",{className:u,children:e.release_date.slice(0,-6)})]})]})},e.id)}))})}},5536:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(2821),a="Poster_poster__L2YyV",o=n(184),c=function(e){var t=e.poster,n=e.alt,c="https://image.tmdb.org/t/p/w300/".concat(t);return(0,o.jsx)(o.Fragment,{children:null===t?(0,o.jsx)("img",{className:a,src:r,alt:n}):(0,o.jsx)("img",{className:a,src:c,alt:n})})}},7184:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(9439),a=n(2791),o=n(6355),c="ScrollButton_btn__AwUdN",i=n(184),s=function(){var e=(0,a.useState)(!1),t=(0,r.Z)(e,2),n=t[0],s=t[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>300?s(!0):e<=300&&s(!1)})),(0,i.jsx)("div",{className:c,children:(0,i.jsx)(o.nbd,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:n?"inline":"none"}})})}},105:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(9439),a=n(7689),o=n(2791),c=n(6148),i=n(5536),s=n(8910),u=n(7184),p={container:"Person_container__q3Kxu",go_back:"Person_go_back__icRk5",arrow:"Person_arrow__-lf5v",person:"Person_person__Xg5XU",photo:"Person_photo__q2DjD",name:"Person_name__2ClvE",birthday:"Person_birthday__hCntL",cake:"Person_cake__m8Phf",place:"Person_place__YsMFz",biography:"Person_biography__kBl3z",title:"Person_title__wM7qE"},h=n(6355),l=n(6856),f=n(184),d=function(){var e,t=(0,a.UO)().personId,n=(0,o.useState)([]),d=(0,r.Z)(n,2),m=d[0],_=d[1],v=(0,o.useState)({name:"",birthday:"",biography:"",place_of_birth:"",profile_path:""}),b=(0,r.Z)(v,2),g=b[0],x=b[1],j=(0,a.s0)(),y=(null===(e=(0,a.TH)().state)||void 0===e?void 0:e.from)||"/";return(0,o.useEffect)((function(){(0,c.Io)(t).then((function(e){var t=e.name,n=e.birthday,r=e.biography,a=e.place_of_birth,o=e.profile_path;x({name:t,birthday:n,biography:r,place_of_birth:a,profile_path:o})})),(0,c.cC)(t).then((function(e){_(e.cast)}))}),[t]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:p.go_back,onClick:function(){return j(y)},children:(0,f.jsxs)("p",{children:[(0,f.jsx)(l.rpj,{className:p.arrow}),"back"]})}),(0,f.jsxs)("div",{className:p.container,children:[(0,f.jsxs)("article",{className:p.person,children:[(0,f.jsx)("div",{className:p.photo,children:(0,f.jsx)(i.Z,{poster:g.profile_path,alt:g.name})}),(0,f.jsxs)("div",{className:p.info,children:[(0,f.jsx)("h2",{className:p.name,children:g.name}),(0,f.jsxs)("p",{className:p.birthday,children:[(0,f.jsx)(h.RUr,{className:p.cake}),g.birthday]}),(0,f.jsx)("p",{className:p.place,children:g.place_of_birth}),(0,f.jsx)("p",{className:p.biography,children:g.biography})]})]}),(0,f.jsxs)("h3",{className:p.title,children:["Movies with ",g.name]}),(0,f.jsx)(s.Z,{items:m}),(0,f.jsx)(u.Z,{})]})]})}},2821:function(e,t,n){e.exports=n.p+"static/media/frame.6cbe7c1f1f4b2488e624.jpg"}}]);
//# sourceMappingURL=105.972316dc.chunk.js.map