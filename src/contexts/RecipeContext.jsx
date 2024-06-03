import { createContext, useEffect, useState } from "react";

export const recipecontext = createContext();

const RecipeContext = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(JSON.parse(localStorage.getItem("recipes")) || []);
  }, []);

  return (
    <recipecontext.Provider value={[recipes, setRecipes]}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
