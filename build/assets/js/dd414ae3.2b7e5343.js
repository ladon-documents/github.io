"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[792],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var r=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=l,g=c["".concat(u,".").concat(d)]||c[d]||y[d]||i;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22637:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(58168),l=(n(96540),n(15680));const i={},a="uninstallPlugin",o={type:"api",id:"uninstall-plugin",unversionedId:"uninstall-plugin",title:"uninstallPlugin",description:"",slug:"/uninstall-plugin",frontMatter:{},api:{tags:["Pluginmanager"],operationId:"uninstallPlugin",parameters:[{name:"puginId",in:"query",required:!0,schema:{type:"string"}}],responses:{200:{description:"OK"}},description:"uninstallPlugin",method:"delete",path:"/api/plugins/uninstall",servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"uninstall Plugin",description:{type:"text/plain"},url:{path:["api","plugins","uninstall"],host:["{{baseUrl}}"],query:[{description:{content:"(Required) ",type:"text/plain"},key:"puginId",value:"<string>"}],variable:[]},method:"DELETE"}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/build/ladon/uninstall-plugin",previous:{title:"deleteDocumentBatch",permalink:"/build/ladon/delete-document-batch"},next:{title:"Introduction",permalink:"/build/ladon/introduction-1"}},u=[],p={toc:u},s="wrapper";function c(e){let{components:t,...n}=e;return(0,l.yg)(s,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"uninstallplugin"},"uninstallPlugin"),(0,l.yg)("p",null,"uninstallPlugin"),(0,l.yg)("table",{style:{display:"table",width:"100%"}},(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"puginId"),(0,l.yg)("span",{style:{opacity:"0.6"}}," string"),(0,l.yg)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.yg)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,l.yg)("table",{style:{display:"table",width:"100%"}},(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("div",{style:{display:"flex"}},(0,l.yg)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.yg)("code",null,"200")),(0,l.yg)("div",null,(0,l.yg)("p",null,"OK"))),(0,l.yg)("div",null))))))}c.isMDXComponent=!0}}]);