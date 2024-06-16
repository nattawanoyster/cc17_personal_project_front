import NavBarAespa from "../features/authentication/components/Navbar-aespa";
import aespaMyPower from "../assets/aespaMyPower.png";
import aespaPoster from "../assets/aespaPoster.png";
import aespaZine from "../assets/aespaZine.png";
import aespaMini from "../assets/aespaMini.png";
import aespaAuthentic from "../assets/aespaAuthentic.png";
import AespaModal from "../components/aespa-Modal";
import { useState } from "react";
// import myPowerDetails from "../assets/MyPowerDetails.jpeg";
import posterDetails from "../assets/PosterDetails.jpeg";
import zineDetails from "../assets/ZineDetails.jpeg";

const aespaProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <NavBarAespa />
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-500 to-gray-900 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl p-8 bg-white shadow-lg rounded-lg mt-6 grid gap-5">
          <div className="flex justify-center items-center">
            <h1 class="text-3xl font-bold mb-4 text-center">
              aespa 1st Full Album - "Armageddon"{" "}
            </h1>
          </div>
          {/* <!-- Product Card 1 --> */}
          <div class="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div class="w-1/3">
              <img
                src={aespaMyPower}
                alt="aespaMyPower"
                class="w-full h-auto object-cover"
              />
            </div>
            {/* <!-- Product Details --> */}
            <div class="w-2/3 p-4">
              <h2 class="text-xl font-bold mb-2">
                (MY POWER Ver.) aespa [Armageddon] The 1st Album
              </h2>
              <p class="text-gray-700 mb-4">
                Brief Detail : 1ea Album Cover 1ea Photobook (88p) 1ea CD-R 4ea
                Postcard (Set/100x150 mm) 1ea Folded Poster 1ea Group Photocard
                (55x85 mm) 1ea Photocard (Random/55x85 mm)
              </p>
              <p class="text-gray-700 font-bold">₩ 48,000</p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={openModal}
                  class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                >
                  See More Details
                </button>

                <AespaModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  image={posterDetails}
                />

                <h3 className="bg-red-500 text-center font-semibold mt-6 p-1 w-28 h-auto">
                  {" "}
                  Sold Out{" "}
                </h3>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div class="w-1/3">
              <img
                src={aespaPoster}
                alt="aespaPoster"
                class="w-full h-auto object-cover"
              />
            </div>
            {/* <!-- Product Details --> */}
            <div class="w-2/3 p-4">
              <h2 class="text-xl font-bold mb-2">
                (POSTER Ver.) aespa [Armageddon] The 1st Album
              </h2>
              <p class="text-gray-700 mb-4">
                Brief Detail : 1ea Album Cover 1ea Photobook (88p) 1ea CD-R 4ea
                Postcard (Set/100x150 mm) 1ea Folded Poster 1ea Group Photocard
                (55x85 mm) 1ea Photocard (Random/55x85 mm)
              </p>
              <p class="text-gray-700 font-bold">₩ 38,000</p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={openModal}
                  class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                >
                  See More Details
                </button>

                <AespaModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  image={posterDetails}
                />
                <h3 className="bg-red-500 text-center font-semibold mt-6 p-1 w-28 h-auto">
                  {" "}
                  Sold Out{" "}
                </h3>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div class="w-1/3">
              <img
                src={aespaZine}
                alt="aespaZine"
                class="w-full h-auto object-cover"
              />
            </div>
            {/* <!-- Product Details --> */}
            <div class="w-2/3 p-4">
              <h2 class="text-xl font-bold mb-2">
                (ZINE Ver.) aespa [Armageddon] The 1st Album
              </h2>
              <p class="text-gray-700 mb-4">
                Brief Detail : 1ea Album Cover 1ea Photobook (88p) 1ea CD-R 4ea
                Postcard (Set/100x150 mm) 1ea Folded Poster 1ea Group Photocard
                (55x85 mm) 1ea Photocard (Random/55x85 mm)
              </p>
              <p class="text-gray-700 font-bold">₩ 49,000</p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={openModal}
                  class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                >
                  See More Details
                </button>

                <AespaModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  image={zineDetails}
                />
                <h3 className="bg-red-500 text-center font-semibold mt-6 p-1 w-28 h-auto">
                  {" "}
                  Sold Out{" "}
                </h3>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div class="w-1/3">
              <img
                src={aespaMini}
                alt="aespaMini"
                class="w-full h-auto object-cover"
              />
            </div>
            {/* <!-- Product Details --> */}
            <div class="w-2/3 p-4">
              <h2 class="text-xl font-bold mb-2">
                (SMINI Ver.) aespa [Armageddon] The 1st Album
              </h2>
              <p class="text-gray-700 mb-4">
                Brief Detail : 1ea Album Cover 1ea Photobook (88p) 1ea CD-R 4ea
                Postcard (Set/100x150 mm) 1ea Folded Poster 1ea Group Photocard
                (55x85 mm) 1ea Photocard (Random/55x85 mm)
              </p>
              <p class="text-gray-700 font-bold">₩ 42,000</p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={openModal}
                  class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                >
                  See More Details
                </button>

                <AespaModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  image={posterDetails}
                />
                <h3 className="bg-red-500 text-center font-semibold mt-6 p-1 w-28 h-auto">
                  {" "}
                  Sold Out{" "}
                </h3>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div class="w-1/3">
              <img
                src={aespaAuthentic}
                alt="aespaAuthentic"
                class="w-full h-auto object-cover"
              />
            </div>
            {/* <!-- Product Details --> */}
            <div class="w-2/3 p-4">
              <h2 class="text-xl font-bold mb-2">
                (AUTHENTIC Ver.) aespa [Armageddon] The 1st Album
              </h2>
              <p class="text-gray-700 mb-4">
                Brief Detail : 1ea Album Cover 1ea Photobook (88p) 1ea CD-R 4ea
                Postcard (Set/100x150 mm) 1ea Folded Poster 1ea Group Photocard
                (55x85 mm) 1ea Photocard (Random/55x85 mm)
              </p>
              <p class="text-gray-700 font-bold">₩ 50,000</p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={openModal}
                  class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 mt-4 rounded focus:outline-none focus:shadow-outline"
                >
                  See More Details
                </button>

                <AespaModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  image={posterDetails}
                />
                <h3 className="bg-red-500 text-center font-semibold mt-6 p-1 w-28 h-auto">
                  {" "}
                  Sold Out{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aespaProduct;
