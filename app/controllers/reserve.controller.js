const Reserve = require("../models/reserve.model");

 

// Retrieve all Reserve from the database (with condition).
exports.findAll = (req, res) => {
   
  //#swagger.tags = ['Reserves']
  // #swagger.description = 'Find all Reserve in database.';
  Reserve.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Reserve.",
      });
    else res.send(data);
  });
};
 
// Find a single Reserve by id
exports.findById = (req, res) => {
  //#swagger.tags = ['Reserves']
  // #swagger.description = 'Find Reserve by id in database.';
  Reserve.findById(req.params.id, (err, data) => {
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

// Find a single Reserve with a name
exports.findByName = (req, res) => {
  //#swagger.tags = ['Reserves']
  // #swagger.description = 'Find Reserve by name in database.';
  Reserve.findByName(req.params.libelle, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found foret with id ${req.params.libelle}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Reserve with id " + req.params.libelle,
        });
      }
    } else res.send(data);
  });
};

 

 