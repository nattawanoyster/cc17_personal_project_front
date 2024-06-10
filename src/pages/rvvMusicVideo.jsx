import React from "react";
import { useNavigate } from "react-router-dom";

const rvvMusicVideo = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home-redvelvet");
  };

  return (
    <div className="relative w-full h-screen bg-gray-100">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/xlyrt5eAtKI?autoplay=1&mute=0&controls=1&loop=1&disablekb=1si=lBb_nU_hQzWod0zU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <button
        onClick={handleButtonClick}
        className="absolute bottom-4 right-4 mb-4 bg-red-900 hover:bg-red-950 text-white font-semibold py-2 px-4 rounded-lg"
      >
        Continue to website
      </button>
    </div>
  );
};

export default rvvMusicVideo;
