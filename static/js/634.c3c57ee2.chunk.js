"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[634],{6148:function(e,t,n){n.d(t,{Df:function(){return o},Jh:function(){return h},TP:function(){return u},Wf:function(){return s},zv:function(){return p}});var r=n(5861),c=n(7757),a=n.n(c),i="ed69d95ca692b419d92a1a545c626337",o=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day?",e.next=3,fetch("".concat("https://api.themoviedb.org/3/trending/movie/day?","api_key=").concat(i,"&page=").concat(t)).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(a().mark((function e(t,n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie",e.next=3,fetch("".concat("https://api.themoviedb.org/3/search/movie","?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=").concat(n,"&include_adult=false")).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/",e.next=3,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(t,"?api_key=").concat(i,"&language=en-US")).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/",e.next=3,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US")).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/",e.next=3,fetch("".concat("https://api.themoviedb.org/3/movie/").concat(t,"/reviews?api_key=").concat(i)).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},8634:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(9439),c=n(2791),a=n(7689),i={container:"Reviews_container__9qfXz",list:"Reviews_list__YRbfp",item:"Reviews_item__iEwlG",focus:"Reviews_focus__rPSKk",author:"Reviews_author__bDIYI",text:"Reviews_text__R2mPM"},o=n(6148),s="Message_container__zJCe+",u="Message_message__fh13J",p=n(184),h=function(){return(0,p.jsx)("div",{className:s,children:(0,p.jsx)("p",{className:u,children:"Sorry, no reviews yet"})})},f=n(5667).animateScroll,v=function(){var e=(0,a.UO)().movieId,t=(0,c.useState)([]),n=(0,r.Z)(t,2),s=n[0],u=n[1];return(0,c.useEffect)((function(){(0,o.Jh)(e).then((function(e){u(e.results)})),f.scrollTo(200)}),[e]),0===s.length?(0,p.jsx)(h,{}):(0,p.jsx)("div",{className:i.container,children:(0,p.jsx)("ul",{className:i.list,children:s.map((function(e){return(0,p.jsx)("li",{className:i.item,children:(0,p.jsxs)("article",{className:i.review,children:[(0,p.jsx)("p",{className:i.author,children:e.author}),(0,p.jsx)("p",{className:i.text,children:e.content})]})},e.id)}))})})}}}]);
//# sourceMappingURL=634.c3c57ee2.chunk.js.map