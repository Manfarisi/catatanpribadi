// ContenCatatan.jsx
import React from "react";

function ContenCatatan({ title, body, date }) {
  return (
    <div className="note-item__content">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">{date}</p>
      <p className="text-gray-700 mb-2">{body}</p>
    </div>
  ); 
}

export default ContenCatatan;
