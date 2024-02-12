import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'


const Item = ({ producto }) => {


  return (

    <Link to={`/detalle/${producto.id}`}>

      <div key={producto.id} className='container'>
        <h1>{producto.nombre}</h1>
        <img src={producto.img} alt={producto.nombre} />
      </div>

    </Link>

  )
}

export default Item;