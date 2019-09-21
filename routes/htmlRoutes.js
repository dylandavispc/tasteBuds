const db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("user", {
        msg: "Tastebuds food and friends finder",
        examples: dbUser
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/user/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(dbUser) {
      res.render("user", {
        User: dbUser
      });
    });
  });

  app.post("/api/user", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.User.create({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      location: req.body.location,
      password: req.body.password


    }).then(function(dbUser) {
      // We have access to the new user as an argument inside of the callback function
      res.json(dbUser);
    });
  });

  // PUT route for updating user. We can get the updated todo data from req.body
  app.put("/api/user", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.User.update({
      id: req.body.id,
      name: req.body.name,
      email: req.body.name,
      location: req.body.location,
      password: req.body.password
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

};

  //DELETE route for deleting user. We can get the id of the user to be deleted from
  // req.params.id
  app.delete("/api/user/:id", function(req, res) {
    // We just have to specify which user we want to destroy with "where"
    db.User.destroy({
      where: {
      id: req.body.id,
      name: req.body.name,
      email: req.body.name,
      location: req.body.location,
      password: req.body.password
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });

  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
