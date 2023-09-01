import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors()); // for CORS policy
app.use(express.json()); // for parsing JSON

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,  // replace with your email
      pass: process.env.PASSWORD  // replace with your AppPassword
    }
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL , // your email address to receive emails
    subject: `Contact form submission from ${name} and ${email}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send('Failed to send email');
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
