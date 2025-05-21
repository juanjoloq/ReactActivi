import React from "react";
import PaginaLayout from "./PaginaLayout";

function ResumenCurso({ NombreCurso, Duracion, Instructor }) {
    return (
        <PaginaLayout>
            <div className="d-flex justify-content-center align-items-center" >
                <div className="card my-3" style={{ maxWidth: "400px", width: "100%" }}>
                    <div className="card-body">
                        <h5 className="card-title">{NombreCurso}</h5>
                        <p className="card-text"><strong>Duración:</strong> {Duracion}</p>
                        <p className="card-text"><strong>Instructor:</strong> {Instructor}</p>
                    </div>
                </div>
            </div>
        </PaginaLayout>
    );
}

export default ResumenCurso;
