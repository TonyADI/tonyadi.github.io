(this["webpackJsonpip-address-tracker"]=this["webpackJsonpip-address-tracker"]||[]).push([[0],{11:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(5),s=c.n(r),i=(c(11),c(2)),o=c(0),d=function(e){return Object(o.jsxs)("div",{className:"dashboard",children:[Object(o.jsxs)("div",{className:"category",children:[Object(o.jsx)("h3",{children:"Ip Address"}),Object(o.jsx)("span",{children:e.data.ip||"-"})]}),Object(o.jsxs)("div",{className:"category",children:[Object(o.jsx)("h3",{children:"Location"}),Object(o.jsx)("span",{children:e.data.location?"".concat(e.data.location.region,", ").concat(e.data.location.country):"-"})]}),Object(o.jsxs)("div",{className:"category",children:[Object(o.jsx)("h3",{children:"Timezone"}),Object(o.jsx)("span",{children:e.data.location?e.data.location.timezone:"-"})]}),Object(o.jsxs)("div",{className:"category",children:[Object(o.jsx)("h3",{children:"Isp"}),Object(o.jsx)("span",{children:e.data.isp||"-"})]})]})},l=function(e){return Object(o.jsx)("div",{className:"searchbar",children:Object(o.jsxs)("div",{className:"input-container",style:{boxShadow:"".concat(e.error?"0 0 2pt 3pt #dc3545":"none")},children:[Object(o.jsx)("input",{placeholder:"Search for any IP address or domain",value:e.term,onChange:function(t){e.handleChange(t.target.value)},onKeyPress:function(t){13===t.which&&e.handleClick()}}),Object(o.jsx)("button",{onClick:e.handleClick,children:Object(o.jsx)("img",{src:e.iconArrow,alt:"right arrow"})})]})})},j=c.p+"../images/icon-arrow.2eaaa5ee.svg",h=c.p+"../images/pattern-bg.a60a3c85.png",u=c(4),p=c.n(u),b=c(6),O="at_L29E5IrOpXIhJv67BHrrMMKMRFHjm",g=function(){var e=Object(b.a)(p.a.mark((function e(){var t,c,n,a=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.prev=1,e.next=4,fetch("https://geo.ipify.org/api/v2/country?apiKey=".concat(O,"&ipAddress=").concat(t));case 4:if(!(c=e.sent).ok){e.next=10;break}return e.next=8,c.json();case 8:return n=e.sent,e.abrupt("return",n||{});case 10:return e.abrupt("return",{error:!0});case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}(),x=(c(14),function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),u=s[0],p=s[1],b=Object(n.useState)({}),O=Object(i.a)(b,2),x=O[0],f=O[1];return Object(n.useEffect)((function(){g().then((function(e){return f(e)}))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("img",{src:h,className:"background-pattern",alt:"blue background-pattern"}),Object(o.jsx)("h2",{children:"IP Address Tracker"}),Object(o.jsx)(l,{iconArrow:j,handleChange:function(e){p(e)},handleClick:function(){g(u).then((function(e){e.error?a(!0):(a(!1),f(e))}))},error:c}),Object(o.jsx)(d,{data:x}),Object(o.jsx)("iframe",{id:"map",loading:"lazy",allowFullScreen:!0,title:"Map of specified Ip address",src:"https://www.google.com/maps/embed/v1/place?zoom=5&key=AIzaSyA03z6PEEhOTgpgg-PM-w6F2Jk2pGWljJE\n          &q=".concat(x.location?x.location.region:"")})]})}),f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("ip-address-tracker-app")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.3c510e3a.chunk.js.map