(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,n,t){"use strict";var i=t(1),c=t(0),l=t(16),a=t(3),r=t(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=s.NODE_ENV,o=s.REACT_APP_GA_TRACKING_ID;"production"===j&&r.a.initialize(o);var b=function(){var e=Object(a.f)().pathname;return Object(c.useEffect)((function(){"production"===j&&(r.a.set({page:e}),r.a.pageview(e))}),[e]),null},h=t(7),u=t(34),d=[{index:!0,label:"Alireza Khalili",path:"/"},{label:"Contact",path:"/contact"}],O=Object(c.lazy)((function(){return t.e(3).then(t.t.bind(null,56,7))})),x=function(){var e=Object(c.useState)(!1),n=Object(u.a)(e,2),t=n[0],l=n[1];return Object(i.jsxs)("div",{className:"hamburger-container",children:[Object(i.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(i.jsx)("ul",{children:t?Object(i.jsx)("li",{className:"menu close-menu",children:Object(i.jsx)("div",{onClick:function(){return l(!t)},className:"menu-hover",children:"\u2715"})}):Object(i.jsx)("li",{className:"menu open-menu",children:Object(i.jsx)("div",{onClick:function(){return l(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(i.jsx)(c.Suspense,{fallback:Object(i.jsx)(i.Fragment,{}),children:Object(i.jsx)(O,{right:!0,isOpen:t,children:Object(i.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(h.b,{to:e.path,onClick:function(){return l(!t)},children:Object(i.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(i.jsxs)("header",{id:"header",children:[Object(i.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(i.jsx)(h.b,{to:e.path,children:e.label},e.label)}))}),Object(i.jsx)("nav",{className:"links",children:Object(i.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(h.b,{to:e.path,children:e.label})},e.label)}))})}),Object(i.jsx)(x,{})]})},p=t(24),f=function(){return Object(i.jsxs)("section",{id:"sidebar",children:[Object(i.jsxs)("section",{id:"intro",children:[Object(i.jsx)(h.b,{to:"/",className:"logo",children:Object(i.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(i.jsxs)("header",{children:[Object(i.jsx)("h2",{children:"Alireza Khalili"}),Object(i.jsx)("p",{children:Object(i.jsx)("a",{href:"mailto:alireza.kh077@gmail.com",children:"alireza.kh077@gmail.com"})})]})]}),Object(i.jsxs)("section",{className:"blurb",children:[Object(i.jsx)("h2",{children:"About"}),Object(i.jsx)("p",{children:"Hi, I'm Alireza. I like building things. Someone who is in love with Linux and its architecture and open source advocate with passion for being a great DevOps engineer."})]}),Object(i.jsxs)("section",{id:"footer",children:[Object(i.jsx)(p.a,{}),Object(i.jsxs)("p",{className:"copyright",children:["\xa9 Alireza Khalili ",Object(i.jsx)(h.b,{to:"/",children:"alirezakhalili.ir"}),"."]})]})]})},g=function(){var e=Object(a.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},k=function(e){return Object(i.jsxs)(l.b,{children:[Object(i.jsx)(b,{}),Object(i.jsx)(g,{}),Object(i.jsxs)(l.a,{titleTemplate:"%s | Alireza Khalili",defaultTitle:"Alireza Khalili",children:[e.title&&Object(i.jsx)("title",{children:e.title}),Object(i.jsx)("meta",{name:"description",content:e.description})]}),Object(i.jsxs)("div",{id:"wrapper",children:[Object(i.jsx)(m,{}),Object(i.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(i.jsx)(f,{})]})]})};k.defaultProps={children:null,fullPage:!1,title:null,description:"Alireza Khalili's personal website."};n.a=k},24:function(e,n,t){"use strict";var i=t(1),c=(t(0),t(28)),l=t(29),a=t(30),r=t(31),s=t(32),j=t(33),o=[{link:"https://github.com/alirezarpi",label:"Github",icon:l.faGithub},{link:"https://www.facebook.com/alireza.khalili.96780/",label:"Facebook",icon:a.faFacebookF},{link:"https://www.instagram.com/alireza_rpi/",label:"Instagram",icon:r.faInstagram},{link:"https://www.linkedin.com/in/alirezarpi/",label:"LinkedIn",icon:s.faLinkedinIn},{link:"mailto:alireza.kh077@gmail.com",label:"Email",icon:j.faEnvelope}];n.a=function(){return Object(i.jsx)("ul",{className:"icons",children:o.map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:e.link,children:Object(i.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},47:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var i=t(1),c=t(0),l=t.n(c),a=t(15),r=t(7),s=t(3),j=t(21),o=(t(47),Object(c.lazy)((function(){return t.e(4).then(t.bind(null,54))}))),b=Object(c.lazy)((function(){return t.e(5).then(t.bind(null,55))})),h=Object(c.lazy)((function(){return t.e(6).then(t.bind(null,57))})),u=function(){return Object(i.jsx)(r.a,{basename:"",children:Object(i.jsx)(c.Suspense,{fallback:Object(i.jsx)(j.a,{}),children:Object(i.jsxs)(s.c,{children:[Object(i.jsx)(s.a,{exact:!0,path:"/",component:h}),Object(i.jsx)(s.a,{path:"/contact",component:o}),Object(i.jsx)(s.a,{component:b,status:404})]})})})},d=function(){return Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(u,{})})},O=document.getElementById("root");O.hasChildNodes()?Object(a.hydrate)(Object(i.jsx)(d,{}),O):Object(a.render)(Object(i.jsx)(d,{}),O)}},[[48,1,2]]]);
//# sourceMappingURL=main.93b11dbd.chunk.js.map