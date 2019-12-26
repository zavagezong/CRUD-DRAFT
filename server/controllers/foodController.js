// const db = require('../models/recipeModels');

const foodController = {};

foodController.getRecipes = (req, res, next) => {
  // write code here
//   const people = 'SELECT p.name, p.gender, p.birth_year, p.eye_color,'+
//    ' p.hair_color, p.skin_color, p.mass, p.height, s.name AS species, h.name AS homeworld, s._id AS species_id, h._id AS homeworld_id'+
//    ' FROM people p LEFT OUTER JOIN species s ON p.species_id=s._id'+
//    ' LEFT OUTER JOIN planets h ON p.homeworld_id=h._id;';

    // const recipes = 'recipe query here';

//   db.query(people)
    // .then(response => {
    //   res.locals.recipes = response;
    //   //console.log(response);
    //   next();
    // })
    // .catch(e => {
    //   console.error(e.stack);
    //   next(e);
    // })
  
}
/*
foodController.getSpecies = (req, res, next) => {
  // write code here
  console.log('starWarsController line 26', req.query);
  const id = req.query.id;
  const species = `SELECT s.classification, s.average_height, s.average_lifespan, s.language, h.name AS homeworld, s.name` +
  ` FROM "public"."species" s` +
  ` LEFT OUTER JOIN planets h ON s.homeworld_id=h._id` +
  ` WHERE s._id=${id};`
  db.query(species)
  .then(response => {
    res.locals.species = response;
    console.log('starWarsController line 35');
    next();
  })
  .catch(e => {
    console.log('starWarsController line 39')
    console.error(e.stack);
    next(e);
  })
}

starWarsController.getHomeworld = (req, res, next) => {
  // write code here
  const id = req.query.id;
  const homeworld = `SELECT *` +
  ` FROM "public"."planets" h` +
  ` WHERE h._id=${id};`
  db.query(homeworld)
  .then(response => {
    res.locals.homeworld = response;
    //console.log(response);
    next();
  })
  .catch(e => {
    console.error(e.stack);
    next(e);
  })
}

starWarsController.getFilm = (req, res, next) => {
  // write code here
  
  next();
}

starWarsController.addCharacter = (req, res, next) => {
  // write code here
  console.log(req.body)
  const c = req.body;
  const addChar = {
    name: 'newChar',
    text: `INSERT INTO people (name, gender, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`,
    values: [c.name, c.gender, c.species_id, c.birth_year, c.eye_color, c.skin_color, c.hair_color, c.mass, c.height, c.homeworld_id],
  }
  db.query(addChar.text, addChar.values)
  .then( () => next())
  .catch(e => {
    console.log('starWarsController line 81')
    console.error(e.stack);
    next(e);
  })
}

module.exports = starWarsController;
*/