module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
  },
  getAddGymPage: (req, res) => {
    console.log("Add Gym Page Works!")
  res.render("addGymPage.ejs", {user: req.user});
  },
};
