import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// Ensure the uploads directory exists
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer storage settings
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

const upload = multer({ storage });

// ✅ Image Upload Route
router.post("/", upload.array("images", 6), (req, res) => {
    // ✅ Generate full URLs using backend domain
    const fileUrls = req.files.map(file => `http://localhost:3000/uploads/${file.filename}`);
    
    res.status(200).json({ imageUrls: fileUrls });
});

export default router;
