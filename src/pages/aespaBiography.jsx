import NavBarAespa from "../features/authentication/components/Navbar-aespa";
import React from "react";
import AespaFullPic from "../assets/aespa-full.png";

const aespaBio = () => {
  return (
    <div>
      <NavBarAespa />
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-500 to-gray-900 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl p-8 bg-white shadow-lg rounded-lg mt-6">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold mb-4"> aespa </h1>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={AespaFullPic}
              alt="aespa"
              className="w-full h-auto rounded-lg"
              a
              href="https://www.instagram.com/redvelvet.smtown/"
              target="_blank"
            />
          </div>

          <div className=" mt-4 gap-8">
            <p className="text-lg text-black mb-4">
              &emsp;&emsp;&emsp; aespa(commonly stylized in all lowercase or
              æspa) is a South Koreangirl groupformed by SM Entertainment. The
              group consists of four members: Karina, Giselle, Winter, and
              Ningning. The group is known for popularizing themetaverseconcept
              and hyper pop music in K-pop.
            </p>
            <p className="text-lg text-black mb-4">
              &emsp;&emsp;&emsp; aespa debuted on November 17, 2020, with the
              single "Black Mamba". The song's music video achieved the highest
              number of views for a K-pop group's debut video in 24 hours, with
              21.4 million views.Their second single, "Next Level", was released
              in May 2021 to widespread commercial success, peaking at number
              two on theCircle Digital Chart and K-pop Hot 100 It earned
              multiple accolades and Daesangawards, including Song of the Year
              at the19th Korean Music Awardsand2021 Melon Music Awards.
            </p>
            <br />
            <p className="text-lg text-black">
              &emsp;&emsp;&emsp; The group's name, aespa, combines the English
              initials for "avatar" and "experience" (Avatar X Experience) with
              the English word "aspect", meaning "two sides", to symbolize the
              idea of "meeting another self and experiencing the new world"
            </p>
            <br />
            <p className="text-lg text-black">
              &emsp;&emsp;&emsp; Recently, On April 21, it was announced that
              aespa would be releasing their first full album Armageddon on May
              27. The album is led by two title tracks "Supernova", which was
              pre-released on May 13, and "Armageddon", which was released
              together with the entire album.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aespaBio;
