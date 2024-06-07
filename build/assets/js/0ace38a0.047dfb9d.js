"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[8046],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(y,l(l({ref:t},d),{},{components:n})):r.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97755:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={},l="getPermissionsForUser",a={type:"api",id:"get-permissions-for-user",unversionedId:"get-permissions-for-user",title:"getPermissionsForUser",description:"",slug:"/get-permissions-for-user",frontMatter:{},api:{tags:["Usermanager"],operationId:"getPermissionsForUser",parameters:[{name:"userId",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{required:["allowed","description","operation","permissionId","type","value"],type:"object",properties:{value:{type:"string"},type:{type:"string",enum:["ANT","REGEX","EQUALS","SPEL","GLOB"]},operation:{type:"string",enum:["CREATE_OBJECT","READ_OBJECT","WRITE_OBJECT","DELETE_OBJECT","WIPE_OUT_OBJECT","CREATE_BUCKET","READ_BUCKET","WRITE_BUCKET","DELETE_BUCKET","LADON_UI","ADD_USER","LIST_USER","DELETE_USER","EDIT_PERMISSIONS","SHOW_PERMISSIONS"]},allowed:{type:"boolean"},permissionId:{type:"string"},description:{type:"string"}}}}}}}},description:"getPermissionsForUser",method:"get",path:"/api/usermanager/permissions/user/{userId}",servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"get Permissions For User",description:{type:"text/plain"},url:{path:["api","usermanager","permissions","user",":userId"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"userId"}]},method:"GET"}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/doc/ladon/get-permissions-for-user",previous:{title:"deleteRoleForUser",permalink:"/doc/ladon/delete-role-for-user"},next:{title:"addPermissionForUser",permalink:"/doc/ladon/add-permission-for-user"}},s=[],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getpermissionsforuser"},"getPermissionsForUser"),(0,i.kt)("p",null,"getPermissionsForUser"),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"userId"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"OK"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"value"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"ANT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"REGEX"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"EQUALS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SPEL"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"GLOB"),"]")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"operation"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE_OBJECT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"READ_OBJECT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"WRITE_OBJECT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE_OBJECT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"WIPE_OUT_OBJECT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE_BUCKET"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"READ_BUCKET"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"WRITE_BUCKET"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE_BUCKET"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"LADON_UI"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ADD_USER"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"LIST_USER"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE_USER"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"EDIT_PERMISSIONS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SHOW_PERMISSIONS"),"]")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"allowed"),(0,i.kt)("span",{style:{opacity:"0.6"}}," boolean"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"permissionId"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"description"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))))))}u.isMDXComponent=!0}}]);