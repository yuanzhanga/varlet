import{a8 as f,_ as R,X as E,as as L,D as F,F as q,U as W,b as v,e as X,m as j,q as u,w as t,W as e,at as r,p as V,O as l,N as H,P as n,$ as J,a0 as K}from"./index-h4E0gBbf.js";import{A as i}from"./appType-xf773rte.js";const Q={basicUsage:"基本使用",currentValue:"当前的值:",setState:"设置状态值",setStyle:"修改图标和颜色",disabled:"禁用",readonly:"只读",eat:"吃饭",sleep:"睡觉",game:"游戏",checkAll:"全选",inverseAll:"反选",checkboxGroup:"复选框组",checkboxGroupOptions:"选项式 API",customFields:"自定义字段",vertical:"垂直布局",checkboxValidate:"复选框字段校验",checkboxGroupValidate:"复选框组字段校验",checkboxValidateMessage:"请勾选",checkboxGroupValidateMessage:"请全选",indeterminate:"不确定状态",indeterminateValue:"不确定状态的值:",toggle:"切换",max:"最大选中数量"},Y={basicUsage:"Basic Usage",currentValue:"Current value:",setState:"Set State Value",setStyle:"Modify The Icon And Color",disabled:"Disabled",readonly:"Readonly",eat:"Eat",sleep:"Sleep",game:"Game",checkAll:"Check All",inverseAll:"Inverse All",checkboxGroup:"CheckboxGroup",checkboxGroupOptions:"Options API",customFields:"Custom Fields",vertical:"Vertical Direction",checkboxValidate:"Checkbox Validation",checkboxGroupValidate:"CheckboxGroup Validate",checkboxValidateMessage:"Please check your choices",checkboxGroupValidateMessage:"Please check all",indeterminate:"Indeterminate",indeterminateValue:"Current value:",toggle:"Toggle",max:"Maximum Number Of Checked"},{add:$,use:Z,t:a,merge:ce}=f.useLocale(),ee=c=>{f.use(c),Z(c)};f.add("zh-CN",f.zhCN);f.add("en-US",f.enUS);$("zh-CN",Q);$("en-US",Y);const le=c=>(J("data-v-de12fc25"),c=c(),K(),c),ae={class:"relation"},ue={class:"relation"},te={class:"relation"},oe={class:"relation"},de={class:"relation"},ne=le(()=>V("div",{class:"space"},null,-1)),se={__name:"index",setup(c){const w=E({value:!1,value2:0,value3:!1,value4:!1,value5:!1,value6:[],value7:!1,value8:[],value9:[],value10:!1,value11:[],group:null,indeterminate:!0,optionsValue:[],fieldValue:[]}),{value:k,value2:_,value3:b,value4:x,value5:g,value6:h,value7:U,value8:y,value9:C,group:P,value10:G,value11:I,indeterminate:m,optionsValue:S,fieldValue:A}=L(w),T=F(()=>[{label:a("eat"),value:0},{label:a("sleep"),value:1},{label:a("game"),value:2,disabled:!0}]),B=F(()=>[{name:a("eat"),id:0},{name:a("sleep"),id:1},{name:a("game"),id:2}]);return q(ee),W(),(z,o)=>{const s=v("var-checkbox"),M=v("var-icon"),N=v("var-button"),O=v("var-space"),p=v("var-checkbox-group"),D=v("var-divider");return X(),j(H,null,[u(e(i),null,{default:t(()=>[n(l(e(a)("basicUsage")),1)]),_:1}),u(s,{modelValue:e(k),"onUpdate:modelValue":o[0]||(o[0]=d=>r(k)?k.value=d:null)},{default:t(()=>[n(l(e(a)("currentValue"))+" "+l(e(k)),1)]),_:1},8,["modelValue"]),u(e(i),null,{default:t(()=>[n(l(e(a)("setState")),1)]),_:1}),u(s,{"unchecked-value":0,"checked-value":1,modelValue:e(_),"onUpdate:modelValue":o[1]||(o[1]=d=>r(_)?_.value=d:null)},{default:t(()=>[n(l(e(a)("currentValue"))+" "+l(e(_)),1)]),_:1},8,["modelValue"]),u(e(i),null,{default:t(()=>[n(l(e(a)("setStyle")),1)]),_:1}),u(s,{"unchecked-color":"var(--color-warning)","checked-color":"var(--color-danger)",modelValue:e(b),"onUpdate:modelValue":o[2]||(o[2]=d=>r(b)?b.value=d:null)},{"unchecked-icon":t(()=>[u(M,{name:"heart-half-full",size:"24px"})]),"checked-icon":t(()=>[u(M,{name:"heart",size:"24px"})]),default:t(()=>[n(l(e(a)("currentValue"))+" "+l(e(b)),1)]),_:1},8,["modelValue"]),u(e(i),null,{default:t(()=>[n(l(e(a)("disabled")),1)]),_:1}),u(s,{disabled:"",modelValue:e(x),"onUpdate:modelValue":o[3]||(o[3]=d=>r(x)?x.value=d:null)},{default:t(()=>[n(l(e(a)("currentValue"))+" "+l(e(x)),1)]),_:1},8,["modelValue"]),u(e(i),null,{default:t(()=>[n(l(e(a)("readonly")),1)]),_:1}),u(s,{readonly:"",modelValue:e(g),"onUpdate:modelValue":o[4]||(o[4]=d=>r(g)?g.value=d:null)},{default:t(()=>[n(l(e(a)("currentValue"))+" "+l(e(g)),1)]),_:1},8,["modelValue"]),u(e(i),null,{default:t(()=>[n(l(e(a)("indeterminate")),1)]),_:1}),u(O,{size:[0,10]},{default:t(()=>[u(s,{modelValue:e(G),"onUpdate:modelValue":o[5]||(o[5]=d=>r(G)?G.value=d:null),indeterminate:e(m),"onUpdate:indeterminate":o[6]||(o[6]=d=>r(m)?m.value=d:null)},{default:t(()=>[n(l(e(a)("indeterminateValue"))+" "+l(e(m)),1)]),_:1},8,["modelValue","indeterminate"]),u(N,{type:"primary",onClick:o[7]||(o[7]=d=>m.value=!e(m))},{default:t(()=>[n(l(e(a)("toggle")),1)]),_:1})]),_:1}),u(e(i),null,{default:t(()=>[n(l(e(a)("checkboxGroup")),1)]),_:1}),u(p,{ref_key:"group",ref:P,modelValue:e(h),"onUpdate:modelValue":o[8]||(o[8]=d=>r(h)?h.value=d:null)},{default:t(()=>[u(s,{"checked-value":0},{default:t(()=>[n(l(e(a)("eat")),1)]),_:1}),u(s,{"checked-value":1},{default:t(()=>[n(l(e(a)("sleep")),1)]),_:1})]),_:1},8,["modelValue"]),V("div",ae,l(e(a)("currentValue"))+" "+l(e(h)),1),u(D,{margin:"14px 0"}),u(O,{size:[0,10]},{default:t(()=>[u(N,{type:"primary",onClick:o[9]||(o[9]=d=>z.$refs.group.checkAll())},{default:t(()=>[n(l(e(a)("checkAll")),1)]),_:1}),u(N,{type:"primary",onClick:o[10]||(o[10]=d=>z.$refs.group.inverseAll())},{default:t(()=>[n(l(e(a)("inverseAll")),1)]),_:1})]),_:1}),u(e(i),null,{default:t(()=>[n(l(e(a)("checkboxGroupOptions")),1)]),_:1}),u(p,{modelValue:e(S),"onUpdate:modelValue":o[11]||(o[11]=d=>r(S)?S.value=d:null),options:T.value},null,8,["modelValue","options"]),V("div",ue,l(e(a)("currentValue"))+" "+l(e(S)),1),u(e(i),null,{default:t(()=>[n(l(e(a)("customFields")),1)]),_:1}),u(p,{modelValue:e(A),"onUpdate:modelValue":o[12]||(o[12]=d=>r(A)?A.value=d:null),options:B.value,"label-key":"name","value-key":"id"},null,8,["modelValue","options"]),V("div",te,l(e(a)("currentValue"))+" "+l(e(A)),1),u(e(i),null,{default:t(()=>[n(l(e(a)("vertical")),1)]),_:1}),u(p,{modelValue:e(C),"onUpdate:modelValue":o[13]||(o[13]=d=>r(C)?C.value=d:null),direction:"vertical"},{default:t(()=>[u(s,{"checked-value":0},{default:t(()=>[n(l(e(a)("eat")),1)]),_:1}),u(s,{"checked-value":1},{default:t(()=>[n(l(e(a)("sleep")),1)]),_:1})]),_:1},8,["modelValue"]),V("div",oe,l(e(a)("currentValue"))+" "+l(e(C)),1),u(e(i),null,{default:t(()=>[n(l(e(a)("max")),1)]),_:1}),u(p,{modelValue:e(I),"onUpdate:modelValue":o[14]||(o[14]=d=>r(I)?I.value=d:null),max:1},{default:t(()=>[u(s,{"checked-value":0},{default:t(()=>[n(l(e(a)("eat")),1)]),_:1}),u(s,{"checked-value":1},{default:t(()=>[n(l(e(a)("sleep")),1)]),_:1})]),_:1},8,["modelValue"]),u(e(i),null,{default:t(()=>[n(l(e(a)("checkboxValidate")),1)]),_:1}),u(s,{modelValue:e(U),"onUpdate:modelValue":o[15]||(o[15]=d=>r(U)?U.value=d:null),rules:[d=>d||e(a)("checkboxValidateMessage")]},{default:t(()=>[n(l(e(a)("currentValue"))+" "+l(e(U)),1)]),_:1},8,["modelValue","rules"]),u(e(i),null,{default:t(()=>[n(l(e(a)("checkboxGroupValidate")),1)]),_:1}),u(p,{modelValue:e(y),"onUpdate:modelValue":o[16]||(o[16]=d=>r(y)?y.value=d:null),rules:[d=>d.length===2||e(a)("checkboxGroupValidateMessage")]},{default:t(()=>[u(s,{"checked-value":0},{default:t(()=>[n(l(e(a)("eat")),1)]),_:1}),u(s,{"checked-value":1},{default:t(()=>[n(l(e(a)("sleep")),1)]),_:1})]),_:1},8,["modelValue","rules"]),V("div",de,l(e(a)("currentValue"))+" "+l(e(y)),1),ne],64)}}},me=R(se,[["__scopeId","data-v-de12fc25"]]);export{me as default};
