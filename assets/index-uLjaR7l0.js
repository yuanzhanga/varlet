import{a8 as u,r as h,F as z,U as S,b as i,e as C,m as V,q as a,w as e,W as r,N as A,P as o,O as n,p}from"./index-h4E0gBbf.js";import{A as c}from"./appType-xf773rte.js";const x={avatarSize:"头像尺寸",avatarShape:"头像形状",fitMode:"填充模式",fontSize:"文字自适应",backgroundColor:"背景颜色",avatarHorizontalGroup:"头像水平分组",avatarVerticalGroup:"头像垂直分组",avatarHoverable:"头像可悬停"},G={avatarSize:"Avatar Size",avatarShape:"Avatar Shape",fitMode:"Fit Mode",fontSize:"Text Adaptive",backgroundColor:"Background Color",avatarHorizontalGroup:"Avatar Horizontal Group",avatarVerticalGroup:"Avatar Vertical Group",avatarHoverable:"Avatar Hoverable"},{add:g,use:H,t:d,merge:y}=u.useLocale(),N=_=>{u.use(_),H(_)};u.add("zh-CN",u.zhCN);u.add("en-US",u.enUS);g("zh-CN",x);g("en-US",G);const U=p("span",null,"cover",-1),k=p("span",null,"fill",-1),w=p("span",null,"contain",-1),T=p("span",null,"none",-1),B=p("span",null,"scale-down",-1),E={__name:"index",setup(_){const s=h("VARLET");return z(N),S(),(M,f)=>{const t=i("var-avatar"),l=i("var-space"),m=i("var-input"),b=i("var-icon"),v=i("var-avatar-group");return C(),V(A,null,[a(r(c),null,{default:e(()=>[o(n(r(d)("avatarSize")),1)]),_:1}),a(l,{align:"center"},{default:e(()=>[a(t,{src:"cat.jpg",size:"mini"}),a(t,{src:"cat.jpg",size:"small"}),a(t,{src:"cat.jpg"}),a(t,{src:"cat.jpg",size:"large"}),a(t,{src:"cat.jpg",size:"21vmin"})]),_:1}),a(r(c),null,{default:e(()=>[o(n(r(d)("avatarShape")),1)]),_:1}),a(l,null,{default:e(()=>[a(t,{src:"cat.jpg"}),a(t,{src:"cat.jpg",round:!1})]),_:1}),a(r(c),null,{default:e(()=>[o(n(r(d)("fitMode")),1)]),_:1}),a(l,null,{default:e(()=>[a(l,{direction:"column",align:"center"},{default:e(()=>[a(t,{src:"cat.jpg"}),U]),_:1}),a(l,{direction:"column",align:"center"},{default:e(()=>[a(t,{src:"cat.jpg",fit:"fill"}),k]),_:1}),a(l,{direction:"column",align:"center"},{default:e(()=>[a(t,{src:"cat.jpg",fit:"contain"}),w]),_:1}),a(l,{direction:"column",align:"center"},{default:e(()=>[a(t,{src:"cat.jpg",fit:"none"}),T]),_:1}),a(l,{direction:"column",align:"center"},{default:e(()=>[a(t,{src:"cat.jpg",fit:"scale-down"}),B]),_:1})]),_:1}),a(r(c),null,{default:e(()=>[o(n(r(d)("fontSize")),1)]),_:1}),a(l,{direction:"column"},{default:e(()=>[a(l,null,{default:e(()=>[a(t,null,{default:e(()=>[o(n(s.value),1)]),_:1}),a(t,{round:!1},{default:e(()=>[o(n(s.value),1)]),_:1})]),_:1}),a(m,{modelValue:s.value,"onUpdate:modelValue":f[0]||(f[0]=j=>s.value=j)},null,8,["modelValue"])]),_:1}),a(r(c),null,{default:e(()=>[o(n(r(d)("backgroundColor")),1)]),_:1}),a(l,null,{default:e(()=>[a(t,{color:"var(--color-warning)"},{default:e(()=>[a(b,{name:"fire"})]),_:1}),a(t,{color:"var(--color-danger)"},{default:e(()=>[o(n(s.value),1)]),_:1})]),_:1}),a(r(c),null,{default:e(()=>[o(n(r(d)("avatarHorizontalGroup")),1)]),_:1}),a(v,null,{default:e(()=>[a(t,{src:"cat.jpg",bordered:""}),a(t,{src:"cat2.jpg",bordered:""}),a(t,{src:"cat3.jpg",bordered:""}),a(t,{bordered:""},{default:e(()=>[o("+2")]),_:1})]),_:1}),a(r(c),null,{default:e(()=>[o(n(r(d)("avatarVerticalGroup")),1)]),_:1}),a(v,{vertical:""},{default:e(()=>[a(t,{src:"cat.jpg",bordered:""}),a(t,{src:"cat2.jpg",bordered:""}),a(t,{src:"cat3.jpg",bordered:""}),a(t,{bordered:""},{default:e(()=>[o("+2")]),_:1})]),_:1}),a(r(c),null,{default:e(()=>[o(n(r(d)("avatarHoverable")),1)]),_:1}),a(v,null,{default:e(()=>[a(t,{hoverable:"",src:"cat.jpg",bordered:""}),a(t,{hoverable:"",src:"cat2.jpg",bordered:""}),a(t,{hoverable:"",src:"cat3.jpg",bordered:""}),a(t,{hoverable:"",bordered:""},{default:e(()=>[o("+2")]),_:1})]),_:1})],64)}}};export{E as default};
