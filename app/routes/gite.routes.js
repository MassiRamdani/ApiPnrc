module.exports = (app) => {
  const gite = require("../controllers/gite.controller");

  var router = require("express").Router();

  // Retrieve all test
  router.get("/gite/getAll", gite.findAll);

  // Retrieve a single test with id
  router.get("/gite/getById/:id", gite.findById);
   // Retrieve a single test with id
   router.get("/gite/getByName/:libelle", gite.findByName);

  app.use("/api/v1", router);

 };
