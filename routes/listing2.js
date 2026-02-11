const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const {listingSchema , reviewSchema} = require("../schema.js");//
const ExpressError = require("../utils/ExpressError");//
const Listing = require("../models/listing");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings3.js");
const multer  = require('multer')
const {storage} = require("../cloudconfig.js")
const upload = multer({ storage });


router.route("/")
    .get(wrapAsync(listingController.index))
    .post(  
        isLoggedIn,
        upload.single('listing[image]'),
        validateListing,
        wrapAsync (listingController.createListing)
    );

//new route
router.get("/new",isLoggedIn, listingController.renderNewForm); 

router.route("/:id")
    .get(wrapAsync(listingController.showListiing))
    .put(
        isLoggedIn,
        isOwner,
        upload.single('listing[image]'),
        validateListing,
        wrapAsync(listingController.updateListing)
    )
    .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing)
);


//index route
// router.get("/",wrapAsync(listingController.index));
//index and create route not needed bcoz we have used router.route for same paths


//Show route
//router.get("/:id", wrapAsync(listingController.showListiing));

//create route
// router.post("/",  
//     isLoggedIn,
//     validateListing,
//     wrapAsync (listingController.createListing));

//edit(update) route
router.get("/:id/edit", isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

//Update route
// router.put("/:id",
//     isLoggedIn,
//     isOwner,
//     wrapAsync(listingController.updateListing));

//Delte route
//router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

module.exports = router;