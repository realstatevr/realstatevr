import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Register() {
  const [done, setDone] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_realestatevr", // يجب ضبطه في EmailJS
      "template_register", // يجب ضبطه في EmailJS
      formRef.current,
      "user_xxxxxxxxxxxxx" // مفتاح المستخدم من EmailJS
    ).then(() => setDone(true));
  };
  return (
    <div style={{maxWidth:400,margin:"40px auto",background:"#fff",borderRadius:16,padding:32,boxShadow:"0 2px 16px #0001"}}>
      <h2>سجل الآن</h2>
      {done ? (
        <div style={{color:'#16a34a',fontWeight:'bold',fontSize:20}}>تم التسجيل بنجاح! سيتم التواصل معك عبر البريد الإلكتروني.</div>
      ) : (
      <form ref={formRef} style={{display:'flex',flexDirection:'column',gap:16}} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="الاسم الكامل" required style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <input type="email" name="email" placeholder="البريد الإلكتروني" required style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <input type="text" name="phone" placeholder="رقم الهاتف" style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <input type="text" name="city" placeholder="المدينة/الدولة" style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <button type="submit" style={{background:'#1e293b',color:'#fff',padding:12,border:0,borderRadius:8,fontWeight:'bold'}}>تسجيل</button>
      </form>
      )}
    </div>
  );
}
