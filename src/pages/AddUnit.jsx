import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function AddUnit() {
  const [done, setDone] = useState(false);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [modelPreview, setModelPreview] = useState(null);
  const formRef = useRef();

  // معاينة الصور
  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImagesPreview(files.map(file => URL.createObjectURL(file)));
  };
  // معاينة نموذج 3D
  const handleModelChange = (e) => {
    const file = e.target.files[0];
    if (file) setModelPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_realestatevr",
      "template_addunit",
      formRef.current,
      "user_xxxxxxxxxxxxx"
    ).then(() => setDone(true));
  };
  return (
    <div style={{maxWidth:600,margin:"40px auto",background:"#fff",borderRadius:16,padding:32,boxShadow:"0 2px 16px #0001"}}>
      <h2>إضافة وحدة عقارية للبيع أو الإيجار</h2>
      {done ? (
        <div style={{color:'#16a34a',fontWeight:'bold',fontSize:20}}>تم إرسال الوحدة بنجاح! سيتم مراجعتها وعرضها قريبًا.</div>
      ) : (
      <form ref={formRef} style={{display:'flex',flexDirection:'column',gap:16}} onSubmit={handleSubmit}>
        <input type="text" name="unitName" placeholder="اسم الوحدة (مثال: فيلا بالم هيلز)" required style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <select name="unitType" required style={{padding:8,borderRadius:8,border:'1px solid #ddd'}}>
          <option value="">نوع الوحدة</option>
          <option>قصر</option>
          <option>فيلا</option>
          <option>شقة</option>
          <option>محل</option>
          <option>عيادة</option>
          <option>مكتب</option>
        </select>
        <input type="text" name="country" placeholder="الدولة" required style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <input type="text" name="city" placeholder="المدينة/المنطقة" required style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <input type="text" name="area" placeholder="المساحة (م²)" required style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <input type="number" name="rooms" placeholder="عدد الغرف" required style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <input type="number" name="bathrooms" placeholder="عدد الحمامات" required style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <input type="number" name="kitchens" placeholder="عدد المطابخ" required style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <input type="text" name="gardenArea" placeholder="مساحة الحديقة (إن وجدت)" style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <input type="date" name="purchaseDate" placeholder="تاريخ الشراء" style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <input type="date" name="saleDate" placeholder="تاريخ البيع (إن وجدت)" style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <input type="text" name="documents" placeholder="الأوراق المتوفرة (مثال: عقد، رخصة بناء...)" style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <input type="file" name="images" multiple accept="image/*" style={{padding:8}} onChange={handleImagesChange} />
        {imagesPreview.length > 0 && (
          <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
            {imagesPreview.map((src,i) => (
              <img key={i} src={src} alt="preview" style={{width:70,height:70,objectFit:'cover',borderRadius:8}} />
            ))}
          </div>
        )}
        <label>رفع نموذج ثلاثي الأبعاد (GLB/GLTF):</label>
        <input type="file" name="model3d" accept=".glb,.gltf,model/*" style={{padding:8}} onChange={handleModelChange} />
        {modelPreview && (
          <div style={{margin:'8px 0'}}>
            <span style={{fontSize:13}}>معاينة النموذج (لن يتم رفعه فعليًا):</span>
            <span style={{display:'block',color:'#888',fontSize:12}}>سيتم إرسال رابط النموذج فقط عبر البريد</span>
            <video src={modelPreview} controls style={{width:120}} />
          </div>
        )}
        <select name="purpose" required style={{padding:8,borderRadius:8,border:'1px solid #ddd'}}>
          <option value="">الغرض</option>
          <option>للبيع</option>
          <option>للإيجار</option>
        </select>
        <textarea name="additionalDetails" placeholder="تفاصيل إضافية" rows={4} style={{padding:8,borderRadius:8,border:'1px solid #ddd'}} />
        <button type="submit" style={{background:'#1e293b',color:'#fff',padding:12,border:0,borderRadius:8,fontWeight:'bold'}}>إرسال الوحدة</button>
      </form>
      )}
    </div>
  );
}
