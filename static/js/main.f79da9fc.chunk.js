(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{27:function(e,t,a){e.exports=a(60)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a.n(r),o=(a(32),a(25)),s=a(1);a(33),a(34);var m=function(e){return l.a.createElement("main",Object.assign({className:"wrapper"},e))},i=a(8),u=a(24),h=a.n(u),E=function(){return h.a.get("https://randomuser.me/api/?results=200&nat=us")};var f=function(e){return l.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};a(52);var p=function(e){return l.a.createElement("form",{className:"search"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"language"},"Search for Employee:"),l.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"search","aria-label":"Search",type:"search",className:"form-control",placeholder:"Begin typing to search by name"})))};var g=function(e){var t=e.employees,a=Object(n.useState)(!0),r=Object(i.a)(a,2),c=r[0],o=r[1],s=function(e){t.sort((function(t,a){return c?t.name[e]>a.name[e]?1:t.name[e]<a.name[e]?-1:0:a.name[e]>t.name[e]?1:a.name[e]<t.name[e]?-1:0})),o(!c)};return l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col",style:{textAlign:"center"}},"Photo"),l.a.createElement("th",{scope:"col",style:{textAlign:"center"}},l.a.createElement("button",{type:"button",onClick:function(){s("first")},className:"btn"},l.a.createElement("i",{className:"fas fa-sort"})),"First Name"),l.a.createElement("th",{scope:"col",style:{textAlign:"center"}},l.a.createElement("button",{type:"button",onClick:function(){s("last")},className:"btn"},l.a.createElement("i",{className:"fas fa-sort"})),"Last Name"),l.a.createElement("th",{scope:"col",style:{textAlign:"center"}},"Email"),l.a.createElement("th",{scope:"col",style:{textAlign:"center"}},"Phone"),l.a.createElement("th",{scope:"col",style:{textAlign:"center"}},"Age"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:e.login.username},l.a.createElement("td",{style:{textAlign:"center"}},l.a.createElement("img",{src:e.picture.large,alt:"employee",className:"img-thumbnail"})),l.a.createElement("td",{style:{textAlign:"center"}},e.name.first),l.a.createElement("td",{style:{textAlign:"center"}},e.name.last),l.a.createElement("td",{style:{textAlign:"center"}},e.email),l.a.createElement("td",{style:{textAlign:"center"}},e.phone),l.a.createElement("td",{style:{textAlign:"center"}},e.dob.age))}))))};var y=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),s=o[0],m=o[1],u=Object(n.useState)([]),h=Object(i.a)(u,2),y=h[0],d=h[1];return Object(n.useEffect)((function(){E().then((function(e){r(e.data.results),d(e.data.results)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",null,l.a.createElement(f,null,l.a.createElement(p,{search:s,handleInputChange:function(e){m(e.target.value),d((e.target.value,a.filter((function(e){return e.name.first||e.name.last||e.email||e.phone}))))}}),l.a.createElement(g,{employees:y})))};a(53);var d=function(){return l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Employee Directory"),l.a.createElement("p",null,"To sort results by first or last name, simply click on the caret symbol or begin to type in the search bar."))};var b=function(){return l.a.createElement(m,null,l.a.createElement(o.a,null,l.a.createElement(d,null),l.a.createElement("div",null,l.a.createElement(s.a,{exact:!0,path:"/",component:y}))))};a(59),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.f79da9fc.chunk.js.map