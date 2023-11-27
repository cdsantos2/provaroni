import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


const Pagina3 = () => {
  return (
    <div>
      <h1></h1>
      {}
    </div>
  );
};


const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/pagina3">Pagina 3</Link>
        </li>
      </ul>
    </nav>
  );
};


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/pagina3" element={<Pagina3/>} />
//       </Routes>
//     </Router>
//   );
// };

export default Aba3;
