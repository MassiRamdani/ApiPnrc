const Activite = require("../models/activite.model");

 

// Retrieve all Activite from the database (with condition).
exports.findAll = (req, res) => {
   
  //#swagger.tags = ['Activites']
  // #swagger.description = 'Find all Activite in database.';
  Activite.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Activite.",
      });
    else res.send(data);
  });
};
 
// Find a single Activite by id
exports.findById = (req, res) => {
  //#swagger.tags = ['Activites']
  // #swagger.description = 'Find Activite by id in database.';
  Activite.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Activite with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Activite with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Find a single Activite with a name
exports.findByName = (req, res) => {
  //#swagger.tags = ['Activites']
  // #swagger.description = 'Find Activite by name in database.';
  Activite.findByName(req.params.libelle, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Activite with id ${req.params.libelle}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Activite with id " + req.params.libelle,
        });
      }
    } else res.send(data);
  });
};

 

 