const sql = require("./db.js");

// constructor
const Gite = function (gite) {
  this.idGite= gite.idGite;
  this.idReserve = gite.idReserve;
  this.nom = gite.nom;
  this.description = gite.description;
  this.telephone = gite.telephone;
  this.mail = gite.mail;
  this.adresse = gite.adresse;
  this.nombrePlace = gite.nombrePlace;
  this.dureeMoyenne = gite.dureeMoyenne;
  this.dateOuverture = gite.dateOuverture;
  this.dateFermeture = gite.dateFermeture;
  this.latitude = gite.latitude;
  this.longitude = gite.longitude;
  this.creer_le= gite.creer_le;
  this.modifier_le= gite.modifier_le;
};

Gite.findById = (id, result) => {
  sql.query(`SELECT * FROM gite WHERE idGite = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found gite: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Gite.findByName = (nom, result) => {
  sql.query(
    `SELECT * FROM gite WHERE nom = ${nom}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found gite: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Tutorial with the idlibelle
      result({ kind: "not_found" }, null);
    }
  );
};

Gite.getAll = (result) => {
  let query = "SELECT * FROM gite";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("gites: ", res);
    result(null, res);
  });
};

module.exports = Gite;
