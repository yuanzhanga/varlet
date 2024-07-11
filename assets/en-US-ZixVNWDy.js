import{_ as c,b as d,e as r,m as h,p as t,q as e,w as a,P as s,a1 as l}from"./index-h4E0gBbf.js";const i={components:{}},p={class:"varlet-site-doc"},g=t("h1",null,"FloatingPanel",-1),u={class:"card"},_={id:"Intro"},m=t("p",null,"A panel floating at the bottom of the page, is often used to provide additional functionality or information, allowing users to freely drag up and down through content.",-1),f={class:"card"},j={id:"BasicUsage"},b=t("p",null,[s("The default height of the FloatingPanel is "),t("code",null,"100px"),s(", allowing dragging to expand or shrink the panel, and the default maximum height of the expansion is "),t("code",null,"60%"),s(" of the screen.")],-1),v=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-floating-panel"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"i in 26"'),s(),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"i"'),s(),t("span",{class:"hljs-attr"},":title"),s("="),t("span",{class:"hljs-string"},'"String.fromCharCode(i + 64)"'),s(),t("span",{class:"hljs-attr"},"border"),s(" />")]),s(` 
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-floating-panel"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),y={class:"card"},x={id:"CustomAnchors"},w=t("p",null,[s("The anchor position of the FloatingPanel can be set via the "),t("code",null,"anchors"),s(" property, and the display anchor of the current panel can be controlled by "),t("code",null,"v-model:anchor"),s(".")],-1),S=t("p",null,"For example, dock the height of the panel at 100px, 40% screen height, and 80% screen height:",-1),C=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"script"),s(),t("span",{class:"hljs-attr"},"setup"),s(">")]),t("span",{class:"javascript"},[s(`
`),t("span",{class:"hljs-keyword"},"const"),s(" anchors = ref(["),t("span",{class:"hljs-number"},"100"),s(", "),t("span",{class:"hljs-built_in"},"window"),s(".innerHeight * "),t("span",{class:"hljs-number"},"0.4"),s(", "),t("span",{class:"hljs-built_in"},"window"),s(".innerHeight * "),t("span",{class:"hljs-number"},"0.8"),s(`])
`),t("span",{class:"hljs-keyword"},"const"),s(" anchor = ref("),t("span",{class:"hljs-number"},"100"),s(`)
`)]),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-floating-panel"),s(),t("span",{class:"hljs-attr"},"v-model:anchor"),s("="),t("span",{class:"hljs-string"},'"anchor"'),s(),t("span",{class:"hljs-attr"},":anchors"),s("="),t("span",{class:"hljs-string"},'"anchors"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(),t("span",{class:"hljs-attr"},"style"),s("="),t("span",{class:"hljs-string"},'"text-align: center; padding: 15px"'),s(">")]),s(`
      `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"p"),s(">")]),s("The panel anchor height is  {{ Math.floor(anchor) }} px"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-floating-panel"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),P={class:"card"},k={id:"DragHeadOnly"},T=t("p",null,[s("By default, both the head area and the content area of a FloatingPanel can be dragged. If you want to disable dragging of the content area, set the "),t("code",null,"content-draggable"),s(" property to "),t("code",null,"false"),s(".")],-1),D=t("pre",{class:"hljs"},[t("code",null,[t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-floating-panel"),s(),t("span",{class:"hljs-attr"},":content-draggable"),s("="),t("span",{class:"hljs-string"},'"false"'),s(">")]),s(`
    `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"i in 26"'),s(),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"i"'),s(),t("span",{class:"hljs-attr"},":title"),s("="),t("span",{class:"hljs-string"},'"String.fromCharCode(i + 64)"'),s(),t("span",{class:"hljs-attr"},"border"),s(" />")]),s(` 
  `),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-floating-panel"),s(">")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),V=t("h2",null,"API",-1),B={class:"card"},H={id:"Props"},A=l("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:anchor</code></td><td>The panel initially displays the anchor point, or the first value of the <code>anchors</code> attribute if not passed</td><td><em>number | string</em></td><td><code>-</code></td></tr><tr><td><code>anchors</code></td><td>Custom anchors which unit is <code>px</code></td><td><em>number[]</em></td><td><code>[100, window.innerHeight * 0.6]</code></td></tr><tr><td><code>content-draggable</code></td><td>Whether to allow to drag panel content area</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>duration</code></td><td>Transition duration which unit is <code>ms</code></td><td><em>number | string</em></td><td><code>300</code></td></tr><tr><td><code>elevation</code></td><td>Elevation level, options <code>true</code> <code>false</code> and level of <code>0-24</code></td><td><em>string | number | boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the ejector layer mount</td><td><em>TeleportProps[&#39;to&#39;] | false</em></td><td><code>body</code></td></tr><tr><td><code>safe-area</code></td><td>Whether to enable bottom safe area adaptation</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1),E={class:"card"},F={id:"Events"},I=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Event"),t("th",null,"Description"),t("th",null,"Arguments")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"anchor-change")]),t("td",null,"Triggered after moving to an anchor"),t("td",null,[t("code",null,"height: number")])])])],-1),N={class:"card"},U={id:"Slots"},$=l("<table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom panel content</td><td><code>-</code></td></tr><tr><td><code>header</code> <em><strong>3.2.12</strong></em></td><td>Custom panel header</td><td><code>-</code></td></tr></tbody></table>",1),z={class:"card"},O={id:"StyleVariables"},W=l('<p>Here are the CSS variables used by the component. Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a>.</p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--floating-panel-z-index</code></td><td><code>999</code></td></tr><tr><td><code>--floating-panel-border-top</code></td><td><code>none</code></td></tr><tr><td><code>--floating-panel-border-radius</code></td><td><code>0</code></td></tr><tr><td><code>--floating-panel-background</code></td><td><code>var(--color-surface-container-high)</code></td></tr><tr><td><code>--floating-panel-header-height</code></td><td><code>40px</code></td></tr><tr><td><code>--floating-panel-toolbar-width</code></td><td><code>20px</code></td></tr><tr><td><code>--floating-panel-toolbar-height</code></td><td><code>3px</code></td></tr><tr><td><code>--floating-panel-toolbar-border-radius</code></td><td><code>10px</code></td></tr><tr><td><code>--floating-panel-toolbar-background</code></td><td><code>#ddd</code></td></tr><tr><td><code>--floating-panel-transition-timing-function</code></td><td><code>cubic-bezier(0.18, 0.89, 0.32, 1.28)</code></td></tr></tbody></table>',2);function q(M,G,J,K,L,Q){const n=d("router-link"),o=d("var-site-code-example");return r(),h("div",p,[g,t("div",u,[t("h3",_,[e(n,{to:"#Intro"},{default:a(()=>[s("#")]),_:1}),s("Intro")]),m]),t("div",f,[t("h3",j,[e(n,{to:"#BasicUsage"},{default:a(()=>[s("#")]),_:1}),s("Basic Usage")]),b,e(o,null,{default:a(()=>[v]),_:1})]),t("div",y,[t("h3",x,[e(n,{to:"#CustomAnchors"},{default:a(()=>[s("#")]),_:1}),s("Custom Anchors")]),w,S,e(o,null,{default:a(()=>[C]),_:1})]),t("div",P,[t("h3",k,[e(n,{to:"#DragHeadOnly"},{default:a(()=>[s("#")]),_:1}),s("Drag Head Only")]),T,e(o,null,{default:a(()=>[D]),_:1})]),V,t("div",B,[t("h3",H,[e(n,{to:"#Props"},{default:a(()=>[s("#")]),_:1}),s("Props")]),A]),t("div",E,[t("h3",F,[e(n,{to:"#Events"},{default:a(()=>[s("#")]),_:1}),s("Events")]),I]),t("div",N,[t("h3",U,[e(n,{to:"#Slots"},{default:a(()=>[s("#")]),_:1}),s("Slots")]),$]),t("div",z,[t("h3",O,[e(n,{to:"#StyleVariables"},{default:a(()=>[s("#")]),_:1}),s("Style Variables")]),W])])}const X=c(i,[["render",q]]);export{X as default};
