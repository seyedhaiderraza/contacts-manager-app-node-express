const express = require('express')
const router = express.Router()


router.route("/").get((req,res)=>{
    res.status(200).json({message:"Get All Contacts API Response"})
})

router.route("/:id").get((req,res)=>{
    res.status(200).json({message:"Get Single Contact API Response"})
})

router.route("/:id").put((req,res)=>{
    res.status(200).json({message:"Update A Contact API Response"})
})

router.route("/").post((req,res)=>{
    res.status(200).json({message:"Create A Contact API Response"})
})

router.route("/:id").delete((req,res)=>{
    res.status(200).json({message:"Delete A Contact API Response"})
})


module.exports = router