const express = require("express");
const router = express.Router();

//index-users
router.get("/users" , (req,res) => {
    res.send("get for users");
})

//show-users
router.get("/users/:id" , (req,res) => {
    res.send("get for show users");
})

//post-users
router.post("/users" , (req,res) => {
    res.send("post for users");
})

//DELETE-users
router.get("/users/:id" , (req,res) => {
    res.send("DELETE for user id");
})

module.exports = router;