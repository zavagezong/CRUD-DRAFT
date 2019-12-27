const path = require("path");
//easier way of referencing files further away from the current file we're trying to reference from
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const apiRouter = require("./routes/api");

const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use("/assets", express.static(path.resolve(__dirname, "../client/assets")));

/* define route handlers
 */
app.use("/api", apiRouter);

// respond with main app
app.get("/", (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, "../client/index.html"))
);

// route to get all recipe
// app.get("/all", recipeController.getRecipes, (req, res) =>
//   res.status(200).json(res.locals.species.rows[0])
// );

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" }
  };
  console.log({ err });
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening to port: ${PORT}`);
});

module.exports = app;
