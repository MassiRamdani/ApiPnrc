module.exports = (app) => {
  const randonnee = require("../controllers/randonnee.controller");

  var router = require("express").Router();

  // Retrieve all test
  router.get("/randonnee/getAll", randonnee.findAll);

  // Retrieve a single test with id
  router.get("/randonnee/getById/:id", randonnee.findById);
   // Retrieve a single test with id
   router.get("/randonnee/getByName/:libelle", randonnee.findByName);

  app.use("/api/v1", router);

 };
