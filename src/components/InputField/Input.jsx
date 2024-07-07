const Input = ({ type, placeholder, name, value, onChange, required }) => {
  return (
    <input
      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 w-full leading-tight focus:outline-none focus:shadow-outline"
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
