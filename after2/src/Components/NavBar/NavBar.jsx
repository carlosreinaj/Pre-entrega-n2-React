import CartWidget from "../CartWidget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import "./NavBar.css"

// import { Context } from "../App"
// import { useContext } from "react"

const NavBar = () => {
  // const value = useContext(Context);
  // console.log(value)
  return (
    <nav className="NavBar">
        <Link to={"/"}>Ecommerce</Link>
        <section>
            <NavLink 
            to= {"/category/cocina"} 
            className={({isActive})=>(isActive ? "ActiveOption" : "Option")}>Cocina</NavLink>
            <NavLink to= {"/category/herramientas"} className={({isActive})=>(isActive ? "ActiveOption" : "Option")}>Herramientas</NavLink>
            <NavLink to= {"/category/aires"} className={({isActive})=>(isActive ? "ActiveOption" : "Option")}>Aires</NavLink>
        </section>
        <CartWidget />
    </nav>
  )
}

export default NavBar