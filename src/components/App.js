import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from '../assets/logo.png'
import Footer from "./Footer";


function App() {
  return (
    <div>

      <Banner>
        <img src={logo} alt="La maison jungle, Logo" className='lmj-logo' />
        <h1 className="lmj-title">La maison de la Jungle</h1>
      </Banner>
      <Cart />
      <ShoppingList />
      <Footer />
    </div>
  );
}

export default App;
