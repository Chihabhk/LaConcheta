"use strict";(self.webpackChunklaconcheta=self.webpackChunklaconcheta||[]).push([[711],{2527:(e,r,n)=>{n.d(r,{j:()=>a});var t=n(2791);const a=e=>{(0,t.useEffect)((()=>{document.title=e}),[e])}},2711:(e,r,n)=>{n.r(r),n.d(r,{default:()=>C});var t=n(2791),a=n(4420),i=n(7689),o=n(8650),l=n(7910),c=n(2065),s=n(3168),d=n(4691),x=n(4934),h=n(9739),m=n(202),b=n(1196),u=n(5370),g=n(8087),p=n(3994),j=n(184);const f=e=>{let{item:r}=e;const n=(0,a.I0)(),{cartItems:t}=(0,a.v9)((e=>e.menu)),i=t.find((e=>e.id===r.id)),o=i?i.quantity:0;return(0,j.jsxs)(x.Z,{variant:"plain",color:"warning",sx:{cursor:"pointer",marginBottom:1,backgroundColor:"#F2E3CA",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,j.jsxs)(h.Z,{children:[(0,j.jsx)(s.ZP,{level:"h2",color:"warning",fontSize:18,children:r.name}),(0,j.jsx)(s.ZP,{level:"body-sm",children:r.description})]}),(0,j.jsxs)(h.Z,{orientation:"horizontal",sx:{alignContent:"center",alignItems:"center",justifyContent:"space-between"},children:[(0,j.jsxs)(s.ZP,{level:"body-md",color:"warning",children:["Precio:",(0,j.jsx)(s.ZP,{level:"body-md",children:" "+r.price})]}),(0,j.jsxs)(m.Z,{sx:{p:0,justifyContent:"flex-end",alignContent:"center",alignItems:"center"},children:[(0,j.jsx)(b.ZP,{variant:o>0?"solid":"",color:o>0?"warning":"","aria-label":"Delete from cart",onClick:()=>n((0,p.Cn)(r)),children:(0,j.jsx)(u.Z,{})}),(0,j.jsx)(s.ZP,{level:"body-2",color:"warning",fontStyle:0===o?"italic":"bold",fontSize:16,children:o}),(0,j.jsx)(b.ZP,{variant:o>0?"solid":"",color:o>0?"warning":"","aria-label":"Add to cart",onClick:()=>n((0,p.dm)(r)),children:(0,j.jsx)(g.Z,{})})]})]})]})};var w=n(2527);const C=function(){(0,w.j)("LaConcheta - Carta de la casa");const{menuCategories:e}=(0,a.v9)((e=>e.menu)),r=(0,i.s0)(),{categoryName:n}=(0,i.UO)(),x=Object.keys(e).indexOf(n),[h,m]=(0,t.useState)(-1===x?2:x);return(0,t.useEffect)((()=>{m(-1===x?2:x)}),[x]),(0,j.jsxs)(o.Z,{"aria-label":"Vertical tabs",orientation:"vertical",onChange:(n,t)=>{r("/carta/".concat(Object.keys(e)[t]))},value:h,sx:{backgroundColor:"transparent",marginLeft:"8rem",marginRight:"0.8rem"},children:[(0,j.jsx)(l.Z,{sx:{position:"fixed",top:"8rem","&::-webkit-scrollbar":{display:"none"},width:"7rem",ml:"-7.2rem",gap:"0.8rem",overflowY:"auto",scrollbarWidth:"thin","&::-webkit-scrollbar-thumb":{backgroundColor:"warning"},maxHeight:"calc(100vh - 9.5rem )",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"},children:Object.entries(e).map(((e,r)=>{let[n]=e;return(0,j.jsx)(c.Z,{color:"warning",sx:{width:"100%",minHeight:"3rem",textAlign:"center",backgroundColor:"#F2E3CA",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius:"8px",p:"2em 10px","&.Mui-selected":{backgroundColor:"#d6b99487"}},children:(0,j.jsx)(s.ZP,{level:"h4",sx:{color:h===r?"#f5e3c5":"inherit"},children:n})},r)}))}),Object.entries(e).map(((e,r)=>{let[n,t]=e;return(0,j.jsx)(d.Z,{value:r,sx:{ml:"0.8em",mr:"0.3rem",p:0,width:"100%"},children:t.data.map(((e,r)=>(0,j.jsx)(f,{item:e},r)))},n)}))]})}}}]);
//# sourceMappingURL=711.5ed90604.chunk.js.map