"use strict";(self.webpackChunklaconcheta=self.webpackChunklaconcheta||[]).push([[306],{3650:(t,e,o)=>{o.d(e,{Z:()=>p});var r=o(4420),i=o(4934),n=o(9739),a=o(3168),c=o(5740),l=o(1196),s=o(5370),d=o(8087),m=o(4970),h=o(184);const p=t=>{let{item:e}=t;const o=(0,r.I0)(),{cartItems:p}=(0,r.v9)((t=>t.menu)),x=p.find((t=>t.name===e.name)),v=x?x.quantity:0;return(0,h.jsxs)(i.Z,{variant:"outlined",sx:{cursor:"pointer",m:"1em"},children:[(0,h.jsx)(n.Z,{children:(0,h.jsx)(a.ZP,{level:"h3",fontSize:"1.5rem",children:e.name})}),(0,h.jsx)(n.Z,{children:(0,h.jsx)(a.ZP,{level:"body-md",children:e.description})}),(0,h.jsxs)(n.Z,{orientation:"horizontal",children:[(0,h.jsxs)(a.ZP,{level:"body-md",flex:"1",children:["Precio:"," "+e.price]}),(0,h.jsxs)(c.Z,{children:[(0,h.jsx)(l.ZP,{"aria-label":"Delete from cart",onClick:()=>o((0,m.Cn)(e)),children:(0,h.jsx)(s.Z,{})}),(0,h.jsx)(a.ZP,{level:"body-2",color:"neutral",children:v}),(0,h.jsx)(l.ZP,{"aria-label":"Add to cart",onClick:()=>o((0,m.dm)(e)),children:(0,h.jsx)(d.Z,{})})]})]})]},e.name)}},2527:(t,e,o)=>{o.d(e,{j:()=>i});var r=o(2791);const i=t=>{(0,r.useEffect)((()=>{document.title=t}),[t])}},1306:(t,e,o)=>{o.r(e),o.d(e,{default:()=>s});var r=o(4420),i=o(2527),n=o(3650),a=o(2552),c=o(3168),l=o(184);const s=()=>{(0,i.j)("LaConcheta - Carrito");const{cartItems:t}=(0,r.v9)((t=>t.menu)),e=t.reduce(((t,e)=>t+parseInt(e.price.match(/\d+/),10)*e.quantity),0);return(0,l.jsxs)(l.Fragment,{children:[t.map(((t,e)=>(0,l.jsx)(n.Z,{item:t},e))),(0,l.jsx)(a.Z,{ratio:"12/4",sx:{backgroundColor:"blue"},children:(0,l.jsxs)(c.ZP,{level:"h3",fontSize:"1.5rem",children:["Total = ",e," \u20ac"]})})]})}},2552:(t,e,o)=>{o.d(e,{Z:()=>g});var r=o(3366),i=o(7462),n=o(2791),a=o(4419),c=o(1122),l=o(5051),s=o(8518),d=o(2054),m=o(7637);function h(t){return(0,m.d6)("MuiAspectRatio",t)}(0,m.sI)("MuiAspectRatio",["root","content","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);var p=o(184);const x=["children","ratio","minHeight","maxHeight","objectFit","color","variant","component","flex","slots","slotProps"],v=(0,d.Z)("div",{name:"JoyAspectRatio",slot:"Root",overridesResolver:(t,e)=>e.root})((t=>{let{ownerState:e,theme:o}=t;const r="number"===typeof e.minHeight?"".concat(e.minHeight,"px"):e.minHeight,i="number"===typeof e.maxHeight?"".concat(e.maxHeight,"px"):e.maxHeight;return{"--AspectRatio-paddingBottom":"clamp(var(--AspectRatio-minHeight), calc(100% / (".concat(e.ratio,")), var(--AspectRatio-maxHeight))"),"--AspectRatio-maxHeight":i||"9999px","--AspectRatio-minHeight":r||"0px","--Icon-color":"neutral"!==e.color||"solid"===e.variant?"currentColor":o.vars.palette.text.icon,borderRadius:"var(--AspectRatio-radius)",display:e.flex?"flex":"block",flex:e.flex?1:"initial",flexDirection:"column",margin:"var(--AspectRatio-margin)"}})),u=(0,d.Z)("div",{name:"JoyAspectRatio",slot:"Content",overridesResolver:(t,e)=>e.content})((t=>{let{theme:e,ownerState:o}=t;var r;return(0,i.Z)({flex:1,position:"relative",borderRadius:"inherit",height:0,paddingBottom:"calc(var(--AspectRatio-paddingBottom) - 2 * var(--variant-borderWidth, 0px))",overflow:"hidden",transition:"inherit","& [data-first-child]":{display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",position:"absolute",width:"100%",height:"100%",objectFit:o.objectFit,margin:0,padding:0,"& > img":{width:"100%",height:"100%",objectFit:o.objectFit}}},e.typography["body-md"],null==(r=e.variants[o.variant])?void 0:r[o.color])})),g=n.forwardRef((function(t,e){const o=(0,l.Z)({props:t,name:"JoyAspectRatio"}),{children:d,ratio:m="16 / 9",minHeight:g,maxHeight:f,objectFit:Z="cover",color:j="neutral",variant:b="soft",component:y,flex:R=!1,slots:H={},slotProps:P={}}=o,A=(0,r.Z)(o,x),C=(0,i.Z)({},o,{flex:R,minHeight:g,maxHeight:f,objectFit:Z,ratio:m,color:j,variant:b}),w=(t=>{const{variant:e,color:o}=t,r={root:["root"],content:["content",e&&"variant".concat((0,c.Z)(e)),o&&"color".concat((0,c.Z)(o))]};return(0,a.Z)(r,h,{})})(C),F=(0,i.Z)({},A,{component:y,slots:H,slotProps:P}),[S,k]=(0,s.Z)("root",{ref:e,className:w.root,elementType:v,externalForwardedProps:F,ownerState:C}),[I,z]=(0,s.Z)("content",{className:w.content,elementType:u,externalForwardedProps:F,ownerState:C});return(0,p.jsx)(S,(0,i.Z)({},k,{children:(0,p.jsx)(I,(0,i.Z)({},z,{children:n.Children.map(d,((t,e)=>0===e&&n.isValidElement(t)?n.cloneElement(t,{"data-first-child":""}):t))}))}))}))}}]);
//# sourceMappingURL=306.9f57c9e1.chunk.js.map