require("dotenv").config();
const express = require("express");
// const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const fetch = require("node-fetch"); // <-- Import node-fetch

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// CORS FIX
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// Handle preflight requests
app.options("*", cors());

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Email sending route
app.post("/send-mail", async (req, res) => {
  const { fname, lname, email, phone, company, website, business, service, message, recaptchaToken } = req.body;

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  // ─────────── RECAPTCHA VALIDATION ───────────
  try {
    const recaptchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return res.status(400).json({
        error: "reCAPTCHA verification failed. Please try again.",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: "Failed to verify reCAPTCHA." });
  }

  // ─────────── EMAIL + WHATSAPP PROCESS ───────────
  try {
    // EMAIL
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `Digital Paaji <${process.env.EMAIL}>`,
      to: process.env.receiverEMAIL,
      subject: `New Contact Form Submission from ${fname}`,
       html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; word-wrap: break-word; overflow-wrap: break-word;">
      <h2 style="color: #007bff; text-align: center; word-wrap: break-word;">New Contact Form Submission</h2>
      <p style="font-size: 16px; word-wrap: break-word;">You have received a new message:</p>
      <table style="width: 100%; border-collapse: collapse; word-wrap: break-word; overflow-wrap: break-word;">
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>First Name:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${fname}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Last Name:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${lname}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; word-break: break-all;"><a href="mailto:${email}" style="color: #007bff;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Company:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${company}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Business:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${business}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Website:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; word-break: break-all;"><a href="${website}" target="_blank" style="color: #007bff;">${website}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Service:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${service}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; vertical-align: top;"><strong>Message:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; word-wrap: break-word; overflow-wrap: break-word;">${message}</td>
        </tr>
      </table>
      <p style="text-align: center; margin-top: 20px;"><strong>Digital Paaji</strong></p>
    </div>
  `,
    });

    console.log("Email sent successfully!");

    // WHATSAPP API (SSL DISABLED TEMPORARILY)
    const https = require("https");
    const agent = new https.Agent({ rejectUnauthorized: false });

    const whatsappPayload = {
      country_code: "91",
      mobile: phone,
      wid: "19455",
      type: "interactive",
      template_name: "paajiwebsite",
      language: { policy: "deterministic", code: "en" },
      bodyValues: { "1": fname },
    };

const whatsappResponse = await fetch(
  "https://console.authkey.io/restapi/requestjson.php",
  {
    method: "POST",
    agent,
    headers: {
      Authorization: `Basic ${process.env.AUTHKEY_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(whatsappPayload),
  }
);

    if (whatsappResponse.ok) {
      console.log("WhatsApp message sent successfully!");
    } else {
      console.log("WhatsApp API failed:", whatsappResponse.statusText);
    }

    // ─────────── SEND FINAL RESPONSE (ONLY ONCE) ───────────
    return res.status(200).json({
      message: "Your message has been sent successfully!",
    });

  } catch (error) {
    console.error("Error sending email or WhatsApp message:", error);
    return res.status(500).json({
      error: "Failed to send message. Please try again later.",
    });
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});