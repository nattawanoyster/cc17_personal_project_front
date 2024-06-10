import { useNavigate } from "react-router-dom";
import aespaLoading from "../assets/vdo/loading-aespa.mp4";

export default function VideoAespaPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login"); // Change this to the actual path of your next page
  };

  return (
    <div
      className="relative h-screen w-screen overflow-hidden"
      onClick={handleClick}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={aespaLoading} type="video/mp4" />
      </video>
      <div className="absolute bottom-0 w-full text-center p-4 bg-black bg-opacity-50">
        <h1 className="text-white text-3xl pb-8">Click anywhere to continue</h1>
      </div>
    </div>
  );
}
