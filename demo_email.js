var nodemailer = require('nodemailer');
require('dotenv').config();

const account = process.env.EMAIL_ACCOUNT;
const password = process.env.EMAIL_PASSWORD;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: account,
    pass: password
  }
});

var mailOptions = {
  from: account,
  to: 'shufflemva@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!?'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});