(this["webpackJsonptodo-firebase"]=this["webpackJsonptodo-firebase"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(5),r=c(10),s=c.n(r),a=(c(19),c(20),c(14)),o=c(8),d=(c(21),c(11));c(24);d.a.initializeApp({apiKey:"AIzaSyBL5L8U44itya454Qd-n-Bcx6-fb1P-mWA",authDomain:"just-clock-it-5ce00.firebaseapp.com",projectId:"just-clock-it-5ce00",storageBucket:"just-clock-it-5ce00.appspot.com",messagingSenderId:"990794597626",appId:"1:990794597626:web:42e259a71feeb6be663543",measurementId:"G-RDJH4HP66W"});var l=d.a,j={TIME_ASC:{column:"time_seconds",direction:"asc"},TIME_DESC:{column:"time_seconds",direction:"desc"},TITLE_ASC:{column:"title",direction:"asc"},TITLE_DESC:{column:"title",direction:"desc"}};var u=function(){var e=Object(i.useState)("TIME_ASC"),t=Object(o.a)(e,2),c=t[0],r=t[1],s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"TIME_ASC",t=Object(i.useState)([]),c=Object(o.a)(t,2),n=c[0],r=c[1];return Object(i.useEffect)((function(){var t=l.firestore().collection("times").orderBy(j[e].column,j[e].direction).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(a.a)({id:e.id},e.data())}));r(t)}));return function(){return t()}}),[e]),n}(c);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:Object(n.jsx)("h2",{children:"Tasks"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Sort By: "}),Object(n.jsxs)("select",{value:c,onChange:function(e){return r(e.currentTarget.value)},children:[Object(n.jsx)("option",{value:"TIME_ASC",children:"Ascending Order (duration wise)"}),Object(n.jsx)("option",{value:"TIME_DESC",children:"Descending Order (duration wise)"}),Object(n.jsx)("option",{disabled:!0,children:"---"}),Object(n.jsx)("option",{value:"TITLE_ASC",children:"Alphabetically (a-z)"}),Object(n.jsx)("option",{value:"TITLE_DESC",children:"Alphabetically (z-a)"})]})]}),Object(n.jsx)("ol",{children:s.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsxs)("div",{className:"time-entry",children:[e.title,Object(n.jsxs)("code",{className:"time",children:[e.time_seconds," mins"]})]})},e.id)}))})]})};var b=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),c=t[0],r=t[1],s=Object(i.useState)(""),a=Object(o.a)(s,2),d=a[0],j=a[1];return Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l.firestore().collection("times").add({title:c,time_seconds:parseInt(d)}).then((function(){r(""),j("")}))},children:[Object(n.jsx)("h4",{children:"Add Tasks"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Name"}),Object(n.jsx)("input",{type:"text",value:c,onChange:function(e){return r(e.currentTarget.value)}})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{children:"Duration"}),Object(n.jsx)("input",{type:"number",value:d,onChange:function(e){return j(e.currentTarget.value)}})]}),Object(n.jsx)("button",{children:"Add"})]})};l.firestore().collection("times").add({title:"",time_seconds:""});var O=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"To do List based on Firebase"}),Object(n.jsx)(u,{}),Object(n.jsx)(b,{})]})};s.a.render(Object(n.jsx)(O,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.84c02d10.chunk.js.map