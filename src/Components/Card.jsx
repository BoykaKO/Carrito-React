import React from 'react'
import { useState } from 'react'
import "../styles/card.css"
export const Card = ({ titulo, descripcion, imagen, precio,handleAgregar,handleEliminar,compras, producto }) => {
    const [added, setAdded] = useState(false)
    const Agregar = () => {
        setAdded(true)
        handleAgregar()
        
        
    }
    const Quitar = () => {
        setAdded(false)
        handleEliminar()
    }

    return (
        <div className='tarjeta'>
            <img className="imagen" src={imagen} alt="producto" className='tarjeta-imagen' />
            <div className='tarjeta-contenido'>
                <h3 className='tarjeta-titulo'>{titulo}</h3>
                <p className='tarjeta-descripcion'>{descripcion}</p>
                <p className='tarjeta-precio'>{precio}$</p>
                {added ? <button className='boton-quitar' onClick={() => Quitar()}>Quitar</button> : <button className='boton-agregar' onClick={() => Agregar()}>Añadir</button>}

            </div>


        </div>
    )
}
