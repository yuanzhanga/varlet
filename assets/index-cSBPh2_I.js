import{a8 as i,_ as $,r as u,F as j,U as G,b as p,e as H,m as J,q as a,w as t,W as o,N as K,P as R,O as q,$ as Q,a0 as X,p as Y}from"./index-h4E0gBbf.js";import{A as E}from"./appType-xf773rte.js";const Z={standard:"标准外观",outlined:"外边框外观",smallSize:"小尺寸",plainMode:"朴素模式",textarea:"文本域",maxlength:"最大长度",disabled:"禁用",trim:"移除空白字符",readonly:"只读",clearable:"可清除",clearIconSlot:"使用插槽自定义清除图标",displayIcon:"显示图标",customIconSize:"自定义图标尺寸",validate:"字段校验",placeholder:"请输入文本",numberPlaceholder:"请输入数字",maxMessage:"文本长度必须大于6",clearableText:"可清除文本"},_={standard:"Standard Variant",outlined:"Outlined Variant",smallSize:"Small Size",plainMode:"Plain Mode",textarea:"Textarea",maxlength:"Maxlength",disabled:"Disabled",trim:"Removes whitespace from both ends of this string",readonly:"Readonly",clearable:"Clearable",clearIconSlot:"Use the clear icon slot",displayIcon:"Display Icon",customIconSize:"Custom Icon Size",validate:"Validate",placeholder:"Please enter text",numberPlaceholder:"Please enter number",maxMessage:"Text length must be greater than 6",clearableText:"Clearable Text"},{add:W,use:ee,t:d,merge:re}=i.useLocale(),le=s=>{i.use(s),ee(s)};i.add("zh-CN",i.zhCN);i.add("en-US",i.enUS);W("zh-CN",Z);W("en-US",_);const ae=s=>(Q("data-v-faea628a"),s=s(),X(),s),oe=ae(()=>Y("div",{style:{height:"40px"}},null,-1)),de={__name:"index",setup(s){const m=u(""),V=u(""),c=u(""),v=u(""),h=u(""),b=u(""),U=u(""),x=u(""),g=u(""),S=u(""),z=u(""),f=u(""),y=u(""),I=u(""),C=u(""),M=u(""),N=u(""),P=u(""),T=u(""),k=u(""),w=u(""),B=u(""),D=u(""),A=u(""),F=u(""),L=u("");return j(le),G(),(ne,l)=>{const n=p("var-input"),r=p("var-icon"),O=p("var-space");return H(),J(K,null,[a(o(E),null,{default:t(()=>[R(q(o(d)("standard")),1)]),_:1}),a(O,{direction:"column",size:["3vmin",0]},{default:t(()=>[a(n,{placeholder:o(d)("placeholder"),modelValue:m.value,"onUpdate:modelValue":l[0]||(l[0]=e=>m.value=e)},null,8,["placeholder","modelValue"]),a(n,{placeholder:o(d)("numberPlaceholder"),type:"number",modelValue:y.value,"onUpdate:modelValue":l[1]||(l[1]=e=>y.value=e)},null,8,["placeholder","modelValue"]),a(n,{placeholder:o(d)("readonly"),readonly:"",modelValue:V.value,"onUpdate:modelValue":l[2]||(l[2]=e=>V.value=e)},null,8,["placeholder","modelValue"]),a(n,{placeholder:o(d)("disabled"),disabled:"",modelValue:c.value,"onUpdate:modelValue":l[3]||(l[3]=e=>c.value=e)},null,8,["placeholder","modelValue"]),a(n,{placeholder:o(d)("clearable"),clearable:"",modelValue:v.value,"onUpdate:modelValue":l[4]||(l[4]=e=>v.value=e)},null,8,["placeholder","modelValue"]),a(n,{placeholder:o(d)("clearIconSlot"),clearable:"",modelValue:h.value,"onUpdate:modelValue":l[5]||(l[5]=e=>h.value=e)},{"clear-icon":t(({clear:e})=>[a(r,{name:"error",onClick:e},null,8,["onClick"])]),_:1},8,["placeholder","modelValue"]),a(n,{placeholder:o(d)("validate"),rules:[e=>e.length>6||o(d)("maxMessage")],modelValue:b.value,"onUpdate:modelValue":l[6]||(l[6]=e=>b.value=e)},null,8,["placeholder","rules","modelValue"]),a(n,{placeholder:o(d)("displayIcon"),modelValue:U.value,"onUpdate:modelValue":l[7]||(l[7]=e=>U.value=e)},{"prepend-icon":t(()=>[a(r,{class:"prepend-icon",name:"github"})]),"append-icon":t(()=>[a(r,{class:"append-icon",name:"github"})]),_:1},8,["placeholder","modelValue"]),a(n,{placeholder:o(d)("customIconSize"),modelValue:x.value,"onUpdate:modelValue":l[8]||(l[8]=e=>x.value=e)},{"prepend-icon":t(()=>[a(r,{class:"prepend-icon",name:"github",size:"8vmin"})]),"append-icon":t(()=>[a(r,{class:"append-icon",name:"github",size:"12vmin"})]),_:1},8,["placeholder","modelValue"]),a(n,{placeholder:o(d)("maxlength"),maxlength:10,modelValue:g.value,"onUpdate:modelValue":l[9]||(l[9]=e=>g.value=e)},null,8,["placeholder","modelValue"]),a(n,{placeholder:o(d)("textarea"),textarea:"",modelValue:S.value,"onUpdate:modelValue":l[10]||(l[10]=e=>S.value=e)},null,8,["placeholder","modelValue"]),a(n,{placeholder:o(d)("smallSize"),size:"small",modelValue:z.value,"onUpdate:modelValue":l[11]||(l[11]=e=>z.value=e)},null,8,["placeholder","modelValue"]),a(n,{placeholder:o(d)("trim"),modelValue:f.value,"onUpdate:modelValue":l[12]||(l[12]=e=>f.value=e),modelModifiers:{trim:!0}},null,8,["placeholder","modelValue"])]),_:1}),a(o(E),{style:{"margin-top":"10vmin"}},{default:t(()=>[R(q(o(d)("outlined")),1)]),_:1}),a(O,{direction:"column",size:["6vmin",0]},{default:t(()=>[a(n,{variant:"outlined",placeholder:o(d)("placeholder"),modelValue:I.value,"onUpdate:modelValue":l[13]||(l[13]=e=>I.value=e)},null,8,["placeholder","modelValue"]),a(n,{variant:"outlined",placeholder:o(d)("numberPlaceholder"),type:"number",modelValue:L.value,"onUpdate:modelValue":l[14]||(l[14]=e=>L.value=e)},null,8,["placeholder","modelValue"]),a(n,{variant:"outlined",placeholder:o(d)("readonly"),readonly:"",modelValue:C.value,"onUpdate:modelValue":l[15]||(l[15]=e=>C.value=e)},null,8,["placeholder","modelValue"]),a(n,{variant:"outlined",placeholder:o(d)("disabled"),disabled:"",modelValue:M.value,"onUpdate:modelValue":l[16]||(l[16]=e=>M.value=e)},null,8,["placeholder","modelValue"]),a(n,{variant:"outlined",placeholder:o(d)("clearable"),clearable:"",modelValue:N.value,"onUpdate:modelValue":l[17]||(l[17]=e=>N.value=e)},null,8,["placeholder","modelValue"]),a(n,{variant:"outlined",placeholder:o(d)("clearIconSlot"),clearable:"",modelValue:P.value,"onUpdate:modelValue":l[18]||(l[18]=e=>P.value=e)},{"clear-icon":t(({clear:e})=>[a(r,{name:"error",onClick:e},null,8,["onClick"])]),_:1},8,["placeholder","modelValue"]),a(n,{variant:"outlined",placeholder:o(d)("validate"),rules:[e=>e.length>6||o(d)("maxMessage")],modelValue:T.value,"onUpdate:modelValue":l[19]||(l[19]=e=>T.value=e)},null,8,["placeholder","rules","modelValue"]),a(n,{variant:"outlined",placeholder:o(d)("displayIcon"),modelValue:k.value,"onUpdate:modelValue":l[20]||(l[20]=e=>k.value=e)},{"prepend-icon":t(()=>[a(r,{class:"prepend-icon",name:"github"})]),"append-icon":t(()=>[a(r,{class:"append-icon",name:"github"})]),_:1},8,["placeholder","modelValue"]),a(n,{variant:"outlined",placeholder:o(d)("customIconSize"),modelValue:w.value,"onUpdate:modelValue":l[21]||(l[21]=e=>w.value=e)},{"prepend-icon":t(()=>[a(r,{class:"prepend-icon",name:"github",size:"8vmin"})]),"append-icon":t(()=>[a(r,{class:"append-icon",name:"github",size:"12vmin"})]),_:1},8,["placeholder","modelValue"]),a(n,{variant:"outlined",placeholder:o(d)("maxlength"),maxlength:10,modelValue:B.value,"onUpdate:modelValue":l[22]||(l[22]=e=>B.value=e)},null,8,["placeholder","modelValue"]),a(n,{variant:"outlined",placeholder:o(d)("textarea"),textarea:"",modelValue:D.value,"onUpdate:modelValue":l[23]||(l[23]=e=>D.value=e)},null,8,["placeholder","modelValue"]),a(n,{variant:"outlined",placeholder:o(d)("smallSize"),size:"small",modelValue:A.value,"onUpdate:modelValue":l[24]||(l[24]=e=>A.value=e)},null,8,["placeholder","modelValue"]),a(n,{variant:"outlined",placeholder:o(d)("trim"),modelValue:F.value,"onUpdate:modelValue":l[25]||(l[25]=e=>F.value=e),modelModifiers:{trim:!0}},null,8,["placeholder","modelValue"])]),_:1}),oe],64)}}},se=$(de,[["__scopeId","data-v-faea628a"]]);export{se as default};
