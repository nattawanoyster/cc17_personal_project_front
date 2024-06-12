import NavBar from "../features/authentication/components/Navbar";
// import RvvSpotifyEmbed from "../features/authentication/components/rvvEmbedSpotify";
import * as Spotify from "react-spotify-embed";
import authApi from "../api/auth-api";
import { useState, useEffect } from "react";

export default function RedvelvetHome() {
  const [artist, setArtist] = useState([]);

  console.log(artist, "-----------------");
  useEffect(() => {
    const getSong = async () => {
      const res = await authApi.getSong();
      setArtist(res.data);
    };
    getSong();
  }, []);
  // const res = getSong()

  return (
    <div>
      <NavBar />

      {/* <div>{artist}</div> */}

      <div>
        {/* <h1>My Spotify Embed</h1>
        <Spotify.Spotify link="https://open.spotify.com/track/1zC3wpW5qU7n6KVrBlbAah?si=1ce3544522374f69" /> */}
      </div>
    </div>
  );
}
