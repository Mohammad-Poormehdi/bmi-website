interface ButtonProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}
const Button: React.FC<ButtonProps> = ({ label, active, onClick }) => {
  return (
    <button aria-label="button"
      className={`w-full px-3 py-2 rounded-full ${
        active && "text-white bg-blue-600"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default Button;
