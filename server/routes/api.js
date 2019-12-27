const express = require("express");

const recipeController = require("../controllers/recipeController");

const router = express.Router();

// app.get("/api/recipes", (req, res) => {
//   connection.query("SELECT 1 + 1 AS solution", function(
//     error,
//     results,
//     fields
//   ) {
//     if (error) throw error;
//     console.log("The solution is: ", results[0].solution);
//   });

//   res.status(200).send([
//     { id: 1, name: "Fudge Bar" },
//     { id: 2, name: "Ice Cream" }
//   ]);
// });
router.get("/recipe", recipeController.getRecipes, (req, res) => {
  console.log("req", res.locals);
  res.status(200).json(res.locals.recipes);
});

router.post("/recipe", recipeController.addRecipe, (req, res) =>
  res.status(200).json({})
);

router.put("/recipe/:id", recipeController.updateRecipe, (req, res) =>
  res.status(200).json({})
);

router.delete("/recipe/:id", recipeController.deleteRecipe, (req, res) =>
  res.status(200).json({})
);

module.exports = router;
