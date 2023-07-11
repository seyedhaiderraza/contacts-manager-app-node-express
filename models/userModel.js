const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    username:{
        type: String,
        required: [true, "Please enter username"],
        
    },
    email:{
        type: String,
        required: [true, "Please enter username"],
        unique:[true, "email address already taken"]
    },
    password:{
        type: String,
        required: [true, "Please enter password"]
    }
}, {
   timestamps:true 
})

const userModel = mongoose.model('User',userSchema )
module.exports = userModel