import RegisterContainer from "./RegisterContainer";

export default function LoginForm() {
  return (
    <div className="bg-black bg-opacity-40 p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl font-semibold mb-4 text-white">LOGIN</h1>
      </div>

      <form>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-lime-900 hover:bg-lime-800 bg-opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-72"
            type="button"
          >
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
