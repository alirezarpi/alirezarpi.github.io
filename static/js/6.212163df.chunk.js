(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{57:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),o=n(7),i=n(21),a=function(e){var t=e.data;return Object(r.jsx)("article",{className:"degree-container",children:Object(r.jsxs)("header",{children:[Object(r.jsx)("h4",{className:"degree",children:t.degree}),Object(r.jsxs)("p",{className:"school",children:[Object(r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"education",children:[Object(r.jsx)("div",{className:"link-to",id:"education"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(r.jsx)(a,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(r.jsxs)("article",{className:"jobs-container",children:[Object(r.jsxs)("header",{children:[Object(r.jsxs)("h4",{children:[Object(r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(r.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(r.jsx)("li",{children:e},e)}))})]})},p=function(e){var t=e.data;return Object(r.jsxs)("div",{className:"experience",children:[Object(r.jsx)("div",{className:"link-to",id:"experience"}),Object(r.jsx)("div",{className:"title",children:Object(r.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(r.jsx)(u,{data:e},e.company)}))]})};p.defaultProps={data:[]};var d=p;function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var c=y(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return h(this,n)}}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e){var t=e.handleClick,n=e.active,c=e.label;return Object(r.jsx)("button",{className:"skillbutton ".concat(n[c]?"skillbutton-active":""),type:"button",onClick:function(){return t(c)},children:c})},k=function(e){var t=e.data,n=e.categories,c=t.category,o=t.competency,i=t.title,a={background:n.filter((function(e){return c.includes(e.name)})).map((function(e){return e.color}))[0]},s=v(v({},a),{},{width:"".concat(String(Math.min(100,Math.max(o/5*100,0))),"%")});return Object(r.jsxs)("div",{className:"skillbar clearfix",children:[Object(r.jsx)("div",{className:"skillbar-title",style:a,children:Object(r.jsx)("span",{children:i})}),Object(r.jsx)("div",{className:"skillbar-bar",style:s}),Object(r.jsxs)("div",{className:"skill-bar-percent",children:[o," / 5"]})]})};k.defaultProps={categories:[]};var C=k,w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(i,e);var t,n,c,o=j(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return v(v({},n),{},g({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return v(v({},e),{},g({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=i,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(r.jsx)(C,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(r.jsx)(x,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsx)("div",{className:"link-to",id:"skills"}),Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h3",{children:"Skills"}),Object(r.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&b(t.prototype,n),c&&b(t,c),i}(c.Component);w.defaultProps={skills:[],categories:[]};var I=w,S=[{school:"Islamic Azadi University",degree:"B.S. Computer Engineering",link:"https://khuisf.ac.ir",year:2019}],P=[{company:"Connect to WOW",position:"DevOps, Cloud Engineer.",link:"https://connect2wow.com",daterange:"Oct 2020 - Present",points:["Implementing CI on Trunk-based development.","Implementing Infrastructure as a Code by creating template files and Playbooks.","Building standard CI/CD pipelines including Test Gates, Code Quality and etc.","Implementing immutable infrastructure, Versioning images for upcoming rollbacks and rollouts","Having understanding of service based applications, Microservices and agile methodologies is one of the aspects that helped me implementing better structure for this infrastructure.","Improving CI/CD delivery performance by creating new contexts in build and made time to ship new features improved by 30%.","Creating isolated development environment with developer friendly scripts as maintaining tool on each infrastructure we need (K8s, Nomad, Swarm)"]},{company:"SnappCarFix",position:"DevOps Engineer. (Part-time)",link:"https://snappcarfix.com",daterange:"Jan 2021 - June 2021",points:["Implementing CI on Trunk-based development.","Implementing better workflow for continues delivery.","Improving CI/CD timing by creating contexts and clean Dockerfile.","Running load tests / stress tests on the Infrastructure."]},{company:"SnappCarFix",position:"Backend Developer.",link:"https://snappcarfix.com",daterange:"May 2019 - Oct 2020",points:["Focusing on performance of code due to high RPS .","Improving API response times by memory caching, less joins and indexed DB.","Keeping code base clean by writing Unit/Integrated tests."]}],N=n(17);var D=n(23);var A,E=[{title:"Kubernetes",competency:3,category:["Container Orchestration","Infrastructure"]},{title:"Nomad",competency:4,category:["Container Orchestration","Infrastructure"]},{title:"Docker Swarm",competency:2,category:["Container Orchestration"]},{title:"Shell Script",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Infrastructure","Tools"]},{title:"PostgreSQL",competency:4,category:["Databases","Languages"]},{title:"MySQL",competency:4,category:["Databases","Languages"]},{title:"Django",competency:5,category:["Web Development","Python"]},{title:"Flask",competency:2,category:["Web Development","Python"]},{title:"Git",competency:4,category:["Tools"]},{title:"Ansible",competency:3,category:["IaC","Tools"]},{title:"Terraform",competency:4,category:["IaC","Tools"]},{title:"Python",competency:5,category:["Languages"]},{title:"Go",competency:1,category:["Languages"]},{title:"Jenkins",competency:4,category:["CI/CD"]},{title:"Gitlab-CI",competency:4,category:["CI/CD"]},{title:"Github Action",competency:3,category:["CI/CD"]},{title:"ELK Stack",competency:2,category:["Monitoring"]},{title:"Prometheus Stack",competency:3,category:["Monitoring"]},{title:"Nginx",competency:3,category:["Load Balancer"]},{title:"HAProxy",competency:4,category:["Load Balancer"]},{title:"Fabio",competency:3,category:["Load Balancer"]},{title:"Consul",competency:3,category:["Load Balancer"]},{title:"Vagrant",competency:4,category:["Development Automation","Tools"]},{title:"Waypoint",competency:4,category:["Development Automation","Tools"]}].map((function(e){return v(v({},e),{},{category:e.category.sort()})})),L=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],T=(A=new Set(E.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(N.a)(e)}(A)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(A)||Object(D.a)(A)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:L[t]}})),R=["Education","Experience","Skills"];t.default=function(){return Object(r.jsx)(i.a,{title:"Resume",description:"Alireza Khalili's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook.",children:Object(r.jsxs)("article",{className:"post",id:"resume",children:[Object(r.jsx)("header",{children:Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h2",{"data-testid":"heading",children:Object(r.jsx)(o.b,{to:"resume",children:"Resume"})}),Object(r.jsx)("div",{className:"link-container",children:R.map((function(e){return Object(r.jsx)("h4",{children:Object(r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(r.jsx)(l,{data:S}),Object(r.jsx)(d,{data:P}),Object(r.jsx)(I,{skills:E,categories:T})]})})}}}]);
//# sourceMappingURL=6.212163df.chunk.js.map