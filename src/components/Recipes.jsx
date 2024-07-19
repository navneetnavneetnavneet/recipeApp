import { useLocation } from "react-router-dom";
import Card from "./Card";
import { useSelector } from "react-redux";

const Recipes = () => {
  const { pathname } = useLocation();

  const { recipes } = useSelector((state) => state.recipeReducer);
  
  return recipes && (
    <div>
      <h1 className="text-2xl font-semibold text-center">OUR RECIPES</h1>
      <p className="text-zinc-400 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aperiam?
      </p>

      <div className="recipe-cards mt-[5%] flex flex-wrap pt-5">
        {recipes.length > 0 ? (
          recipes.map((r) => <Card key={r.id} recipe={r} />)
        ) : (
          <h1 className="w-full text-center text-3xl font-extrabold text-green-600">
            No Recipe Found
          </h1>
        )}
      </div>

      {pathname == "/recipes" && (
        <a
          href="/create-recipe"
          className="cursor-pointer rounded-md absolute top-[15%] py-2 px-5 left-[10%]  bg-green-200 gap-x-3 flex items-center"
        >
          <i className="text-3xl text-green-600 ri-add-box-line"></i>
          Create Recipe
        </a>
      )}
    </div>
  );
};

export default Recipes;
