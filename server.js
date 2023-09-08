import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json()); 

app.post('/api/send-email', async (req, res) => {
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
    to: process.env.EMAIL , 
    subject: `Contact form submission from ${name} and ${email}`,
    text: message
  };

  try {
    console.log("Sending mail with the following options:", mailOptions);
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error("Failed to send email: ", error);
    res.status(500).send('Failed to send email');
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
