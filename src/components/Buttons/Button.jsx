export const PrimaryButton = ({ title, onClick, type, disabled }) => {
  return (
    <button
      type={type}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
        disabled ? "cursor-not-allowed" : ""
      }`}
      onClick={onClick ? () => onClick() : () => {}}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
