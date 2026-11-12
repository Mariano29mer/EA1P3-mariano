import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Preguntas from './paginas/Preguntas';
import Productos from './paginas/Productos';
import Header from './componentes/header';
import Login from './paginas/Login';

function App() {
  return (
 <>
 <BrowserRouter>
    <Header />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/preguntas" element={<Preguntas />} />
     <Route path="/productos" element={<Productos />} />
     <Route path="/Login" element={<Login />} />
   </Routes>
 </BrowserRouter>
 </>
  )
}

export default App
