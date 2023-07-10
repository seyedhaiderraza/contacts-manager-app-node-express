const express = require('express')
const dotenv = require('dotenv').config()
const contactsRouter = require('./routes/contactsRoutes')
const errorHandler = require('./middleware/errorHandler')
const connectDB = require('./config/dbConnection')

connectDB()
const app = express()
const port=process.env.PORT || 5000

app.use(express.json())
app.use("/api/contacts", contactsRouter);
app.use(errorHandler)


app.listen(port, ()=>{
    console.log(`Server running at ${port} PORT`)
})