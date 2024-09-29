import React from "react";
import InputCatatan from "./InputCatatan";
import CatatanList from "./CatatanList";

function ItemBody({ notes, querySearch, addNote, onDelete, onArchive, onActive }) {
    const activeNotes = notes.filter(
      (note) =>
        note.archived === false &&
        note.title.toLowerCase().includes(querySearch.toLowerCase().trim())
    );
    const archiveNotes = notes.filter(
      (note) =>
        note.archived === true &&
        note.title.toLowerCase().includes(querySearch.toLowerCase().trim())
    );
    return (
      <section className="container mx-auto mt-10">
      <div className="bg-gradient-to-r from-green-50 to-green-100 px-8 py-12 rounded-lg shadow-lg transition-all duration-300">
        <InputCatatan addNote={addNote} />
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-pink-100 px-8 py-12 mt-5 rounded-lg shadow-lg transition-all duration-300">
        <h2 className="text-3xl font-bold mb-8 text-green-600">Catatan Aktif</h2>
        <CatatanList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />   
        </div>
        

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-8 py-12 rounded-lg shadow-lg transition-all mt-5 duration-300">
        <h2 className="text-3xl font-bold mb-8 text-gray-600">Arsip Catatan</h2>
        <CatatanList notes={archiveNotes} onDelete={onDelete} onActive={onActive} />
        </div>
        
        
      </section>
    );
  }

export default ItemBody
