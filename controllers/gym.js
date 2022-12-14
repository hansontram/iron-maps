const cloudinary = require("../middleware/cloudinary");
const Gym = require("../models/Gym");
const Review = require("../models/Review");

module.exports = {

    getFeed: async (req, res) => {
      try {
        // const gyms = await Gym.find().sort({ createdAt: "desc" }).lean();
        //Changed to highest likes to show up on feed
        const gyms = await Gym.find().sort({ likes: "desc" }).lean();
       
        console.log('Gyms: ', gyms)
        res.render("feed.ejs", { gyms: gyms });  
      
      } catch (err) {
        console.log("Get Feed: ",err);
      }
    },
      getGym: async (req, res) => {
        try {
          const gym = await Gym.findById(req.params.id);
          const reviews = await Review.find({gymId: req.params.id}).sort({ createdAt: "asc" }).lean(); 
          res.render("gym.ejs", { gym: gym, user: req.user, reviews: reviews });
        } catch (err) {
          console.log("Get Gym Error: ", err);
        }
      },
      createGym: async (req, res) => {
        console.log("createGym endpoint hit")
        try {
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
          console.log("Create Gym Error: ", err);
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
          console.log("Like Gym Error",err);
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
          res.redirect("/allGyms");
        } catch (err) {
          res.redirect("/allGyms");
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
          console.log("updateGym Error", err);
        }
      },
      getUpdateGymPage: async (req, res) => {
        let gym = await Gym.findById({ _id: req.params.id });
        console.log("Update Gym Page Works!: ", gym)
        res.render("updateGymPage.ejs", {gym: gym});
      },
      getAllGyms: async (req, res) => {
        try {
          const gyms = await Gym.find().sort({ createdAt: "desc" }).lean();
          
          //Changed to highest likes to show up on feed
          // const gyms = await Gym.find().sort({ likes: "desc" }).lean();
          
          console.log('Gyms: ', gyms)
          res.render("allGyms.ejs", { gyms: gyms });  
        
        } catch (err) {
          console.log("GetAllGyms", err);
        }
      },
};
