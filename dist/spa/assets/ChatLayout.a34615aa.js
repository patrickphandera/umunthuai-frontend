import{Q as l}from"./QBtn.8ae4fc3a.js";import{Q as u,a as c,b as i,c as d,d as f}from"./QLayout.e9700190.js";import{l as _}from"./auth.service.a740dc46.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,a as g,o as v,c as w,w as a,b as e,d as b,e as k}from"./index.d5656e80.js";import"./QResizeObserver.e516ae11.js";const C={setup(){const t=p(!1);return{leftDrawerOpen:t,toggleLeftDrawer:()=>{t.value=!t.value},logOut:async()=>{await confirm("Mukutulusidwa ku sambali")&&await _()}}}};function x(t,o,n,r,y,Q){const s=g("router-view");return v(),w(u,null,{default:a(()=>[e(d,{elevated:"",persistent:""},{default:a(()=>[e(c,null,{default:a(()=>[e(l,{flat:"",dense:"",round:"",icon:"balance","aria-label":"Menu",onClick:r.toggleLeftDrawer},null,8,["onClick"]),e(i,null,{default:a(()=>o[0]||(o[0]=[b(" UmunthuAI ")])),_:1}),k("div",null,[e(l,{color:"white",class:"text-primary","text-color":"primary",label:"Kutuluka",onClick:r.logOut},null,8,["onClick"])])]),_:1})]),_:1}),e(f,{scrollable:""},{default:a(()=>[e(s)]),_:1})]),_:1})}var N=m(C,[["render",x],["__scopeId","data-v-c7df6e14"]]);export{N as default};