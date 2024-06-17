import React, { useState } from "react";
import NavBar from "../authentication/components/Navbar";
import useAuth from "../../hooks/useAuth";
import Avatar from "../../components/Avatar";

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
        <div className="flex justify-center items-center">
          <button
            onClick={handleFavorite}
            className={`py-2 px-4  rounded-md ${
              favorite ? "bg-pink-300 text-white" : "bg-gray-200 text-black"
            }`}
          >
            {favorite ? " 💔 Removed" : "💖 Remove from Favorite 💖"}
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfileContainer = () => {
  const { authUser } = useAuth();

  // const userId = 1;
  const songLink =
    "https://open.spotify.com/embed/album/3gHhPm8z8tid1kvpniUKuK?utm_source=generator";

  const songLinks =
    "https://open.spotify.com/embed/album/0OkJThJls8FO1lutMzMDJ0?utm_source=generator";

  return (
    <div className="min-h-screen bg-gradient-to-r from-neutral-400 via-neutral-500 to-neutral-700">
      <NavBar />
      <div className="flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4"> My Profile </h1>
            <Avatar size={12} src={authUser?.profileImage} />
            <h1 className="text-2xl font-semibold mb-4">
              {" "}
              {authUser?.username}
            </h1>
          </div>
          <div className="mb-6 mt-4">
            <h2 className="text-xl font-semibold">Favorite Songs</h2>
            <SpotifyEmbed songLink={songLink} />
            <SpotifyEmbed songLink={songLink} />
            <SpotifyEmbed songLink={songLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
