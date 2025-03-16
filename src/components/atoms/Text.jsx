import React from "react";

function Text({ children, variant = "body", className = "" }) {
  const variants = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-arabic",
    body: "text-base",
    arabic: "text-2xl font-bold font-arabic text-right",
    latin: "text-gray-400",
    translation: "text-gray-300",
  };

  return <p className={`${variants[variant]} ${className}`}>{children}</p>;
}

export default Text;
