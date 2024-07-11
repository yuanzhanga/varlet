import{a8 as f,F as h,U as k,b as c,e as z,m as x,q as t,w as n,W as u,N as G,P as o,O as l,M as w,s as y}from"./index-h4E0gBbf.js";import{A as i}from"./appType-xf773rte.js";const T={themeColorButton:"主题色按钮",themeColorButtonGroup:"按钮组主题色",defaultButton:"默认按钮",primaryButton:"主要按钮",infoButton:"信息按钮",successButton:"成功按钮",warningButton:"警告按钮",dangerButton:"危险按钮",textButton:"文字按钮",modeButtonGroup:"按钮组模式",plainTextButton:"纯文字按钮",outlineButton:"外边框按钮",outline:"边框",disabledStatus:"禁用状态",loadingStatus:"加载状态",buttonSize:"按钮尺寸",buttonGroupSize:"按钮组尺寸",normalButton:"常规按钮",smallButton:"小型按钮",miniButton:"迷你按钮",largeButton:"大型按钮",blockButton:"块级按钮",customColor:"自定义颜色",customButtonGroupColor:"自定义按钮组颜色",backgroundTextColor:"背景/文字",linearGradientColor:"使用渐变",verticalButtonGroup:"按钮组竖直排列",roundButton:"圆形按钮",event:"注册事件",click:"点击",touchstart:"触摸",autoLoading:"自动加载",clickSuccess:"点击成功",touchstartSuccess:"触摸成功",button:"按钮",splitButton:"按钮拆分"},L={themeColorButton:"Theme Color Button",themeColorButtonGroup:"Button Group Theme Color",defaultButton:"Default Button",default:"Default",primaryButton:"Primary Button",infoButton:"Info Button",successButton:"Success Button",warningButton:"Warning Button",dangerButton:"Danger Button",textButton:"Text Button",modeButtonGroup:"Button Group Mode",plainTextButton:"Plain Text Button",outlineButton:"Outline Button",outline:"Outline",disabledStatus:"Disabled Status",loadingStatus:"Loading Status",buttonSize:"Button Size",buttonGroupSize:"Button Group Size",normalButton:"Normal Button",smallButton:"Small Button",miniButton:"Mini Button",largeButton:"Large Button",blockButton:"Block Button",customColor:"Custom Color",customButtonGroupColor:"Custom Button Group Color",textColor:"Text Color",backgroundTextColor:"Background/Text Color",verticalButtonGroup:"Vertical Button Group",linearGradientColor:"LinearGradient Color",roundButton:"Round Button",event:"Events",click:"Click",touchstart:"Touchstart",autoLoading:"Auto Loading",clickSuccess:"Click Success",touchstartSuccess:"Touchstart Success",button:"Button",splitButton:"Split Button"},{add:b,use:N,t:e,merge:U}=f.useLocale(),D=_=>{f.use(_),N(_)};f.add("zh-CN",f.zhCN);f.add("en-US",f.enUS);b("zh-CN",T);b("en-US",L);const M={__name:"index",setup(_){h(D),k();function g(){y.success(e("clickSuccess"))}function v(){y.success(e("touchstartSuccess"))}function C(){return new Promise(m=>{setTimeout(m,2e3)})}return(m,B)=>{const a=c("var-button"),s=c("var-space"),d=c("var-icon"),r=c("var-button-group"),p=c("var-cell"),S=c("var-menu");return z(),x(G,null,[t(u(i),null,{default:n(()=>[o(l(u(e)("themeColorButton")),1)]),_:1}),t(s,{size:["2.666vmin","2.666vmin"]},{default:n(()=>[t(a,null,{default:n(()=>[o(l(u(e)("defaultButton")),1)]),_:1}),t(a,{type:"primary"},{default:n(()=>[o(l(u(e)("primaryButton")),1)]),_:1}),t(a,{type:"info"},{default:n(()=>[o(l(u(e)("infoButton")),1)]),_:1}),t(a,{type:"success"},{default:n(()=>[o(l(u(e)("successButton")),1)]),_:1}),t(a,{type:"warning"},{default:n(()=>[o(l(u(e)("warningButton")),1)]),_:1}),t(a,{type:"danger"},{default:n(()=>[o(l(u(e)("dangerButton")),1)]),_:1})]),_:1}),t(u(i),null,{default:n(()=>[o(l(u(e)("textButton")),1)]),_:1}),t(s,{size:["2.666vmin","2.666vmin"]},{default:n(()=>[t(a,{text:"",outline:"",type:"primary"},{default:n(()=>[o(l(u(e)("outlineButton")),1)]),_:1}),t(a,{text:"",type:"primary"},{default:n(()=>[o(l(u(e)("plainTextButton")),1)]),_:1})]),_:1}),t(u(i),null,{default:n(()=>[o(l(u(e)("disabledStatus")),1)]),_:1}),t(s,{size:["2.666vmin","2.666vmin"]},{default:n(()=>[t(a,{disabled:""},{default:n(()=>[o(l(u(e)("disabledStatus")),1)]),_:1}),t(a,{disabled:"",text:"",outline:""},{default:n(()=>[o(l(u(e)("disabledStatus")),1)]),_:1}),t(a,{disabled:"",text:""},{default:n(()=>[o(l(u(e)("disabledStatus")),1)]),_:1})]),_:1}),t(u(i),null,{default:n(()=>[o(l(u(e)("loadingStatus")),1)]),_:1}),t(s,{size:["2.666vmin","2.666vmin"]},{default:n(()=>[t(a,{loading:"",type:"primary"},{default:n(()=>[o(l(u(e)("loadingStatus")),1)]),_:1}),t(a,{loading:"",type:"info","loading-type":"rect"},{default:n(()=>[o(l(u(e)("loadingStatus")),1)]),_:1}),t(a,{loading:"",type:"success","loading-type":"disappear"},{default:n(()=>[o(l(u(e)("loadingStatus")),1)]),_:1}),t(a,{loading:"",type:"danger","loading-type":"cube"},{default:n(()=>[o(l(u(e)("loadingStatus")),1)]),_:1}),t(a,{loading:"",type:"warning","loading-type":"wave"},{default:n(()=>[o(l(u(e)("loadingStatus")),1)]),_:1})]),_:1}),t(u(i),null,{default:n(()=>[o(l(u(e)("buttonSize")),1)]),_:1}),t(s,{align:"center",size:["2.666vmin","2.666vmin"]},{default:n(()=>[t(a,{type:"primary"},{default:n(()=>[o(l(u(e)("normalButton")),1)]),_:1}),t(a,{type:"success",size:"small"},{default:n(()=>[o(l(u(e)("smallButton")),1)]),_:1}),t(a,{type:"warning",size:"mini"},{default:n(()=>[o(l(u(e)("miniButton")),1)]),_:1}),t(a,{type:"danger",size:"large"},{default:n(()=>[o(l(u(e)("largeButton")),1)]),_:1})]),_:1}),t(u(i),null,{default:n(()=>[o(l(u(e)("blockButton")),1)]),_:1}),t(a,{block:"",type:"primary"},{default:n(()=>[o(l(u(e)("blockButton")),1)]),_:1}),t(u(i),null,{default:n(()=>[o(l(u(e)("customColor")),1)]),_:1}),t(s,{size:["2.666vmin","2.666vmin"]},{default:n(()=>[t(a,{color:"#66bb6a","text-color":"#fff"},{default:n(()=>[o(l(u(e)("backgroundTextColor")),1)]),_:1}),t(a,{color:"linear-gradient(to bottom right, #6750A4, #D0BCFF)","text-color":"#fff"},{default:n(()=>[o(l(u(e)("linearGradientColor")),1)]),_:1})]),_:1}),t(u(i),null,{default:n(()=>[o(l(u(e)("roundButton")),1)]),_:1}),t(s,{size:["2.666vmin","2.666vmin"]},{default:n(()=>[t(a,{round:"","icon-container":""},{default:n(()=>[t(d,{name:"bookmark"})]),_:1}),t(a,{type:"primary",round:"","icon-container":""},{default:n(()=>[t(d,{name:"plus"})]),_:1}),t(a,{type:"info",round:"","icon-container":""},{default:n(()=>[t(d,{name:"information"})]),_:1}),t(a,{type:"success",round:"","icon-container":""},{default:n(()=>[t(d,{name:"check"})]),_:1}),t(a,{type:"warning",round:"","icon-container":""},{default:n(()=>[t(d,{name:"warning"})]),_:1}),t(a,{type:"danger",round:"","icon-container":""},{default:n(()=>[t(d,{name:"window-close"})]),_:1})]),_:1}),t(u(i),null,{default:n(()=>[o(l(u(e)("event")),1)]),_:1}),t(s,{size:["2.666vmin","2.666vmin"]},{default:n(()=>[t(a,{type:"success",onClick:g},{default:n(()=>[o(l(u(e)("click")),1)]),_:1}),t(a,{type:"success",onTouchstart:v},{default:n(()=>[o(l(u(e)("touchstart")),1)]),_:1}),t(a,{type:"success",onClick:C,"auto-loading":""},{default:n(()=>[o(l(u(e)("autoLoading")),1)]),_:1})]),_:1}),t(u(i),null,{default:n(()=>[o(l(u(e)("themeColorButtonGroup")),1)]),_:1}),t(s,{size:["2.666vmin","2.666vmin"]},{default:n(()=>[t(r,{type:"default"},{default:n(()=>[t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1})]),_:1}),t(r,{type:"primary"},{default:n(()=>[t(a,{type:"primary"},{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,{type:"primary"},{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,{type:"primary"},{default:n(()=>[o(l(u(e)("button")),1)]),_:1})]),_:1})]),_:1}),t(u(i),null,{default:n(()=>[o(l(u(e)("buttonGroupSize")),1)]),_:1}),t(s,{size:["2.666vmin","2.666vmin"]},{default:n(()=>[t(r,{size:"normal",type:"primary"},{default:n(()=>[t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1})]),_:1}),t(r,{size:"large",type:"primary"},{default:n(()=>[t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1})]),_:1})]),_:1}),t(u(i),null,{default:n(()=>[o(l(u(e)("splitButton")),1)]),_:1}),t(S,{placement:"bottom","same-width":"","offset-y":6},{menu:n(()=>[t(p,{ripple:""},{default:n(()=>[o(l(u(e)("splitButton")),1)]),_:1}),t(p,{ripple:""},{default:n(()=>[o(l(u(e)("splitButton")),1)]),_:1}),t(p,{ripple:""},{default:n(()=>[o(l(u(e)("splitButton")),1)]),_:1})]),default:n(()=>[t(r,{type:"primary"},{default:n(()=>[t(a,{onClick:B[0]||(B[0]=w(()=>{},["stop"]))},{default:n(()=>[o(l(u(e)("splitButton")),1)]),_:1}),t(a,{style:{padding:"0 6px"}},{default:n(()=>[t(d,{name:"menu-down",size:24})]),_:1})]),_:1})]),_:1}),t(u(i),null,{default:n(()=>[o(l(u(e)("modeButtonGroup")),1)]),_:1}),t(s,{direction:"column",size:["3.666vmin","3.666vmin"]},{default:n(()=>[t(r,{type:"primary",mode:"text"},{default:n(()=>[t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1})]),_:1}),t(r,{type:"primary",mode:"outline"},{default:n(()=>[t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1})]),_:1}),t(r,{mode:"icon-container"},{default:n(()=>[t(a,{type:"warning"},{default:n(()=>[t(d,{name:"warning"})]),_:1}),t(a,{type:"info"},{default:n(()=>[t(d,{name:"information"})]),_:1}),t(a,{type:"success"},{default:n(()=>[t(d,{name:"check"})]),_:1})]),_:1}),t(r,{type:"primary"},{default:n(()=>[t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1})]),_:1})]),_:1}),t(u(i),null,{default:n(()=>[o(l(u(e)("customButtonGroupColor")),1)]),_:1}),t(r,{type:"primary",color:"linear-gradient(to bottom right, #6750A4, #D0BCFF)"},{default:n(()=>[t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1})]),_:1}),t(u(i),null,{default:n(()=>[o(l(u(e)("verticalButtonGroup")),1)]),_:1}),t(s,{size:["5vmin","5vmin"]},{default:n(()=>[t(r,{type:"primary",mode:"text",vertical:""},{default:n(()=>[t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1})]),_:1}),t(r,{type:"primary",mode:"outline",vertical:""},{default:n(()=>[t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1})]),_:1}),t(r,{mode:"icon-container",vertical:""},{default:n(()=>[t(a,{type:"warning"},{default:n(()=>[t(d,{name:"warning"})]),_:1}),t(a,{type:"info"},{default:n(()=>[t(d,{name:"information"})]),_:1}),t(a,{type:"success"},{default:n(()=>[t(d,{name:"check"})]),_:1})]),_:1}),t(r,{type:"primary",vertical:""},{default:n(()=>[t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1}),t(a,null,{default:n(()=>[o(l(u(e)("button")),1)]),_:1})]),_:1})]),_:1})],64)}}};export{M as default};
