module.exports = app => {
    const test = require("../controllers/test.controller.js");
  
    var router = require("express").Router();
    var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('../../swagger_output.json');
    // Create a new test
   
    router.post("/add", test.create);
   
    // Retrieve all test
    router.get("/getAll", test.findAll);
  
    // Retrieve all published test
    router.get("/getAllpublished", test.findAllPublished);
  
    // Retrieve a single test with id
    router.get("/getById/:id", test.findOne);
  
    // Update a test with id
    router.put("/updateById/:id", test.update);
  
    // Delete a test with id
    router.delete("/deleteById/:id", test.delete);
  
    // Delete all test
    router.delete("/deleteAll", test.deleteAll);
  
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use('/api/v1', router);

    
  };