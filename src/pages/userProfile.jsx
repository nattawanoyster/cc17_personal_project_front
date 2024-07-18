import { useState, useEffect, useContext } from "react";
import authApi from "../api/auth-api";
import { AuthContext } from "../context/AuthContext";

function UserProfile() {
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [error, setError] = useState(null);
  const { authUser } = useContext(AuthContext); // Get the authenticated user from context

  useEffect(() => {
    if (authUser) {
      // Fetch favorite songs from backend API
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

  if (!authUser) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Favorite Songs</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favoriteSongs.map((favorite) => (
          <div key={favorite.favoriteSongID} className="relative">
            <div className="p-4 bg-gradient-to-bl from-orange-50 via-indigo-100 to-indigo-200 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                {favorite.favSong.title}
              </h3>
              <p className="text-gray-600 mb-2">
                {favorite.favSong.artist} - {favorite.favSong.album}
              </p>
            </div>
            <div className="p-4 mt-4 bg-gradient-to-bl from-slate-200 via-gray-400 to-gray-600 rounded-lg shadow-md">
              <iframe
                className="w-full h-48 md:h-32 lg:h-48 mt-6"
                src={`https://open.spotify.com/embed/track/${favorite.favSong.spotifyId}`}
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
