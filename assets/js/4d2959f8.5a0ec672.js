"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[7869],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,y=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return r?o.createElement(y,i(i({ref:t},c),{},{components:r})):o.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},56437:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={id:"try-live-demos",title:"Try Live Demos!",description:"Tracetest has .",keywords:["tracetest","trace-based testing","opentelemetry store demo","open telemetry demo","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1689693872/docs/Blog_Thumbnail_28_ugy2yy.png"},i=void 0,s={unversionedId:"getting-started/try-live-demos",id:"getting-started/try-live-demos",title:"Try Live Demos!",description:"Tracetest has .",source:"@site/docs/getting-started/try-live-demos.mdx",sourceDirName:"getting-started",slug:"/getting-started/try-live-demos",permalink:"/getting-started/try-live-demos",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/getting-started/try-live-demos.mdx",tags:[],version:"current",frontMatter:{id:"try-live-demos",title:"Try Live Demos!",description:"Tracetest has .",keywords:["tracetest","trace-based testing","opentelemetry store demo","open telemetry demo","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1689693872/docs/Blog_Thumbnail_28_ugy2yy.png"},sidebar:"tutorialSidebar",previous:{title:"What if I don't have OpenTelemetry installed?",permalink:"/getting-started/no-otel"},next:{title:"Configuration",permalink:"/configuration/overview"}},p={},l=[{value:"OpenTelemetry Astronomy Shop Demo",id:"opentelemetry-astronomy-shop-demo",level:2},{value:"Pokeshop API Demo",id:"pokeshop-api-demo",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Tracetest has two shared demo environments which allow you to view, create, and run tests. Playing with these is a great way to get started learning to use Tracetest. ",(0,n.kt)("em",{parentName:"p"},"Hint, hint... it is really easy!")," \ud83d\ude09"),(0,n.kt)("h2",{id:"opentelemetry-astronomy-shop-demo"},"OpenTelemetry Astronomy Shop Demo"),(0,n.kt)("p",null,"The official ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-demo"},"demo of the OpenTelemetry project"),"!"),(0,n.kt)("p",null,"\ud83d\udc49 ",(0,n.kt)("strong",{parentName:"p"},"Join our ",(0,n.kt)("a",{parentName:"strong",href:"https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/invites/invite_646747b36e9ee487/accept"},"shared OpenTelemetry Demo environment"),".")),(0,n.kt)("p",null,"Once you join, check out the ",(0,n.kt)("a",{parentName:"p",href:"/live-examples/opentelemetry-store/overview/"},"live examples of the OpenTelemetry Demo store"),"."),(0,n.kt)("h2",{id:"pokeshop-api-demo"},"Pokeshop API Demo"),(0,n.kt)("p",null,"Tracetest has fun microservice app built using nodejs. Has two services, and RabbitMQ communicating between them."),(0,n.kt)("p",null,"\ud83d\udc49 ",(0,n.kt)("strong",{parentName:"p"},"Join our ",(0,n.kt)("a",{parentName:"strong",href:"https://app.tracetest.io/organizations/ttorg_2179a9cd8ba8dfa5/invites/invite_760904a64b4b9dc9/accept"},"shared Pokeshop API Demo environment"),".")),(0,n.kt)("p",null,"Once you join, check out the ",(0,n.kt)("a",{parentName:"p",href:"/live-examples/pokeshop/overview"},"live examples of the Pokeshop API Demo"),"."))}d.isMDXComponent=!0}}]);