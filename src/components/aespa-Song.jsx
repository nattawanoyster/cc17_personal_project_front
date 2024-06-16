import NavBarAespa from "../features/authentication/components/Navbar-aespa";
import aespa4pic from "../assets/aespa4.jpeg";
import { useState, useEffect } from "react";
import authApi from "../api/auth-api";

const aespaSong = () => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  // const { authUser } = useAuth();

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
      <NavBarAespa />
      <img src={aespa4pic} alt="Cover Image" className="w-full " />

      <div className="bg-red-950 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl p-8 bg-white shadow-lg rounded-lg mt-6">
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
                  <div className="p-4 bg-white rounded-lg shadow-md">
                    {/* Display cover image if available */}
                    {song.coverImageUrl && (
                      <img
                        src={song.coverImageUrl}
                        alt={`Cover for ${song.title}`}
                        className="rounded-md mb-4"
                      />
                    )}
                    <h3 className="text-lg font-semibold mb-2">{song.title}</h3>
                    <p className="text-gray-600 mb-2">
                      {song.artist} - {song.album}
                    </p>
                  </div>
                  {/* Spotify Embed */}
                  <div className="p-4 mt-4 bg-white rounded-lg shadow-md">
                    <iframe
                      className="w-full h-48 md:h-32 lg:h-48"
                      src={`https://open.spotify.com/embed/track/${song.spotifyId}`}
                      frameBorder="0"
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                  {/* Favorite Button */}
                  <div className="p-4 mt-4 bg-white rounded-lg shadow-md text-center">
                    {/* <button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                      onClick={() => addToFavorites(song.songId)}
                    >
                      ❤️ Add to Favorites
                    </button> */}
                    <button
                      onClick={handleFavorite}
                      className={`py-2 px-4 rounded-md ${
                        favorite
                          ? "bg-red-500 text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {favorite ? "❤️ Favorited" : "♡ Add to Favorites"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aespaSong;
