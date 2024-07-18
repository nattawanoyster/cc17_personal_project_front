import { useState, useEffect, useContext } from "react";
import authApi from "../api/auth-api"; // Assuming this is set up to make API requests
import { AuthContext } from "../context/AuthContext";

function SongList() {
  const [songs, setSongs] = useState([]);
  const [favorites, setFavorites] = useState({});
  const { authUser } = useContext(AuthContext); // Get the authenticated user from context

  useEffect(() => {
    // Fetch songs
    authApi
      .getSong()
      .then((response) => {
        setSongs(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching songs:", error);
      });

    if (authUser) {
      // Fetch user's favorite songs
      authApi
        .getFavoriteSongs(authUser.userId)
        .then((response) => {
          const favoriteSongIds = response.data.reduce((acc, favorite) => {
            acc[favorite.songId] = favorite.favoriteSongID;
            return acc;
          }, {});
          setFavorites(favoriteSongIds);
        })
        .catch((error) => {
          console.error("Error fetching favorite songs:", error);
        });
    }
  }, [authUser]);

  const handleFavoriteToggle = (songId) => {
    if (!authUser) {
      console.error("User is not authenticated");
      return;
    }

    if (favorites[songId]) {
      // Remove from favorites
      const favoriteSongID = favorites[songId];
      authApi
        .removeFromFavorites(favoriteSongID)
        .then(() => {
          setFavorites((prevFavorites) => {
            const newFavorites = { ...prevFavorites };
            delete newFavorites[songId];
            return newFavorites;
          });
        })
        .catch((error) => {
          console.error("Error removing from favorites:", error);
        });
    } else {
      // Add to favorites
      authApi
        .addToFavorites(songId)
        .then((response) => {
          setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [songId]: response.data.favoriteSongID,
          }));
        })
        .catch((error) => {
          console.error("Error adding to favorites:", error);
        });
    }
  };

  return (
    <div>
      <div className="container mx-auto mt-8">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold mb-4">
            Let's Discover Your Favorite Songs
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {songs.map((song) => (
            <div key={song.songId} className="relative">
              <div className="p-4 bg-gradient-to-bl from-orange-50 via-indigo-100 to-indigo-200 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{song.title}</h3>
                <p className="text-gray-600 mb-2">
                  {song.artist} - {song.album}
                </p>
              </div>
              <div className="p-4 mt-4 bg-gradient-to-bl from-slate-200 via-gray-400 to-gray-600 rounded-lg shadow-md">
                <iframe
                  className="w-full h-48 md:h-32 lg:h-48 mt-6"
                  src={`https://open.spotify.com/embed/track/${song.spotifyId}`}
                  allow="encrypted-media"
                ></iframe>
              </div>
              <div className="p-4 mt-4 bg-white rounded-lg shadow-md text-center">
                <button
                  onClick={() => handleFavoriteToggle(song.songId)}
                  className={`py-2 px-4 rounded-md ${
                    favorites[song.songId]
                      ? "bg-gradient-to-r from-indigo-400 to-cyan-400 text-white transition-transform transform hover:scale-105"
                      : "bg-gradient-to-r from-slate-500 to-slate-800 text-white transition-transform transform hover:scale-105"
                  }`}
                >
                  {favorites[song.songId]
                    ? "❤️ Favorited"
                    : "♡ Add to Favorites"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SongList;
