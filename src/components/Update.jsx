import React, { useContext, useState } from "react";
import { recipecontext } from "../contexts/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipes, setRecipes] = useContext(recipecontext);

  const recipe = recipes && recipes.find((r) => r.id == id);

  const [image, setImage] = useState(recipe.image);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [instructions, setInstructions] = useState(recipe.instructions);

  const UpdateHandler = (event) => {
    event.preventDefault();

    const updatedRecipe = {
      image,
      title,
      description,
      ingredients,
      instructions,
    };
    // console.log(updatedRecipe);
    const copyRecipes = [...recipes];
    const index = copyRecipes.findIndex((r) => r.id == id);
    copyRecipes[index] = updatedRecipe;
    setRecipes(copyRecipes);
    toast.success("Recipe Update Successfully");
    navigate("/recipes");
  };

  return (
    <form onSubmit={UpdateHandler} className="w-[80%] mx-auto py-10">
      <h1 className="text-7xl font-extrabold text-green-600 mb-10">
        Update Recipe
      </h1>
      <input
        onChange={(e) => setImage(e.target.value)}
        value={image}
        type="text"
        placeholder="Recipe Image URL"
        className="w-full px-6 py-3 rounded-md border text-xl mb-5"
      />
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Recipe Name"
        className="w-full px-6 py-3 rounded-md border text-xl mb-5"
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="recipe description..."
        className="w-full resize-none px-6 py-3 rounded-md border text-xl mb-5"
      ></textarea>
      <textarea
        onChange={(e) => setIngredients(e.target.value)}
        value={ingredients}
        placeholder='recipe ingredients -> "use comma to seprate ingredients"'
        className="w-full resize-none px-6 py-3 rounded-md border text-xl mb-5"
      ></textarea>
      <textarea
        onChange={(e) => setInstructions(e.target.value)}
        value={instructions}
        placeholder='recipe instructions -> "use comma to seprate instructions"'
        className="w-full resize-none px-6 py-3 rounded-md border text-xl mb-5"
      ></textarea>
      <div className="w-fiull text-right">
        <button className="px-4 py-2 rounded-md bg-orange-600 hover:bg-orange-700 text-xl text-white">
          Re-Published Recipe &nbsp; &#8594;
        </button>
      </div>
    </form>
  );
};

export default Update;
