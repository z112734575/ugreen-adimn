import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-121f3973.js";import{d as t,q as l,I as a,r as o,o as i,c as s,g as r,w as n,a as m,B as p,t as d,e as u,F as b,k as c}from"./index-01f15111.js";import{_ as f}from"./Table.vue_vue_type_script_lang-e037681f.js";import{g}from"./index-8af7c832.js";import{E as _}from"./el-tag-9bb6b405.js";import{E as D}from"./el-button-0807acfa.js";import{u as v}from"./useTable-20df668d.js";import"./el-card-1be77824.js";import"./el-popper-021efdd9.js";import"./constants-83a5117c.js";import"./tsxHelper-a29b2b26.js";import"./event-5568c9d8.js";import"./use-form-common-props-ef99621e.js";import"./use-form-item-5310d726.js";import"./el-input-d9411be2.js";import"./scroll-f8a76bd6.js";import"./debounce-b13da7d2.js";import"./validator-aabd33c8.js";import"./el-message-box-203ff6a7.js";import"./el-overlay-edcaad16.js";import"./vnode-6eed0437.js";import"./aria-ecee1d93.js";const j={class:"ml-30px"},x=t({__name:"RefTable",setup(t){const{t:x}=c(),h=l([{field:"index",label:x("tableDemo.index"),type:"index"},{field:"content",label:x("tableDemo.header"),children:[{field:"title",label:x("tableDemo.title")},{field:"author",label:x("tableDemo.author")},{field:"display_time",label:x("tableDemo.displayTime")},{field:"importance",label:x("tableDemo.importance"),formatter:(e,t,l)=>a(_,{type:1===l?"success":2===l?"warning":"danger"},(()=>x(1===l?"tableDemo.important":2===l?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:x("tableDemo.pageviews")}]},{field:"action",label:x("tableDemo.action")}]),{register:k,tableObject:C,methods:y}=v({getListApi:g,response:{list:"list",total:"total"},props:{columns:h}}),{getList:w}=y;w();const R=o(),T=o(),P=e=>{T.value=e?{total:C.total}:void 0},S=e=>{var t;null==(t=m(R))||t.setProps({reserveIndex:e})},z=e=>{var t;null==(t=m(R))||t.setProps({selection:e})},$=o(1),E=()=>{var e;null==(e=m(R))||e.setColumn([{field:"title",path:"label",value:`${x("tableDemo.title")}${m($)}`}]),$.value++},I=e=>{var t;null==(t=m(R))||t.setProps({expand:e})},A=()=>{var e,t;null==(t=null==(e=m(R))?void 0:e.elTableRef)||t.toggleAllSelection()};return(t,l)=>(i(),s(b,null,[r(m(e),{title:`RefTable ${m(x)("tableDemo.operate")}`},{default:n((()=>[r(m(D),{onClick:l[0]||(l[0]=e=>P(!0))},{default:n((()=>[p(d(m(x)("tableDemo.show"))+" "+d(m(x)("tableDemo.pagination")),1)])),_:1}),r(m(D),{onClick:l[1]||(l[1]=e=>P(!1))},{default:n((()=>[p(d(m(x)("tableDemo.hidden"))+" "+d(m(x)("tableDemo.pagination")),1)])),_:1}),r(m(D),{onClick:l[2]||(l[2]=e=>S(!0))},{default:n((()=>[p(d(m(x)("tableDemo.reserveIndex")),1)])),_:1}),r(m(D),{onClick:l[3]||(l[3]=e=>S(!1))},{default:n((()=>[p(d(m(x)("tableDemo.restoreIndex")),1)])),_:1}),r(m(D),{onClick:l[4]||(l[4]=e=>z(!0))},{default:n((()=>[p(d(m(x)("tableDemo.showSelections")),1)])),_:1}),r(m(D),{onClick:l[5]||(l[5]=e=>z(!1))},{default:n((()=>[p(d(m(x)("tableDemo.hiddenSelections")),1)])),_:1}),r(m(D),{onClick:E},{default:n((()=>[p(d(m(x)("tableDemo.changeTitle")),1)])),_:1}),r(m(D),{onClick:l[6]||(l[6]=e=>I(!0))},{default:n((()=>[p(d(m(x)("tableDemo.showExpandedRows")),1)])),_:1}),r(m(D),{onClick:l[7]||(l[7]=e=>I(!1))},{default:n((()=>[p(d(m(x)("tableDemo.hiddenExpandedRows")),1)])),_:1}),r(m(D),{onClick:A},{default:n((()=>[p(d(m(x)("tableDemo.selectAllNone")),1)])),_:1})])),_:1},8,["title"]),r(m(e),{title:`RefTable ${m(x)("tableDemo.example")}`},{default:n((()=>[r(m(f),{ref_key:"tableRef",ref:R,pageSize:m(C).pageSize,"onUpdate:pageSize":l[8]||(l[8]=e=>m(C).pageSize=e),currentPage:m(C).currentPage,"onUpdate:currentPage":l[9]||(l[9]=e=>m(C).currentPage=e),data:m(C).tableList,loading:m(C).loading,pagination:T.value,onRegister:m(k)},{action:n((e=>[r(m(D),{type:"primary",onClick:e=>{}},{default:n((()=>[p(d(m(x)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),expand:n((e=>[u("div",j,[u("div",null,d(m(x)("tableDemo.title"))+"："+d(e.row.title),1),u("div",null,d(m(x)("tableDemo.author"))+"："+d(e.row.author),1),u("div",null,d(m(x)("tableDemo.displayTime"))+"："+d(e.row.display_time),1)])])),_:1},8,["pageSize","currentPage","data","loading","pagination","onRegister"])])),_:1},8,["title"])],64))}});export{x as default};
