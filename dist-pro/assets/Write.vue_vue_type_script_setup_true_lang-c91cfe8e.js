import{F as e}from"./Form-51f590a6.js";import{u as r}from"./useForm-27620408.js";import{u as t}from"./useValidator-99f3c987.js";import{d as s,q as o,X as a,o as m,h as i,a as u}from"./index-01f15111.js";const n=s({__name:"Write",props:{currentRow:{type:Object,default:()=>null},formSchema:{type:Array,default:()=>[]}},setup(s,{expose:n}){const p=s,{required:l}=t(),c=o({title:[l()],author:[l()],importance:[l()],pageviews:[l()],display_time:[l()],content:[l()]}),{register:f,methods:d,elFormRef:F}=r({schema:p.formSchema});return a((()=>p.currentRow),(e=>{if(!e)return;const{setValues:r}=d;r(e)}),{deep:!0,immediate:!0}),n({elFormRef:F,getFormData:d.getFormData}),(r,t)=>(m(),i(u(e),{rules:c,onRegister:u(f)},null,8,["rules","onRegister"]))}});export{n as _};
