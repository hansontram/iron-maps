const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviews");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Review Routes - simplified for now
router.get("/getAllReviews/:gymid", reviewsController.getAllReviews);
router.post("/createReview/:id", reviewsController.createReview);
router.put("/updateReview/:reviewid", reviewsController.updateReview);
router.delete("/deleteReview/:reviewid", reviewsController.deleteReview);
router.get("/getUpdateReviewPage/:reviewid", reviewsController.getUpdateReviewPage);

module.exports = router;


