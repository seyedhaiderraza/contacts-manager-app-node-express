const express = require('express')
const router = express.Router()
const {
    getContact,
    getContacts,
    createContact,
    updateContact,
    deleteContact

} = require ('../controllers/contactController')

router.route("/").get(getContacts)

router.route("/:id").get(getContact)

router.route("/:id").put(updateContact)

router.route("/").post(createContact)

router.route("/:id").delete(deleteContact)


module.exports = router