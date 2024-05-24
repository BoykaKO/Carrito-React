import React from 'react'
import { Navbar } from './Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import { CarritoPage } from './pages/CarritoPage'
import { ComprasPage } from './pages/ComprasPage'
import { ProductosProvider } from './Contexts/ProductosProvider'
import { CarritoProvider } from './Contexts/CarritoProvider'



export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <Navbar></Navbar>
                <div className="container">
                    <Routes>
                        <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
                        <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
                        <Route path="/*" element={<Navigate to={"/"} ></Navigate>}></Route>

                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}
