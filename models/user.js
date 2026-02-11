const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalmongoose = require("passport-local-mongoose");

//passport local mongoose will automatically add the username and password with hash and salt field
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalmongoose);

module.exports = mongoose.model('User',userSchema);