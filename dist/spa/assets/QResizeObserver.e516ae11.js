import{r as g,H as y,F as d,i as z,x as f,G as w,L as v,h as x,j as O,y as b}from"./index.d5656e80.js";function H(){const r=g(!y.value);return r.value===!1&&d(()=>{r.value=!0}),{isHydrated:r}}const m=typeof ResizeObserver!="undefined",h=m===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var E=z({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(r,{emit:p}){let n=null,t,o={width:-1,height:-1};function s(e){e===!0||r.debounce===0||r.debounce==="0"?u():n===null&&(n=setTimeout(u,r.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:e,offsetHeight:i}=t;(e!==o.width||i!==o.height)&&(o={width:e,height:i},p("resize",o))}}const{proxy:l}=O();if(l.trigger=s,m===!0){let e;const i=a=>{t=l.$el.parentNode,t?(e=new ResizeObserver(s),e.observe(t),u()):a!==!0&&v(()=>{i(!0)})};return d(()=>{i()}),f(()=>{n!==null&&clearTimeout(n),e!==void 0&&(e.disconnect!==void 0?e.disconnect():t&&e.unobserve(t))}),w}else{let a=function(){n!==null&&(clearTimeout(n),n=null),i!==void 0&&(i.removeEventListener!==void 0&&i.removeEventListener("resize",s,b.passive),i=void 0)},c=function(){a(),t&&t.contentDocument&&(i=t.contentDocument.defaultView,i.addEventListener("resize",s,b.passive),u())};const{isHydrated:e}=H();let i;return d(()=>{v(()=>{t=l.$el,t&&c()})}),f(a),()=>{if(e.value===!0)return x("object",{class:"q--avoid-card-border",style:h.style,tabindex:-1,type:"text/html",data:h.url,"aria-hidden":"true",onLoad:c})}}}});export{E as Q};
