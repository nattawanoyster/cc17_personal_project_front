import React from "react";
import onePic from "../../../assets/1.jpeg";
import sixPic from "../../../assets/9.jpeg";
import twoPic from "../../../assets/2.jpeg";
import fourPic from "../../../assets/7.jpeg";
import threePic from "../../../assets/3.jpeg";
import sevenPic from "../../../assets/10.jpeg";
import fivePic from "../../../assets/8.jpeg";
import eightPic from "../../../assets/4.jpeg";
import ninePic from "../../../assets/11.jpeg";
import tenPic from "../../../assets/12.jpeg";

const aespaImageGrid = () => {
  const images = [
    onePic,
    sixPic,
    tenPic,
    fourPic,
    threePic,
    sevenPic,
    ninePic,
    fivePic,
    eightPic,
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

export default aespaImageGrid;
