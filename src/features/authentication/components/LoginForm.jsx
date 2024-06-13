import { useState } from "react";
import RegisterContainer from "./RegisterContainer";
import Input from "../../../components/input";
import validateLogin from "../validators/validator-login";
import useAuth from "../../../hooks/useAuth";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialInput = {
  username: "",
  password: "",
};

const initialInputError = {
  username: "",
  password: "",
};

export default function LoginForm() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateLogin(input);
      if (error) {
        return setInputError(error);
      }

      setInputError({ initialInputError });

      await login(input);
      navigate("/chooseyourpath");
      toast.success("Login Successfully. May you a delighted day");
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const message =
          error.response.status === 400
            ? "Username or Password is Invalid"
            : "Internal Server Error";
        return toast.error(message);
      }
    }
  };

  return (
    <div className="bg-black bg-opacity-40 p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-semibold mb-4 text-white">LOGIN</h1>
      </div>

      <form onSubmit={handleSubmitForm}>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Username
          </label>
          <Input
            placeholder="Username"
            name="username"
            value={input.username}
            onChange={handleChangeInput}
            error={inputError.username}
          />
        </div>

        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2">
            Password
          </label>
          <Input
            placeholder="**********"
            name="password"
            type="password"
            value={input.password}
            onChange={handleChangeInput}
            error={inputError.password}
          />
        </div>

        <div className="flex items-center justify-center">
          <button className="bg-lime-900 hover:bg-lime-800 bg-opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-72">
            Log In
          </button>
        </div>
      </form>

      <hr className="mt-6" />

      <RegisterContainer />

      {/* <div>
        <div className="flex items-center justify-center mt-4">
          <div className="block text-white text-lg font-bold mb-2">
            {" "}
            Don't have any account?{" "}
          </div>
        </div>
        <div className="flex items-center justify-center">
        
            <button
              className="bg-lime-900 hover:bg-lime-800 bg-opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-72"
              type="button"
            >
              {" "}
              Sign Up{" "}
            </button>
          
        </div>
        <div className="flex items-center justify-center text-center">
          <div className="block text-white text-sm mt-8">
            {" "}
            Now Playing
            <br />
            Chill Kill - Red Velvet Instrumental Ver.
          </div>
        </div>
      </div> */}
    </div>
  );
}
