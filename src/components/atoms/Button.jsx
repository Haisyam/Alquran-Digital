import React from "react";

function Button({
  children,
  onClick,
  disabled,
  variant = "primary",
  className = "",
  icon,
}) {
  const baseStyles = "px-4 py-2 rounded-lg flex items-center";
  const variants = {
    primary: disabled
      ? "bg-gray-900 cursor-not-allowed"
      : "bg-black hover:bg-gray-900 border border-gray-700",
    icon: disabled
      ? "bg-gray-900 cursor-not-allowed p-2"
      : "bg-black hover:bg-gray-900 p-2 border border-gray-700",
    round: disabled
      ? "bg-gray-900 cursor-not-allowed p-3 rounded-full"
      : "bg-black hover:bg-gray-900 p-3 rounded-full border border-gray-700",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon && <span className={children ? "mr-2" : ""}>{icon}</span>}
      {children}
    </button>
  );
}

export default Button;
