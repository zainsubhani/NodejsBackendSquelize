const router = require("express").Router();

const authController = require("../Controllers/authController");

router.post("/optGenerator", authController.authOpt);

module.exports = router;
