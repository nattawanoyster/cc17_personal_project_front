export default function RegisterForm() {
  return (
    <form>
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <label className="block text-white text-sm font-semibold">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-white text-sm font-semibold">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Email address"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-white text-sm font-semibold">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Password"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-white text-sm font-semibold">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Confirm Password"
          />
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <button
            className="border-2 rounded-lg hover:bg-gray-700 bg-opacity-80 text-white font-semibold py-2 px-4 focus:outline-none focus:shadow-outline w-72"
            type="button"
          >
            {" "}
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}
