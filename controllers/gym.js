const cloudinary = require("../middleware/cloudinary");
const Gym = require("../models/Gym");
const Review = require("../models/Review");

module.exports = {

    getFeed: async (req, res) => {
      try {
        const gyms = await Gym.find().sort({ createdAt: "desc" }).lean();
        // let's add a console.log below
        // save this and hit this endpoint and we should see "gyms" being logged to the terminal
        console.log('Gyms: ', gyms)
        res.render("feed.ejs", { gyms: gyms });  
      
      } catch (err) {
        console.log(err);
      }
    },
      getGym: async (req, res) => {
        console.log("THIS HIT")
        try {
          console.log(req.params)
          const gym = await Gym.findById(req.params.id);
          console.log(gym)
          const reviews = await Review.find({gymId: req.params.id}).sort({ createdAt: "asc" }).lean(); //TODO: understand these mongo methods (.find,.lean), check mongo docs
          res.render("gym.ejs", { gym: gym, user: req.user, reviews: reviews });
        } catch (err) {
          console.log(err);
        }
      },
      createGym: async (req, res) => {
        console.log(req.body)
        console.log(req.file)
        console.log("createGym endpoint hit")
        try {
          // TODO: Upload image to cloudinary
          const result = await cloudinary.uploader.upload(req.file.path);
    
          const newGym = await Gym.create({ 
            gymName: req.body.gymName,
            image: result.secure_url,
            cloudinaryId: result.public_id,
            caption: req.body.caption,
            location: req.body.location,
            hours: req.body.hours,
            specialty: req.body.specialty,
            likes: 0,
            userId: req.user.id 
          });
          console.log("Gym has been added!", newGym);
          res.redirect(`/gym/${newGym._id}`); 
        } catch (err) {
          console.log(err);
        }
      },
      likeGym: async (req, res) => {
        try {
          await Gym.findOneAndUpdate(
            { _id: req.params.id },
            {
              $inc: { likes: 1 },
            }
          );
          console.log("Likes +1");
          res.redirect(`/gym/${req.params.id}`);
        } catch (err) {
          console.log(err);
        }
      },
      deleteGym: async (req, res) => {
        try {
          // Find post by id
          let gym = await Gym.findById({ _id: req.params.id });
          // Delete image from cloudinary
          // await cloudinary.uploader.destroy(gym.cloudinaryId);
          // Delete post from db
          await Gym.remove({ _id: req.params.id });
          console.log("Deleted Gym");
          res.redirect("/feed");
        } catch (err) {
          res.redirect("/feed");
        }
      },
      updateGym: async (req, res) => {
        try {
          console.log("req.params: ", req.params)
          /* 
            req.body.updatedGym
            {
                gymName
                images
                cloudinaryId: 
                caption
                location
                hours
                specialty
            }
          */
          const updateDoc = {
            $set: req.body
          };
          const result = await Gym.updateOne( { _id: req.params.id }, updateDoc).catch(err => console.log("error updating gym: ", err));
          console.log("Gym updated successfully!", result);
          res.redirect(`/gym/${req.params.id}`);
        } catch (err) {
          console.log(err);
        }
      },
      getUpdateGymPage: async (req, res) => {
        let gym = await Gym.findById({ _id: req.params.id });
        console.log("Update Gym Page Works!: ", gym)
        res.render("updateGymPage.ejs", {gym: gym});
      },
};
