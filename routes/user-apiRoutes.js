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

  // Get user according to id
  app.get("/api/user/:id", function(req, res) {
    console.log(req.params.id)
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Bud]
    }).then(function(dbUser) {
      res.json(dbUser)
    });
  });

  // Create a new User
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(userData) {
      console.log("userData: " + userData);
      res.json(userData);
    });
  });

  //Update User (Generally to add buds)
  app.put(("/api/user/:id"), function(req,res) {
    db.User.update(req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(tasteBudsDB) {
        res.json(tasteBudsDB);
      });
  });

  // Delete an User by id
  app.delete("/api/user/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
