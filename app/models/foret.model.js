const sql = require("./db.js");

// constructor
const Foret = function (foret) {
  this.idForet= foret.idForet;
  this.idReserve = foret.idReserve;
  this.libelle = foret.libelle;
  this.adresse = foret.adresse;
  this.description = foret.description;
  this.difficulte = foret.difficulte;
  this.latitude = foret.latitude;
  this.longitude = foret.longitude;
  this.creer_le = foret.creer_le;
  this.modifier_le = foret.modifier_le; 
};

Foret.findById = (id, result) => {
  sql.query(`SELECT * FROM foret WHERE idForet = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found foret: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Foret.findByName = (libelle, result) => {
  sql.query(
    `SELECT * FROM foret WHERE libelle = ${libelle}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found foret: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found foret with the name
      result({ kind: "not_found" }, null);
    }
  );
};

Foret.getAll = (result) => {
  let query = "SELECT * FROM foret";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("forets: ", res);
    result(null, res);
  });
};

module.exports = Foret;
