import react from 'react';
import { Link } from 'react-router';

function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/tareas"}>Tareas</Link>
      <Link to={"/contacto"}>Contacto</Link>
      
    </div>
  );
}

export default Navbar;