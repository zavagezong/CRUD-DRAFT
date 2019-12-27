// import React, { useState, useEffect } from "react";
// import { Link, withRouter } from "react-router-dom";

// const ingredientsData = require("../data/ingredients.json");
// const instructionsData = require("../data/instructions.json");

// // Custom hook for handling input boxes
// // saves us from creating onChange handlers for them individually
// const useInput = init => {
//   const [value, setValue] = useState(init);
//   const onChange = e => {
//     setValue(e.target.value);
//   };
//   // return the value with the onChange function instead of setValue function
//   return [value, onChange];
// };

// const CreateCharacter = props => {
//   const [name, nameOnChange] = useInput("");
//   const [imgUrl, imgUrlOnChange] = useInput("");
//   const [ingredients, ingredientsOnChange] = useInput("");
//   const [instructions, instructionsOnChange] = useInput("");


// return(
// <header className="pageHeader">
// <h2>Character Creator</h2>
// <Link to="/" className="backLink">
//   <button type="button" className="btnSecondary">
//     Back to all characters
//   </button>
// </Link>
// </header>
//         <h3>Enter your Recipe details</h3>
//         <div className="customRecipeFields">
//           <label htmlFor="name">Name: </label>
//           <input name="name" placeholder="Ramen" value={name} onChange={nameOnChange} />
//           {nameError ? (<span className="errorMsg">{nameError}</span>) : null}
//         </div>
//         <div className="customRecipeFields">
//         <label htmlFor="name">Image URL: </label>
//         <input name="imgUrl" placeholder="./image.png" value={imgUrl} onChange={imgUrlOnChange} />
//       </div>    
//               <div className="customRecipeFields">
//               <label htmlFor="ingredients">Ingredients: </label>
//               <input name="ingredients" placeholder="pork" value={ingredients} onChange={ingredientsOnChange} />
//             </div>    
//                     <div className="customRecipeFields">
//                     <label htmlFor="instructions">Instructions: </label>
//                     <input name="instructions" placeholder="First do this then do that." value={instructions} onChange={instructionsOnChange} />
//                   </div>    
//               <div className="createCharButtonContainer">
//               <Link to="/" className="backLink">
//                 <button type="button" className="cancelBtn">
//                   Cancel
//                 </button>
//               </Link>
//               <button type="button" className="saveBtn" onClick={saveRecipe}>Save</button>
//             </div>
// )
// };
// export default withRouter(CustomRecipe);
