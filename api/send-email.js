import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,  
      pass: process.env.PASSWORD  // AppPassword
    }
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL, 
    subject: `Contact form submission from ${name} and ${email}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send('Failed to send email');
  }
};
