import React from "react";

export default function Login() {
  return (
    <div style={{maxWidth:400,margin:"40px auto",background:"#fff",borderRadius:16,padding:32,boxShadow:"0 2px 16px #0001"}}>
      <h2>تسجيل الدخول</h2>
      <form style={{display:'flex',flexDirection:'column',gap:16}}>
        <input type="email" placeholder="البريد الإلكتروني" style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <input type="password" placeholder="كلمة المرور" style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <button type="submit" style={{background:'#1e293b',color:'#fff',padding:12,border:0,borderRadius:8,fontWeight:'bold'}}>دخول</button>
      </form>
      <div style={{marginTop:16}}>
        ليس لديك حساب؟ <a href="#" style={{color:'#1e293b'}}>سجل الآن</a>
      </div>
    </div>
  );
}
