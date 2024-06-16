import React, { useState } from "react";
import NavBar from "../authentication/components/Navbar";
import useAuth from "../../hooks/useAuth";

const SpotifyEmbed = ({ songLink }) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div>
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
    </div>
  );
};

const ProfileContainer = () => {
  const { authUser } = useAuth();

  const userId = 1; // Hardcoded user ID for demonstration
  const songLink =
    "https://open.spotify.com/embed/album/3gHhPm8z8tid1kvpniUKuK?utm_source=generator"; // Hardcoded song link for demonstration

  return (
    <div className="min-h-screen bg-gradient-to-r from-neutral-400 via-neutral-500 to-neutral-700">
      <NavBar />
      <div className="flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
          <h1 className="text-3xl font-bold mb-4">
            {" "}
            Profile : {authUser?.username}
          </h1>
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Favorite Song</h2>
            <SpotifyEmbed songLink={songLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
