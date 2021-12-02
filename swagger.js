const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
//const endpointsFiles = ['./app/routes/test.routes.js']
const endpointsFiles = [
  "./app/routes/gite.routes.js",
  "./app/routes/randonnee.routes.js",
  "./app/routes/foret.routes.js",
  "./app/routes/activite.routes.js",
  "./app/routes/village.routes.js",
  "./app/routes/reserve.routes.js",
  "./app/routes/restaurant.routes.js"
];
const doc = {
  info: {
    version: "1.0.0",
    title: "PNRC Api Documentation",
    description: "Documentation automatically generated for our api",
  },
  host: "apipnrc.herokuapp.com",
  basePath: "/api/v1",
  schemes: ["https"],
  consumes: ["application/json"],
  produces: ["application/json"],
};
// généré à chaque fois que je démarre le projet
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./server.js");
});
