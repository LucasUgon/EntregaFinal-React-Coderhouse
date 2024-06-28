import React from 'react'
import { NavBar } from './NavBar'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'



export const Header = () => {

    return (
        <header className='header'>
           <Link to="/"><h2 className='Brand' id='logo'>CeluStore</h2></Link>
            <NavBar/>
            <CartWidget/>
        </header>
    )
}
