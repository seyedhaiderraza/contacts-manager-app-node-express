const asyncHandler = require("express-async-handler")

const registerUserController=asyncHandler((req,res)=>{
    res.json({
        message: "Register user"
    })
})


const loginUserController=asyncHandler((req,res)=>{
    res.json({
        message: "Login user"
    })
})


const currentUserController=asyncHandler((req,res)=>{
    res.json({
        message: "Current user"
    })
})

module.exports = {registerUserController, loginUserController, currentUserController}