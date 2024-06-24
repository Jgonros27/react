import { Products  } from './components/Products';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { FiltersProvider } from './context/filters.jsx';
import { Cart } from './components/Cart.jsx';
import { CartProvider } from './context/cart.jsx';

function App() {

  return (
    <FiltersProvider>
      <Header/>
      <CartProvider>
        <Cart/>
        <Products/>
      </CartProvider>
      <Footer/>
    </FiltersProvider>
  )
}

export default App
