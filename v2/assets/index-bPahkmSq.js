import{an as c,_ as A,r as T,E as B,a6 as N,ao as z,b as u,e as v,m as w,q as t,w as e,S as o,p as h,N as S,P as l,O as n,R as D,f as I,s as m,$ as O,a0 as M}from"./index-vwO9GBzB.js";import{A as r}from"./appType-fkxN3UmL.js";const E={basicUsage:"基本使用",contentSlot:"内容插槽",alignmentMethods:"对齐方式",topAlignment:"顶部对齐",tooltip:"tooltip",bottomAlignment:"底部对齐",offset:"偏移量",events:"注册事件",disabled:"禁用提示",placement:"弹出位置",trigger:"触发方式",twoWayBinding:"双向绑定",themeColorTooltip:"主题色",defaultTooltip:"默认",primaryTooltip:"主要",infoTooltip:"信息",successTooltip:"成功",warningTooltip:"警告",dangerTooltip:"危险",customColor:"自定义颜色"},L={basicUsage:"Basic Usage",contentSlot:"Content Slot",alignmentMethods:"Alignment Methods",topAlignment:"Top Alignment",tooltip:"Tooltip",bottomAlignment:"Bottom Alignment",offset:"Offset",events:"Events",disabled:"Disabled",placement:"Placement",trigger:"Trigger",twoWayBinding:"Two-way Binding",themeColorTooltip:"Theme Color",defaultTooltip:"Default",primaryTooltip:"Primary",infoTooltip:"Info",successTooltip:"Success",warningTooltip:"Warning",dangerTooltip:"Danger",customColor:"Custom Color"},{add:U,use:P,pack:a,packs:J,merge:K}=c.useLocale(),W=d=>{c.use(d),P(d)};c.add("zh-CN",c.zhCN);c.add("en-US",c.enUS);U("zh-CN",E);U("en-US",L);const $=d=>(O("data-v-90ebbfd0"),d=d(),M(),d),q={class:"placement-container"},F=$(()=>h("div",{style:{"margin-bottom":"100px"}},null,-1)),R={__name:"index",setup(d){const _=T("click"),g=T("top"),x=T(["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"]);return B(W),N(z.dark),(j,p)=>{const s=u("var-button"),i=u("var-tooltip"),b=u("var-icon"),y=u("var-option"),C=u("var-select"),k=u("var-space");return v(),w(S,null,[t(o(r),null,{default:e(()=>[l(n(o(a).basicUsage),1)]),_:1}),t(i,{content:"Tooltip"},{default:e(()=>[t(s,{type:"primary"},{default:e(()=>[l(n(o(a).basicUsage),1)]),_:1})]),_:1}),t(o(r),null,{default:e(()=>[l(n(o(a).contentSlot),1)]),_:1}),t(i,null,{content:e(()=>[t(b,{name:"star"})]),default:e(()=>[t(s,{type:"primary"},{default:e(()=>[l(n(o(a).contentSlot),1)]),_:1})]),_:1}),t(o(r),null,{default:e(()=>[l(n(o(a).placement),1)]),_:1}),t(C,{hint:!1,modelValue:g.value,"onUpdate:modelValue":p[0]||(p[0]=f=>g.value=f)},{default:e(()=>[(v(!0),w(S,null,D(x.value,(f,V)=>(v(),I(y,{key:V,label:f},null,8,["label"]))),128))]),_:1},8,["modelValue"]),h("div",q,[t(i,{content:"Tooltip",placement:g.value},{default:e(()=>[t(s,{type:"primary"},{default:e(()=>[t(b,{name:"star"})]),_:1})]),_:1},8,["placement"])]),t(o(r),null,{default:e(()=>[l(n(o(a).themeColorTooltip),1)]),_:1}),t(k,{size:["14vmin","2.666vmin"]},{default:e(()=>[t(i,{content:"Tooltip"},{default:e(()=>[t(s,null,{default:e(()=>[l(n(o(a).defaultTooltip),1)]),_:1})]),_:1}),t(i,{type:"primary",content:"Tooltip"},{default:e(()=>[t(s,{type:"primary"},{default:e(()=>[l(n(o(a).primaryTooltip),1)]),_:1})]),_:1}),t(i,{type:"info",content:"Tooltip"},{default:e(()=>[t(s,{type:"info"},{default:e(()=>[l(n(o(a).infoTooltip),1)]),_:1})]),_:1}),t(i,{type:"success",content:"Tooltip"},{default:e(()=>[t(s,{type:"success"},{default:e(()=>[l(n(o(a).successTooltip),1)]),_:1})]),_:1}),t(i,{type:"warning",content:"Tooltip"},{default:e(()=>[t(s,{type:"warning"},{default:e(()=>[l(n(o(a).warningTooltip),1)]),_:1})]),_:1}),t(i,{type:"danger",content:"Tooltip"},{default:e(()=>[t(s,{type:"danger"},{default:e(()=>[l(n(o(a).dangerTooltip),1)]),_:1})]),_:1})]),_:1}),t(o(r),null,{default:e(()=>[l(n(o(a).customColor),1)]),_:1}),t(i,{content:"Tooltip",color:"#d81b60"},{default:e(()=>[t(s,{type:"primary"},{default:e(()=>[l(n(o(a).customColor),1)]),_:1})]),_:1}),t(o(r),null,{default:e(()=>[l(n(o(a).offset),1)]),_:1}),t(i,{content:"Tooltip","offset-x":64,"offset-y":-10},{default:e(()=>[t(s,{type:"primary"},{default:e(()=>[l(n(o(a).offset),1)]),_:1})]),_:1}),t(o(r),null,{default:e(()=>[l(n(o(a).trigger),1)]),_:1}),t(C,{hint:!1,modelValue:_.value,"onUpdate:modelValue":p[1]||(p[1]=f=>_.value=f)},{default:e(()=>[t(y,{label:"click"}),t(y,{label:"hover"})]),_:1},8,["modelValue"]),t(i,{content:"Tooltip",style:{"margin-top":"15px"},trigger:_.value},{default:e(()=>[t(s,{type:"primary"},{default:e(()=>[l(n(o(a).trigger),1)]),_:1})]),_:1},8,["trigger"]),t(o(r),null,{default:e(()=>[l(n(o(a).events),1)]),_:1}),t(i,{content:"Tooltip",onOpen:p[2]||(p[2]=()=>o(m).info("open")),onOpened:p[3]||(p[3]=()=>o(m).success("opened")),onClose:p[4]||(p[4]=()=>o(m).warning("close")),onClosed:p[5]||(p[5]=()=>o(m).error("closed"))},{default:e(()=>[t(s,{type:"primary"},{default:e(()=>[l(n(o(a).events),1)]),_:1})]),_:1}),t(o(r),null,{default:e(()=>[l(n(o(a).disabled),1)]),_:1}),t(i,{content:"Tooltip",disabled:""},{default:e(()=>[t(s,{type:"primary",disabled:""},{default:e(()=>[l(n(o(a).disabled),1)]),_:1})]),_:1}),F],64)}}},Q=A(R,[["__scopeId","data-v-90ebbfd0"]]);export{Q as default};
