module.exports = (app) => {
  const village = require("../controllers/village.controller");

  var router = require("express").Router();

  // Retrieve all test
  router.get("/village/getAll", village.findAll);

  // Retrieve a single test with id
  router.get("/village/getById/:id", village.findById);
   // Retrieve a single test with id
   router.get("/village/getByName/:libelle", village.findByName);

  app.use("/api/v1", router);

 };

