"use strict";(self.webpackChunklaconcheta=self.webpackChunklaconcheta||[]).push([[711],{2527:(e,n,r)=>{r.d(n,{j:()=>a});var t=r(2791);const a=e=>{(0,t.useEffect)((()=>{document.title=e}),[e])}},2711:(e,n,r)=>{r.r(n),r.d(n,{default:()=>v});var t=r(2791),a=r(4420),i=r(7689),l=r(8650),o=r(7910),c=r(2065),s=r(3168),d=r(4691),x=r(4934),m=r(9739),h=r(202),b=r(1196),g=r(5370),u=r(8087),j=r(4970),p=r(184);const f=e=>{let{item:n}=e;const r=(0,a.I0)(),{cartItems:t}=(0,a.v9)((e=>e.menu)),i=t.find((e=>e.id===n.id)),l=i?i.quantity:0;return(0,p.jsxs)(x.Z,{variant:"plain",color:"warning",sx:{cursor:"pointer",marginBottom:1,backgroundColor:"#F2E3CA",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,p.jsxs)(m.Z,{children:[(0,p.jsx)(s.ZP,{level:"h2",color:"warning",fontSize:24,fontFamily:"arial",children:n.name}),(0,p.jsx)(s.ZP,{level:"body-sm",children:n.description})]}),(0,p.jsxs)(m.Z,{orientation:"horizontal",sx:{alignContent:"center",alignItems:"center",justifyContent:"space-between"},children:[(0,p.jsxs)(s.ZP,{level:"body-md",color:"warning",fontWeight:"bold",children:["Precio:",(0,p.jsx)(s.ZP,{level:"body-md",children:" "+n.price})]}),(0,p.jsxs)(h.Z,{sx:{p:0,justifyContent:"flex-end",alignContent:"center",alignItems:"center"},children:[(0,p.jsx)(b.ZP,{variant:l>0?"solid":"",color:l>0?"warning":"","aria-label":"Delete from cart",onClick:()=>r((0,j.Cn)(n)),children:(0,p.jsx)(g.Z,{})}),(0,p.jsx)(s.ZP,{level:"body-2",color:"warning",fontStyle:0===l?"italic":"bold",fontSize:16,children:l}),(0,p.jsx)(b.ZP,{variant:l>0?"solid":"",color:l>0?"warning":"","aria-label":"Add to cart",onClick:()=>r((0,j.dm)(n)),children:(0,p.jsx)(u.Z,{})})]})]})]})};var C=r(2527);const v=function(){(0,C.j)("LaConcheta - Carta de la casa");const{menuCategories:e}=(0,a.v9)((e=>e.menu)),n=(0,i.s0)(),{categoryName:r}=(0,i.UO)(),x=Object.keys(e).indexOf(r),[m,h]=(0,t.useState)(-1===x?2:x);return(0,t.useEffect)((()=>{h(-1===x?2:x)}),[x]),(0,p.jsxs)(l.Z,{"aria-label":"Vertical tabs",orientation:"vertical",onChange:(r,t)=>{n("/carta/".concat(Object.keys(e)[t]))},value:m,sx:{backgroundColor:"transparent",marginLeft:"8rem",marginRight:"0.8rem"},children:[(0,p.jsx)(o.Z,{sx:{position:"fixed",top:"8rem","&::-webkit-scrollbar":{display:"none"},width:"7rem",ml:"-7.2rem",gap:"0.8rem",overflowY:"auto",scrollbarWidth:"thin","&::-webkit-scrollbar-thumb":{backgroundColor:"warning"},maxHeight:"calc(100vh - 9.5rem )"},children:Object.entries(e).map(((e,n)=>{let[r,t]=e;return(0,p.jsx)(c.Z,{color:"warning",sx:{width:"100%",minHeight:"3rem",textAlign:"center",backgroundColor:"#F2E3CA",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",borderRadius:"8px",p:"2em 10px","&.Mui-selected":{backgroundColor:"#d6b99487"}},children:(0,p.jsx)(s.ZP,{level:"h4",textAlign:"left",fontFamily:"arial",sx:{color:m===n?"#f5e3c5":"inherit"},children:r})},t.id)}))}),Object.entries(e).map(((e,n)=>{let[r,t]=e;return(0,p.jsx)(d.Z,{value:n,sx:{ml:"0.8em",mr:"0.3rem",p:0,width:"100%"},children:t.data.map((e=>(0,p.jsx)(f,{item:e},e.id)))},t.id)}))]})}}}]);
//# sourceMappingURL=711.80687884.chunk.js.map