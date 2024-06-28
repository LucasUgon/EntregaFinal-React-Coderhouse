import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


export const Item = ({ producto }) => {

    const {agregarAlCarrito} = useContext(CartContext);


    return (
        <div className='producto'>
            <img id="product-img"src={producto.imagen}/>
            <h2 id="product-name">{producto.nombre}</h2>
            <p id="price">USD$ {producto.precio}</p>
            <Link class="info-button" to={`/item/${producto.id}`}>Ver más</Link>
            &nbsp;
            <button class="info-button" onClick={()=>agregarAlCarrito(producto)}>Comprar</button>
         </div>

    )

}