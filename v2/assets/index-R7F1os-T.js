import{d as p,r as l,F as f,a7 as g,a8 as o,n as S,_ as c,e as d,f as z,x as C,y as h,a9 as U}from"./index-vwO9GBzB.js";import{d as k,c as y,w as $,a as L}from"./components-PfdRgJoR.js";import{t as N}from"./elements-b2tD0H-w.js";const m={name:String,size:[Number,String],color:String,namespace:{type:String,default:"var-icon"},transition:{type:[Number,String],default:0},animationClass:String,onClick:k()},{name:v,n:R,classes:w}=y("icon"),I=p({name:v,props:m,setup(e){const n=l(""),a=l(!1);f(()=>e.name,r,{immediate:!0});async function r(s,i){const{transition:t}=e;if(i==null||o(t)===0){n.value=s;return}a.value=!0,await S(),setTimeout(()=>{i!=null&&(n.value=s),a.value=!1},o(t))}return{nextName:n,animateInProgress:a,n:R,classes:w,isURL:g,toNumber:o,toSizeUnit:N}}});function b(e,n,a,r,s,i){return d(),z(U(e.isURL(e.name)?"img":"i"),{class:C(e.classes(e.n(),[e.namespace!==e.n(),e.namespace],`${e.namespace}--set`,[e.isURL(e.name),e.n("image"),`${e.namespace}-${e.nextName}`],[e.animateInProgress,e.animationClass==null?e.n("--shrinking"):e.animationClass])),style:h({color:e.color,"transition-duration":`${e.toNumber(e.transition)}ms`,width:e.isURL(e.name)?e.toSizeUnit(e.size):null,height:e.isURL(e.name)?e.toSizeUnit(e.size):null,fontSize:e.toSizeUnit(e.size)}),src:e.isURL(e.name)?e.nextName:null,onClick:e.onClick},null,8,["class","style","src","onClick"])}const u=c(I,[["render",b]]);$(u);L(u,m);export{u as I};
