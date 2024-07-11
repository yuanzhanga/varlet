import{an as l,r as c,E as O,a6 as V,ao as D,b as r,e as s,m as h,q as t,w as e,N as y,P as b,O as d,S as i,f as x,R as N,t as k,p as w}from"./index-vwO9GBzB.js";const L={basicUsage:"基本使用",dragText:"拖拽面板",customAnchors:"自定义锚点",currentAnchorText:"面板锚点高度为",dragHeadOnly:"仅头部拖拽"},R={basicUsage:"Basic Usage",dragText:"Drag panel",customAnchors:"Custom Anchors",currentAnchorText:"The panel anchor height is",dragHeadOnly:"Drag Head Only"},{add:z,use:E,pack:u,packs:P,merge:$}=l.useLocale(),M=v=>{l.use(v),E(v)};l.add("zh-CN",l.zhCN);l.add("en-US",l.enUS);z("zh-CN",L);z("en-US",R);const q={style:{"text-align":"center",padding:"5px 15px"}},j={__name:"index",setup(v){const p=c(null),n=c(0),S=c([100,window.innerHeight*.4,window.innerHeight*.8]),_=c(100),A=c({"--tab-padding":"2px"});return O(C=>{M(C),p.value&&p.value.resize()}),V(D.dark),(C,o)=>{const f=r("var-tab"),T=r("var-tabs"),H=r("var-style-provider"),U=r("var-cell"),m=r("var-floating-panel"),g=r("var-tab-item"),B=r("var-tabs-items");return s(),h(y,null,[t(H,{"style-vars":A.value},{default:e(()=>[t(T,{ref_key:"tabsRef",ref:p,elevation:"",color:"var(--color-primary)","active-color":"#fff","inactive-color":"hsla(0, 0%, 100%, .6)",active:n.value,"onUpdate:active":o[0]||(o[0]=a=>n.value=a),style:{"margin-top":"14px"}},{default:e(()=>[t(f,{style:{"font-size":"13px"}},{default:e(()=>[b(d(i(u).basicUsage),1)]),_:1}),t(f,{style:{"font-size":"13px"}},{default:e(()=>[b(d(i(u).customAnchors),1)]),_:1}),t(f,{style:{"font-size":"13px"}},{default:e(()=>[b(d(i(u).dragHeadOnly),1)]),_:1})]),_:1},8,["active"])]),_:1},8,["style-vars"]),t(B,{active:n.value,"onUpdate:active":o[2]||(o[2]=a=>n.value=a)},{default:e(()=>[t(g,null,{default:e(()=>[n.value===0?(s(),x(m,{key:0,teleport:"body"},{default:e(()=>[(s(),h(y,null,N(26,a=>t(U,{key:a,title:String.fromCharCode(a+64),border:""},null,8,["title"])),64))]),_:1})):k("v-if",!0)]),_:1}),t(g,null,{default:e(()=>[n.value===1?(s(),x(m,{key:0,anchor:_.value,"onUpdate:anchor":o[1]||(o[1]=a=>_.value=a),anchors:S.value,teleport:"body"},{default:e(()=>[w("div",q,[w("p",null,d(i(u).currentAnchorText)+" "+d(Math.floor(_.value))+" px",1)])]),_:1},8,["anchor","anchors"])):k("v-if",!0)]),_:1}),t(g,null,{default:e(()=>[n.value===2?(s(),x(m,{key:0,"content-draggable":!1,teleport:"body"},{default:e(()=>[(s(),h(y,null,N(26,a=>t(U,{key:a,title:String.fromCharCode(a+64),border:""},null,8,["title"])),64))]),_:1})):k("v-if",!0)]),_:1})]),_:1},8,["active"])],64)}}};export{j as default};
