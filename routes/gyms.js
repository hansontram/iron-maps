const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const gymsController = require("../controllers/gym");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


//Gym Routes - simplified for now

router.get("/:id", ensureAuth, gymsController.getGym);
router.post("/createGym", upload.single("file"), gymsController.createGym);
router.delete("/deleteGym/:id", gymsController.deleteGym);
router.put("/likeGym/:id", gymsController.likeGym);
router.put("/updateGym/:id", gymsController.updateGym);
router.get("/getUpdateGymPage/:id", gymsController.getUpdateGymPage);

module.exports = router;
