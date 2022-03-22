import WishlistProduct from "./WishlistProduct"
import './wishlist.css'
import { useWishList } from "../contexts/wishlist-context"

function Wishlist (){
  const {
    wishListState: { wishlist },
  } = useWishList();
  console.log(wishlist);

  return(
    <div>
      <h1>My Wishlist</h1>
      <div className="wishlist_container">
      {
        wishlist.map((wishlistItem) => {
         return <WishlistProduct id={wishlistItem.id} img={wishlistItem.img} name={wishlistItem.name} type={wishlistItem.type} price={wishlistItem.price} />
        })
      }
      </div>
    </div>
  )
}

export default Wishlist