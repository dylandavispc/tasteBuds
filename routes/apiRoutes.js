var db = require("../models");

module.exports = function(app) {
  // Get all Users
  app.get("/api/user", function(req, res) {
    db.User.findAll({
      include: [db.Bud]
    }).then(function(data) {
      console.log(data);
      res.json(data);
    });
  });

  // Create a new User
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(userData) {
      console.log(userData);
      res.json(userData);
    });
  });

  // Delete an User by id
  app.delete("/api/Users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
