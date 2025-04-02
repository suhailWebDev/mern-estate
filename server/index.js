import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import uploadRouter from './routes/upload.route.js';
import Listing from './models/listing.model.js';
import path from "path";
import cors from "cors";

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
