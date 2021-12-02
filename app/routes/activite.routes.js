module.exports = (app) => {
  const activite = require("../controllers/activite.controller");

  var router = require("express").Router();

  // Retrieve all activite
  router.get("/activite/getAll", activite.findAll);

  // Retrieve a single activite with id
  router.get("/activite/getById/:id", activite.findById);
   // Retrieve a single activite with name
   router.get("/activite/getByName/:libelle", activite.findByName);

  app.use("/api/v1", router);

 };

