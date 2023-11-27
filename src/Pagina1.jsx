import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


const Pagina1 = () => {
  return (
    <div>
      <h1>Página 1</h1>
      {'Conteúdo da Página 1'}
    </div>
  );
};


const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/pagina">Página 1</Link>
        </li>
      </ul>
    </nav>
  );
};




export default Pagina1;