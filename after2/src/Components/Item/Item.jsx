import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({id, name, img, category, price}) => {
  return (
    <article className="CartItem">
        <header className="Header">
          <h1>{name}</h1>
        </header>
        <picture>
          <img className="ItemImg" src={img} style={{width: 100}} />
        </picture>
        <section>
          <p className="info">Categoria: {category}</p>
          <p className="info">${price}</p>
        </section>
        <footer className="ItemFooter">
        <Link to= {`/detail/${id}`} className="Option">Ver Detalle</Link>
        </footer>
    </article>
  )
}

export default Item