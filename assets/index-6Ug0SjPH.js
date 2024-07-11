import{a8 as m,r,F as B,U as P,b as s,e as F,m as L,q as e,w as l,y as q,W as a,M as N,N as H,P as t,O as d}from"./index-h4E0gBbf.js";import{A as c}from"./appType-xf773rte.js";const O={type:"主题色按钮",trigger:"触发方式",direction:"动作菜单弹出方向",position:"触发器位置",default:"默认",primary:"主要",info:"信息",success:"成功",warning:"警告",danger:"危险",drag:"拖拽",disabled:"禁用",elevation:"海拔效果",triggerToggle:"触发器显示/隐藏",actionsToggle:"动作菜单展开/收起",toggle:"切换"},W={type:"Theme Color Button",trigger:"Trigger Method",direction:"Action Menu Popup Direction",position:"Trigger Position",default:"default",primary:"primary",info:"info",success:"success",warning:"warning",danger:"danger",drag:"Drag",disabled:"Disabled",elevation:"Elevation Effect",triggerToggle:"Trigger Show/Hide",actionsToggle:"Action Menu Expand/Collapse",toggle:"Toggle"},{add:S,use:j,t:o,merge:Q}=m.useLocale(),G=y=>{m.use(y),j(y)};m.add("zh-CN",m.zhCN);m.add("en-US",m.enUS);S("zh-CN",O);S("en-US",W);const R={__name:"index",setup(y){const h=r("primary"),V=r("click"),k=r("top"),f=r("right-bottom"),w=r(!0),_=r(!1),T=r(!1),g=r(!1),U=r(2);B(G),P();function z(){w.value=!w.value}function A(){_.value=!_.value}return(I,n)=>{const v=s("var-option"),M=s("var-select"),i=s("var-radio"),C=s("var-radio-group"),x=s("var-switch"),D=s("var-slider"),p=s("var-button"),b=s("var-icon"),E=s("var-fab");return F(),L(H,null,[e(a(c),{style:q({marginTop:f.value.includes("top")?"20vmin":void 0})},{default:l(()=>[t(d(a(o)("type")),1)]),_:1},8,["style"]),e(M,{hint:!1,modelValue:h.value,"onUpdate:modelValue":n[0]||(n[0]=u=>h.value=u)},{default:l(()=>[e(v,{label:a(o)("default"),value:"default"},null,8,["label"]),e(v,{label:a(o)("primary"),value:"primary"},null,8,["label"]),e(v,{label:a(o)("info"),value:"info"},null,8,["label"]),e(v,{label:a(o)("success"),value:"success"},null,8,["label"]),e(v,{label:a(o)("warning"),value:"warning"},null,8,["label"]),e(v,{label:a(o)("danger"),value:"danger"},null,8,["label"])]),_:1},8,["modelValue"]),e(a(c),null,{default:l(()=>[t(d(a(o)("position")),1)]),_:1}),e(C,{modelValue:f.value,"onUpdate:modelValue":n[1]||(n[1]=u=>f.value=u)},{default:l(()=>[e(i,{"checked-value":"left-top"},{default:l(()=>[t("left-top")]),_:1}),e(i,{"checked-value":"right-top"},{default:l(()=>[t("right-top")]),_:1}),e(i,{"checked-value":"left-bottom"},{default:l(()=>[t("left-bottom")]),_:1}),e(i,{"checked-value":"right-bottom"},{default:l(()=>[t("right-bottom")]),_:1})]),_:1},8,["modelValue"]),e(a(c),null,{default:l(()=>[t(d(a(o)("trigger")),1)]),_:1}),e(C,{modelValue:V.value,"onUpdate:modelValue":n[2]||(n[2]=u=>V.value=u)},{default:l(()=>[e(i,{"checked-value":"click"},{default:l(()=>[t("click")]),_:1}),e(i,{"checked-value":"hover"},{default:l(()=>[t("hover")]),_:1})]),_:1},8,["modelValue"]),e(a(c),null,{default:l(()=>[t(d(a(o)("direction")),1)]),_:1}),e(C,{modelValue:k.value,"onUpdate:modelValue":n[3]||(n[3]=u=>k.value=u)},{default:l(()=>[e(i,{"checked-value":"top"},{default:l(()=>[t("top")]),_:1}),e(i,{"checked-value":"right"},{default:l(()=>[t("right")]),_:1}),e(i,{"checked-value":"bottom"},{default:l(()=>[t("bottom")]),_:1}),e(i,{"checked-value":"left"},{default:l(()=>[t("left")]),_:1})]),_:1},8,["modelValue"]),e(a(c),null,{default:l(()=>[t(d(a(o)("drag")),1)]),_:1}),e(x,{modelValue:T.value,"onUpdate:modelValue":n[4]||(n[4]=u=>T.value=u)},null,8,["modelValue"]),e(a(c),null,{default:l(()=>[t(d(a(o)("disabled")),1)]),_:1}),e(x,{modelValue:g.value,"onUpdate:modelValue":n[5]||(n[5]=u=>g.value=u)},null,8,["modelValue"]),e(a(c),null,{default:l(()=>[t(d(a(o)("elevation")),1)]),_:1}),e(D,{max:"24",modelValue:U.value,"onUpdate:modelValue":n[6]||(n[6]=u=>U.value=u)},null,8,["modelValue"]),e(a(c),null,{default:l(()=>[t(d(a(o)("triggerToggle")),1)]),_:1}),e(p,{type:"primary",onClick:N(z,["stop"])},{default:l(()=>[t(d(a(o)("toggle")),1)]),_:1}),e(a(c),null,{default:l(()=>[t(d(a(o)("actionsToggle")),1)]),_:1}),e(p,{type:"primary",onClick:N(A,["stop"])},{default:l(()=>[t(d(a(o)("toggle")),1)]),_:1}),e(E,{active:_.value,"onUpdate:active":n[7]||(n[7]=u=>_.value=u),show:w.value,type:h.value,position:f.value,direction:k.value,trigger:V.value,drag:T.value,disabled:g.value,elevation:U.value},{default:l(()=>[e(p,{type:"info","icon-container":"",disabled:g.value},{default:l(()=>[e(b,{name:"account-circle"})]),_:1},8,["disabled"]),e(p,{type:"success","icon-container":"",disabled:g.value},{default:l(()=>[e(b,{name:"checkbox-marked-circle"})]),_:1},8,["disabled"]),e(p,{type:"warning","icon-container":"",disabled:g.value},{default:l(()=>[e(b,{name:"bell"})]),_:1},8,["disabled"]),e(p,{type:"danger","icon-container":"",disabled:g.value},{default:l(()=>[e(b,{name:"delete"})]),_:1},8,["disabled"])]),_:1},8,["active","show","type","position","direction","trigger","drag","disabled","elevation"])],64)}}};export{R as default};
