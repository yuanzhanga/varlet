import{_ as p,b as o,e as c,m as r,p as s,q as n,w as l,P as a}from"./index-h4E0gBbf.js";const i={components:{}},h={class:"varlet-site-doc"},u=s("h1",null,"Import On Demand",-1),d={class:"card"},m={id:"Intro"},j=s("p",null,"On-demand import avoids the full import of components, which can effectively reduce the size of the release package.",-1),g={class:"card"},_={id:"AutomaticImport"},v=s("p",null,[a("via plugin "),s("a",{href:"https://github.com/antfu/unplugin-vue-components"},"unplugin-vue-components"),a(" and "),s("a",{href:"https://github.com/antfu/unplugin-auto-import"},"unplugin-auto-import"),a(" Implement components to automatically import on demand, This is our most recommended way.")],-1),y=s("h4",null,"Install Plugin",-1),f=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-meta"},"#"),s("span",{class:"bash"}," npm"),a(`
npm i @varlet/import-resolver unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," yarn"),a(`
yarn add @varlet/import-resolver unplugin-vue-components unplugin-auto-import -D
`),s("span",{class:"hljs-meta"},`
#`),s("span",{class:"bash"}," pnpm"),a(`
pnpm add @varlet/import-resolver unplugin-vue-components unplugin-auto-import -D
`)])],-1),k=s("h4",null,"Vite",-1),w=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vite.config.js"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" vue "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@vitejs/plugin-vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" components "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" autoImport "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'unplugin-auto-import/vite'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { VarletImportResolver } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/import-resolver'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { defineConfig } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vite'"),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` defineConfig({
  `),s("span",{class:"hljs-attr"},"plugins"),a(`: [
    vue(),
    components({
      `),s("span",{class:"hljs-attr"},"resolvers"),a(`: [VarletImportResolver()]
    }),
    autoImport({
      `),s("span",{class:"hljs-attr"},"resolvers"),a(": [VarletImportResolver({ "),s("span",{class:"hljs-attr"},"autoImport"),a(": "),s("span",{class:"hljs-literal"},"true"),a(` })]
    })
  ]
})
`)])],-1),b=s("h4",null,"Vue CLI",-1),I=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-comment"},"// vue.config.js"),a(`
`),s("span",{class:"hljs-keyword"},"const"),a(" Components = "),s("span",{class:"hljs-built_in"},"require"),a("("),s("span",{class:"hljs-string"},"'unplugin-vue-components/webpack'"),a(`)
`),s("span",{class:"hljs-keyword"},"const"),a(" AutoImport = "),s("span",{class:"hljs-built_in"},"require"),a("("),s("span",{class:"hljs-string"},"'unplugin-auto-import/webpack'"),a(`)
`),s("span",{class:"hljs-keyword"},"const"),a(" { VarletImportResolver } = "),s("span",{class:"hljs-built_in"},"require"),a("("),s("span",{class:"hljs-string"},"'@varlet/import-resolver'"),a(`)

`),s("span",{class:"hljs-built_in"},"module"),a(`.exports = {
  `),s("span",{class:"hljs-attr"},"configureWebpack"),a(`: {
    `),s("span",{class:"hljs-attr"},"plugins"),a(`: [
      Components.default({
        `),s("span",{class:"hljs-attr"},"resolvers"),a(`: [VarletImportResolver()]
      }),
      AutoImport.default({
        `),s("span",{class:"hljs-attr"},"resolvers"),a(": [VarletImportResolver({ "),s("span",{class:"hljs-attr"},"autoImport"),a(": "),s("span",{class:"hljs-literal"},"true"),a(` })]
      })
    ]
  }
}
`)])],-1),x=s("h4",null,"Typescript configuration note",-1),V=s("p",null,[a("In order to get good IDE syntax highlighting, please make sure that the type declaration files generated by the above two plugins are include by "),s("code",null,"typescript"),a(", which can be configured as follows in "),s("code",null,"tsconfig.json"),a(":")],-1),A=s("pre",{class:"hljs"},[s("code",null,[a(`{
  `),s("span",{class:"hljs-attr"},'"include"'),a(": ["),s("span",{class:"hljs-string"},'"auto-imports.d.ts"'),a(", "),s("span",{class:"hljs-string"},'"components.d.ts"'),a(`]
}
`)])],-1),C={class:"card"},B={id:"Manualimport"},M=s("p",null,[a("Each component is a "),s("code",null,"Vue plugin"),a(" and consists of "),s("code",null,"component logic"),a(" and "),s("code",null,"style files"),a(", which are manually imported and used as follows.")],-1),R=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-keyword"},"import"),a(" App "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'./App.vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { createApp } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Button } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index'"),a(`

