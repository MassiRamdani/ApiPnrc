const Randonnee = require("../models/randonnee.model");

 

// Retrieve all randonnee from the database (with condition).
exports.findAll = (req, res) => {
   
  //#swagger.tags = ['Randonnees']
  // #swagger.description = 'Find all test in database.';
  Randonnee.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving randonnee.",
      });
    else res.send(data);
  });
};
 
// Find a single randonnee randonnee a id
exports.findById = (req, res) => {
  //#swagger.tags = ['Randonnees']
  // #swagger.description = 'Find randonnee by id in database.';
  Randonnee.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found randonnee with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving randonnee with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Find a single randonnee with a name
exports.findByName = (req, res) => {
  //#swagger.tags = ['Randonnees']
  // #swagger.description = 'Find Randonnee by name in database.';
  Randonnee.findByName(req.params.libelle, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found randonnee with id ${req.params.libelle}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving randonnee with id " + req.params.libelle,
        });
      }
    } else res.send(data);
  });
};

 

 