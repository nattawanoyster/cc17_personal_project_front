// src/components/NavBar.js

import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch">
            <div className="flex-shrink-0">
              <h1 className="text-white text-xl font-bold">My Website</h1>
            </div>

            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="#music-player"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Music Player
                </a>
                <a
                  href="#product"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Product
                </a>
                <a
                  href="#biography"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Biography
                </a>
                <a
                  href="#concert"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Concert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
