"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[3379],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),g=r,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||s;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},73102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={id:"creating-tests",title:"Creating Tests",description:"Tracetest enables creating tests visually in the Tracetest Web UI.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},i=void 0,o={unversionedId:"web-ui/creating-tests",id:"web-ui/creating-tests",title:"Creating Tests",description:"Tracetest enables creating tests visually in the Tracetest Web UI.",source:"@site/docs/web-ui/creating-tests.mdx",sourceDirName:"web-ui",slug:"/web-ui/creating-tests",permalink:"/web-ui/creating-tests",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/web-ui/creating-tests.mdx",tags:[],version:"current",frontMatter:{id:"creating-tests",title:"Creating Tests",description:"Tracetest enables creating tests visually in the Tracetest Web UI.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Configuring Data Stores",permalink:"/web-ui/creating-data-stores"},next:{title:"Creating Test Specifications",permalink:"/web-ui/creating-test-specifications"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Main Screen",src:n(96138).Z,width:"2874",height:"1556"})),(0,r.kt)("p",null,"Click the ",(0,r.kt)("strong",{parentName:"p"},"Create")," button and select ",(0,r.kt)("strong",{parentName:"p"},"Create New Test")," in the drop down:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create a Test Button",src:n(52115).Z,width:"2874",height:"1580"})),(0,r.kt)("p",null,'The "Create New Test" dialog appears:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create a Test",src:n(80528).Z,width:"3774",height:"1894"})),(0,r.kt)("p",null,"The option to choose the kind of trigger to initiate the trace is presented:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTP Request - Create a basic HTTP request."),(0,r.kt)("li",{parentName:"ul"},"GRPC Request - Test and debug your GRPC request."),(0,r.kt)("li",{parentName:"ul"},"cURL Command - Define your HTTP test via a cURL command."),(0,r.kt)("li",{parentName:"ul"},"Postman Collection - Define your HTTP request via a Postman collection."),(0,r.kt)("li",{parentName:"ul"},"TraceID - Define your test via a TraceID."),(0,r.kt)("li",{parentName:"ul"},"Kafka - Test consumers with Kafka messages")),(0,r.kt)("p",null,"Choose the trigger and click ",(0,r.kt)("strong",{parentName:"p"},"Next"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Choose Trigger",src:n(10122).Z,width:"3774",height:"1894"})),(0,r.kt)("p",null,"In this example, HTTP Request has been chosen."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Choose Example",src:n(26740).Z,width:"2874",height:"1550"})),(0,r.kt)("p",null,"Input the ",(0,r.kt)("strong",{parentName:"p"},"Name")," of the test and the ",(0,r.kt)("strong",{parentName:"p"},"Description")," or select one of the example provided in the drop down:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Choose Example Pokemon",src:n(28860).Z,width:"2874",height:"1546"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Pokemon - Import")," example has been chosen. Then click ",(0,r.kt)("strong",{parentName:"p"},"Next"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Choose Example Pokemon",src:n(15033).Z,width:"2874",height:"1546"})),(0,r.kt)("p",null,"Add any additional information and click ",(0,r.kt)("strong",{parentName:"p"},"Create & Run"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create Test",src:n(96168).Z,width:"2874",height:"1536"})),(0,r.kt)("p",null,"The test will start:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Awaiting Trace",src:n(35906).Z,width:"2874",height:"1564"})),(0,r.kt)("p",null,"When the test is finished, you will get the following results:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Finished Trace",src:n(92530).Z,width:"2874",height:"1546"})),(0,r.kt)("p",null,"Please visit the ",(0,r.kt)("a",{parentName:"p",href:"/web-ui/test-results"},"Test Results")," document for an explanation of viewing the results of a test."))}d.isMDXComponent=!0},35906:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/awaiting-trace-0.11-3299e680a39d9c9fae62b3e0453bf694.png"},26740:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/choose-example-0.11-db237068b0c1ca899c21b5bcff0da9a1.png"},28860:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/choose-example-pokemon-0.11-e189c60f4ac214a33969414a726f76ba.png"},15033:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/choose-example-pokemon-import-0.11-5a0a248e8905ec04399957dbc413baa5.png"},10122:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/choose-trigger-0.13-e97ba46b0552c78fb0758fafc6d556f6.png"},52115:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-button-0.11-e551a0ebce3bae9cf7392488d776e4db.png"},80528:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-test-0.13-18e81d633f0532851146ababbb7619ee.png"},92530:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/finished-trace-0.11-eb55625a356d02c881e960b49541d8dc.png"},96138:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/main-screen-0.11-cfb6b328cd6a37a3da4fff264473b8b4.png"},96168:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/provide-addl-information-0.11-9dc5b45b4e7550061a8f785089d89ed0.png"}}]);