import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const ItemDetail = ({producto}) => {

    const {agregarAlCarrito} = useContext(CartContext);


  return (
    <div className='producto'>
    <img id="product-img"src={producto.imagen}/>
    <h2 id="product-name">{producto.nombre}</h2>
    <h3 id="product-info">{producto.descripcion}</h3>
    <p id="price">USD$ {producto.precio}</p>
    <button class="info-button" onClick={()=>agregarAlCarrito(producto)}>Comprar</button>
 </div>
  )
}

export default ItemDetail
