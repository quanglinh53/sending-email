const nodemailer = require("nodemailer");

const mailAdminAccount = "quanglinhd1097@gmail.com";
const mailAdminPassword = "mailAdminPassword";

// create a nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: mailAdminAccount,
    pass: mailAdminPassword,
  },
});

// array of email addresses to send the email to
const recipients = ["email1@example.com", "email2@example.com", "email3@example.com"];

// array of promises, each promise represents sending an email to one recipient
// The following are the possible fields of an email message: https://nodemailer.com/message/
const promises = recipients.map((recipient) => {
  // create the email message
  const mailOptions = {
    from: mailAdminAccount,
    to: recipient,
    // cc: "",
    // bcc: "",
    subject: "Email test subject",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    html: "<p>HTML version of the message</p>",
    // attachments : "",
  };

  // send the email
  return transporter.sendMail(mailOptions);
});

// use Promise.all to wait for all promises to be resolved or rejected
Promise.all(promises)
  .then(() => {
    console.log("All emails sent successfully.");
  })
  .catch((err) => {
    console.error("Error sending emails:", err);
  });
