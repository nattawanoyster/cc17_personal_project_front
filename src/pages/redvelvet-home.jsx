import NavBar from "../features/authentication/components/Navbar";
import authApi from "../api/auth-api";
import { useState, useEffect } from "react";
import rvvCosmicPic from "../assets/rvv5.png";

function rvvHomePage() {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

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
      <NavBar />
      <img src={rvvCosmicPic} alt="Cover Image" className="w-full " />

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
      </div>
    </div>
  );
}

export default rvvHomePage;

// export default function RedvelvetHome() {
// const [artist, setArtist] = useState([]);

// console.log(artist, "-----------------");
// useEffect(() => {
//   const getSong = async () => {
//     const res = await authApi.getSong();
//     setArtist(res.data);
//   };
//   getSong();
// }, []);
// const res = getSong()

//   return (
//     <div>
//       <NavBar />
//       <div className="h-screen">
//         <img
//           src={rvvCosmicPic}
//           alt="rvvCosmicPic"
//           className="cursor-pointer h-1/2 w-full object-cover"
//         />
//       </div>
//       <div className="flex justify-center items-center mt-6">
//         <div>
//           <iframe
//             style={{ borderRadius: "12px" }}
//             src="https://open.spotify.com/embed/album/4YBKpZhJQXxO7RNjA4V4lY?utm_source=generator"
//             width="700"
//             height="700"
//             frameBorder="0"
//             allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//             allowFullScreen
//             loading="lazy"
//           ></iframe>
//         </div>
//         {/* <h1>My Spotify Embed</h1>
//         <Spotify.Spotify link="https://open.spotify.com/track/1zC3wpW5qU7n6KVrBlbAah?si=1ce3544522374f69" /> */}
//       </div>
//     </div>
//   );
// }
