import{a8 as _,_ as C,r as m,F as R,U as S,b as v,e as z,m as W,q as t,w as e,W as a,N as V,P as r,O as s,p as l,n as N,$ as U,a0 as I}from"./index-h4E0gBbf.js";import{A as f}from"./appType-xf773rte.js";const T={textWatermark:"文字水印",imageWatermark:"图片水印",customGap:"自定义间距",customOffset:"自定义偏移量",customRotate:"自定义旋转角度",fullscreen:"全屏",customContentSlot:"自定义水印内容",toggle:"切换"},O={textWatermark:"Text Watermark",imageWatermark:"Image Watermark",customGap:"Custom Gap",customOffset:"Custom Offset",customRotate:"Custom Rotate",fullscreen:"Fullscreen",customContentSlot:"Watermark Content Slot",toggle:"Toggle"},{add:h,use:b,t:o,merge:M}=_.useLocale(),G=n=>{_.use(n),b(n)};_.add("zh-CN",_.zhCN);_.add("en-US",_.enUS);h("zh-CN",T);h("en-US",O);const u=n=>(U("data-v-728373a1"),n=n(),I(),n),B=u(()=>l("div",{class:"watermark-wrapper"},null,-1)),F=u(()=>l("div",{class:"watermark-wrapper"},null,-1)),A=u(()=>l("div",{class:"watermark-wrapper"},null,-1)),L=u(()=>l("div",{class:"watermark-wrapper"},null,-1)),q=u(()=>l("div",{class:"watermark-wrapper"},null,-1)),D={class:"watermark-wrapper"},E=u(()=>l("div",{class:"watermark-wrapper"},null,-1)),P=u(()=>l("span",{style:{"font-size":"20px",color:"#7986cb"}},"Varlet UI",-1)),$={__name:"index",setup(n){const d=m(!1),p=m(null),i=m(null),k=m(null),w=m(null),g=m(null),x=()=>{d.value=!d.value};return R(G),S(()=>{N(()=>{p.value.resize(),i.value.resize(),k.value.resize(),w.value.resize(),g.value.resize()})}),(j,H)=>{const c=v("var-watermark"),y=v("var-button");return z(),W(V,null,[t(a(f),null,{default:e(()=>[r(s(a(o)("textWatermark")),1)]),_:1}),t(c,{content:"Varlet",ref_key:"watermarkRef",ref:p},{default:e(()=>[B]),_:1},512),t(a(f),null,{default:e(()=>[r(s(a(o)("customGap")),1)]),_:1}),t(c,{content:"Varlet","gap-x":40,"gap-y":40,ref_key:"watermarkRef2",ref:i},{default:e(()=>[F]),_:1},512),t(a(f),null,{default:e(()=>[r(s(a(o)("customOffset")),1)]),_:1}),t(c,{content:"Varlet","offset-x":20,"offset-y":20,ref_key:"watermarkRef3",ref:k},{default:e(()=>[A]),_:1},512),t(a(f),null,{default:e(()=>[r(s(a(o)("customRotate")),1)]),_:1}),t(c,{content:"Varlet",rotate:22,"offset-y":20,ref_key:"watermarkRef4",ref:w},{default:e(()=>[L]),_:1},512),t(a(f),null,{default:e(()=>[r(s(a(o)("imageWatermark")),1)]),_:1}),t(c,{image:"./logo.svg",width:40,height:40,"gap-x":40,"gap-y":40,"offset-x":10,"offset-y":10},{default:e(()=>[q]),_:1}),t(a(f),null,{default:e(()=>[r(s(a(o)("fullscreen")),1)]),_:1}),t(c,{ref_key:"watermarkRef5",ref:g,content:"Varlet UI",fullscreen:d.value,"z-index":"99","offset-x":10,"offset-y":10},{default:e(()=>[l("div",D,[t(y,{type:"primary",onClick:x},{default:e(()=>[r(s(a(o)("toggle")),1)]),_:1})])]),_:1},8,["fullscreen"]),t(a(f),null,{default:e(()=>[r(s(a(o)("customContentSlot")),1)]),_:1}),t(c,{"offset-x":10,"offset-y":10},{content:e(()=>[P]),default:e(()=>[E]),_:1})],64)}}},Q=C($,[["__scopeId","data-v-728373a1"]]);export{Q as default};
