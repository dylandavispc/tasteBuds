var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("index", {
        msg: "Welcome!",
        users: dbUser
      });
    });
  });

  // Load register page
  app.get("/register", function(req , res) {
    res.render("register")
  })

  app.get("/home", function(req, res) {
    res.render("home")
  })

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
