import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () =>{


    const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext);


    return (
        <div id="carrito">
            <h1>Detalle de la compra:</h1>
            {carrito.map((prod)=><h1 id="info-carrito">{prod.nombre}: ${prod.precio}</h1>)}
            { carrito.length > 0 ?
            <>
            <h2 id="price-carrito">Total: USD$ {calcularTotal()} </h2>
            <button className="info-button" onClick={vaciarCarrito}>Vaciar Carrito</button>
            <br />
            <br />
            <Link className="info-button" to="/checkout">Finalizar compra </Link>
            </>: 
            <h2 id="carrito-vacio">Carrito Vacio</h2>
            }
        </div>
    )
}

export default Carrito