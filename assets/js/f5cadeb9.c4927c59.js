"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[8826],{3905:(e,t,s)=>{s.d(t,{Zo:()=>u,kt:()=>h});var n=s(67294);function r(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function l(e,t){if(null==e)return{};var s,n,r=function(e,t){if(null==e)return{};var s,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var s=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(s),m=r,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return s?n.createElement(h,a(a({ref:t},u),{},{components:s})):n.createElement(h,a({ref:t},u))}));function h(e,t){var s=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=s.length,a=new Array(i);a[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=s[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,s)}m.displayName="MDXCreateElement"},42406:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=s(87462),r=(s(67294),s(3905));const i={id:"test-results",title:"Test Results",description:"Tracetest enables viewing test results visually in the Tracetest Web UI.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},a=void 0,l={unversionedId:"web-ui/test-results",id:"web-ui/test-results",title:"Test Results",description:"Tracetest enables viewing test results visually in the Tracetest Web UI.",source:"@site/docs/web-ui/test-results.mdx",sourceDirName:"web-ui",slug:"/web-ui/test-results",permalink:"/web-ui/test-results",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/web-ui/test-results.mdx",tags:[],version:"current",frontMatter:{id:"test-results",title:"Test Results",description:"Tracetest enables viewing test results visually in the Tracetest Web UI.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Creating Test Outputs",permalink:"/web-ui/creating-test-outputs"},next:{title:"Exporting Tests",permalink:"/web-ui/exporting-tests"}},o={},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"From the ",(0,r.kt)("strong",{parentName:"p"},"All Tests")," screen, you can access all your existing tests, create new tests and see the results of any test that has been run.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"All Tests List",src:s(263).Z,width:"2874",height:"1554"})),(0,r.kt)("p",null,"CLick on the settings icon to the right of each test. You can delete the test from here:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tests Actions",src:s(98534).Z,width:"2874",height:"1558"})),(0,r.kt)("p",null,"Click on the arrow next to the test name and the list of test runs will appear:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select Test",src:s(80010).Z,width:"2874",height:"1582"})),(0,r.kt)("p",null,"Click on a test run and the Trigger Details screen will open. From here, you can change and save the details of the test. On the top right, there is a button to run the test and a settings icon with the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JUnit Results - The test results in JUnit format."),(0,r.kt)("li",{parentName:"ul"},"Test Definition - The test defintion YAML file."),(0,r.kt)("li",{parentName:"ul"},"Edit - Edit the test."),(0,r.kt)("li",{parentName:"ul"},"Delete - Delete the test.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Run Tests &amp; Options",src:s(32710).Z,width:"2874",height:"1586"})),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Trace")," tab to open the Trace Details screen:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Trace Tab View",src:s(91445).Z,width:"2874",height:"1586"})),(0,r.kt)("p",null," Use the icons at the bottom left to manipulate the test image. The options are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Graph View"),(0,r.kt)("li",{parentName:"ul"},"Timeline View"),(0,r.kt)("li",{parentName:"ul"},"Zoom In"),(0,r.kt)("li",{parentName:"ul"},"Zoom Out"),(0,r.kt)("li",{parentName:"ul"},"Fit View"),(0,r.kt)("li",{parentName:"ul"},"Mini Map")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Trace Tab Icons",src:s(50653).Z,width:"2874",height:"1586"})),(0,r.kt)("p",null,"The following shows the test in the ",(0,r.kt)("strong",{parentName:"p"},"Timeline View"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Timeline View",src:s(47822).Z,width:"2874",height:"1586"})),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Test")," tab to see the details of Test Specs and Assertions for the test:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Test Tab",src:s(4374).Z,width:"2874",height:"1584"})))}d.isMDXComponent=!0},263:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/all-tests-list-0.11-231fc1c1fef9683f263210d9f57f291e.png"},32710:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/run-test-and-option-0.11-282b7fc9ff92732e7d508ffcd1344846.png"},80010:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/select-test-0.11-c720e0d79fbd0bc99f2793396ff58d48.png"},4374:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/test-tab-0.11-8e609bdade721107f2a92ac8dfe95246.png"},98534:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/tests-actions-0.11-880a879a4790fad3cffd3d903e7da62e.png"},47822:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/timeline-view-0.11-97113f448ab8e13df55c08c6b9b839ee.png"},91445:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/trace-tab-0.11-8e44b48a80772acb2f47388e354d52e8.png"},50653:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/trace-tab-icons-0.11-98f2d60ee0e1195adb9cdbb22f27eebb.png"}}]);