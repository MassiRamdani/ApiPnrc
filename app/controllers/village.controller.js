const Village = require("../models/village.model");

 

// Retrieve all Village from the database (with condition).
exports.findAll = (req, res) => {
   
  //#swagger.tags = ['Villages']
  // #swagger.description = 'Find all Village in database.';
  Village.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Village.",
      });
    else res.send(data);
  });
};
 
// Find a single Village by id
exports.findById = (req, res) => {
  //#swagger.tags = ['Villages']
  // #swagger.description = 'Find Village by id in database.';
  Village.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Village with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Village with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Find a single Village with a name
exports.findByName = (req, res) => {
  //#swagger.tags = ['Villages']
  // #swagger.description = 'Find Village by name in database.';
  Village.findByName(req.params.nom, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Village with id ${req.params.nom}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Village with id " + req.params.nom,
        });
      }
    } else res.send(data);
  });
};

 

 