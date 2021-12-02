const sql = require("./db.js");

// constructor
const Restaurant = function (restaurant) {
  this.idRestaurant = restaurant.idRestaurant ;
  this.idReserve= restaurant.idReserve ;
  this.nom= restaurant.nom ;
  this.description= restaurant.description ;
  this.latitude= restaurant.latitude ;
  this.longitude= restaurant.longitude ;
  this.categorie= restaurant.categorie ;
  this.menu= restaurant.menu ;
  this.specialite= restaurant.specialite ;
  this.creer_le= restaurant.creer_le ;
  this.modifier_le= restaurant.modifier_le ; 
};

Restaurant.findById = (id, result) => {
  sql.query(`SELECT * FROM restaurant WHERE idRestaurant = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found restaurant: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found restaurant with the id
    result({ kind: "not_found" }, null);
  });
};

Restaurant.findByName = (libelle, result) => {
  sql.query(
    `SELECT * FROM restaurant WHERE nom = ${libelle}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found restaurant: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found restaurant with the name
      result({ kind: "not_found" }, null);
    }
  );
};

Restaurant.getAll = (result) => {
  let query = "SELECT * FROM restaurant";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("restaurants: ", res);
    result(null, res);
  });
};

module.exports = Foret;
