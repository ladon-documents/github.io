"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[4222],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},l=Object.keys(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=o.createContext({}),d=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=d(t.components);return o.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},y=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=d(n),y=r,f=c["".concat(p,".").concat(y)]||c[y]||u[y]||l;return n?o.createElement(f,a(a({ref:e},s),{},{components:n})):o.createElement(f,a({ref:e},s))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,a=new Array(l);a[0]=y;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:r,a[1]=i;for(var d=2;d<l;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},83199:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const l={},a="zipDownloadPost",i={type:"api",id:"zip-download-post",unversionedId:"zip-download-post",title:"zipDownloadPost",description:"",slug:"/zip-download-post",frontMatter:{},api:{tags:["Downloads"],operationId:"zipDownloadPost",requestBody:{content:{"application/json":{schema:{type:"array",items:{type:"string"}}}},required:!0},responses:{200:{description:"OK",content:{"*/*":{schema:{type:"object",additionalProperties:{type:"string"}}}}}},description:"zipDownloadPost",method:"post",path:"/api/rest/v1/content/zipdownload",servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],jsonRequestBodyExample:["string"],info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"zip Download Post",description:{type:"text/plain"},url:{path:["api","rest","v1","content","zipdownload"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'[\n    "<string>",\n    "<string>"\n]'}}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/doc/ladon/zip-download-post",previous:{title:"zipDownload",permalink:"/doc/ladon/zip-download"},next:{title:"zipDownload_1",permalink:"/doc/ladon/zip-download-1"}},p=[],d={toc:p},s="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"zipdownloadpost"},"zipDownloadPost"),(0,r.kt)("p",null,"zipDownloadPost"),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{opacity:"0.6"}}," string[]"))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"OK"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("span",{style:{opacity:"0.6"}}," object")))))))))))}c.isMDXComponent=!0}}]);