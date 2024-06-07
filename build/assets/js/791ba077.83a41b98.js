"use strict";(self.webpackChunkladon_docu=self.webpackChunkladon_docu||[]).push([[5407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,k=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?o.createElement(k,c(c({ref:t},s),{},{components:n})):o.createElement(k,c({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={},c="Document Change Hooks",i={unversionedId:"Backend Concepts/DocumentChangeHook",id:"Backend Concepts/DocumentChangeHook",title:"Document Change Hooks",description:"Concepts",source:"@site/docs/Backend Concepts/DocumentChangeHook.md",sourceDirName:"Backend Concepts",slug:"/Backend Concepts/DocumentChangeHook",permalink:"/doc/docs/Backend Concepts/DocumentChangeHook",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Backend Concepts/DocumentChangeHook.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Document Data Model",permalink:"/doc/docs/Backend Concepts/Document"},next:{title:"Encryption",permalink:"/doc/docs/Backend Concepts/Encryption"}},l={},u=[{value:"Concepts",id:"concepts",level:2},{value:"Known Issues",id:"known-issues",level:2}],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"document-change-hooks"},"Document Change Hooks"),(0,r.kt)("h2",{id:"concepts"},"Concepts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change hooks intercept between actions on documents."),(0,r.kt)("li",{parentName:"ul"},"Multiple changehooks can be applied one after another."),(0,r.kt)("li",{parentName:"ul"},"Every action on the LadonRepository is matched against all hooks to check whether to apply it or not."),(0,r.kt)("li",{parentName:"ul"},"The return value determines whether to stop or continue with other potential hooks or the default action."),(0,r.kt)("li",{parentName:"ul"},"Hooks can be defined via DI or OSGI plugins.")),(0,r.kt)("h2",{id:"known-issues"},"Known Issues"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Since every document action is checked against all hooks performance is important."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("em",{parentName:"li"},"matches")," method must be implemented with little overhead."),(0,r.kt)("li",{parentName:"ul"},"Also every hook needs to ensure safe operation since blocking can occur otherwise.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface DocumentChangeHook : Sortable {\n\n    fun matches(bucket: String,key: String,): Boolean\n\n    fun onBeforeCreateObject(bucket: String, key: String, metadata: MutableMap<String, String>): Boolean\n\n    fun onAfterCreateObject(bucket: String, key: String, after: Document): Boolean\n\n    fun onBeforeDeleteObject(bucket: String, key: String): Boolean\n\n    fun onAfterDeleteObject(bucket: String, key: String): Boolean\n\n}\n")))}m.isMDXComponent=!0}}]);