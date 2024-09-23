import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-300 w-screen px-10 py-5 sticky top-0 z-50">
      <Link to={"/"}>
        <h1 className="font-semibold text-2xl hover:text-blue-600 text-white">
          TigRest
        </h1>
      </Link>
    </div>
  );
};

export default Navbar;
