!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="public/build/",e(e.s="Cz29")}({Cz29:function(t,n,e){"use strict";e.r(n);var r={value:()=>{}};function i(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new o(r)}function o(t){this._=t}function u(t,n){return t.trim().split(/^|\s+/).map((function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))}function f(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function a(t,n,e){for(var i=0,o=t.length;i<o;++i)if(t[i].name===n){t[i]=r,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=e&&t.push({name:n,value:e}),t}o.prototype=i.prototype={constructor:o,on:function(t,n){var e,r=this._,i=u(t+"",r),o=-1,l=i.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<l;)if(e=(t=i[o]).type)r[e]=a(r[e],t.name,n);else if(null==n)for(e in r)r[e]=a(r[e],t.name,null);return this}for(;++o<l;)if((e=(t=i[o]).type)&&(e=f(r[e],t.name)))return e},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new o(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,e=(r=this._[t]).length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var l,s,c=i,h=0,y=0,x=0,v=0,p=0,d=0,_="object"==typeof performance&&performance.now?performance:Date,g="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function w(){return p||(g(m),p=_.now()+d)}function m(){p=0}function N(){this._call=this._time=this._next=null}function b(t,n,e){var r=new N;return r.restart(t,n,e),r}function A(){p=(v=_.now())+d,h=y=0;try{!function(){w(),++h;for(var t,n=l;n;)(t=p-n._time)>=0&&n._call.call(null,t),n=n._next;--h}()}finally{h=0,function(){var t,n,e=l,r=1/0;for(;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:l=n);s=t,k(r)}(),p=0}}function M(){var t=_.now(),n=t-v;n>1e3&&(d-=n,v=t)}function k(t){h||(y&&(y=clearTimeout(y)),t-p>24?(t<1/0&&(y=setTimeout(A,t-_.now()-d)),x&&(x=clearInterval(x))):(x||(v=_.now(),x=setInterval(M,1e3)),h=1,g(A)))}N.prototype=b.prototype={constructor:N,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?w():+e)+(null==n?0:+n),this._next||s===this||(s?s._next=this:l=this,s=this),this._call=t,this._time=e,k()},stop:function(){this._call&&(this._call=null,this._time=1/0,k())}};const E=4294967296;var j=Math.PI*(3-Math.sqrt(5)),O=function(t){var n,e=1,r=.001,i=1-Math.pow(r,1/300),o=0,u=.6,f=new Map,a=b(h),l=c("tick","end"),s=function(){let t=1;return()=>(t=(1664525*t+1013904223)%E)/E}();function h(){y(),l.call("tick",n),e<r&&(a.stop(),l.call("end",n))}function y(r){var a,l,s=t.length;void 0===r&&(r=1);for(var c=0;c<r;++c)for(e+=(o-e)*i,f.forEach((function(t){t(e)})),a=0;a<s;++a)null==(l=t[a]).fx?l.x+=l.vx*=u:(l.x=l.fx,l.vx=0),null==l.fy?l.y+=l.vy*=u:(l.y=l.fy,l.vy=0);return n}function x(){for(var n,e=0,r=t.length;e<r;++e){if((n=t[e]).index=e,null!=n.fx&&(n.x=n.fx),null!=n.fy&&(n.y=n.fy),isNaN(n.x)||isNaN(n.y)){var i=10*Math.sqrt(.5+e),o=e*j;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function v(n){return n.initialize&&n.initialize(t,s),n}return null==t&&(t=[]),x(),n={tick:y,restart:function(){return a.restart(h),n},stop:function(){return a.stop(),n},nodes:function(e){return arguments.length?(t=e,x(),f.forEach(v),n):t},alpha:function(t){return arguments.length?(e=+t,n):e},alphaMin:function(t){return arguments.length?(r=+t,n):r},alphaDecay:function(t){return arguments.length?(i=+t,n):+i},alphaTarget:function(t){return arguments.length?(o=+t,n):o},velocityDecay:function(t){return arguments.length?(u=1-t,n):1-u},randomSource:function(t){return arguments.length?(s=t,f.forEach(v),n):s},force:function(t,e){return arguments.length>1?(null==e?f.delete(t):f.set(t,v(e)),n):f.get(t)},find:function(n,e,r){var i,o,u,f,a,l=0,s=t.length;for(null==r?r=1/0:r*=r,l=0;l<s;++l)(u=(i=n-(f=t[l]).x)*i+(o=e-f.y)*o)<r&&(a=f,r=u);return a},on:function(t,e){return arguments.length>1?(l.on(t,e),n):l.on(t)}}},P=function(t){return function(){return t}},z=function(t){return 1e-6*(t()-.5)};function S(t){return t.index}function q(t,n){var e=t.get(n);if(!e)throw new Error("node not found: "+n);return e}function T(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,u,f,a,l,s,c,h,y=t._root,x={data:r},v=t._x0,p=t._y0,d=t._x1,_=t._y1;if(!y)return t._root=x,t;for(;y.length;)if((l=n>=(o=(v+d)/2))?v=o:d=o,(s=e>=(u=(p+_)/2))?p=u:_=u,i=y,!(y=y[c=s<<1|l]))return i[c]=x,t;if(f=+t._x.call(null,y.data),a=+t._y.call(null,y.data),n===f&&e===a)return x.next=y,i?i[c]=x:t._root=x,t;do{i=i?i[c]=new Array(4):t._root=new Array(4),(l=n>=(o=(v+d)/2))?v=o:d=o,(s=e>=(u=(p+_)/2))?p=u:_=u}while((c=s<<1|l)==(h=(a>=u)<<1|f>=o));return i[h]=y,i[c]=x,t}var D=function(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i};function C(t){return t[0]}function I(t){return t[1]}function L(t,n,e){var r=new F(null==n?C:n,null==e?I:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function F(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function R(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}var X=L.prototype=F.prototype;function B(t){return t.x+t.vx}function G(t){return t.y+t.vy}X.copy=function(){var t,n,e=new F(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=R(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=R(n));return e},X.add=function(t){const n=+this._x.call(null,t),e=+this._y.call(null,t);return T(this.cover(n,e),n,e,t)},X.addAll=function(t){var n,e,r,i,o=t.length,u=new Array(o),f=new Array(o),a=1/0,l=1/0,s=-1/0,c=-1/0;for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(u[e]=r,f[e]=i,r<a&&(a=r),r>s&&(s=r),i<l&&(l=i),i>c&&(c=i));if(a>s||l>c)return this;for(this.cover(a,l).cover(s,c),e=0;e<o;++e)T(this,u[e],f[e],t[e]);return this},X.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{for(var u,f,a=i-e||1,l=this._root;e>t||t>=i||r>n||n>=o;)switch(f=(n<r)<<1|t<e,(u=new Array(4))[f]=l,l=u,a*=2,f){case 0:i=e+a,o=r+a;break;case 1:e=i-a,o=r+a;break;case 2:i=e+a,r=o-a;break;case 3:e=i-a,r=o-a}this._root&&this._root.length&&(this._root=l)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},X.data=function(){var t=[];return this.visit((function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)})),t},X.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},X.find=function(t,n,e){var r,i,o,u,f,a,l,s=this._x0,c=this._y0,h=this._x1,y=this._y1,x=[],v=this._root;for(v&&x.push(new D(v,s,c,h,y)),null==e?e=1/0:(s=t-e,c=n-e,h=t+e,y=n+e,e*=e);a=x.pop();)if(!(!(v=a.node)||(i=a.x0)>h||(o=a.y0)>y||(u=a.x1)<s||(f=a.y1)<c))if(v.length){var p=(i+u)/2,d=(o+f)/2;x.push(new D(v[3],p,d,u,f),new D(v[2],i,d,p,f),new D(v[1],p,o,u,d),new D(v[0],i,o,p,d)),(l=(n>=d)<<1|t>=p)&&(a=x[x.length-1],x[x.length-1]=x[x.length-1-l],x[x.length-1-l]=a)}else{var _=t-+this._x.call(null,v.data),g=n-+this._y.call(null,v.data),w=_*_+g*g;if(w<e){var m=Math.sqrt(e=w);s=t-m,c=n-m,h=t+m,y=n+m,r=v.data}}return r},X.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(u=+this._y.call(null,t)))return this;var n,e,r,i,o,u,f,a,l,s,c,h,y=this._root,x=this._x0,v=this._y0,p=this._x1,d=this._y1;if(!y)return this;if(y.length)for(;;){if((l=o>=(f=(x+p)/2))?x=f:p=f,(s=u>=(a=(v+d)/2))?v=a:d=a,n=y,!(y=y[c=s<<1|l]))return this;if(!y.length)break;(n[c+1&3]||n[c+2&3]||n[c+3&3])&&(e=n,h=c)}for(;y.data!==t;)if(r=y,!(y=y.next))return this;return(i=y.next)&&delete y.next,r?(i?r.next=i:delete r.next,this):n?(i?n[c]=i:delete n[c],(y=n[0]||n[1]||n[2]||n[3])&&y===(n[3]||n[2]||n[1]||n[0])&&!y.length&&(e?e[h]=y:this._root=y),this):(this._root=i,this)},X.removeAll=function(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this},X.root=function(){return this._root},X.size=function(){var t=0;return this.visit((function(n){if(!n.length)do{++t}while(n=n.next)})),t},X.visit=function(t){var n,e,r,i,o,u,f=[],a=this._root;for(a&&f.push(new D(a,this._x0,this._y0,this._x1,this._y1));n=f.pop();)if(!t(a=n.node,r=n.x0,i=n.y0,o=n.x1,u=n.y1)&&a.length){var l=(r+o)/2,s=(i+u)/2;(e=a[3])&&f.push(new D(e,l,s,o,u)),(e=a[2])&&f.push(new D(e,r,s,l,u)),(e=a[1])&&f.push(new D(e,l,i,o,s)),(e=a[0])&&f.push(new D(e,r,i,l,s))}return this},X.visitAfter=function(t){var n,e=[],r=[];for(this._root&&e.push(new D(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,u=n.x0,f=n.y0,a=n.x1,l=n.y1,s=(u+a)/2,c=(f+l)/2;(o=i[0])&&e.push(new D(o,u,f,s,c)),(o=i[1])&&e.push(new D(o,s,f,a,c)),(o=i[2])&&e.push(new D(o,u,c,s,l)),(o=i[3])&&e.push(new D(o,s,c,a,l))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},X.x=function(t){return arguments.length?(this._x=t,this):this._x},X.y=function(t){return arguments.length?(this._y=t,this):this._y};function H(t,n,e){let{roots:r,secondLevelRoots:i}=function(t,n){const e={},r=t.reduce((t,n)=>(t[n.id]=n,t),{}),i=n.reduce((t,n)=>{const e=n.source;return t[e]=[...t[e]||[],n],t},{});let o=t.filter(t=>0===t.incoming);o.length||(o=[t[0]]);let u=o.reduce((t,n)=>(t.push(...i[n.id]?i[n.id].map(t=>r[t.target]):[]),t),[]);let f=0;for(const t of o){let n=[t],o=0;for(;n.length>0;){const t=[];let u=f;for(const f of n)e[f.id]||(f.x=o,f.y=u,e[f.id]=!0,u+=200,i[f.id]&&t.push(...i[f.id].map(t=>r[t.target])));n=t,o+=200,u=f}f+=300}return{roots:o,secondLevelRoots:u}}(t,n);[...r,...i].forEach((t,n)=>{t.fx=t.x});const o=O(t).force("link",function(t){var n,e,r,i,o,u,f=S,a=function(t){return 1/Math.min(i[t.source.index],i[t.target.index])},l=P(30),s=1;function c(r){for(var i=0,f=t.length;i<s;++i)for(var a,l,c,h,y,x,v,p=0;p<f;++p)l=(a=t[p]).source,h=(c=a.target).x+c.vx-l.x-l.vx||z(u),y=c.y+c.vy-l.y-l.vy||z(u),h*=x=((x=Math.sqrt(h*h+y*y))-e[p])/x*r*n[p],y*=x,c.vx-=h*(v=o[p]),c.vy-=y*v,l.vx+=h*(v=1-v),l.vy+=y*v}function h(){if(r){var u,a,l=r.length,s=t.length,c=new Map(r.map((t,n)=>[f(t,n,r),t]));for(u=0,i=new Array(l);u<s;++u)(a=t[u]).index=u,"object"!=typeof a.source&&(a.source=q(c,a.source)),"object"!=typeof a.target&&(a.target=q(c,a.target)),i[a.source.index]=(i[a.source.index]||0)+1,i[a.target.index]=(i[a.target.index]||0)+1;for(u=0,o=new Array(s);u<s;++u)a=t[u],o[u]=i[a.source.index]/(i[a.source.index]+i[a.target.index]);n=new Array(s),y(),e=new Array(s),x()}}function y(){if(r)for(var e=0,i=t.length;e<i;++e)n[e]=+a(t[e],e,t)}function x(){if(r)for(var n=0,i=t.length;n<i;++n)e[n]=+l(t[n],n,t)}return null==t&&(t=[]),c.initialize=function(t,n){r=t,u=n,h()},c.links=function(n){return arguments.length?(t=n,h(),c):t},c.id=function(t){return arguments.length?(f=t,c):f},c.iterations=function(t){return arguments.length?(s=+t,c):s},c.strength=function(t){return arguments.length?(a="function"==typeof t?t:P(+t),y(),c):a},c.distance=function(t){return arguments.length?(l="function"==typeof t?t:P(+t),x(),c):l},c}(n).id(t=>t.id).distance(e.linkDistance).strength(e.linkStrength)).force("x",function(t){var n,e,r,i=P(.1);function o(t){for(var i,o=0,u=n.length;o<u;++o)(i=n[o]).vx+=(r[o]-i.x)*e[o]*t}function u(){if(n){var o,u=n.length;for(e=new Array(u),r=new Array(u),o=0;o<u;++o)e[o]=isNaN(r[o]=+t(n[o],o,n))?0:+i(n[o],o,n)}}return"function"!=typeof t&&(t=P(null==t?0:+t)),o.initialize=function(t){n=t,u()},o.strength=function(t){return arguments.length?(i="function"==typeof t?t:P(+t),u(),o):i},o.x=function(n){return arguments.length?(t="function"==typeof n?n:P(+n),u(),o):t},o}(e.forceX).strength(e.forceXStrength)).force("collide",function(t){var n,e,r,i=1,o=1;function u(){for(var t,u,a,l,s,c,h,y=n.length,x=0;x<o;++x)for(u=L(n,B,G).visitAfter(f),t=0;t<y;++t)a=n[t],c=e[a.index],h=c*c,l=a.x+a.vx,s=a.y+a.vy,u.visit(v);function v(t,n,e,o,u){var f=t.data,y=t.r,x=c+y;if(!f)return n>l+x||o<l-x||e>s+x||u<s-x;if(f.index>a.index){var v=l-f.x-f.vx,p=s-f.y-f.vy,d=v*v+p*p;d<x*x&&(0===v&&(d+=(v=z(r))*v),0===p&&(d+=(p=z(r))*p),d=(x-(d=Math.sqrt(d)))/d*i,a.vx+=(v*=d)*(x=(y*=y)/(h+y)),a.vy+=(p*=d)*x,f.vx-=v*(x=1-x),f.vy-=p*x)}}}function f(t){if(t.data)return t.r=e[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function a(){if(n){var r,i,o=n.length;for(e=new Array(o),r=0;r<o;++r)i=n[r],e[i.index]=+t(i,r,n)}}return"function"!=typeof t&&(t=P(null==t?1:+t)),u.initialize=function(t,e){n=t,r=e,a()},u.iterations=function(t){return arguments.length?(o=+t,u):o},u.strength=function(t){return arguments.length?(i=+t,u):i},u.radius=function(n){return arguments.length?(t="function"==typeof n?n:P(+n),a(),u):t},u}(e.forceCollide));o.tick(e.tick),o.stop(),function(t){const n=function(t){if(0===t.length)return{top:0,right:0,bottom:0,left:0,center:{x:0,y:0}};const n=t.reduce((t,n)=>(n.x>t.right&&(t.right=n.x),n.x<t.left&&(t.left=n.x),n.y>t.bottom&&(t.bottom=n.y),n.y<t.top&&(t.top=n.y),t),{top:1/0,right:-1/0,bottom:-1/0,left:1/0}),e=n.top+(n.bottom-n.top)/2,r=n.left+(n.right-n.left)/2;return{...n,center:{x:r,y:e}}}(t);for(let e of t)e.x=e.x-n.center.x,e.y=e.y-n.center.y}(t)}e.d(n,"layout",(function(){return H})),addEventListener("message",t=>{const{nodes:n,edges:e,config:r}=t.data;H(n,e,r),postMessage({nodes:n,edges:e})})}});
//# sourceMappingURL=layout.worker.9ffcb8c26ead8fb3ac88.worker.js.map