const Gite = require("../models/gite.model");

 

// Retrieve all gite from the database (with condition).
exports.findAll = (req, res) => {
   
  //#swagger.tags = ['Gites']
  // #swagger.description = 'Find all Gite in database.';
  Gite.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving gite.",
      });
    else res.send(data);
  });
};
 
// Find a single gite by id
exports.findById = (req, res) => {
  //#swagger.tags = ['Gites']
  // #swagger.description = 'Find Gite by id in database.';
  Gite.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Gite with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Gite with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Find a single gite with a name
exports.findByName = (req, res) => {
  //#swagger.tags = ['Gites']
  // #swagger.description = 'Find Gite by name in database.';
  Gite.findByName(req.params.nom, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Gite with id ${req.params.nom}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Gite with id " + req.params.nom,
        });
      }
    } else res.send(data);
  });
};

 

 