createApp(App).use(Button)
`)])],-1),S=s("p",null,"OR",-1),D=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Button "),s("span",{class:"hljs-keyword"},"as"),a(" VarButton } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index'"),a(`
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a("Say Hello"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),H={class:"card"},q={id:"Manualimportandautomaticimportcomparison"},O=s("p",null,"Manual import",-1),$=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(" { Button "),s("span",{class:"hljs-keyword"},"as"),a(" VarButton, Snackbar } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'@varlet/ui'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/button/style/index'"),a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'@varlet/ui/es/snackbar/style/index'"),a(`

`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"handleClick"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  Snackbar(`),s("span",{class:"hljs-string"},"'Hello!'"),a(`)
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"handleClick"'),a(">")]),a("Say Hello"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1),E=s("p",null,"Automatic import",-1),N=s("pre",{class:"hljs"},[s("code",null,[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(),s("span",{class:"hljs-attr"},"setup"),a(">")]),s("span",{class:"javascript"},[a(`
`),s("span",{class:"hljs-function"},[s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title"},"handleClick"),a("("),s("span",{class:"hljs-params"}),a(") ")]),a(`{
  Snackbar(`),s("span",{class:"hljs-string"},"'Hello!'"),a(`)
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")]),a(`

`),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"var-button"),a(" @"),s("span",{class:"hljs-attr"},"click"),a("="),s("span",{class:"hljs-string"},'"handleClick"'),a(">")]),a("Say Hello"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"var-button"),a(">")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
`)])],-1);function T(P,z,L,U,W,F){const e=o("router-link"),t=o("var-site-code-example");return c(),r("div",h,[u,s("div",d,[s("h3",m,[n(e,{to:"#Intro"},{default:l(()=>[a("#")]),_:1}),a("Intro")]),j]),s("div",g,[s("h3",_,[n(e,{to:"#AutomaticImport"},{default:l(()=>[a("#")]),_:1}),a("Automatic Import")]),v,y,n(t,{"playground-ignore":""},{default:l(()=>[f]),_:1}),k,n(t,{"playground-ignore":""},{default:l(()=>[w]),_:1}),b,n(t,{"playground-ignore":""},{default:l(()=>[I]),_:1}),x,V,n(t,{"playground-ignore":""},{default:l(()=>[A]),_:1})]),s("div",C,[s("h3",B,[n(e,{to:"#Manualimport"},{default:l(()=>[a("#")]),_:1}),a("Manual import")]),M,n(t,{"playground-ignore":""},{default:l(()=>[R]),_:1}),S,n(t,{"playground-ignore":""},{default:l(()=>[D]),_:1})]),s("div",H,[s("h3",q,[n(e,{to:"#Manualimportandautomaticimportcomparison"},{default:l(()=>[a("#")]),_:1}),a("Manual import and automatic import comparison")]),O,n(t,{"playground-ignore":""},{default:l(()=>[$]),_:1}),E,n(t,{"playground-ignore":""},{default:l(()=>[N]),_:1})])])}const J=p(i,[["render",T]]);export{J as default};
