(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{IeNb:function(e,r,t){"use strict";t.r(r),function(e){t.d(r,"UserInvitePage",(function(){return u}));t("q1tI");var n,i,a=t("0cfB"),l=t("/MKj"),o=t("pkzr"),s=t("HJRA"),c=t("lzJ5"),d=t("ZGyg"),j=t("nKUr");const u=({navModel:e})=>Object(j.jsx)(d.a,{navModel:e,children:Object(j.jsxs)(d.a.Contents,{children:[n||(n=Object(j.jsx)("h3",{className:"page-sub-heading",children:"Invite user"})),Object(j.jsxs)("div",{className:"p-b-2",children:["Send invitation or add existing Grafana user to the organization.",Object(j.jsxs)("span",{className:"highlight-word",children:[" ",s.b.user.orgName]})]}),i||(i=Object(j.jsx)(o.a,{}))]})});r.default=Object(a.hot)(e)(Object(l.connect)(e=>({navModel:Object(c.a)(e.navIndex,"users")}))(u))}.call(this,t("3UD+")(e))},pkzr:function(e,r,t){"use strict";t("q1tI");var n,i=t("kDLi"),a=t("ZFWI"),l=t("GQ3c"),o=t("t8hP"),s=t("HJRA"),c=t("Obii"),d=t("nKUr");function j(){return(j=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const u=[{label:"Viewer",value:l.OrgRole.Viewer},{label:"Editor",value:l.OrgRole.Editor},{label:"Admin",value:l.OrgRole.Admin}];r.a=({})=>{const e={name:"",email:"",role:l.OrgRole.Editor,sendEmail:!0};return Object(d.jsx)(i.Form,{defaultValues:e,onSubmit:async e=>{try{await Object(o.getBackendSrv)().post("/api/org/invites",e)}catch(e){s.a.emit(c.AppEvents.alertError,["Failed to send invitation.",e.message])}o.locationService.push("/org/users/")},children:({register:e,control:r,errors:t})=>Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.Field,{invalid:!!t.loginOrEmail,error:t.loginOrEmail?"Email or username is required":void 0,label:"Email or username",children:Object(d.jsx)(i.Input,j({},e("loginOrEmail",{required:!0}),{placeholder:"email@example.com"}))}),Object(d.jsx)(i.Field,{invalid:!!t.name,label:"Name",children:Object(d.jsx)(i.Input,j({},e("name"),{placeholder:"(optional)"}))}),Object(d.jsx)(i.Field,{invalid:!!t.role,label:"Role",children:Object(d.jsx)(i.InputControl,{render:e=>{let{}=e,r=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e.field,["ref"]);return Object(d.jsx)(i.RadioButtonGroup,j({},r,{options:u}))},control:r,name:"role"})}),Object(d.jsx)(i.Field,{label:"Send invite email",children:Object(d.jsx)(i.Switch,j({},e("sendEmail")))}),Object(d.jsxs)(i.HorizontalGroup,{children:[n||(n=Object(d.jsx)(i.Button,{type:"submit",children:"Submit"})),Object(d.jsx)(i.LinkButton,{href:c.locationUtil.assureBaseUrl(Object(a.c)().appSubUrl+"/org/users"),variant:"secondary",children:"Back"})]})]})})}}}]);
//# sourceMappingURL=UserInvitePage.469fc90b3a949936bbff.js.map