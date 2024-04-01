import { useCart } from "../../context/cartContext";


const CartItem = ({id, name, quantity, price}) => {
    const {removeItem} = useCart
    const handleRemove = (id) =>{
        removeItem(id);
    };

  return (
    <article>
        <header>
            <h2>{name}</h2>
        </header>
        <section>
            <p>Cantidad: {quantity}</p>
            <p>Precio x Unidad: ${price}</p>
        </section>
        <footer>
            <p>Subtotal: ${price * quantity}</p>
            <buttom onClick={()=> handleRemove(id)}>🗑️</buttom>
        </footer>
    </article>
  )
}

export default CartItem