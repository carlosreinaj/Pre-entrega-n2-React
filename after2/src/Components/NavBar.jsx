import CartWidget from "./CartWidget/CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h1>Ecommerce</h1>
        <section>
            <Link to= {"/category/cocina"}>Cocina</Link>
            <Link to= {"/category/herramientas"}>Herramientas</Link>
            <Link to= {"/category/aires"}>Aires</Link>
        </section>
        <CartWidget />
    </nav>
  )
}

export default NavBar