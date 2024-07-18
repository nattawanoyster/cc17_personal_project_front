import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import NavBar from "../features/authentication/components/Navbar";
import useAuth from "../hooks/useAuth";
import authApi from "../api/auth-api";

const EditProfile = () => {
  const { authUser, setAuthUser } = useAuth();
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      setUsername(authUser.username);
      setProfileImage(authUser.profileImage);
    }
  }, [authUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting profile update:", { username, profileImage });

    try {
      const response = await authApi.updateProfile({ username, profileImage });
      if (response.status === 200) {
        console.log("Profile updated successfully:", response.data);
        setAuthUser(response.data.user);
        navigate(`/profile/${authUser?.userId}`); // Redirect to profile page after successful update
      } else {
        console.error(
          "Unexpected response status:",
          response.status,
          response.data
        );
      }
    } catch (error) {
      console.error(
        "Error updating profile:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-neutral-400 via-neutral-500 to-neutral-700">
      <NavBar />
      <div className="flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
          <h1 className="text-3xl font-bold mb-4">Edit Profile</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="profileImage"
              >
                Profile Image URL
              </label>
              <input
                type="text"
                id="profileImage"
                value={profileImage}
                onChange={(e) => setProfileImage(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => navigate(`/profile/${authUser?.userId}`)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
