(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{Dljr:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n,r=a("vF1F"),i=a("Obii"),s=a("t8hP"),o=a("kDLi"),c=(a("q1tI"),a("nKUr"));function l({options:e,onOptionsChange:t}){var a,l;const u=Object(o.useStyles)(d);return Object(c.jsxs)("div",{className:Object(r.css)({width:"100%"}),children:[n||(n=Object(c.jsx)("h3",{className:"page-heading",children:"Trace to logs"})),Object(c.jsx)("div",{className:u.infoText,children:"Trace to logs let's you navigate from a trace span to the selected data source's log."}),Object(c.jsx)(o.InlineFieldRow,{children:Object(c.jsx)(o.InlineField,{tooltip:"The data source the trace is going to navigate to",label:"Data source",labelWidth:26,children:Object(c.jsx)(s.DataSourcePicker,{pluginId:"loki",current:null===(a=e.jsonData.tracesToLogs)||void 0===a?void 0:a.datasourceUid,noDefault:!0,width:40,onChange:a=>{var n;return Object(i.updateDatasourcePluginJsonDataOption)({onOptionsChange:t,options:e},"tracesToLogs",{datasourceUid:a.uid,tags:null===(n=e.jsonData.tracesToLogs)||void 0===n?void 0:n.tags})}})})}),Object(c.jsx)(o.InlineFieldRow,{children:Object(c.jsx)(o.InlineField,{tooltip:"Tags that will be used in the Loki query. Default tags: 'cluster', 'hostname', 'namespace', 'pod'",label:"Tags",labelWidth:26,children:Object(c.jsx)(o.TagsInput,{tags:null===(l=e.jsonData.tracesToLogs)||void 0===l?void 0:l.tags,width:40,onChange:a=>{var n;return Object(i.updateDatasourcePluginJsonDataOption)({onOptionsChange:t,options:e},"tracesToLogs",{datasourceUid:null===(n=e.jsonData.tracesToLogs)||void 0===n?void 0:n.datasourceUid,tags:a})}})})})]})}const d=e=>({infoText:r.css`
    padding-bottom: ${e.spacing.md};
    color: ${e.colors.textSemiWeak};
  `})},GGQ8:function(e,t,a){"use strict";a.r(t);var n=a("Obii"),r=a("t8hP"),i=a("F/XL"),s=a("67Y/"),o=a("zsCE");var c=a("LvDl");function l(e){const t=e.map(d),a=new n.MutableDataFrame({fields:[{name:"traceID",type:n.FieldType.string},{name:"spanID",type:n.FieldType.string},{name:"parentSpanID",type:n.FieldType.string},{name:"operationName",type:n.FieldType.string},{name:"serviceName",type:n.FieldType.string},{name:"serviceTags",type:n.FieldType.other},{name:"startTime",type:n.FieldType.number},{name:"duration",type:n.FieldType.number},{name:"logs",type:n.FieldType.other},{name:"tags",type:n.FieldType.other}],meta:{preferredVisualisationType:"trace"}});for(const e of t)a.add(e);return a}function d(e){var t,a,n,r;const i={traceID:e.traceId,spanID:e.id,parentSpanID:e.parentId,operationName:e.name,serviceName:(null===(t=e.localEndpoint)||void 0===t?void 0:t.serviceName)||(null===(a=e.remoteEndpoint)||void 0===a?void 0:a.serviceName)||"unknown",serviceTags:p(e),startTime:e.timestamp/1e3,duration:e.duration/1e3,logs:null!==(n=null===(r=e.annotations)||void 0===r?void 0:r.map(u))&&void 0!==n?n:[],tags:Object.keys(e.tags||{}).reduce((t,a)=>"error"===a?(t.push({key:"error",value:!0}),t.push({key:"errorValue",value:e.tags.error}),t):(t.push({key:a,value:e.tags[a]}),t),[])};var s;e.kind&&(i.tags=[{key:"kind",value:e.kind},...null!==(s=i.tags)&&void 0!==s?s:[]]);return i}function u(e){return{timestamp:e.timestamp,fields:[{key:"annotation",value:e.value}]}}function p(e){const t=e.localEndpoint||e.remoteEndpoint;return t?[m("ipv4",t.ipv4),m("ipv6",t.ipv6),m("port",t.port)].filter(c.identity):[]}function m(e,t){if(t)return{key:e,value:t}}var h=a("knph");function f(e){const{nodes:t,edges:a}=function(e){const t=[],a=[],r=function(e){let t=0,a=1/0;for(const n of e)n.timestamp<a&&(a=n.timestamp),n.timestamp+n.duration>t&&(t=n.timestamp+n.duration);return t-a}(e),i=Object(h.d)(t=>{if(!(t>=e.length))return{span:e[t],id:e[t].id,parentIds:e[t].parentId?[e[t].parentId]:[]}});for(const c of e){var s,o;const e=i[c.id].children.map(e=>{const t=i[e].span;return[t.timestamp,t.timestamp+t.duration]}),l=Object(h.a)(e),d=c.duration-l,u=Object(h.b)(c.duration/1e3,r/1e3,d/1e3);t.push({[n.NodeGraphDataFrameFieldNames.id]:c.id,[n.NodeGraphDataFrameFieldNames.title]:(null===(s=c.localEndpoint)||void 0===s?void 0:s.serviceName)||(null===(o=c.remoteEndpoint)||void 0===o?void 0:o.serviceName)||"unknown",[n.NodeGraphDataFrameFieldNames.subTitle]:c.name,[n.NodeGraphDataFrameFieldNames.mainStat]:u.main,[n.NodeGraphDataFrameFieldNames.secondaryStat]:u.secondary,[n.NodeGraphDataFrameFieldNames.color]:d/r}),c.parentId&&i[c.parentId].span&&a.push({[n.NodeGraphDataFrameFieldNames.id]:c.parentId+"--"+c.id,[n.NodeGraphDataFrameFieldNames.target]:c.id,[n.NodeGraphDataFrameFieldNames.source]:c.parentId})}return{nodes:t,edges:a}}(e),[r,i]=Object(h.c)();for(const e of t)r.add(e);for(const e of a)i.add(e);return[r,i]}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}class g extends n.DataSourceApi{constructor(e){super(e),this.instanceSettings=e}query(e){var t;const a=null===(t=e.targets[0])||void 0===t?void 0:t.query;return a?this.request("/api/v2/trace/"+encodeURIComponent(a)).pipe(Object(s.a)(b)):Object(i.a)(y)}async metadataRequest(e,t){return(await this.request(e,t,{hideFromInspector:!0}).toPromise()).data}async testDatasource(){return await this.metadataRequest("/api/v2/services"),{status:"success",message:"Data source is working"}}getQueryDisplayText(e){return e.query}request(e,t,a){const n=t?Object(o.d)(t):"",i=v({},a,{url:`${this.instanceSettings.url}${e}${n.length?"?"+n:""}`});return Object(r.getBackendSrv)().fetch(i)}}function b(e){return{data:null!=e&&e.data?[l(null==e?void 0:e.data),...f(null==e?void 0:e.data)]:[]}}const y={data:[new n.MutableDataFrame({fields:[{name:"trace",type:n.FieldType.trace,values:[]}],meta:{preferredVisualisationType:"trace"}})]};var j=a("Csm0"),O=a("kDLi"),F=a("q1tI"),N=a("Kwub"),D=a("ubFk"),T=a("VQUf"),w=a("iODs"),k=a("3SGO"),x=a("UvM7"),I=a("nKUr");function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const S=[{label:"No traces found",value:"no_traces",isLeaf:!0}],q={"[No traces in time range]":"__NO_TRACES__"};var C=a("Dljr");a.d(t,"plugin",(function(){return L}));const L=new n.DataSourcePlugin(g).setConfigEditor(({options:e,onOptionsChange:t})=>Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(O.DataSourceHttpSettings,{defaultUrl:"http://localhost:9411",dataSourceConfig:e,showAccessOptions:!1,onChange:t}),Object(I.jsx)(C.a,{options:e,onOptionsChange:t})]})).setExploreQueryField(({query:e,onChange:t,onRunQuery:a,datasource:n})=>{const r=function(e){const[t,a]=Object(N.a)(async()=>{try{const t=await e.metadataRequest("/api/v2/services");return t?t.sort().map(e=>({label:e,value:e,isLeaf:!1})):[]}catch(e){throw Object(w.a)(Object(k.b)(Object(x.a)("Failed to load services from Zipkin",e))),e}},[e]);return Object(D.a)(()=>{a()}),t}(n),{onLoadOptions:i,allOptions:s}=function(e){const t=Object(T.a)(),[a,n]=Object(F.useState)({}),[,r]=Object(N.a)((async function(a){try{const r=await e.metadataRequest("/api/v2/spans",{serviceName:a});t()&&n(e=>{const t=Object(c.fromPairs)(r.map(e=>[e,void 0]));return G({},e,{[a]:t})})}catch(e){throw Object(w.a)(Object(k.b)(Object(x.a)("Failed to load spans from Zipkin",e))),e}}),[e,a]),[,i]=Object(N.a)((async function(a,r){const i={serviceName:a,spanName:r};try{const s=await e.metadataRequest("/api/v2/traces",i);if(t()){const e=s.length?Object(c.fromPairs)(s.map(e=>{const t=e.find(e=>!e.parentId);return[`${t.name} [${Math.floor(t.duration/1e3)} ms]`,t.traceId]})):q;n(t=>{const n=t[a];return G({},t,{[a]:G({},n,{[r]:e})})})}}catch(e){throw Object(w.a)(Object(k.b)(Object(x.a)("Failed to load spans from Zipkin",e))),e}}),[e]);return{onLoadOptions:Object(F.useCallback)(e=>{const t=e[0].value;if(1===e.length)r(t);else if(2===e.length){const a=e[1].value;i(t,a)}},[r,i]),allOptions:a}}(n),o=Object(F.useCallback)((n,r)=>{if(3===r.length){const n=r[2].value;t(G({},e,{query:n})),a()}},[t,a,e]);let l=function(e,t){return Object(F.useMemo)(()=>{let a=[];return e.value&&e.value.length?a=e.value.map(e=>G({},e,{children:t[e.value]&&Object.keys(t[e.value]).map(a=>({label:a,value:a,isLeaf:!1,children:t[e.value][a]&&Object.keys(t[e.value][a]).map(n=>({label:n,value:t[e.value][a][n]}))}))})):e.value&&!e.value.length&&(a=S),a},[e,t])}(r,s);return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{className:"gf-form-inline gf-form-inline--nowrap",children:[Object(I.jsx)("div",{className:"gf-form flex-shrink-0",children:Object(I.jsx)(O.ButtonCascader,{options:l,onChange:o,loadData:i,children:"Traces"})}),Object(I.jsx)("div",{className:"gf-form gf-form--grow flex-shrink-1",children:Object(I.jsx)("div",{className:"slate-query-field__wrapper",children:Object(I.jsx)("div",{className:"slate-query-field","aria-label":j.selectors.components.QueryField.container,children:Object(I.jsx)("input",{style:{width:"100%"},value:e.query||"",onChange:a=>t(G({},e,{query:a.currentTarget.value}))})})})})]})})})},knph:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return c}));var n=a("Obii");function r(e){e.sort((e,t)=>e[0]-t[0]);return e.reduce((e,t)=>{if(!e.length)return[t];const a=e.slice(-1)[0],[n,r]=a,[i,s]=t;return s<r?e:i>r?[...e,t]:[...e.slice(0,-1),[n,s]]},[]).reduce((e,t)=>e+(t[1]-t[0]),0)}function i(e){const t={};let a;for(let n=0;a=e(n),a;n++){t[a.id]?t[a.id].span=a.span:t[a.id]={span:a.span,children:[]};for(const e of a.parentIds)e&&(t[e]?t[e].children.push(a.id):t[e]={span:void 0,children:[a.id]})}return t}function s(e,t,a){return{main:`${o(e)}ms (${o(e/t*100)}%)`,secondary:`${o(a)}ms (${o(a/e*100)}%)`}}function o(e){return parseFloat(e.toFixed(2))}function c(){return[new n.MutableDataFrame({fields:[{name:n.NodeGraphDataFrameFieldNames.id,type:n.FieldType.string},{name:n.NodeGraphDataFrameFieldNames.title,type:n.FieldType.string},{name:n.NodeGraphDataFrameFieldNames.subTitle,type:n.FieldType.string},{name:n.NodeGraphDataFrameFieldNames.mainStat,type:n.FieldType.string,config:{displayName:"Total time (% of trace)"}},{name:n.NodeGraphDataFrameFieldNames.secondaryStat,type:n.FieldType.string,config:{displayName:"Self time (% of total)"}},{name:n.NodeGraphDataFrameFieldNames.color,type:n.FieldType.number,config:{color:{mode:"continuous-GrYlRd"},displayName:"Self time / Trace duration"}}],meta:{preferredVisualisationType:"nodeGraph"}}),new n.MutableDataFrame({fields:[{name:n.NodeGraphDataFrameFieldNames.id,type:n.FieldType.string},{name:n.NodeGraphDataFrameFieldNames.target,type:n.FieldType.string},{name:n.NodeGraphDataFrameFieldNames.source,type:n.FieldType.string}],meta:{preferredVisualisationType:"nodeGraph"}})]}},ubFk:function(e,t,a){"use strict";var n=a("Zcyb");t.a=function(e){Object(n.a)((function(){e()}))}}}]);
//# sourceMappingURL=zipkinPlugin.c916c34d6a21e5f99f35.js.map