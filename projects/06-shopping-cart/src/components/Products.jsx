import "./Products.css";
import { AddToCartIcon } from "./Icons.jsx";
import { useFilters } from "../hooks/useFilters.js";
import { useState } from "react";
import { products as initialProducts } from "../mocks/products.json";
import { useCart } from "../hooks/useCart.js";

export function Products() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {filteredProducts.map((product) => {
          const isProductInCart = checkProductInCart(product);
          const productInCartIndex = cart.findIndex(item => item.id === product.id)

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <h3>
                  {product.title} - <span>${product.price}</span>
                </h3>
              </div>
              <div>
                {isProductInCart ? (
                  <>
                    <button onClick={() => removeFromCart(product)} style={{color:'red'}}>-</button>
                    <div className="quantity">{cart[productInCartIndex].quantity}</div>
                    <button onClick={() => addToCart(product)} style={{color:'#09F'}}>+</button>
                  </>
                ) : (
                  <button onClick={() => addToCart(product)} style={{backgroundColor:'#09F'}}>
                    <AddToCartIcon />
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
