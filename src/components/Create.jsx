import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { recipecontext } from "../contexts/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [recipes, setRecipes] = useContext(recipecontext);
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const newRecipe = {
      id: nanoid(),
      image,
      title,
      description,
      ingredients,
      instructions,
    };

    setRecipes([...recipes, newRecipe]);
    localStorage.setItem("recipes", JSON.stringify([...recipes, newRecipe]));
    toast.success("Recipe Create Successfully");

    navigate("/recipes");
  };
  console.log(recipes);

  return (
    <form onSubmit={submitHandler} className="w-[70%] m-auto pb-5">
      <h1 className="text-7xl font-extrabold text-green-600 mt-5 mb-[5%]">
        Create <br /> New Recipe
      </h1>
      <input
        onChange={(e) => setImage(e.target.value)}
        value={image}
        type="url"
        placeholder="Recipe Image URL"
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
      />
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Recipe Name"
        className="w-full border rounded-md px-6 py-3 text-lg mb-5"
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-full resize-none border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="recipe description..."
      ></textarea>
      <textarea
        onChange={(e) => setIngredients(e.target.value)}
        value={ingredients}
        className="w-full resize-none border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="recipe ingredients -> 'use comma to seprate ingredients'"
      ></textarea>
      <textarea
        onChange={(e) => setInstructions(e.target.value)}
        value={instructions}
        className="w-full resize-none border rounded-md px-6 py-3 text-lg mb-5"
        placeholder="recipe instructions -> 'use comma to seprate instructions'"
      ></textarea>
      <div className="w-full text-right">
        <button className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-xl text-white">
          Publish Recipe &nbsp; &#8594;
        </button>
      </div>
    </form>
  );
};

export default Create;
