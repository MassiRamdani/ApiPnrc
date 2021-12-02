const sql = require("./db.js");

// constructor
const Village = function (village) {
  this.idVillage =village.idVillage ;
  this.idReserve =village.idReserve ;
  this.nom =village.nom ;
  this.description =village.description ;
  this.adresse =village.adresse ;
  this.latitude =village.latitude ;
  this.longitude =village.longitude ;
  this.nbrePopulation =village.nbrePopulation ;
  this.creer_le =village.creer_le ;
  this.modifier_le =village.modifier_le ; } 

  Village.findById = (id, result) => {
  sql.query(`SELECT * FROM village WHERE idVillage = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found village: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found village with the id
    result({ kind: "not_found" }, null);
  });
};

Village.findByName = (nom, result) => {
  sql.query(
    `SELECT * FROM village WHERE nom = ${nom}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found village: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found village with the name
      result({ kind: "not_found" }, null);
    }
  );
};

Village.getAll = (result) => {
  let query = "SELECT * FROM village";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("villages: ", res);
    result(null, res);
  });
};

module.exports = Village;