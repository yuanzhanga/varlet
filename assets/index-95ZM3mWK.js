import{a8 as m,_ as B,X as S,F as k,U as N,aF as E,b as c,e as V,m as U,q as e,w as n,W as t,N as R,s as p,au as x,P as d,O as r,R as I}from"./index-h4E0gBbf.js";import{A as f}from"./appType-xf773rte.js";const D={basicUsage:"基本使用",preview:"文件预览",customPreview:"自定义预览",state:"上传状态",maxlength:"文件数量限制",maxsize:"文件大小限制",beforeRead:"上传预处理",disabled:"禁用",readonly:"只读",validate:"字段校验",validateMessage:"存在上传失败的文件",style:"自定义上传样式",upload:"上传",beforeRemove:"删除前处理",removeTitle:"是否删除?",removeMessage:"删除后无法撤回",fileSizeExceedsLimit:"文件大小超出限制",fileLessThen:"文件小于1M，上传成功",fileLargeThen:"文件大于1M，不能上传",customRender:"自定义渲染文件列表",useProgress:"使用进度条",beforeFilter:"文件列表过滤",clickAction:"上传按钮点击事件"},O={basicUsage:"Basic Usage",preview:"File Preview",customPreview:"Custom Preview",state:"Upload State",maxlength:"File Maxlength",maxsize:"File Size Limit",beforeRead:"Upload Preprocessing",disabled:"Disabled",readonly:"Readonly",validate:"Validate",validateMessage:"There is a file that failed to upload",style:"Customize upload styles",upload:"Upload",beforeRemove:"Remove Preprocessing",removeTitle:"Delete or not?",removeMessage:"Cannot be withdrawn after deletion",fileSizeExceedsLimit:"file size exceeds limit",fileLessThen:"the file is less than 1M, the upload is successful",fileLargeThen:"the file is larger than 1M and cannot be uploaded",customRender:"Custom render file list",useProgress:"Use Progress",beforeFilter:"File List Filter",clickAction:"Upload Button Click Event"},{add:_,use:W,t:s,merge:J}=m.useLocale(),$=g=>{m.use(g),W(g)};m.add("zh-CN",m.zhCN);m.add("en-US",m.enUS);_("zh-CN",D);_("en-US",O);const q=["src"],X={__name:"index",setup(g){const o=S({files:[],files2:[{url:"cat.jpg",cover:"cat.jpg"},{url:"https://www.runoob.com/try/demo_source/mov_bbb.mp4",cover:"cover.jpg"}],files3:[{url:"cat.jpg",cover:"cat.jpg",state:"loading"},{url:"cat.jpg",cover:"cat.jpg",state:"success"},{url:"cat.jpg",cover:"cat.jpg",state:"error"}],files4:[],files5:[],files6:[],files7:[],files8:[],files9:[],files10:[{url:"cat.jpg",cover:"cat.jpg",state:"error"}],files11:[{url:"cat.jpg",cover:"cat.jpg"}],files12:[{url:"cat.jpg",cover:"cat.jpg",state:"loading"},{url:"cat.jpg",cover:"cat.jpg",state:"success"},{url:"cat.jpg",cover:"cat.jpg",state:"error"}],files13:[],files14:[],files15:[]});let v;k($),N(),E(()=>{window.clearInterval(v)});function j(i){console.log(i)}function y(i){i.state="loading",setInterval(()=>{i.state="success"},1e3)}function z(i){i.state="loading",i.progress=0,v=window.setInterval(()=>{if(i.progress===100){window.clearInterval(v),i.state="success";return}i.progress+=10},250)}function P(){p.warning(s("fileSizeExceedsLimit"))}function C(i){return i.file.size<=1*1024*1024?(p.success(s("fileLessThen")),!0):(p.warning(s("fileLargeThen")),!1)}async function L(){return await x({title:s("removeTitle"),message:s("removeMessage")})==="confirm"}function T(i){return i.filter(a=>a.name.endsWith("png"))}function A(i){x({title:s("customPreview"),message:i.url.slice(0,100)})}function F(i){p.loading("delay 1s"),setTimeout(()=>{p.clear(),i()},1e3)}return(i,a)=>{const u=c("var-uploader"),w=c("var-button"),M=c("var-icon"),b=c("var-space");return V(),U(R,null,[e(t(f),null,{default:n(()=>[d(r(t(s)("basicUsage")),1)]),_:1}),e(u,{modelValue:o.files,"onUpdate:modelValue":a[0]||(a[0]=l=>o.files=l),onAfterRead:j},null,8,["modelValue"]),e(t(f),null,{default:n(()=>[d(r(t(s)("preview")),1)]),_:1}),e(u,{modelValue:o.files2,"onUpdate:modelValue":a[1]||(a[1]=l=>o.files2=l)},null,8,["modelValue"]),e(t(f),null,{default:n(()=>[d(r(t(s)("customPreview")),1)]),_:1}),e(u,{modelValue:o.files11,"onUpdate:modelValue":a[2]||(a[2]=l=>o.files11=l),"prevent-default-preview":"",onPreview:A},null,8,["modelValue"]),e(t(f),null,{default:n(()=>[d(r(t(s)("state")),1)]),_:1}),e(u,{modelValue:o.files3,"onUpdate:modelValue":a[3]||(a[3]=l=>o.files3=l),onAfterRead:y},null,8,["modelValue"]),e(t(f),null,{default:n(()=>[d(r(t(s)("useProgress")),1)]),_:1}),e(u,{modelValue:o.files13,"onUpdate:modelValue":a[4]||(a[4]=l=>o.files13=l),onAfterRead:z},null,8,["modelValue"]),e(t(f),null,{default:n(()=>[d(r(t(s)("maxlength")),1)]),_:1}),e(u,{modelValue:o.files4,"onUpdate:modelValue":a[5]||(a[5]=l=>o.files4=l),maxlength:1},null,8,["modelValue"]),e(t(f),null,{default:n(()=>[d(r(t(s)("maxsize")),1)]),_:1}),e(u,{modelValue:o.files5,"onUpdate:modelValue":a[6]||(a[6]=l=>o.files5=l),maxsize:1024,onOversize:P},null,8,["modelValue"]),e(t(f),null,{default:n(()=>[d(r(t(s)("beforeFilter")),1)]),_:1}),e(u,{modelValue:o.files14,"onUpdate:modelValue":a[7]||(a[7]=l=>o.files14=l),multiple:"",onBeforeFilter:T},null,8,["modelValue"]),e(t(f),null,{default:n(()=>[d(r(t(s)("beforeRead")),1)]),_:1}),e(u,{modelValue:o.files7,"onUpdate:modelValue":a[8]||(a[8]=l=>o.files7=l),onBeforeRead:C},null,8,["modelValue"]),e(t(f),null,{default:n(()=>[d(r(t(s)("clickAction")),1)]),_:1}),e(u,{modelValue:o.files15,"onUpdate:modelValue":a[9]||(a[9]=l=>o.files15=l),onClickAction:F},null,8,["modelValue"]),e(t(f),null,{default:n(()=>[d(r(t(s)("disabled")),1)]),_:1}),e(u,{disabled:"",modelValue:o.files8,"onUpdate:modelValue":a[10]||(a[10]=l=>o.files8=l)},null,8,["modelValue"]),e(t(f),null,{default:n(()=>[d(r(t(s)("readonly")),1)]),_:1}),e(u,{readonly:"",modelValue:o.files9,"onUpdate:modelValue":a[11]||(a[11]=l=>o.files9=l)},null,8,["modelValue"]),e(t(f),null,{default:n(()=>[d(r(t(s)("beforeRemove")),1)]),_:1}),e(u,{modelValue:o.files11,"onUpdate:modelValue":a[12]||(a[12]=l=>o.files11=l),onBeforeRemove:L},null,8,["modelValue"]),e(t(f),null,{default:n(()=>[d(r(t(s)("style")),1)]),_:1}),e(u,{modelValue:o.files6,"onUpdate:modelValue":a[13]||(a[13]=l=>o.files6=l)},{default:n(()=>[e(w,{type:"primary"},{default:n(()=>[d(r(t(s)("upload")),1)]),_:1})]),_:1},8,["modelValue"]),e(t(f),null,{default:n(()=>[d(r(t(s)("validate")),1)]),_:1}),e(u,{rules:[(l,h)=>h.getError().length===0||t(s)("validateMessage")],modelValue:o.files10,"onUpdate:modelValue":a[14]||(a[14]=l=>o.files10=l)},null,8,["rules","modelValue"]),e(t(f),null,{default:n(()=>[d(r(t(s)("customRender")),1)]),_:1}),e(b,null,{default:n(()=>[(V(!0),U(R,null,I(o.files12,l=>(V(),U("img",{class:"custom-uploader-file",key:l.id,src:l.cover},null,8,q))),128)),e(u,{"hide-list":"",modelValue:o.files12,"onUpdate:modelValue":a[15]||(a[15]=l=>o.files12=l)},{default:n(()=>[e(w,{round:"",type:"primary"},{default:n(()=>[e(M,{size:28,name:"upload"})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(b)],64)}}},K=B(X,[["__scopeId","data-v-01af8222"]]);export{K as default};
