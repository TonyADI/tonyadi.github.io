(this["webpackJsonpshopify-challenge-winter"]=this["webpackJsonpshopify-challenge-winter"]||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(9),r=a.n(i),s=(a(14),a(8)),o=a(2),l=a(0),d=function(e){return Object(l.jsxs)("div",{className:"image-container",children:[Object(l.jsx)("div",{children:"video"===e.image.mediaType?Object(l.jsx)("iframe",{width:"420",height:"315",src:e.image.src}):Object(l.jsx)("img",{src:e.image.src,alt:e.image.title})}),Object(l.jsxs)("div",{className:"image-details",children:[Object(l.jsx)("h4",{children:e.image.title}),e.image.explanation&&Object(l.jsx)("p",{children:e.image.explanation}),Object(l.jsx)("span",{className:"image-date",children:e.image.date}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(t){e.handleClick(e.image.id),e.image.liked?t.target.classList.add("like-animation"):t.target.classList.remove("like-animation")},className:"like-button",children:Object(l.jsx)("i",{className:"fa fa-heart\r like-icon",style:{color:e.image.liked?"red":"black"}})})})]})]})},j=function(e){return Object(l.jsxs)("div",{className:"loading-icons",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})},u=function(e){return Object(l.jsx)("div",{className:"image-list-container",children:e.loading?Object(l.jsx)(j,{}):e.images?e.images.map((function(t){return Object(l.jsx)(d,{image:t,handleClick:e.handleClick},t.id)})):"No images to display."})},h=a(4),p=a.n(h),b=a(7),m="Vx2kOByjIigZINtDhkxNLa705MTH5oLuftzNMLiw",g=new Date,O=g.getFullYear(),f=g.getMonth(),x=g.getDate(),v="".concat(O,"-").concat(f,"-").concat(x),k={retrieveMrp:function(){var e=Object(b.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=".concat(v,"&page=1&api_key=").concat(m));case 3:if(!(t=e.sent).ok){e.next=9;break}return e.next=7,t.json();case 7:return a=e.sent,e.abrupt("return",a.photos&&a.photos.length?a.photos.map((function(e){return{title:e.camera.full_name,id:e.id,date:e.earth_date,src:e.img_src}})):[]);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),retrieveAPOD:function(){var e=Object(b.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.nasa.gov/planetary/apod?api_key=".concat(m));case 3:if(!(t=e.sent).ok){e.next=9;break}return e.next=7,t.json();case 7:return a=e.sent,e.abrupt("return",a?{title:a.title,date:a.date,src:a.url,mediaType:a.media_type,explanation:a.explanation}:{});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},y=(a(17),function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),r=Object(o.a)(i,2),h=r[0],p=r[1],b=Object(n.useState)([]),m=Object(o.a)(b,2),g=m[0],O=m[1],f=Object(n.useState)([]),x=Object(o.a)(f,2),v=x[0],y=x[1],N=Object(n.useState)(!1),w=Object(o.a)(N,2),P=w[0],C=w[1],S=function(e){var t=g.find((function(t){return t.id===e}))||a;v.find((function(t){return t.id===e}))?(y(Object(s.a)(v.filter((function(t){return t.id!==e})))),t.liked=!1):(t.liked=!0,y([].concat(Object(s.a)(v),[t])))};return Object(n.useEffect)((function(){p(!0),k.retrieveAPOD().then((function(e){p(!1),c(e)})),C(!0),k.retrieveMrp().then((function(e){C(!1),O(e)}))}),[]),Object(l.jsxs)("div",{className:"app-body",children:[Object(l.jsxs)("div",{className:"app-heading",children:[Object(l.jsx)("h1",{children:"Spacestagram"}),Object(l.jsx)("span",{children:"Images courtesy of NASA's Mars Rover Photos API and Astronomy Photo of the Day API"})]}),Object(l.jsxs)("div",{className:"apod",children:[Object(l.jsx)("h2",{children:"APOD"}),h?Object(l.jsx)(j,{}):Object(l.jsx)(d,{image:a,handleClick:S})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Mars Rover Photos"}),Object(l.jsx)(u,{images:g,handleClick:S,loading:P})]})]})}),N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("shopify-winter-challenge-app")),N()}},[[18,1,2]]]);
//# sourceMappingURL=main.32499b0a.chunk.js.map