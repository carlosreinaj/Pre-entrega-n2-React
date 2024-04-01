
import ItemCount from "../ItemCounts/ItemCount"
import { Link } from 'react-router-dom'
import { useCart } from "../../context/cartContext";
import { useNotification } from "../../context/Notification";


const ItemDetail = ({id, name, img, category, price, description, stock}) => {
  const {addItem, isInCart} = useCart();
  const {setNotification} = useNotification();


  const handleAdd = (count) => {
    console.log("Agregar al carrito");
    const productObj = {
      id, name, price, quantity: count
    }
    addItem(productObj)
    setNotification("success", `Se agregaron ${count} de ${name}`)
  };
  return (
    <article>
      <h1>{name}</h1>
      <img src={img} style={{ width: 500 }} />
      <p>Categoria: {category}</p>
      <p>Descripcion: {description}</p>
      <h1>{price}</h1>
      <footer>
        {isInCart(id) ? (
          <Link to="/cart">Ir al carrito</Link>
        ) : (
          <ItemCount onAddc={handleAdd} stock={stock} />
        )}
      </footer>
    </article>
  );
}

export default ItemDetail