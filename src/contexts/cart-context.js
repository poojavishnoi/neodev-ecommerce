import { useEffect, createContext, useReducer, useContext } from "react";

const cartContext = createContext(null);

const CartContextProvider = ({ children }) => {
  const reducerFunction = (state, action) => {

    switch (action.type) {
      case "ADD_TO_CART":
        let index = state.cart.findIndex((ele) => ele.id === action.payload.id)
        if(index == -1) 
        return {
          ...state,
          totalPrice: Number(state.totalPrice) + Number(action.totalPrice),
          itemCount: state.itemCount + 1,
          cart: index == -1 ? [ ...state.cart, {...action.payload}] : [...state.cart]
        };

      case "QUANTITY_INCREMENT":
        return {
          ...state,
          totalPrice: Number(state.totalPrice) + Number(action.totalPrice),
          qty: state.qty + 1,
        };

        case "QUANTITY_DECREMENT":
          return {
            ...state,
            totalPrice: Number(state.totalPrice) - Number(action.totalPrice),
            qty: state.qty - 1,
          }

      case "REMOVE_FROM_CART":
        return {
          ...state,
          totalPrice: Number(state.totalPrice) - Number(action.totalPrice),
          cart: state.cart.filter((c) => c.id !== action.payload.id),
          itemCount: state.itemCount - 1,
        };
      default:
        return { state };

    }


  };

  const [state, dispatch] = useReducer(reducerFunction, {
    totalPrice: 0,
    cart: [],
    itemCount: 0,
    qty: 1,
  });

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => useContext(cartContext);

export { CartContextProvider, useCart };
