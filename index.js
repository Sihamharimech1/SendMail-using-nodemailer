const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');
const port = 3000;
const nodemailer = require('nodemailer');
app.use(express.json()); // Middleware to parse JSON 

app.use(express.static('public'));

app.get('/', (req, res) => {
    // hada html this is html
    res.sendFile(path.join(__dirname, 'public', 'send.html'));
  });

// Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS // It's recommended to use application-specific passwords for Gmail but u need to enable the 2-enable configuration
  }
});


app.post('/send', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
   
let info = await transporter.sendMail({
    from: '"siham" <${process.env.GMAIL_USER}>', //  sender address
    to: to, // The recipient's address
    subject: subject, // The subject 
    text: text, // The email body 
  });
  

    console.log('Message sent: %s', info.messageId);
    res.send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email: ', error);
    res.status(500).send('Error sending email');
  }
});


app.listen(port, () => {
  console.log(`Email sender app listening at http://localhost:${port}`);
});
