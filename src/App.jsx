import { useState } from "react"
import Navbar from "./components/Navbar"
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  const [route,setRoute] = useState('home');
  const [cart,setCart] = useState([]);

  return (
    <div className="App">
      <Navbar route={setRoute}/>
      {route=='home'? <Home cart={cart} setCart={setCart} />:<Cart cart={cart}/>}
    </div>
  )
}

export default App
