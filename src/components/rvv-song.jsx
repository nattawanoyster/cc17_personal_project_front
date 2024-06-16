import NavBar from "../features/authentication/components/Navbar";
import authApi from "../api/auth-api";
import { useState, useEffect } from "react";
import rvvCosmicPic from "../assets/rvv5.png";

function rvvSong() {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch songs from backend API
    authApi
      .getSong()
      .then((response) => {
        setSongs(response.data.data); // Assuming your API response structure is { data: [] }
      })
      .catch((error) => {
        console.error("Error fetching songs:", error);
        setError("Failed to fetch songs. Please try again later.");
      });

    authApi
      .getAuthUser()
      .then((response) => {
        console.log("Fetched user info:", response.data);
        setUserId(response.data.userId); // Assuming userId is returned in response
      })
      .catch((error) => {
        console.error("Error fetching user info:", error);
        // Handle error fetching user info
      });
  }, []);

  return (
    <div>
      <div className="container mx-auto mt-8">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold mb-4">
            {" "}
            Let's Discover Your Favorite Songs
          </h1>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {songs.map((song) => (
            <div key={song.songId} className="relative">
              <div className="p-4 bg-gradient-to-bl from-orange-50 via-indigo-100 to-indigo-200 rounded-lg shadow-md">
                {/* {song.coverImageUrl && (
                  <img
                    src={song.coverImageUrl}
                    alt={`Cover for ${song.title}`}
                    className="rounded-md mb-4"
                  />
                )} */}
                <h3 className="text-lg font-semibold mb-2">{song.title}</h3>
                <p className="text-gray-600 mb-2">
                  {song.artist} - {song.album}
                </p>
              </div>
              {/* Spotify Embed */}
              <div className="p-4 mt-4 bg-gradient-to-bl from-slate-200 via-gray-400 to-gray-600 rounded-lg shadow-md">
                <iframe
                  className="w-full h-48 md:h-32 lg:h-48 mt-6"
                  src={`https://open.spotify.com/embed/track/${song.spotifyId}`}
                  allow="encrypted-media"
                ></iframe>
              </div>
              {/* Favorite Button */}
              <div className="p-4 mt-4 bg-white rounded-lg shadow-md text-center">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                  onClick={() => addToFavorites(song.songId)}
                >
                  ❤️ Add to Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default rvvSong;
