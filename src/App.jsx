
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from './components/header/Header'
import { ItemListContainer } from './components/ItemListContainer';
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {

  const [numerito, setNumerito] = useState (3);

  return (
   <BrowserRouter>
      <Header numerito={numerito} setNumerito={setNumerito}/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />      
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
      </Routes>
   </BrowserRouter>

  )
}

export default App
 

