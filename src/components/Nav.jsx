import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full h-[10vh] flex items-center justify-between">
      <img
        className="h-full"
        src="https://static.vecteezy.com/system/resources/thumbnails/008/212/813/small/cooking-logo-design-vector.jpg"
        alt=""
      />
      <div className="flex gap-x-10">
        <NavLink
          className={(e) =>
            e.isActive ? "text-green-600 duration-300" : ""
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive ? "text-green-600 duration-300" : ""
          }
          to="/recipes"
        >
          Recipes
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive ? "text-green-600 duration-300" : ""
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive ? "text-green-600 duration-300" : ""
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <i className="text-3xl ri-grid-fill text-green-600"></i>
    </div>
  );
};

export default Nav;
