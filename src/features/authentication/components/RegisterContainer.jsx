import { useState } from "react";
import Modal from "../../../components/modal";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-center mt-4">
        <div className="block text-white text-lg font-bold mb-2">
          {" "}
          Don't have any account?{" "}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-lime-900 hover:bg-[#244F1A] bg-opacity-70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-72"
          type="button"
          onClick={() => setOpen(true)}
        >
          {" "}
          Sign Up{" "}
        </button>
      </div>

      <Modal title="Sign Up" open={open} onClose={() => setOpen(false)}>
        <RegisterForm onSuccess={() => setOpen(false)} />
      </Modal>

      <div className="flex items-center justify-center text-center">
        <div className="block text-white text-sm mt-8">
          {" "}
          Now Playing
          <br />
          WENDY - His Car Isn't Yours
        </div>
      </div>
    </div>
  );
}
