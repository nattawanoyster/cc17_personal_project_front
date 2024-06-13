import NavBar from "../features/authentication/components/Navbar";
// import RvvSpotifyEmbed from "../features/authentication/components/rvvEmbedSpotify";
import * as Spotify from "react-spotify-embed";
import authApi from "../api/auth-api";
import { useState, useEffect } from "react";
import rvvCosmicPic from "../assets/rvv5.png";

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
      <div className="h-screen">
        <img
          src={rvvCosmicPic}
          alt="rvvCosmicPic"
          className="cursor-pointer h-1/2 w-full object-cover"
        />
      </div>
      <div className="flex justify-center items-center mt-6">
        <div>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/album/4YBKpZhJQXxO7RNjA4V4lY?utm_source=generator"
            width="700"
            height="700"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        {/* <h1>My Spotify Embed</h1>
        <Spotify.Spotify link="https://open.spotify.com/track/1zC3wpW5qU7n6KVrBlbAah?si=1ce3544522374f69" /> */}
      </div>
    </div>
  );
}
