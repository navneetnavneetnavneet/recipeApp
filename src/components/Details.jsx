import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../contexts/RecipeContext";
import { toast } from "react-toastify";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [recipes, setRecipes] = useContext(recipecontext);

  const recipe = recipes && recipes.find((r) => r.id == id);

  const DeleteHandler = () => {
    setRecipes(recipes.filter((r) => r.id != id));
    toast.success("Recipe Delete Successfully");
    navigate("/recipes");
  };

  return recipe ? (
    <div className="w-[80%] m-auto p-5">
      <Link to="/recipes" className="text-3xl ri-arrow-left-line"></Link>
      <div className="details w-full min-h-[75vh] mt-3 flex">
        <div className="dets w-[50%] p-[3%] shadow">
          <img className="" src={recipe.image} alt="" />
          <h1 className="text-center text-xl mt-[10%] mb-5">{recipe.title}</h1>
          <p className="text-zinc-400">{recipe.description}</p>
          <div className="w-full flex justify-between py-10 px-5">
            <Link
              to={`/update-recipe/${id}`}
              className="text-blue-400 border-blue-400 border py-2 px-5"
            >
              Update
            </Link>
            <button
              onClick={DeleteHandler}
              className="text-red-400 border-red-400 border py-2 px-5"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="desc w-[50%] px-[5%] py-[3%]">
          <h1 className="text-3xl text-green-700 border-b border-green-600">
            Ingredients
          </h1>
          <ul className="text-zinc-400 list-disc p-3">
            {recipe.ingredients.split(",").map((d, i) => (
              <li className="list-item text-sm mb-2" key={i}>
                {d}
              </li>
            ))}
          </ul>
          <h1 className="text-3xl text-green-700 border-b border-green-600">
            Instructions
          </h1>
          <ul className="text-zinc-400 list-decimal p-3">
            {recipe.instructions.split(".").map((d, i) => (
              <li className="list-item text-sm  mb-2" key={i}>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <h1 className="w-full text-center text-4xl text-green-600 mt-10">
      Loading Recipe...
    </h1>
  );
};

export default Details;
