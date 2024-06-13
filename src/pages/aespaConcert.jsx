import NavBarAespa from "../features/authentication/components/Navbar-aespa";
import aespaConcert from "../assets/hyperline.png";
import aespaSeat from "../assets/hyperline-seat.png";
import HyperlineButton from "../features/authentication/components/aespaAllticket";

const aespaHyperline = () => {
  return (
    <div>
      <NavBarAespa />
      <div className="bg-blue-950 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl p-8 bg-white shadow-lg rounded-lg mt-6">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">aespa Upcoming Concert</h1>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={aespaConcert}
              alt="aespa hyperline Concert"
              className="w-full h-auto rounded-lg"
              a
              href="https://www.instagram.com/redvelvet.smtown/"
              target="_blank"
            />
          </div>

          <div className=" ml-8 mt-4 gap-6">
            <p className="text-lg text-black mb-4">
              SM True is thrilled to welcome everyone to the new world of
              'aespa' The first-ever meta-verse girl group in K-POP who possess
              a unique worldview!
              <br />
              <br />
              They will lead you to the ultimate experience through transcendent
              performances that will transform your world in their first full
              scale concert in Thailand.
              <br />
              <br />
              <span className="font-bold">
                {" "}
                aespa LIVE TOUR 2023 'SYNK : HYPER LINE' in BANGKOK?{" "}
              </span>
              <br />
              <br />
              <span className="font-bold">
                2 Shows :Saturday 29 July 2025 (6PM)Sunday 30 July 2025 (4PM)
                <br />
                <br />
                2 shows: <br />
                Saturday 29 July 2025 | 6PM <br />
                Sunday 30 July 2025 | 4PM
                <br />
                <br />
                Impact Arena Muang Thong Thani{" "}
              </span>
            </p>
            <p className="text-lg text-black mb-4">
              <br />
              The beginning of a new world… that flawlessly unifies all
              existences together including 'aespa', their avatar counterpart
              'ae-aespa', as well as all Thai fans 'MY' who are anticipating for
              their arrival.
            </p>
            <p className="text-lg text-black">
              <span className="font-bold underline">Ticket Price </span> <br />
              4,900 (Standing) / 4,600 / 3,600 / 2,600 THB <br />
              *Ticket Price does not include Counter Service issuing fee 20 THB
              per ticket. <br />
              <br />
              <span className="font-bold underline"> Ticket Open </span> <br />
              1. SM True MEMBERSHIP :Friday 30 June 2025 from 7PM to 8PM only.{" "}
              <br />
              2. Public Sale :Saturday 1 July 2025 from 11AM onwards.
            </p>
          </div>
          <div className="flex justify-center items-center mt-6">
            <img
              src={aespaSeat}
              alt="aespa Hyperline Seat"
              className="w-1/2 h-auto rounded-lg"
              a
              href="https://www.instagram.com/redvelvet.smtown/"
              target="_blank"
            />
          </div>
          <div>
            <HyperlineButton />
          </div>
          <div className="flex justify-center items-center mt-4">
            <p className="text-lg text-black font-bold">
              See you in 2025 Thai MYs! <br />
              <div className="flex justify-center items-center">
                <p> 💙 🌙 ⭐ ️🦋 </p>
              </div>
            </p>
          </div>
        </div>
        {/* <audio autoPlay loop>
          <source src={HelloSunsetSound} type="audio/mpeg" />
        </audio> */}
      </div>
    </div>
  );
};

export default aespaHyperline;
