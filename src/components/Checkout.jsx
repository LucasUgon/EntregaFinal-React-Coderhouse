import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';


const Checkout = () => {
  
    const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext);
    const  {register , handleSubmit} = useForm();
    let [docId, setDocId] = useState("");
    
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal()
        }
        
        const pedidosRef= collection(db , "pedidos");
        
        addDoc (pedidosRef, pedido)
            .then((doc) => setDocId(doc.id))

    }
  
    if(docId){
        return (
            <div id='checkout-end'>
            <h2>Muchas gracias por tu compra</h2>
            <p>Tu id de compra es: {docId}</p>
            </div>
        )
    }
  
    return (
    <div>
      <form onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder='Ingrese su nombre' {...register("nombre")}/>
        <input type="email" placeholder='Ingrese su mail' {...register("email")}/>
        <input type="number" placeholder='Ingrese su telefono'{...register("number")}/>
        <button id='checkout-button' type='submit'>Finalizar Compra</button>
      </form>
    </div>
  )
}


export default Checkout
