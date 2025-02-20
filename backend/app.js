require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// WhatsApp Message Function
const sendWhatsAppMessage = async (phone, name) => {
  const whatsappUrl = 'http://157.245.105.3/restapi/requestjson.php';
  const apiKey = process.env.WHATSAPP_API_KEY;

  const body = {
    version: "2.0",
    country_code: "91",
    wid: 3070, // Template ID
    type: "text",
    mobile:phone,  
    // data: [
    //   {
    //     mobile: phone, 
    //     bodyValues: {
    //       "1": name
    //     }
    //   }
    // ]
  };

  try {
    const response = await fetch(whatsappUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${apiKey}`
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log("WhatsApp API Response:", JSON.stringify(data, null, 2));

    if (data.status === "success") {
      console.log("WhatsApp message sent successfully.");
    } else {
      console.error("Failed to send WhatsApp message:", data);
    }
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
  }
};

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
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: `Digital Paaji <${process.env.EMAIL}>`,
      to: process.env.receiverEMAIL,
      subject: `New Contact Form Submission from ${fname}`,
      text: `You have a new message:
      
      FName: ${fname}
      LName: ${lname}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    // Send WhatsApp message
    await sendWhatsAppMessage(phone, fname);

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



