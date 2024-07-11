import{an as r,r as _,E as z,a6 as k,ao as w,b as C,e as d,m as N,q as i,w as e,S as a,N as R,P as l,O as t,f as g,t as y}from"./index-vwO9GBzB.js";import{A as o}from"./appType-fkxN3UmL.js";const x={chipType:"纸片类型",defaultChip:"默认纸片",primaryChip:"主要纸片",infoChip:"信息纸片",successChip:"成功纸片",warningChip:"警告纸片",dangerChip:"危险纸片",plainChip:"空心纸片",nonRoundChip:"非圆角纸片",chipSize:"纸片尺寸",largeChip:"大型纸片",normalChip:"常规纸片",smallChip:"小型纸片",miniChip:"迷你纸片",blockChip:"块级纸片",canCloseChip:"可关闭纸片",customCloseIcon:"自定义关闭图标",customColor:"自定义颜色",chip:"纸片",addSlot:"添加插槽",leftSlot:"左侧插槽",rightSlot:"右侧插槽",leftAndRightSlot:"左右两侧插槽"},b={chipType:"Chip Type",defaultChip:"Default Chip",primaryChip:"Primary Chip",infoChip:"Info Chip",successChip:"Success Chip",warningChip:"Warning Chip",dangerChip:"Danger Chip",plainChip:"Plain Chip",nonRoundChip:"Non Round Chip",chipSize:"Chip Size",largeChip:"Large Chip",normalChip:"Normal Chip",smallChip:"Small Chip",miniChip:"Mini Chip",blockChip:"Block Chip",canCloseChip:"Can Close Chip",customCloseIcon:"Custom Close Icon",customColor:"Custom Color",chip:"Chip",addSlot:"Add Slot",leftSlot:"Left Slot",rightSlot:"Right Slot",leftAndRightSlot:"Left And Right Slot"},{add:v,use:A,pack:n,packs:B,merge:D}=r.useLocale(),T=c=>{r.use(c),A(c)};r.add("zh-CN",r.zhCN);r.add("en-US",r.enUS);v("zh-CN",x);v("en-US",b);const P={__name:"index",setup(c){const f=_(!0),m=_(!0);return z(T),k(w.dark),(I,u)=>{const p=C("var-chip"),s=C("var-space"),h=C("var-icon");return d(),N(R,null,[i(a(o),null,{default:e(()=>[l(t(a(n).chipType),1)]),_:1}),i(s,{size:["2.666vmin","2.666vmin"]},{default:e(()=>[i(p,null,{default:e(()=>[l(t(a(n).defaultChip),1)]),_:1}),i(p,{type:"primary"},{default:e(()=>[l(t(a(n).primaryChip),1)]),_:1}),i(p,{type:"success"},{default:e(()=>[l(t(a(n).successChip),1)]),_:1}),i(p,{type:"danger"},{default:e(()=>[l(t(a(n).dangerChip),1)]),_:1}),i(p,{type:"warning"},{default:e(()=>[l(t(a(n).warningChip),1)]),_:1}),i(p,{type:"info"},{default:e(()=>[l(t(a(n).infoChip),1)]),_:1})]),_:1}),i(a(o),null,{default:e(()=>[l(t(a(n).plainChip),1)]),_:1}),i(s,{size:["2.666vmin","2.666vmin"]},{default:e(()=>[i(p,{plain:""},{default:e(()=>[l(t(a(n).defaultChip),1)]),_:1}),i(p,{plain:"",type:"primary"},{default:e(()=>[l(t(a(n).primaryChip),1)]),_:1}),i(p,{plain:"",type:"success"},{default:e(()=>[l(t(a(n).successChip),1)]),_:1}),i(p,{plain:"",type:"danger"},{default:e(()=>[l(t(a(n).dangerChip),1)]),_:1}),i(p,{plain:"",type:"warning"},{default:e(()=>[l(t(a(n).warningChip),1)]),_:1}),i(p,{plain:"",type:"info"},{default:e(()=>[l(t(a(n).infoChip),1)]),_:1})]),_:1}),i(a(o),null,{default:e(()=>[l(t(a(n).nonRoundChip),1)]),_:1}),i(p,{round:!1,type:"primary"},{default:e(()=>[l(t(a(n).nonRoundChip),1)]),_:1}),i(a(o),null,{default:e(()=>[l(t(a(n).chipSize),1)]),_:1}),i(s,{align:"center",size:["2.666vmin","2.666vmin"]},{default:e(()=>[i(p,{type:"primary"},{default:e(()=>[l(t(a(n).normalChip),1)]),_:1}),i(p,{type:"success",size:"small"},{default:e(()=>[l(t(a(n).smallChip),1)]),_:1}),i(p,{type:"warning",size:"mini"},{default:e(()=>[l(t(a(n).miniChip),1)]),_:1}),i(p,{type:"danger",size:"large"},{default:e(()=>[l(t(a(n).largeChip),1)]),_:1})]),_:1}),i(a(o),null,{default:e(()=>[l(t(a(n).blockChip),1)]),_:1}),i(p,{type:"primary",block:""},{default:e(()=>[l(t(a(n).blockChip),1)]),_:1}),i(a(o),null,{default:e(()=>[l(t(a(n).canCloseChip),1)]),_:1}),i(s,{size:["2.666vmin","2.666vmin"]},{default:e(()=>[f.value?(d(),g(p,{key:0,closeable:"",onClose:u[0]||(u[0]=S=>f.value=!1)},{default:e(()=>[l(t(a(n).canCloseChip),1)]),_:1})):y("v-if",!0),m.value?(d(),g(p,{key:1,closeable:"","icon-name":"delete",onClose:u[1]||(u[1]=S=>m.value=!1)},{default:e(()=>[l(t(a(n).customCloseIcon),1)]),_:1})):y("v-if",!0)]),_:1}),i(a(o),null,{default:e(()=>[l(t(a(n).customColor),1)]),_:1}),i(s,{size:["2.666vmin","2.666vmin"]},{default:e(()=>[i(p,{color:"#009688","text-color":"#fff"},{default:e(()=>[l(t(a(n).chip),1)]),_:1}),i(p,{color:"#009688",plain:""},{default:e(()=>[l(t(a(n).chip),1)]),_:1}),i(p,{color:"#faecd8","text-color":"#e6a23c",plain:""},{default:e(()=>[l(t(a(n).chip),1)]),_:1}),i(p,{color:"#faecd8","text-color":"#e6a23c"},{default:e(()=>[l(t(a(n).chip),1)]),_:1})]),_:1}),i(a(o),null,{default:e(()=>[l(t(a(n).addSlot),1)]),_:1}),i(s,{size:["2.666vmin","2.666vmin"]},{default:e(()=>[i(p,null,{left:e(()=>[i(h,{name:"star"})]),default:e(()=>[l(t(a(n).leftSlot)+" ",1)]),_:1}),i(p,null,{right:e(()=>[i(h,{name:"fire"})]),default:e(()=>[l(t(a(n).rightSlot)+" ",1)]),_:1}),i(p,null,{left:e(()=>[i(h,{name:"account-circle"})]),right:e(()=>[i(h,{name:"cake-variant"})]),default:e(()=>[l(t(a(n).leftAndRightSlot)+" ",1)]),_:1})]),_:1})],64)}}};export{P as default};
