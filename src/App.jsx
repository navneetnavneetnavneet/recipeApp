import React, { useEffect } from "react";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";
import { useDispatch } from "react-redux";
import { asyncload } from "./store/actions/recipeActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncload());
  }, []);

  return (
    <div className="w-[80%] mx-auto">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
