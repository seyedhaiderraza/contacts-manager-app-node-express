const asyncHandler = require("express-async-handler")
const getContacts = async(req, res)=>{
    res.status(200).json({message:"get All Contacts"})
}

const getContact = asyncHandler(async(req, res)=>{
    res.status(200).json({message:"get A Contact"})
})

const updateContact = asyncHandler(async(req, res)=>{
    res.status(200).json({message:"update A Contact"})
})


const createContact = asyncHandler(async(req, res)=>{
    console.log("Request body is ", req.body)
    if(!req.body.name || !req.body.email || !req.body.phone){
        res.status(400)
        throw new Error('all fields are mandatory')
    }
    res.status(201).json({message:"create A Contact"})
})

const deleteContact = asyncHandler(async(req, res)=>{
    res.status(202).json({message:"delete A Contact"})
})

module.exports= {getContacts,getContact,updateContact,deleteContact,createContact}