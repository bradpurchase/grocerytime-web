import * as React from "react";

interface Props {
  label: String;
  backgroundColor?: String;
}

const Button: React.FC<Props> = React.memo(
  ({ label, backgroundColor = "primary" }) => {
    const buttonColors = () => {
      switch (backgroundColor) {
        case "secondary":
          return "bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 text-gray-800 dark:text-white";
        default:
          return "bg-red-600 hover:bg-red-700 text-white";
      }
    };

    return (
      <button
        className={`${buttonColors()} font-semibold text-md lg:text-lg rounded-full py-4 px-10 w-full`}
      >
        {label}
      </button>
    );
  }
);

export default Button;
