const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");
const multer  = require("multer");
const { storage } = require("../cloudConfig.js");

const upload = multer({ storage });


    //index route
    router.get("/", wrapAsync(listingController.index));
  
      //New Route
      router.get("/new", isLoggedIn, listingController.renderNewForm);
  
     //Show Route
      router.get("/:id", wrapAsync(listingController.showListing));
  
  
    //create route
    // router.post("/",validateListing,isLoggedIn,
    //    wrapAsync(listingController.createListing));
  router.post("/", upload.single('listing[image]'),(req,res) =>{
    res.send(req.file);
  })
  
    //Edit Route
    router.get("/:id/edit", isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));
  
   

   //Update Route
   router.put("/:id",isLoggedIn,isOwner,validateListing,
     wrapAsync(listingController.updateListing));
  
  //Delete Route
  router.delete("/:id",isLoggedIn,isOwner, wrapAsync(listingController.deleteListing));

    module.exports = router;