import React from "react";

const rtovButton = () => {
  const handleClick = () => {
    window.open(
      "https://www.allticket.com/event/RedVelvet_RtoV_inBKK",
      "_blank"
    );
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleClick}
        className="bg-red-800 hover:bg-red-700 shadow-black text-white font-bold py-4 px-6 mt-4 rounded-lg focus:outline-none focus:shadow-outline"
      >
        Click here for more details
      </button>
    </div>
  );
};

export default rtovButton;
