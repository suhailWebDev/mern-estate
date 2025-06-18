import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";

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
const deleteListing=async(req,res,next)=>{
    const listing=await Listing.findById(req.params.id);
    if(!listing){
        return next(errorHandler(404,"Listing not found"));
    }

    try {
       await Listing.findByIdAndDelete(req.params.id); 
    } catch (error) {
        next(error);
    }
}

const updateListing = async (req, res, next) => {
    try {
      const listing = await Listing.findById(req.params.id);
      if (!listing) {
        return next(errorHandler(404, "Listing not found"));
      }
  
      const updatedListing = await Listing.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true } // returns the updated document
      );
  
      res.status(200).json(updatedListing);
    } catch (error) {
      next(error);
    }
  };
  

export {createListing,deleteListing,updateListing};