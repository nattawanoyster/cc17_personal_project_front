// YouTubeEmbed.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function rvvMusicVideo() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home"); // Change '/next-page' to your target route
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl aspect-w-16 aspect-h-9 mb-4">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/xlyrt5eAtKI?autoplay=1&controls=0&loop=1&disablekb=1si=lBb_nU_hQzWod0zU" // Replace VIDEO_ID with the actual YouTube video ID
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button
        onClick={handleButtonClick}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Next Page
      </button>
    </div>
  );
}
