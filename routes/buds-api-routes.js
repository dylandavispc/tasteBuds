// Requiring our models
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the bud
  app.get("/api/buds", function(req, res) {
    const query = {};
    if (req.query.buds_id) {
      query.BudsId = req.query.buds_id;
    }
    db.Buds.findAll({
      where: query
    }).then(function(dbBuds) {
      res.json(dbBuds);
    });
  });

  // Get route for retrieving a single bud
  app.get("/api/buds/:id", function(req, res) {
    db.Buds.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbBuds) {
      console.log(dbBuds);
      res.json(dbBuds);
    });
  });

  // Buds route for saving a new Bud
  app.post("/api/buds", function(req, res) {
    db.Buds.create(req.body).then(function(dbBuds) {
      res.json(dbBuds);
    });
  });

  // DELETE route for deleting Buds
  app.delete("/api/buds/:id", function(req, res) {
    db.Buds.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbBuds);
    });
  });

  // PUT route for updating Buds
  app.put("/api/buds", function(req, res) {
    db.Buds.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbBuds) {
      res.json(dbBuds);
    });
  });
};
