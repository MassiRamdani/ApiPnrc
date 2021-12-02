module.exports = (app) => {
  const restaurant = require("../controllers/restaurant.controller");

  var router = require("express").Router();

  // Retrieve all test
  router.get("/restaurant/getAll", restaurant.findAll);

  // Retrieve a single test with id
  router.get("/restaurant/getById/:id", restaurant.findById);
   // Retrieve a single test with id
   router.get("/restaurant/getByName/:libelle", restaurant.findByName);

  app.use("/api/v1", router);

 };

