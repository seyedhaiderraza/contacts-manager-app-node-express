const express = require('express')
const dotenv = require('dotenv').config()

const app = new express()
const port=process.env.PORT || 5001


app.listen(port, ()=>{
    console.log(`Server running at ${port} PORT`)
})