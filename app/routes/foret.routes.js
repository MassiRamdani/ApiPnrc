module.exports = (app) => {
  const foret = require("../controllers/foret.controller");

  var router = require("express").Router();

  // Retrieve all test
  router.get("/foret/getAll", foret.findAll);

  // Retrieve a single test with id
  router.get("/foret/getById/:id", foret.findById);
   // Retrieve a single test with id
   router.get("/foret/getByName/:libelle", foret.findByName);

  app.use("/api/v1", router);

 };

