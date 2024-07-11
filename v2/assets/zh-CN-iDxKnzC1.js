import{_ as l,b as o,e as h,m as r,p as s,q as d,w as e,P as t,Z as n}from"./index-vwO9GBzB.js";const i={components:{}},p={class:"varlet-site-doc"},m=s("h1",null,"索引栏",-1),j={class:"card"},b={id:"jie4shao4"},_=s("p",null,"用于跳转到页面指定位置。",-1),u={class:"card"},g={id:"ji1ben3shi3yong4"},x=s("p",null,[t("点击索引栏时，会自动跳转到对应的 "),s("code",null,"IndexAnchor"),t(" 锚点位置。")],-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref, onMounted } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(` list = ref([])

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),t(),s("span",{class:"hljs-title"},"handleChange"),t("("),s("span",{class:"hljs-params"},"value"),t(") ")]),t(`{
  `),s("span",{class:"hljs-built_in"},"console"),t(`.log(value)
}

onMounted(`),s("span",{class:"hljs-function"},"() =>"),t(` {
  `),s("span",{class:"hljs-keyword"},"for"),t(" ("),s("span",{class:"hljs-keyword"},"let"),t(" i = "),s("span",{class:"hljs-number"},"0"),t("; i < "),s("span",{class:"hljs-number"},"26"),t(`; i++) {
    list.value.push(`),s("span",{class:"hljs-built_in"},"String"),t(".fromCharCode("),s("span",{class:"hljs-number"},"65"),t(` + i))
  }
})
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-index-bar"),t(),s("span",{class:"hljs-attr"},"duration"),t("="),s("span",{class:"hljs-string"},'"300"'),t(" @"),s("span",{class:"hljs-attr"},"change"),t("="),s("span",{class:"hljs-string"},'"handleChange"'),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"div"),t(),s("span",{class:"hljs-attr"},"v-for"),t("="),s("span",{class:"hljs-string"},'"item in list"'),t(),s("span",{class:"hljs-attr"},":key"),t("="),s("span",{class:"hljs-string"},'"item"'),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-index-anchor"),t(),s("span",{class:"hljs-attr"},":index"),t("="),s("span",{class:"hljs-string"},'"item"'),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"anchor"'),t(">")]),t(`
        标题 {{ item }}
      `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-index-anchor"),t(">")]),t(`

      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t("{{ item }} 文本"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t("{{ item }} 文本"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-cell"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"div"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-index-bar"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"style"),t(">")]),s("span",{class:"css"},[t(`
`),s("span",{class:"hljs-selector-class"},".anchor"),t(` {
  `),s("span",{class:"hljs-attribute"},"height"),t(": "),s("span",{class:"hljs-number"},"42px"),t(`;
  `),s("span",{class:"hljs-attribute"},"display"),t(`: flex;
  `),s("span",{class:"hljs-attribute"},"align-items"),t(`: center;
  `),s("span",{class:"hljs-attribute"},"padding"),t(": "),s("span",{class:"hljs-number"},"0"),t(),s("span",{class:"hljs-number"},"12px"),t(`;
  `),s("span",{class:"hljs-attribute"},"transition"),t(": all "),s("span",{class:"hljs-number"},"0.25s"),t(`;
  `),s("span",{class:"hljs-attribute"},"background"),t(": "),s("span",{class:"hljs-built_in"},"var"),t(`(--color-primary);
  `),s("span",{class:"hljs-attribute"},"color"),t(": "),s("span",{class:"hljs-number"},"#fff"),t(`;
}
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"style"),t(">")]),t(`
`)])],-1),y=s("h2",null,"API",-1),v={class:"card"},k={id:"shu3xing4"},I=n("<h4>IndexBar Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>sticky</code></td><td>是否开启锚点吸顶</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>sticky-offset-top</code></td><td>锚点吸顶时与顶部的距离</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td><code>hide-list</code></td><td>是否隐藏锚点列表</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>sticky-css-mode</code></td><td>开启原生 <code>css sticky</code> 模式</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>z-index</code></td><td>z-index 层级</td><td><em>number | string</em></td><td><code>1</code></td></tr><tr><td><code>highlight-color</code></td><td>索引字符高亮颜色</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>duration</code></td><td>动画持续时间</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table><h4>IndexAnchor Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>index</code></td><td>索引字符</td><td><em>number | string</em></td><td><code>-</code></td></tr></tbody></table>",4),B={class:"card"},w={id:"shi4jian4"},C=n("<h4>IndexBar Events</h4><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击索引栏的字符时触发</td><td><code>index: number | string</code></td></tr><tr><td><code>change</code></td><td>当前高亮的索引字符变化时触发</td><td><code>index: number | string</code></td></tr></tbody></table>",2),N={class:"card"},S={id:"cha1cao2"},z=n("<h4>IndexBar Slots</h4><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>索引栏内容</td><td><code>-</code></td></tr></tbody></table><h4>IndexAnchor Slots</h4><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>自定义索引字符</td><td><code>-</code></td></tr><tr><td><code>anchor-name</code></td><td>自定义锚点内容</td><td><code>anchorName: string</code> 锚点内容</td></tr></tbody></table>",4),P={class:"card"},A={id:"fang1fa3"},T=n("<p>通过 ref 可以获取到 IndexBar 实例并调用实例方法</p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th><th>返回值</th></tr></thead><tbody><tr><td><code>scrollTo</code></td><td>滚动到指定锚点</td><td><code>index: number | string, options?: IndexBarScrollToOptions</code></td><td><code>-</code></td></tr></tbody></table><h4>IndexBarScrollToOptions</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>event</code></td><td>值为 <code>false</code> 时阻止触发 <code>change</code> 事件</td><td><em>boolean</em></td><td><code>-</code></td></tr></tbody></table>",4),V={class:"card"},$={id:"yang4shi4bian4liang4"},E=n('<p>以下为组件使用的 css 变量，可以使用 <a href="#/zh-CN/style-provider">StyleProvider 组件</a> 进行样式定制。</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--index-bar-list-right</code></td><td><code>0</code></td></tr><tr><td><code>--index-bar-list-top</code></td><td><code>50%</code></td></tr><tr><td><code>--index-bar-list-left</code></td><td><code>auto</code></td></tr><tr><td><code>--index-bar-list-bottom</code></td><td><code>auto</code></td></tr><tr><td><code>--index-bar-list-transform</code></td><td><code>translate(0, -50%)</code></td></tr><tr><td><code>--index-bar-list-item-font-size</code></td><td><code>var(--font-size-xs)</code></td></tr><tr><td><code>--index-bar-list-item-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--index-bar-list-item-active-color</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--index-bar-list-item-height</code></td><td><code>14px</code></td></tr><tr><td><code>--index-bar-list-item-padding</code></td><td><code>0 10px</code></td></tr></tbody></table>',2);function M(O,q,Z,D,F,G){const a=o("router-link"),c=o("var-site-code-example");return h(),r("div",p,[m,s("div",j,[s("h3",b,[d(a,{to:"#jie4shao4"},{default:e(()=>[t("#")]),_:1}),t("介绍")]),_]),s("div",u,[s("h3",g,[d(a,{to:"#ji1ben3shi3yong4"},{default:e(()=>[t("#")]),_:1}),t("基本使用")]),x,d(c,null,{default:e(()=>[f]),_:1})]),y,s("div",v,[s("h3",k,[d(a,{to:"#shu3xing4"},{default:e(()=>[t("#")]),_:1}),t("属性")]),I]),s("div",B,[s("h3",w,[d(a,{to:"#shi4jian4"},{default:e(()=>[t("#")]),_:1}),t("事件")]),C]),s("div",N,[s("h3",S,[d(a,{to:"#cha1cao2"},{default:e(()=>[t("#")]),_:1}),t("插槽")]),z]),s("div",P,[s("h3",A,[d(a,{to:"#fang1fa3"},{default:e(()=>[t("#")]),_:1}),t("方法")]),T]),s("div",V,[s("h3",$,[d(a,{to:"#yang4shi4bian4liang4"},{default:e(()=>[t("#")]),_:1}),t("样式变量")]),E])])}const J=l(i,[["render",M]]);export{J as default};
