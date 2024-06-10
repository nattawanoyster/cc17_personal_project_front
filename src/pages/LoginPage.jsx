import React from "react";
// import rvvPsychoWallpaper from "../assets/Red-Velvet-The-ReVe-Festival-Finale-red-velvet-43161261-1200-800.png";

export default function LoginPage() {
  return (
    <div
      className="relative h-screen w-screen overflow-hidden brightness-75 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/RedvelvetBG.png')" }}
    >
      <div className="bg-black bg-opacity-40 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl mb-4 text-white">Login</h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
