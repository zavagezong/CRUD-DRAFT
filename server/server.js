const path = require("path");
//easier way of referencing files further away from the current file we're trying to reference from
const express = require("express");
const bodyParser = require("body-parser");

const foodController = require("./controllers/foodController");

const app = express();
const PORT = 3000;

app.get("/", (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"))
);

// route to get all recipe
// app.get("/all", foodController.getRecipes, (req, res) =>
//   res.status(200).json(res.locals.species.rows[0])
// );

app.listen(PORT, () => {
  console.log(`Server listening to port: ${PORT}`);
});

module.exports = app;
