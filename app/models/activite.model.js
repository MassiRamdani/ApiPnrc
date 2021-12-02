const sql = require("./db.js");

// constructor
const Activite = function (activite) {
  this.idActivite=activite.idActivite;
  this.idReserve=activite.idReserve;
  this.nom=activite.nom;
  this.type=activite.type;
  this.description=activite.description;
  this.adresse=activite.adresse;
  this.dureeMoyenne=activite.dureeMoyenne;
  this.dateDebut=activite.dateDebut;
  this.heureDebut=activite.heureDebut;
  this.nombreParticipants=activite.nombreParticipants;
  this.latitude=activite.latitude;
  this.longitude=activite.longitude;
  this.creer_le=activite.creer_le;
  this.modifier_le=activite.modifier_le;
  this.telephone=activite.telephone;

};

Activite.findById = (id, result) => {
  sql.query(`SELECT * FROM activite WHERE idActivite = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found activite: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found activite with the id
    result({ kind: "not_found" }, null);
  });
};

Activite.findByName = (nom, result) => {
  sql.query(
    `SELECT * FROM activite WHERE nom = ${nom}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found activite: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found activite with the name
      result({ kind: "not_found" }, null);
    }
  );
};

Activite.getAll = (result) => {
  let query = "SELECT * FROM activite";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("activites: ", res);
    result(null, res);
  });
};

module.exports = Activite;
