import * as React from "react";

interface Props {
  label: String;
}

const Button: React.FC<Props> = React.memo(({ label }) => (
  <button className="rounded-full bg-red-600 hover:bg-red-700 text-white text-md lg:text-xl py-4 px-10 w-full md:w-1/3 lg:w-auto">
    {label}
  </button>
))

export default Button;
