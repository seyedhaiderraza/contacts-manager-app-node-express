const express = require('express')
const dotenv = require('dotenv').config()
const contactsRouter = require('./routes/contactsRoutes')
const app = express()
const port=process.env.PORT || 5000

app.use("/api/contacts", contactsRouter);

app.listen(port, ()=>{
    console.log(`Server running at ${port} PORT`)
})