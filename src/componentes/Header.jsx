import { Link } from 'react-router-dom';
import { UserRound } from 'lucide-react';
import './stylesheader.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Preguntas">Preguntas</Link>
        <Link to="/Productos">Productos</Link>
        <Link to="/login"><UserRound size ={25}/>Login</Link>
      </nav>
    </header>
  );
}

export default Header;