import{P as a,g as t,a as s,b as e}from"./PanelGroup-4ba7b6ff.js";import{d as i,r as n,q as o,o as l,c as m,g as u,w as d,a as p,F as r,k as c,s as _}from"./index-01f15111.js";import{E as g,a as h}from"./el-col-5c60dd73.js";import{E as f}from"./el-card-1be77824.js";import{E as v}from"./el-skeleton-item-8efe72d0.js";import{p as y,b as x,l as j,_ as w}from"./Echart.vue_vue_type_script_setup_true_lang-03c19621.js";import"./CountTo.vue_vue_type_script_setup_true_lang-1aa8dc32.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./debounce-b13da7d2.js";const b=i({__name:"Analysis",setup(i){const{t:b}=c(),E=n(!0),k=o(y),A=async()=>{const a=await t().catch((()=>{}));a&&(_(k,"legend.data",a.data.map((a=>b(a.name)))),k.series[0].data=a.data.map((a=>({name:b(a.name),value:a.value}))))},P=o(x),q=async()=>{const a=await s().catch((()=>{}));a&&(_(P,"xAxis.data",a.data.map((a=>b(a.name)))),_(P,"series",[{name:b("analysis.activeQuantity"),data:a.data.map((a=>a.value)),type:"bar"}]))},D=o(j),O=async()=>{const a=await e().catch((()=>{}));a&&(_(D,"xAxis.data",a.data.map((a=>b(a.name)))),_(D,"series",[{name:b("analysis.estimate"),smooth:!0,type:"line",data:a.data.map((a=>a.estimate)),animationDuration:2800,animationEasing:"cubicInOut"},{name:b("analysis.actual"),smooth:!0,type:"line",itemStyle:{},data:a.data.map((a=>a.actual)),animationDuration:2800,animationEasing:"quadraticOut"}]))};return(async()=>{await Promise.all([A(),q(),O()]),E.value=!1})(),(t,s)=>(l(),m(r,null,[u(a),u(p(h),{gutter:20,justify:"space-between"},{default:d((()=>[u(p(g),{xl:10,lg:10,md:24,sm:24,xs:24},{default:d((()=>[u(p(f),{shadow:"hover",class:"mb-20px"},{default:d((()=>[u(p(v),{loading:E.value,animated:""},{default:d((()=>[u(p(w),{options:p(k),height:300},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1}),u(p(g),{xl:14,lg:14,md:24,sm:24,xs:24},{default:d((()=>[u(p(f),{shadow:"hover",class:"mb-20px"},{default:d((()=>[u(p(v),{loading:E.value,animated:""},{default:d((()=>[u(p(w),{options:p(P),height:300},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1}),u(p(g),{span:24},{default:d((()=>[u(p(f),{shadow:"hover",class:"mb-20px"},{default:d((()=>[u(p(v),{loading:E.value,animated:"",rows:4},{default:d((()=>[u(p(w),{options:p(D),height:350},null,8,["options"])])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})],64))}});export{b as default};
