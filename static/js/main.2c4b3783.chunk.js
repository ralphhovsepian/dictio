(this.webpackJsonpdictio=this.webpackJsonpdictio||[]).push([[0],{34:function(e,a,t){e.exports=t.p+"static/media/logo.3ca6f1eb.png"},35:function(e,a,t){e.exports=t.p+"static/media/Loader.61ceae8c.svg"},37:function(e,a,t){e.exports=t.p+"static/media/book.8ac9c079.svg"},38:function(e,a,t){e.exports=t.p+"static/media/empty.cfb49f55.svg"},39:function(e,a,t){e.exports=t.p+"static/media/search.e7cc1222.svg"},40:function(e,a,t){e.exports=t(73)},45:function(e,a,t){},46:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(31),r=t.n(l),i=(t(45),t(3)),s=(t(46),t(19)),o=t(5),m=t(24),u=t.n(m),d=t(32),f=t(33),E=t.n(f).a.initializeApp({apiKey:"AIzaSyCOYsoCD5a15x6vVWeD5yCU9seEtQq8TH0",authDomain:"dictio-c6541.firebaseapp.com",databaseURL:"https://dictio-c6541.firebaseio.com",projectId:"dictio-c6541",storageBucket:"dictio-c6541.appspot.com",messagingSenderId:"895439554932",appId:"1:895439554932:web:e4d01a17d15853f7dec421"}),g=(t(58),t(15)),v=t.n(g),h=t(34),p=t.n(h),b=t(13),w=(t(59),Object(n.createContext)()),N=function(e){var a=Object(n.useState)({}),t=Object(i.a)(a,2),l=t[0],r=t[1],s=Object(n.useState)({email:"",password:""}),o=Object(i.a)(s,2),m=o[0],u=o[1],d=Object(n.useState)(""),f=Object(i.a)(d,2),E=f[0],g=f[1],v=Object(n.useState)(""),h=Object(i.a)(v,2),p=h[0],b=h[1],N=Object(n.useState)(""),j=Object(i.a)(N,2),O=j[0],x=j[1],y=Object(n.useState)(""),C=Object(i.a)(y,2),S=C[0],k=C[1];return c.a.createElement(w.Provider,{value:{users:[l,r],current:[m,u],search:[E,g],wordResults:[p,b],saved:[O,x],Loader:[S,k]}},e.children)},j=t(35),O=t.n(j);t(60);var x=function(){return c.a.createElement("div",{className:"Loader"},c.a.createElement("img",{src:O.a,alt:"Loader"}))};function y(){var e=Object(n.useContext)(w),a=e.users,t=e.current,l=e.Loader,r=Object(i.a)(a,2),s=(r[0],r[1],Object(i.a)(t,2)),o=s[0],m=s[1],u=Object(i.a)(l,2),d=(u[0],u[1]);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".modal");v.a.Modal.init(e,[])}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"login",className:"modal"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("h3",null,"Login"),c.a.createElement("div",{className:"row"},c.a.createElement("form",{className:"col s12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("i",{className:"material-icons prefix"},"account_circle"),c.a.createElement("input",{id:"icon_prefix",type:"text",className:"validate",onChange:function(e){return m(Object(b.a)(Object(b.a)({},o),{},{email:e.target.value}))},value:o.email}),c.a.createElement("label",{htmlFor:"icon_prefix"},"Email")),c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("i",{className:"material-icons prefix"},"lock"),c.a.createElement("input",{onChange:function(e){return m(Object(b.a)(Object(b.a)({},o),{},{password:e.target.value}))},value:o.password,id:"icon_telephone",type:"password",className:"validate"}),c.a.createElement("label",{htmlFor:"icon_telephone"},"Password")),c.a.createElement("a",{className:"modal-close waves-effect waves-light btn",onClick:function(e){e.preventDefault(),d(!0),E.auth().signInWithEmailAndPassword(o.email,o.password).then((function(e){return m({email:"",password:""}),d(!1)})).catch((function(e){console.log(e),d(!1)}))},href:"#!",id:"login"},"Login"))))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("a",{href:"#!",className:"modal-close waves-effect waves-green btn-flat"},"Close"))),c.a.createElement("div",{id:"signup",className:"modal"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("h3",null,"Sign up"),c.a.createElement("div",{className:"row"},c.a.createElement("form",{className:"col s12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("i",{className:"material-icons prefix"},"account_circle"),c.a.createElement("input",{onChange:function(e){return m(Object(b.a)(Object(b.a)({},o),{},{email:e.target.value}))},value:o.email,id:"icon_prefix",type:"text",className:"validate"}),c.a.createElement("label",{htmlFor:"icon_prefix"},"Email")),c.a.createElement("div",{className:"input-field col s6"},c.a.createElement("i",{className:"material-icons prefix"},"lock"),c.a.createElement("input",{onChange:function(e){return m(Object(b.a)(Object(b.a)({},o),{},{password:e.target.value}))},value:o.password,id:"icon_telephone",type:"password",className:"validate"}),c.a.createElement("label",{htmlFor:"icon_telephone"},"Password")),c.a.createElement("a",{onClick:function(e){e.preventDefault(),d(!0),E.auth().createUserWithEmailAndPassword(o.email,o.password).then((function(e){m({email:"",password:""}),d(!1);e.user.uid;var a=e.user.email;E.firestore().collection("accounts").doc(a).set({})})).catch((function(e){console.log(e)}))},className:"modal-close waves-effect waves-light btn",id:"signup"},"signup"))))),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("a",{href:"#!",className:"modal-close waves-effect waves-green btn-flat"},"Close"))))}function C(){var e=Object(n.useContext)(w),a=e.users,t=e.current,l=e.search,r=e.wordResults,o=e.Loader,m=Object(i.a)(a,2),f=m[0],g=m[1],h=Object(i.a)(t,2),b=(h[0],h[1],Object(i.a)(l,2)),N=b[0],j=b[1],O=Object(i.a)(r,2),x=(O[0],O[1]),C=Object(i.a)(o,2),S=(C[0],C[1]),k=function(){E.auth().signOut(),x(""),j(""),g("")};document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".sidenav");v.a.Sidenav.init(e,[])}));var L=function(){var e=Object(d.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),x(""),S(!0),e.next=5,fetch("https://www.dictionaryapi.com/api/v3/references/learners/json/".concat(N,"?key=").concat("a29292a6-8fb5-47d0-b40c-f0a6c5b38b1d")).then((function(e){return e.json()})).then((function(e){x(e),S(!1)})).catch((function(e){console.log("error"),x("")}));case 5:return e.sent,e.next=8,j("");case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"Nav"},c.a.createElement("nav",{className:"transparent z-depth-0"},c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(s.b,{to:"/dictio/"},c.a.createElement("a",{className:"logo"},c.a.createElement("img",{src:p.a}))),c.a.createElement("a",{href:"#","data-target":"mobile-demo",class:"sidenav-trigger"},c.a.createElement("i",{class:"material-icons",id:"menu"},"menu")),c.a.createElement("ul",{className:"right hide-on-med-and-down"},f?c.a.createElement(c.a.Fragment,null,c.a.createElement("li",null,c.a.createElement("form",{onSubmit:L},c.a.createElement("input",{id:"search",type:"search",placeholder:"Search",value:N,onChange:function(e){return j(e.target.value)},required:!0}))),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/dictio/Saved/"},c.a.createElement("a",{className:"waves-effect waves-light btn",id:"right"},c.a.createElement("i",{className:"material-icons prefix"},"bookmark")))),c.a.createElement("li",null,c.a.createElement("a",{className:"waves-effect waves-light btn",onClick:k,id:"right"},"Logout"))):c.a.createElement(c.a.Fragment,null,c.a.createElement("li",null,c.a.createElement("a",{"data-target":"login",className:"waves-effect waves-light btn modal-trigger",href:"#login",id:"right"},"Login")),c.a.createElement("li",null,c.a.createElement("a",{"data-target":"signup",href:"#signup",className:"waves-effect waves-light btn modal-trigger",id:"right"},"Sign up")))))),c.a.createElement(y,null),c.a.createElement("ul",{class:"sidenav",id:"mobile-demo"},f?c.a.createElement(c.a.Fragment,null,c.a.createElement("li",null,c.a.createElement("form",{onSubmit:L},c.a.createElement("input",{id:"search",type:"search",placeholder:"Search",value:N,onChange:function(e){return j(e.target.value)},required:!0}))),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/dictio/Saved/"},c.a.createElement("a",{className:"waves-effect waves-light btn",id:"right"},c.a.createElement("i",{className:"material-icons prefix"},"bookmark")))),c.a.createElement("li",null,c.a.createElement("a",{className:"waves-effect waves-light btn",onClick:k,id:"right"},"Logout"))):c.a.createElement(c.a.Fragment,null,c.a.createElement("li",null,c.a.createElement("a",{"data-target":"login",className:"waves-effect waves-light btn modal-trigger",href:"#login",id:"right"},"Login")),c.a.createElement("li",null,c.a.createElement("a",{"data-target":"signup",href:"#signup",className:"waves-effect waves-light btn modal-trigger",id:"right"},"Sign up")))))}var S=t(12),k=(t(65),t(37)),L=t.n(k);function D(){var e,a=Object(n.useContext)(w),t=a.users,l=a.current,r=Object(i.a)(t,2),s=(r[0],r[1],Object(i.a)(l,2));s[0],s[1];return c.a.createElement("div",{className:"Header"},c.a.createElement("div",null,c.a.createElement("h2",null,"Discover and pin new words!"),c.a.createElement("h5",null,"Search for any word that you can't understand, check the definition and pin it for later use!"),c.a.createElement("a",(e={className:"waves-effect waves-light btn-large","data-target":"login"},Object(S.a)(e,"className","waves-effect waves-light btn modal-trigger"),Object(S.a)(e,"href","#login"),e),"Get started",c.a.createElement("i",{class:"material-icons left"},"login"))),c.a.createElement("img",{src:L.a,alt:"book worm"}),c.a.createElement(y,null))}t(66);var F=t(20),A=t(21);function _(){return c.a.createElement("div",{className:"Footer"},c.a.createElement("footer",{className:"page-footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col l6 s12"},c.a.createElement("h5",{className:"white-text"},"Dictio App"),c.a.createElement("br",null),c.a.createElement("p",{className:"grey-text text-lighten-4"},"Made by Ralph with \u2764\ufe0f")))),c.a.createElement("div",{className:"footer-copyright"},c.a.createElement("div",{className:"container"},"\xa9 2020 All rights reserverd",c.a.createElement("a",{className:"grey-text text-lighten-4 right",href:"#!"},c.a.createElement(F.a,{icon:A.a})),c.a.createElement("a",{className:"grey-text text-lighten-4 right",href:"#!"},c.a.createElement(F.a,{icon:A.d})),c.a.createElement("a",{className:"grey-text text-lighten-4 right",href:"#!"},c.a.createElement(F.a,{icon:A.c})),c.a.createElement("a",{className:"grey-text text-lighten-4 right",href:"#!"},c.a.createElement(F.a,{icon:A.b}))))))}t(69);var R=t(38),I=t.n(R);function q(){var e=Object(n.useContext)(w),a=e.users,t=e.wordResults,l=e.saved,r=e.Loader,s=Object(i.a)(a,2),o=s[0],m=(s[1],Object(i.a)(t,2)),u=(m[0],m[1],Object(i.a)(l,2)),d=u[0],f=u[1],g=Object(i.a)(r,2);g[0],g[1];Object(n.useEffect)((function(){E.firestore().collection("accounts").doc("".concat(o.email)).get().then((function(e){if(e.exists){console.log("Document data:",e.data());var a=e.data();return f(a)}console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))}),[d]);return c.a.createElement("div",{className:"Saved"},c.a.createElement("h4",null,"Saved"),0===Object.keys(d).length?c.a.createElement("img",{src:I.a}):"",Object.keys(d).map((function(e,a){return""==d[e]?console.log("nooo"):c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col s12 m6"},c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-image"},c.a.createElement("h3",{id:"savedTitle"},e),c.a.createElement("a",{onClick:function(){return a=e,E.firestore().collection("accounts").doc(o.email).update(Object(S.a)({},a,"")),void v.a.toast({html:"Deleted!"});var a},class:"btn-floating halfway-fab waves-effect waves-light red"},c.a.createElement("i",{class:"material-icons"},"remove"))),c.a.createElement("div",{class:"card-content"},c.a.createElement("p",null,d[e])))))})))}var P=t(39),W=t.n(P);t(70),t(71);function M(){var e=Object(n.useContext)(w),a=e.wordResults,t=e.users,l=Object(i.a)(a,2),r=l[0],s=(l[1],Object(i.a)(t,2)),o=s[0];s[1];return c.a.createElement("div",{className:"ShowResult"},"object"===typeof r[0]?c.a.createElement("div",null,c.a.createElement("h3",null,r[0].meta.id),c.a.createElement("p",null,r[0].shortdef),c.a.createElement("a",{className:"btn-floating btn-large waves-effect waves-light red",onClick:function(){E.firestore().collection("accounts").doc(o.email).set(Object(S.a)({},r[0].meta.id,r[0].shortdef),{merge:!0}).then((function(){console.log("Document successfully written!"),v.a.toast({html:"Saved!"})})).catch((function(e){console.error("Error writing document: ",e)}))}},c.a.createElement("i",{className:"material-icons"},"bookmark"))):c.a.createElement("div",null,c.a.createElement("a",{href:"#!",class:"error"},"Not found")))}function z(){var e=Object(n.useContext)(w).wordResults,a=Object(i.a)(e,2),t=a[0];a[1];return c.a.createElement("div",{className:"Home"},""==t?c.a.createElement("img",{src:W.a,alt:"search"}):c.a.createElement(M,null))}var B=function(){var e=Object(n.useContext)(w),a=e.users,t=e.current,l=e.Loader,r=Object(i.a)(a,2),m=r[0],u=r[1],d=Object(i.a)(t,2),f=(d[0],d[1],Object(i.a)(l,2)),g=f[0];return f[1],Object(n.useEffect)((function(){E.auth().onAuthStateChanged((function(e){u(e||null)}))})),c.a.createElement("div",{className:"App"},c.a.createElement(s.a,null,g?c.a.createElement(x,null):"",c.a.createElement(C,null),c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"/dictio/"},m?c.a.createElement(z,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null),c.a.createElement(_,null))),c.a.createElement(o.b,{exact:!0,path:"/dictio/Saved/"},m?c.a.createElement(q,null):c.a.createElement(o.a,{to:"/"})))))};t(72),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(N,null,c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.2c4b3783.chunk.js.map