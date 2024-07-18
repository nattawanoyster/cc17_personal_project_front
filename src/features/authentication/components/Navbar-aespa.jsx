import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../../../layout/Dropdown";

export default function NavBarAespa() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch">
            <div className="flex-shrink-0 mt-2">
              <Link
                to="/chooseyourpath"
                className="text-white text-xl font-bold"
              >
                SUPERNOVA👽
              </Link>
            </div>

            <div className="hidden sm:block sm:ml-6 mt-2">
              <div className="flex space-x-4">
                <Link
                  to="/home-aespa"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/product-aespa"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Product
                </Link>

                <Link
                  to="/biography-aespa"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Biography
                </Link>

                <Link
                  to="/concert-aespa"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Concert
                </Link>
                <Link
                  to="/FanQuiz"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Quiz
                </Link>
                <a
                  href="#song-list"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Songs
                </a>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 mt-1.5 text-center">
                <div className="flex justify-end items-end">
                  {" "}
                  <Dropdown />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
