(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{ATz4:function(e,t,a){"use strict";a.r(t),a.d(t,"PlaylistNewPage",(function(){return j}));a("q1tI");var n=a("/MKj"),l=a("t8hP"),s=a("kDLi"),i=a("ZGyg"),r=a("lzJ5"),c=a("kTkl"),o=a("batp"),d=a("FqDL"),u=a("uvYg"),b=a("nKUr");const j=({navModel:e})=>{const t=Object(s.useStyles2)(u.a),{playlist:a,loading:n}=Object(d.a)();return Object(b.jsx)(i.a,{navModel:e,children:Object(b.jsxs)(i.a.Contents,{isLoading:n,children:[Object(b.jsx)("h3",{className:t.subHeading,children:"New Playlist"}),Object(b.jsx)("p",{className:t.description,children:"A playlist rotates through a pre-selected list of dashboards. A playlist can be a great way to build situational awareness, or just show off your metrics to your team or visitors."}),Object(b.jsx)(c.a,{onSubmit:async e=>{await Object(o.a)(e),l.locationService.push("/playlists")},playlist:a})]})})};t.default=Object(n.connect)(e=>({navModel:Object(r.a)(e.navIndex,"playlists")}))(j)},FqDL:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),l=a("batp");function s(e){const[t,a]=Object(n.useState)({items:[],interval:"5m",name:""}),[s,i]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{(async()=>{if(!e)return void i(!1);const t=await Object(l.b)(e);a(t),i(!1)})()},[e]),{playlist:t,loading:s}}},NluS:function(e,t,a){"use strict";function n(e){return"function"==typeof e?e():e}function l(){var e={};return e.promise=new Promise((function(t,a){e.resolve=t,e.reject=a})),e}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=void 0,i=void 0,r=void 0,c=[];return function(){var d=n(t),u=(new Date).getTime(),b=!s||u-s>d;s=u;for(var j=arguments.length,p=Array(j),m=0;m<j;m++)p[m]=arguments[m];if(b&&a.leading)return a.accumulate?Promise.resolve(e.call(this,[p])).then((function(e){return e[0]})):Promise.resolve(e.call.apply(e,[this].concat(p)));if(i?clearTimeout(r):i=l(),c.push(p),r=setTimeout(o.bind(this),d),a.accumulate){var v=c.length-1;return i.promise.then((function(e){return e[v]}))}return i.promise};function o(){var t=i;clearTimeout(r),Promise.resolve(a.accumulate?e.call(this,c):e.apply(this,c[c.length-1])).then(t.resolve,t.reject),c=[],i=null}}},batp:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return o}));var n=a("t8hP"),l=a("iODs"),s=a("3SGO"),i=a("UvM7");async function r(e){await d(async()=>await Object(n.getBackendSrv)().post("/api/playlists",e))}async function c(e,t){await d(async()=>await Object(n.getBackendSrv)().put("/api/playlists/"+e,t))}async function o(e){return await Object(n.getBackendSrv)().get("/api/playlists/"+e)}async function d(e){try{await e(),Object(l.a)(Object(s.b)(Object(i.b)("Playlist saved")))}catch(e){Object(l.a)(Object(s.b)(Object(i.a)("Unable to save playlist",e)))}}},kTkl:function(e,t,a){"use strict";var n=a("q1tI"),l=a("t8hP"),s=a("kDLi"),i=a("Csm0"),r=a("NluS"),c=a.n(r),o=a("NXk7"),d=a("nKUr");const u=(e="")=>o.b.search({type:"dash-db",query:e}).then(e=>e.map(e=>{var t;return{id:e.id,uid:e.uid,value:e.id,label:`${null!==(t=null==e?void 0:e.folderTitle)&&void 0!==t?t:"General"}/${e.title}`}})),b=({onChange:e,value:t,width:a,isClearable:n=!1,invalid:l,disabled:i})=>{const r=c()(u,300);return Object(d.jsx)(s.AsyncSelect,{width:a,isClearable:n,defaultOptions:!0,loadOptions:r,onChange:e,placeholder:"Select dashboard",noOptionsMessage:"No dashboards found",value:t,invalid:l,disabled:i})};var j=a("Z7m5"),p=a("mQDI");var m=a("vF1F"),v=a("rCnR");const h=({item:e,onDelete:t,onMoveDown:a,onMoveUp:n,first:l,last:r})=>{const c=Object(s.useStyles)(O);return Object(d.jsxs)("tr",{"aria-label":i.selectors.pages.PlaylistForm.itemRow,children:["dashboard_by_id"===e.type?Object(d.jsxs)("td",{className:Object(m.cx)(c.td,c.item),children:[Object(d.jsx)(s.Icon,{name:"apps","aria-label":i.selectors.pages.PlaylistForm.itemIdType}),Object(d.jsx)("span",{children:e.title})]}):null,"dashboard_by_tag"===e.type?Object(d.jsxs)("td",{className:Object(m.cx)(c.td,c.item),children:[Object(d.jsx)(s.Icon,{name:"tag-alt","aria-label":i.selectors.pages.PlaylistForm.itemTagType}),Object(d.jsx)(v.a,{label:e.title,removeIcon:!1,count:0},e.id)]}):null,Object(d.jsxs)("td",{className:Object(m.cx)(c.td,c.settings),children:[l?null:Object(d.jsx)(s.IconButton,{name:"arrow-up",size:"md",onClick:t=>{t.preventDefault(),n(e)},"aria-label":i.selectors.pages.PlaylistForm.itemMoveUp,type:"button"}),r?null:Object(d.jsx)(s.IconButton,{name:"arrow-down",size:"md",onClick:t=>{t.preventDefault(),a(e)},"aria-label":i.selectors.pages.PlaylistForm.itemMoveDown,type:"button"}),Object(d.jsx)(s.IconButton,{name:"times",size:"md",onClick:a=>{a.preventDefault(),t(e)},"aria-label":i.selectors.pages.PlaylistForm.itemDelete,type:"button"})]})]},e.title)};function O(e){return{td:m.css`
      label: td;
      line-height: 28px;
      max-width: 335px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    `,item:m.css`
      label: item;
      span {
        margin-left: ${e.spacing.xs};
      }
    `,settings:m.css`
      label: settings;
      text-align: right;
    `}}var g;const y=({items:e,onMoveUp:t,onMoveDown:a,onDelete:n})=>0===e.length?g||(g=Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("em",{children:"Playlist is empty. Add dashboards below."})})})):Object(d.jsx)(d.Fragment,{children:e.map((l,s)=>{const i=0===s,r=s===e.length-1;return Object(d.jsx)(h,{first:i,last:r,item:l,onDelete:n,onMoveDown:a,onMoveUp:t},l.title)})});var f;const x=({items:e,onMoveUp:t,onMoveDown:a,onDelete:n})=>Object(d.jsxs)("div",{className:"gf-form-group",children:[f||(f=Object(d.jsx)("h3",{className:"page-headering",children:"Dashboards"})),Object(d.jsx)("table",{className:"filter-table",children:Object(d.jsx)("tbody",{children:Object(d.jsx)(y,{items:e,onMoveUp:t,onMoveDown:a,onDelete:n})})})]});var w;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return F}));const k=new p.a,F=({onSubmit:e,playlist:t})=>{var a,r;const{name:c,interval:o,items:u}=t,{items:p,addById:m,addByTag:v,deleteItem:h,moveDown:O,moveUp:g}=function(e){const[t,a]=Object(n.useState)(null!=e?e:[]),l=Object(n.useCallback)(e=>{if(t.find(t=>t.id===e.id))return;const n={id:e.id,title:e.label,type:"dashboard_by_id",value:e.id.toString(10),order:t.length+1};a([...t,n])},[t]),s=Object(n.useCallback)(e=>{const n=e[0];if(!n||t.find(e=>e.value===n))return;const l={title:n,type:"dashboard_by_tag",value:n,order:t.length+1};a([...t,l])},[t]),i=Object(n.useCallback)((e,n)=>{const l=[...t],s=l.indexOf(e),i=s+n;i>=0&&i<l.length&&(l.splice(s,1),l.splice(i,0,e)),a(l)},[t]),r=Object(n.useCallback)(e=>{i(e,-1)},[i]),c=Object(n.useCallback)(e=>{i(e,1)},[i]),o=Object(n.useCallback)(e=>{a(t.filter(t=>t!==e))},[t]);return{items:t,addById:l,addByTag:s,deleteItem:o,moveDown:c,moveUp:r}}(u);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(s.Form,{onSubmit:t=>e(D({},t,{items:p})),validateOn:"onBlur",children:({register:e,errors:t})=>{var n,u;const y=0===p.length||Object.keys(t).length>0;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(s.Field,{label:"Name",invalid:!!t.name,error:null==t||null===(n=t.name)||void 0===n?void 0:n.message,children:Object(d.jsx)(s.Input,D({type:"text"},e("name",{required:"Name is required"}),{placeholder:"Name",defaultValue:c,"aria-label":i.selectors.pages.PlaylistForm.name}))}),Object(d.jsx)(s.Field,{label:"Interval",invalid:!!t.interval,error:null==t||null===(u=t.interval)||void 0===u?void 0:u.message,children:Object(d.jsx)(s.Input,D({type:"text"},e("interval",{required:"Interval is required"}),{placeholder:"5m",defaultValue:null!=o?o:"5m","aria-label":i.selectors.pages.PlaylistForm.interval}))}),a||(a=Object(d.jsx)(x,{items:p,onMoveUp:g,onMoveDown:O,onDelete:h})),Object(d.jsxs)("div",{className:"gf-form-group",children:[w||(w=Object(d.jsx)("h3",{className:"page-headering",children:"Add dashboards"})),r||(r=Object(d.jsx)(s.Field,{label:"Add by title",children:Object(d.jsx)(b,{onChange:m,isClearable:!0})})),Object(d.jsx)(s.Field,{label:"Add by tag",children:Object(d.jsx)(j.a,{isClearable:!0,tags:[],hideValues:!0,tagOptions:k.getDashboardTags,onChange:v,placeholder:""})})]}),Object(d.jsxs)(s.HorizontalGroup,{children:[Object(d.jsx)(s.Button,{variant:"primary",disabled:y,children:"Save"}),Object(d.jsx)(s.LinkButton,{variant:"secondary",href:l.config.appSubUrl+"/playlists",children:"Cancel"})]})]})}})})}},uvYg:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("vF1F");function l(e){return{description:n.css`
      label: description;
      width: 555px;
      margin-bottom: 20px;
    `,subHeading:n.css`
      label: sub-heading;
      margin-bottom: ${e.spacing(2)};
    `}}}}]);
//# sourceMappingURL=PlaylistNewPage.469fc90b3a949936bbff.js.map