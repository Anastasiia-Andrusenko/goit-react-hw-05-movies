"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[970],{6148:function(t,n,e){e.d(n,{Df:function(){return i},Jh:function(){return f},TP:function(){return s},Wf:function(){return u},zv:function(){return p}});var r=e(5861),a=e(7757),c=e.n(a),o="ed69d95ca692b419d92a1a545c626337",i=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day?",t.next=3,fetch("".concat("https://api.themoviedb.org/3/trending/movie/day?","api_key=").concat(o,"&page=").concat(n)).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(c().mark((function t(n,e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/search/movie",t.next=3,fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(o,"&language=en-US&query=").concat(n,"&page=").concat(e,"&include_adult=false")).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie/",t.next=3,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(n,"?api_key=").concat(o,"&language=en-US")).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie/",t.next=3,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US")).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie/",t.next=3,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(n,"/reviews?api_key=").concat(o)).then((function(t){return t.json()}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},5536:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(2821),a="Poster_poster__L2YyV",c=e(184),o=function(t){var n=t.poster,e=t.alt,o="https://image.tmdb.org/t/p/w300/".concat(n);return(0,c.jsx)(c.Fragment,{children:null===n?(0,c.jsx)("img",{className:a,src:r,alt:e}):(0,c.jsx)("img",{className:a,src:o,alt:e})})}},3970:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(9439),a="Cast_container__GNcwS",c="Cast_list__drU3z",o="Cast_item__0FgPP",i="Cast_name__gAPbo",u="Cast_character__it1QB",s="Cast_photo__O+aHC",p=e(5536),f=e(2791),h=e(7689),m=e(6148),l=e(184),v=e(5667).animateScroll,d=function(){var t=(0,f.useState)([]),n=(0,r.Z)(t,2),e=n[0],d=n[1],_=(0,h.UO)().movieId;return(0,f.useEffect)((function(){(0,m.zv)(_).then((function(t){var n=t.cast.slice(0,12);d(n)})),v.scrollTo(200)}),[_]),(0,l.jsx)("div",{className:a,children:(0,l.jsx)("ul",{className:c,children:e.map((function(t){return(0,l.jsxs)("li",{className:o,children:[(0,l.jsx)("div",{className:s,children:(0,l.jsx)(p.Z,{poster:t.profile_path})}),(0,l.jsx)("p",{className:i,children:t.original_name}),(0,l.jsx)("p",{className:u,children:t.character})]},t.id)}))})})}},2821:function(t,n,e){t.exports=e.p+"static/media/frame.6cbe7c1f1f4b2488e624.jpg"},5861:function(t,n,e){function r(t,n,e,r,a,c,o){try{var i=t[c](o),u=i.value}catch(s){return void e(s)}i.done?n(u):Promise.resolve(u).then(r,a)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(a,c){var o=t.apply(n,e);function i(t){r(o,a,c,i,u,"next",t)}function u(t){r(o,a,c,i,u,"throw",t)}i(void 0)}))}}e.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=970.222f3391.chunk.js.map