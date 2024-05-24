import React, { useContext } from 'react'
import { Badge } from '@mui/material'
import {ShoppingCart} from '@mui/icons-material'
import "../styles/Navbar.css"
import { NavLink } from 'react-router-dom'
import { CarritoContext } from './Contexts/CarritoContext'


export const Navbar = () => {
    const{compras}=useContext(CarritoContext)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand" >TIENDA</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active" aria-current="page" >Productos</NavLink>
                            </li>
                        </ul>
                        <div className="nav-item">
                            <NavLink to="/carrito" className="nav-link">
                                <Badge badgeContent={compras.length} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
