const express = require("express");

const starWarsController = require("../controllers/recipesController");

const router = express.Router();

/*router.get("/", starWarsController.getCharacters, (req, res) =>
res.status(200).json([...res.locals.characters.rows])
);

router.get("/species", starWarsController.getSpecies, (req, res) =>
  res.status(200).json(res.locals.species.rows[0])
);

router.get("/homeworld", starWarsController.getHomeworld, (req, res) =>
  res.status(200).json(res.locals.homeworld.rows[0])
);

router.post("/character", starWarsController.addCharacter, (req, res) =>
  res.status(200).json({})
);

module.exports = router;*/
