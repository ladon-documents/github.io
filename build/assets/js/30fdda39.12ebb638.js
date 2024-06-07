"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[3993],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var r=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),y=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=y(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=y(n),d=l,u=g["".concat(s,".").concat(d)]||g[d]||c[d]||i;return n?r.createElement(u,a(a({ref:t},p),{},{components:n})):r.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:l,a[1]=o;for(var y=2;y<i;y++)a[y]=n[y];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18289:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(58168),l=(n(96540),n(15680));const i={},a="shareFiles",o={type:"api",id:"share-files",unversionedId:"share-files",title:"shareFiles",description:"",slug:"/share-files",frontMatter:{},api:{tags:["Filemanager"],operationId:"shareFiles",requestBody:{content:{"application/json":{schema:{required:["selection","title"],type:"object",properties:{title:{type:"string"},selection:{type:"array",items:{type:"string"}},validDate:{type:"string",format:"date-time"},password:{type:"string"},recipient:{type:"string"}}}}},required:!0},responses:{200:{description:"OK",content:{"*/*":{schema:{type:"object",properties:{id:{type:"string"},url:{type:"string"},emailSent:{type:"boolean"}}}}}}},description:"shareFiles",method:"post",path:"/api/filemanager/share/files",parameters:[],servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],jsonRequestBodyExample:{title:"string",selection:["string"],validDate:"string",password:"string",recipient:"string"},info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"share Files",description:{type:"text/plain"},url:{path:["api","filemanager","share","files"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "selection": [\n        "<string>",\n        "<string>"\n    ],\n    "title": "<string>",\n    "validDate": "<dateTime>",\n    "password": "<string>",\n    "recipient": "<string>"\n}'}}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/build/ladon/share-files",previous:{title:"getFileShares",permalink:"/build/ladon/get-file-shares"},next:{title:"getPicture",permalink:"/build/ladon/get-picture"}},s=[],y={toc:s},p="wrapper";function g(e){let{components:t,...n}=e;return(0,l.yg)(p,(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"sharefiles"},"shareFiles"),(0,l.yg)("p",null,"shareFiles"),(0,l.yg)("table",{style:{display:"table",width:"100%"}},(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",{style:{textAlign:"left"}},"Request Body ",(0,l.yg)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.yg)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.yg)("div",null)))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"title"),(0,l.yg)("span",{style:{opacity:"0.6"}}," string"),(0,l.yg)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.yg)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"selection"),(0,l.yg)("span",{style:{opacity:"0.6"}}," string[]"),(0,l.yg)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.yg)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"validDate"),(0,l.yg)("span",{style:{opacity:"0.6"}}," date-time"))),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"password"),(0,l.yg)("span",{style:{opacity:"0.6"}}," string"))),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"recipient"),(0,l.yg)("span",{style:{opacity:"0.6"}}," string"))))),(0,l.yg)("table",{style:{display:"table",width:"100%"}},(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("div",{style:{display:"flex"}},(0,l.yg)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.yg)("code",null,"200")),(0,l.yg)("div",null,(0,l.yg)("p",null,"OK"))),(0,l.yg)("div",null,(0,l.yg)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",{style:{textAlign:"left"}},"Schema ",(0,l.yg)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.yg)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.yg)("div",null)))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"id"),(0,l.yg)("span",{style:{opacity:"0.6"}}," string"),(0,l.yg)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.yg)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"url"),(0,l.yg)("span",{style:{opacity:"0.6"}}," string"),(0,l.yg)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.yg)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"))),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"emailSent"),(0,l.yg)("span",{style:{opacity:"0.6"}}," boolean"),(0,l.yg)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.yg)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL")))))))))))}g.isMDXComponent=!0}}]);