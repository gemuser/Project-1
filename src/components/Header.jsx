import React from "react";
import nbkLogo from "../imgs/logo.jpeg"; // Update the path as needed
import Navbar from "./Navbar"; // Ensure Navbar is in the same folder or update the path

const Header = () => {
  return (
    <>
      <header className="bg-blue-900 text-white flex flex-col md:flex-row justify-between items-center p-4 gap-4">
        <div className="flex items-center space-x-4">
          <img src={nbkLogo} alt="NBK Logo" className="w-16 h-16" />
          <div className="font-bold text-lg">NBK Polytechnic Institute</div>
        </div>
        <div className="text-white font-semibold text-center text-lg md:text-xl flex-1">
          आत्मनिर्भरताको लागि प्राविधिक शिक्षा
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            id="Search"
            placeholder="Search"
            className="p-2 border border-gray-300 rounded-md w-48 text-center bg-white text-black font-semibold"
          />
          <button
            id="search-button"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Search
          </button>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
