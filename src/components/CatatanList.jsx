// CatatanList.jsx
import React from "react";
import ItemCatatan from "./ItemCatatan";

function CatatanList({ notes, onActive, onArchive, onDelete }) {
  if (notes.length === 0) {
    return (
      <p className="text-gray-500 italic text-center mt-5">
        Tidak ada catatan
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {notes.map(note => (
        <ItemCatatan
          key={note.id}
          onDelete={onDelete}
          onActive={onActive}
          onArchive={onArchive}
          {...note}
        />
      ))}
    </div>
  );
}

export default CatatanList;
