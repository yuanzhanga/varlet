import{a8 as r,r as i,F as V,U as $,b as h,e as E,m as T,q as l,w as o,W as a,N as A,s as w,P as u,O as s,f as L,t as P}from"./index-h4E0gBbf.js";import{A as v}from"./appType-xf773rte.js";const q={basicUsage:"基本使用",matchByName:"通过名称匹配",showBadge:"徽标提示",customColor:"自定义颜色",changeEvent:"监听切换事件",clickEvent:"监听点击事件",fab:"悬浮按钮",label:"标签",variant:"变体"},D={basicUsage:"Basic Usage",matchByName:"Match By Name",showBadge:"Show Badge",customColor:"Custom Color",changeEvent:"Change Event",clickEvent:"Click Event",fab:"Fab",label:"label",variant:"Variant"},{add:x,use:M,t:e,merge:G}=r.useLocale(),O=f=>{r.use(f),M(f)};r.add("zh-CN",r.zhCN);r.add("en-US",r.enUS);x("zh-CN",q);x("en-US",D);const H={__name:"index",setup(f){const p=i(0),C=i("home"),_=i(0),S={type:"primary",value:"66"},y=i(0),U=i(0),k=i(0),B=i(0),g=i(!0),N=i(0);V(O),$();function z(d){w.info(`changed to ${d}`)}function m(d){w.success(`clicked ${d}`)}return(d,t)=>{const n=h("var-bottom-navigation-item"),b=h("var-bottom-navigation"),F=h("var-icon");return E(),T(A,null,[l(a(v),null,{default:o(()=>[u(s(a(e)("basicUsage")),1)]),_:1}),l(b,{active:p.value,"onUpdate:active":t[0]||(t[0]=c=>p.value=c)},{default:o(()=>[l(n,{label:a(e)("label"),icon:"home"},null,8,["label"]),l(n,{label:a(e)("label"),icon:"magnify"},null,8,["label"]),l(n,{label:a(e)("label"),icon:"heart"},null,8,["label"]),l(n,{label:a(e)("label"),icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(a(v),null,{default:o(()=>[u(s(a(e)("matchByName")),1)]),_:1}),l(b,{active:C.value,"onUpdate:active":t[1]||(t[1]=c=>C.value=c)},{default:o(()=>[l(n,{name:"home",label:a(e)("label"),icon:"home"},null,8,["label"]),l(n,{name:"search",label:a(e)("label"),icon:"magnify"},null,8,["label"]),l(n,{name:"heart",label:a(e)("label"),icon:"heart"},null,8,["label"]),l(n,{name:"user",label:a(e)("label"),icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(a(v),null,{default:o(()=>[u(s(a(e)("showBadge")),1)]),_:1}),l(b,{active:_.value,"onUpdate:active":t[2]||(t[2]=c=>_.value=c)},{default:o(()=>[l(n,{label:a(e)("label"),icon:"home"},null,8,["label"]),l(n,{label:a(e)("label"),icon:"magnify",badge:""},null,8,["label"]),l(n,{label:a(e)("label"),icon:"heart",badge:S},null,8,["label"]),l(n,{label:a(e)("label"),icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(a(v),null,{default:o(()=>[u(s(a(e)("customColor")),1)]),_:1}),l(b,{"active-color":"var(--color-warning)",active:y.value,"onUpdate:active":t[3]||(t[3]=c=>y.value=c)},{default:o(()=>[l(n,{label:a(e)("label"),icon:"home"},null,8,["label"]),l(n,{label:a(e)("label"),icon:"magnify"},null,8,["label"]),l(n,{label:a(e)("label"),icon:"heart"},null,8,["label"]),l(n,{label:a(e)("label"),icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(a(v),null,{default:o(()=>[u(s(a(e)("changeEvent")),1)]),_:1}),l(b,{active:U.value,"onUpdate:active":t[4]||(t[4]=c=>U.value=c),onChange:z},{default:o(()=>[l(n,{label:a(e)("label"),icon:"home"},null,8,["label"]),l(n,{label:a(e)("label"),icon:"magnify"},null,8,["label"]),l(n,{label:a(e)("label"),icon:"heart"},null,8,["label"]),l(n,{label:a(e)("label"),icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(a(v),null,{default:o(()=>[u(s(a(e)("clickEvent")),1)]),_:1}),l(b,{active:k.value,"onUpdate:active":t[5]||(t[5]=c=>k.value=c)},{default:o(()=>[l(n,{onClick:m,label:a(e)("label"),icon:"home"},null,8,["label"]),l(n,{onClick:m,label:a(e)("label"),icon:"magnify"},null,8,["label"]),l(n,{onClick:m,label:a(e)("label"),icon:"heart"},null,8,["label"]),l(n,{onClick:m,label:a(e)("label"),icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(a(v),null,{default:o(()=>[u(s(a(e)("fab")),1)]),_:1}),l(b,{active:B.value,"onUpdate:active":t[6]||(t[6]=c=>B.value=c),onFabClick:t[7]||(t[7]=c=>g.value=!g.value),style:{"margin-top":"10px"}},{fab:o(()=>[l(F,{name:"heart"})]),default:o(()=>[l(n,{label:a(e)("label"),icon:"home"},null,8,["label"]),l(n,{label:a(e)("label"),icon:"magnify"},null,8,["label"]),l(n,{label:a(e)("label"),icon:"heart"},null,8,["label"]),l(n,{label:a(e)("label"),icon:"bell"},null,8,["label"]),g.value?P("v-if",!0):(E(),L(n,{key:0,label:a(e)("label"),icon:"account-circle"},null,8,["label"]))]),_:1},8,["active"]),l(a(v),null,{default:o(()=>[u(s(a(e)("variant")),1)]),_:1}),l(b,{variant:"",active:N.value,"onUpdate:active":t[8]||(t[8]=c=>N.value=c)},{default:o(()=>[l(n,{label:a(e)("label"),icon:"home"},null,8,["label"]),l(n,{label:a(e)("label"),icon:"magnify"},null,8,["label"]),l(n,{label:a(e)("label"),icon:"heart"},null,8,["label"]),l(n,{label:a(e)("label"),icon:"account-circle"},null,8,["label"])]),_:1},8,["active"])],64)}}};export{H as default};
