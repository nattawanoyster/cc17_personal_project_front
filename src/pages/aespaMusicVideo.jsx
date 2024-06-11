import React from "react";
import { useNavigate } from "react-router-dom";

const aespaMusicVideo = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home-aespa");
  };

  return (
    <div className="relative w-full h-screen bg-gray-100">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/nFYwcndNuOY?autoplay=1&mute=0&controls=1&loop=1&si=jraoT157UyZsqS9r"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <button
        onClick={handleButtonClick}
        className="absolute bottom-4 right-4 mb-4 bg-blue-900 hover:bg-blue-950 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Continue to website
      </button>
    </div>
  );
};

export default aespaMusicVideo;
