import NavBar from "../features/authentication/components/Navbar";
import RvvPackage from "../assets/rvvPackage.jpg";
import RvvPhotobook from "../assets/rvvPhotobook.jpg";
import RvvBags from "../assets/rvvBags.jpg";
import RvvPoster from "../assets/rvvPoster.png";
import RvvsMini from "../assets/rvvsMini.jpg";
import AespaModal from "../components/aespa-Modal";
import BagDetail from "../assets/BagDetails.jpeg";
import PhotobookDetails from "../assets/PhotobookDetails.jpeg";
import PackageDetails from "../assets/PackageDetails.jpeg";
import { useState } from "react";

const rvvProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <NavBar />
      <div className="bg-gradient-to-br from-red-800 via-neutral-600 to-stone-800 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl p-8 bg-white shadow-lg rounded-lg mt-6 grid gap-5">
          <div className="flex justify-center items-center">
            <h1 class="text-3xl font-bold mb-4">
              Red Velvet Chill Kill Album{" "}
            </h1>
          </div>
          {/* <!-- Product Card 1 --> */}
          <div class="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div class="w-1/3">
              <img
                src={RvvPackage}
                alt="RvvPackage"
                class="w-full h-auto object-cover"
              />
            </div>
            {/* <!-- Product Details --> */}
            <div class="w-2/3 p-4">
              <h2 class="text-xl font-bold mb-2">
                (PACKAGE Ver.) RED VELVET [CHILL KILL] The 3rd Album
              </h2>
              <p class="text-gray-700 mb-4">
                Components : 1ea CD-R, 72p Photo Book, 1ea Post Card, 1ea
                Sticker, 1ea Folded Poster(On pack), 1ea Photo Card, 1ea Store
                Gift Photo Card
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
                  image={PackageDetails}
                />
                <h3 className="bg-red-500 text-center font-semibold mt-6 p-1 w-28 h-auto">
                  {" "}
                  Sold Out{" "}
                </h3>
              </div>
            </div>
          </div>

          {/* <!-- Product Card 2 --> */}
          <div class="bg-white shadow-lg rounded-lg overflow-hidden flex">
            {/* <!-- Product Image --> */}
            <div class="w-1/3">
              <img
                src={RvvPhotobook}
                alt="RvvPhotobook"
                class="w-full h-auto object-cover"
              />
            </div>
            {/* <!-- Product Details --> */}
            <div class="w-2/3 p-4">
              <h2 class="text-xl font-bold mb-2">
                (PHOTOBOOK Ver.) RED VELVET [CHILL KILL] The 3rd Album
              </h2>
              <p class="text-gray-700 mb-4">
                Components : 1ea CD-R, 72p Photo Book, 1ea Post Card, 1ea
                Sticker, 1ea Folded Poster(On pack), 1ea Photo Card, 1ea Store
                Gift Photo Card
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
                  image={PhotobookDetails}
                />
                <h3 className="bg-red-500 text-center font-semibold mt-6 p-1 w-28 h-auto">
                  {" "}
                  Sold Out{" "}
                </h3>
              </div>
            </div>
          </div>

          {/* <!-- Product Card 3 --> */}
          <div class="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div class="w-1/3">
              <img
                src={RvvBags}
                alt="RvvBags"
                class="w-full h-auto object-cover"
              />
            </div>
            {/* <!-- Product Details --> */}
            <div class="w-2/3 p-4">
              <h2 class="text-xl font-bold mb-2">
                (BAG Ver.) RED VELVET [CHILL KILL] The 3rd Album
              </h2>
              <p class="text-gray-700 mb-4">
                Components : 1ea CD-R, 1 Bag, 1ea Post Card, 1ea Sticker, 1ea
                Folded Poster(On pack), 1ea Photo Card, 1ea Store Gift Photo
                Card
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
                  image={PackageDetails}
                />
                <h3 className="bg-red-500 text-center font-semibold mt-6 p-1 w-28 h-auto">
                  {" "}
                  Sold Out{" "}
                </h3>
              </div>
            </div>
          </div>

          {/* <!-- Product Card 4 --> */}
          <div class="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div class="w-1/3">
              <img
                src={RvvPoster}
                alt="RvvPoster"
                class="w-full h-auto object-cover"
              />
            </div>
            {/* <!-- Product Details --> */}
            <div class="w-2/3 p-4">
              <h2 class="text-xl font-bold mb-2">
                (POSTER Ver.) RED VELVET [CHILL KILL] The 3rd Album
              </h2>
              <p class="text-gray-700 mb-4">
                Components : 1ea CD-R, 72p Photo Book, 1ea Post Card, 1ea
                Sticker, 1ea Folded Poster(On pack), 1ea Photo Card, 1ea Store
                Gift Photo Card
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
                  image={PackageDetails}
                />
                <h3 className="bg-red-500 text-center font-semibold mt-6 p-1 w-28 h-auto">
                  {" "}
                  Sold Out{" "}
                </h3>
              </div>
            </div>
          </div>

          {/* <!-- Product Card 5 --> */}
          <div class="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <div class="w-1/3">
              <img
                src={RvvsMini}
                alt="RvvsMini"
                class="w-full h-auto object-cover"
              />
            </div>
            {/* <!-- Product Details --> */}
            <div class="w-2/3 p-4">
              <h2 class="text-xl font-bold mb-2">
                (SMINI Ver.) RED VELVET [CHILL KILL] The 3rd Album
              </h2>
              <p class="text-gray-700 mb-4">
                Components : 1ea CD-R, 72p Photo Book, 1ea Post Card, 1ea
                Sticker, 1ea Folded Poster(On pack), 1ea Photo Card, 1ea Store
                Gift Photo CardSed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
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
                  image={PackageDetails}
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

export default rvvProduct;
