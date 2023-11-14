"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[8629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},38238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={id:"exporting-tests",title:"Exporting Tests",description:"Tracetest enables exporting test results with JUnit and exporting the test definition with a YAML file in the Tracetest Web UI.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},s=void 0,a={unversionedId:"web-ui/exporting-tests",id:"web-ui/exporting-tests",title:"Exporting Tests",description:"Tracetest enables exporting test results with JUnit and exporting the test definition with a YAML file in the Tracetest Web UI.",source:"@site/docs/web-ui/exporting-tests.mdx",sourceDirName:"web-ui",slug:"/web-ui/exporting-tests",permalink:"/web-ui/exporting-tests",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/web-ui/exporting-tests.mdx",tags:[],version:"current",frontMatter:{id:"exporting-tests",title:"Exporting Tests",description:"Tracetest enables exporting test results with JUnit and exporting the test definition with a YAML file in the Tracetest Web UI.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"Test Results",permalink:"/web-ui/test-results"},next:{title:"Undefined Variables",permalink:"/web-ui/undefined-variables"}},l={},c=[{value:"JUnit Results XML",id:"junit-results-xml",level:2},{value:"Test Definition YAML",id:"test-definition-yaml",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tracetest allows you to export the different set of information displayed for assertions and checks to use it as input for other tools and create text-based tests to use on your CI/CD pipelines using the CLI and more options."),(0,i.kt)("p",null,"The current supported exports are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"JUnit results XML."),(0,i.kt)("li",{parentName:"ol"},"Test Definition YAML.")),(0,i.kt)("p",null,'To access any of the available exports, go to the run/trace page details for any test and, at the top right next to "Run Test", you\'ll find a settings icon which will display the options.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Export Trace Options",src:n(96986).Z,width:"2874",height:"1588"})),(0,i.kt)("h2",{id:"junit-results-xml"},"JUnit Results XML"),(0,i.kt)("p",null,'To access the JUnit XML file, select the "JUnit Results" option from the dropdown and you\'ll find the file viewer modal with the location to download the file.\nThe JUnit report contains the results from each of the assertions added to the test and their statuses. Depending on how many assertions the test has, this file will grow.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Export Trace JUnit",src:n(73890).Z,width:"2874",height:"1580"})),(0,i.kt)("h2",{id:"test-definition-yaml"},"Test Definition YAML"),(0,i.kt)("p",null,'The Tracetest CLI allows you to execute text-based tests. This means you can store all of your tests in a repo, keep track of the different versions and use them for your CI/CD process.\nAn easy way to start is to export the test definition directly from the UI by selecting the "Test Definition" option from the dropdown.\nThe file viewer modal will pop up and you can copy paste or download the file.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Export Trace Test Definition",src:n(24102).Z,width:"2874",height:"1590"})))}u.isMDXComponent=!0},96986:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/export-trace-options-0.11-f21433509377c25a88694b8b950c4e47.png"},73890:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/exports-junit-0.11-6fe5e85e2c6d47361912698dae3d3266.png"},24102:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/exports-test-definition-0.11-6a9f3ff3ecd2c0350d8ff0ec6930da80.png"}}]);