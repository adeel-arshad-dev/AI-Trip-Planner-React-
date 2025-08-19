import React from 'react';
export default function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-1 py-2 rounded-2xl font-semibold shadow-md transition duration-300 
                  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white
                  hover:scale-105 hover:shadow-lg active:scale-95
                  focus:outline-none focus:ring-2 focus:ring-purple-400 ${className}`}
    >
      {children}
    </button>
  );
}
