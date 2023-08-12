const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const contactsRouter = require("./routes/contactsRoutes");
const usersRouter = require("./routes/usersRoutes");
const cors = require("cors");
connectDB();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at ${port} PORT`);
});
