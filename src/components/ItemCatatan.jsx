// ItemCatatan.jsx
import React from "react";
import HapusCatatan from "./HapusCatatan";
import ArsipCatatan from "./ArsipCatatan";
import AktifCatatan from "./AktifCatatan";
import ContenCatatan from "./ContenCatatan";

function ItemCatatan({ id, title, body, createdAt, archived, onArchive, onActive, onDelete }) {
  const formattedDate = new Date(createdAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="bg-white shadow-lg rounded-lg p-5 mb-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <ContenCatatan title={title} body={body} date={formattedDate} />

      <div className="flex justify-end mt-4 space-x-2">
        <HapusCatatan id={id} onDelete={onDelete} />
        {archived ? (
          <ArsipCatatan id={id} onActive={onActive} />
        ) : (
          <AktifCatatan id={id} onArchive={onArchive} />
        )}
      </div>
    </div>
  );
}

export default ItemCatatan;
