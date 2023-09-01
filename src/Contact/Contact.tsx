import { useState, ChangeEvent, FormEvent } from 'react';


interface FormData {
    name: string;
    email: string;
    message: string;
  }
  

  const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        alert('Email sent successfully');
      } else {
        alert('Failed to send email');
      }
    };
  
    return (
      <div id="contact-section" className="h-[800px] mt-40 ml-12 md:ml-[221.7px]">
        <h1 className="text-[#00E19E] font-bold text-[25px]">🤝 Contact Me</h1>
        <div className='p-20 bg-slate-400 w-[600px] mt-24 ml-80 rounded-xl'>
            <form onSubmit={handleSubmit} className='flex flex-col w-full bg-slate-400'>
              <input type="text" name="name" placeholder="  Name" onChange={handleChange} required className='h-10 rounded-xl'/>
              <input type="email" name="email" placeholder="  Email" onChange={handleChange} required className='mt-10 h-10 rounded-xl'/>
              <textarea name="message" placeholder="  Your message" onChange={handleChange} required className='mt-10 h-40 rounded-xl'></textarea>
              <button type="submit" className='mt-10'>Send</button>
            </form>
        </div>
      </div>
    );  
  };
  
  export default Contact;
  