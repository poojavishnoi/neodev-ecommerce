import CartProduct from "./CartProduct";
import "./wishlist.css";
import "./cart.css";
import { useCart } from "../contexts/cart-context";
import { useState } from "react";

function Cart() {
  const {
    state: { cart, totalPrice, qty},
  } = useCart();

  return (
    <>
      <h1>Cart</h1>

      <div className="cart_container">
        <div className="cart_main_container">

          {cart.map((cartItem) => (            
            <CartProduct
              name={cartItem.name}
              key={cartItem.id}
              img={cartItem.img}
              price={cartItem.price}
              type={cartItem.type}
              id={cartItem.id}
              qty={qty}
            />

          ))}
        </div>

        <div className="price_details_container">
          <h2>PRICE DETAILS</h2>
          <div className="inline_details">
            <p>Price (2 items)</p>
            <p>Rs: {totalPrice}</p>
            
          </div>

          <div className="inline_details">
            <p>Discount</p>
            <p>- Rs: 0</p>
          </div>

          <div className="inline_details">
            <p>Delivery Charge</p>
            <p>Rs: 0</p>
          </div>
          <hr />

          <div className="inline_details">
            <h3>Total Amount</h3>
            <h3>Rs: {totalPrice}</h3>
          </div>

          <hr />

          <p>You will save $10 on this order</p>
          <button className="btn primary_solid_btn">Place order</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
