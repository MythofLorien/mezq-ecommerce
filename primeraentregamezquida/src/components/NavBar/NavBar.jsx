import react from "react"
import "./estilosnav.css"

const NavBar = () => {

    return (

        <nav>
            <div className="logo-container">
                <img src="logo.png" alt="Logo" className="logo" />
            </div>
            <ul className="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/acerca">Productos</a></li>
                <li><a href="/contacto">Clientes</a></li>
            </ul>
        </nav>



    )


}

export default NavBar;


