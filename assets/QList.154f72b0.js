import{m as o,c as n,l as d,K as l,g as i}from"./index.f50984da.js";import{c as u,e as c}from"./format.e4e80033.js";var p=o({name:"QList",props:{...u,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:a}){const t=i(),s=c(e,t.proxy.$q),r=n(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(s.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>d(e.tag,{class:r.value},l(a.default))}});export{p as Q};
