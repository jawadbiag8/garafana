(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"8Zpg":function(e,n,t){"use strict";t.r(n),function(e){t.d(n,"NewOrgPage",(function(){return p}));t("q1tI");var a,r,i,o=t("t8hP"),s=t("ZGyg"),c=t("kDLi"),l=t("ZFWI"),d=t("0cfB"),g=t("/MKj"),h=t("lzJ5"),u=t("nKUr");function b(){return(b=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}const j=async e=>{const n=await Object(o.getBackendSrv)().post("/api/orgs/",e);await Object(o.getBackendSrv)().post("/api/user/using/"+n.orgId),window.location.href=Object(l.c)().appSubUrl+"/org"},p=({navModel:e})=>Object(u.jsx)(s.a,{navModel:e,children:Object(u.jsxs)(s.a.Contents,{children:[a||(a=Object(u.jsx)("h3",{className:"page-sub-heading",children:"New organization"})),r||(r=Object(u.jsxs)("p",{className:"playlist-description",children:["Each organization contains their own dashboards, data sources, and configuration, which cannot be shared shared between organizations. While users might belong to more than one organization, multiple organizations are most frequently used in multi-tenant deployments."," "]})),Object(u.jsx)(c.Form,{onSubmit:j,children:({register:e,errors:n})=>Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(c.Field,{label:"Organization name",invalid:!!n.name,error:n.name&&n.name.message,children:Object(u.jsx)(c.Input,b({placeholder:"Org name"},e("name",{required:"Organization name is required",validate:async e=>await(async e=>{try{await Object(o.getBackendSrv)().get("api/orgs/name/"+encodeURI(e))}catch(e){return 404===e.status?(e.isHandled=!0,!0):"Something went wrong"}return"Organization already exists"})(e)})))}),i||(i=Object(u.jsx)(c.Button,{type:"submit",children:"Create"}))]})})]})});n.default=Object(d.hot)(e)(Object(g.connect)(e=>({navModel:Object(h.a)(e.navIndex,"global-orgs")}))(p))}.call(this,t("3UD+")(e))}}]);
//# sourceMappingURL=NewOrgPage.469fc90b3a949936bbff.js.map