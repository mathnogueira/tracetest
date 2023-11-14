"use strict";(self.webpackChunktracetest_docs=self.webpackChunktracetest_docs||[]).push([[7472],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"running-tracetest-with-tempo",title:"Node.js and Grafana Tempo",description:"Quick start on how to configure a Node.js app with OpenTelemetry traces, Grafana Tempo as a trace data store, and Tracetest for enhancing your E2E and integration tests with trace-based testing.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},s=void 0,i={unversionedId:"examples-tutorials/recipes/running-tracetest-with-tempo",id:"examples-tutorials/recipes/running-tracetest-with-tempo",title:"Node.js and Grafana Tempo",description:"Quick start on how to configure a Node.js app with OpenTelemetry traces, Grafana Tempo as a trace data store, and Tracetest for enhancing your E2E and integration tests with trace-based testing.",source:"@site/docs/examples-tutorials/recipes/running-tracetest-with-tempo.mdx",sourceDirName:"examples-tutorials/recipes",slug:"/examples-tutorials/recipes/running-tracetest-with-tempo",permalink:"/examples-tutorials/recipes/running-tracetest-with-tempo",draft:!1,editUrl:"https://github.com/kubeshop/tracetest/blob/main/docs/docs/examples-tutorials/recipes/running-tracetest-with-tempo.mdx",tags:[],version:"current",frontMatter:{id:"running-tracetest-with-tempo",title:"Node.js and Grafana Tempo",description:"Quick start on how to configure a Node.js app with OpenTelemetry traces, Grafana Tempo as a trace data store, and Tracetest for enhancing your E2E and integration tests with trace-based testing.",hide_table_of_contents:!1,keywords:["tracetest","trace-based testing","observability","distributed tracing","testing"],image:"https://res.cloudinary.com/djwdcmwdz/image/upload/v1698686403/docs/Blog_Thumbnail_14_rsvkmo.jpg"},sidebar:"examplesTutorialsSidebar",previous:{title:"Node.js and OpenSearch",permalink:"/examples-tutorials/recipes/running-tracetest-with-opensearch"},next:{title:"Node.js and AWS X-Ray (Node.js SDK)",permalink:"/examples-tutorials/recipes/running-tracetest-with-aws-x-ray"}},l={},p=[{value:"Sample Node.js App with Tempo, OpenTelemetry and Tracetest",id:"sample-nodejs-app-with-tempo-opentelemetry-and-tracetest",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"1. Node.js App",id:"1-nodejs-app",level:3},{value:"2. Tracetest",id:"2-tracetest",level:3},{value:"Docker Compose Network",id:"docker-compose-network",level:3},{value:"Node.js App",id:"nodejs-app",level:2},{value:"Tracetest",id:"tracetest",level:2},{value:"Run Both the Node.js App and Tracetest",id:"run-both-the-nodejs-app-and-tracetest",level:2},{value:"Learn More",id:"learn-more",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples/quick-start-tempo-nodejs"},"Check out the source code on GitHub here."))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tracetest.io/"},"Tracetest")," is a testing tool based on ",(0,a.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry")," that allows you to test your distributed application. It allows you to use data from distributed traces generated by OpenTelemetry to validate and assert if your application has the desired behavior defined by your test definitions."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/oss/tempo/"},"Grafana Tempo")," is an open-source, high-scale distributed tracing data store. It utilizes object storage to minimize costs, allowing you to store more information at a lower cost. It is deeply integrated with Grafana, Prometheus, and Loki. Grafana Tempo is also available as a paid hosted service at Grafana Cloud."),(0,a.kt)("h2",{id:"sample-nodejs-app-with-tempo-opentelemetry-and-tracetest"},"Sample Node.js App with Tempo, OpenTelemetry and Tracetest"),(0,a.kt)("p",null,"This is a simple quick start on how to configure a Node.js app to use OpenTelemetry instrumentation with traces and Tracetest for enhancing your E2E and integration tests with trace-based testing. The infrastructure will use Tempo as the trace data store, and OpenTelemetry Collector to receive traces from the Node.js app and send them to Tempo."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"You will need ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")," installed on your machine to run this quick start app!"),(0,a.kt)("h2",{id:"project-structure"},"Project Structure"),(0,a.kt)("p",null,"The project is built with Docker Compose. It contains two distinct ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," files."),(0,a.kt)("h3",{id:"1-nodejs-app"},"1. Node.js App"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file and ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," in the root directory are for the Node.js app."),(0,a.kt)("h3",{id:"2-tracetest"},"2. Tracetest"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file, ",(0,a.kt)("inlineCode",{parentName:"p"},"collector.config.yaml"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest-provision.yaml"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest-config.yaml")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest")," directory are for the setting up Tracetest, Tempo, and the OpenTelemetry Collector."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest")," directory is self-contained and will run all the prerequisites for enabling OpenTelemetry traces and trace-based testing with Tracetest."),(0,a.kt)("h3",{id:"docker-compose-network"},"Docker Compose Network"),(0,a.kt)("p",null,"All ",(0,a.kt)("inlineCode",{parentName:"p"},"services")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," are on the same network and will be reachable by hostname from within other services. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"tempo:4317")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"collector.config.yaml")," will map to the ",(0,a.kt)("inlineCode",{parentName:"p"},"tempo")," service, where the port ",(0,a.kt)("inlineCode",{parentName:"p"},"4317")," is the port where Tempo accepts traces. And, ",(0,a.kt)("inlineCode",{parentName:"p"},"tempo:9095")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest-provision.yaml")," will map to the ",(0,a.kt)("inlineCode",{parentName:"p"},"tempo")," service and port ",(0,a.kt)("inlineCode",{parentName:"p"},"9095")," where Tracetest will fetch trace data from Tempo."),(0,a.kt)("h2",{id:"nodejs-app"},"Node.js App"),(0,a.kt)("p",null,"The Node.js app is a simple Express app, contained in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.js")," file."),(0,a.kt)("p",null,"The OpenTelemetry tracing is contained in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracing.otel.grpc.js")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"tracing.otel.http.js")," files, respectively.\nTraces will be sent to the OpenTelemetry Collector."),(0,a.kt)("p",null,"Here's the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracing.otel.grpc.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const opentelemetry = require('@opentelemetry/sdk-node')\nconst { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node')\nconst { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc');\n\nconst sdk = new opentelemetry.NodeSDK({\n  traceExporter: new OTLPTraceExporter({ url: 'http://otel-collector:4317' }),\n  instrumentations: [getNodeAutoInstrumentations()],\n})\nsdk.start()\n")),(0,a.kt)("p",null,"Depending on which of these you choose, traces will be sent to either the ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," endpoint."),(0,a.kt)("p",null,"The hostnames and ports for these are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GRPC: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://otel-collector:4317")),(0,a.kt)("li",{parentName:"ul"},"HTTP: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://otel-collector:4318/v1/traces"))),(0,a.kt)("p",null,"Enabling the tracer is done by preloading the trace file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node -r ./tracing.otel.grpc.js app.js\n")),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," you will see two npm scripts for running the respective tracers alongside the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.js"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "with-grpc-tracer":"node -r ./tracing.otel.grpc.js app.js",\n  "with-http-tracer":"node -r ./tracing.otel.http.js app.js"\n},\n')),(0,a.kt)("p",null,"To start the server, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run with-grpc-tracer\n# or\nnpm run with-http-tracer\n")),(0,a.kt)("p",null,"As you can see the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," uses the command above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:slim\nWORKDIR /usr/src/app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 8080\nCMD [ "npm", "run", "with-grpc-tracer" ]\n')),(0,a.kt)("p",null,"And, the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," contains just one service for the Node.js app."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\nservices:\n  app:\n    image: quick-start-nodejs\n    build: .\n    ports:\n      - \"8080:8080\"\n")),(0,a.kt)("p",null,"To start it, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose build # optional if you haven't already built the image\ndocker compose up\n")),(0,a.kt)("p",null,"This will start the Node.js app. But, you're not sending the traces anywhere."),(0,a.kt)("p",null,"Let's fix this by configuring Tracetest and OpenTelemetry Collector."),(0,a.kt)("h2",{id:"tracetest"},"Tracetest"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest")," directory is configured with four services."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Postgres")," - Postgres is a prerequisite for Tracetest to work. It stores trace data when running the trace-based tests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://opentelemetry.io/docs/collector/"},(0,a.kt)("strong",{parentName:"a"},"OpenTelemetry Collector"))," - A vendor-agnostic implementation of how to receive, process and export telemetry data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://grafana.com/oss/tempo/"},(0,a.kt)("strong",{parentName:"a"},"Tempo"))," - Grafana Tempo is an open source, easy-to-use, and high-scale distributed tracing backend."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracetest.io/"},(0,a.kt)("strong",{parentName:"a"},"Tracetest"))," - Trace-based testing that generates end-to-end tests automatically from traces.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  tracetest:\n    image: kubeshop/tracetest:${TAG:-latest}\n    platform: linux/amd64\n    volumes:\n      - type: bind\n        source: ./tracetest/tracetest-config.yaml\n        target: /app/tracetest.yaml\n      - type: bind\n        source: ./tracetest/tracetest-provision.yaml\n        target: /app/provisioning.yaml\n    ports:\n      - 11633:11633\n    command: --provisioning-file /app/provisioning.yaml\n    depends_on:\n      postgres:\n        condition: service_healthy\n      tempo:\n        condition: service_started\n      otel-collector:\n        condition: service_started\n    healthcheck:\n      test: ["CMD", "wget", "--spider", "localhost:11633"]\n      interval: 1s\n      timeout: 3s\n      retries: 60\n    environment:\n      TRACETEST_DEV: ${TRACETEST_DEV}\n\n  postgres:\n    image: postgres:14\n    environment:\n      POSTGRES_PASSWORD: postgres\n      POSTGRES_USER: postgres\n    healthcheck:\n      test: pg_isready -U "$$POSTGRES_USER" -d "$$POSTGRES_DB"\n      interval: 1s\n      timeout: 5s\n      retries: 60\n\n  otel-collector:\n    image: otel/opentelemetry-collector-contrib:0.59.0\n    command:\n      - "--config"\n      - "/otel-local-config.yaml"\n    volumes:\n      - ./tracetest/collector.config.yaml:/otel-local-config.yaml\n    depends_on:\n      - tempo\n\n  tempo:\n    image: grafana/tempo:2.0.0\n    command: ["-config.file=/etc/tempo.yaml"]\n    volumes:\n      - ./tracetest/tempo.config.yaml:/etc/tempo.yaml\n\n')),(0,a.kt)("p",null,"Tracetest depends on Postgres, Tempo and the OpenTelemetry Collector. All three services require config files to be loaded via a volume. The volumes are mapped from the root directory into the ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest")," directory and the respective config files."),(0,a.kt)("p",null,"To start both the Node.js app and Tracetest, we will run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.yaml -f tracetest/docker-compose.yaml up # add --build if the images are not built already\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tempo.config.yaml")," file contains the initial config for running Tempo."),(0,a.kt)("p",null,"The key takeaway is the server block."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#...\nserver:\n  http_listen_port: 3100\n  grpc_listen_port: 9095\n#...\n")),(0,a.kt)("p",null,"We'll use the following code. Check out the full Tempo config for reference."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"auth_enabled: false\n\nserver:\n  http_listen_port: 3100\n  grpc_listen_port: 9095\n\ndistributor:\n  receivers:                           # this configuration will listen on all ports and protocols that tempo is capable of.\n    jaeger:                            # the receives all come from the OpenTelemetry collector.  more configuration information can\n      protocols:                       # be found there: https://github.com/open-telemetry/opentelemetry-collector/tree/master/receiver\n        thrift_http:                   #\n        grpc:                          # for a production deployment you should only enable the receivers you need!\n        thrift_binary:\n        thrift_compact:\n    zipkin:\n    otlp:\n      protocols:\n        http:\n        grpc:\n    opencensus:\n\ningester:\n  trace_idle_period: 10s               # the length of time after a trace has not received spans to consider it complete and flush it\n  max_block_bytes: 1_000_000           # cut the head block when it hits this size or ...\n  #traces_per_block: 1_000_000\n  max_block_duration: 5m               #   this much time passes\n\ncompactor:\n  compaction:\n    compaction_window: 1h              # blocks in this time window will be compacted together\n    max_compaction_objects: 1000000    # maximum size of compacted blocks\n    block_retention: 1h\n    compacted_block_retention: 10m\n\nstorage:\n  trace:\n    backend: local                     # backend configuration to use\n    wal:\n      path: /tmp/tempo/wal            # where to store the the wal locally\n      #bloom_filter_false_positive: .05 # bloom filter false positive rate.  lower values create larger filters but fewer false positives\n      #index_downsample: 10             # number of traces per index record\n    local:\n      path: /tmp/tempo/blocks\n    pool:\n      max_workers: 100                 # the worker pool mainly drives querying, but is also used for polling the blocklist\n      queue_depth: 10000\n\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest-config.yaml")," file contains the basic setup of connecting Tracetest to the Postgres instance and defining the trace data store and exporter. The exporter is set to the OpenTelemetry Collector."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# tracetest-config.yaml\n\npostgres:\n  host: postgres\n  user: postgres\n  password: postgres\n  port: 5432\n  dbname: postgres\n  params: sslmode=disable\n\ntelemetry:\n  exporters:\n    collector:\n      serviceName: tracetest\n      sampling: 100 # 100%\n      exporter:\n        type: collector\n        collector:\n          endpoint: otel-collector:4317\n\nserver:\n  telemetry:\n    exporter: collector\n\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tracetest-provision.yaml")," file defines the trace data store, set to Tempo, meaning the traces will be stored in Tempo and Tracetest will fetch them from Tempo when running tests."),(0,a.kt)("p",null,"How does Tracetest fetch traces?"),(0,a.kt)("p",null,"Tracetest uses ",(0,a.kt)("inlineCode",{parentName:"p"},"tempo:9095")," to connect to Tempo and fetch trace data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# tracetest-provision.yaml\n\n---\ntype: PollingProfile\nspec:\n  name: Default\n  strategy: periodic\n  default: true\n  periodic:\n    retryDelay: 5s\n    timeout: 10m\n\n---\ntype: DataStore\nspec:\n  name: Tempo\n  type: tempo\n  tempo:\n    type: grpc\n    grpc:\n      endpoint: tempo:9095\n      tls:\n        insecure: true\n\n")),(0,a.kt)("p",null,"How do traces reach Tempo?"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"collector.config.yaml")," explains that. It receives traces via either ",(0,a.kt)("inlineCode",{parentName:"p"},"grpc")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"http"),". Then, exports them to Tempo's OTLP gRPC endpoint ",(0,a.kt)("inlineCode",{parentName:"p"},"tempo:4317"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# collector.config.yaml\nreceivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nprocessors:\n  batch:\n    timeout: 100ms\n\nexporters:\n  logging:\n    loglevel: debug\n  otlp/1:\n    endpoint: tempo:4317\n    tls:\n      insecure: true\n\nservice:\n  pipelines:\n    traces:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [otlp/1]\n\n")),(0,a.kt)("h2",{id:"run-both-the-nodejs-app-and-tracetest"},"Run Both the Node.js App and Tracetest"),(0,a.kt)("p",null,"To start both the Node.js app and Tracetest, run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-compose.yaml -f tracetest/docker-compose.yaml up # add --build if the images are not built already\n")),(0,a.kt)("p",null,"This will start your Tracetest instance on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:11633/"),"."),(0,a.kt)("p",null,"Open the URL and start creating tests! Make sure to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"http://app:8080/")," URL in your test creation, because your Node.js app and Tracetest are in the same network."),(0,a.kt)("h2",{id:"learn-more"},"Learn More"),(0,a.kt)("p",null,"Feel free to check out our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/tracetest/tree/main/examples"},"examples in GitHub")," and join our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/8MtcMrQNbX"},"Discord Community")," for more info!"))}d.isMDXComponent=!0}}]);