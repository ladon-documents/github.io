"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[2323],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var r=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),y=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=y(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=y(n),g=l,u=c["".concat(p,".").concat(g)]||c[g]||d[g]||o;return n?r.createElement(u,i(i({ref:t},s),{},{components:n})):r.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=g;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:l,i[1]=a;for(var y=2;y<o;y++)i[y]=n[y];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},67929:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(58168),l=(n(96540),n(15680));const o={},i="listConverterInfo",a={type:"api",id:"list-converter-info",unversionedId:"list-converter-info",title:"listConverterInfo",description:"",slug:"/list-converter-info",frontMatter:{},api:{tags:["Converter"],operationId:"listConverterInfo",responses:{200:{description:"OK",content:{"*/*":{schema:{type:"array",items:{required:["cardinality","description","id","parameters"],type:"object",properties:{id:{type:"string"},description:{type:"string"},parameters:{type:"array",items:{required:["description","name","optional"],type:"object",properties:{name:{type:"string"},description:{type:"string"},optional:{type:"boolean"}}}},cardinality:{type:"string",enum:["ONE_TO_ONE","ONE_TO_MANY","MANY_TO_ONE","MANY_TO_MANY"]}}}}}}}},description:"listConverterInfo",method:"get",path:"/api/rest/v1/converters/meta",parameters:[],servers:[{url:"https://ladon.mind-consulting.de/admin",description:"Generated server url"}],info:{title:"Ladon Datacenter Edition",description:"Ladon Datacenter Edition REST API",version:"4.7.85"},postman:{name:"list Converter Info",description:{type:"text/plain"},url:{path:["api","rest","v1","converters","meta"],host:["{{baseUrl}}"],query:[],variable:[]},method:"GET"}},source:"@site/openapi/ladon.json",sourceDirName:".",permalink:"/build/ladon/list-converter-info",previous:{title:"listBuckets_1",permalink:"/build/ladon/list-buckets-1"},next:{title:"applyAndDownloadGet",permalink:"/build/ladon/apply-and-download-get"}},p=[],y={toc:p},s="wrapper";function c(e){let{components:t,...n}=e;return(0,l.yg)(s,(0,r.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"listconverterinfo"},"listConverterInfo"),(0,l.yg)("p",null,"listConverterInfo"),(0,l.yg)("table",{style:{display:"table",width:"100%"}},(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("div",{style:{display:"flex"}},(0,l.yg)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.yg)("code",null,"200")),(0,l.yg)("div",null,(0,l.yg)("p",null,"OK"))),(0,l.yg)("div",null,(0,l.yg)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",{style:{textAlign:"left"}},"Schema ",(0,l.yg)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.yg)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-optional)"}}," OPTIONAL"),(0,l.yg)("div",null)))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("span",{style:{opacity:"0.6"}}," object[]"),(0,l.yg)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"id"),(0,l.yg)("span",{style:{opacity:"0.6"}}," string"))),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"description"),(0,l.yg)("span",{style:{opacity:"0.6"}}," string"))),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"parameters"),(0,l.yg)("span",{style:{opacity:"0.6"}}," object[]"),(0,l.yg)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"name"),(0,l.yg)("span",{style:{opacity:"0.6"}}," string"))),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"description"),(0,l.yg)("span",{style:{opacity:"0.6"}}," string"))),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"optional"),(0,l.yg)("span",{style:{opacity:"0.6"}}," boolean"))))))),(0,l.yg)("tr",null,(0,l.yg)("td",null,(0,l.yg)("code",null,"cardinality"),(0,l.yg)("span",{style:{opacity:"0.6"}}," string"),(0,l.yg)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.yg)("inlineCode",{parentName:"p"},"ONE_TO_ONE"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"ONE_TO_MANY"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"MANY_TO_ONE"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"MANY_TO_MANY"),"]"))))))))))))))))}c.isMDXComponent=!0}}]);