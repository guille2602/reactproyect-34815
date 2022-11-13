import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound.js';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer greetings="¡Bienvenidos a MundoCerámica!"/>}/>
      <Route path= '/category/:categoryid' element={<ItemListContainer/>}/>
      <Route path= '/item/:id' element={<ItemDetailContainer/>}/>
      <Route path= '*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter> 
  );
}

export default App;
