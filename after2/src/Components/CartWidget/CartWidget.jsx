import logo from '../../assets/logoMrshop.webp';
import { useCart } from '../../context/cartContext';
import { Link } from "react-router-dom";
import "./CartWidget.css"

const CartWidget = () => {
    const {totalQuantity} = useCart();
    return (
        <Link to="/cart" className="CartWidget">
        <img src={logo}
        style= {{width: 30}}
        alt="cart-widget"
        className= "CartImg" 
        />
        {totalQuantity}
        </Link>
    )
}

export default CartWidget;