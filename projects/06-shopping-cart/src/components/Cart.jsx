import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import "./Cart.css";
import { useCart } from "../hooks/useCart";

export function Cart() {
  const cartCheckBoxId = useId();

  const { addToCart, cart, removeFromCart, clearCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />

      <aside className="cart">

        {cart.length > 0 ? 
        <>
        <ul>
          {cart.map((product) => {
            console.log(product);
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> -{" "}
                  <span>${product.price}</span>
                </div>

                <footer>
                  <button
                    onClick={() => removeFromCart(product)}
                    style={{ color: "red" }}
                  >
                    -
                  </button>
                  <div className="quantity">{product.quantity}</div>
                  <button
                    onClick={() => addToCart(product)}
                    style={{ color: "#09F" }}
                  >
                    +
                  </button>
                </footer>
              </li>
            );
          })}
        </ul>

        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
        </>
        :
        <h2 style={{marginTop:'50px'}}>El carrito está vacío</h2>
        }
      </aside>
    </>
  );
}
