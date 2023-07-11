const express = require('express')
const router = express.Router()
const validateToken=require('../middleware/validationHandler')
const {
    registerUserController,
     loginUserController,
      currentUserController
} = require ("../controllers/userController")

router.route("/register").post(registerUserController)


router.route("/login").post(loginUserController)


router.route("/current").get(validateToken,currentUserController)

module.exports = router