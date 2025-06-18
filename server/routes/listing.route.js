import express from "express";
import { createListing,deleteListing,updateListing } from "../controllers/listing.controller.js";

const router=express.Router();

router.post("/create",createListing);
router.delete('/delete/:id',deleteListing);
router.put("/update/:id", updateListing);


export default router;