import AespaSong from "../components/aespa-Song";
import NavBarAespa from "../features/authentication/components/Navbar-aespa";
import aespa4pic from "../assets/aespa4.jpeg";

const aespaHomePage = () => {
  return (
    <div>
      <NavBarAespa />
      <img src={aespa4pic} alt="Cover Image" className="w-full " />

      <div className="bg-gradient-to-r from-indigo-900 via-indigo-500 to-gray-900 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl p-8 bg-white shadow-lg rounded-lg mt-6">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">
              {" "}
              Get To Know More About aespa{" "}
            </h1>
          </div>
          <div className="flex justify-center">
            <iframe
              width="800"
              height="450" // Adjusted height to maintain the aspect ratio
              src="https://www.youtube.com/embed/f-LQoNN3hIk?si=yOEEFFqAa7ZAn5BH"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg shadow-lg" // Optional: Adds some styling to the iframe
            ></iframe>
          </div>
          <AespaSong />
        </div>
      </div>
    </div>
  );
};

export default aespaHomePage;
