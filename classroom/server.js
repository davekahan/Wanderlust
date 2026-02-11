const express = require("express");
const app = express();
const users = require("./routes/user.js");

app.use("/",users);

app.get("/" , (req,res) => {
    res.send("Hii i am root");
})


app.listen(3000,() => {
    console.log("Server is running on port 3000");
})