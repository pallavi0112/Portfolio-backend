const nodemailer = require('nodemailer')

//@desc Post  send mail by HR
//@route Post /sendmail/
//@access public


const SendEmails = async(req , res) =>{
    console.log(req.body)
    try{
        const {name , email , message} = req.body
        const transporter = nodemailer.createTransport({
            service : "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });
        
          const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_ID, 
            subject: `Hire Request from ${name}`,
            html:`<h2>Congratulations!!</h2><p>You have received a hire  request from ${name} (${email}): ${message}</p>`
          };
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error('Error sending email: ', error);
              return res.status(500).json({ error: 'Error sending email' });
            } else {
              console.log('Email sent: ' + info.response);
             return res.status(200).json({message : "message has been successfully delivered"}) ;
            }
          });
    }
    catch(error){
        console.log(error)
        return res.status(500).json({error : error.message});
    }
}

module.exports = {SendEmails} ;