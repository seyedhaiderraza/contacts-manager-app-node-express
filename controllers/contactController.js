const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")



const getContacts = asyncHandler(async(req, res)=>{
    const contacts = await  Contact.find({user_id:req.user.id})
   // res.status(200).json({message:"get All Contacts"})
   if(contacts.length===0){
    res.status(404);
    throw new Error("no contacts found for the user")
   }
    res.status(200).json(contacts)
})

const getContact = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
         throw new Error("contact not found")
    }
    if(req.user.id!==contact.user_id.toString()){
        res.status(403)
        throw new Error('User not have permission for operation ')
}
res.status(200).json(contact)
})

const updateContact = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }
    else if(req.user.id!==contact.user_id.toString()){
                res.status(403)
                throw new Error('User not have permission for operation ')
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body,{new:true})

    res.status(200).json(updatedContact)
})


const createContact = asyncHandler(async(req, res)=>{
    console.log("Request body is ", req.body)
    const {name, email, phone} = req?.body
    if(!req.body.name || !req.body.email || !req.body.phone){
        res.status(400)
        throw new Error('all fields are mandatory')
    }
    const contact= await Contact.create({
        name, 
        email,
        phone,
        user_id:req.user.id
     })
    res.status(201).json(contact)
})

const deleteContact = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("contact not found")
    }
    else if(req.user.id!==contact.user_id.toString()){
        res.status(403)
        throw new Error('User not have permission for operation ')
}
    await contact.deleteOne()
    res.status(202).json({message:"contact removed"})
})

module.exports= {getContacts,getContact,updateContact,deleteContact,createContact}