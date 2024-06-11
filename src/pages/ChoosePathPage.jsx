import React from "react";
import rvvLogo from "../assets/rvv-logo.jpg";
import aespaLogo from "../assets/aespa-logo.jpg";
import lucidDreamSound from "../assets/aespa - Lucid Dream.mp3";

const chooseYourPath = () => {
  const handleImageClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-blue-950 p-3">
        <div className="text-3xl font-medium text-white ">Choose You Path </div>
      </div>

      <div className="flex flex-col h-screen">
        <img
          src={rvvLogo}
          alt="Image 1"
          className="cursor-pointer h-1/2 w-full object-cover"
          onClick={() => handleImageClick("/chillkill")}
        />
        <img
          src={aespaLogo}
          alt="Image 2"
          className="cursor-pointer h-1/2 w-full object-cover"
          onClick={() => handleImageClick("/armageddon")}
        />
      </div>

      {/* <div>
        <audio autoPlay loop controls>
          <source src={lucidDreamSound} type="audio/mpeg" />
        </audio>
      </div> */}
    </div>
  );
};

export default chooseYourPath;
