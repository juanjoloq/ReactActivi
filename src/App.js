import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './components/CardProducto';
import FichaAlumno from './components/FichaAlumno';
import FormularioX from './components/FormularioContacto';
import NoticiaDestacada from './components/NoticiaDestacada';
import ResumenCurso from './components/ResumenCurso';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
              <Route path="/" element={<ResumenCurso 
                NombreCurso="ADSO"
                Duracion="3Semanas"
                Instructor="Guillo"
              />}></Route>
              <Route path="/servicios" element={<Card 
                nombreP="juan" 
                imagen="https://unavatar.io/sindresorhus@gmail.com"
                Precio="10.000"
                descripcion="Maniac"
              />}></Route>
              <Route path="/acercade" element={<FichaAlumno
                nombre="Juan"
                programa="ADSO"
                ficha="2959811"
                jornada="Mañana"
              />}></Route>
              <Route path="/contacto" element={<FormularioX />}></Route>
              <Route path='/noticia' element={<NoticiaDestacada 
                titulo="TIEMPO"
                fecha="2020"
                contenido="QUEMADO HOMBRE MUERTO"
              />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
