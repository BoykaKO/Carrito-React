import React from 'react'
import { CarritoContext } from './CarritoContext'
import { useReducer } from 'react'

const initialState = []
const compraReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case '[COMPRA] agregar':
      return [...state, action.payload]
    case '[COMPRA] aumentar':
      return state.map(item => {
        const cant = item.cantidad+1
        if (item.id === action.payload) return {... item,cantidad:cant}
        return item
      })
    case '[COMPRA] disminuir':
      return state.map(item => {
        const cant = item.cantidad-1
        if (item.id === action.payload && item.cantidad > 1) return {...item,cantidad:cant}
        return item
      })
    case '[COMPRA] disminuirCantidad':
      break;
    case '[COMPRA] eliminar':
      return state.filter(resp => resp.id !== action.payload)
    default:
      return state
  }
}
export const CarritoProvider = ({ children }) => {
  const [compras, dispatch] = useReducer(compraReducer, initialState)

  const agregarProducto = (producto) => {
    producto.cantidad = 1 //agrega una propiedad mas al objeto
    const action = {
      type: '[COMPRA] agregar',
      payload: producto
    }
    dispatch(action)
  }
  const eliminarProducto = (id) => {
    const action = {
      type: '[COMPRA] eliminar',
      payload: id
    }
    dispatch(action)
  }
  const aumentarProducto = (id) => {
    const action = {
      type: '[COMPRA] aumentar',
      payload: id
    }
    dispatch(action)
  }
  const disminuirProducto = (id) => {
    const action = {
      type: '[COMPRA] disminuir',
      payload: id
    }
    dispatch(action)
  }
  return (
    <CarritoContext.Provider value={{ compras, agregarProducto, eliminarProducto, aumentarProducto, disminuirProducto }}>{children}</CarritoContext.Provider>
  )
}
