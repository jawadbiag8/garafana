(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"A+wR":function(t,e,s){"use strict";s.r(e);var a,i=s("Obii"),n=s("kDLi"),r=(s("q1tI"),s("nKUr"));var o=s("t8hP"),c=s("F/XL");class u extends i.DataSourceApi{constructor(t){super(t),this.instanceSettings=t}query(){return Object(c.a)({data:[]})}_request(t){const e={headers:{},method:"GET",url:this.instanceSettings.url+t};return(this.instanceSettings.basicAuth||this.instanceSettings.withCredentials)&&(this.instanceSettings.withCredentials=!0),this.instanceSettings.basicAuth&&(e.headers.Authorization=this.instanceSettings.basicAuth),Object(o.getBackendSrv)().fetch(e).toPromise()}async testDatasource(){var t;let e,s;try{var a;if(e=await this._request("/api/v2/status"),e&&200===(null===(a=e)||void 0===a?void 0:a.status))return{status:"error",message:"Only Cortex alert manager implementation is supported. A URL to cortex instance should be provided."}}catch(t){}try{s=await this._request("/alertmanager/api/v2/status")}catch(t){}return 200===(null===(t=s)||void 0===t?void 0:t.status)?{status:"success",message:"Health check passed."}:{status:"error",message:"Health check failed."}}}s.d(e,"plugin",(function(){return h}));const h=new i.DataSourcePlugin(u).setConfigEditor(({options:t,onOptionsChange:e})=>Object(r.jsxs)(r.Fragment,{children:[a||(a=Object(r.jsx)(n.Alert,{severity:"info",title:"Only Cortex alertmanager is supported",children:"Note that only Cortex implementation of alert manager is supported at this time."})),Object(r.jsx)(n.DataSourceHttpSettings,{defaultUrl:"",dataSourceConfig:t,showAccessOptions:!0,onChange:e})]}))}}]);
//# sourceMappingURL=alertmanagerPlugin.c916c34d6a21e5f99f35.js.map