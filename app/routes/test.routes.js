module.exports = app => {
    const test = require("../controllers/test.controller.js");
  
    var router = require("express").Router();
  
    // Create a new test
    router.post("/", test.create);
  
    // Retrieve all test
    router.get("/", test.findAll);
  
    // Retrieve all published test
    router.get("/published", test.findAllPublished);
  
    // Retrieve a single test with id
    router.get("/:id", test.findOne);
  
    // Update a test with id
    router.put("/:id", test.update);
  
    // Delete a test with id
    router.delete("/:id", test.delete);
  
    // Delete all test
    router.delete("/", test.deleteAll);
  
    app.use('/api/test', router);
  };