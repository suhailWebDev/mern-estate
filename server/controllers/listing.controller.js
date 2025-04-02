import Listing from "../models/listing.model.js";

const createListing = async (req, res, next) => {
    try {
        console.log("Request Body:", req.body); // ✅ Debugging
        const listing = await Listing.create(req.body);
        return res.status(201).json(listing);
    } catch (error) {
        console.error("Error creating listing:", error); // ✅ Log error
        next(error);
    }
};


export {createListing};