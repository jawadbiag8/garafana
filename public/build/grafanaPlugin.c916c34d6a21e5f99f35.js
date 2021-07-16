(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{gcd9:function(e,t,a){"use strict";a.r(t);var n=a("Obii");let s;!function(e){e.RandomWalk="randomWalk",e.LiveMeasurements="measurements"}(s||(s={}));const r={refId:"A",queryType:s.RandomWalk};let l;!function(e){e.Dashboard="dashboard",e.Tags="tags"}(l||(l={}));var o=a("t8hP"),i=a("p0ib"),u=a("F/XL"),c=a("67Y/"),d=a("9Z1F");let h=100;class f extends n.DataSourceApi{constructor(e){super(e)}query(e){const t=[];for(const l of e.targets)if(!l.hide)if(l.queryType===s.LiveMeasurements){var a,r;let{channel:s,filter:i}=l;s&&s.startsWith("telegraf/")&&(s="stream/"+s,l.channel=s);const u=Object(n.parseLiveChannelAddress)(s);if(!Object(n.isValidLiveChannelAddress)(u))continue;const c={maxLength:null!==(a=e.maxDataPoints)&&void 0!==a?a:500};l.buffer?(c.maxDelta=l.buffer,c.maxLength=2*c.maxLength):"now"===(null===(r=e.rangeRaw)||void 0===r?void 0:r.to)&&(c.maxDelta=e.range.to.valueOf()-e.range.from.valueOf()),t.push(Object(o.getGrafanaLiveSrv)().getDataStream({key:`${e.requestId}.${h++}`,addr:u,filter:i,buffer:c}))}else t.push(m(e));return 1===t.length?t[0]:t.length>1?Object(i.a)(...t):Object(u.a)()}metricFindQuery(e){return Promise.resolve([])}annotationQuery(e){var t;const a=Object(o.getTemplateSrv)(),n=e.annotation,s={from:e.range.from.valueOf(),to:e.range.to.valueOf(),limit:n.limit,tags:n.tags,matchAny:n.matchAny};if(n.type===l.Dashboard){if(!e.dashboard.id)return Promise.resolve([]);s.dashboardId=e.dashboard.id,delete s.tags}else{if(!Array.isArray(n.tags)||0===n.tags.length)return Promise.resolve([]);const e="__delimiter__",t=[];for(const n of s.tags){const s=a.replace(n,{},t=>"string"==typeof t?t:t.join(e));for(const a of s.split(e))t.push(a)}s.tags=t}return Object(o.getBackendSrv)().get("/api/annotations",s,`grafana-data-source-annotations-${n.name}-${null===(t=e.dashboard)||void 0===t?void 0:t.id}`)}testDatasource(){return Promise.resolve()}}function m(e){const{intervalMs:t,maxDataPoints:a,range:n,requestId:s}=e,r={intervalMs:t,maxDataPoints:a,from:n.from.valueOf(),to:n.to.valueOf()};return Object(o.getBackendSrv)().fetch({url:"/api/tsdb/testdata/random-walk",method:"GET",params:r,requestId:s}).pipe(Object(c.a)(e=>Object(o.toDataQueryResponse)(e)),Object(d.a)(e=>Object(u.a)(Object(o.toDataQueryResponse)(e))))}var p,v=a("LvDl"),b=a("q1tI"),g=a("kDLi"),y=a("nKUr");function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}class O extends b.PureComponent{constructor(...e){super(...e),this.state={channels:[],channelFields:{}},this.queryTypes=[{label:"Random Walk",value:s.RandomWalk,description:"Random signal within the selected time range"},{label:"Live Measurements",value:s.LiveMeasurements,description:"Stream real-time measurements from Grafana"}],this.onQueryTypeChange=e=>{const{onChange:t,query:a,onRunQuery:n}=this.props;t(j({},a,{queryType:e.value})),n(),this.loadChannelInfo()},this.onChannelChange=e=>{const{onChange:t,query:a,onRunQuery:n}=this.props;t(j({},a,{channel:null==e?void 0:e.value})),n()},this.onFieldNamesChange=e=>{var t,a;const{onChange:n,query:s,onRunQuery:r}=this.props;let l=[];if(Array.isArray(e)?l=e.map(e=>e.value):e.value&&(l=[e.value]),1===l.length&&(null===(t=s.filter)||void 0===t||null===(a=t.fields)||void 0===a||!a.length)&&s.channel){var o;const e=(null!==(o=this.state.channelFields[s.channel])&&void 0!==o?o:[]).find(e=>"time"===e.value||"Time"===e.value);e&&e.value&&e.value!==l[0]&&(l=[e.value,...l])}n(j({},s,{filter:j({},s.filter,{fields:l})})),r()},this.checkAndUpdateBuffer=e=>{const{onChange:t,query:a,onRunQuery:s}=this.props;let r;if(e)try{r=1e3*n.rangeUtil.intervalToSeconds(e)}catch(e){console.warn("ERROR",e)}t(j({},a,{buffer:r})),s()},this.handleEnterKey=e=>{"Enter"===e.key&&this.checkAndUpdateBuffer(e.target.value)},this.handleBlur=e=>{this.checkAndUpdateBuffer(e.target.value)}}loadChannelInfo(){Object(o.getBackendSrv)().fetch({url:"api/live/list"}).subscribe({next:e=>{var t;const a=null===(t=e.data)||void 0===t?void 0:t.channels;if(null!=a&&a.length){const e={},t=a.map(t=>{if(t.data){const a=new Set,s=Object(n.dataFrameFromJSON)(t.data);for(const e of s.fields)a.add(e.name);e[t.channel]=Array.from(a).map(e=>({value:e,label:e}))}return{value:t.channel,label:t.channel}});this.setState({channelFields:e,channels:t})}}})}componentDidMount(){this.loadChannelInfo()}renderMeasurementsQuery(){var e;let{channel:t,filter:a,buffer:s}=this.props.query,{channels:r,channelFields:l}=this.state,o=r.find(e=>e.value===t);t&&!o&&(o={value:t,label:t,description:"Connected to "+t},r=[o,...r]);const i=new Set,u=t&&null!==(e=l[t])&&void 0!==e?e:[];if(null!=a&&a.fields)for(const e of a.fields)i.has(e)||(u.push({value:e,label:e+" (not loaded)",description:"Configured, but not found in the query results"}),i.add(e));let c="";return s&&(c=n.rangeUtil.secondsToHms(s/1e3)),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"gf-form",children:Object(y.jsx)(g.InlineField,{label:"Channel",grow:!0,labelWidth:12,children:Object(y.jsx)(g.Select,{options:r,value:o||"",onChange:this.onChannelChange,allowCustomValue:!0,backspaceRemovesValue:!0,placeholder:"Select measurements channel",isClearable:!0,noOptionsMessage:"Enter channel name",formatCreateLabel:e=>"Connect to: "+e})})}),t&&Object(y.jsxs)("div",{className:"gf-form",children:[Object(y.jsx)(g.InlineField,{label:"Fields",grow:!0,labelWidth:12,children:Object(y.jsx)(g.Select,{options:u,value:(null==a?void 0:a.fields)||[],onChange:this.onFieldNamesChange,allowCustomValue:!0,backspaceRemovesValue:!0,placeholder:"All fields",isClearable:!0,noOptionsMessage:"Unable to list all fields",formatCreateLabel:e=>"Field: "+e,isSearchable:!0,isMulti:!0})}),Object(y.jsx)(g.InlineField,{label:"Buffer",children:Object(y.jsx)(g.Input,{placeholder:"Auto",width:12,defaultValue:c,onKeyDown:this.handleEnterKey,onBlur:this.handleBlur,spellCheck:!1})})]}),p||(p=Object(y.jsx)(g.Alert,{title:"Grafana Live - Measurements",severity:"info",children:"This supports real-time event streams in Grafana core. This feature is under heavy development. Expect the interfaces and structures to change as this becomes more production ready."}))]})}render(){const e=Object(v.defaults)(this.props.query,r);return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:"gf-form",children:Object(y.jsx)(g.InlineField,{label:"Query type",grow:!0,labelWidth:12,children:Object(y.jsx)(g.Select,{options:this.queryTypes,value:this.queryTypes.find(t=>t.value===e.queryType)||this.queryTypes[0],onChange:this.onQueryTypeChange})})}),e.queryType===s.LiveMeasurements&&this.renderMeasurementsQuery()]})}}const C=[{text:"Dashboard",value:l.Dashboard},{text:"Tags",value:l.Tags}];class x{constructor(e){this.types=C,this.annotation=e.ctrl.annotation,this.annotation.type=this.annotation.type||l.Tags,this.annotation.limit=this.annotation.limit||100}}x.$inject=["$scope"],x.templateUrl="partials/annotations.editor.html",a.d(t,"plugin",(function(){return w}));const w=new n.DataSourcePlugin(f).setQueryEditor(O).setAnnotationQueryCtrl(x)}}]);
//# sourceMappingURL=grafanaPlugin.c916c34d6a21e5f99f35.js.map