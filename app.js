if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = "method-override"; // This was a string, should be require("method-override")
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError");

const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const Listing = require("./models/listing");
const Review = require("./models/review");
const User = require("./models/user");

const listingRouter = require("./routes/listing2.js");
const reviewRouter = require("./routes/review2.js");
const userRouter = require("./routes/user2.js");

const dbUrl = process.env.ATLASDB_URL;
const secret = process.env.SECRET || "fallbacksupersecretcode";

// Corrected methodOverride require
const methodOverrideMiddleware = require("method-override");


main().then(() => {
    console.log("Successfully Connected to DB");
}).catch((err) => {
    console.error("FATAL ERROR: Failed to connect to DB. Application might not work correctly.", err);
    // Optionally, you might want to exit if DB connection is critical for startup:
    // process.exit(1);
});

async function main(){
    if (!dbUrl) {
        console.error("FATAL ERROR: ATLASDB_URL not defined in environment variables. Cannot connect to DB.");
        throw new Error("ATLASDB_URL not defined");
    }
    await mongoose.connect(dbUrl);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverrideMiddleware("_method")); // Use the required middleware
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto:{
        secret: secret,
    },
    touchAfter: 24 * 3600,
});

store.on("error",(err) => {
    console.error("Error in Mongo session store:", err);
});

const sessionOptions = {
    store,
    secret : secret,
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);

app.all("*",(req,res,next) => {
    next(new ExpressError(404,"Page Not Found!"));
});

app.use((err,req,res,next) => {
    let {statusCode=500,message="Something went wrong!"} = err;
    console.error("Error Handler Caught:", err.stack || err); // Log the full error
    res.status(statusCode).render("error.ejs",{message, err}); // Pass full err object for more details if needed
});

const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {
    console.log(`Server is listening on port ${PORT}`);
});