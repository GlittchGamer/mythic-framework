"use strict";(self.webpackChunkmythic_phone=self.webpackChunkmythic_phone||[]).push([[430,8894,1748],{20430:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var n=r(89526),a=r(92070),o=r(91153),l=r(78894),i=r(32165),c=r(77548),u=r(81939),s=r(16025),m=r(23646),f=r(71529),y=r(57170),p=r(30909),d=r(21447),b=r(20785),v=r(11781),g=r(87961);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t,r,n,a,o,l){try{var i=e[o](l),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){i=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var O=(0,f.Z)((function(e){return{icon:{background:"#b0e655"},coin:{"& small":{fontSize:12,color:"#b0e655"}},editorField:{marginBottom:15}}}));const j=function(e){var t=e.coin,r=O(),f=(0,g.VY)(),h=((0,a.v9)((function(e){return e.data.data.player})),w((0,n.useState)(!1),2)),E=h[0],j=h[1],x=w((0,n.useState)(!1),2),I=x[0],N=x[1],A=function(){var e,r=(e=regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,d.Z.send("BuyCrypto",{Short:t.Short,Quantity:I.Quantity});case 4:return e.next=6,e.sent.json();case 6:e.sent.error?f("Unable to Buy ".concat(t.Name)):(f("Purchased ".concat(t.Name)),N(null)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),f("Unable to Buy ".concat(t.Name));case 14:N(null),j(!1);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){S(o,n,a,l,i,"next",e)}function i(e){S(o,n,a,l,i,"throw",e)}l(void 0)}))});return function(e){return r.apply(this,arguments)}}();return n.createElement(n.Fragment,null,n.createElement(o.ZP,null,n.createElement(l.Z,null,n.createElement(i.Z,{className:r.icon},n.createElement(y.G,{icon:["fab","bitcoin"]}))),n.createElement(c.Z,{primary:n.createElement("span",{className:r.coin},t.Name," (",n.createElement("small",null,n.createElement("i",null,"$",t.Short)),")"),secondary:t.Price>0?"Buying Price: $".concat(t.Price,"/coin"):null}),n.createElement(u.Z,null,n.createElement(s.Z,{onClick:function(){N({Price:t.Price,Quantity:1})}},n.createElement(y.G,{icon:["fas","bag-shopping"]})))),Boolean(I)&&n.createElement(b.u_,{form:!0,formStyle:{position:"relative"},open:!0,title:"Buy $".concat(t.Short),onClose:function(){return N(null)},onAccept:A,submitLang:"Buy ".concat(t.Name),closeLang:"Cancel"},n.createElement(n.Fragment,null,E&&n.createElement(b.aN,{static:!0,text:"Buying"}),n.createElement(m.Z,Z({fullWidth:!0,label:"Price Per Unit",disabled:!0,className:r.editorField,value:I.Price},"value",v.A3.format(I.Price))),n.createElement(p.Z,{fullWidth:!0,required:!0,label:"Quantity",className:r.editorField,value:I.Quantity,disabled:E,onChange:function(e){return N(P(P({},I),{},{Quantity:+e.target.value}))},type:"tel",isNumericString:!0,customInput:m.Z}),n.createElement(m.Z,{fullWidth:!0,label:"You Will Pay",disabled:!0,className:r.editorField,value:v.A3.format(I.Price*I.Quantity)}))))}},78894:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(71972),a=r(17692),o=r(89526),l=r(23060),i=r(82082),c=r(31946),u=r(47671),s=r(26966),m=r(24989);function f(e){return(0,m.Z)("MuiListItemAvatar",e)}(0,r(36787).Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var y=r(67557);const p=["className"],d=(0,u.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,"flex-start"===r.alignItems&&t.alignItemsFlexStart]}})((({ownerState:e})=>(0,a.Z)({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8}))),b=o.forwardRef((function(e,t){const r=(0,s.Z)({props:e,name:"MuiListItemAvatar"}),{className:u}=r,m=(0,n.Z)(r,p),b=o.useContext(c.Z),v=(0,a.Z)({},r,{alignItems:b.alignItems}),g=(e=>{const{alignItems:t,classes:r}=e,n={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,i.Z)(n,f,r)})(v);return(0,y.jsx)(d,(0,a.Z)({className:(0,l.Z)(g.root,u),ownerState:v,ref:t},m))}))}}]);