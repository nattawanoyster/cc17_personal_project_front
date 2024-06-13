export default function Input({
  placeholder,
  type = "text",
  error,
  value,
  onChange,
  name,
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error
            ? "border-red-500 focus:ring-red-300"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-300"
        }`}
        value={value}
        onChange={onChange}
        name={name}
      />
      {error ? <small className="text-red-500">{error}</small> : null}
    </>
  );
}
