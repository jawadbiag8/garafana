(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"5gaU":function(e,i,s){"use strict";s.d(i,"d",(function(){return l})),s.d(i,"g",(function(){return u})),s.d(i,"c",(function(){return p})),s.d(i,"e",(function(){return m})),s.d(i,"h",(function(){return f})),s.d(i,"f",(function(){return b})),s.d(i,"a",(function(){return j})),s.d(i,"b",(function(){return g}));var n=s("Obii"),t=s("t8hP"),r=s("NXk7"),o=s("3SGO"),d=s("v2PB"),a=s("Xmxp"),c=s("BAXh");function l(e){return async i=>{const s=await r.b.getFolderByUid(e);i(Object(c.b)(s)),i(Object(o.d)(Object(d.a)(s)))}}function u(e){return async i=>{const s=await r.b.put("/api/folders/"+e.uid,{title:e.title,version:e.version});a.b.emit(n.AppEvents.alertSuccess,["Folder saved"]),t.locationService.push(s.url+"/settings")}}function p(e){return async i=>{await r.b.delete("/api/folders/"+e),t.locationService.push("/dashboards")}}function m(e){return async i=>{const s=await r.b.get(`/api/folders/${e}/permissions`);i(Object(c.c)(s))}}function h(e){return{userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}}function f(e,i){return async(s,n)=>{const t=n().folder,o=[];for(const s of t.permissions){if(s.inherited)continue;const n=h(s);e===s&&(n.permission=i),o.push(n)}await r.b.post(`/api/folders/${t.uid}/permissions`,{items:o}),await s(m(t.uid))}}function b(e){return async(i,s)=>{const n=s().folder,t=[];for(const i of n.permissions)i.inherited||i===e||t.push(h(i));await r.b.post(`/api/folders/${n.uid}/permissions`,{items:t}),await i(m(n.uid))}}function j(e){return async(i,s)=>{const n=s().folder,t=[];for(const e of n.permissions)e.inherited||t.push(h(e));t.push({userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}),await r.b.post(`/api/folders/${n.uid}/permissions`,{items:t}),await i(m(n.uid))}}function g(e){return async()=>{const i=await Object(t.getBackendSrv)().post("/api/folders",{title:e});a.b.emit(n.AppEvents.alertSuccess,["Folder Created","OK"]),t.locationService.push(n.locationUtil.stripBaseFromUrl(i.url))}}},rtU1:function(e,i,s){"use strict";s.r(i),s.d(i,"FolderPermissions",(function(){return P}));var n,t,r,o,d=s("q1tI"),a=s("/MKj"),c=s("ZGyg"),l=s("kDLi"),u=s("BVom"),p=s("lzJ5"),m=s("5gaU"),h=s("v2PB"),f=s("3p3q"),b=s("wobk"),j=s("QzbV"),g=s("nKUr");const v={getFolderByUid:m.d,getFolderPermissions:m.e,updateFolderPermission:m.h,removeFolderPermission:m.f,addFolderPermission:m.a},O=Object(a.connect)((e,i)=>{const s=i.match.params.uid;return{navModel:Object(p.a)(e.navIndex,"folder-permissions-"+s,Object(h.b)(1)),folderUid:s,folder:e.folder}},v);class P extends d.PureComponent{constructor(e){super(e),this.onOpenAddPermissions=()=>{this.setState({isAdding:!0})},this.onRemoveItem=e=>{this.props.removeFolderPermission(e)},this.onPermissionChanged=(e,i)=>{this.props.updateFolderPermission(e,i)},this.onAddPermission=e=>this.props.addFolderPermission(e),this.onCancelAddPermission=()=>{this.setState({isAdding:!1})},this.state={isAdding:!1}}componentDidMount(){this.props.getFolderByUid(this.props.folderUid),this.props.getFolderPermissions(this.props.folderUid)}render(){const{navModel:e,folder:i}=this.props,{isAdding:s}=this.state;if(0===i.id)return Object(g.jsx)(c.a,{navModel:e,children:n||(n=Object(g.jsx)(c.a.Contents,{isLoading:!0,children:Object(g.jsx)("span",{})}))});const d={title:i.title,url:i.url,id:i.id};return Object(g.jsx)(c.a,{navModel:e,children:Object(g.jsxs)(c.a.Contents,{children:[Object(g.jsxs)("div",{className:"page-action-bar",children:[t||(t=Object(g.jsx)("h3",{className:"page-sub-heading",children:"Folder Permissions"})),r||(r=Object(g.jsx)(l.Tooltip,{placement:"auto",content:Object(g.jsx)(j.a,{}),children:Object(g.jsx)(l.Icon,{className:"icon--has-hover page-sub-heading-icon",name:"question-circle"})})),o||(o=Object(g.jsx)("div",{className:"page-action-bar__spacer"})),Object(g.jsx)(l.Button,{className:"pull-right",onClick:this.onOpenAddPermissions,disabled:s,children:"Add Permission"})]}),Object(g.jsx)(u.a,{in:s,children:Object(g.jsx)(b.a,{onAddPermission:this.onAddPermission,onCancel:this.onCancelAddPermission})}),Object(g.jsx)(f.a,{items:i.permissions,onRemoveItem:this.onRemoveItem,onPermissionChanged:this.onPermissionChanged,isFetching:!1,folderInfo:d})]})})}}i.default=O(P)},v2PB:function(e,i,s){"use strict";function n(e){const i={icon:"folder",id:"manage-folder",subTitle:"Manage folder dashboards and permissions",url:"",text:e.title,breadcrumbs:[{title:"Dashboards",url:"dashboards"}],children:[{active:!1,icon:"apps",id:"folder-dashboards-"+e.uid,text:"Dashboards",url:e.url}]};return i.children.push({active:!1,icon:"library-panel",id:"folder-library-panels-"+e.uid,text:"Panels",url:e.url+"/library-panels"}),e.canAdmin&&i.children.push({active:!1,icon:"lock",id:"folder-permissions-"+e.uid,text:"Permissions",url:e.url+"/permissions"}),e.canSave&&i.children.push({active:!1,icon:"cog",id:"folder-settings-"+e.uid,text:"Settings",url:e.url+"/settings"}),i}function t(e){const i=n({id:1,uid:"loading",title:"Loading",url:"url",canSave:!0,canEdit:!0,canAdmin:!0,version:0});return i.children[e].active=!0,{main:i,node:i.children[e]}}s.d(i,"a",(function(){return n})),s.d(i,"b",(function(){return t}))}}]);
//# sourceMappingURL=FolderPermissions.469fc90b3a949936bbff.js.map