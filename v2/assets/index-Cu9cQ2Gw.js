import{an as o,a6 as S,ao as k,E as b,b as v,e as g,m as C,q as l,w as a,S as e,N as x,P as n,O as r,s as c}from"./index-vwO9GBzB.js";import{A as _}from"./appType-fkxN3UmL.js";const U={basicUsage:"基本使用",separator:"分隔符",childSeparator:"子级分隔符",separatorSlot:"分隔符插槽",level1:"首页",level2:"一级",level3:"二级",clickEvent:"点击事件"},h={basicUsage:"Basic Usage",separator:"Separator",childSeparator:"Child Separator",separatorSlot:"Separator Slot",level1:"Home",level2:"Link 1",level3:"Link 2",clickEvent:"Click Event"},{add:m,use:N,pack:t,packs:z,merge:L}=o.useLocale(),E=p=>{o.use(p),N(p)};o.add("zh-CN",o.zhCN);o.add("en-US",o.enUS);m("zh-CN",U);m("en-US",h);const B={__name:"index",setup(p){return S(k.dark),b(E),($,s)=>{const u=v("var-breadcrumb"),d=v("var-breadcrumbs"),f=v("var-icon");return g(),C(x,null,[l(e(_),null,{default:a(()=>[n(r(e(t).basicUsage),1)]),_:1}),l(d,null,{default:a(()=>[l(u,null,{default:a(()=>[n(r(e(t).level1),1)]),_:1}),l(u,null,{default:a(()=>[n(r(e(t).level2),1)]),_:1}),l(u,null,{default:a(()=>[n(r(e(t).level3),1)]),_:1})]),_:1}),l(e(_),null,{default:a(()=>[n(r(e(t).separator),1)]),_:1}),l(d,{separator:"\\"},{default:a(()=>[l(u,null,{default:a(()=>[n(r(e(t).level1),1)]),_:1}),l(u,null,{default:a(()=>[n(r(e(t).level2),1)]),_:1}),l(u,null,{default:a(()=>[n(r(e(t).level3),1)]),_:1})]),_:1}),l(e(_),null,{default:a(()=>[n(r(e(t).childSeparator),1)]),_:1}),l(d,null,{default:a(()=>[l(u,null,{default:a(()=>[n(r(e(t).level1),1)]),_:1}),l(u,{separator:"~"},{default:a(()=>[n(r(e(t).level2),1)]),_:1}),l(u,null,{default:a(()=>[n(r(e(t).level3),1)]),_:1})]),_:1}),l(e(_),null,{default:a(()=>[n(r(e(t).separatorSlot),1)]),_:1}),l(d,null,{default:a(()=>[l(u,null,{separator:a(()=>[l(f,{name:"menu-right",style:{margin:"1px 4px 0"}})]),default:a(()=>[n(" "+r(e(t).level1),1)]),_:1}),l(u,null,{separator:a(()=>[l(f,{name:"menu-right",style:{margin:"1px 4px 0"}})]),default:a(()=>[n(" "+r(e(t).level2),1)]),_:1}),l(u,null,{default:a(()=>[n(r(e(t).level3),1)]),_:1})]),_:1}),l(e(_),null,{default:a(()=>[n(r(e(t).clickEvent),1)]),_:1}),l(d,null,{default:a(()=>[l(u,{onClick:s[0]||(s[0]=i=>e(c)(e(t).level1))},{default:a(()=>[n(r(e(t).level1),1)]),_:1}),l(u,{onClick:s[1]||(s[1]=i=>e(c)(e(t).level2))},{default:a(()=>[n(r(e(t).level2),1)]),_:1}),l(u,{onClick:s[2]||(s[2]=i=>e(c)(e(t).level3))},{default:a(()=>[n(r(e(t).level3),1)]),_:1})]),_:1})],64)}}};export{B as default};
