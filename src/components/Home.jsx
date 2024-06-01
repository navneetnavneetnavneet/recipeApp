import React from "react";

const Home = () => {
  return (
    <div className="w-full h-[60vh] flex items-center justify-between">
      <div className="left w-1/2">
        <h1 className="text-7xl font-extrabold text-green-600">
          SIMPLE AND TASTY RECIPES
        </h1>
        <p className="w-[90%] mt-5 mb-10 text-zinc-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eos
          maiores harum doloribus, praesentium alias qui esse id atque sapiente
          similique quis, velit fugit, nemo unde consectetur voluptatem sequi
          repellat.
        </p>
        <button className="px-5 py-2 text-md text-white bg-green-600 hover:bg-green-700">
          Get Started &nbsp; &#8594;
        </button>
      </div>
      <div className="right w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Clipart.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
