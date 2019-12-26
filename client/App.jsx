import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // state here
      recipes: [],
      recipe_selected: false,
      current_recipe: {}
    };
    this.renderRecipes = this.renderRecipes.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  // make a GET request to API for all recipes
  componentDidMount() {
    fetch("/all")
      .then(res => res.json())
      .then(recipes => {
        if (!Array.isArray(recipes)) recipes = [];
        return this.setState({
          recipes: recipes
        });
      });
  }

  handleClick(recipe) {
    this.setState({
      recipe_selected: true,
      current_recipe: recipe
    });
  }

  goBack() {
    this.setState({
      recipe_selected: false
    });
  }

  //use arrow funtions for methods so you dont need to bind
  //access image url and then create an html image tag
  //display name of food only when toggled over
  renderRecipes(recipesArray) {
    return recipesArray.map(recipe => {
      return (
        <div
          className={"img__wrap"}
          onClick={() => {
            this.handleClick(recipe);
          }}
        >
          <img
            className={"picture"}
            src={recipe.imageUrl}
            onClick={() => {
              this.handleClick(recipe);
            }}
          />{" "}
          <div class={"overlay"}>
            <div className={"img__description"}>{recipe.name}</div>
          </div>{" "}
        </div>
      );
    });
  }

  render() {
    const example_response = [
      {
        id: 1,
        name: "Cap'n Crunch Chicken",
        imageUrl:
          "https://thepioneerwoman.com/wp-content/uploads/2016/04/dsc_4339.jpg?resize=780%2C521",
        ingredients: "chicken, flour, egg",
        instructions: `1. Coarsely grind or crush the two cereals and set aside.
        2. Beat the egg with milk and set aside.
        3. Stir together the flour, onion and garlic powders and black pepper. Set aside
        4. Dip the chicken: pieces in the seasoned flour. Move around to coat well, then shake off the excess flour.
        5. Dip in the egg wash, coating well, then dip in the cereal mixture, coating well.
        6. Heat oil in a large heavy skillet to 325.
        7. Drop coated chicken tenders carefully in the hot oil and cook until golden brown and fully cooked, 3 to 5 minutes depending on size.
        8. Drain and serve immediately with creole mustard sauce.
        `
      },
      {
        id: 2,
        name: "Curry Bear",
        imageUrl: "./client/assets/images/currybear.png",
        ingredients: "chicken, flour, egg",
        instructions: `Step 1
        Bring rice and water to a boil in a pot. Reduce heat to low, cover, and simmer 25 minutes.
        
        Step 2
        In a bowl, whisk together curry paste and 1 can coconut milk. Transfer to a wok, and mix in remaining coconut milk, chicken, fish sauce, sugar, and bamboo shoots. Bring to a boil, and cook 15 minutes, until chicken juices run clear.
        
        Step 3
        Mix the red bell pepper, green bell pepper, and onion into the wok. Continue cooking 10 minutes, until chicken juices run clear and peppers are tender. Remove from heat, and stir in pineapple. Serve over the cooked rice`
      },
      {
        id: 3,
        name: "Cake",
        ingredients: "flour, egg",
        imageUrl: "./client/assets/images/cake.png",
        instructions: "First do this, then do that"
      },
      {
        id: 4,
        name: "Hotpot",
        imageUrl: "./client/assets/images/hotpot.png",
        ingredients: "beef, soup, noodles, egg",
        instructions: "First do this, then do that"
      },
      {
        id: 5,
        name: "Shrimp Po Boy",
        imageUrl: "./client/assets/images/shrimppoboy.png",
        ingredients: "shrimp, avocado, bread, argula",
        instructions: "First do this, then do that"
      },
      {
        id: 6,
        name: "Waffles",
        imageUrl: "./client/assets/images/waffles.png",
        ingredients:
          "egg, milk, flour, sugar, baking powder, baking soda, salt",
        instructions:
          "1. Separate the egg. 2. Mix dry ingredients and wet ingredients separately. 3. Mix the dry in the wet slowly. 4. Whip the egg whites till it has soft peaks. 5. Fold the egg whites in the batter until barely mixed in. DO NOT OVERMIX. 6. Cook in waffle iron at level 4-5 for 3-4 minutes."
      }
    ];

    return (
      <div className={"outerContainer"}>
        {this.state.recipe_selected ? (
          <div>
            <img
              className={"mainPic"}
              src={this.state.current_recipe.imageUrl}
            />
            <p className={"recipeName"}>{this.state.current_recipe.name}</p>
            <p> {this.state.current_recipe.ingredients} </p>
            <p className={"instructions"}>
              {this.state.current_recipe.instructions}
            </p>
            <button onClick={this.goBack} className={"button"}>
              {" "}
              Return{" "}
            </button>
          </div>
        ) : (
          this.renderRecipes(example_response)
        )}
      </div>
    );
  }
}

export default App;
