const sql = require("./db.js");

// constructor
const Randonnee = function(randonne) {
   this.idRandonnee= randonne.idRandonnee;
  this.idReserve= randonne.idReserve;
  this.libelle= randonne.libelle;
  this.description= randonne.description;
  this.difficulte= randonne.difficulte;
  this.distance= randonne.distance;
  this.latitude= randonne.latitude;
  this.longitude= randonne.longitude;
  this.dureeMoyenne= randonne.dureeMoyenne;
  this.pointHaut= randonne.pointHaut;
  this.pointBas= randonne.pointBas;
  this.creer_le= randonne.creer_le;
  this.modifier_le= randonne.modifier_le;
};

 

Randonnee.findById = (id, result) => {
  sql.query(`SELECT * FROM randonnee WHERE idRandonnee = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found randonnee: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Randonnee.findByName = (libelle, result) => {
  sql.query(`SELECT * FROM randonnee WHERE libelle = ${libelle}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found randonnee: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the idlibelle
    result({ kind: "not_found" }, null);
  });
};

Randonnee.getAll = (result) => {
  let query = "SELECT * FROM randonnee";
 

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("randonnees: ", res);
    result(null, res);
  });
};



module.exports = Randonnee;