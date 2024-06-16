import React, { useState, useEffect } from "react";
import authApi from "../config/axios";

function UserProfile() {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user's favorite songs
    authApi
      .getAuthUser()
      .then((response) => {
        const userId = response.data.userId; // Assuming userId is retrieved from authApi.getAuthUser()

        authApi
          .get(`/auth/favorites/${userId}`)
          .then((favoritesResponse) => {
            console.log("Fetched favorites:", favoritesResponse.data);
            setFavorites(favoritesResponse.data); // Assuming favoritesResponse.data is an array of favorite songs
          })
          .catch((favoritesError) => {
            console.error("Error fetching favorites:", favoritesError);
            setError("Failed to fetch favorite songs. Please try again later.");
          });
      })
      .catch((authError) => {
        console.error("Error fetching auth user:", authError);
        setError("Failed to fetch user information. Please try again later.");
      });
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Favorite Songs</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((song) => (
          <div key={song.songId} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{song.title}</h3>
            <p className="text-gray-600 mb-2">
              {song.artist} - {song.album}
            </p>
            {/* Optionally display cover image */}
            {song.coverImageUrl && (
              <img
                src={song.coverImageUrl}
                alt={`Cover for ${song.title}`}
                className="rounded-md mb-4"
                style={{ width: "100%", height: "auto" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
