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
    to: 'shufflemva@gmail.com, adrian.faudoa333@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!?</p>'
}

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});