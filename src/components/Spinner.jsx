import spinnerIcon from "../assets/spinner.png";

export default function Spinner() {
  return (
    <>
      <div className="fixed inset-0 bg-white z-40"></div>
      <div className="fixed inset-0 w-20 flex items-center z-50 animate-spin">
        <img src={spinnerIcon} />
      </div>
    </>
  );
}
