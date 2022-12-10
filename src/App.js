import './App.css'
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound.js';
import { CartContextProvider } from './context/cartContext';
import CartView from './components/CartView/CartView';
import Thanks from './components/Thanxs/Thanks';

function App() {
  return (
    <CartContextProvider>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greetings="¡Bienvenidos a MundoCerámica!"/>}/>
          <Route path= '/category/:categoryid' element={<ItemListContainer/>}/>
          <Route path= '/item/:id' element={<ItemDetailContainer/>}/>
          <Route path= '/cart' element={<CartView/>}/>
          <Route path= '/thanks/:orderid' element={<Thanks/>}/>
          <Route path= '*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter> 
    </CartContextProvider>
  );
}

export default App;
