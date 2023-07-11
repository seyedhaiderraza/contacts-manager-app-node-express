const express = require('express')
const router = express.Router()

const {
    registerUserController,
     loginUserController,
      currentUserController
} = require ("../controllers/userController")

router.route("/register").post(registerUserController)


router.route("/login").post(loginUserController)


router.route("/current").post(currentUserController)

module.exports = router