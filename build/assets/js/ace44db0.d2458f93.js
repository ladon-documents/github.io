"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[3844],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=l.createContext({}),c=function(t){var e=l.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return l.createElement(p.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},y=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=c(n),y=r,k=u["".concat(p,".").concat(y)]||u[y]||d[y]||a;return n?l.createElement(k,o(o({ref:e},s),{},{components:n})):l.createElement(k,o({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=y;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}y.displayName="MDXCreateElement"},84181:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const a={},o="getDocumentMeta",i={type:"api",id:"get-document-meta",unversionedId:"get-document-meta",title:"getDocumentMeta",description:"",slug:"/get-document-meta",frontMatter:{},api:{tags:["Documents"],operationId:"getDocumentMeta",parameters:[{name:"bucket",in:"path",required:!0,schema:{type:"string"}},{name:"key",in:"query",required:!0,schema:{type:"string"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{"content-type":{type:"string"},created:{type:"string"},"last-modified":{type:"string"},bucket:{type:"string"},key:{type:"string"},path:{type:"string"},etag:{type:"string"},metadata:{type:"object",properties:{empty:{type:"boolean"}},additionalProperties:{type:"string"}},owner:{type:"string"},size:{type:"integer",format:"int64"},version:{type:"string"}}}}}}},description:"getDocumentMeta",method:"get",path:"/api/rest/v1/meta/buckets/{bucket}/documents",servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"get Document Meta",description:{type:"text/plain"},url:{path:["api","rest","v1","meta","buckets",":bucket","documents"],host:["{{baseUrl}}"],query:[{description:{content:"(Required) ",type:"text/plain"},key:"key",value:"<string>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"bucket"}]},method:"GET"}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/doc/ladon/get-document-meta",previous:{title:"createBucket",permalink:"/doc/ladon/create-bucket"},next:{title:"putDocumentMeta",permalink:"/doc/ladon/put-document-meta"}},p=[],c={toc:p},s="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getdocumentmeta"},"getDocumentMeta"),(0,r.kt)("p",null,"getDocumentMeta"),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"bucket"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"key"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"),(0,r.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,r.kt)("table",{style:{display:"table",width:"100%"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("div",{style:{display:"flex"}},(0,r.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,r.kt)("code",null,"200")),(0,r.kt)("div",null,(0,r.kt)("p",null,"OK"))),(0,r.kt)("div",null,(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,r.kt)("div",null)))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"content-type"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"created"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"last-modified"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"bucket"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"key"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"path"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"etag"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"metadata"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"empty"),(0,r.kt)("span",{style:{opacity:"0.6"}}," boolean"))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"owner"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"size"),(0,r.kt)("span",{style:{opacity:"0.6"}}," int64"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"version"),(0,r.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}u.isMDXComponent=!0}}]);