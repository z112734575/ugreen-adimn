import{_ as t}from"./ContentWrap.vue_vue_type_script_setup_true_lang-121f3973.js";import{K as e,L as a,N as n,ar as o,d as s,S as l,W as p,as as i,at as r,r as u,x as m,au as f,X as g,E as x,av as v,ad as d,aw as y,o as c,c as C,e as _,aa as b,n as h,a as k,Z as S,ac as w,ag as j,h as $,w as T,g as E,k as W}from"./index-01f15111.js";import{_ as z}from"./Sticky.vue_vue_type_script_setup_true_lang-3fecc58a.js";import{C as A}from"./event-5568c9d8.js";import{g as I}from"./scroll-f8a76bd6.js";import"./el-card-1be77824.js";import"./el-popper-021efdd9.js";import"./constants-83a5117c.js";const N=e({zIndex:{type:a([Number,String]),default:100},target:{type:String,default:""},offset:{type:Number,default:0},position:{type:String,values:["top","bottom"],default:"top"}}),Y={scroll:({scrollTop:t,fixed:e})=>n(t)&&o(e),[A]:t=>o(t)},q="ElAffix",B=s({name:q});const D=j(w(s({...B,props:N,emits:Y,setup(t,{expose:e,emit:a}){const n=t,o=l("affix"),s=p(),w=p(),j=p(),{height:$}=i(),{height:T,width:E,top:W,bottom:z,update:A}=r(w,{windowScroll:!1}),N=r(s),Y=u(!1),B=u(0),D=u(0),K=m((()=>({height:Y.value?`${T.value}px`:"",width:Y.value?`${E.value}px`:""}))),L=m((()=>{if(!Y.value)return{};const t=n.offset?f(n.offset):0;return{height:`${T.value}px`,width:`${E.value}px`,top:"top"===n.position?t:"",bottom:"bottom"===n.position?t:"",transform:D.value?`translateY(${D.value}px)`:"",zIndex:n.zIndex}})),R=()=>{if(j.value)if(B.value=j.value instanceof Window?document.documentElement.scrollTop:j.value.scrollTop||0,"top"===n.position)if(n.target){const t=N.bottom.value-n.offset-T.value;Y.value=n.offset>W.value&&N.bottom.value>0,D.value=t<0?t:0}else Y.value=n.offset>W.value;else if(n.target){const t=$.value-N.top.value-n.offset-T.value;Y.value=$.value-n.offset<z.value&&$.value>N.top.value,D.value=t<0?-t:0}else Y.value=$.value-n.offset<z.value};return g(Y,(t=>a("change",t))),x((()=>{var t;n.target?(s.value=null!=(t=document.querySelector(n.target))?t:void 0,s.value||v(q,`Target is not existed: ${n.target}`)):s.value=document.documentElement,j.value=I(w.value,!0),A()})),d(j,"scroll",(()=>{A(),a("scroll",{scrollTop:B.value,fixed:Y.value})})),y(R),e({update:R,updateRoot:A}),(t,e)=>(c(),C("div",{ref_key:"root",ref:w,class:h(k(o).b()),style:S(k(K))},[_("div",{class:h({[k(o).m("fixed")]:Y.value}),style:S(k(L))},[b(t.$slots,"default")],6)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/affix/src/affix.vue"]])),K=_("div",{style:{padding:"10px","background-color":"lightblue"}}," Sticky 距离顶部90px ",-1),L=_("p",{style:{margin:"80px"}},"Content",-1),R=_("p",{style:{margin:"80px"}},"Content",-1),V=_("div",{style:{padding:"10px","background-color":"lightblue"}},"Affix 距离顶部150px ",-1),X=_("p",{style:{margin:"80px"}},"Content",-1),Z=_("p",{style:{margin:"80px"}},"Content",-1),F=_("p",{style:{margin:"80px"}},"Content",-1),G=_("p",{style:{margin:"80px"}},"Content",-1),H=_("p",{style:{margin:"80px"}},"Content",-1),J=_("p",{style:{margin:"80px"}},"Content",-1),M=_("p",{style:{margin:"80px"}},"Content",-1),O=_("p",{style:{margin:"80px"}},"Content",-1),P=_("p",{style:{margin:"80px"}},"Content",-1),Q=_("p",{style:{margin:"80px"}},"Content",-1),U=_("p",{style:{margin:"80px"}},"Content",-1),tt=_("p",{style:{margin:"80px"}},"Content",-1),et=_("p",{style:{margin:"80px"}},"Content",-1),at=_("p",{style:{margin:"80px"}},"Content",-1),nt=_("p",{style:{margin:"80px"}},"Content",-1),ot=_("p",{style:{margin:"80px"}},"Content",-1),st=_("p",{style:{margin:"80px"}},"Content",-1),lt=_("p",{style:{margin:"80px"}},"Content",-1),pt=_("p",{style:{margin:"80px"}},"Content",-1),it=_("p",{style:{margin:"80px"}},"Content",-1),rt=_("p",{style:{margin:"80px"}},"Content",-1),ut=_("p",{style:{margin:"80px"}},"Content",-1),mt=_("p",{style:{margin:"80px"}},"Content",-1),ft=_("p",{style:{margin:"80px"}},"Content",-1),gt=_("p",{style:{margin:"80px"}},"Content",-1),xt=_("p",{style:{margin:"80px"}},"Content",-1),vt=_("div",{style:{padding:"10px","background-color":"lightblue"}},"Affix 距离底部150px ",-1),dt=_("p",{style:{margin:"80px"}},"Content",-1),yt=_("p",{style:{margin:"80px"}},"Content",-1),ct=_("div",{style:{padding:"10px","background-color":"lightblue"}}," Sticky 距离底部90px ",-1),Ct=_("p",{style:{margin:"80px"}},"Content",-1),_t=_("p",{style:{margin:"80px"}},"Content",-1),bt=s({__name:"Sticky",setup(e){const{t:a}=W();return(e,n)=>(c(),$(k(t),{title:k(a)("stickyDemo.sticky")},{default:T((()=>[E(k(z),{offset:90},{default:T((()=>[K])),_:1}),L,R,E(k(D),{offset:150},{default:T((()=>[V])),_:1}),X,Z,F,G,H,J,M,O,P,Q,U,tt,et,at,nt,ot,st,lt,pt,it,rt,ut,mt,ft,gt,xt,E(k(D),{offset:150,position:"bottom"},{default:T((()=>[vt])),_:1}),dt,yt,E(k(z),{offset:90,position:"bottom"},{default:T((()=>[ct])),_:1}),Ct,_t])),_:1},8,["title"]))}});export{bt as default};
