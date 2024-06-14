import ProfileImgDefault from "../assets/mini-winter.jpeg";

export default function Avatar({ src, size = 2.75 }) {
  return (
    <img
      src={src || ProfileImgDefault}
      alt="userPic"
      style={{ width: `${size}rem`, height: `${size}rem` }}
      className="rounded-full"
    />
  );
}
