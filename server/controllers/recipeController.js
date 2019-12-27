const db = require("../models/recipeModels");

const recipeController = {};

recipeController.getRecipes = (req, res, next) => {
  // write code here
  const recipes = "SELECT * FROM recipes";
  db.query(recipes, function(error, results, fields) {
    if (error) {
      console.error(error);
      next(error);
    }
    res.locals.recipes = results;
    next();
  });
};

recipeController.addRecipe = (req, res, next) => {
  // write code here
  const c = req.body;
  const addRecipe = {
    name: "newRecipe",
    text: `INSERT INTO recipes (name, img_url, ingredients, instructions) VALUES ($1, $2, $3, $4);`,
    values: [c.name, c.img_url, c.ingredients, c.instructions]
  };
  db.query(addRecipe.text, addRecipe.values)
    .then(() => next())
    .catch(e => {
      console.error(e.stack);
      next(e);
    });
};

recipeController.updateRecipe = (req, res, next) => {};

recipeController.deleteRecipe = (req, res, next) => {};

module.exports = recipeController;
