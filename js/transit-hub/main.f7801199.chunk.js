(this["webpackJsonptransit-hub"]=this["webpackJsonptransit-hub"]||[]).push([[0],[,,,,,,,,,,,function(e,n,a){},function(e,n,a){},,function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},function(e,n,a){},,function(e,n,a){},function(e,n,a){"use strict";a.r(n);var r=a(1),t=a.n(r),i=a(6),o=a.n(i),s=(a(11),a(3)),c=a.p+"../images/hero-bg.c95c1489.jpg",l=a.p+"../images/hero-bg2.412fb2da.jpg",u=a.p+"../images/hero-bg3.9e44a49f.jpg",d=a.p+"../images/hero-bg4.6397e0cb.jpg",h=a.p+"../images/hero-bg5.f4a1a351.jpg",j=(a(12),a(0)),b=function(e){return Object(j.jsx)("div",{className:"business-container",children:Object(j.jsxs)("a",{href:e.url,children:[Object(j.jsx)("div",{className:"business-image-container",children:Object(j.jsx)("img",{src:e.imageSrc,alt:e.name})}),Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:"business-info",children:[Object(j.jsxs)("div",{className:"business-address",children:[Object(j.jsx)("p",{children:e.address}),Object(j.jsx)("p",{children:e.city}),Object(j.jsxs)("p",{children:[e.state," ",e.zipCode]})]}),Object(j.jsxs)("div",{className:"business-reviews",children:[Object(j.jsx)("h3",{children:e.price}),Object(j.jsxs)("h3",{className:"business-rating",children:[e.rating," Stars"]}),Object(j.jsxs)("p",{children:[e.reviewCount," reviews"]})]})]})]})})};b.defaultProps={address:"N/A",city:"N/A",category:"N/A",imageSrc:"",name:"N/A",price:"0",state:"N/A",rating:"0",review:"0",url:"",zipcode:"N/A"};var m=b,O=(a(14),function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.heading||"Businesses"}),Object(j.jsx)("div",{className:"businessList",children:e.loading?Object(j.jsx)("div",{className:"loading"}):e.businesses.length?e.businesses.map((function(e){return Object(j.jsx)(m,{address:e.address,city:e.city,category:e.category,imageSrc:e.imageSrc,name:e.name,price:e.price,state:e.state,rating:e.rating,review:e.review,url:e.url,zipcode:e.zipcode},e.id)})):Object(j.jsx)("div",{children:"This service may not be available at this location. Try a different location."})})]})}),p=(a(15),function(e){return Object(j.jsxs)("div",{className:"covid-info-container",children:[Object(j.jsxs)("div",{className:"covid-info",children:[e.warningMessage," Visit the ",Object(j.jsx)("a",{className:"cdc-link",href:"https://www.cdc.gov/coronavirus/2019-ncov/travelers/map-and-travel-notices.html",target:"_blank",rel:"noreferrer",children:"CDC "}),"for more information."]}),Object(j.jsxs)("div",{className:"travel-advisory",style:{backgroundImage:"linear-gradient(".concat(e.bgColor,", ").concat(e.bgColor,")")},children:["Covid-19: Level ",e.covidLevel]}),Object(j.jsxs)("div",{className:"flex-direction covid-stats",children:[Object(j.jsxs)("div",{className:"flex-direction-col",children:[Object(j.jsx)("h3",{children:"Total Confirmed Cases"}),Object(j.jsx)("span",{children:e.confirmed?e.confirmed.toLocaleString("en",{useGrouping:!0}):"-"})]}),Object(j.jsxs)("div",{className:"flex-direction-col",children:[Object(j.jsx)("h3",{children:"Total Deaths"}),Object(j.jsx)("span",{children:e.deaths?e.deaths.toLocaleString("en",{useGrouping:!0}):"-"})]}),Object(j.jsxs)("div",{className:"flex-direction-col",children:[Object(j.jsx)("h3",{children:"Total Recovered"}),Object(j.jsx)("span",{children:e.recovered?e.recovered.toLocaleString("en",{useGrouping:!0}):"-"})]}),Object(j.jsxs)("div",{className:"flex-direction-col",children:[Object(j.jsx)("h3",{children:"Active Cases"}),Object(j.jsx)("span",{children:e.active?e.active.toLocaleString("en",{useGrouping:!0}):"-"})]})]})]})}),g=(a(16),function(e){return Object(j.jsxs)("div",{className:"country-container",id:"destination",children:[Object(j.jsx)("span",{className:"country-name",children:e.name||"Destination"}),Object(j.jsxs)("div",{className:"flex-direction\r country-details-container",children:[Object(j.jsxs)("div",{className:"country-details",children:[Object(j.jsxs)("div",{className:"flex-direction-col",children:[Object(j.jsx)("h3",{children:"Capital"}),Object(j.jsx)("span",{className:"text-overflow-el",children:e.capital||"-"})]}),Object(j.jsxs)("div",{className:"flex-direction-col",children:[Object(j.jsx)("h3",{children:"Population"}),Object(j.jsx)("span",{children:e.population?e.population.toLocaleString("en",{useGrouping:!0}):"-"})]}),Object(j.jsxs)("div",{className:"flex-direction-col",children:[Object(j.jsx)("h3",{children:"Region"}),Object(j.jsx)("span",{children:e.region||"-"})]}),Object(j.jsxs)("div",{className:"flex-direction-col",children:[Object(j.jsx)("h3",{children:"Time Zone"}),Object(j.jsx)("span",{children:e.timezones?e.timezones[0]:"-"})]})]}),Object(j.jsx)("div",{className:"country-images-container",children:e.photos.length?e.photos.map((function(e){return Object(j.jsx)("img",{src:e.imgUrl,alt:e.descrp},e.id)})):"No Images"}),Object(j.jsxs)("div",{className:"country-details flex-direction-col",children:[Object(j.jsxs)("div",{className:"flex-direction-col",children:[Object(j.jsx)("h3",{children:"Calling Code"}),Object(j.jsx)("span",{children:e.callingCodes?e.callingCodes[0]:"-"})]}),Object(j.jsxs)("div",{className:"flex-direction-col",children:[Object(j.jsx)("h3",{children:"Currency"}),Object(j.jsx)("span",{className:"text-overflow-el",children:e.currencies?"".concat(e.currencies[0].name," \n                        ").concat(e.currencies[0].symbol):"-"})]}),Object(j.jsxs)("div",{className:"flex-direction-col",children:[Object(j.jsx)("h3",{children:"Language"}),Object(j.jsx)("span",{children:e.languages?e.languages[0].name:"-"})]}),Object(j.jsxs)("div",{className:"flex-direction-col",children:[Object(j.jsx)("h3",{children:"Flag"}),e.flag?Object(j.jsx)("img",{alt:"".concat(e.name," flag"),src:e.flag,className:"country-flag"}):"-"]})]})]})]})}),v=function(e){return Object(j.jsx)("div",{className:"hero-container",children:Object(j.jsx)("div",{className:"img-overlay",children:Object(j.jsxs)("div",{className:"hero-body",children:[Object(j.jsx)("span",{className:"hero-heading",children:"One-stop shop for all your travel needs"}),Object(j.jsx)("a",{id:"hero-link",href:"#destination",children:Object(j.jsx)("button",{className:"hero-bt",onClick:e.handleClick,children:"Take me away"})})]})})})},f=(a(17),function(e){return Object(j.jsx)("footer",{className:"footer",children:"\xa9 Copyright TonyADI. All Rights Reserved. v1.0"})}),x=(a(18),function(e){return Object(j.jsx)("div",{className:"searchbar",children:Object(j.jsx)("div",{className:"input-container",children:Object(j.jsx)("input",{placeholder:"Enter a country...",value:e.term,onChange:function(n){e.handleChange(n.target.value)},onKeyPress:function(n){13===n.which&&e.handleClick()},style:{boxShadow:e.validCountry?"0px 0px 0px 1px #ccc":"0px 0px 0px 1px #dc3545"}})})})}),T=(a(19),function(e){return Object(j.jsx)("div",{className:"navbar-container",children:Object(j.jsxs)("nav",{className:"navbar body-padding",children:[Object(j.jsx)("div",{className:"logo-link-container",children:Object(j.jsx)("a",{className:"logo-link",href:"./",children:"Transit Hub"})}),Object(j.jsx)(x,{term:e.country,handleChange:e.handleChange,handleClick:e.handleClick,validCountry:e.validCountry}),Object(j.jsx)("div",{className:"login-bt-container",children:Object(j.jsx)("button",{className:"login-bt",children:"Login"})})]})})}),w=a(2),k=a.n(w),y=a(4),F=function(){var e=Object(y.a)(k.a.mark((function e(n,a){var r,t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://desolate-headland-35675.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(n,"&limit=8&location=").concat(a),{headers:{Authorization:"Bearer ".concat("LlSYNgI-7ENc8EmHArpfRTuubr23UHpFcmuicwiTyg6UI3nM_ojuk0SLQ6xwT4mCMGdd8OiV75aQOrZcGMgp2qgxFJKY89tmB1mrpkzqWvn09Bk30YUPl099k8Z8YHYx")}});case 3:if(!(r=e.sent).ok){e.next=9;break}return e.next=7,r.json();case 7:return t=e.sent,e.abrupt("return",t.businesses?t.businesses.map((function(e){return{id:e.id,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zipCode,category:e.categories[0].title,price:e.price,rating:e.rating,reviewCount:e.review_count,url:e.url}})):[]);case 9:return e.abrupt("return",[]);case 12:return e.prev=12,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n,a){return e.apply(this,arguments)}}(),N=function(){var e=Object(y.a)(k.a.mark((function e(n){var a,r,t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n.replace(" ","-"),e.next=4,fetch("https://api.covid19api.com/total/country/".concat(a));case 4:if(!(r=e.sent).ok){e.next=10;break}return e.next=8,r.json();case 8:return t=e.sent,e.abrupt("return",Array.isArray(t)&&t.pop()?t.pop():{});case 10:return e.abrupt("return",{});case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{});case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),_=["Albania","American Samoa","Anguilla","Antigua and Barbuda","Australia","Azerbaijan","Bermuda","Bosnia and Herzegovina","Brunei","Bulgaria","Burkina Faso","Cayman Islands","Chad","China","Comoros","Cote d\u2019Ivoire (Ivory Coast)","Dominica","Djibouti","Equatorial Guinea","Falkland Islands","French Polynesia","Gabon","Gambia, The","Ghana","Greenland","Grenada","Hong Kong SAR","Hungary","Iceland","Kosovo","Laos","Liechtenstein","Mali","Marshall Islands","Mauritius","Micronesia, Federated States of","Moldova","Montserrat","New Caledonia","New Zealand","Niger","Nigeria","North Macedonia","Northern Mariana Islands","Palau","Poland","Romania","Saba","Saint Barthelemy","Saint Pierre and Miquelon","Singapore","Sint Eustatius","Slovakia","South Korea","Taiwan","Togo","Turks and Caicos Islands (U.K.)","Vietnam"],C={Algeria:"Unknown",Antarctica:"Unknown",Azores:"Unknown",Bhutan:"Unknown",Canary_Islands:"Unknown",Christmas_Island:"Unknown",Cocos_Islands:"Unknown",Cook_Islands:"Unknown",Eritrea:"Unknown",Gibraltar:"Unknown",Guernsey:"Unknown",Jersey:"Unknown",Kiribati:"Unknown",Macau_SAR:"Unknown",Mayotte:"Unknown",Monaco:"Unknown",Nauru:"Unknown",Niue:"Unknown",Norfolk_Island:"Unknown",North_Korea:"Unknown",Pitcairn_Islands:"Unknown",Saint_Helena:"Unknown",Samoa:"Unknown",San_Marino:"Unknown","S\xe3o_Tom\xe9":"Unknown",Solomon_Islands:"Unknown",South_Georgia:"Unknown",Tajikistan:"Unknown",Tanzania:"Unknown",Tokelau:"Unknown",Tonga:"Unknown",Turkmenistan:"Unknown",Tuvalu:"Unknown",Uzbekistan:"Unknown",Vanuatu:"Unknown",Venezuela:"Unknown",Wake_Island:"Unknown",Yemen:"Unknown",Albania:"One",American_Samoa:"One",Anguilla:"One",Antigua_and_Barbuda:"One",Australia:"One",Azerbaijan:"One",Benin:"One",Bermuda:"One",Bosnia_and_Herzegovina:"One",Brunei:"One",Bulgaria:"One",Burkina_Faso:"One",Cayman_Islands:"One",Chad:"One",China:"One",Comoros:"One",Ivory_Coast:"One",Dominica:"One",Djibouti:"One",Equatorial_Guinea:"One",Falkland_Islands:"One",French_Polynesia:"One",Gabon:"One",Gambia:"One",Ghana:"One",Greenland:"One",Grenada:"One",Hong_Kong:"One",Hungary:"One",Iceland:"One",Kosovo:"One",Laos:"One",Liechtenstein:"One",Mali:"One",Marshall_Islands:"One",Mauritius:"One",Micronesia:"One",Moldova:"One",Montserrat:"One",New_Caledonia:"One",New_Zealand:"One",Niger:"One",Nigeria:"One",North_Macedonia:"One",Northern_Mariana_Islands:"One",Palau:"One",Poland:"One",Romania:"One",Saba:"One",Saint_Barthelemy:"One",Saint_Pierre:"One",Singapore:"One",Sint_Eustatius:"One",Slovakia:"One",South_Korea:"One",Taiwan:"One",Togo:"One",Turks_and_Caicos_Islands:"One",Vietnam:"One",Angola:"Two",Austria:"Two",Barbados:"Two",Bonaire:"Two",Cameroon:"Two",Croatia:"Two","Cura\xe7ao":"Two",Czech_Republic:"Two",El_Salvador:"Two",Ethiopia:"Two",Finland:"Two",Germany:"Two",Guam:"Two",Guinea:"Two",Jamaica:"Two",Kenya:"Two",Madeira_Islands:"Two",Mauritania:"Two",Pakistan:"Two",Puerto_Rico:"Two",Senegal:"Two",Serbia:"Two",Ukraine:"Two",Afghanistan:"Three",Andorra:"Three",Armenia:"Three",Aruba:"Three",Bahamas:"Three",Belarus:"Three",Belgium:"Three",Belize:"Three",Cambodia:"Three",Canada:"Three",Cape_Verde:"Three",Denmark:"Three",Dominican_Republic:"Three",Easter_Island:"Three",Ecuador:"Three",Egypt:"Three",Estonia:"Three",Eswatini:"Three",Faroe_Islands:"Three",France:"Three",Greece:"Three",Guadeloupe:"Three",Guatemala:"Three",Guyana:"Three",Honduras:"Three",India:"Three",Iran:"Three",Ireland:"Three",Isle_of_Man:"Three",Israel:"Three",Italy:"Three",Japan:"Three",Jordan:"Three",Kazakhstan:"Three",Latvia:"Three",Lesotho:"Three",Libya:"Three",Lithuania:"Three",Luxembourg:"Three",Malta:"Three",Martinique:"Three",Mexico:"Three",Montenegro:"Three",Norway:"Three",Peru:"Three",Philippines:"Three",Qatar:"Three",Russia:"Three",Saint_Kitts_and_Nevis:"Three",Saint_Lucia:"Three",Saint_Martin:"Three",Saint_Vincent_and_Grenadines:"Three",Sint_Maarten:"Three",Slovenia:"Three",Sri_Lanka:"Three",Sweden:"Three",Switzerland:"Three",Thailand:"Three",Timor_Leste:"Three",Turkey:"Three",Virgin_Islands:"Three",Argentina:"Four",Bahrain:"Four",Bangladesh:"Four",Bolivia:"Four",Botswana:"Four",Brazil:"Four",British_Virgin_Islands:"Four",Burma:"Four",Burundi:"Four",Central_African_Republic:"Four",Chile:"Four",Colombia:"Four",Congo:"Four",Costa_Rica:"Four",Cuba:"Four",Cyprus:"Four",Fiji:"Four",French_Guiana:"Four",Georgia:"Four",Guinea_Bissau:"Four",Haiti:"Four",Indonesia:"Four",Iraq:"Four",Kyrgyzstan:"Four",Kuwait:"Four",Liberia:"Four",Madagascar:"Four",Malawi:"Four",Malaysia:"Four",Maldives:"Four",Mongolia:"Four",Mozambique:"Four",Namibia:"Four",Nepal:"Four",Netherlands:"Four",Nicaragua:"Four",Oman:"Four",Panama:"Four",Papua_New_Guinea:"Four",Paraguay:"Four",Portugal:"Four","R\xe9union":"Four",Rwanda:"Four",Saudi_Arabia:"Four",Seychelles:"Four",Sierra_Leone:"Four",Somalia:"Four",South_Africa:"Four",South_Sudan:"Four",Spain:"Four",Sudan:"Four",Suriname:"Four",Syria:"Four",Tunisia:"Four",Trinidad_and_Tobago:"Four",Uganda:"Four",United_Arab_Emirates:"Four",United_Kingdom:"Four",Uruguay:"Four",Zambia:"Four",Zimbabwe:"Four"},S=function(){var e=Object(y.a)(k.a.mark((function e(n){var a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://restcountries.com/v2/name/".concat(n));case 3:if(!(a=e.sent).ok){e.next=11;break}return e.next=7,a.json();case 7:if(404!==(r=e.sent).status){e.next=10;break}return e.abrupt("return",r);case 10:return e.abrupt("return",Array.isArray(r)&&r[0]?r[0]:{});case 11:return e.abrupt("return",{});case 14:return e.prev=14,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{});case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),U=function(){var e=Object(y.a)(k.a.mark((function e(n){var a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.unsplash.com/search/photos?per_page=4&page=1&query=".concat(n,"&orientation=landscape&client_id=").concat("T0jCXzIigIBjuwNApWDyTtpNs_xUi2Lu1hWOBMjKFFs"));case 3:if(!(a=e.sent).ok){e.next=9;break}return e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r.results?r.results.map((function(e){return{imgUrl:e.urls.regular,id:e.id,descrp:e.description}})):[]);case 9:return e.abrupt("return",[]);case 12:return e.prev=12,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}(),A=(a(21),function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),a=n[0],t=n[1],i=Object(r.useState)(""),o=Object(s.a)(i,2),b=o[0],m=o[1],x=Object(r.useState)("japan"),w=Object(s.a)(x,2),k=w[0],y=w[1],A=Object(r.useState)({}),I=Object(s.a)(A,2),M=I[0],B=I[1],G=Object(r.useState)(""),L=Object(s.a)(G,2),z=L[0],E=L[1],P=Object(r.useState)({}),K=Object(s.a)(P,2),R=K[0],D=K[1],H=Object(r.useState)([]),J=Object(s.a)(H,2),q=J[0],V=J[1],Z=Object(r.useState)(!1),Y=Object(s.a)(Z,2),W=Y[0],Q=Y[1],X=Object(r.useState)([]),$=Object(s.a)(X,2),ee=$[0],ne=$[1],ae=Object(r.useState)(!0),re=Object(s.a)(ae,2),te=re[0],ie=(re[1],Object(r.useState)("")),oe=Object(s.a)(ie,2),se=oe[0],ce=oe[1],le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;U(e).then((function(e){ne(e)})).catch((function(e){return console.log(e)})),S(e).then((function(e){D(e)})),Q(!0),F("hotels",e).then((function(e){return V(e)})).finally((function(){return Q(!1)})),F("attractions",e).then((function(e){return t(e)})),N(e).then((function(e){return B(e)}));var n=e[0].toUpperCase()+e.slice(1);E(C[n]||"Not Found"),document.getElementById("hero-link").click(),document.querySelector("div.input-container input").blur()};return Object(r.useEffect)((function(){Q(!0),U("Japan").then((function(e){ne(e)})).catch((function(e){return console.log(e)})).finally((function(){return Q(!1)})),S("Japan").then((function(e){return D(e)})).catch((function(e){return console.log(e)})),F("hotels","Japan").then((function(e){return V(e)})).catch((function(e){return console.log(e)})),F("attractions","Japan").then((function(e){return t(e)})).catch((function(e){return console.log(e)})),N("Japan").then((function(e){return B(e)})).catch((function(e){return console.log(e)})),E(C.Japan)}),[]),Object(r.useEffect)((function(){var e=[c,l,u,d,h],n=e[Math.floor(Math.random()*e.length)];document.querySelector(".hero-container").style.backgroundImage="url(".concat(n,")")}),[]),Object(r.useEffect)((function(){switch(z){case"One":m("#FFD885"),ce("Nonessential travel is permitted.");break;case"Two":m("#EF852B"),ce("Unvaccinated travelers who are at increased \n            risk for severe illness from COVID-19 should avoid \n            nonessential travel to the this location.");break;case"Three":m("#E34E27"),ce("Unvaccinated travelers should avoid \n            nonessential travel to this location.");break;case"Four":m("#AD363A"),ce("Avoid travel to this location. If you \n            must travel to this location, make sure you are \n            fully vaccinated.");break;case"Unknown":m("#666"),ce("Avoid travel to this location. If you \n            must travel to this location, make sure you are \n            fully vaccinated.");break;default:m("#666"),ce("Unknown location. Travel at your own risk.")}}),[z]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(T,{term:k,handleChange:function(e){y(e)},handleClick:le,validCountry:te}),Object(j.jsx)(v,{handleClick:function(){var e=Math.floor(Math.random()*_.length),n=_[e];E("One"),le(n)}}),Object(j.jsxs)("main",{children:[Object(j.jsx)(g,{photos:ee,loading:W,capital:R.capital,population:R.population,region:R.region,timezones:R.timezones,callingCodes:R.callingCodes,currencies:R.currencies,languages:R.languages,flag:R.flag,name:R.name}),Object(j.jsx)(p,{warningMessage:se,covidLevel:z,bgColor:b,confirmed:M.Confirmed,deaths:M.Deaths,recovered:M.Recovered,active:M.Active}),Object(j.jsxs)("div",{className:"businesses-container",children:[Object(j.jsx)(O,{businesses:q,heading:"Hotels"}),Object(j.jsx)(O,{businesses:a,heading:"Tourist Attractions"})]})]}),Object(j.jsx)(f,{})]})}),I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(n){var a=n.getCLS,r=n.getFID,t=n.getFCP,i=n.getLCP,o=n.getTTFB;a(e),r(e),t(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(t.a.StrictMode,{children:Object(j.jsx)(A,{})}),document.getElementById("transit-hub-app")),I()}],[[22,1,2]]]);
//# sourceMappingURL=main.f7801199.chunk.js.map