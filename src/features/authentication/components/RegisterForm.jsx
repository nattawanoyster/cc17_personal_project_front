export default function RegisterForm() {
  return (
    <form>
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <label className="block text-white text-base font-semibold ml-8 mb-2">
            Username
          </label>
          <div className="flex justify-center items-center">
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="eg. katarinabluu"
            />
          </div>
        </div>

        <div className="col-span-2">
          <label className="block text-white text-base font-semibold ml-8 mb-2">
            Email Address
          </label>

          <div className="flex justify-center items-center">
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="wishyouhell@mail.com"
            />
          </div>
        </div>
        <div className="col-span-2">
          <label className="block text-white text-base font-semibold ml-8 mb-2">
            Password
          </label>
          <div className="flex justify-center items-center">
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="************"
            />
          </div>
        </div>
        <div className="col-span-2">
          <label className="block text-white text-base font-semibold ml-8 mb-2">
            Confirm Password
          </label>
          <div className="flex justify-center items-center">
            <input
              className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="***********"
            />
          </div>
        </div>
        <div className="col-span-2 flex justify-center items-center ml-8 mb-2">
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
