import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import uploadRouter from './routes/upload.route.js';
import Listing from './models/listing.model.js';
import path from "path";
import nodemailer from "nodemailer";

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.log(err));

const app = express();

app.use(express.json());

// 🔹 REMOVE cors() because Vite is handling the proxy
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// 🟢 Serve static image files from /uploads
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// 🔹 Place routes after middleware
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);
app.use('/api/upload', uploadRouter);

// ✅ Get All Listings
app.get("/api/listings", async (req, res) => {
  try {
    const listings = await Listing.find();
    console.log("Fetched Listings:", listings);
    res.json(listings);
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ message: "Error fetching listings" });
  }
});

// ✅ Get Single Listing by ID
app.get("/api/listings/:id", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // You can use other services like Outlook, Zoho, etc.
    auth: {
      user: process.env.ADMIN_EMAIL, // Admin email
      pass: process.env.ADMIN_PASSWORD, // App password (not personal password)
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: process.env.ADMIN_EMAIL, // Send to the admin
    subject: "New Pre-Register Form Submission",
    html: `
      <h2>New Pre-Register Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email" });
  }
});

// 🔴 Global Error Handler (Always Keep This Last)
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// ✅ Start Server
app.listen(3000, () => console.log('Server is running on port 3000'));
