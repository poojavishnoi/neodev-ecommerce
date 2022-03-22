import {createContext,useReducer, useContext} from 'react';

const wishListContext = createContext(null);

const WishListContextProvider = ({children}) => {

  const reducerFunction = (wishListState, action) => {
    switch(action.type){
      case "ADD_TO_WISHLIST":
        return {
          ...wishListState,
          itemCount: wishListState.itemCount + 1,
          wishlist: [...wishListState.wishlist, {...action.payload}]
               };
      case "REMOVE_FROM_WISHLIST":
        return {
          ...wishListState,
          wishlist: wishListState.wishlist.filter((c) => c.id !== action.payload.id),
          itemCount: wishListState.itemCount - 1,
        };
      default: 
        return {wishListState}
    }
  }

  const [wishListState ,wishListDispatch] = useReducer(reducerFunction, {wishlist: [], itemCount: 0})

  return(

    <wishListContext.Provider value={{wishListState, wishListDispatch}}>
      {children}
    </wishListContext.Provider>
  )

}
const useWishList = () => useContext(wishListContext);

export {WishListContextProvider, useWishList}