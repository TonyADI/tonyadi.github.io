(this["webpackJsonpshopify-challenge"]=this["webpackJsonpshopify-challenge"]||[]).push([[0],{15:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),a=t(9),s=t.n(a),r=(t(15),t(5)),o=t(6),l=(t(3),t(0)),d=function(e){return Object(l.jsxs)("div",{className:"nominee-container",children:[Object(l.jsx)("img",{className:"movie-poster",src:e.nominee.imageUrl,alt:"poster"})," ",Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{children:[e.nominee.title," "]}),Object(l.jsxs)("span",{children:["(",e.nominee.year,")"]}),Object(l.jsx)("button",{id:e.nominee.id,className:"button",onClick:function(){e.handleClick(e.nominee)},children:e.action})]})]})},u=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("ul",{children:e.nominees?e.nominees.length?e.nominees.map((function(n){return Object(l.jsx)("li",{children:Object(l.jsx)(d,{nominee:n,handleClick:e.handleClick,action:e.action},n.id)})})):"Nominate"===e.action&&Object(l.jsx)("div",{children:"No results found. Try a different movie."}):null})})},j=function(e){return Object(l.jsxs)("div",{className:"searchbar-container",children:[Object(l.jsx)("h4",{children:"Movie Title"}),Object(l.jsxs)("div",{className:"input-container",children:[Object(l.jsx)("i",{className:"fa fa-search search-icon"}),Object(l.jsx)("input",{placeholder:"Enter movie title..",value:e.term,className:"input",onChange:e.handleChange})]})]})},h=t(8),m=t.n(h),b=t(10),f=function(){var e=Object(b.a)(m.a.mark((function e(n){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.omdbapi.com/?type=movie&apikey=b4ffe830&s=".concat(n));case 3:if(!(t=e.sent).ok){e.next=9;break}return e.next=7,t.json();case 7:return c=e.sent,e.abrupt("return",c.Search?c.Search.map((function(e){return{title:e.Title,year:e.Year,imageUrl:e.Poster,id:e.imdbID}})):[]);case 9:throw new Error("Request failed.");case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.useState)(""),n=Object(o.a)(e,2),t=n[0],i=n[1],a=Object(c.useState)([]),s=Object(o.a)(a,2),d=s[0],h=s[1],m=Object(c.useState)([]),b=Object(o.a)(m,2),O=b[0],p=b[1];return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("nominations"))||[];p(Object(r.a)(e))}),[]),Object(c.useEffect)((function(){5===O.length?document.querySelector(".nominations-banner").style.display="block":document.querySelector(".nominations-banner").style.display="none"}),[O]),Object(c.useEffect)((function(){localStorage.setItem("nominations",JSON.stringify(O))}),[O]),Object(l.jsxs)("div",{className:"app-body",children:[Object(l.jsx)("div",{className:"nominations-banner",children:"You have selected the maximum number of nominees"}),Object(l.jsxs)("div",{className:"content-section",children:[Object(l.jsx)("h1",{className:"hero-title",children:"The Shoppies: Movie awards for entreprenuers"}),Object(l.jsx)(j,{handleChange:function(e){i(e.target.value),f(e.target.value).then((function(e){return h(e)}))},term:t}),Object(l.jsxs)("div",{className:"flex-container",children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("h2",{children:["Results ",t&&'for "'.concat(t,'"')]}),Object(l.jsx)(u,{nominees:d,handleClick:function(e){O.length<5&&(-1===O.findIndex((function(n){return n.id===e.id}))?(p([].concat(Object(r.a)(O),[e])),document.getElementById(e.id).disabled=!0):document.getElementById(e.id).disabled=!0)},action:"Nominate"})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{children:"Nominations"}),Object(l.jsx)(u,{nominees:O,handleClick:function(e){var n=O.filter((function(n){return n.id!==e.id}));p(Object(r.a)(n)),document.getElementById(e.id).disabled=!1},action:"Remove"})]})]})]})]})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("shopify-challenge-app")),p()},3:function(e,n,t){}},[[18,1,2]]]);
//# sourceMappingURL=main.ba302754.chunk.js.map