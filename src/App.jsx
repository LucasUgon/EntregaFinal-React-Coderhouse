import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Header } from './components/header/Header'
import { ItemListContainer } from './components/ItemListContainer';
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from './components/Carrito';
import { CartProvider } from './context/CartContext';
import Checkout from "./components/Checkout";


function App() {


 
  return (
    <CartProvider>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />      
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Carrito/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
 

  