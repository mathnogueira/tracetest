"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[1146],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||s;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},68706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={id:"checkout",title:"OpenTelemetry Store - Checkout",description:"The OpenTelemetry Demo is an example application published by the OpenTelemtry CNCF project. This use case covers paying for products in a shopping cart.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},i=void 0,o={unversionedId:"live-examples/opentelemetry-store/use-cases/checkout",id:"live-examples/opentelemetry-store/use-cases/checkout",title:"OpenTelemetry Store - Checkout",description:"The OpenTelemetry Demo is an example application published by the OpenTelemtry CNCF project. This use case covers paying for products in a shopping cart.",source:"@site/docs/live-examples/opentelemetry-store/use-cases/checkout.mdx",sourceDirName:"live-examples/opentelemetry-store/use-cases",slug:"/live-examples/opentelemetry-store/use-cases/checkout",permalink:"/live-examples/opentelemetry-store/use-cases/checkout",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/live-examples/opentelemetry-store/use-cases/checkout.mdx",tags:[],version:"current",frontMatter:{id:"checkout",title:"OpenTelemetry Store - Checkout",description:"The OpenTelemetry Demo is an example application published by the OpenTelemtry CNCF project. This use case covers paying for products in a shopping cart.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"liveExamplesSidebar",previous:{title:"OpenTelemetry Store - Check shopping cart contents",permalink:"/live-examples/opentelemetry-store/use-cases/check-shopping-cart-contents"},next:{title:"OpenTelemetry Store - Get recommended products",permalink:"/live-examples/opentelemetry-store/use-cases/get-recommended-products"}},c={},p=[{value:"Building a Test for This Scenario",id:"building-a-test-for-this-scenario",level:2},{value:"Traces",id:"traces",level:3},{value:"Assertions",id:"assertions",level:3},{value:"Test Definition",id:"test-definition",level:3}],l={toc:p},d="wrapper";function u(e){let{components:t,...s}=e;return(0,a.kt)(d,(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this use case, we want to validate the following story:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"As a consumer, after choosing products\nI want to pay for all products in my shopping cart\nSo I can ship them to my address and use them.\n")),(0,a.kt)("p",null,"You can trigger this use case by calling the endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/checkout")," from the Frontend service, with the following request body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "userId": "2491f868-88f1-4345-8836-d5d8511a9f83",\n    "email": "someone@example.com",\n    "address": {\n        "streetAddress": "1600 Amphitheatre Parkway",\n        "state": "CA",\n        "country": "United States",\n        "city": "Mountain View",\n        "zipCode": "94043"\n    },\n    "userCurrency": "USD",\n    "creditCard": {\n        "creditCardCvv": 672,\n        "creditCardExpirationMonth": 1,\n        "creditCardExpirationYear": 2030,\n        "creditCardNumber": "4432-8015-6152-0454"\n    }\n}\n')),(0,a.kt)("p",null,"It should return a payload similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "orderId": "8ddbf376-a340-11ed-94b1-8a88241c3938",\n  "shippingTrackingId": "eb7a5f77-d676-430d-a2b8-e1a5f595227d",\n  "shippingCost": {\n    "currencyCode": "USD",\n    "units": 0,\n    "nanos": 0\n  },\n  "shippingAddress": {\n    "streetAddress": "1600 Amphitheatre Parkway",\n    "city": "Mountain View",\n    "state": "CA",\n    "country": "United States",\n    "zipCode": "94043"\n  },\n  "items": [\n    //...\n  ]\n}\n')),(0,a.kt)("p",null,"If it is the first time that you are calling this endpoint, to see an item into the shopping cart you need first to ",(0,a.kt)("a",{parentName:"p",href:"/live-examples/opentelemetry-store/use-cases/add-item-into-shopping-cart"},"Add item into shopping cart"),"."),(0,a.kt)("h2",{id:"building-a-test-for-this-scenario"},"Building a Test for This Scenario"),(0,a.kt)("p",null,"Using Tracetest, we can ",(0,a.kt)("a",{parentName:"p",href:"/web-ui/creating-tests"},"create a test")," that will execute an API call on ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/cart")," and validate the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An order was placed."),(0,a.kt)("li",{parentName:"ul"},"The user was charged."),(0,a.kt)("li",{parentName:"ul"},"The product was shipped."),(0,a.kt)("li",{parentName:"ul"},"The shopping cart was emptied.")),(0,a.kt)("h3",{id:"traces"},"Traces"),(0,a.kt)("p",null,"Running these tests for the first time will create an Observability trace like the image below, where you can see spans for the API calls (HTTP and gRPC) and database calls:\n",(0,a.kt)("img",{src:r(94786).Z,width:"2570",height:"2048"})),(0,a.kt)("h3",{id:"assertions"},"Assertions"),(0,a.kt)("p",null,"With this trace, now we can build ",(0,a.kt)("a",{parentName:"p",href:"/concepts/assertions"},"assertions")," on Tracetest and validate the properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"An order was placed."),"\n",(0,a.kt)("img",{src:r(37124).Z,width:"3650",height:"840"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"The user was charged."),"\n",(0,a.kt)("img",{src:r(21401).Z,width:"3654",height:"878"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"The product was shipped."),"\n",(0,a.kt)("img",{src:r(32615).Z,width:"3652",height:"864"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"The shopping cart was emptied."),"\n",(0,a.kt)("img",{src:r(53243).Z,width:"3656",height:"848"})))),(0,a.kt)("p",null,"Now you can validate this entire use case."),(0,a.kt)("h3",{id:"test-definition"},"Test Definition"),(0,a.kt)("p",null,"To replicate this entire test on Tracetest, you can replicate these steps on our Web UI or using our CLI, saving the following test definition as the file ",(0,a.kt)("inlineCode",{parentName:"p"},"test-definition.yml")," and later running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tracetest run test -f test-definition.yml\n")),(0,a.kt)("p",null,"We are assuming that the Frontend service is exposed on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://otel-demo-frontend:8080"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'type: Test\nspec:\n  name: Checking out shopping cart\n  description: Checking out shopping cart\n  trigger:\n    type: http\n    httpRequest:\n      url: http://otel-demo-frontend:8080/api/checkout\n      method: POST\n      headers:\n      - key: Content-Type\n        value: application/json\n      body: \'{"userId":"2491f868-88f1-4345-8836-d5d8511a9f83","email":"someone@example.com","address":{"streetAddress":"1600\n        Amphitheatre Parkway","state":"CA","country":"United States","city":"Mountain View","zipCode":"94043"},"userCurrency":"USD","creditCard":{"creditCardCvv":672,"creditCardExpirationMonth":1,"creditCardExpirationYear":2030,"creditCardNumber":"4432-8015-6152-0454"}}\'\n  specs:\n  - selector: span[tracetest.span.type="rpc" name="hipstershop.CheckoutService/PlaceOrder"\n      rpc.system="grpc" rpc.method="PlaceOrder" rpc.service="hipstershop.CheckoutService"]\n    assertions: # checking if an order was placed\n    - attr:app.user.id = "2491f868-88f1-4345-8836-d5d8511a9f83"\n    - attr:app.order.items.count = 1\n  - selector: span[tracetest.span.type="rpc" name="hipstershop.PaymentService/Charge"\n      rpc.system="grpc" rpc.method="Charge" rpc.service="hipstershop.PaymentService"]\n    assertions: # checking if the user was charged\n    - attr:rpc.grpc.status_code  =  0\n    - attr:tracetest.selected_spans.count >= 1\n  - selector: span[tracetest.span.type="rpc" name="hipstershop.ShippingService/ShipOrder"\n      rpc.system="grpc" rpc.method="ShipOrder" rpc.service="hipstershop.ShippingService"]\n    assertions: # checking if the product was shipped\n    - attr:rpc.grpc.status_code = 0\n    - attr:tracetest.selected_spans.count >= 1\n  - selector: span[tracetest.span.type="rpc" name="hipstershop.CartService/EmptyCart"\n      rpc.system="grpc" rpc.method="EmptyCart" rpc.service="hipstershop.CartService"]\n    assertions: # checking if the cart was set empty\n    - attr:rpc.grpc.status_code = 0\n    - attr:tracetest.selected_spans.count >= 1\n')))}u.isMDXComponent=!0},37124:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/checkout-api-test-spec-1a4b02a141cc2634cf64c08bf57c2bea.png"},53243:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/checkout-cart-empty-test-spec-976a9d6fe05555fc253e2925ce3e5e88.png"},21401:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/checkout-payment-test-spec-49a39841e3a2075f4d4ee52391e7dc68.png"},32615:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/checkout-shipping-test-spec-32a6b79d975979e27e5fbf6679590a10.png"},94786:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/checkout-trace-711ae31b0c68ecfe788a596a869ca3aa.png"}}]);