import React from "react";

function ArsipCatatan({ id, onActive }) {
  return (
    <button
      onClick={() => onActive(id)}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
    >
      Aktifkan
    </button>
  );
}

export default ArsipCatatan;
