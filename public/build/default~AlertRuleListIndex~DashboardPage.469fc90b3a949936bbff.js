(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{O6qV:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),r=a("Jzaf"),i=a("IpGs"),o=a("w+lj");function s(e){const t=Object(o.a)(e=>e.promRules),a=Object(o.a)(e=>e.rulerRules),s=Object(n.useRef)({}),c=Object(n.useMemo)(()=>{if(e){const t=Object(r.h)(e);if(!t)throw new Error("Unknown rules source: "+e);return[t]}return Object(r.e)()},[e]);return Object(n.useMemo)(()=>c.map(e=>{var n,o;const c=Object(r.j)(e)?e.name:e,d=null===(n=t[c])||void 0===n?void 0:n.result,u=null===(o=a[c])||void 0===o?void 0:o.result,m=s.current[c];if(m&&m.promRules===d&&m.rulerRules===u)return m.result;const b={};Object.entries(u||{}).forEach(([t,a])=>{const n={rulesSource:e,name:t,groups:[]};b[t]=n,function(e,t){e.groups=t.map(t=>{const a={name:t.name,rules:[]};return a.rules=t.rules.map(t=>function(e,t,a){return Object(i.i)(e)?{name:e.alert,query:e.expr,labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:t,group:a}:Object(i.m)(e)?{name:e.record,query:e.expr,labels:e.labels||{},annotations:{},rulerRule:e,namespace:t,group:a}:{name:e.grafana_alert.title,query:"",labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:t,group:a}}(t,e,a)),a})}(n,a)}),null==d||d.forEach(({name:t,groups:a})=>{!function(e,t){t.forEach(t=>{var a;let n=e.groups.find(e=>e.name===t.name);n||(n={name:t.name,rules:[]},e.groups.push(n)),(null!==(a=t.rules)&&void 0!==a?a:[]).forEach(t=>{const a=function(e,t,a){var n;if(Object(r.k)(a))return t.rules.find(t=>t.name===e.name);return null!==(n=t.rules.find(t=>!t.promRule&&l(t,e,!0)))&&void 0!==n?n:t.rules.find(t=>!t.promRule&&l(t,e,!1))}(t,n,e.rulesSource);a?a.promRule=t:n.rules.push(function(e,t,a){return{name:e.name,query:e.query,labels:e.labels||{},annotations:Object(i.h)(e)&&e.annotations||{},promRule:e,namespace:t,group:a}}(t,e,n))})})}(b[t]=b[t]||{rulesSource:e,name:t,groups:[]},a)});const p=Object.values(b);return Object(r.k)(e)&&p.forEach(e=>{e.groups=[{name:"default",rules:e.groups.flatMap(e=>e.rules).sort((e,t)=>e.name.localeCompare(t.name))}]}),s.current[c]={promRules:d,rulerRules:u,result:p},p}).flat(),[t,a,c])}function l(e,t,a=!0){return e.name===t.name&&JSON.stringify([a?c(e.query):"",e.labels,e.annotations])===JSON.stringify([a?c(t.query):"",t.labels||{},Object(i.h)(t)&&t.annotations||{}])}function c(e){return e.length>1&&"("===e[0]&&")"===e[e.length-1]&&(e=e.substr(1,e.length-2)),(e=e.replace(/\s|\n/g,"")).split("").sort().join("")}},P8sI:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("/MKj"),r=a("w+lj"),i=a("q1tI"),o=a("4Yfp"),s=a("fXZ9");function l(e){const t=Object(n.useDispatch)(),a=Object(r.a)(e=>e.folders);if(Object(i.useEffect)(()=>{e&&t(Object(o.l)(e))},[t,e]),e){const t=a[e]||s.c;return{folder:t.result,loading:t.loading}}return{loading:!1}}},PynR:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("umNM"),r=a("IpGs"),i=a("P8sI");function o(e){const t=e&&Object(r.k)(e)?e.grafana_alert.namespace_uid:void 0,{folder:a,loading:o}=Object(i.a)(t);if(!e)return{isEditable:!1,loading:!1};if(Object(r.k)(e)){if(!t)throw new Error(`Rule ${e.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);return{isEditable:null==a?void 0:a.canSave,loading:o}}return{isEditable:n.a.isEditor,loading:!1}}},RKiO:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));const n=[{label:"json",insertText:"json",documentation:"Extracting labels from the log line using json parser. Only available in Loki 2.0+."},{label:"regexp",insertText:'regexp ""',documentation:"Extracting labels from the log line using regexp parser. Only available in Loki 2.0+.",move:-1},{label:"logfmt",insertText:"logfmt",documentation:"Extracting labels from the log line using logfmt parser. Only available in Loki 2.0+."}],r=[{label:"unwrap",insertText:"unwrap",detail:"unwrap identifier",documentation:"Take labels and use the values as sample data for metric aggregations. Only available in Loki 2.0+."},{label:"label_format",insertText:"label_format",documentation:"Use to rename, modify or add labels. For example, | label_format foo=bar . Only available in Loki 2.0+."},{label:"line_format",insertText:"line_format",documentation:'Rewrites log line content. For example, | line_format "{{.query}} {{.duration}}" . Only available in Loki 2.0+.'}],i=[{label:"sum",insertText:"sum",documentation:"Calculate sum over dimensions"},{label:"min",insertText:"min",documentation:"Select minimum over dimensions"},{label:"max",insertText:"max",documentation:"Select maximum over dimensions"},{label:"avg",insertText:"avg",documentation:"Calculate the average over dimensions"},{label:"stddev",insertText:"stddev",documentation:"Calculate population standard deviation over dimensions"},{label:"stdvar",insertText:"stdvar",documentation:"Calculate population standard variance over dimensions"},{label:"count",insertText:"count",documentation:"Count number of elements in the vector"},{label:"bottomk",insertText:"bottomk",documentation:"Smallest k elements by sample value"},{label:"topk",insertText:"topk",documentation:"Largest k elements by sample value"},{insertText:"avg_over_time",label:"avg_over_time",detail:"avg_over_time(range-vector)",documentation:"The average of all values in the specified interval. Only available in Loki 2.0+."},{insertText:"min_over_time",label:"min_over_time",detail:"min_over_time(range-vector)",documentation:"The minimum of all values in the specified interval. Only available in Loki 2.0+."},{insertText:"max_over_time",label:"max_over_time",detail:"max_over_time(range-vector)",documentation:"The maximum of all values in the specified interval. Only available in Loki 2.0+."},{insertText:"sum_over_time",label:"sum_over_time",detail:"sum_over_time(range-vector)",documentation:"The sum of all values in the specified interval. Only available in Loki 2.0+."},{insertText:"count_over_time",label:"count_over_time",detail:"count_over_time(range-vector)",documentation:"The count of all values in the specified interval."},{insertText:"stdvar_over_time",label:"stdvar_over_time",detail:"stdvar_over_time(range-vector)",documentation:"The population standard variance of the values in the specified interval. Only available in Loki 2.0+."},{insertText:"stddev_over_time",label:"stddev_over_time",detail:"stddev_over_time(range-vector)",documentation:"The population standard deviation of the values in the specified interval. Only available in Loki 2.0+."},{insertText:"quantile_over_time",label:"quantile_over_time",detail:"quantile_over_time(scalar, range-vector)",documentation:"The φ-quantile (0 ≤ φ ≤ 1) of the values in the specified interval. Only available in Loki 2.0+."},{insertText:"bytes_over_time",label:"bytes_over_time",detail:"bytes_over_time(range-vector)",documentation:"Counts the amount of bytes used by each log stream for a given range"},{insertText:"bytes_rate",label:"bytes_rate",detail:"bytes_rate(range-vector)",documentation:"Calculates the number of bytes per second for each stream."},{insertText:"rate",label:"rate",detail:"rate(v range-vector)",documentation:"Calculates the per-second average rate of increase of the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for. Also, the calculation extrapolates to the ends of the time range, allowing for missed scrapes or imperfect alignment of scrape cycles with the range's time period."}],o={comment:{pattern:/#.*/},"context-aggregation":{pattern:/((without|by)\s*)\([^)]*\)/,lookbehind:!0,inside:{"label-key":{pattern:/[^(),\s][^,)]*[^),\s]*/,alias:"attr-name"},punctuation:/[()]/}},"context-labels":{pattern:/\{[^}]*(?=}?)/,greedy:!0,inside:{comment:{pattern:/#.*/},"label-key":{pattern:/[a-z_]\w*(?=\s*(=|!=|=~|!~))/,alias:"attr-name",greedy:!0},"label-value":{pattern:/"(?:\\.|[^\\"])*"/,greedy:!0,alias:"attr-value"},punctuation:/[{]/}},"context-pipe":{pattern:/\s\|[^=~]\s?\w*/i,inside:{"pipe-operator":{pattern:/\|/i,alias:"operator"},"pipe-operations":{pattern:new RegExp(""+[...n,...r].map(e=>e.label).join("|"),"i"),alias:"keyword"}}},function:new RegExp(`\\b(?:${i.map(e=>e.label).join("|")})(?=\\s*\\()`,"i"),"context-range":[{pattern:/\[[^\]]*(?=\])/,inside:{"range-duration":{pattern:/\b\d+[smhdwy]\b/i,alias:"number"}}},{pattern:/(offset\s+)\w+/,lookbehind:!0,inside:{"range-duration":{pattern:/\b\d+[smhdwy]\b/i,alias:"number"}}}],number:/\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,operator:/\s?(\|[=~]?|!=?|<(?:=>?|<|>)?|>[>=]?)\s?/i,punctuation:/[{}()`,.]/};t.d=o},RLby:function(e,t,a){"use strict";var n=a("kDLi"),r=a("q1tI"),i=a("vF1F"),o=a("IpGs"),s=a("Jzaf"),l=a("nKUr");const c=({children:e,className:t})=>{const a=Object(n.useStyles)(d);return Object(l.jsx)("div",{className:Object(i.cx)(a.wrapper,t),children:e})},d=e=>({wrapper:i.css`
    background-color: ${e.colors.panelBg};
    border: solid 1px ${e.colors.formInputBorder};
    border-radius: ${e.border.radius.sm};
    padding: ${e.spacing.xs} ${e.spacing.sm};
    font-family: ${e.typography.fontFamily.monospace};
  `});var u=a("dVib"),m=a("d6cIB");const b=["message","description"],p=({annotationKey:e,value:t})=>{const a=m.j[e]?Object(l.jsx)(n.Tooltip,{content:e,placement:"top",theme:"info",children:Object(l.jsx)("span",{children:m.j[e]})}):e;return Object(l.jsx)(u.a,{label:a,horizontal:!0,children:Object(l.jsx)(h,{annotationKey:e,value:t})})},h=({annotationKey:e,value:t})=>{const a=Object(n.useStyles)(v);return b.includes(e)?Object(l.jsx)(c,{children:t}):t&&t.startsWith("http")?Object(l.jsx)("a",{href:t,target:"__blank",className:a.link,children:t}):Object(l.jsx)(l.Fragment,{children:t})},v=e=>({well:i.css`
    word-break: break-all;
  `,link:i.css`
    word-break: break-all;
    color: ${e.colors.textBlue};
  `});var g=a("CBrm");const f=({instance:e})=>{const t=(Object.entries(e.annotations||{})||[]).filter(([e,t])=>!!t.trim());return Object(l.jsxs)("div",{children:[e.value&&Object(l.jsx)(u.a,{label:"Value",horizontal:!0,children:e.value}),t.map(([e,t])=>Object(l.jsx)(p,{annotationKey:e,value:t},e))]})};var x=a("Qil4"),j=a("wDOy");const y=({instances:e})=>{const t=Object(r.useMemo)(()=>e.map(e=>({data:e,id:Object(o.a)(e)})).sort((e,t)=>e.id.localeCompare(t.id)),[e]);return Object(l.jsx)(j.a,{cols:O,isExpandable:!0,items:t,renderExpandedContent:({data:e})=>Object(l.jsx)(f,{instance:e})})},O=[{id:"state",label:"State",renderCell:({data:{state:e}})=>Object(l.jsx)(x.a,{state:e}),size:"80px"},{id:"labels",label:"Labels",renderCell:({data:{labels:e}})=>Object(l.jsx)(g.a,{labels:e})},{id:"created",label:"Created",renderCell:({data:{activeAt:e}})=>Object(l.jsx)(l.Fragment,{children:e.startsWith("0001")?"-":e.substr(0,19).replace("T"," ")}),size:"150px"}];var _=a("WnbS"),w=a("exx3"),T=a("LBMm"),k=a("itod"),C=a("RKiO"),$=a("wZee");function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const N=({language:e,expr:t})=>{const a=Object(r.useMemo)(()=>[Object(n.SlatePrism)({onlyIn:e=>"code_block"===e.type,getSyntax:()=>e},R({},$.languages,{[e]:"logql"===e?C.d:k.c}))],[e]),i=Object(r.useMemo)(()=>Object(n.makeValue)(t),[t]);return Object(l.jsx)(T.a,{plugins:a,value:i,readOnly:!0})},S=({expression:e,rulesSource:t})=>{const a=Object(n.useStyles)(q);return Object(l.jsx)(c,{className:Object(i.cx)(a.well,"slate-query-field"),children:Object(s.j)(t)?Object(l.jsx)(N,{expr:e,language:t.type===s.a.Loki?"logql":"promql"}):e})},q=e=>({well:i.css`
    font-family: ${e.typography.fontFamily.monospace};
  `});var E,z,I=a("Obii"),L=a("umNM"),F=a("/MKj"),G=a("Ty5D"),B=a("PynR"),U=a("4Yfp"),M=a("8qpb");const D=({rule:e,rulesSource:t})=>{const a=Object(F.useDispatch)(),i=Object(G.l)(),c=Object(n.useStyles2)(V),{namespace:d,group:u,rulerRule:b}=e,[p,h]=Object(r.useState)(),v=[],g=[],{isEditable:f}=Object(B.a)(b),x=()=>{p&&p.rulerRule&&(a(Object(U.c)(Object(o.f)(Object(s.i)(p.namespace.rulesSource),p.namespace.name,p.group.name,p.rulerRule))),h(void 0))};if(Object(s.j)(t)&&L.a.isEditor&&v.push(Object(l.jsx)(n.LinkButton,{className:c.button,size:"xs",variant:"primary",icon:"chart-line",target:"__blank",href:Object(M.b)(t.name,e.query),children:"See graph"},"explore")),e.annotations[m.c.runbookURL]&&v.push(Object(l.jsx)(n.LinkButton,{className:c.button,size:"xs",variant:"primary",icon:"book",target:"__blank",href:e.annotations[m.c.runbookURL],children:"View runbook"},"runbook")),e.annotations[m.c.dashboardUID]){const t=e.annotations[m.c.dashboardUID];if(t){v.push(Object(l.jsx)(n.LinkButton,{className:c.button,size:"xs",variant:"primary",icon:"apps",target:"__blank",href:"d/"+encodeURIComponent(t),children:"Go to dashboard"},"dashboard"));const a=e.annotations[m.c.panelID];a&&v.push(Object(l.jsx)(n.LinkButton,{className:c.button,size:"xs",variant:"primary",icon:"apps",target:"__blank",href:`d/${encodeURIComponent(t)}?viewPanel=${encodeURIComponent(a)}`,children:"Go to panel"},"dashboard"))}}if(f&&b){const a=I.urlUtil.renderUrl(`/alerting/${encodeURIComponent(Object(o.q)(Object(o.f)(Object(s.i)(t),d.name,u.name,b)))}/edit`,{returnTo:i.pathname+i.search});g.push(Object(l.jsx)(n.LinkButton,{className:c.button,size:"xs",variant:"secondary",icon:"pen",href:a,children:"Edit"},"edit"),Object(l.jsx)(n.Button,{className:c.button,size:"xs",type:"button",variant:"secondary",icon:"trash-alt",onClick:()=>h(e),children:"Delete"},"delete"))}return v.length||g.length?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:c.wrapper,children:[Object(l.jsx)(n.HorizontalGroup,{width:"auto",children:v.length?v:E||(E=Object(l.jsx)("div",{}))}),Object(l.jsx)(n.HorizontalGroup,{width:"auto",children:g.length?g:z||(z=Object(l.jsx)("div",{}))})]}),!!p&&Object(l.jsx)(n.ConfirmModal,{isOpen:!0,title:"Delete rule",body:"Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:x,onDismiss:()=>h(void 0)})]}):null},V=e=>({wrapper:i.css`
    padding: ${e.spacing(2)} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: solid 1px ${e.colors.border.medium};
  `,button:i.css`
    height: 24px;
    margin-top: ${e.spacing(1)};
    font-size: ${e.typography.size.sm};
  `}),P=({rule:e})=>{var t;const a=Object(n.useStyles2)(K),{promRule:c,namespace:{rulesSource:d}}=e,m=Object.entries(e.annotations).filter(([e,t])=>!!t.trim()),b=Object(r.useMemo)(()=>{if(Object(s.j)(d))return[{name:d.name,icon:d.meta.info.logos.small}];if(Object(o.k)(e.rulerRule)){const{data:t}=e.rulerRule.grafana_alert;return t.reduce((e,t)=>{const a=Object(_.a)().getInstanceSettings(t.datasourceUid);return a&&a.uid!==w.b?(e.push({name:a.name,icon:a.meta.info.logos.small}),e):e},[])}return[]},[e,d]);return Object(l.jsxs)("div",{children:[Object(l.jsx)(D,{rule:e,rulesSource:d}),Object(l.jsxs)("div",{className:a.wrapper,children:[Object(l.jsxs)("div",{className:a.leftSide,children:[!!e.labels&&!!Object.keys(e.labels).length&&Object(l.jsx)(u.a,{label:"Labels",horizontal:!0,children:Object(l.jsx)(g.a,{labels:e.labels})}),Object(s.j)(d)&&Object(l.jsx)(u.a,{label:"Expression",className:Object(i.cx)({[a.exprRow]:!!m.length}),horizontal:!0,children:Object(l.jsx)(S,{expression:e.query,rulesSource:d})}),m.map(([e,t])=>Object(l.jsx)(p,{annotationKey:e,value:t},e))]}),Object(l.jsx)("div",{className:a.rightSide,children:!!b.length&&Object(l.jsx)(u.a,{label:"Data source",children:b.map(({name:e,icon:t})=>Object(l.jsxs)("div",{children:[t&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{className:a.dataSourceIcon,src:t})," "]}),e]},e))})})]}),c&&Object(o.h)(c)&&!(null===(t=c.alerts)||void 0===t||!t.length)&&Object(l.jsx)(u.a,{label:"Matching instances",horizontal:!0,children:Object(l.jsx)(y,{instances:c.alerts})})]})},K=e=>({wrapper:i.css`
    display: flex;
    flex-direction: row;
    ${e.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,leftSide:i.css`
    flex: 1;
  `,rightSide:i.css`
    ${e.breakpoints.up("md")} {
      padding-left: 90px;
      width: 300px;
    }
  `,exprRow:i.css`
    margin-bottom: 46px;
  `,dataSourceIcon:i.css`
    width: ${e.spacing(2)};
    height: ${e.spacing(2)};
  `});var H,J,A=a("xsuF"),W=a("rhRp");const Y=({rule:e,isDeleting:t,isCreating:a})=>{const i=Object(n.useStyles2)(Z),{promRule:s}=e,c=Object(r.useMemo)(()=>{var e;if(s&&Object(o.h)(s)&&null!==(e=s.alerts)&&void 0!==e&&e.length&&s.state!==W.c.Inactive){const e=Object(o.e)(s);if(e)return Object(l.jsxs)("span",{title:String(e),className:i.for,children:["for"," ",Object(I.intervalToAbbreviatedDurationString)({start:e,end:new Date},!1)]})}return null},[s,i]);return t?H||(H=Object(l.jsxs)(n.HorizontalGroup,{align:"flex-start",children:[Object(l.jsx)(n.Spinner,{}),"deleting"]})):a?J||(J=Object(l.jsxs)(n.HorizontalGroup,{align:"flex-start",children:[" ",Object(l.jsx)(n.Spinner,{}),"creating"]})):s&&Object(o.h)(s)?Object(l.jsxs)(n.HorizontalGroup,{align:"flex-start",children:[Object(l.jsx)(x.a,{state:s.state}),c]}):s&&Object(o.l)(s)?Object(l.jsx)(l.Fragment,{children:"Recording rule"}):Object(l.jsx)(l.Fragment,{children:"n/a"})},Z=e=>({for:i.css`
    font-size: ${e.typography.bodySmall.fontSize};
    color: ${e.colors.text.secondary};
    white-space: nowrap;
  `});var Q,X;const ee=({rule:e})=>{const t=Object(n.useStyles2)(te);return"err"===e.health||"error"===e.health?Object(l.jsx)(n.Tooltip,{theme:"error",content:e.lastError||"No error message provided.",children:Object(l.jsxs)("div",{className:t.warn,children:[Q||(Q=Object(l.jsx)(n.Icon,{name:"exclamation-triangle"})),X||(X=Object(l.jsx)("span",{children:"error"}))]})}):Object(l.jsx)(l.Fragment,{children:e.health})},te=e=>({warn:i.css`
    display: inline-flex;
    flex-direction: row;
    color: ${e.colors.warning.text};
    & > * + * {
      margin-left: ${e.spacing(1)};
    }
  `});a.d(t,"a",(function(){return ae}));const ae=({rules:e,className:t,showGuidelines:a=!1,emptyMessage:o="No rules found.",showGroupColumn:c=!1,showSummaryColumn:d=!1})=>{const u=Object(n.useStyles2)(ne),b=Object(i.cx)(u.wrapper,t,{[u.wrapperMargin]:a}),p=Object(r.useMemo)(()=>{const t=[];return e.map((e,a)=>{var n;let r=JSON.stringify([null===(n=e.promRule)||void 0===n?void 0:n.type,e.labels,e.query,e.name,e.annotations]);return t.includes(r)&&(r+="-"+a),t.push(r),{id:r,data:e}})},[e]),h=function(e,t,a,o){const c=Object(A.a)(),d=Object(n.useStyles2)(ne);return Object(r.useMemo)(()=>{const n=[{id:"state",label:"State",renderCell:({data:e},t)=>{const{namespace:n}=e,{rulesSource:r}=n,{promRule:s,rulerRule:u}=e,m=!(!c(r)||!s||u),b=!(!c(r)||!u||s);return Object(l.jsxs)(l.Fragment,{children:[a&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:Object(i.cx)(d.ruleTopGuideline,d.guideline)}),!(t===o-1)&&Object(l.jsx)("div",{className:Object(i.cx)(d.ruleBottomGuideline,d.guideline)})]}),Object(l.jsx)(Y,{rule:e,isDeleting:m,isCreating:b})]})},size:"165px"},{id:"name",label:"Name",renderCell:({data:e})=>e.name,size:5},{id:"health",label:"Health",renderCell:({data:{promRule:e}})=>e?Object(l.jsx)(ee,{rule:e}):null,size:"75px"}];return e&&n.push({id:"summary",label:"Summary",renderCell:({data:e})=>{var t;return null!==(t=e.annotations[m.c.summary])&&void 0!==t?t:""},size:5}),t&&n.push({id:"group",label:"Group",renderCell:({data:e})=>{const{namespace:t,group:a}=e,{rulesSource:n}=t;return Object(s.j)(n)?`${t.name} > ${a.name}`:t.name},size:5}),n},[c,e,t,a,o,d])}(d,c,a,p.length);return e.length?Object(l.jsx)("div",{className:b,"data-testid":"rules-table",children:Object(l.jsx)(j.a,{cols:h,isExpandable:!0,items:p,renderExpandedContent:({data:t},n)=>Object(l.jsxs)(l.Fragment,{children:[n!==e.length-1&&a?Object(l.jsx)("div",{className:Object(i.cx)(u.ruleContentGuideline,u.guideline)}):null,Object(l.jsx)(P,{rule:t})]}),renderPrefixHeader:a?()=>Object(l.jsx)("div",{className:u.relative,children:Object(l.jsx)("div",{className:Object(i.cx)(u.headerGuideline,u.guideline)})}):void 0,renderPrefixCell:a?(t,a)=>Object(l.jsxs)("div",{className:u.relative,children:[Object(l.jsx)("div",{className:Object(i.cx)(u.ruleTopGuideline,u.guideline)}),!(a===e.length-1)&&Object(l.jsx)("div",{className:Object(i.cx)(u.ruleBottomGuideline,u.guideline)})]}):void 0})}):Object(l.jsx)("div",{className:Object(i.cx)(b,u.emptyMessage),children:o})},ne=e=>({wrapperMargin:i.css`
    ${e.breakpoints.up("md")} {
      margin-left: 36px;
    }
  `,emptyMessage:i.css`
    padding: ${e.spacing(1)};
  `,wrapper:i.css`
    width: auto;
    background-color: ${e.colors.background.secondary};
    border-radius: ${e.shape.borderRadius()};
  `,table:i.css`
    width: 100%;
    border-radius: ${e.shape.borderRadius()};
    border: solid 1px ${e.colors.border.weak};
    background-color: ${e.colors.background.secondary};

    th {
      padding: ${e.spacing(1)};
    }

    td + td {
      padding: ${e.spacing(0,1)};
    }

    tr {
      height: 38px;
    }
  `,evenRow:i.css`
    background-color: ${e.colors.background.primary};
  `,relative:i.css`
    position: relative;
    height: 100%;
  `,guideline:i.css`
    left: -19px;
    border-left: 1px solid ${e.colors.border.medium};
    position: absolute;

    ${e.breakpoints.down("md")} {
      display: none;
    }
  `,ruleTopGuideline:i.css`
    width: 18px;
    border-bottom: 1px solid ${e.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,ruleBottomGuideline:i.css`
    top: 50%;
    bottom: 0;
  `,ruleContentGuideline:i.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:i.css`
    top: -24px;
    bottom: 0;
  `,state:i.css`
    width: 110px;
  `})},dVib:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("q1tI");var n=a("vF1F"),r=a("kDLi"),i=a("nKUr");const o=({className:e,label:t,horizontal:a,children:o})=>{const l=Object(r.useStyles2)(s);return Object(i.jsxs)("div",{className:Object(n.cx)(e,l.field,a?l.fieldHorizontal:l.fieldVertical),children:[Object(i.jsx)("div",{children:t}),Object(i.jsx)("div",{children:o})]})},s=e=>({fieldHorizontal:n.css`
    flex-direction: row;
    ${e.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,fieldVertical:n.css`
    flex-direction: column;
  `,field:n.css`
    display: flex;
    margin: ${e.spacing(2)} 0;

    & > div:first-child {
      width: 110px;
      padding-right: ${e.spacing(1)};
      font-size: ${e.typography.size.sm};
      font-weight: ${e.typography.fontWeightBold};
      line-height: 1.8;
    }
    & > div:nth-child(2) {
      flex: 1;
      color: ${e.colors.text.secondary};
    }
  `})},itod:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));const n=[{label:"$__interval",sortValue:"$__interval"},{label:"$__rate_interval",sortValue:"$__rate_interval"},{label:"1m",sortValue:"00:01:00"},{label:"5m",sortValue:"00:05:00"},{label:"10m",sortValue:"00:10:00"},{label:"30m",sortValue:"00:30:00"},{label:"1h",sortValue:"01:00:00"},{label:"1d",sortValue:"24:00:00"}],r=[{label:"sum",insertText:"sum",documentation:"Calculate sum over dimensions"},{label:"min",insertText:"min",documentation:"Select minimum over dimensions"},{label:"max",insertText:"max",documentation:"Select maximum over dimensions"},{label:"avg",insertText:"avg",documentation:"Calculate the average over dimensions"},{label:"stddev",insertText:"stddev",documentation:"Calculate population standard deviation over dimensions"},{label:"stdvar",insertText:"stdvar",documentation:"Calculate population standard variance over dimensions"},{label:"count",insertText:"count",documentation:"Count number of elements in the vector"},{label:"count_values",insertText:"count_values",documentation:"Count number of elements with the same value"},{label:"bottomk",insertText:"bottomk",documentation:"Smallest k elements by sample value"},{label:"topk",insertText:"topk",documentation:"Largest k elements by sample value"},{label:"quantile",insertText:"quantile",documentation:"Calculate φ-quantile (0 ≤ φ ≤ 1) over dimensions"},{insertText:"abs",label:"abs",detail:"abs(v instant-vector)",documentation:"Returns the input vector with all sample values converted to their absolute value."},{insertText:"absent",label:"absent",detail:"absent(v instant-vector)",documentation:"Returns an empty vector if the vector passed to it has any elements and a 1-element vector with the value 1 if the vector passed to it has no elements. This is useful for alerting on when no time series exist for a given metric name and label combination."},{insertText:"ceil",label:"ceil",detail:"ceil(v instant-vector)",documentation:"Rounds the sample values of all elements in `v` up to the nearest integer."},{insertText:"changes",label:"changes",detail:"changes(v range-vector)",documentation:"For each input time series, `changes(v range-vector)` returns the number of times its value has changed within the provided time range as an instant vector."},{insertText:"clamp_max",label:"clamp_max",detail:"clamp_max(v instant-vector, max scalar)",documentation:"Clamps the sample values of all elements in `v` to have an upper limit of `max`."},{insertText:"clamp_min",label:"clamp_min",detail:"clamp_min(v instant-vector, min scalar)",documentation:"Clamps the sample values of all elements in `v` to have a lower limit of `min`."},{insertText:"count_scalar",label:"count_scalar",detail:"count_scalar(v instant-vector)",documentation:"Returns the number of elements in a time series vector as a scalar. This is in contrast to the `count()` aggregation operator, which always returns a vector (an empty one if the input vector is empty) and allows grouping by labels via a `by` clause."},{insertText:"day_of_month",label:"day_of_month",detail:"day_of_month(v=vector(time()) instant-vector)",documentation:"Returns the day of the month for each of the given times in UTC. Returned values are from 1 to 31."},{insertText:"day_of_week",label:"day_of_week",detail:"day_of_week(v=vector(time()) instant-vector)",documentation:"Returns the day of the week for each of the given times in UTC. Returned values are from 0 to 6, where 0 means Sunday etc."},{insertText:"days_in_month",label:"days_in_month",detail:"days_in_month(v=vector(time()) instant-vector)",documentation:"Returns number of days in the month for each of the given times in UTC. Returned values are from 28 to 31."},{insertText:"delta",label:"delta",detail:"delta(v range-vector)",documentation:"Calculates the difference between the first and last value of each time series element in a range vector `v`, returning an instant vector with the given deltas and equivalent labels. The delta is extrapolated to cover the full time range as specified in the range vector selector, so that it is possible to get a non-integer result even if the sample values are all integers."},{insertText:"deriv",label:"deriv",detail:"deriv(v range-vector)",documentation:"Calculates the per-second derivative of the time series in a range vector `v`, using simple linear regression."},{insertText:"drop_common_labels",label:"drop_common_labels",detail:"drop_common_labels(instant-vector)",documentation:"Drops all labels that have the same name and value across all series in the input vector."},{insertText:"exp",label:"exp",detail:"exp(v instant-vector)",documentation:"Calculates the exponential function for all elements in `v`.\nSpecial cases are:\n* `Exp(+Inf) = +Inf` \n* `Exp(NaN) = NaN`"},{insertText:"floor",label:"floor",detail:"floor(v instant-vector)",documentation:"Rounds the sample values of all elements in `v` down to the nearest integer."},{insertText:"histogram_quantile",label:"histogram_quantile",detail:"histogram_quantile(φ float, b instant-vector)",documentation:"Calculates the φ-quantile (0 ≤ φ ≤ 1) from the buckets `b` of a histogram. The samples in `b` are the counts of observations in each bucket. Each sample must have a label `le` where the label value denotes the inclusive upper bound of the bucket. (Samples without such a label are silently ignored.) The histogram metric type automatically provides time series with the `_bucket` suffix and the appropriate labels."},{insertText:"holt_winters",label:"holt_winters",detail:"holt_winters(v range-vector, sf scalar, tf scalar)",documentation:"Produces a smoothed value for time series based on the range in `v`. The lower the smoothing factor `sf`, the more importance is given to old data. The higher the trend factor `tf`, the more trends in the data is considered. Both `sf` and `tf` must be between 0 and 1."},{insertText:"hour",label:"hour",detail:"hour(v=vector(time()) instant-vector)",documentation:"Returns the hour of the day for each of the given times in UTC. Returned values are from 0 to 23."},{insertText:"idelta",label:"idelta",detail:"idelta(v range-vector)",documentation:"Calculates the difference between the last two samples in the range vector `v`, returning an instant vector with the given deltas and equivalent labels."},{insertText:"increase",label:"increase",detail:"increase(v range-vector)",documentation:"Calculates the increase in the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for. The increase is extrapolated to cover the full time range as specified in the range vector selector, so that it is possible to get a non-integer result even if a counter increases only by integer increments."},{insertText:"irate",label:"irate",detail:"irate(v range-vector)",documentation:"Calculates the per-second instant rate of increase of the time series in the range vector. This is based on the last two data points. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for."},{insertText:"label_replace",label:"label_replace",detail:"label_replace(v instant-vector, dst_label string, replacement string, src_label string, regex string)",documentation:"For each timeseries in `v`, `label_replace(v instant-vector, dst_label string, replacement string, src_label string, regex string)`  matches the regular expression `regex` against the label `src_label`.  If it matches, then the timeseries is returned with the label `dst_label` replaced by the expansion of `replacement`. `$1` is replaced with the first matching subgroup, `$2` with the second etc. If the regular expression doesn't match then the timeseries is returned unchanged."},{insertText:"ln",label:"ln",detail:"ln(v instant-vector)",documentation:"calculates the natural logarithm for all elements in `v`.\nSpecial cases are:\n * `ln(+Inf) = +Inf`\n * `ln(0) = -Inf`\n * `ln(x < 0) = NaN`\n * `ln(NaN) = NaN`"},{insertText:"log2",label:"log2",detail:"log2(v instant-vector)",documentation:"Calculates the binary logarithm for all elements in `v`. The special cases are equivalent to those in `ln`."},{insertText:"log10",label:"log10",detail:"log10(v instant-vector)",documentation:"Calculates the decimal logarithm for all elements in `v`. The special cases are equivalent to those in `ln`."},{insertText:"minute",label:"minute",detail:"minute(v=vector(time()) instant-vector)",documentation:"Returns the minute of the hour for each of the given times in UTC. Returned values are from 0 to 59."},{insertText:"month",label:"month",detail:"month(v=vector(time()) instant-vector)",documentation:"Returns the month of the year for each of the given times in UTC. Returned values are from 1 to 12, where 1 means January etc."},{insertText:"predict_linear",label:"predict_linear",detail:"predict_linear(v range-vector, t scalar)",documentation:"Predicts the value of time series `t` seconds from now, based on the range vector `v`, using simple linear regression."},{insertText:"rate",label:"rate",detail:"rate(v range-vector)",documentation:"Calculates the per-second average rate of increase of the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for. Also, the calculation extrapolates to the ends of the time range, allowing for missed scrapes or imperfect alignment of scrape cycles with the range's time period."},{insertText:"resets",label:"resets",detail:"resets(v range-vector)",documentation:"For each input time series, `resets(v range-vector)` returns the number of counter resets within the provided time range as an instant vector. Any decrease in the value between two consecutive samples is interpreted as a counter reset."},{insertText:"round",label:"round",detail:"round(v instant-vector, to_nearest=1 scalar)",documentation:"Rounds the sample values of all elements in `v` to the nearest integer. Ties are resolved by rounding up. The optional `to_nearest` argument allows specifying the nearest multiple to which the sample values should be rounded. This multiple may also be a fraction."},{insertText:"scalar",label:"scalar",detail:"scalar(v instant-vector)",documentation:"Given a single-element input vector, `scalar(v instant-vector)` returns the sample value of that single element as a scalar. If the input vector does not have exactly one element, `scalar` will return `NaN`."},{insertText:"sort",label:"sort",detail:"sort(v instant-vector)",documentation:"Returns vector elements sorted by their sample values, in ascending order."},{insertText:"sort_desc",label:"sort_desc",detail:"sort_desc(v instant-vector)",documentation:"Returns vector elements sorted by their sample values, in descending order."},{insertText:"sqrt",label:"sqrt",detail:"sqrt(v instant-vector)",documentation:"Calculates the square root of all elements in `v`."},{insertText:"time",label:"time",detail:"time()",documentation:"Returns the number of seconds since January 1, 1970 UTC. Note that this does not actually return the current time, but the time at which the expression is to be evaluated."},{insertText:"vector",label:"vector",detail:"vector(s scalar)",documentation:"Returns the scalar `s` as a vector with no labels."},{insertText:"year",label:"year",detail:"year(v=vector(time()) instant-vector)",documentation:"Returns the year for each of the given times in UTC."},{insertText:"avg_over_time",label:"avg_over_time",detail:"avg_over_time(range-vector)",documentation:"The average value of all points in the specified interval."},{insertText:"min_over_time",label:"min_over_time",detail:"min_over_time(range-vector)",documentation:"The minimum value of all points in the specified interval."},{insertText:"max_over_time",label:"max_over_time",detail:"max_over_time(range-vector)",documentation:"The maximum value of all points in the specified interval."},{insertText:"sum_over_time",label:"sum_over_time",detail:"sum_over_time(range-vector)",documentation:"The sum of all values in the specified interval."},{insertText:"count_over_time",label:"count_over_time",detail:"count_over_time(range-vector)",documentation:"The count of all values in the specified interval."},{insertText:"quantile_over_time",label:"quantile_over_time",detail:"quantile_over_time(scalar, range-vector)",documentation:"The φ-quantile (0 ≤ φ ≤ 1) of the values in the specified interval."},{insertText:"stddev_over_time",label:"stddev_over_time",detail:"stddev_over_time(range-vector)",documentation:"The population standard deviation of the values in the specified interval."},{insertText:"stdvar_over_time",label:"stdvar_over_time",detail:"stdvar_over_time(range-vector)",documentation:"The population standard variance of the values in the specified interval."}],i={comment:{pattern:/#.*/},"context-aggregation":{pattern:/((by|without)\s*)\([^)]*\)/,lookbehind:!0,inside:{"label-key":{pattern:/[^(),\s][^,)]*[^),\s]*/,alias:"attr-name"},punctuation:/[()]/}},"context-labels":{pattern:/\{[^}]*(?=}?)/,greedy:!0,inside:{comment:{pattern:/#.*/},"label-key":{pattern:/[a-z_]\w*(?=\s*(=|!=|=~|!~))/,alias:"attr-name",greedy:!0},"label-value":{pattern:/"(?:\\.|[^\\"])*"/,greedy:!0,alias:"attr-value"},punctuation:/[{]/}},function:new RegExp(`\\b(?:${r.map(e=>e.label).join("|")})(?=\\s*\\()`,"i"),"context-range":[{pattern:/\[[^\]]*(?=])/,inside:{"range-duration":{pattern:/\b\d+[smhdwy]\b/i,alias:"number"}}},{pattern:/(offset\s+)\w+/,lookbehind:!0,inside:{"range-duration":{pattern:/\b\d+[smhdwy]\b/i,alias:"number"}}}],number:/\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,operator:new RegExp(`/[-+*/=%^~]|&&?|\\|?\\||!=?|<(?:=>?|<|>)?|>[>=]?|\\b(?:${["by","group_left","group_right","ignoring","on","offset","without"].join("|")})\\b`,"i"),punctuation:/[{};()`,.]/};t.c=i},wDOy:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),r=a("vF1F"),i=a("kDLi"),o=a("nKUr");const s=({cols:e,items:t,isExpandable:a=!1,onCollapse:s,onExpand:c,isExpanded:d,renderExpandedContent:u,testIdGenerator:m,renderPrefixCell:b,renderPrefixHeader:p})=>{if((s||c||d)&&!(s&&c&&d))throw new Error("either all of onCollapse, onExpand, isExpanded must be provided, or none");if((a||u)&&(!a||!u))throw new Error("either both isExpanded and renderExpandedContent must be provided, or neither");const h=Object(i.useStyles2)(l(e,a,!!p)),[v,g]=Object(n.useState)([]);return Object(o.jsxs)("div",{className:h.container,"data-testid":"dynamic-table",children:[Object(o.jsxs)("div",{className:h.row,"data-testid":"header",children:[p&&p(),a&&Object(o.jsx)("div",{className:h.cell}),e.map(e=>Object(o.jsx)("div",{className:h.cell,children:e.label},e.id))]}),t.map((t,n)=>{var l;const p=d?d(t):v.includes(t.id);return Object(o.jsxs)("div",{className:h.row,"data-testid":null!==(l=null==m?void 0:m(t,n))&&void 0!==l?l:"row",children:[b&&b(t,n),a&&Object(o.jsx)("div",{className:Object(r.cx)(h.cell,h.expandCell),children:Object(o.jsx)(i.IconButton,{size:"xl","data-testid":"collapse-toggle",className:h.expandButton,name:p?"angle-down":"angle-right",onClick:()=>(e=>{d&&s&&c?d(e)?s(e):c(e):g(v.includes(e.id)?v.filter(t=>t!==e.id):[...v,e.id])})(t),type:"button"})}),e.map(e=>Object(o.jsx)("div",{className:Object(r.cx)(h.cell,h.bodyCell),"data-column":e.label,children:e.renderCell(t,n)},`${t.id}-${e.id}`)),p&&u&&Object(o.jsx)("div",{className:h.expandedContentRow,"data-testid":"expanded-content",children:u(t,n)})]},t.id)})]})},l=(e,t,a)=>{const n=e.map(e=>e.size?"number"==typeof e.size?e.size+"fr":e.size:"auto");return t&&n.unshift("calc(1em + 16px)"),a&&n.unshift("0"),e=>({container:r.css`
      border: 1px solid ${e.colors.border.strong};
      border-radius: 2px;
      color: ${e.colors.text.secondary};
    `,row:r.css`
      display: grid;
      grid-template-columns: ${n.join(" ")};
      grid-template-rows: 1fr auto;

      &:nth-child(2n + 1) {
        background-color: ${e.colors.background.secondary};
      }

      &:nth-child(2n) {
        background-color: ${e.colors.background.primary};
      }

      ${e.breakpoints.down("sm")} {
        grid-template-columns: auto 1fr;
        grid-template-areas: 'left right';
        padding: 0 ${e.spacing(.5)};

        &:first-child {
          display: none;
        }

        ${a?"\n            & > *:first-child {\n              display: none;\n            }\n          ":""}
      }
    `,cell:r.css`
      align-items: center;
      padding: ${e.spacing(1)};

      ${e.breakpoints.down("sm")} {
        padding: ${e.spacing(1)} 0;
        grid-template-columns: 1fr;
      }
    `,bodyCell:r.css`
      overflow: hidden;
      word-break: break-all;
      ${e.breakpoints.down("sm")} {
        grid-column-end: right;
        grid-column-start: right;

        &::before {
          content: attr(data-column);
          display: block;
          color: ${e.colors.text.primary};
        }
      }
    `,expandCell:r.css`
      justify-content: center;

      ${e.breakpoints.down("sm")} {
        align-items: start;
        grid-area: left;
      }
    `,expandedContentRow:r.css`
      grid-column-end: ${n.length+1};
      grid-column-start: ${a?3:2};
      grid-row: 2;
      padding: 0 ${e.spacing(3)} 0 ${e.spacing(1)};
      position: relative;

      ${e.breakpoints.down("sm")} {
        grid-column-start: 2;
        border-top: 1px solid ${e.colors.border.strong};
        grid-row: auto;
        padding: ${e.spacing(1)} 0 0 0;
      }
    `,expandButton:r.css`
      margin-right: 0;
    `})}},xsuF:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),r=a("Jzaf"),i=a("w+lj");function o(){const e=Object(i.a)(e=>e.rulerRules);return Object(n.useCallback)(t=>{var a;const n="string"==typeof t?t:t.name;return n===r.b||!(null===(a=e[n])||void 0===a||!a.result)},[e])}}}]);
//# sourceMappingURL=default~AlertRuleListIndex~DashboardPage.469fc90b3a949936bbff.js.map