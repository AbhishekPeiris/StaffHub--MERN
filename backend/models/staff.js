const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema ({

    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    },
    dob : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    imageurl : []
    
})

const Staff = mongoose.model("staff", staffSchema);

module.exports = Staff;