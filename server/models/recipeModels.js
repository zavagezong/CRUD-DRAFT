const jsonToRow = require("./jsonToRow");
const database = require("./database.json");

let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "31nst31n",
  database: "sarah_recipe"
});

connection.connect();

// Wipe database
//drop database recipes;
let dropTable = "DROP TABLE recipes";
connection.query(dropTable, function(error) {
  if (error) {
    console.error(error);
  }
  let recreateTable =
    "CREATE TABLE recipes (id INT(255), category_id INT(255), name VARCHAR(255), ingredients VARCHAR(255), instructions TEXT(20000), cook_time INT(255), img_url VARCHAR(255))";
  connection.query(recreateTable, function(error) {
    if (error) {
      console.error(error);
    }
    let values = jsonToRow(database);
    let rows = `INSERT INTO recipes (id, category_id, name, instructions, cook_time, img_url) VALUES ${values}`;
    connection.query(rows, function(error) {
      if (error) {
        console.error(error);
      }
    });
  });
});
// Recreate database

module.exports = connection;
