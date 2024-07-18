import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../authentication/components/Navbar";
import useAuth from "../../hooks/useAuth";
import Avatar from "../../components/Avatar";
import authApi from "../../api/auth-api"; // Import the authApi for fetching data

const SpotifyEmbed = ({ songLink, onRemove, favoriteSongID }) => {
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
      <div className="flex justify-center items-center">
        <button
          onClick={() => onRemove(favoriteSongID)}
          className="py-2 px-4 bg-gradient-to-r from-rose-400 to-red-500 text-white rounded-md transition-transform transform hover:scale-105 hover:animate-pulse shadow-xl"
        >
          💔 Remove from Favorite 💔
        </button>
      </div>
    </div>
  );
};

const ProfileContainer = () => {
  const { authUser } = useAuth();
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      authApi
        .getFavoriteSongs(authUser.userId)
        .then((response) => {
          setFavoriteSongs(response.data);
        })
        .catch((error) => {
          console.error("Error fetching favorite songs:", error);
          setError("Failed to fetch favorite songs. Please try again later.");
        });
    }
  }, [authUser]);

  const handleRemoveFavorite = (favoriteSongID) => {
    authApi
      .removeFromFavorites(favoriteSongID)
      .then(() => {
        setFavoriteSongs((prevSongs) =>
          prevSongs.filter((song) => song.favoriteSongID !== favoriteSongID)
        );
      })
      .catch((error) => {
        console.error("Error removing favorite song:", error);
        setError("Failed to remove favorite song. Please try again later.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-neutral-400 via-neutral-500 to-neutral-700">
      <NavBar />
      <div className="flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl w-full">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">My Profile</h1>
            <Avatar size={12} src={authUser?.profileImage} />
            <h1 className="text-2xl font-semibold mb-4">
              {authUser?.username}
            </h1>
            <button
              onClick={() => navigate("/edit-profile")}
              className="py-2 px-4 bg-gradient-to-r from-slate-300 to-slate-500 text-white rounded-md mb-4 transition-transform transform hover:scale-105 hover:animate-pulse"
            >
              Edit Profile
            </button>
          </div>
          <div className="mb-6 mt-4">
            <h2 className="text-xl font-semibold">Favorite Songs</h2>
            {error && <p className="text-red-500">{error}</p>}
            {favoriteSongs.length === 0 && <p>No favorite songs found.</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {favoriteSongs.map((favorite) => (
                <SpotifyEmbed
                  key={favorite.favoriteSongID}
                  songLink={`https://open.spotify.com/embed/track/${favorite.favSong.spotifyId}`}
                  favoriteSongID={favorite.favoriteSongID}
                  onRemove={handleRemoveFavorite}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
