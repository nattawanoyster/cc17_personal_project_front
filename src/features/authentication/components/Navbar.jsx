import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch">
            <div className="flex-shrink-0">
              <h1 className="text-white text-xl font-bold">👽👽👽👽</h1>
            </div>

            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/home-redvelvet"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Music Player
                </Link>
                <Link
                  to="/product-redvelvet"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Product
                </Link>

                <Link
                  to="/biography-redvelvet"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Biography
                </Link>

                <Link
                  to="/concert-redvelvet"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Concert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
