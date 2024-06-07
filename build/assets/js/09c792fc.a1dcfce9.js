"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[1424],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>g});var n=r(96540);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(r),u=l,g=c["".concat(p,".").concat(u)]||c[u]||y[u]||o;return r?n.createElement(g,a(a({ref:t},s),{},{components:r})):n.createElement(g,a({ref:t},s))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:l,a[1]=i;for(var d=2;d<o;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},13853:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(58168),l=(r(96540),r(15680));const o={},a="deleteRole",i={type:"api",id:"delete-role",unversionedId:"delete-role",title:"deleteRole",description:"",slug:"/delete-role",frontMatter:{},api:{tags:["Usermanager"],operationId:"deleteRole",parameters:[{name:"roleId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"OK"}},description:"deleteRole",method:"delete",path:"/api/usermanager/roles/{roleId}",servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"delete Role",description:{type:"text/plain"},url:{path:["api","usermanager","roles",":roleId"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"roleId"}]},method:"DELETE"}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/build/ladon/delete-role",previous:{title:"comments",permalink:"/build/ladon/comments"},next:{title:"removePermission",permalink:"/build/ladon/remove-permission"}},p=[],d={toc:p},s="wrapper";function c(e){let{components:t,...r}=e;return(0,l.yg)(s,(0,n.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"deleterole"},"deleteRole"),(0,l.yg)("p",null,"deleteRole"),(0,l.yg)("table",{style:{display:"table",width:"100%"}},(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"roleId"),(0,l.yg)("span",{style:{opacity:"0.6"}}," string"),(0,l.yg)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.yg)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,l.yg)("table",{style:{display:"table",width:"100%"}},(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("div",{style:{display:"flex"}},(0,l.yg)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.yg)("code",null,"200")),(0,l.yg)("div",null,(0,l.yg)("p",null,"OK"))),(0,l.yg)("div",null))))))}c.isMDXComponent=!0}}]);