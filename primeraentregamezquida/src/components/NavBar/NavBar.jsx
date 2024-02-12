import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navContainer'>

      <Link to={'/'}>

        <image></image>
      </Link>



      <ul>

        <li>

          <NavLink to={'/'}>Inicio</NavLink>

        </li>

        <li>

          <NavLink to={'categoria/Disfraces'}>Disfraces</NavLink>

        </li>

        <li>

          <NavLink to={'categoria/Accesorios'}>Accesorios</NavLink>

        </li>



      </ul>



    </div>
  )
}

export default Navbar