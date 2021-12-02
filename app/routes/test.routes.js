module.exports = (app) => {
  const test = require("../controllers/test.controller.js");

  var router = require("express").Router();
  

  /*   const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://massidz..eu.auth0.com/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: 'apipnrc.herokuapp.com',
  issuer: `https://massidz..eu.auth0.com/`,
  algorithms: ['RS256']
});
app.use(checkJwt);
*/ 

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

  app.use("/api/v1", router);

 };
