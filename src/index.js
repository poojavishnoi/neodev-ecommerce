import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartContextProvider } from "./contexts/cart-context";
import { WishListContextProvider } from "./contexts/wishlist-context";
import { FilterContextProvider } from "./contexts/filter-context";

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <WishListContextProvider>
        <FilterContextProvider>
          <App />
        </FilterContextProvider>
      </WishListContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
