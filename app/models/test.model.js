const sql = require("./db.js");

// constructor
const Test = function(tutorial) {
  this.title = tutorial.title;
  this.description = tutorial.description;
  this.published = tutorial.published;
};

Test.create = (newTutorial, result) => {
  sql.query("INSERT INTO test SET ?", newTutorial, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Test: ", { id: res.insertId, ...newTutorial });
    result(null, { id: res.insertId, ...newTutorial });
  });
};

Test.findById = (id, result) => {
  sql.query(`SELECT * FROM test WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tutorial: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Test.getAll = (title, result) => {
  let query = "SELECT * FROM test";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tutorials: ", res);
    result(null, res);
  });
};

Test.getAllPublished = result => {
  sql.query("SELECT * FROM test WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("test: ", res);
    result(null, res);
  });
};

Test.updateById = (id, tutorial, result) => {
  sql.query(
    "UPDATE test SET title = ?, description = ?, published = ? WHERE id = ?",
    [tutorial.title, tutorial.description, tutorial.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated test: ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};

Test.remove = (id, result) => {
  sql.query("DELETE FROM test WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted test with id: ", id);
    result(null, res);
  });
};

Test.removeAll = result => {
  sql.query("DELETE FROM test", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} test`);
    result(null, res);
  });
};

module.exports = Test;