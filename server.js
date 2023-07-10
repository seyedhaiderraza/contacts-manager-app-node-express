const express = require('express')
const dotenv = require('dotenv').config()

const app = express()
const port=process.env.PORT || 5000

app.get("/api/contacts", (req,res)=>{//do not forget to put / infront of api/contacts else error
    //res.send("Get all contacts")
    res.status(200).json({message:"Get All Contacts API Response"})
})

app.listen(port, ()=>{
    console.log(`Server running at ${port} PORT`)
})