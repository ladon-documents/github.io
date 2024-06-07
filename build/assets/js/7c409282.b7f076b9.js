"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[3224],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>y});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(n),m=i,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,o(o({ref:e},p),{},{components:n})):r.createElement(y,o({ref:e},p))}));function y(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80501:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={},o="isTxActive",l={type:"api",id:"is-tx-active",unversionedId:"is-tx-active",title:"isTxActive",description:"",slug:"/is-tx-active",frontMatter:{},api:{tags:["Transaction"],operationId:"isTxActive",responses:{200:{description:"OK",content:{"application/json":{schema:{type:"boolean"}}}}},description:"isTxActive",method:"get",path:"/api/rest/v1/transaction/active",servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"is Tx Active",description:{type:"text/plain"},url:{path:["api","rest","v1","transaction","active"],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET"}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/doc/ladon/is-tx-active",previous:{title:"commitTransaction",permalink:"/doc/ladon/commit-transaction"},next:{title:"statusTask",permalink:"/doc/ladon/status-task"}},c=[],s={toc:c},p="wrapper";function u(t){let{components:e,...n}=t;return(0,i.kt)(p,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"istxactive"},"isTxActive"),(0,i.kt)("p",null,"isTxActive"),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"OK"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("span",{style:{opacity:"0.6"}}," boolean")))))))))))}u.isMDXComponent=!0}}]);