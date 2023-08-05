import { log } from 'util';

const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');

//Configurations
dotenv.config();
sgMail.setApiKey('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');
const sgMailFunction = (host, emailToken, email, res, registered) => {
  const msg = {
    to: email, // Change to your recipient
    from: 'abhishekgoyal274@gmail.com', // Change to your verified sender
    subject: 'Email verification using SendGrid',
    html: `<div>
                <h1>Email verification</h1>
                <h3>Hello, thanks registering on my site. Please register your email.</h3>
                <a href="http://${host}/verifyEmail?emailToken=${emailToken}&email=${email}">
                    <button style=" background-color: #4CAF50; /* Green */
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;"> verify </button>
                </a>
                <h5>If you haven't registered please ignore this and if you get this often please mail me.</h5>
               </div>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      if (registered)
        res.send({
          successMessage: `Email already registerd but not verifiied. Email sent again, please check ${email} inbox.`,
        });
      else res.send({ successMessage: `Email sent please check ${email} inbox.` });
    })
    .catch((error) => {
      console.error(error.response);
    });
};

// console.log(EmailVerification.getIndexes());
//Register
export default function handler(req, res) {
  const host = 'localhos:8000';
  const emailToken = 'ckbscwe912uw9qjd*&%Ebpyb*(R*^E%$$Se^';
  const email = req.query.email;
  console.log("email: ",email);
  sgMailFunction(host, emailToken, email, res, true);
  res.send(req);
}
