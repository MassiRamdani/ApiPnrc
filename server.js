const express = require("express");
const cors = require("cors");

const app = express();


var corsOptions = {
  origin: "https://apipnrc.herokuapp.com"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to pnrc api." });
});

//doc with swagger
var swaggerUi = require("swagger-ui-express"),
swaggerDocument = require("./swagger_output.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

require("./app/routes/test.routes.js")(app);
require("./app/routes/foret.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});