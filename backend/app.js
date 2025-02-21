require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const fetch = require("node-fetch"); // <-- Import node-fetch

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Email sending route
app.post("/send-mail", async (req, res) => {
  const { fname, lname, email, phone, message, recaptchaToken } = req.body;

  // Verify reCAPTCHA Token





  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

  try {
    const recaptchaResponse = await fetch(recaptchaUrl, {
      method: "POST",
    });
    const recaptchaData = await recaptchaResponse.json();
    const { success } = recaptchaData;

    if (!success) {
      return res.status(400).json({
        error: "reCAPTCHA verification failed. Please try again.",
      });
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return res.status(500).json({ error: "Failed to verify reCAPTCHA." });
  }










  // Proceed to send the email if reCAPTCHA is successful
  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: `Digital Paaji<${process.env.EMAIL}>`,
      to: process.env.receiverEMAIL,
      subject: `New Contact Form Submission from ${fname}`,
      text: `You have a new message:
      
      FName: ${fname}
      LName: ${lname}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");

    // WhatsApp API Trigger
    const whatsappUrl = "http://157.245.105.3/restapi/requestjson.php";
    const whatsappPayload = {
      country_code: "91",
      mobile: phone, // Send message to the provided phone number
      wid: "6307",
      type: "text",
      bodyValues: {
        "1": fname // Use "1" to target the first variable in your template
      }
    };
    

    const whatsappResponse = await fetch(whatsappUrl, {
      method: "POST",
      headers: {
        Authorization: "Basic 20b1a74e419f290e", // Replace with your Auth Key
        "Content-Type": "application/json",
      },
      body: JSON.stringify(whatsappPayload),
    });

    if (!whatsappResponse.ok) {
      console.error("Failed to send WhatsApp message:", whatsappResponse.statusText);
    } else {
      console.log("WhatsApp message sent successfully!");
    }

    res
      .status(200)
      .json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    console.error("Error sending email or WhatsApp message:", error);
    res
      .status(500)
      .json({ error: "Failed to send message. Please try again later." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




// require("dotenv").config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// const fetch = require("node-fetch"); // <-- Import node-fetch

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Email sending route
// app.post("/send-mail", async (req, res) => {
//   const { fname, lname, email, phone, message, recaptchaToken } = req.body;

//   // Verify reCAPTCHA Token
//   const secretKey = process.env.RECAPTCHA_SECRET_KEY;
//   const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;

//   try {
//     const recaptchaResponse = await fetch(recaptchaUrl, {
//       method: "POST",
//     });
//     const recaptchaData = await recaptchaResponse.json();
//     const { success } = recaptchaData;

//     if (!success) {
//       return res.status(400).json({
//         error: "reCAPTCHA verification failed. Please try again.",
//       });
//     }
//   } catch (error) {
//     console.error("reCAPTCHA verification error:", error);
//     return res.status(500).json({ error: "Failed to verify reCAPTCHA." });
//   }

//   // Proceed to send the email if reCAPTCHA is successful
//   try {
//     // Create a transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail", 
//       auth: {
//         user: process.env.EMAIL, 
//         pass: process.env.PASSWORD,
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: `Digital Paaji<${process.env.EMAIL}>`,
//       to: process.env.receiverEMAIL,
//       subject: `New Contact Form Submission from ${fname}`,
//       text: `You have a new message:
      
//       FName: ${fname}
//       LName: ${lname}
//       Email: ${email}
//       Phone: ${phone}
//       Message: ${message}`,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);
//     res
//       .status(200)
//       .json({ message: "Your message has been sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res
//       .status(500)
//       .json({ error: "Failed to send email. Please try again later." });
//   }
// });
// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

