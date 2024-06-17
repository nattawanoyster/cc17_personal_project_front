import NavBar from "../features/authentication/components/Navbar";
import RvvRtoV from "../assets/rtov.jpg";
import RvvRtoVseat from "../assets/rtovSeat.jpg";
import RtoVButton from "../features/authentication/components/rvvAllticket";
import WingsSound from "../assets/Red Velvet-Wings.mp3";

const rvvConcert = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gradient-to-br from-red-800 via-neutral-600 to-stone-800 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl p-8 bg-white shadow-lg rounded-lg mt-6">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">
              Red Velvet Upcoming Concert
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={RvvRtoV}
              alt="Red Velvet"
              className="w-1/2 h-auto rounded-lg"
              a
              href="https://www.instagram.com/redvelvet.smtown/"
              target="_blank"
            />
          </div>

          <div className=" flex flex-col justify-center items-center mt-4 mb-4">
            <h1 className="text-base font-medium text-center">
              {" "}
              Now Playing <br />
              Red Velvet - Wings
            </h1>
            <audio autoPlay loop controls className="mt-2">
              <source src={WingsSound} type="audio/mpeg" />
            </audio>
          </div>

          <div className=" ml-8 mt-4 gap-6">
            <p className="text-lg text-black mb-4">
              SM True and the renowned girl group 'Red Velvet' to open your
              fantasy world!
              <br />
              <br />
              <span className="font-bold">
                {" "}
                'Red' or 'Velvet'? <br />
                'Velvet' or 'Red'?{" "}
              </span>
              <br />
              <br />
              The different self of 'Red Velvet' will be discovered in an
              enormous music box and ready to be unfolded for the first time in
              the fourth concert.
              <br />
              <br />
              <span className="font-bold">
                Red Velvet 4th Concert : R to V' in BANGKOK
                <br />
                <br />
                2 shows: <br />
                Saturday 13 May 2025 | 6PM <br />
                Sunday 14 May 2025 | 4PM
                <br />
                <br />
                Impact Arena Muang Thong Thani{" "}
              </span>
            </p>
            <p className="text-lg text-black mb-4">
              <br />
              Come and find the connection between 'Red' and 'Velvet' by
              yourself and enjoy the splendid stage performances, spectacular
              production and excellent setlist full of Red Velvet's hit songs
              and unique music colors that everyone is missing and waiting for
              their return for 5 years and 8 months.
            </p>
            <p className="text-lg text-black">
              <span className="font-bold underline">Ticket Price </span> <br />
              6,000 / 4,800 (Standing) / 4,600 / 3,600 / 2,600THB <br />
              *Ticket Price does not include Counter Service issuing fee 20 THB
              per ticket. <br />
              <br />
              <span className="font-bold underline"> Ticket Open </span> <br />
              1. SM True MEMBERSHIP :Sunday 23 April 2023 from 11AM to 12PM
              only. <br />
              2. Public Sale :Monday 24 April 2023 from 7PM onwards.
            </p>
          </div>
          <div className="flex justify-center items-center mt-6">
            <img
              src={RvvRtoVseat}
              alt="Red Velvet"
              className="w-1/2 h-auto rounded-lg"
              a
              href="https://www.instagram.com/redvelvet.smtown/"
              target="_blank"
            />
          </div>
          <div>
            <RtoVButton />
          </div>
          <div className="flex justify-center items-center mt-4">
            <p className="text-lg text-black font-bold">
              See you in 2025 Thai Reveluv! <br />
              <div className="flex justify-center items-center">
                <p> 💝 💛 💙 💚 💜 </p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default rvvConcert;
