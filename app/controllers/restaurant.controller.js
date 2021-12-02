const Restaurant = require("../models/restaurant.model");

 

// Retrieve all Restaurant from the database (with condition).
exports.findAll = (req, res) => {
   
  //#swagger.tags = ['Restaurants']
  // #swagger.description = 'Find all Restaurant in database.';
  Restaurant.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Restaurant.",
      });
    else res.send(data);
  });
};
 
// Find a single Restaurant by id
exports.findById = (req, res) => {
  //#swagger.tags = ['Restaurants']
  // #swagger.description = 'Find Restaurant by id in database.';
  Restaurant.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Restaurant with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Restaurant with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Find a single Restaurant with a name
exports.findByName = (req, res) => {
  //#swagger.tags = ['Restaurants']
  // #swagger.description = 'Find Restaurant by name in database.';
  Restaurant.findByName(req.params.libelle, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Restaurant with id ${req.params.libelle}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Restaurant with id " + req.params.libelle,
        });
      }
    } else res.send(data);
  });
};

 

 