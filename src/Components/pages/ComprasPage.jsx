
import { useContext } from 'react'
import { ProductosContext } from '../Contexts/ProductosContext'
import { Card } from '../Card'
import "../../styles/compras.css"
import { CarritoContext } from '../Contexts/CarritoContext'

export const ComprasPage = () => {
  const { productos } = useContext(ProductosContext)
  const {compras,agregarProducto,eliminarProducto} = useContext(CarritoContext)
  
  const handleAgregar = (compra)=>{
    agregarProducto(compra)
  }
  const handleEliminar = (id)=>{
    eliminarProducto(id)

  }
  return (
    <>
      <h2>Productos</h2>
      <hr />
      <div className="containerCards">
        {productos.map(producto =>
        (
          <Card
            key={producto.id}
            titulo={producto.title}
            descripcion={producto.description}
            imagen={producto.image}
            precio={producto.price}
            handleAgregar={()=>handleAgregar(producto)}
            handleEliminar={()=>handleEliminar(producto.id)}
            compras={compras}
            producto={producto}

          ></Card>
        )

        )}
      </div>


    </>
  )
}
