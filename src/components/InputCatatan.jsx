// AddNote.jsx
import React, { useState } from "react";

function AddNote({ addNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className="px-5 sm:px-24 py-7 md:py-14 bg-purple-100 rounded-lg shadow-md mb-6">
      <div className="container">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Judul
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={50} 
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Masukkan judul catatan (maksimal 50 karakter)"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
          Isi
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Masukkan isi catatan"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Tambah
        </button>
      </div>
      </div>
    </form>
  );
}

export default AddNote;
