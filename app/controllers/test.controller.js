const Test = require("../models/test.model.js");

// Create and Save a new test
exports.create = (req, res) => {
    // Validate request

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a test
    const test = new Test({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published || false
    });
   //#swagger.tags = ['Test']
    // #swagger.description = 'Add test in database.';
    // Save test in the database
    Test.create(test, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Test."
        });
      else res.send(data);
    });
  };

// Retrieve all test from the database (with condition).
exports.findAll = (req, res) => {
    const title = req.query.title;
  //#swagger.tags = ['Test']
    // #swagger.description = 'Find all test in database.';
    Test.getAll(title, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Test."
        });
      else res.send(data);
    });
  };
  // find all published test
  exports.findAllPublished = (req, res) => {
      //#swagger.tags = ['Test']
    // #swagger.description = 'Find all published test in database.';
    Test.getAllPublished((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Test."
        });
      else res.send(data);
    });
  };

// Find a single test with a id
exports.findOne = (req, res) => {
    //#swagger.tags = ['Test']
    // #swagger.description = 'Find test by id in database.';
    Test.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Test with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Test with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };


 

// Update a test identified by the id in the request
exports.update = (req, res) => {
    //#swagger.tags = ['Test']
    // #swagger.description = 'Update test in database.';
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    Test.updateById(
      req.params.id,
      new Test(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found test with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating test with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a test with the specified id in the request
exports.delete = (req, res) => {
    //#swagger.tags = ['Test']
    // #swagger.description = 'Delete test by id in database.';
    Test.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Test with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Test with id " + req.params.id
          });
        }
      } else res.send({ message: `Test was deleted successfully!` });
    });
  };

// Delete all test from the database.
exports.deleteAll = (req, res) => {
    //#swagger.tags = ['Test']
    // #swagger.description = 'Delete all test in database.';
    Test.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Tests."
        });
      else res.send({ message: `All Test were deleted successfully!` });
    });
  };