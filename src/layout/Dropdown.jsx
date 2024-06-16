import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import LogoutLogo from "../assets/logout-svgrepo-com.png";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Dropdown({ size = 2 }) {
  const [open, setOpen] = useState(false);

  const { logout, authUser } = useAuth();
  const navigate = useNavigate();

  const handleClickLogout = () => {
    setOpen(false);
    logout();
    navigate("/");
  };

  return (
    <div>
      <div role="button" onClick={() => setOpen((prev) => !prev)}>
        <Avatar src={authUser?.profileImage} />
      </div>

      {open && (
        <div className="absolute left-2/4 -translate-x-2 translate-y-3">
          <div className="p-4 w-72 bg-gray-300 rounded-lg shadow-[0_0_6px_rgb(0,0,0,0.2)]">
            <Link
              to={`/profile/${authUser?.userId}`}
              onClick={() => setOpen(false)}
            >
              <div className="flex items-center gap-2 hover:bg-gray-400 rounded-lg p-2">
                <Avatar size={3.5} src={authUser?.profileImage} />
                <div className="flex flex-col">
                  <h1 className="text-start font-semibold">
                    {" "}
                    {authUser?.username}
                  </h1>
                  <small className="text-gray-700">See your profile</small>
                </div>
              </div>
            </Link>

            <hr className="my-3 border border-gray-500" />

            <div
              className="flex items-center gap-2 hover:bg-gray-400 rounded-lg p-2"
              role="button"
              onClick={handleClickLogout}
            >
              <div className="bg-indigo-100 w-11 h-11 rounded-full flex justify-center items-center">
                <img
                  src={LogoutLogo}
                  style={{ width: `${size}rem`, height: `${size}rem` }}
                />
              </div>
              <span> Logout </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
