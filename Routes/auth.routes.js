const express = require("express");

const authControllers = require("../Controllers/auth.controller");
const clientinfo = require("../Controllers/clientinfo");
const router = express.Router();

router.post("/login", authControllers.login);
router.post("/signup", authControllers.signup);
router.post("/clientinfo", clientinfo.info);
router.post("/trainerrecommend", clientinfo.trainerrecommend);
router.post("/trainerrecommendcalorie", clientinfo.trainerrecommendcalorie);
router.post("/updateclientmealtaken", clientinfo.updateclientmealtaken);

module.exports = router;
