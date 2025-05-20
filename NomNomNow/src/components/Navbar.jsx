import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {

  const dispatch = useDispatch() ; 

  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-5">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">NomNom Now</h1>
      </div>
      <div className="relative w-full lg:w-[25vw] cursor-pointer">
        <input
          type="search"
          name="search"
          placeholder="Search here"
          autoComplete="off"
          className="w-full pl-3 pr-10 py-2.5 border border-gray-400 text-sm rounded-lg outline-none"
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        <IoSearchOutline
          size={20}
          className="absolute right-3 top-5.5 -translate-y-1/2 text-gray-500 pointer-events-none"
        />
      </div>
    </nav>
  );
};

export default Navbar;

// 25
