import React, { useState } from "react";
import NavBar from "../features/authentication/components/Navbar";
import RvvRtoV from "../assets/rtov.jpg";
import RvvRtoVseat from "../assets/rtovSeat.jpg";
import RtoVButton from "../features/authentication/components/rvvAllticket";
import WingsSound from "../assets/Red Velvet-Wings.mp3";
import RtoVMD from "../assets/rtovMD.jpg";

const rvvConcert = () => {
  const [showModal, setShowModal] = useState(false);

  const handleBuyTickets = (url) => {
    window.open(url, "_blank");
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <NavBar />
      <div className="bg-gradient-to-br from-red-800 via-neutral-600 to-stone-800 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl p-8 bg-white shadow-lg rounded-lg mt-6">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">
              Red Velvet Upcoming Concert
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={RvvRtoV}
              alt="Red Velvet"
              className="w-1/2 h-auto rounded-lg"
              a
              href="https://www.instagram.com/redvelvet.smtown/"
              target="_blank"
            />
          </div>

          <div className="flex flex-col justify-center items-center mt-4 mb-4">
            <h1 className="text-base font-medium text-center">
              Now Playing <br />
              Red Velvet - Wings
            </h1>
            <audio autoPlay loop controls className="mt-2">
              <source src={WingsSound} type="audio/mpeg" />
            </audio>
          </div>

          <div className="ml-8 mt-4 gap-6">
            <p className="text-lg text-black mb-4">
              SM True and the renowned girl group 'Red Velvet' to open your
              fantasy world!
              <br />
              <br />
              <span className="font-bold">
                'Red' or 'Velvet'? <br />
                'Velvet' or 'Red'?
              </span>
              <br />
              <br />
              The different self of 'Red Velvet' will be discovered in an
              enormous music box and ready to be unfolded for the first time in
              the fourth concert.
              <br />
              <br />
              <span className="font-bold">
                Red Velvet 4th Concert: R to V in BANGKOK
                <br />
                <br />
                2 shows:
                <br />
                Saturday 13 May 2025 | 6PM
                <br />
                Sunday 14 May 2025 | 4PM
                <br />
                <br />
                Impact Arena Muang Thong Thani
              </span>
            </p>
            <p className="text-lg text-black mb-4">
              Come and find the connection between 'Red' and 'Velvet' by
              yourself and enjoy the splendid stage performances, spectacular
              production, and excellent setlist full of Red Velvet's hit songs
              and unique music colors that everyone is missing and waiting for
              their return for 5 years and 8 months.
            </p>
            <p className="text-lg text-black">
              <span className="font-bold underline">Ticket Price</span>
              <br />
              6,000 / 4,800 (Standing) / 4,600 / 3,600 / 2,600 THB
              <br />
              *Ticket Price does not include Counter Service issuing fee 20 THB
              per ticket.
              <br />
              <br />
              <span className="font-bold underline">Ticket Open</span>
              <br />
              1. SM True MEMBERSHIP: Sunday 23 April 2023 from 11AM to 12PM
              only.
              <br />
              2. Public Sale: Monday 24 April 2023 from 7PM onwards.
            </p>
          </div>
          <div className="flex justify-center items-center mt-6">
            <img
              src={RvvRtoVseat}
              alt="Red Velvet"
              className="w-1/2 h-auto rounded-lg"
              a
              href="https://www.instagram.com/redvelvet.smtown/"
              target="_blank"
            />
          </div>
          <div>
            <RtoVButton />
          </div>
          <div className="flex justify-center items-center mt-4">
            <p className="text-lg text-black font-bold">
              See you in 2025 Thai Reveluv!
              <br />
              <div className="flex justify-center items-center">
                <p> 💝 💛 💙 💚 💜 </p>
              </div>
            </p>
          </div>

          {/* Additional Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Concert Highlights</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg mb-2">
                Relive the best moments from past concerts with exclusive photos
                and videos!
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Red Velvet - "Psycho" Live Performance</li>
                <li>Red Velvet - "Red Flavor" Fan Chant</li>
                <li>Red Velvet - "Bad Boy" Special Stage</li>
                <li>Red Velvet - "Zimzalabim" Dance Break</li>
              </ul>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
                onClick={() => alert("Redirect to highlights")}
              >
                View Highlights
              </button>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Meet and Greet</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg mb-2">
                Get the chance to meet Red Velvet in person! Learn how to
                participate in upcoming meet and greet events.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>
                  Red Velvet Meet and Greet - Seoul, South Korea - March 16,
                  2024
                </li>
                <li>
                  Red Velvet Fan Signing Event - Tokyo, Japan - April 11, 2024
                </li>
                <li>
                  Red Velvet VIP Experience - Bangkok, Thailand - May 14, 2025
                </li>
              </ul>
              <button
                className="bg-purple-500 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
                onClick={() => alert("Redirect to meet and greet info")}
              >
                Learn More
              </button>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Virtual Concerts</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg mb-2">
                Enjoy virtual concerts from the comfort of your home. Don't miss
                out on these livestream events:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Red Velvet Virtual Concert - July 5, 2024</li>
                <li>Red Velvet Online Fan Meeting - August 20, 2024</li>
                <li>Red Velvet Live Stream - September 10, 2024</li>
              </ul>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
                onClick={() =>
                  handleBuyTickets("https://beyondlive.com/contents/406")
                }
              >
                Watch Now
              </button>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Concert Merchandise</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg mb-2">
                Get your hands on exclusive concert merchandise!
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Red Velvet Light Stick</li>
                <li>Red Velvet T-Shirts</li>
                <li>Red Velvet Posters</li>
                <li>Red Velvet Hoodies</li>
                <li>Limited Edition Albums</li>
              </ul>
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
                onClick={toggleModal}
              >
                Shop Now
              </button>
            </div>
          </section>

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-lg shadow-lg relative">
                <button
                  className="absolute top-2 right-2 text-gray-700"
                  onClick={toggleModal}
                >
                  X
                </button>
                <img
                  src={RtoVMD}
                  alt="Concert Merchandise"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default rvvConcert;
