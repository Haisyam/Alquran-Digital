import React, { useState } from "react";

function Input({ value, onChange, suggestions, onSelectSuggestion }) {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Cari kota..."
        className="w-full p-3 rounded-lg bg-black text-white border border-gray-700 focus:outline-none focus:border-white"
      />
      {suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-black border border-gray-700 rounded-lg shadow-lg">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => onSelectSuggestion(suggestion)}
              className="p-3 cursor-pointer hover:bg-gray-700"
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Input;
