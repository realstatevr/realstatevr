import React from "react";

export default function Contact() {
  return (
    <div style={{maxWidth:600,margin:"40px auto",background:"#fff",borderRadius:16,padding:32,boxShadow:"0 2px 16px #0001"}}>
      <h2>تواصل معنا</h2>
      <p>للاستفسارات أو الدعم الفني أو الشراكة، يمكنك التواصل معنا عبر النموذج التالي أو البريد الإلكتروني:</p>
      <form style={{display:'flex',flexDirection:'column',gap:16}}>
        <input type="text" placeholder="الاسم" style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <input type="email" placeholder="البريد الإلكتروني" style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <textarea placeholder="رسالتك" rows={5} style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <button type="submit" style={{background:'#1e293b',color:'#fff',padding:12,border:0,borderRadius:8,fontWeight:'bold'}}>إرسال</button>
      </form>
      <div style={{marginTop:16}}>أو راسلنا على: <a href="mailto:info@realestatevr.com">info@realestatevr.com</a></div>
    </div>
  );
}
