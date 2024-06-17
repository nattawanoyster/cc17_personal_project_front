import AespaSong from "../components/aespa-Song";
import NavBarAespa from "../features/authentication/components/Navbar-aespa";
import aespa4pic from "../assets/aespa4.jpeg";
import AespaIntro from "../components/aespa-intro";
import AespaImageGrid from "../features/authentication/components/aeaspaPicClub";

const aespaHomePage = () => {
  const handleClick = () => {
    window.open("https://www.instagram.com/aespa_official/", "_blank");
  };

  return (
    <div>
      <NavBarAespa />
      <img
        src={aespa4pic}
        onClick={handleClick}
        alt="Cover Image"
        className="w-full cursor-pointer "
      />

      <div className="bg-gradient-to-r from-indigo-900 via-indigo-500 to-gray-900 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl p-8 bg-white shadow-lg rounded-lg mt-6">
          <AespaIntro />
          <AespaImageGrid />
          <div className="mb-20 mt-10">
            <h2 className="text-base text-center italic">
              This dream that I can't wake up from like a lost night in the dark{" "}
              <br />
              Wandering like I was possessed constantly by you <br />
              No, no, no, I can't stop love You keep getting deeper in the
              darkness <br />
              Deeper in the misty fog that resembles you <br />
              If you ever disappear, I won't let you go
              <br />
              No, I can't stop love
            </h2>
            <br />
          </div>
          <AespaSong />
        </div>
      </div>
    </div>
  );
};

export default aespaHomePage;
