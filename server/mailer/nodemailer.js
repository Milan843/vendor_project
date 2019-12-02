var nodemailer = require('nodemailer');

module.exports = function (mail){
var transporter = nodemailer.createTransport({
//   service: 'gmail',
host:"mail.vinove.com" ,
secure:false,
  port:587,
  auth: {
    user: 'milan.srivastava@mail.vinove.com',
    pass: 'milan@2019'
  },
  tls:{
      rejectUnauthorized:false
  }
});

var mailOptions = {
  from: 'milan.srivastava@mail.vinove.com',
  to: 'milan.srivastava@mail.vinove.com',
  subject: 'Sending Email using Node.js',
  text: mail
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})
}