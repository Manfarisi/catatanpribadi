// HapusCatatan.jsx
import React from "react";

function HapusCatatan({ id, onDelete }) {
  return (
    <div className="flex justify-center">
    <button
      onClick={() => onDelete(id)}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
    >
      Hapus
    </button>
    </div>
  );
}

export default HapusCatatan;
