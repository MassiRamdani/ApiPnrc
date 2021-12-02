const sql = require("./db.js");

// constructor
const Reserve = function (reserve) {
  this.idReserve=reserve.idReserve ;
  this.nom=reserve.nom ;
  this.description=reserve.description ;
  this.adresse=reserve.adresse ;
  this.telephone=reserve.telephone ;
  this.email=reserve.email ;
  this.latitude=reserve.latitude ;
  this.longitude=reserve.longitude ;
  this.surface=reserve.surface ;
  this.type=reserve.type ;
  this.creer_le=reserve.creer_le ;
  this.modifier_le=reserve.modifier_le ; 
};

Reserve.findById = (id, result) => {
  sql.query(`SELECT * FROM reserve WHERE idReserve = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found reserve: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found reserve with the id
    result({ kind: "not_found" }, null);
  });
};

Reserve.findByName = (nom, result) => {
  sql.query(
    `SELECT * FROM reserve WHERE nom = ${nom}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found reserve: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found reserve with the name
      result({ kind: "not_found" }, null);
    }
  );
};

Reserve.getAll = (result) => {
  let query = "SELECT * FROM reserve";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("reserves: ", res);
    result(null, res);
  });
};

module.exports = Reserve;
