import React from "react";
import LoginForm from "../features/authentication/components/LoginForm";
import chillkillBGsound from "../assets/Red Velvet Chill Kill Instrumental.mp3";
// import RegisterContainer from "../features/authentication/components/RegisterContainer";

export default function LoginPage() {
  return (
    <div
      className="relative h-screen w-screen overflow-hidden brightness-75 bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/RedvelvetBG.png')" }}
    >
      <LoginForm />

      <div className="mt-4">
        <audio controls autoPlay className="">
          <source src={chillkillBGsound} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}
