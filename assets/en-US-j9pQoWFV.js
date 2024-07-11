import{_ as c,b as l,e as d,m as h,p as s,q as a,w as e,P as t,a1 as r}from"./index-h4E0gBbf.js";const i={components:{}},p={class:"varlet-site-doc"},_=s("h1",null,"CollapseTransition",-1),g={class:"card"},u={id:"Intro"},m=s("p",null,"Transition animation of collapse and expansion.",-1),j={class:"card"},f={id:"BasicUsage"},v=s("p",null,[t("Use "),s("code",null,"expand"),t(" prop to collapse or expand the content.")],-1),x=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"import"),t(" { ref } "),s("span",{class:"hljs-keyword"},"from"),t(),s("span",{class:"hljs-string"},"'vue'"),t(`

`),s("span",{class:"hljs-keyword"},"const"),t(" expand = ref("),s("span",{class:"hljs-literal"},"true"),t(`)
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-switch"),t(),s("span",{class:"hljs-attr"},"v-model"),t("="),s("span",{class:"hljs-string"},'"expand"'),t(" />")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-divider"),t(" />")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"var-collapse-transition"),t(),s("span",{class:"hljs-attr"},":expand"),t("="),s("span",{class:"hljs-string"},'"expand"'),t(">")]),t(`
    Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying of the light. Though wise men at their end know dark is right, Because their words had forked no lightning they Do not go gentle into that good night. Good men, the last wave by, crying how bright Their frail deeds might have danced in a green bay, Rage, rage against the dying of the light.
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"var-collapse-transition"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
`)])],-1),y=s("h2",null,"API",-1),b={class:"card"},w={id:"Props"},k=r("<table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>expand</code></td><td>Collapse or expand content</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table>",1),B={class:"card"},P={id:"Slots"},S=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description"),s("th",null,"SlotProps")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("code",null,"default")]),s("td",null,"Collapsed or expanded content"),s("td",null,[s("code",null,"-")])])])],-1);function T(C,D,N,U,I,V){const n=l("router-link"),o=l("var-site-code-example");return d(),h("div",p,[_,s("div",g,[s("h3",u,[a(n,{to:"#Intro"},{default:e(()=>[t("#")]),_:1}),t("Intro")]),m]),s("div",j,[s("h3",f,[a(n,{to:"#BasicUsage"},{default:e(()=>[t("#")]),_:1}),t("Basic Usage")]),v,a(o,null,{default:e(()=>[x]),_:1})]),y,s("div",b,[s("h3",w,[a(n,{to:"#Props"},{default:e(()=>[t("#")]),_:1}),t("Props")]),k]),s("div",B,[s("h3",P,[a(n,{to:"#Slots"},{default:e(()=>[t("#")]),_:1}),t("Slots")]),S])])}const R=c(i,[["render",T]]);export{R as default};
