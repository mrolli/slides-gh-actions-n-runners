import{C as L,D as w}from"../modules/unplugin-icons-CF9Sqp5E.js";import{d as I,t as N,P as B,C as y,N as E,y as v,aB as q,o as c,b as _,f as M,A as u,c as C,g as V,i as D,h as $}from"../modules/vue-acKFYeAC.js";import{v as k,ab as z,C as K,ac as R,ad as P}from"../index-BnUsXlDE.js";import{u as U}from"./context-CyrgaRxZ.js";const W=["title"],O=I({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:k.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(b){const e=b,{$clicksContext:a}=U(),s=N(),d=z();B(()=>{a.unregister(d)}),y(()=>{var t;(t=s.value)==null||t.classList.toggle("slidev-code-line-numbers",e.lines)}),E(()=>{var r;if(!a||!((r=e.ranges)!=null&&r.length))return;const t=a.calculateSince(e.at,e.ranges.length-1);a.register(d,t);const o=v(()=>t?Math.max(0,a.current-t.start+1):K),n=v(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());y(()=>{if(!s.value)return;let i=e.ranges[o.value]??n.value;const g=i==="hide";s.value.classList.toggle(R,g),g&&(i=e.ranges[o.value+1]??n.value);const h=s.value.querySelector(".shiki"),f=Array.from(h.querySelectorAll("code > .line")),A=f.length;if(P(i,A,e.startLine,l=>[f[l]]),e.maxHeight){const l=Array.from(h.querySelectorAll(".line.highlighted"));l.reduce((m,H)=>H.offsetHeight+m,0)>s.value.offsetHeight?l[0].scrollIntoView({behavior:"smooth",block:"start"}):l.length>0&&l[Math.round((l.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:p,copy:S}=q();function x(){var o,n;const t=(n=(o=s.value)==null?void 0:o.querySelector(".slidev-code"))==null?void 0:n.textContent;t&&S(t)}return(t,o)=>{const n=L,r=w;return c(),_("div",{ref_key:"el",ref:s,class:D(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:$({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[M(t.$slots,"default"),u(k).codeCopy?(c(),_("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:u(p)?"Copied":"Copy",onClick:o[0]||(o[0]=i=>x())},[u(p)?(c(),C(n,{key:0,class:"p-2 w-8 h-8"})):(c(),C(r,{key:1,class:"p-2 w-8 h-8"}))],8,W)):V("",!0)],6)}}});export{O as _};