import onePic from "../../../assets/rvvPicClub/1.jpeg";
import twoPic from "../../../assets/rvvPicClub/2.jpeg";
import threePic from "../../../assets/rvvPicClub/3.jpeg";
import fourPic from "../../../assets/rvvPicClub/4.jpeg";
import fivePic from "../../../assets/rvvPicClub/5.jpeg";
import sixPic from "../../../assets/rvvPicClub/6.jpeg";
import sevenPic from "../../../assets/rvvPicClub/7.jpeg";
import eightPic from "../../../assets/rvvPicClub/8.jpeg";
import ninePic from "../../../assets/rvvPicClub/9.jpeg";
import tenPic from "../../../assets/rvvPicClub/10.jpeg";
import elfPic from "../../../assets/rvvPicClub/11.jpeg";

const rvvImageGrid = () => {
  const images = [
    fourPic,
    twoPic,
    fivePic,
    threePic,
    onePic,
    sixPic,
    ninePic,
    eightPic,
    elfPic,
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-2xl">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default rvvImageGrid;
