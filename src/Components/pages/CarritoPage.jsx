import React from 'react'
import "../../styles/carrito.css"
import { CarritoContext } from '../Contexts/CarritoContext'
import { useContext } from 'react'
export const CarritoPage = () => {
  const { compras, eliminarProducto,aumentarProducto, disminuirProducto } = useContext(CarritoContext)
  const totalCompra=()=>{
    return `${compras.reduce((total,iterador)=>total+iterador.price*iterador.cantidad,0).toFixed(2)}$`
  }
  const confirmacion=()=>{
    print()
  }
  return (
    <>
      <div className="containerTable">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {compras.map(compra => (
              <tr key={compra.id}>
                <th >{compra.title}</th>
                <td>{compra.price}$</td>
                <td className='botones'>
                  <button className='btn btn-ouline-primary' onClick={()=>aumentarProducto(compra.id)}>+</button>
                  <button className='btn btn-primary'>{compra.cantidad}</button>
                  <button className='btn btn-ouline-primary'onClick={()=>disminuirProducto(compra.id)}>-</button>
                </td>
                <td><button className='btn btn-danger eliminar' onClick={() => eliminarProducto(compra.id)}>Eliminar</button></td>
              </tr>
            ))}
            <tr>
              <th >TOTAL</th>
              <td className='total'></td>
              <td className='total'>{totalCompra()}</td>
              <td className='total'></td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className='btn btn-primary btn-primary-confirm' disabled={compras.length < 1} onClick={()=>confirmacion()}>Comprar</button>
    </>

  )
}
