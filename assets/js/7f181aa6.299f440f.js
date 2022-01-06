"use strict";(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[2191],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4916:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],p={id:"map-mutate",title:"Map Mutation",sidebar_label:"Map Mutation"},c=void 0,u={unversionedId:"misc/map-mutate",id:"misc/map-mutate",title:"Map Mutation",description:"@automapper/core provides a way to map mutate a Destination.",source:"@site/docs/misc/map-mutate.md",sourceDirName:"misc",slug:"/misc/map-mutate",permalink:"/docs/misc/map-mutate",editUrl:"https://github.com/nartc/mapper/tree/main/docs-site/docs/misc/map-mutate.md",tags:[],version:"current",lastUpdatedBy:"Chau Tran",lastUpdatedAt:1610056728,formattedLastUpdatedAt:"1/7/2021",frontMatter:{id:"map-mutate",title:"Map Mutation",sidebar_label:"Map Mutation"},sidebar:"docs",previous:{title:"Callbacks",permalink:"/docs/misc/callbacks"},next:{title:"ErrorHandler",permalink:"/docs/misc/error-handler"}},s=[],l={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@automapper/core")," provides a way to ",(0,o.kt)("em",{parentName:"p"},"map mutate")," a ",(0,o.kt)("strong",{parentName:"p"},"Destination"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const sourceObj = getSourceFromSomewhere();\nconst destinationObj = getDestinationFromSomewhere();\n\nmapper.map(sourceObj, Destination, Source, destinationObj);\n")),(0,o.kt)("p",null,"The above snippet shows an overload of ",(0,o.kt)("inlineCode",{parentName:"p"},"map()")," that would allow for mapping ",(0,o.kt)("inlineCode",{parentName:"p"},"destinationObj")," mutably. This overload of ",(0,o.kt)("inlineCode",{parentName:"p"},"map()")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"void")," function because it will not return anything."))}m.isMDXComponent=!0}}]);