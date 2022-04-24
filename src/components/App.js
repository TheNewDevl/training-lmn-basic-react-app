import { useEffect, useState } from "react";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from '../assets/logo.png'
import Footer from "./Footer";
import '../styles/Layout.css'
const lsCart = JSON.parse(localStorage.getItem('cart'))

function App() {

  const [cart, updateCart] = useState(lsCart ? lsCart : [])

  const [catState, updateCatState] = useState('')

  //update localstorage when cart state change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle, Logo" className='lmj-logo' />
        <h1 className="lmj-title">La maison de la Jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart catState={catState} updateCatState={updateCatState} cart={cart} updateCart={updateCart} />
        <ShoppingList catState={catState} updateCatState={updateCatState} cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
