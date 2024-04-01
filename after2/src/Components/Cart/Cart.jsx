import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"

const Cart = () => {
  const {cart, clearCart, getTotal, totalQuantity} = useCart();
  const total = getTotal();

  if(totalQuantity === 0){
    return <h1>No hay items en el carrito</h1> 
  }
  return(
    <div>
      <h1>Cart</h1>
      {cart.map((item)=>(
        <CartItem key={item.id} {...item}/>
      ))}
      <h3>Total {total}</h3>
      <div>
        <buttom className="Btn" onClick={()=>clearCart()}>Limpiar Carrito</buttom>
      </div>
      <Link to="/CheckOut" className="Btn">Checkout</Link>
    </div>
  )
}

export default Cart