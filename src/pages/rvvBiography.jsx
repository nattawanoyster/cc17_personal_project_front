import NavBar from "../features/authentication/components/Navbar";
import React from "react";
import RvvPicFull from "../assets/rvv-full.jpg";

const RedVelvetBio = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gradient-to-br from-red-800 via-neutral-600 to-stone-800 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl p-8 bg-white shadow-lg rounded-lg mt-6">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">Red Velvet</h1>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={RvvPicFull}
              alt="Red Velvet"
              className="w-full h-auto rounded-lg"
              href="https://www.instagram.com/redvelvet.smtown/"
              target="_blank"
            />
          </div>

          <div className=" mt-4 gap-6">
            <p className="text-lg text-gray-700 mb-4">
              &emsp;&emsp;&emsp; Red Velvet (레드벨벳;) is a South Korean girl
              group formed and managed by SM Entertainment. They originally
              debuted on August 1, 2014, with the single "Happiness" with the
              four-member line-up of Irene, Seulgi, Wendy, and Joy. A fifth
              member, Yeri, joined in March 2015, following the release of their
              first extended play, Ice Cream Cake. Sonically, the music of Red
              Velvet reflects their group name: their predominantly-pop "red"
              side experiments occasionally with electronic and funk, while
              their "velvet" side focuses on '90s-influenced R&B with elements
              of ballad and hip hop.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              &emsp;&emsp;&emsp; Red Velvet's Korean-language discography
              includes three studio albums, one reissue album, one compilation
              album, and ten extended plays—twelve of which have topped the
              South Korean Gaon Album Chart. Their singles "Red Flavor" and
              "Power Up" were number one hits on the Gaon Digital Chart, whilst
              "Dumb Dumb", "Russian Roulette", "Rookie", "Peek-a-Boo", "Bad
              Boy", "Psycho", and "Feel My Rhythm" all reached the top three.
              The group also ventured into the Japanese music scene with the
              extended plays #Cookie Jar (2018) and Sappy (2019) as well as the
              album Bloom(2022).
            </p>
            <p className="text-lg text-gray-700">
              &emsp;&emsp;&emsp; Recently, November 2023, Red Velvet released
              their third full album “Chill Kill”, marking it as the group's
              first Korean studio album release in six years after Perfect
              Velvet in 2017. The album contains ten tracks including the lead
              single of the same name.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedVelvetBio;
