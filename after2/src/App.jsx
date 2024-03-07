import NavBar from "./Components/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {


  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greetings={"listado de productos"} />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer greetings={"listado de productos filtrados"} />}/>
        <Route path= "/detail/:productId" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
