import React from 'react';
import { NavLink } from 'react-router-dom';
import categories from "../../data/categorias.json";

export const NavBar = () => {



    return (
            <nav className='nav'>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <NavLink to="/" activeclassname="active" className="nave-link">Inicio</NavLink> 
                    </li>

                    {
                       categories.map((category)=>{
                        return (
                            <li className='nav-item'>
                               <NavLink to={`/category/${category.id}`} activeclassname="active" className="nave-link">{category.nombre}</NavLink>
                            </li>
                        )
                       }) 
                    }
                    
                </ul>
            </nav>
    )
}
   
 