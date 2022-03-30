import './App.css';
import Profil from './Profil.js'
import Login from './Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/profil' element={<Profil />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
