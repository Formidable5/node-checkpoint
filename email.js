const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'chima@gmail.com',
        pass:'kaap fzai fpsa xcxm',
    }
});

const mailOptions = {
    from: 'chima@gmail.com',
    to: 'ima@gmail.com',
    subject: 'Sending Email using nodemailer',
    text: 'only God can save Nigeria ... hope you are still active?'
};

    transporter.sendMail (mailOptions, function(err, info){
        if (err){
            console.log(err)
        }else{
            console.log('Email sent:'+info.response);
       }
    });