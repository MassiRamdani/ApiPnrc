const Foret = require("../models/foret.model");

 

// Retrieve all foret from the database (with condition).
exports.findAll = (req, res) => {
   
  //#swagger.tags = ['Forets']
  // #swagger.description = 'Find all Foret in database.';
  Foret.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving foret.",
      });
    else res.send(data);
  });
};
 
// Find a single foret by id
exports.findById = (req, res) => {
  //#swagger.tags = ['Forets']
  // #swagger.description = 'Find Foret by id in database.';
  Foret.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found foret with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving foret with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Find a single foret with a name
exports.findByName = (req, res) => {
  //#swagger.tags = ['Forets']
  // #swagger.description = 'Find Foret by name in database.';
  Foret.findByName(req.params.libelle, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found foret with id ${req.params.libelle}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving foret with id " + req.params.libelle,
        });
      }
    } else res.send(data);
  });
};

 

 