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
        <div className='p-20 bg-[#0F0F37] w-[600px] mt-24 ml-80 rounded-xl border-[#0F0F37] shadow-xl'>
            <form onSubmit={handleSubmit} className='flex flex-col w-full bg-[#0F0F37]'>
              <input type="text" name="name" placeholder="Name" onChange={handleChange} required className='text-white bg-[#0F0F37] border-b-2 outline-none border-b-white h-10 focus:border-[#9055A2] focus:border-l-0 focus:border-t-0 focus:border-r-0 transition-all duration-500 ease-linear'/>
              <input type="email" name="email" placeholder="Email" onChange={handleChange} required className='text-white mt-10 h-10 bg-[#0F0F37] border-b-2 outline-none border-b-white focus:border-[#9055A2] focus:border-l-0 focus:border-t-0 focus:border-r-0 transition-all duration-500 ease-linear'/>
              <textarea name="message" placeholder="Your message" onChange={handleChange} required className='mt-10 h-40 bg-cyan-50 outline-none rounded-xl pl-3 pt-3'></textarea>
              <button type="submit" className='mt-10 text-cyan-400 border border-cyan-400 p-3'>Send</button>
            </form>
        </div>
      </div>
    ); 
  };
  
  export default Contact;
  