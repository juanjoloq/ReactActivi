import React from "react";
import PaginaLayout from "./PaginaLayout";

function NoticiaDestacada({ titulo, contenido, fecha }) {
  return (
    <PaginaLayout>
      <div className="d-flex justify-content-center align-items-center" >
        <article className="card my-4 shadow-sm text-center w-100" style={{ maxWidth: "600px" }}>
          <header className="card-header bg-dark text-white">
            <h2 className="card-title h5 mb-1">{titulo}</h2>
            <small>{fecha}</small>
          </header>
          <div className="card-body">
            <p className="card-text">{contenido}</p>
          </div>
        </article>
      </div>
    </PaginaLayout>
  );
}

export default NoticiaDestacada;
