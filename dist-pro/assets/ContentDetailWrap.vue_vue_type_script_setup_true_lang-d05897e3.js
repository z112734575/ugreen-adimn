import{d as e,ah as t,r as a,E as s,A as r,o as l,c as i,g as o,w as n,a as p,e as c,n as d,j as f,B as _,t as x,aa as m,k as u}from"./index-01f15111.js";import{E as v}from"./el-card-1be77824.js";import{E as g}from"./el-button-0807acfa.js";import{_ as b}from"./Sticky.vue_vue_type_script_setup_true_lang-3fecc58a.js";const h={class:"text-16px font-700"},$={style:{padding:"var(--app-content-padding)"}},k=e({__name:"ContentDetailWrap",props:{title:t.string.def(""),message:t.string.def("")},emits:["back"],setup(e,{emit:t}){const{t:k}=u(),{getPrefixCls:j}=f(),y=j("content-detail-wrap"),w=a(85),C=a();return s((()=>{w.value=C.value.getBoundingClientRect().top})),(a,s)=>{const f=r("Icon");return l(),i("div",{class:d([`${p(y)}-container`,"relative bg-[#fff]"]),ref_key:"contentDetailWrap",ref:C},[o(p(b),{offset:w.value},{default:n((()=>[c("div",{class:d([`${p(y)}-header`,"flex border-bottom-1 h-50px items-center text-center bg-white pr-10px"])},[c("div",{class:d([`${p(y)}-header__back`,"flex pl-10px pr-10px "])},[o(p(g),{onClick:s[0]||(s[0]=e=>t("back"))},{default:n((()=>[o(f,{icon:"ep:arrow-left",class:"mr-5px"}),_(" "+x(p(k)("common.back")),1)])),_:1})],2),c("div",{class:d([`${p(y)}-header__title`,"flex flex-1  justify-center"])},[m(a.$slots,"title",{},(()=>[c("label",h,x(e.title),1)]))],2),c("div",{class:d([`${p(y)}-header__right`,"flex  pl-10px pr-10px"])},[m(a.$slots,"right")],2)],2)])),_:3},8,["offset"]),c("div",$,[o(p(v),{class:d([`${p(y)}-body`,"mb-20px"]),shadow:"never"},{default:n((()=>[c("div",null,[m(a.$slots,"default")])])),_:3},8,["class"])])],2)}}});export{k as _};
