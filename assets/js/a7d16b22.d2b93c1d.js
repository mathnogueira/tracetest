"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[5691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},34181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"opensearch",title:"OpenSearch",description:"Use OpenSearch as the trace data store for Tracetest. You can use the native connection from Tracetest to pull telemetry data directly from OpenSearch.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},c=void 0,i={unversionedId:"configuration/connecting-to-data-stores/opensearch",id:"configuration/connecting-to-data-stores/opensearch",title:"OpenSearch",description:"Use OpenSearch as the trace data store for Tracetest. You can use the native connection from Tracetest to pull telemetry data directly from OpenSearch.",source:"@site/docs/configuration/connecting-to-data-stores/opensearch.mdx",sourceDirName:"configuration/connecting-to-data-stores",slug:"/configuration/connecting-to-data-stores/opensearch",permalink:"/configuration/connecting-to-data-stores/opensearch",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/configuration/connecting-to-data-stores/opensearch.mdx",tags:[],version:"current",frontMatter:{id:"opensearch",title:"OpenSearch",description:"Use OpenSearch as the trace data store for Tracetest. You can use the native connection from Tracetest to pull telemetry data directly from OpenSearch.",keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"tutorialSidebar",previous:{title:"New Relic",permalink:"/configuration/connecting-to-data-stores/new-relic"},next:{title:"OpenTelemetry Collector",permalink:"/configuration/connecting-to-data-stores/opentelemetry-collector"}},s={},p=[{value:"Configure Tracetest to Use OpenSearch as a Trace Data Store",id:"configure-tracetest-to-use-opensearch-as-a-trace-data-store",level:2},{value:"Connect Tracetest to OpenSearch with the Web UI",id:"connect-tracetest-to-opensearch-with-the-web-ui",level:2},{value:"Connect Tracetest to OpenSearch with the CLI",id:"connect-tracetest-to-opensearch-with-the-cli",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tracetest fetches traces from ",(0,a.kt)("a",{parentName:"p",href:"https://logz.io/blog/opensearch-tutorial-installation-configuration/#:~:text=This%20is%20because%20OpenSearch%20runs,use%20port%205601%20by%20default."},"OpenSearch's default port")," ",(0,a.kt)("inlineCode",{parentName:"p"},"9200"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Examples of configuring Tracetest can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples"},(0,a.kt)("inlineCode",{parentName:"a"},"examples")," folder of the Tracetest GitHub repo"),".")),(0,a.kt)("h2",{id:"configure-tracetest-to-use-opensearch-as-a-trace-data-store"},"Configure Tracetest to Use OpenSearch as a Trace Data Store"),(0,a.kt)("p",null,"Configure Tracetest to fetch trace data from OpenSearch."),(0,a.kt)("p",null,"Tracetest uses OpenSearch's ",(0,a.kt)("strong",{parentName:"p"},"default port")," ",(0,a.kt)("inlineCode",{parentName:"p"},"9200")," to fetch trace data."),(0,a.kt)("p",null,"You need to know which ",(0,a.kt)("strong",{parentName:"p"},"Index name")," and ",(0,a.kt)("strong",{parentName:"p"},"Address")," you are using."),(0,a.kt)("p",null,"The defaults can be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Index name"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"traces")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Address"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"http://opensearch:9200"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Need help configuring the OpenTelemetry Collector so send trace data from your application to OpenSearch? Read more in ",(0,a.kt)("a",{parentName:"p",href:"/configuration/opentelemetry-collector-configuration-file-reference"},"the reference page here"),".")),(0,a.kt)("h2",{id:"connect-tracetest-to-opensearch-with-the-web-ui"},"Connect Tracetest to OpenSearch with the Web UI"),(0,a.kt)("p",null,"In the Web UI, (1) open settings, and, on the (2) Configure Data Store tab, select (3) OpenSearch. If you are using Docker like in the screenshot below, use the service name as the hostname with port ",(0,a.kt)("inlineCode",{parentName:"p"},"9200"),". Use ",(0,a.kt)("inlineCode",{parentName:"p"},"http"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"https")," if TLS is enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://opensearch:9200\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OpenSearch",src:n(25048).Z,width:"2834",height:"1570"})),(0,a.kt)("h2",{id:"connect-tracetest-to-opensearch-with-the-cli"},"Connect Tracetest to OpenSearch with the CLI"),(0,a.kt)("p",null,"Or, if you prefer using the CLI, you can use this file config."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"type: DataStore\nspec:\n  name: OpenSearch Data Store\n  type: opensearch\n  default: true\n  opensearch:\n    addresses:\n      - http://opensearch:9200\n    index: traces\n")),(0,a.kt)("p",null,"Proceed to run this command in the terminal, and specify the file above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tracetest apply datastore -f my/data-store/file/location.yaml\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To learn more, ",(0,a.kt)("a",{parentName:"p",href:"/examples-tutorials/recipes/running-tracetest-with-opensearch"},"read the recipe on running a sample app with OpenSearch and Tracetest"),".")))}d.isMDXComponent=!0},25048:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/opensearch-settings-88a927b0ef0f1d195461e7881b78f6d2.png"}}]);