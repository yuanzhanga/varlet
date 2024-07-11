import{_ as c,b as a,e as h,m as i,p as t,q as e,w as d,P as s,Z as o}from"./index-vwO9GBzB.js";const r={components:{}},_={class:"varlet-site-doc"},p=t("h1",null,"回到顶部",-1),u={class:"card"},m={id:"jie4shao4"},j=t("p",null,"返回页面顶部的操作按钮。",-1),b={class:"card"},g={id:"ji1ben3shi3yong4"},v=t("p",null,[s("当页面滚动到 "),t("code",null,"200px"),s(" 时，右下角会出现返回顶部按钮。")],-1),f=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"const"),s(" lists = [...Array("),t("span",{class:"hljs-number"},"100"),s(`).keys()]
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"list in lists"'),s(),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"list"'),s(">")]),s("Scroll to bottom {{ list }}"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-back-top"),s(),t("span",{class:"hljs-attr"},":duration"),s("="),t("span",{class:"hljs-string"},'"300"'),s(" />")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y=t("h2",null,"API",-1),k={class:"card"},x={id:"shu3xing4"},N=o("<table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>target</code></td><td>触发滚动的对象，如果为 <code>undefined</code> 会监听距离最近的一个可滚动的祖先节点</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>visibility-height</code></td><td>滚动高度达到此参数值才出现</td><td><em>string | number</em></td><td><code>200</code></td></tr><tr><td><code>bottom</code></td><td><code>BackTop</code> 距离页面底部的距离</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>right</code></td><td><code>BackTop</code> 距离页面右侧的距离</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>elevation</code></td><td>海拔高度，可选值为 <code>true</code> <code>false</code> 和 <code>0-24</code> 的等级</td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>duration</code></td><td>回到顶部所需时间（ms）</td><td><em>number</em></td><td><code>300</code></td></tr></tbody></table>",1),B={class:"card"},C={id:"shi4jian4"},T=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"事件名"),t("th",null,"说明"),t("th",null,"回调参数")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"click")]),t("td",null,"点击按钮触发的事件"),t("td",null,[t("code",null,"event: Event")])])])],-1),V={class:"card"},$={id:"cha1cao2"},w=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"说明"),t("th",null,"参数")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"default")]),t("td",null,"自定义按钮内容"),t("td",null,[t("code",null,"-")])])])],-1),z={class:"card"},E={id:"yang4shi4bian4liang4"},P=o('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--back-top-right</code></td><td><code>40px</code></td></tr><tr><td><code>--back-top-bottom</code></td><td><code>40px</code></td></tr><tr><td><code>--back-top-button-size</code></td><td><code>40px</code></td></tr></tbody></table>',2);function S(A,q,H,I,L,M){const l=a("router-link"),n=a("var-site-code-example");return h(),i("div",_,[p,t("div",u,[t("h3",m,[e(l,{to:"#jie4shao4"},{default:d(()=>[s("#")]),_:1}),s("介绍")]),j]),t("div",b,[t("h3",g,[e(l,{to:"#ji1ben3shi3yong4"},{default:d(()=>[s("#")]),_:1}),s("基本使用")]),v,e(n,null,{default:d(()=>[f]),_:1})]),y,t("div",k,[t("h3",x,[e(l,{to:"#shu3xing4"},{default:d(()=>[s("#")]),_:1}),s("属性")]),N]),t("div",B,[t("h3",C,[e(l,{to:"#shi4jian4"},{default:d(()=>[s("#")]),_:1}),s("事件")]),T]),t("div",V,[t("h3",$,[e(l,{to:"#cha1cao2"},{default:d(()=>[s("#")]),_:1}),s("插槽")]),w]),t("div",z,[t("h3",E,[e(l,{to:"#yang4shi4bian4liang4"},{default:d(()=>[s("#")]),_:1}),s("样式变量")]),P])])}const D=c(r,[["render",S]]);export{D as default};
