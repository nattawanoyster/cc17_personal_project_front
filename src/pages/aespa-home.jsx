import NavBarAespa from "../features/authentication/components/Navbar-aespa";
import aespa4pic from "../assets/aespa4.jpeg";
import * as Spotify from "react-spotify-embed";

const aespaHomePage = () => {
  return (
    <div>
      <NavBarAespa />
      <div className="flex flex-col h-screen">
        <img
          src={aespa4pic}
          alt="aespa4pic"
          className="cursor-pointer h-96 w-full object-cover"
        />
        <div className="playlist flex justify-center items-center mt-6">
          {/* <Spotify.Spotify
            className="w-1/2 h-full"
            link="https://open.spotify.com/album/3gHhPm8z8tid1kvpniUKuK?si=yz7iO-vHS1aG9uQG0Wz_sQ"
          /> */}
          <div>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/album/3gHhPm8z8tid1kvpniUKuK?utm_source=generator"
              width="500"
              height="500"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aespaHomePage;
