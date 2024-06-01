import React, { useState } from "react";

const Update = () => {
  const { recipes } = [
    {
      id: "mAi6vrfNOmNe1LdgZ_MTd",
      title: "Italian Wedding Soup ",
      image:
        "https://png.pngtree.com/png-clipart/20231127/original/pngtree-high-angle-view-of-italian-wedding-soup-in-a-bowl-on-png-image_13728005.png",
      description:
        "The BEST Italian Wedding Soup! A delicious and hearty soup made with bite size herbed beef and pork meatballs, veggies and acini de pepe",
      ingredients:
        "1/2 lb Ground beef|1/2 lb Ground veal|1/4 c Italian seasoned bread crumb|1 Egg|1 tb Parsley|Salt and pepper to taste|4 c Chicken broth|2 c Spinach leaves cut into piec|1/4 c Grated Pecorino Romano chees",
      instructions:
        "Combine the ground meat, bread crumbs, egg, parsley, salt and pepper in a bowl. Mix well and form into tiny meat balls. Bake on a cookie sheet for 30 minutes at 350F. Meanwhile, bring broth to a boil and add spinach. Cover and boil for 5 minutes. Add the meatballs to the hot broth, bring to a simmer. Stir in the cheese and serve immediately. Rita in Scottsdale 01/02/92 01:41 am",
    },
  ];

  const recipe = recipes && recipes.find((r) => r.id === useParams.id)

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
    console.log(updatedRecipe);
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
