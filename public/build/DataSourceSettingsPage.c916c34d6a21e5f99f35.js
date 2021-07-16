(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"5BCB":function(e,t,a){"use strict";var n=a("Obii"),r=a("t8hP"),s=a("3SGO"),i=a("NXk7"),o=a("WnbS"),c=a("Vw/f"),u=a("okuo"),d=a("ZFWI");function l(e){const t=[{id:"tsdb",title:"Time series databases",plugins:[]},{id:"logging",title:"Logging & document databases",plugins:[]},{id:"tracing",title:"Distributed tracing",plugins:[]},{id:"sql",title:"SQL",plugins:[]},{id:"cloud",title:"Cloud",plugins:[]},{id:"enterprise",title:"Enterprise plugins",plugins:[]},{id:"iot",title:"Industrial & IoT",plugins:[]},{id:"other",title:"Others",plugins:[]}].filter(e=>e),a={},r={},s=[p({id:"grafana-splunk-datasource",name:"Splunk",description:"Visualize and explore Splunk logs",imgUrl:"public/img/plugins/splunk_logo_128.png"}),p({id:"grafana-oracle-datasource",name:"Oracle",description:"Visualize and explore Oracle SQL",imgUrl:"public/img/plugins/oracle.png"}),p({id:"grafana-dynatrace-datasource",name:"Dynatrace",description:"Visualize and explore Dynatrace data",imgUrl:"public/img/plugins/dynatrace.png"}),p({id:"grafana-servicenow-datasource",description:"ServiceNow integration and data source",name:"ServiceNow",imgUrl:"public/img/plugins/servicenow.svg"}),p({id:"grafana-datadog-datasource",description:"DataDog integration and data source",name:"DataDog",imgUrl:"public/img/plugins/datadog.png"}),p({id:"grafana-newrelic-datasource",description:"New Relic integration and data source",name:"New Relic",imgUrl:"public/img/plugins/newrelic.svg"}),p({id:"grafana-mongodb-datasource",description:"MongoDB integration and data source",name:"MongoDB",imgUrl:"public/img/plugins/mongodb.svg"}),p({id:"grafana-snowflake-datasource",description:"Snowflake integration and data source",name:"Snowflake",imgUrl:"public/img/plugins/snowflake.svg"}),p({id:"grafana-wavefront-datasource",description:"Wavefront integration and data source",name:"Wavefront",imgUrl:"public/img/plugins/wavefront.svg"}),p({id:"dlopes7-appdynamics-datasource",description:"AppDynamics integration and data source",name:"AppDynamics",imgUrl:"public/img/plugins/appdynamics.svg"}),p({id:"grafana-saphana-datasource",description:"SAP HANA® integration and data source",name:"SAP HANA®",imgUrl:"public/img/plugins/sap_hana.png"})];for(const e of t)a[e.id]=e;const{edition:i,hasValidLicense:o}=d.a.licenseInfo;for(const n of e){const e=s.find(e=>e.id===n.id);var c;if(n.enterprise||e)n.category="enterprise",n.unlicensed="Open Source"!==i&&!o,n.info.links=(null==e||null===(c=e.info)||void 0===c?void 0:c.links)||n.info.links;if(n.info.links)for(const e of n.info.links)e.name="Learn more";(t.find(e=>e.id===n.category)||a.other).plugins.push(n),r[n.id]=n}for(const e of t){if("cloud"===e.id&&e.plugins.push({id:"gcloud",name:"Grafana Cloud",type:n.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:"Hosted Graphite, Prometheus, and Loki",logos:{small:"public/img/logo-Auto-orche.png",large:"asd"},author:{name:"Grafana Labs"},links:[{url:"https://grafana.com/products/cloud/",name:"Learn more"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}),"enterprise"===e.id)for(const t of s)r[t.id]||e.plugins.push(t);g(e.plugins)}return t.filter(e=>e.plugins.length>0)}function g(e){const t={prometheus:100,graphite:95,loki:90,mysql:80,jaeger:100,postgres:79,gcloud:-1};e.sort((e,a)=>{const n=t[e.id]||0,r=t[a.id]||0;return n>r?-1:n<r?1:e.name>a.name?-1:1})}function p(e){return{id:e.id,name:e.name,type:n.PluginType.datasource,module:"phantom",baseUrl:"",info:{description:e.description,logos:{small:e.imgUrl,large:e.imgUrl},author:{name:"Grafana Labs"},links:[{url:d.a.pluginCatalogURL+e.id,name:"Install now"}],screenshots:[],updated:"2019-05-10",version:"1.0.0"}}}var h=a("HUMP"),f=a("FFN/"),m=a("frIo");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"c",(function(){return S})),a.d(t,"g",(function(){return j})),a.d(t,"f",(function(){return v})),a.d(t,"d",(function(){return O})),a.d(t,"a",(function(){return y})),a.d(t,"e",(function(){return D})),a.d(t,"h",(function(){return w})),a.d(t,"b",(function(){return x}));const S=(e,t={loadDataSource:O,getDataSource:m.a,getDataSourceMeta:m.b,importDataSourcePlugin:c.b})=>async(a,n)=>{if(e)try{if(await a(t.loadDataSource(e)),n().dataSourceSettings.plugin)return;const r=t.getDataSource(n().dataSources,e),s=t.getDataSourceMeta(n().dataSources,r.type),i=await t.importDataSourcePlugin(s);a(Object(f.h)(i))}catch(e){console.error("Failed to import plugin module",e),a(Object(f.g)(e))}else a(Object(f.g)(new Error("Invalid ID")))},j=(e,t={getDatasourceSrv:o.a,getBackendSrv:i.c})=>async(a,n)=>{const r=await t.getDatasourceSrv().get(e);r.testDatasource&&(a(Object(f.o)()),t.getBackendSrv().withNoBackendCache(async()=>{try{const e=await r.testDatasource();a(Object(f.p)(e))}catch(e){const{statusText:t,message:n,details:r}=e,s=t?"HTTP error "+t:n;a(Object(f.n)({message:s,details:r}))}}))};function v(){return async e=>{const t=await Object(i.c)().get("/api/datasources");e(Object(f.e)(t))}}function O(e){return async t=>{const a=await async function(e){try{const t=await Object(i.c)().fetch({method:"GET",url:"/api/datasources/uid/"+e,showErrorAlert:!1}).toPromise();if(t.ok)return t.data}catch(e){console.log("Failed to lookup data source by uid",e)}const t=parseInt(e,10);if(!Number.isNaN(t)){const a=await Object(i.c)().fetch({method:"GET",url:"/api/datasources/"+t,showErrorAlert:!1}).toPromise();if(a.ok&&a.data.id.toString()===e)return window.location.href=n.locationUtil.assureBaseUrl("/datasources/edit/"+a.data.uid),{}}throw Error("Could not find data source")}(e),o=await Object(u.a)(a.type),d=await Object(c.b)(o),l=b({},o,{isBackend:d.DataSourceClass.prototype instanceof r.DataSourceWithBackend});t(Object(f.a)(a)),t(Object(f.b)(l)),d.meta=l,t(Object(s.d)(Object(h.a)(a,d)))}}function y(e){return async(t,a)=>{await t(v());const n=a().dataSources.dataSources,s={name:e.name,type:e.id,access:"proxy",isDefault:0===n.length};k(n,s.name)&&(s.name=function(e,t){for(;k(e,t);)P(t)?t=`${N(t)}${a=M(t),isNaN(a)?1:a+1}`:t+="-1";var a;return t}(n,s.name));const o=await Object(i.c)().post("/api/datasources",s);r.locationService.push("/datasources/edit/"+o.datasource.uid)}}function D(){return async e=>{e(Object(f.c)());const t=await Object(i.c)().get("/api/plugins",{enabled:1,type:"datasource"}),a=l(t);e(Object(f.d)({plugins:t,categories:a}))}}function w(e){return async t=>(await Object(i.c)().put("/api/datasources/"+e.id,e),await C(),t(O(e.uid)))}function x(){return async(e,t)=>{const a=t().dataSources.dataSource;await Object(i.c)().delete("/api/datasources/"+a.id),await C(),r.locationService.push("/datasources")}}function k(e,t){return e.filter(e=>e.name.toLowerCase()===t.toLowerCase()).length>0}function C(){return Object(i.c)().get("/api/frontend/settings").then(e=>{d.b.datasources=e.datasources,d.b.defaultDatasource=e.defaultDatasource,Object(o.a)().init(d.b.datasources,e.defaultDatasource)})}function P(e){return e.endsWith("-",e.length-1)}function M(e){return parseInt(e.slice(-1),10)}function N(e){return e.slice(0,e.length-1)}},HUMP:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return o}));var n=a("Obii"),r=a("ZFWI");function s(e,t){const a=t.meta,n={img:a.info.logos.large,id:"datasource-"+e.uid,subTitle:"Type: "+a.name,url:"",text:e.name,breadcrumbs:[{title:"Data Sources",url:"datasources"}],children:[{active:!1,icon:"sliders-v-alt",id:"datasource-settings-"+e.uid,text:"Settings",url:`datasources/edit/${e.uid}/`}]};if(t.configPages)for(const a of t.configPages)n.children.push({active:!1,text:a.title,icon:a.icon,url:`datasources/edit/${e.uid}/?page=${a.id}`,id:"datasource-page-"+a.id});return a.includes&&void 0!==a.includes.find(e=>"dashboard"===e.type)&&n.children.push({active:!1,icon:"apps",id:"datasource-dashboards-"+e.uid,text:"Dashboards",url:`datasources/edit/${e.uid}/dashboards`}),r.b.licenseInfo.hasLicense&&(n.children.push({active:!1,icon:"lock",id:"datasource-permissions-"+e.id,text:"Permissions",url:`datasources/edit/${e.id}/permissions`}),n.children.push({active:!1,icon:"info-circle",id:"datasource-insights-"+e.id,text:"Insights",url:`datasources/edit/${e.id}/insights`}),n.children.push({active:!1,icon:"database",id:"datasource-cache-"+e.id,text:"Cache",url:`datasources/edit/${e.id}/cache`,hideFromTabs:!a.isBackend||!r.b.caching.enabled})),n}function i(e,t){let a;for(const n of e.children)if(n.id.indexOf(t)>0){n.active=!0,a=n;break}return{main:e,node:a}}function o(e){return i(s({access:"",basicAuth:!1,basicAuthUser:"",basicAuthPassword:"",withCredentials:!1,database:"",id:1,uid:"x",isDefault:!1,jsonData:{authType:"credentials",defaultRegion:"eu-west-2"},name:"Loading",orgId:1,password:"",readOnly:!1,type:"Loading",typeName:"Loading",typeLogoUrl:"public/img/icn-datasource.svg",url:"",user:"",secureJsonFields:{}},{meta:{id:"1",type:n.PluginType.datasource,name:"",info:{author:{name:"",url:""},description:"",links:[{name:"",url:""}],logos:{large:"",small:""},screenshots:[],updated:"",version:""},includes:[],module:"",baseUrl:""}}),e)}},Klwq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),s=a("LvDl"),i=a("ZGyg"),o=a("t8hP"),c=a("nKUr");class u extends n.PureComponent{constructor(e){super(e),this.element=null,this.component=void 0,this.scopeProps=void 0,this.onModelChanged=e=>{this.props.onModelChange(e)},this.scopeProps={ctrl:{datasourceMeta:e.dataSourceMeta,current:Object(s.cloneDeep)(e.dataSource)},onModelChanged:this.onModelChanged},this.onModelChanged=this.onModelChanged.bind(this)}componentDidMount(){const{plugin:e}=this.props;if(this.element&&!e.components.ConfigEditor){const e=Object(o.getAngularLoader)(),t='<plugin-component type="datasource-config-ctrl" />';this.component=e.load(this.element,this.scopeProps,t)}}componentDidUpdate(e){const{plugin:t}=this.props;var a;t.components.ConfigEditor||this.props.dataSource===e.dataSource||(this.scopeProps.ctrl.current=Object(s.cloneDeep)(this.props.dataSource),null===(a=this.component)||void 0===a||a.digest())}componentWillUnmount(){this.component&&this.component.destroy()}render(){const{plugin:e,dataSource:t}=this.props;return e?Object(c.jsx)("div",{ref:e=>this.element=e,children:e.components.ConfigEditor&&r.a.createElement(e.components.ConfigEditor,{options:t,onOptionsChange:this.onModelChanged})}):null}}var d,l=a("kDLi"),g=a("Csm0");const{Input:p,Switch:h}=l.LegacyForms;var f=({dataSourceName:e,isDefault:t,onDefaultChange:a,onNameChange:n})=>Object(c.jsx)("div",{className:"gf-form-group","aria-label":"Datasource settings page basic settings",children:Object(c.jsxs)("div",{className:"gf-form-inline",children:[Object(c.jsxs)("div",{className:"gf-form max-width-30",style:{marginRight:"3px"},children:[d||(d=Object(c.jsx)(l.InlineFormLabel,{tooltip:"The name is used when you select the data source in panels. The default data source is preselected in new panels.",children:"Name"})),Object(c.jsx)(p,{className:"gf-form-input max-width-23",type:"text",value:e,placeholder:"Name",onChange:e=>n(e.target.value),required:!0,"aria-label":g.selectors.pages.DataSource.name})]}),Object(c.jsx)(h,{label:"Default",checked:t,onChange:e=>{a(e.target.checked)}})]})}),m=a("ZFWI");var b=({isReadOnly:e,onDelete:t,onSubmit:a,onTest:n})=>Object(c.jsxs)("div",{className:"gf-form-button-row",children:[Object(c.jsx)(l.LinkButton,{variant:"secondary",fill:"outline",href:m.b.appSubUrl+"/datasources",children:"Back"}),Object(c.jsx)(l.Button,{type:"button",variant:"destructive",disabled:e,onClick:t,"aria-label":g.selectors.pages.DataSource.delete,children:"Delete"}),!e&&Object(c.jsx)(l.Button,{type:"submit",variant:"primary",disabled:e,onClick:e=>a(e),"aria-label":g.selectors.pages.DataSource.saveAndTest,children:"Save & test"}),e&&Object(c.jsx)(l.Button,{type:"submit",variant:"primary",onClick:n,children:"Test"})]}),S=a("Xmxp"),j=a("frIo"),v=a("5BCB"),O=a("lzJ5"),y=a("HUMP"),D=a("Obii");var w=e=>{const t=function(e){switch(e){case D.PluginState.alpha:return"Alpha Plugin: This plugin is a work in progress and updates may include breaking changes";case D.PluginState.beta:return"Beta Plugin: There could be bugs and minor breaking changes to this plugin"}return null}(e.state);return t?Object(c.jsx)(l.AlphaNotice,{state:e.state,text:t}):null},x=a("FFN/"),k=a("QL3a"),C=a("mtHS");const P=({dataSource:e})=>{var t;let a="",n="";if(e.readOnly||(null!==(t=e.version)&&void 0!==t?t:0)>2)return null;if(m.a.buildInfo.edition!==k.d.OpenSource)return null;switch(e.type){case"prometheus":a="Prometheus",n="Loki";break;case"loki":a="Loki",n="Prometheus";break;default:return null}return Object(c.jsx)(C.a,{storageKey:"datasources.settings.cloudInfoBox.isDismissed",defaultValue:!1,children:(t,r)=>t?null:Object(c.jsxs)(l.Alert,{title:`Configure your ${a} data source below`,severity:"info",bottomSpacing:4,onRemove:()=>{r(!0)},children:["Or skip the effort and get ",a," (and ",n,") as fully-managed, scalable, and hosted data sources from Grafana Labs with the"," ",Object(c.jsx)("a",{className:"external-link",href:`https://grafana.com/signup/cloud/connect-account?src=grafana-oss&cnt=${e.type}-settings`,target:"_blank",rel:"noreferrer",title:"The free plan includes 10k active metrics and 50gb storage.",children:"free-forever Grafana Cloud plan"}),"."]})})};var M,N,L=a("/MKj"),U=a("zVNn"),I=a("xAj+");function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"DataSourceSettingsPage",(function(){return E}));const A={deleteDataSource:v.b,loadDataSource:v.d,setDataSourceName:x.i,updateDataSource:v.h,setIsDefault:x.m,dataSourceLoaded:x.a,initDataSourceSettings:v.c,testDataSource:v.g,cleanUpAction:U.a},B=Object(L.connect)((function(e,t){const a=t.match.params.uid,n=new URLSearchParams(t.location.search),r=Object(j.a)(e.dataSources,a),{plugin:s,loadError:i,testingStatus:o}=e.dataSourceSettings,c=n.get("page"),u=s?Object(y.c)(Object(y.a)(r,s),c||"settings"):Object(y.b)("settings"),d=Object(O.a)(e.navIndex,c?"datasource-page-"+c:"datasource-settings-"+a,u);return{dataSource:Object(j.a)(e.dataSources,a),dataSourceMeta:Object(j.b)(e.dataSources,r.type),dataSourceId:a,page:c,plugin:s,loadError:i,testingStatus:o,navModel:d}}),A);class E extends n.PureComponent{constructor(...e){super(...e),this.onSubmit=async e=>{e.preventDefault(),await this.props.updateDataSource(T({},this.props.dataSource)),this.testDataSource()},this.onTest=async e=>{e.preventDefault(),this.testDataSource()},this.onDelete=()=>{S.b.publish(new I.ShowConfirmModalEvent({title:"Delete",text:"Are you sure you want to delete this data source?",yesText:"Delete",icon:"trash-alt",onConfirm:()=>{this.confirmDelete()}}))},this.confirmDelete=()=>{this.props.deleteDataSource()},this.onModelChange=e=>{this.props.dataSourceLoaded(e)}}componentDidMount(){const{initDataSourceSettings:e,dataSourceId:t}=this.props;e(t)}componentWillUnmount(){this.props.cleanUpAction({stateSelector:e=>e.dataSourceSettings})}isReadOnly(){return!0===this.props.dataSource.readOnly}renderIsReadOnlyMessage(){return Object(c.jsx)(l.Alert,{"aria-label":g.selectors.pages.DataSource.readOnly,severity:"info",title:"Provisioned data source",children:"This data source was added by config and cannot be modified using the UI. Please contact your server admin to update this data source."})}testDataSource(){const{dataSource:e,testDataSource:t}=this.props;t(e.name)}get hasDataSource(){return this.props.dataSource.id>0}renderLoadError(e){let t=!1,a=e.toString();e.data?e.data.message&&(a=e.data.message):Object(s.isString)(e)&&(t=!0);const n={text:a,subTitle:"Data Source Error",icon:"exclamation-triangle"},r={node:n,main:n};return Object(c.jsx)(i.a,{navModel:r,children:Object(c.jsx)(i.a.Contents,{children:Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"gf-form-button-row",children:[t&&Object(c.jsx)(l.Button,{type:"submit",variant:"destructive",onClick:this.onDelete,children:"Delete"}),M||(M=Object(c.jsx)(l.LinkButton,{variant:"secondary",href:"datasources",fill:"outline",children:"Back"}))]})})})})}renderConfigPageBody(e){const{plugin:t}=this.props;if(!t||!t.configPages)return null;for(const a of t.configPages)if(a.id===e)return Object(c.jsx)(a.body,{plugin:t,query:{}});return Object(c.jsxs)("div",{children:["Page not found: ",e]})}renderAlertDetails(){var e,t,a;const{testingStatus:n}=this.props;return Object(c.jsxs)(c.Fragment,{children:[null==n||null===(e=n.details)||void 0===e?void 0:e.message,null!=n&&null!==(t=n.details)&&void 0!==t&&t.verboseMessage?Object(c.jsx)("details",{style:{whiteSpace:"pre-wrap"},children:null==n||null===(a=n.details)||void 0===a?void 0:a.verboseMessage}):null]})}renderSettings(){const{dataSourceMeta:e,setDataSourceName:t,setIsDefault:a,dataSource:n,plugin:r,testingStatus:s}=this.props;return Object(c.jsxs)("form",{onSubmit:this.onSubmit,children:[this.isReadOnly()&&this.renderIsReadOnlyMessage(),e.state&&Object(c.jsxs)("div",{className:"gf-form",children:[N||(N=Object(c.jsx)("label",{className:"gf-form-label width-10",children:"Plugin state"})),Object(c.jsx)("label",{className:"gf-form-label gf-form-label--transparent",children:Object(c.jsx)(w,{state:e.state})})]}),Object(c.jsx)(P,{dataSource:n}),Object(c.jsx)(f,{dataSourceName:n.name,isDefault:n.isDefault,onDefaultChange:e=>a(e),onNameChange:e=>t(e)}),r&&Object(c.jsx)(u,{plugin:r,dataSource:n,dataSourceMeta:e,onModelChange:this.onModelChange}),(null==s?void 0:s.message)&&Object(c.jsx)("div",{className:"gf-form-group p-t-2",children:Object(c.jsx)(l.Alert,{severity:"error"===s.status?"error":"success",title:s.message,"aria-label":g.selectors.pages.DataSource.alert,children:s.details&&this.renderAlertDetails()})}),Object(c.jsx)(b,{onSubmit:e=>this.onSubmit(e),isReadOnly:this.isReadOnly(),onDelete:this.onDelete,onTest:e=>this.onTest(e)})]})}render(){const{navModel:e,page:t,loadError:a}=this.props;return a?this.renderLoadError(a):Object(c.jsx)(i.a,{navModel:e,children:Object(c.jsx)(i.a.Contents,{isLoading:!this.hasDataSource,children:this.hasDataSource?Object(c.jsx)("div",{children:t?this.renderConfigPageBody(t):this.renderSettings()}):null})})}}t.default=B(E)},frIo:function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"g",(function(){return o})),a.d(t,"f",(function(){return c})),a.d(t,"e",(function(){return u}));const n=e=>{const t=new RegExp(e.searchQuery,"i");return e.dataSources.filter(e=>t.test(e.name)||t.test(e.database)||t.test(e.type))},r=e=>{const t=new RegExp(e.dataSourceTypeSearchQuery,"i");return e.plugins.filter(e=>t.test(e.name))},s=(e,t)=>e.dataSource.uid===t?e.dataSource:{},i=(e,t)=>e.dataSourceMeta.id===t?e.dataSourceMeta:{},o=e=>e.searchQuery,c=e=>e.layoutMode,u=e=>e.dataSourcesCount}}]);
//# sourceMappingURL=DataSourceSettingsPage.c916c34d6a21e5f99f35.js.map