const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const gymsController = require("../controllers/gym");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

/*Backend Devlopement Flow
    1. Define the Route/Endpoints
    2. In respective controller, work on method logic
    3. Test endpoint with PostMan and confirm it's working
*/

//Gym Routes - simplified for now


router.get("/:id", ensureAuth, gymsController.getGym);


    // TODO:  Add Cloudinary + upload img later
router.post("/createGym", upload.single("file"), gymsController.createGym);


router.delete("/deleteGym/:id", gymsController.deleteGym);
router.put("/likeGym/:id", gymsController.likeGym);
router.put("/updateGym/:id", gymsController.updateGym);
router.get("/getUpdateGymPage/:id", gymsController.getUpdateGymPage);

module.exports = router;
