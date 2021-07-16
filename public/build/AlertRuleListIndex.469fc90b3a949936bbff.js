(window.webpackJsonp=window.webpackJsonp||[]).push([[13,12],{"4vLh":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"f",(function(){return l})),a.d(t,"a",(function(){return u})),a.d(t,"g",(function(){return d})),a.d(t,"e",(function(){return j})),a.d(t,"d",(function(){return p})),a.d(t,"c",(function(){return g}));var n=a("Obii"),r=a("t8hP"),s=a("HJRA"),c=a("qOGI");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e){return async t=>{t(Object(c.b)());const a=await Object(r.getBackendSrv)().get("/api/alerts",e);t(Object(c.c)(a))}}function l(e,t){return async a=>{await Object(r.getBackendSrv)().post(`/api/alerts/${e}/pause`,t);a(i({state:(r.locationService.getSearchObject().state||"all").toString()}))}}function u(e){return async t=>{try{await Object(r.getBackendSrv)().post("/api/alert-notifications",e),s.a.emit(n.AppEvents.alertSuccess,["Notification created"]),r.locationService.push("/alerting/notifications")}catch(e){s.a.emit(n.AppEvents.alertError,[e.data.error])}}}function d(e){return async t=>{try{await Object(r.getBackendSrv)().put("/api/alert-notifications/"+e.id,e),s.a.emit(n.AppEvents.alertSuccess,["Notification updated"])}catch(e){s.a.emit(n.AppEvents.alertError,[e.data.error])}}}function j(e){return async(t,a)=>{const n=a().notificationChannel.notificationChannel;await Object(r.getBackendSrv)().post("/api/alert-notifications/test",o({id:n.id},e))}}function p(){return async e=>{const t=(await Object(r.getBackendSrv)().get("/api/alert-notifiers")).sort((e,t)=>e.name>t.name?1:-1);e(Object(c.f)(t))}}function g(e){return async t=>{await t(p());const a=await Object(r.getBackendSrv)().get("/api/alert-notifications/"+e);t(Object(c.d)(a))}}},"9f6O":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c}));var n=a("t8hP"),r=a("q1tI"),s=a("Ty5D");function c(){const{search:t}=Object(s.l)();return[Object(r.useMemo)(()=>Object(n.locationSearchToObject)(t||""),[t]),Object(r.useCallback)((t,a)=>e(()=>n.locationService.partial(t,a)),[])]}}).call(this,a("URgk").setImmediate)},JRIL:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"AlertRuleListUnconnected",(function(){return S}));var n,r,s,c=a("q1tI"),o=a("0cfB"),i=a("/MKj"),l=a("ZGyg"),u=a("YAXX"),d=a("Xmxp"),j=a("lzJ5"),p=a("4vLh"),g=a("lPMX"),b=a("EKT6"),h=a("t8hP"),m=a("qOGI"),f=a("kDLi"),O=a("xAj+"),v=a("qo+S"),x=a("nKUr");const y={getAlertRulesAsync:p.b,setSearchQuery:m.g,togglePauseAlertRule:p.f},w=Object(i.connect)((function(e){return{navModel:Object(j.a)(e.navIndex,"alert-list"),alertRules:Object(g.a)(e),search:Object(g.b)(e.alertRules),isLoading:e.alertRules.isLoading}}),y);class S extends c.PureComponent{constructor(...e){super(...e),this.stateFilters=[{label:"All",value:"all"},{label:"OK",value:"ok"},{label:"Not OK",value:"not_ok"},{label:"Alerting",value:"alerting"},{label:"No data",value:"no_data"},{label:"Paused",value:"paused"},{label:"Pending",value:"pending"}],this.onStateFilterChanged=e=>{h.locationService.partial({state:e.value})},this.onOpenHowTo=()=>{d.b.publish(new O.ShowModalReactEvent({component:v.a}))},this.onSearchQueryChange=e=>{this.props.setSearchQuery(e)},this.onTogglePause=e=>{this.props.togglePauseAlertRule(e.id,{paused:"paused"!==e.state})},this.alertStateFilterOption=({text:e,value:t})=>Object(x.jsx)("option",{value:t,children:e},t)}componentDidMount(){this.fetchRules()}componentDidUpdate(e){e.queryParams.state!==this.props.queryParams.state&&this.fetchRules()}async fetchRules(){await this.props.getAlertRulesAsync({state:this.getStateFilter()})}getStateFilter(){var e;return null!==(e=this.props.queryParams.state)&&void 0!==e?e:"all"}render(){const{navModel:e,alertRules:t,search:a,isLoading:c}=this.props;return Object(x.jsx)(l.a,{navModel:e,children:Object(x.jsxs)(l.a.Contents,{isLoading:c,children:[Object(x.jsxs)("div",{className:"page-action-bar",children:[Object(x.jsx)("div",{className:"gf-form gf-form--grow",children:Object(x.jsx)(b.a,{placeholder:"Search alerts",value:a,onChange:this.onSearchQueryChange})}),Object(x.jsxs)("div",{className:"gf-form",children:[n||(n=Object(x.jsx)("label",{className:"gf-form-label",children:"States"})),Object(x.jsx)("div",{className:"width-13",children:Object(x.jsx)(f.Select,{options:this.stateFilters,onChange:this.onStateFilterChanged,value:this.getStateFilter()})})]}),r||(r=Object(x.jsx)("div",{className:"page-action-bar__spacer"})),h.config.featureToggles.ngalert&&(s||(s=Object(x.jsx)(f.LinkButton,{variant:"primary",href:"alerting/ng/new",children:"Add NG Alert"}))),Object(x.jsx)(f.Button,{variant:"secondary",onClick:this.onOpenHowTo,children:"How to add an alert"})]}),Object(x.jsx)(f.VerticalGroup,{spacing:"none",children:t.map(e=>Object(x.jsx)(u.a,{rule:e,search:a,onTogglePause:()=>this.onTogglePause(e)},e.id))})]})})}}t.default=Object(o.hot)(e)(w(S))}.call(this,a("3UD+")(e))},Kwdr:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("kDLi"),r=(a("q1tI"),a("vF1F")),s=a("55Ip"),c=a("nKUr");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const i=e=>{var t;let{tooltip:a,icon:i,to:u,target:d,onClick:j,className:p,tooltipPlacement:g="top"}=e,b=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["tooltip","icon","to","target","onClick","className","tooltipPlacement"]);const h=Object(c.jsx)(n.Icon,o({className:Object(r.cx)(Object(n.useStyles)(l),p),onClick:j,name:i},b));return Object(c.jsx)(n.Tooltip,{content:a,placement:g,children:u?t||(t=Object(c.jsx)(s.Link,{to:u,target:d,children:h})):h})},l=()=>r.css`
  cursor: pointer;
`},LwrX:function(e,t,a){"use strict";a.r(t);var n,r,s=a("t8hP"),c=a("Obii"),o=a("kDLi"),i=a("q1tI"),l=a.n(i),u=a("/MKj"),d=a("sbt+"),j=a("QQVG"),p=a("umNM"),g=a("nKUr");const b=()=>p.a.hasEditPermissionInFolders||p.a.isEditor?n||(n=Object(g.jsx)(j.a,{title:"You haven`t created any alert rules yet",buttonIcon:"bell",buttonLink:"alerting/new",buttonTitle:"New alert rule",proTip:"you can also create alert rules from existing panels and queries.",proTipLink:"https://grafana.com/docs/",proTipLinkTitle:"Learn more",proTipTarget:"_blank"})):r||(r=Object(g.jsx)(o.CallToActionCard,{message:"No rules exist yet.",callToActionElement:Object(g.jsx)("div",{})}));var h=a("w+lj"),m=a("Jzaf"),f=a("IpGs"),O=a("8qpb"),v=a("9f6O");function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const y=e=>(t,a)=>{const n=a.groups.reduce(w(e),[]);return n.length&&t.push(x({},a,{groups:n})),t},w=e=>(t,a)=>{const n=a.rules.filter(t=>{if(e.dataSource&&Object(f.k)(t.rulerRule)&&!S(t.rulerRule,e))return!1;if(e.queryString){var a;const n=e.queryString.toLocaleLowerCase(),r=null===(a=t.name)||void 0===a?void 0:a.toLocaleLowerCase().includes(n),s=Object.entries(t.labels||{}).some(([e,t])=>e.toLocaleLowerCase().includes(n)||t.toLocaleLowerCase().includes(n));if(!r&&!s)return!1}return!!(!e.alertState||t.promRule&&Object(f.h)(t.promRule)&&t.promRule.state===e.alertState)});return n.length&&t.push(x({},a,{rules:n})),t},S=(e,t)=>!t.dataSource||!!e.grafana_alert.data.find(e=>{if(!e.datasourceUid)return!1;const a=Object(s.getDataSourceSrv)().getInstanceSettings(e.datasourceUid);return(null==a?void 0:a.name)===t.dataSource});var I,k,C,T,N,R=a("4Yfp"),$=a("vF1F"),L=a("O6qV"),P=a("d6cIB"),F=a("LvDl"),E=a("rhRp");const M=[{icon:"folder",label:"Groups",value:"group"},{icon:"heart-rate",label:"State",value:"state"}],A=e=>({container:$.css`
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid ${e.colors.border1};
      padding-bottom: ${e.spacing.sm};

      & > div {
        margin-bottom: ${e.spacing.sm};
      }
    `,inputWidth:$.css`
      width: 340px;
      flex-grow: 0;
    `,flexRow:$.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
    `,spaceBetween:$.css`
      justify-content: space-between;
    `,rowChild:$.css`
      margin-right: ${e.spacing.sm};
      margin-top: ${e.spacing.sm};
    `,clearButton:$.css`
      align-self: flex-end;
    `});var _=()=>{const[e,t]=Object(v.a)(),[a,n]=Object(i.useState)(Math.floor(100*Math.random())),r="dataSource-"+a,c="queryString-"+a,{dataSource:l,alertState:u,queryString:d}=Object(O.c)(e),j=Object(o.useStyles)(A),p=Object.entries(E.c).map(([e,t])=>({label:Object(f.b)(t),value:t})),b=Object(F.debounce)(e=>{const a=e.target;t({queryString:a.value||null})},600),h=I||(I=Object(g.jsx)(o.Icon,{name:"search"}));return Object(g.jsxs)("div",{className:j.container,children:[Object(g.jsxs)("div",{className:j.inputWidth,children:[k||(k=Object(g.jsx)(o.Label,{children:"Select data source"})),Object(g.jsx)(s.DataSourcePicker,{alerting:!0,noDefault:!0,current:l,onChange:e=>{t({dataSource:e.name})}},r)]}),Object(g.jsxs)("div",{className:Object($.cx)(j.flexRow,j.spaceBetween),children:[Object(g.jsxs)("div",{className:j.flexRow,children:[Object(g.jsxs)("div",{className:j.rowChild,children:[C||(C=Object(g.jsx)(o.Label,{children:"Search by name or label"})),Object(g.jsx)(o.Input,{className:j.inputWidth,prefix:h,onChange:b,defaultValue:d,placeholder:"Search"},c)]}),Object(g.jsxs)("div",{className:j.rowChild,children:[T||(T=Object(g.jsx)(o.Label,{children:"State"})),Object(g.jsx)(o.RadioButtonGroup,{options:p,value:u,onChange:e=>{t({alertState:e})}})]}),Object(g.jsxs)("div",{className:j.rowChild,children:[N||(N=Object(g.jsx)(o.Label,{children:"View as"})),Object(g.jsx)(o.RadioButtonGroup,{options:M,value:e.view||"group",onChange:e=>{t({view:e})}})]})]}),(l||u||d)&&Object(g.jsx)("div",{className:j.flexRow,children:Object(g.jsx)(o.Button,{fullWidth:!1,icon:"times",variant:"secondary",onClick:()=>{t({alertState:null,queryString:null,dataSource:null}),n(a+1)},children:"Clear filters"})})]})]})},q=a("te+q"),B=a("RLby"),U=a("Kwdr"),G=a("xsuF"),D=a("PbtU"),K=a("P8sI"),z=a("dhqo"),H=a.n(z);const X=({children:e,status:t})=>{const a=Object(o.useStyles2)(J);return Object(g.jsx)("span",{className:a[t],children:e||t})},J=e=>({[E.c.Inactive]:$.css`
    color: ${e.colors.success.text};
  `,[E.c.Pending]:$.css`
    color: ${e.colors.warning.text};
  `,[E.c.Firing]:$.css`
    color: ${e.colors.error.text};
  `,neutral:$.css`
    color: ${e.colors.text.secondary};
  `});var Q,V;function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const Y={total:0,recording:0,[E.c.Firing]:0,[E.c.Pending]:0,[E.c.Inactive]:0,error:0},Z=({showInactive:e,showRecording:t,group:a,namespaces:n})=>{const r=Object(i.useMemo)(()=>{const e=W({},Y),t=t=>{var a,n;t.promRule&&Object(f.h)(t.promRule)&&(e[t.promRule.state]+=1),"err"!==(null===(a=t.promRule)||void 0===a?void 0:a.health)&&"error"!==(null===(n=t.promRule)||void 0===n?void 0:n.health)||(e.error+=1),(t.promRule&&Object(f.l)(t.promRule)||t.rulerRule&&Object(f.m)(t.rulerRule))&&(e.recording+=1),e.total+=1};return a&&a.rules.forEach(t),n&&n.forEach(e=>e.groups.forEach(e=>e.rules.forEach(t))),e},[a,n]),s=[];return r[E.c.Firing]&&s.push(Object(g.jsxs)(X,{status:E.c.Firing,children:[r[E.c.Firing]," firing"]},"firing")),r.error&&s.push(Object(g.jsxs)(X,{status:E.c.Firing,children:[r.error," errors"]},"errors")),r[E.c.Pending]&&s.push(Object(g.jsxs)(X,{status:E.c.Pending,children:[r[E.c.Pending]," pending"]},"pending")),e&&r[E.c.Inactive]&&s.push(Object(g.jsxs)(X,{status:"neutral",children:[r[E.c.Inactive]," normal"]},"inactive")),t&&r.recording&&s.push(Object(g.jsxs)(X,{status:"neutral",children:[r.recording," recording"]},"recording")),Object(g.jsxs)("div",{children:[Object(g.jsxs)("span",{children:[r.total," ",H()("rule",r.total)]}),!!s.length&&Object(g.jsxs)(g.Fragment,{children:[Q||(Q=Object(g.jsx)("span",{children:": "})),s.reduce((e,t,a)=>e.length?[e,Object(g.jsx)(i.Fragment,{children:V||(V=Object(g.jsx)("span",{children:", "}))},a),t]:[t],[])]})]})};var ee;const te=l.a.memo(({group:e,namespace:t})=>{var a;const{rulesSource:n}=t,r=Object(o.useStyles2)(ae),[s,c]=Object(i.useState)(!0),l=Object(G.a)(),u=null===(a=e.rules[0])||void 0===a?void 0:a.rulerRule,d=u&&Object(f.k)(u)&&u.grafana_alert.namespace_uid||void 0,{folder:j}=Object(K.a)(d),p=[];if(n===m.b)if(d){const e=`/dashboards/f/${d}/${D.a.slugifyForUrl(t.name)}`;null!=j&&j.canSave&&p.push(Object(g.jsx)(U.a,{icon:"pen",tooltip:"edit",to:e+"/settings",target:"__blank"},"edit")),null!=j&&j.canAdmin&&p.push(Object(g.jsx)(U.a,{icon:"lock",tooltip:"manage permissions",to:e+"/permissions",target:"__blank"},"manage-perms"))}else l(n)&&p.push(ee||(ee=Object(g.jsx)(U.a,{icon:"pen",tooltip:"edit"},"edit")));const b=Object(m.j)(n)?`${t.name} > ${e.name}`:t.name;return Object(g.jsxs)("div",{className:r.wrapper,"data-testid":"rule-group",children:[Object(g.jsxs)("div",{className:r.header,"data-testid":"rule-group-header",children:[Object(g.jsx)(q.a,{className:r.collapseToggle,isCollapsed:s,onToggle:c,"data-testid":"group-collapse-toggle"}),Object(g.jsx)(o.Icon,{name:s?"folder-open":"folder"}),Object(m.j)(n)&&Object(g.jsx)(o.Tooltip,{content:n.name,placement:"top",children:Object(g.jsx)("img",{className:r.dataSourceIcon,src:n.meta.info.logos.small})}),Object(g.jsx)("h6",{className:r.heading,children:b}),Object(g.jsx)("div",{className:r.spacer}),Object(g.jsx)("div",{className:r.headerStats,children:Object(g.jsx)(Z,{showInactive:!1,group:e})}),!!p.length&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:r.actionsSeparator,children:"|"}),Object(g.jsx)("div",{className:r.actionIcons,children:p})]})]}),!s&&Object(g.jsx)(B.a,{showSummaryColumn:!0,className:r.rulesTable,showGuidelines:!0,rules:e.rules})]})});te.displayName="RulesGroup";const ae=e=>({wrapper:$.css`
    & + & {
      margin-top: ${e.spacing(2)};
    }
  `,header:$.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${e.spacing(1)} ${e.spacing(1)} ${e.spacing(1)} 0;
    background-color: ${e.colors.background.secondary};
    flex-wrap: wrap;
  `,headerStats:$.css`
    span {
      vertical-align: middle;
    }

    ${e.breakpoints.down("sm")} {
      order: 2;
      width: 100%;
      padding-left: ${e.spacing(1)};
    }
  `,heading:$.css`
    margin-left: ${e.spacing(1)};
    margin-bottom: 0;
  `,spacer:$.css`
    flex: 1;
  `,collapseToggle:$.css`
    background: none;
    border: none;
    margin-top: -${e.spacing(1)};
    margin-bottom: -${e.spacing(1)};

    svg {
      margin-bottom: 0;
    }
  `,dataSourceIcon:$.css`
    width: ${e.spacing(2)};
    height: ${e.spacing(2)};
    margin-left: ${e.spacing(2)};
  `,dataSourceOrigin:$.css`
    margin-right: 1em;
    color: ${e.colors.text.disabled};
  `,actionsSeparator:$.css`
    margin: 0 ${e.spacing(2)};
  `,actionIcons:$.css`
    & > * + * {
      margin-left: ${e.spacing(1)};
    }
  `,rulesTable:$.css`
    margin-top: ${e.spacing(3)};
  `});var ne,re,se,ce;const oe=({namespaces:e})=>{const t=Object(o.useStyles)(ie),a=Object(h.a)(e=>e.promRules),n=Object(i.useMemo)(m.g,[]),r=Object(i.useMemo)(()=>n.filter(e=>{var t;return null===(t=a[e.name])||void 0===t?void 0:t.loading}),[a,n]);return Object(g.jsxs)("section",{className:t.wrapper,children:[Object(g.jsxs)("div",{className:t.sectionHeader,children:[ne||(ne=Object(g.jsx)("h5",{children:"Cortex / Loki"})),r.length?Object(g.jsx)(o.LoadingPlaceholder,{className:t.loader,text:`Loading rules from ${r.length} ${H()("source",r.length)}`}):re||(re=Object(g.jsx)("div",{}))]}),e.map(e=>{const{groups:t,rulesSource:a}=e;return t.map(t=>Object(g.jsx)(te,{group:t,namespace:e},`${Object(m.i)(a)}-${name}-${t.name}`))}),0===(null==e?void 0:e.length)&&!!n.length&&(se||(se=Object(g.jsx)("p",{children:"No rules found."}))),!n.length&&(ce||(ce=Object(g.jsx)("p",{children:"There are no Prometheus or Loki datas sources configured."})))]})},ie=e=>({loader:$.css`
    margin-bottom: 0;
  `,sectionHeader:$.css`
    display: flex;
    justify-content: space-between;
  `,wrapper:$.css`
    margin-bottom: ${e.spacing.xl};
  `});var le,ue,de,je=a("fXZ9");const pe=({namespaces:e})=>{const t=Object(o.useStyles)(ge),{loading:a}=Object(h.a)(e=>e.promRules[m.b]||je.c);return Object(g.jsxs)("section",{className:t.wrapper,children:[Object(g.jsxs)("div",{className:t.sectionHeader,children:[le||(le=Object(g.jsx)("h5",{children:"Grafana"})),a?Object(g.jsx)(o.LoadingPlaceholder,{className:t.loader,text:"Loading..."}):ue||(ue=Object(g.jsx)("div",{}))]}),null==e?void 0:e.map(e=>e.groups.map(t=>Object(g.jsx)(te,{group:t,namespace:e},`${e.name}-${t.name}`))),0===(null==e?void 0:e.length)&&(de||(de=Object(g.jsx)("p",{children:"No rules found."})))]})},ge=e=>({loader:$.css`
    margin-bottom: 0;
  `,sectionHeader:$.css`
    display: flex;
    justify-content: space-between;
  `,wrapper:$.css`
    margin-bottom: ${e.spacing.xl};
  `});function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const he=({rules:e,state:t,defaultCollapsed:a=!1})=>{const[n,r]=Object(i.useState)(a),s=Object(o.useStyles2)(me);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("h4",{className:s.header,children:[Object(g.jsx)(q.a,{className:s.collapseToggle,size:"xxl",isCollapsed:n,onToggle:()=>r(!n)}),Object(f.b)(t)," (",e.length,")"]}),!n&&Object(g.jsx)(B.a,{className:s.rulesTable,rules:e,showGroupColumn:!0})]})},me=e=>({collapseToggle:$.css`
    vertical-align: middle;
  `,header:$.css`
    margin-top: ${e.spacing(2)};
  `,rulesTable:$.css`
    margin-top: ${e.spacing(3)};
  `});var fe,Oe,ve,xe=a("Ty5D");const ye={groups:({namespaces:e})=>{const[t,a]=Object(i.useMemo)(()=>{const t=e.map(e=>be({},e,{groups:e.groups.sort((e,t)=>e.name.localeCompare(t.name))})).sort((e,t)=>e.name.localeCompare(t.name));return[t.filter(e=>Object(m.k)(e.rulesSource)),t.filter(e=>Object(m.j)(e.rulesSource))]},[e]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(pe,{namespaces:t}),Object(g.jsx)(oe,{namespaces:a})]})},state:({namespaces:e})=>{const t=Object(O.c)(Object(v.a)()[0]),a=Object(i.useMemo)(()=>{const t={[E.c.Firing]:[],[E.c.Inactive]:[],[E.c.Pending]:[]};return e.forEach(e=>e.groups.forEach(e=>e.rules.forEach(e=>{e.promRule&&Object(f.h)(e.promRule)&&t[e.promRule.state].push(e)}))),Object.values(t).forEach(e=>e.sort((e,t)=>e.name.localeCompare(t.name))),t},[e]);return Object(g.jsxs)(g.Fragment,{children:[(!t.alertState||t.alertState===E.c.Firing)&&Object(g.jsx)(he,{state:E.c.Firing,rules:a[E.c.Firing]}),(!t.alertState||t.alertState===E.c.Pending)&&Object(g.jsx)(he,{state:E.c.Pending,rules:a[E.c.Pending]}),(!t.alertState||t.alertState===E.c.Inactive)&&Object(g.jsx)(he,{defaultCollapsed:t.alertState!==E.c.Inactive,state:E.c.Inactive,rules:a[E.c.Inactive]})]})}},we=Object(o.withErrorBoundary)(()=>{var e,t;const a=Object(u.useDispatch)(),n=Object(o.useStyles)(Se),r=Object(i.useMemo)(m.d,[]),s=Object(xe.l)(),[l]=Object(v.a)(),j=ye[l.view]?l.view:"groups",x=ye[j];Object(i.useEffect)(()=>{a(Object(R.g)());const e=setInterval(()=>a(Object(R.g)()),P.e);return()=>{clearInterval(e)}},[a]);const w=Object(h.a)(e=>e.promRules),S=Object(h.a)(e=>e.rulerRules),I=r.some(e=>{var t,a;return(null===(t=w[e])||void 0===t?void 0:t.dispatched)||(null===(a=S[e])||void 0===a?void 0:a.dispatched)}),k=r.some(e=>{var t,a;return(null===(t=w[e])||void 0===t?void 0:t.loading)||(null===(a=S[e])||void 0===a?void 0:a.loading)}),C=r.some(e=>{var t,a,n,r,s;return(null===(t=w[e])||void 0===t||null===(a=t.result)||void 0===a?void 0:a.length)&&!(null!==(n=w[e])&&void 0!==n&&n.error)||Object.keys((null===(r=S[e])||void 0===r?void 0:r.result)||{}).length&&!(null!==(s=S[e])&&void 0!==s&&s.error)}),[T,N]=Object(i.useMemo)(()=>[w,S].map(e=>Object(m.g)().reduce((t,a)=>{var n;const r=null===(n=e[a.name])||void 0===n?void 0:n.error;return e[a.name]&&r&&!Object(f.n)(e[a.name])?[...t,{dataSource:a,error:r}]:t},[])),[w,S]),$=null===(e=w[m.b])||void 0===e?void 0:e.error,F=null===(t=S[m.b])||void 0===t?void 0:t.error,E=I&&!k&&!C,M=(e=>{const[t]=Object(v.a)(),a=Object(O.c)(t);return Object(i.useMemo)(()=>{if(!a.queryString&&!a.dataSource&&!a.alertState)return e;return e.filter(({rulesSource:e})=>!a.dataSource||!Object(m.j)(e)||e.name===a.dataSource).reduce(y(a),[])},[e,a])})(Object(L.a)());return Object(g.jsxs)(d.a,{pageId:"alert-list",isLoading:k&&!C,children:[(T.length||N.length||$)&&Object(g.jsxs)(o.Alert,{"data-testid":"cloud-rulessource-errors",title:"Errors loading rules",severity:"error",children:[$&&Object(g.jsxs)("div",{children:["Failed to load Grafana rules state: ",$.message||"Unknown error."]}),F&&Object(g.jsxs)("div",{children:["Failed to load Grafana rules config: ",F.message||"Unknown error."]}),T.map(({dataSource:e,error:t})=>Object(g.jsxs)("div",{children:["Failed to load rules state from ",Object(g.jsx)("a",{href:"datasources/edit/"+e.uid,children:e.name}),":"," ",t.message||"Unknown error."]},e.name)),N.map(({dataSource:e,error:t})=>Object(g.jsxs)("div",{children:["Failed to load rules config from ",Object(g.jsx)("a",{href:"datasources/edit/${dataSource.uid}",children:e.name}),":"," ",t.message||"Unknown error."]},e.name))]}),!E&&Object(g.jsxs)(g.Fragment,{children:[fe||(fe=Object(g.jsx)(_,{})),Object(g.jsx)("div",{className:n.break}),Object(g.jsxs)("div",{className:n.buttonsContainer,children:[Object(g.jsx)(Z,{showInactive:!0,showRecording:!0,namespaces:M}),Oe||(Oe=Object(g.jsx)("div",{})),(p.a.hasEditPermissionInFolders||p.a.isEditor)&&Object(g.jsx)(o.LinkButton,{href:c.urlUtil.renderUrl("alerting/new",{returnTo:s.pathname+s.search}),icon:"plus",children:"New alert rule"})]})]}),E&&(ve||(ve=Object(g.jsx)(b,{}))),C&&Object(g.jsx)(x,{namespaces:M})]})},{style:"page"}),Se=e=>({break:$.css`
    width: 100%;
    height: 0;
    margin-bottom: ${e.spacing.md};
    border-bottom: solid 1px ${e.colors.border2};
  `,iconError:$.css`
    color: ${e.palette.red};
    margin-right: ${e.spacing.md};
  `,buttonsContainer:$.css`
    margin-bottom: ${e.spacing.md};
    display: flex;
    justify-content: space-between;
  `});var Ie=a("JRIL");t.default=s.config.featureToggles.ngalert?we:Ie.default},URgk:function(e,t,a){(function(e){var n=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function s(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new s(r.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new s(r.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},a("YBdB"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,a("yLpj"))},YAXX:function(e,t,a){"use strict";var n=a("q1tI"),r=a("WG1l"),s=a.n(r),c=a("kDLi"),o=a("nKUr");t.a=({rule:e,search:t,onTogglePause:a})=>{const r=`${e.url}?editPanel=${e.panelId}&tab=alert`,i=Object(n.useCallback)(e=>Object(o.jsx)(s.a,{highlightClassName:"highlight-search-match",textToHighlight:e,searchWords:[t]},e),[t]);return Object(o.jsxs)(c.Card,{heading:Object(o.jsx)("a",{href:r,children:i(e.name)}),children:[Object(o.jsx)(c.Card.Figure,{children:Object(o.jsx)(c.Icon,{size:"xl",name:e.stateIcon,className:"alert-rule-item__icon "+e.stateClass})}),Object(o.jsxs)(c.Card.Meta,{children:[Object(o.jsxs)("span",{children:[Object(o.jsxs)("span",{className:""+e.stateClass,children:[i(e.stateText)," "]},"text"),"for ",e.stateAge]},"state"),e.info?i(e.info):null]}),Object(o.jsxs)(c.Card.Actions,{children:[Object(o.jsx)(c.Button,{variant:"secondary",icon:"paused"===e.state?"play":"pause",onClick:a,children:"paused"===e.state?"Resume":"Pause"},"play"),Object(o.jsx)(c.LinkButton,{variant:"secondary",href:r,icon:"cog",children:"Edit alert"},"edit")]})]})}},YBdB:function(e,t,a){(function(e,t){!function(e,a){"use strict";if(!e.setImmediate){var n,r,s,c,o,i=1,l={},u=!1,d=e.document,j=Object.getPrototypeOf&&Object.getPrototypeOf(e);j=j&&j.setTimeout?j:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick((function(){g(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,a=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=a,t}}()?e.MessageChannel?((s=new MessageChannel).port1.onmessage=function(e){g(e.data)},n=function(e){s.port2.postMessage(e)}):d&&"onreadystatechange"in d.createElement("script")?(r=d.documentElement,n=function(e){var t=d.createElement("script");t.onreadystatechange=function(){g(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):n=function(e){setTimeout(g,0,e)}:(c="setImmediate$"+Math.random()+"$",o=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(c)&&g(+t.data.slice(c.length))},e.addEventListener?e.addEventListener("message",o,!1):e.attachEvent("onmessage",o),n=function(t){e.postMessage(c+t,"*")}),j.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),a=0;a<t.length;a++)t[a]=arguments[a+1];var r={callback:e,args:t};return l[i]=r,n(i),i++},j.clearImmediate=p}function p(e){delete l[e]}function g(e){if(u)setTimeout(g,0,e);else{var t=l[e];if(t){u=!0;try{!function(e){var t=e.callback,a=e.args;switch(a.length){case 0:t();break;case 1:t(a[0]);break;case 2:t(a[0],a[1]);break;case 3:t(a[0],a[1],a[2]);break;default:t.apply(void 0,a)}}(t)}finally{p(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,a("yLpj"),a("8oxB"))},lPMX:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));const n=e=>e.searchQuery,r=e=>{const t=new RegExp(e.alertRules.searchQuery,"i");return e.alertRules.items.filter(e=>t.test(e.name)||t.test(e.stateText)||t.test(e.info))}},"qo+S":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n,r=a("kDLi"),s=(a("q1tI"),a("nKUr"));function c({onDismiss:e}){return Object(s.jsx)(r.Modal,{title:"Adding an Alert",isOpen:!0,onDismiss:e,onClickBackdrop:e,children:n||(n=Object(s.jsxs)(r.VerticalGroup,{spacing:"sm",children:[Object(s.jsx)("img",{src:"public/img/alert_howto_new.png",alt:"link to how to alert image"}),Object(s.jsx)("p",{children:"Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."}),Object(s.jsx)("p",{children:"Remember to save the dashboard to persist your alert rule changes."})]}))})}},"sbt+":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("q1tI");var n=a("ZGyg"),r=a("lzJ5"),s=a("/MKj"),c=a("nKUr");const o=({children:e,pageId:t,isLoading:a})=>{const o=Object(r.a)(Object(s.useSelector)(e=>e.navIndex),t);return Object(c.jsx)(n.a,{navModel:o,children:Object(c.jsx)(n.a.Contents,{isLoading:a,children:e})})}},"te+q":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("q1tI");var n=a("vF1F"),r=a("kDLi"),s=a("nKUr");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const o=e=>{let{isCollapsed:t,onToggle:a,className:o,size:l="xl"}=e,u=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["isCollapsed","onToggle","className","size"]);const d=Object(r.useStyles)(i);return Object(s.jsx)("button",c({className:Object(n.cx)(d.expandButton,o),onClick:()=>a(!t)},u,{children:Object(s.jsx)(r.Icon,{size:l,name:t?"angle-right":"angle-down"})}))},i=()=>({expandButton:n.css`
    background: none;
    border: none;

    outline: none !important;

    svg {
      margin-bottom: 0;
    }
  `})}}]);
//# sourceMappingURL=AlertRuleListIndex.469fc90b3a949936bbff.js.map