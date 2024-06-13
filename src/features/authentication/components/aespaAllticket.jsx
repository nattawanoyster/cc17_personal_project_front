import React from "react";

const hyperlineButton = () => {
  const handleClick = () => {
    window.open(
      "https://www.allticket.com/event/aespa_SYNK_HYPERLINEinBKK",
      "_blank"
    );
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleClick}
        className="bg-violet-400 hover:bg-violet-500 shadow-black text-white font-bold py-4 px-6 mt-4 rounded-lg focus:outline-none focus:shadow-outline"
      >
        Click here for more details
      </button>
    </div>
  );
};

export default hyperlineButton;
