const Review = require("../models/Review");

module.exports = {
  getAllReviews: async (req, res) => {
    try {
      const reviews = await Review.find({gymId: req.params.id}).sort({ createdAt: "desc" }).lean();
     
      console.log('Reviews: ', reviews)
      res.render("gym.ejs", { reviews: reviews });  
    
    } catch (err) {
      console.log(err);
    }
  },
  createReview: async (req, res) => {
  
    
    console.log("createReview endpoint hit")
    try {
     const newReview =  await Review.create({
        review: req.body.review,
        likes: 0,
        gymId: req.params.id,
        reviewBy: req.user.userName,
        reviewById: req.user.id,
      });
      console.log("Review has been added!", newReview);
      res.redirect("/gym/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
  deleteReview: async (req, res) => {
    
    try {
      let review = await Review.findById({ _id: req.params.reviewid });
      // Delete comment from db
      await Review.deleteOne({ _id: req.params.reviewid });

      console.log("Deleted Review");
      res.redirect(`/gym/${review.gymId}`);
    } catch (err) {
      console.log("error deleting review: " + err);
    }
  },
  updateReview: async (req, res) => {
    try {
      const updateDoc = {
        $set: req.body
      };
      const result = await Review.updateOne( { _id: req.params.reviewid }, updateDoc);
      console.log("Review updated successfully!");
      let review = await Review.findById({ _id: req.params.reviewid });
      res.redirect(`/gym/${review.gymId}`);
    } catch (err) {
      console.log(err);
    }
  },
  getUpdateReviewPage: async (req, res) => {
    let review = await Review.findById({ _id: req.params.reviewid });
    console.log("Update Review Page Works!: ", review)
    res.render("updateReviewPage.ejs", {review: review});
  },
};
