const getContacts = (req, res)=>{
    res.status(200).json({message:"get All Contacts"})
}

const getContact = (req, res)=>{
    res.status(200).json({message:"get A Contact"})
}

const updateContact = (req, res)=>{
    res.status(200).json({message:"update A Contact"})
}


const createContact = (req, res)=>{
    console.log("Request body is ", req.body)
    res.status(201).json({message:"create A Contact"})
}

const deleteContact = (req, res)=>{
    res.status(202).json({message:"delete A Contact"})
}

module.exports= {getContacts,getContact,updateContact,deleteContact,createContact}