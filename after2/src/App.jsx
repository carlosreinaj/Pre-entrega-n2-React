import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
// import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { CartProvider } from "./context/cartContext"
import { NotificationProvider } from "./context/Notification"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./Components/Cart/Cart"
import CheckOut from "./Components/CheckOut/CheckOut"

function App() {


  return (
    <>
    <BrowserRouter>
    <NotificationProvider>
      <CartProvider >
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greetings={"listado de productos"} />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer greetings={"listado de productos filtrados"} />}/>
        <Route path= "/detail/:productId" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      </CartProvider>
      </NotificationProvider>
    </BrowserRouter>
    
    </>
  )
}

export default App
