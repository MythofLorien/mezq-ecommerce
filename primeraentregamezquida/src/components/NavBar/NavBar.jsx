import react from "react"
import "./estilosnav.css"

const NavBar = () => {

    return (

        <nav className="navbar">
            <div className="logo-container">
                <img src="logo.png" alt="Logo" className="logo" />
            </div>
            <ul className="nav-list">
                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="/" className="nav-link">Productos</a></li>
                <li><a href="/" className="nav-link">Clientes</a></li>
            </ul>
        </nav>



    )


}

export default NavBar;


