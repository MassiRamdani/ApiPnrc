module.exports = (app) => {
  const reserve = require("../controllers/reserve.controller");

  var router = require("express").Router();

  // Retrieve all test
  router.get("/reserve/getAll", reserve.findAll);

  // Retrieve a single test with id
  router.get("/reserve/getById/:id", reserve.findById);
   // Retrieve a single test with id
   router.get("/reserve/getByName/:libelle", reserve.findByName);

  app.use("/api/v1", router);

 };

