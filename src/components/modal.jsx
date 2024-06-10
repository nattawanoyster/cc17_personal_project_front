import { useEffect } from "react";

export default function Modal({ width = 30, title, children, open, onClose }) {
  useEffect(() => {
    const handleEscPress = (e) => {
      if (e.keyCode === 27) {
        onClose?.();
      }
    };
    document.addEventListener("keydown", (e) => handleEscPress);
    return () => document.removeEventListener("keydown", (e) => handleEscPress);
  }, []);

  return (
    <>
      {open ? (
        <>
          <div className="fixed inset-0 bg-gray-800 bg-opacity-45 z-30"></div>
          <div className="fixed inset-0 z-40" onClick={onClose}>
            <div className="flex justify-center items-center min-h-screen">
              <div
                className="bg-lime-950 rounded-lg shadow-lg"
                style={{ width: `${width}rem` }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-5">
                  <button className="invisible"> &#10005; </button>
                  <h5 className="text-2xl font-semibold text-white">
                    {" "}
                    {title}{" "}
                  </h5>
                  <button
                    className="font-medium text-xl text-white"
                    onClick={onClose}
                  >
                    {" "}
                    &#10005;{" "}
                  </button>
                </div>

                <div className="p-4"> {children} </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
