export {} from "../reducers/recipeSlice";

import { toast } from "react-toastify";
import { load } from "../reducers/recipeSlice";

export const asyncload = () => async (dispatch, getState) => {
  try {
    setTimeout(() => {
      dispatch(load(JSON.parse(localStorage.getItem("recipes"))));
    }, 1000);
  } catch (error) {
    toast.error(error);
  }
};

export const asyncadd = (recipe) => async (dispatch, getState) => {
  try {
    // console.log(getState().recipeReducer);
    const { recipes } = getState().recipeReducer;
    localStorage.setItem("recipes", JSON.stringify([...recipes, recipe]));

    dispatch(asyncload());
  } catch (error) {
    toast.error(error);
  }
};

export const asyncdelete = (id) => async (dispatch, getState) => {
  try {
    const { recipes } = getState().recipeReducer;
    localStorage.setItem(
      "recipes",
      JSON.stringify(recipes && recipes.filter((r) => r.id !== id))
    );

    dispatch(asyncload());
  } catch (error) {
    toast.error(error);
  }
};

export const asyncupdate = (updatedRecipe) => async (dispatch, getState) => {
  try {
    const { recipes } = getState().recipeReducer;
    const copyRecipes = [...recipes];
    const index = copyRecipes.findIndex((r) => r.id === updatedRecipe.id);
    copyRecipes[index] = updatedRecipe;

    localStorage.setItem("recipes", JSON.stringify(copyRecipes));

    dispatch(asyncload());
  } catch (error) {
    toast.error(error);
  }
};
