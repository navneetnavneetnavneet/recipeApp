import { nanoid } from "nanoid";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncadd } from "../store/actions/recipeActions";

const Create = () => {
  const dispatch = useDispatch();
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

    if (
      image.trim() == "" ||
      title.trim() == "" ||
      description.trim() == "" ||
      ingredients.trim() == "" ||
      instructions.trim() == ""
    ) {
      toast.warning("All fileds required !");
      return;
    }

    dispatch(asyncadd(newRecipe));
    toast.success("Recipe Create Successfully");

    navigate("/recipes");
  };

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

/*
// recipe details

{
  id: "mAi6vrfNOmNe1LdgZ_MTd",
  title: "Italian Wedding Soup",
  image:
    "https://png.pngtree.com/png-clipart/20231127/original/pngtree-high-angle-view-of-italian-wedding-soup-in-a-bowl-on-png-image_13728005.png",
  description:
    "The BEST Italian Wedding Soup! A delicious and hearty soup made with bite size herbed beef and pork meatballs, veggies and acini de pepe",
  ingredients:
    "1/2 lb Ground beef,1/2 lb Ground veal,1/4 c Italian seasoned bread crumb,1 Egg,1 tb Parsley,Salt and pepper to taste,4 c Chicken broth,2 c Spinach leaves cut into piec,1/4 c Grated Pecorino Romano chees",
  instructions:
    "Combine the ground meat, bread crumbs, egg, parsley, salt and pepper in a bowl. Mix well and form into tiny meat balls. Bake on a cookie sheet for 30 minutes at 350F. Meanwhile, bring broth to a boil and add spinach. Cover and boil for 5 minutes. Add the meatballs to the hot broth, bring to a simmer. Stir in the cheese and serve immediately. Rita in Scottsdale 01/02/92 01:41 am",
}

*/
