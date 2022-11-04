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

// /api/gym/{id} - getGym 
// router.get("/:id", ensureAuth, gymsController.getGym);
router.get("/:id", gymsController.getGym);

// /api/gym/createGym
    // TODO:  Add Cloudinary + upload img later
router.post("/createGym", gymsController.createGym);

// /api/gym/deleteGym/{id}
router.delete("/deleteGym/:id", gymsController.deleteGym);

// /api/gym/likeGym/{id}
router.put("/likeGym/:id", gymsController.likeGym);

// /api/gym/updateGym/{id}
router.put("/updateGym/:id", gymsController.updateGym);

module.exports = router;
