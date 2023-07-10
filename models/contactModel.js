const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({

    name:{
        type: String,
        required: [true, "Please add the contact name"]
    },
    email:{
        type: String,
        required: [true, "Please add the contact email"]
    },
    phone:{
        type: Number,
        required: [true, "Please add the phone number"]
    }
},{
    timestamps: true
}
);
const contactModel = mongoose.model("Contact", contactSchema)
module.exports = contactModel