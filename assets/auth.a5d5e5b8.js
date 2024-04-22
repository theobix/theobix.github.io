import{B as r,a8 as l,l as u,R as c}from"./index.a487fe88.js";import{n as m}from"./GQL.0e54f0bc.js";import{l as g}from"./notificationUtil.b1e16895.js";const d=r(`
  mutation login ($email: String, $password: String) {
    login(
      credentialsInputDto : {
        email:$email, password:$password
       }
    )
  }
`),f=r(`
  mutation register ($username: String, $email: String, $password: String) {
    register(
      userDto : {
        email:$email, username: $username, password:$password
       })
    {
      username
    }
  }
`),{mutate:w}=l(f),{mutate:$}=l(d);async function v(a,t,e,o,i){const s=g("Please wait...");try{const n={username:t,email:a,password:e},{data:p}=await w(n);o(p)}catch(n){m(n.message),i(n)}finally{s()}}async function k(a,t,e,o){const i=g("Please wait...");try{const s={email:a,password:t},{data:n}=await $(s);e(n)}catch(s){m(s.message),o(s)}finally{i()}}async function P(a){u.set("jwt-token",a.login.token);const t=c();t.push("/app").then(e=>t.go(0))}function R(){u.remove("jwt-token");const a=c();a.replace("/").then(t=>a.go(0))}function D(a,t,e){a.message.includes("email")&&(t.value=!0),a.message.includes("password")&&(e.value=!0),setTimeout(()=>{t.value=!1,e.value=!1},5e3)}export{k as a,D as c,R as l,v as r,P as s};
