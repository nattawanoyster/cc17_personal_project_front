import { useState } from "react";
import validateRegister from "../validators/validator-register";
import authApi from "../../../api/auth-api";
import { toast } from "react-toastify";
// import { AxiosError } from "axios";

const initialInput = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// const initialInputError = {
//   username: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };
export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initialInput);
  // const [inputError, setInputError] = useState(initialInputError);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      validateRegister(input);

      await authApi.register(input);
      onSuccess?.();
      toast.success(
        "Register Successfully.  Please login to enjoy our website"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <label className="block text-white text-base font-semibold ml-8 mb-2">
            Username
          </label>
          <div className="flex justify-center items-center">
            <input
              className={
                "shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              }
              placeholder="eg. katarinabluu"
              type="text"
              value={input.username}
              onChange={(e) => {
                setInput({ ...input, username: e.target.value });
              }}
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
              type="text"
              placeholder="eg. wishyouhell@mail.com"
              value={input.email}
              onChange={(e) => {
                setInput({ ...input, email: e.target.value });
              }}
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
              type="password"
              placeholder="************"
              value={input.password}
              onChange={(e) => {
                setInput({ ...input, password: e.target.value });
              }}
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
              type="password"
              placeholder="***********"
              value={input.confirmPassword}
              onChange={(e) => {
                setInput({ ...input, confirmPassword: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="col-span-2 flex justify-center items-center ml-8 mb-2">
          <button className="border-2 rounded-lg hover:bg-gray-700 bg-opacity-80 text-white font-semibold py-2 px-4 focus:outline-none focus:shadow-outline w-72">
            {" "}
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

// import React, { useState } from "react";
// import validateRegister from "../validators/validator-register";
// import authApi from "../../../api/auth-api";

// const initialInput = {
//   username: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

// const initialInputError = {
//   username: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

// export default function RegisterForm() {
//   const [input, setInput] = useState(initialInput);
//   const [inputError, setInputError] = useState(initialInputError);

//   const handleSubmitForm = async (e) => {
//     try {
//       e.preventDefault();
//       const error = validateRegister(input);
//       if (error) {
//         console.log("Validation Errors:", error.details);
//         const errors = error.details.reduce((acc, current) => {
//           acc[current.path[0]] = current.message;
//           return acc;
//         }, {});
//         setInputError({ ...initialInputError, ...errors });
//       } else {
//         setInputError(initialInputError);
//       }
//       await authApi.register(input);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmitForm}>
//       <div className="grid grid-cols-2 gap-6">
//         <div className="col-span-2">
//           <label className="block text-white text-base font-semibold ml-8 mb-2">
//             Username
//           </label>
//           <div className="flex justify-center items-center">
//             <input
//               className={`shadow appearance-none border ${
//                 inputError.username ? "border-red-500" : "border-gray-300"
//               } rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//               placeholder="eg. katarinabluu"
//               type="text"
//               value={input.username}
//               onChange={(e) => {
//                 setInput({ ...input, username: e.target.value });
//               }}
//             />
//           </div>
//           {inputError.username && (
//             <p className="text-red-500 text-xs italic mt-2 ml-8">
//               {inputError.username}
//             </p>
//           )}
//         </div>
//         <div className="col-span-2">
//           <label className="block text-white text-base font-semibold ml-8 mb-2">
//             Email
//           </label>
//           <div className="flex justify-center items-center">
//             <input
//               className={`shadow appearance-none border ${
//                 inputError.email ? "border-red-500" : "border-gray-300"
//               } rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//               placeholder="eg. example@gmail.com"
//               type="text"
//               value={input.email}
//               onChange={(e) => {
//                 setInput({ ...input, email: e.target.value });
//               }}
//             />
//           </div>
//           {inputError.email && (
//             <p className="text-red-500 text-xs italic mt-2 ml-8 ">
//               {inputError.email}
//             </p>
//           )}
//         </div>
//         <div className="col-span-2">
//           <label className="block text-white text-base font-semibold ml-8 mb-2">
//             Password
//           </label>
//           <div className="flex justify-center items-center">
//             <input
//               className={`shadow appearance-none border ${
//                 inputError.password ? "border-red-500" : "border-gray-300"
//               } rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//               placeholder="********"
//               type="password"
//               value={input.password}
//               onChange={(e) => {
//                 setInput({ ...input, password: e.target.value });
//               }}
//             />
//           </div>
//           {inputError.password && (
//             <p className="text-red-500 text-xs italic mt-2 ml-8">
//               {inputError.password}
//             </p>
//           )}
//         </div>
//         <div className="col-span-2">
//           <label className="block text-white text-base font-semibold ml-8 mb-2">
//             Confirm Password
//           </label>
//           <div className="flex justify-center items-center">
//             <input
//               className={`shadow appearance-none border ${
//                 inputError.confirmPassword
//                   ? "border-red-500"
//                   : "border-gray-300"
//               } rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//               placeholder="********"
//               type="password"
//               value={input.confirmPassword}
//               onChange={(e) => {
//                 setInput({ ...input, confirmPassword: e.target.value });
//               }}
//             />
//           </div>
//           {inputError.confirmPassword && (
//             <p className="text-red-500 text-xs italic mt-2 ml-8">
//               {inputError.confirmPassword}
//             </p>
//           )}
//         </div>
//         <div className="col-span-2 flex justify-center items-center ml-8 mb-2">
//           <button className="border-2 rounded-lg hover:bg-gray-700 bg-opacity-80 text-white font-semibold py-2 px-4 focus:outline-none focus:shadow-outline w-72">
//             {" "}
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// }
