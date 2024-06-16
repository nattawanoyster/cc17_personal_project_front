// SpotifyEmbed.jsx
import React, { useState } from "react";
import axios from "axios";

const SpotifyEmbed = ({ songLink, songId, userId }) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = async () => {
    try {
      await axios.post(`http://localhost:8888/api/users/${userId}/favorites`, {
        songId,
      });
      setFavorite(true);
    } catch (error) {
      console.error("Error adding favorite song:", error);
    }
  };

  return (
    <div className="my-4">
      <iframe
        className="rounded-md mb-4"
        src={songLink}
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <button
        onClick={handleFavorite}
        className={`py-2 px-4 rounded-md ${
          favorite ? "bg-red-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {favorite ? "❤️ Favorited" : "♡ Add to Favorites"}
      </button>
    </div>
  );
};

export default SpotifyEmbed;
