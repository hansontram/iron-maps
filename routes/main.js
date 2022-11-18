const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const gymsController = require("../controllers/gym");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/logout", authController.logout);
router.get("/feed", ensureAuth, gymsController.getFeed);
router.get("/allGyms", gymsController.getAllGyms);
router.get("/addGymPage", homeController.getAddGymPage);
router.get("/about", homeController.getAboutPage);


module.exports = router;
