import NavBar from "../features/authentication/components/Navbar";
import authApi from "../api/auth-api";
import { useState, useEffect } from "react";
import rvvCosmicPic from "../assets/rvv5.png";
import RvvSong from "../components/rvv-song";
import RvvImageGrid from "../features/authentication/components/rvvPicClub";

function rvvHomePage() {
  const handleClick = () => {
    window.open("https://www.instagram.com/redvelvet.smtown/", "_blank");
  };

  return (
    <div>
      <NavBar />
      <img
        src={rvvCosmicPic}
        onClick={handleClick}
        alt="Cover Image"
        className="w-full cursor-pointer "
      />

      <div className="bg-gradient-to-br from-red-800 via-neutral-600 to-stone-800 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl p-8 bg-slate-200 shadow-lg rounded-lg mt-6">
          <div className=" mt-8 mb-14">
            <h1 className="italic text-center">
              "Might be fragile, might be naive, <br />
              Might be a bit broken, a little weary. <br />
              <br />
              Love, hatred, courage and fear, adventures unprepared, <br />
              little pretty things, lilies, sunshine and moonlight. <br />
              <br />
              No one can see what comes tomorrow <br />
              in this world full of delights"
              <br />
              <br />
              Red Velvet - Chill Kill
            </h1>
            <br />
            <br />
            <br />
          </div>

          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">
              {" "}
              Get To Know More About Red Velvet{" "}
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <iframe
              width="800"
              height="450"
              src={`https://www.youtube.com/embed/KEFNlx4ZIOU?si=cXTbRUZ12WfYZ8d8`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
            <h2 className="text-sm text-center mb-4 mt-4">
              Red Velvet, has transcended into the realms of legendary. Known
              for their impeccable vocal skills, the anticipation for Red
              Velvet's Killing Voice challenge was astronomical — and it's safe
              to say they surpassed expectations. Within mere hours of its
              release, the episode is on the brink of hitting 10 million views,
              a testament to the group's unwavering popularity.
            </h2>
          </div>
          <br />
          <br />
          <br />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-xl font-medium mb-4"> Previous Music Video</h1>
            <iframe
              width="800"
              height="450"
              src={`https://www.youtube.com/embed/R9At2ICm4LQ?si=bxPvXk31k5Z_idhF`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
            <h1 className="text-lg font-medium mt-3">
              {" "}
              Red Velvet - Feel My Rhythm
            </h1>
            <h2 className="text-sm text-center mb-4">
              "Feel My Rhythm" is a song recorded by South Korean girl group Red
              Velvet for their extended play <br />
              The ReVe Festival 2022 - Feel My Rhythm (2022). Musically, it is a
              dance-pop song that samples the Bach arrangement "Air", <br />
              featuring "delicate" and "elegant" string melodies, "intense" trap
              beats, and "fantastic" vocal charm.
            </h2>
            <iframe
              width="800"
              height="450"
              src={`https://www.youtube.com/embed/uR8Mrt1IpXg?si=-iG-s4Zt08ZCdlhd`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
            <h1 className="text-lg font-medium mt-2"> Red Velvet - Psycho</h1>
            <h2 className="text-sm text-center mb-4">
              "Psycho" is a song that was recorded by South Korean girl group
              Red Velvet and was released as the lead single from their first
              compilation album The ReVe Festival: Finale (2019), which is the
              third and final installment in the group's album trilogy The ReVe
              Festival. "Psycho" is an R&B track that incorporates elements of
              pop, trap and future bass, and is about a couple who are in a
              complicated romantic relationship. A gothic-themed music video
              accompanied the single's digital release on December 23, 2019.
            </h2>
            <div className="flex flex-col justify-center items-center mt-10">
              <h1 className="text-xl font-medium mb-4">
                {" "}
                'Chill Kill' Hint Fiction Soundtrack{" "}
              </h1>
              <iframe
                width="800"
                height="450"
                src={`https://www.youtube.com/embed/KTqA-IcxZPQ?si=GsAJ_0VrMn10Hgj3`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
              <h2 className="text-base text-center mb-10 mt-10 italic">
                A puddle of water forms under my feet. I hear a voice. <br />
                "You can open your eyes now. Only you have my permission to be
                here." <br />
                The moment I watch the rippling waves dancing toward me without
                fear, the line between real and surreal begins to blur.
                <br />
                The reflection of the clock in the water points to 3:25 am.{" "}
                <br />
                <br />
              </h2>
            </div>
          </div>
          <RvvImageGrid />
          <div className="mb-20 mt-10">
            <h2 className="text-base text-center italic">
              "Don't be afraid. We're never losing. Even if you're lost, we'll
              find you." <br />
              As the clouds clear away from the night sky that always seemed
              frozen, <br /> the sun begins to paint a long tail of light.
            </h2>
            <br />
          </div>
          <RvvSong />
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
