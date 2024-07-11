import{a8 as d,_ as V,aA as y,aq as A,r as l,D as j,F,U as q,b as U,e as O,m as H,p as x,q as o,w as s,W as n,N as W,s as S,P as i,O as u}from"./index-h4E0gBbf.js";import{A as B}from"./appType-xf773rte.js";const G={functionCall:"函数调用",componentCall:"组件调用",preview:"基本使用",callBack:"处理回调函数",basicUse:"基本使用",specifyInitialPosition:"指定初始位置",displayCloseButton:"展示关闭按钮",listenCloseEvents:"监听关闭事件",shutdownEvent:"触发了关闭事件。",preventLongTapDefault:"监听长按事件",preventDefaultEvent:"触发了长按事件",showExtraSlots:"展示额外插槽",operate:"操作"},J={functionCall:"Function Call",componentCall:"Component Call",preview:"Basic usage",callBack:"Handle callback function",basicUse:"Basic usage",specifyInitialPosition:"Specify initial position",displayCloseButton:"Display the close button",listenCloseEvents:"Listen for close event",shutdownEvent:"The shutdown event was triggered.",preventLongTapDefault:"Listen for long press event",preventDefaultEvent:"Long press event is triggered",showExtraSlots:"Show extra slots",operate:"Operate"},{add:D,use:K,t:a,merge:ee}=d.useLocale(),M=w=>{d.use(w),K(w)};d.add("zh-CN",d.zhCN);d.add("en-US",d.enUS);D("zh-CN",G);D("en-US",J);const Q={class:"image-preview-demo"},R={class:"image-preview-demo"},X={__name:"index",setup(w){const p=y.Component,L=A.Component,c=l(!1),f=l(!1),m=l(!1),g=l(!1),C=l(!1),_=l(!0),h=l(!1),k=l(!1),v=l(["cat.jpg","cat2.jpg"]),b=l(["cat.jpg"]),$=j(()=>[{name:a("operate"),icon:"wrench"},{name:a("operate"),icon:"wrench"}]);F(M),q();function N(){S({content:a("shutdownEvent"),duration:1e3})}function P(){S({content:a("preventDefaultEvent"),duration:1e3})}function T(){y(b.value)}function z(){y({images:v,onChange:E=>{S(String(E))}})}return(E,e)=>{const r=U("var-button"),I=U("var-icon");return O(),H(W,null,[x("div",Q,[o(n(B),null,{default:s(()=>[i(u(n(a)("functionCall")),1)]),_:1}),o(r,{type:"primary",block:"",onClick:T},{default:s(()=>[i(u(n(a)("preview")),1)]),_:1}),o(r,{type:"primary",block:"",onClick:z},{default:s(()=>[i(u(n(a)("callBack")),1)]),_:1})]),x("div",R,[o(n(B),null,{default:s(()=>[i(u(n(a)("componentCall")),1)]),_:1}),o(r,{type:"warning",block:"",onClick:e[0]||(e[0]=t=>c.value=!0)},{default:s(()=>[i(u(n(a)("basicUse")),1)]),_:1}),o(n(p),{images:b.value,show:c.value,"onUpdate:show":e[1]||(e[1]=t=>c.value=t)},null,8,["images","show"]),o(r,{type:"warning",block:"",onClick:e[2]||(e[2]=t=>f.value=!0)},{default:s(()=>[i(u(n(a)("specifyInitialPosition")),1)]),_:1}),o(n(p),{images:v.value,show:f.value,"onUpdate:show":e[3]||(e[3]=t=>f.value=t),"initial-index":1},null,8,["images","show"]),o(r,{type:"warning",block:"",onClick:e[4]||(e[4]=t=>m.value=!0)},{default:s(()=>[i(u(n(a)("displayCloseButton")),1)]),_:1}),o(n(p),{images:v.value,show:m.value,"onUpdate:show":e[5]||(e[5]=t=>m.value=t),closeable:!0},null,8,["images","show"]),o(r,{type:"warning",block:"",onClick:e[6]||(e[6]=t=>g.value=!0)},{default:s(()=>[i(u(n(a)("listenCloseEvents")),1)]),_:1}),o(n(p),{images:v.value,show:g.value,"onUpdate:show":e[7]||(e[7]=t=>g.value=t),onClose:N},null,8,["images","show"]),o(r,{type:"warning",block:"",onClick:e[8]||(e[8]=t=>C.value=!0)},{default:s(()=>[i(u(n(a)("preventLongTapDefault")),1)]),_:1}),o(n(p),{images:v.value,show:C.value,"onUpdate:show":e[9]||(e[9]=t=>C.value=t),"image-prevent-default":_.value,onLongPress:P},null,8,["images","show","image-prevent-default"]),o(r,{type:"warning",block:"",onClick:e[10]||(e[10]=t=>h.value=!0)},{default:s(()=>[i(u(n(a)("showExtraSlots")),1)]),_:1}),o(n(p),{images:v.value,show:h.value,"onUpdate:show":e[13]||(e[13]=t=>h.value=t)},{extra:s(()=>[o(I,{name:"menu",size:22,color:"#fff",onClick:e[11]||(e[11]=t=>k.value=!0)}),o(n(L),{actions:$.value,show:k.value,"onUpdate:show":e[12]||(e[12]=t=>k.value=t)},null,8,["actions","show"])]),_:1},8,["images","show"])])],64)}}},te=V(X,[["__scopeId","data-v-3e59ea36"]]);export{te as default};
