import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greetings="¡Bienvenidos a MundoCerámica!"/>}/>
          <Route path='/Item/' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>    
  );
}

export default App;
