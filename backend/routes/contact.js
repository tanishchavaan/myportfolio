const express = require("express");
const router = express.Router();
const { sendMail } = require("../controllers/contactController");

router.post("/", sendMail);

module.exports = router;

