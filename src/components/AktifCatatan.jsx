import React from "react";

function AktifCatatan({ id, onArchive }) {
  return (
    <div className="flex justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() => onArchive(id)}
      >
        Arsip
      </button>
    </div>
  );
}

export default AktifCatatan;
