const asyncHandler = require("express-async-handler")
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const registerUserController=asyncHandler(async(req,res)=>{
   /*
    1. assert if request fields are valid
    2. check if email already present in the database
    3. encrypt password before storing using bcrypt

    */
    const {username, password, email} = req.body
    if(!username|| !email || !password){
        res.status(400);
        throw new Error('fields missing in request')
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable) {
        res.status(400);
        throw new Error('user already registered')
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
    const user = await User.create({
        username,
        password: hashedPassword,
        email
    })
    if(user){
    res.status(201).json({
        message: "User Registered",
        id:user.id,
        email: user.email
    })
}else{
    res.status(400)
    throw new Error('Error occurred while creating user')
}
})


const loginUserController=asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(400)
        throw new Error("fields values invalid")
    }
    
    
    const user = await User.findOne({email})
   const passwordValid=await bcrypt.compare(password,user?.password)
   if(passwordValid){
    const jwtToken = jwt.sign({
        user:{
            username:user.username,
            email:user.email,
            id: user.id
        }
    },
    process.env.SECRET,
    {expiresIn:"1h"}
        );
        res.status(200).json({
            "authentication_token":jwtToken
        })
   }else{
    res.status(401)
    throw new Error("fields values invalid")
   }
})


const currentUserController=asyncHandler((req,res)=>{
    res.status(200).json(req.user)
})

module.exports = {registerUserController, loginUserController, currentUserController}