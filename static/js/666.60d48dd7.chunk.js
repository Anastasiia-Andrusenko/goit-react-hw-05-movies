"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[666],{6148:function(t,e,n){n.d(e,{Df:function(){return i},Io:function(){return h},Jh:function(){return f},TP:function(){return u},Wf:function(){return s},cC:function(){return l},zv:function(){return p}});var r=n(5861),o=n(7757),c=n.n(o),a="ed69d95ca692b419d92a1a545c626337",i=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day?",t.next=3,fetch("".concat("https://api.themoviedb.org/3/trending/movie/day?","api_key=").concat(a,"&page=").concat(e)).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(e,n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/search/movie",t.next=3,fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(a,"&language=en-US&query=").concat(e,"&page=").concat(n,"&include_adult=false")).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie/",t.next=3,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(e,"?api_key=").concat(a,"&language=en-US")).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie/",t.next=3,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(e,"/credits?api_key=").concat(a,"&language=en-US")).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie/",t.next=3,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(e,"/reviews?api_key=").concat(a)).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/person/",t.next=3,fetch("".concat("https://api.themoviedb.org/3/person/").concat(e,"/movie_credits?api_key=").concat(a,"&language=en-US")).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/person/",t.next=3,fetch("".concat("https://api.themoviedb.org/3/person/").concat(e,"?api_key=").concat(a,"&language=en-US")).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},2175:function(t,e,n){n.d(e,{Z:function(){return c}});var r="LoadMore_button__DXIId",o=n(184),c=function(t){var e=t.loadMoreBtn;return(0,o.jsx)("button",{type:"button",className:r,onClick:e})}},8910:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(1087),o=n(7689),c="MovieCard_list__7H6w7",a="MovieCard_card__GBwV4",i="MovieCard_info__JXbV6",s="MovieCard_name__MWhdH",u="MovieCard_date__+9g9i",p=n(5536),f=n(184),l=function(t){var e=t.items,n=(0,o.TH)();return(0,f.jsx)("ul",{className:c,children:e.map((function(t){return(0,f.jsx)("li",{children:(0,f.jsxs)(r.rU,{to:"/movies/".concat(t.id),className:a,state:{from:n},children:[(0,f.jsx)(p.Z,{poster:t.poster_path,alt:t.title}),(0,f.jsxs)("div",{className:i,children:[(0,f.jsx)("h3",{className:s,children:t.title}),(0,f.jsx)("p",{className:u,children:t.release_date.slice(0,-6)})]})]})},t.id)}))})}},5536:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(2821),o="Poster_poster__L2YyV",c=n(184),a=function(t){var e=t.poster,n=t.alt,a="https://image.tmdb.org/t/p/w300/".concat(e);return(0,c.jsx)(c.Fragment,{children:null===e?(0,c.jsx)("img",{className:o,src:r,alt:n}):(0,c.jsx)("img",{className:o,src:a,alt:n})})}},7184:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(9439),o=n(2791),c=n(6355),a="ScrollButton_btn__AwUdN",i=n(184),s=function(){var t=(0,o.useState)(!1),e=(0,r.Z)(t,2),n=e[0],s=e[1];return window.addEventListener("scroll",(function(){var t=document.documentElement.scrollTop;t>300?s(!0):t<=300&&s(!1)})),(0,i.jsx)("div",{className:a,children:(0,i.jsx)(c.nbd,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:n?"inline":"none"}})})}},1666:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var r=n(3433),o=n(9439),c=n(2791),a=n(6148),i=n(1087),s=n(8910),u="Movies_container__2yt7S",p="Movies_search_bar__Whlgk",f="Movies_form__MWvXj",l="Movies_button__M1bgu",h="Movies_label__OBU2V",d="Movies_input__aaq4I",m="Movies_svg__uut+M",v=n(184),_=function(t){var e=t.onSubmit,n=t.query,r=(0,c.useState)(null!==n&&void 0!==n?n:""),a=(0,o.Z)(r,2),i=a[0],s=a[1];return(0,v.jsx)("div",{className:p,children:(0,v.jsxs)("form",{className:f,onSubmit:function(t){t.preventDefault(),""!==i.trim()&&i!==n&&e(i)},children:[(0,v.jsxs)("button",{type:"submit",className:l,children:[(0,v.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#657789",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",className:m,children:[(0,v.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,v.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),(0,v.jsx)("span",{className:h,children:"Search"})]}),(0,v.jsx)("input",{required:!0,className:d,type:"search",autoComplete:"off",placeholder:"Search movies by name",onChange:function(t){s(t.currentTarget.value.toLowerCase().trim())},value:i})]})})},g=n(2175),x=n(7184),b=function(){var t=(0,c.useState)([]),e=(0,o.Z)(t,2),n=e[0],p=e[1],f=(0,i.lr)(),l=(0,o.Z)(f,2),h=l[0],d=l[1],m=(0,c.useState)(1),b=(0,o.Z)(m,2),j=b[0],w=b[1],y=h.get("query");console.log(y);(0,c.useEffect)((function(){y&&(0,a.Wf)(y,j).then((function(t){p((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t.results))}))})).catch((function(t){return console.log(t.message)}))}),[y,j]);return(0,v.jsxs)("div",{className:u,children:[(0,v.jsx)(_,{onSubmit:function(t){p([]),d({query:t})},query:y}),n.length>0&&(0,v.jsx)(s.Z,{items:n}),0!==n.length&&(0,v.jsx)(g.Z,{loadMoreBtn:function(){w((function(t){return t+1}))},children:"Load more"}),(0,v.jsx)(x.Z,{})]})}},2821:function(t,e,n){t.exports=n.p+"static/media/frame.6cbe7c1f1f4b2488e624.jpg"}}]);
//# sourceMappingURL=666.60d48dd7.chunk.js.map