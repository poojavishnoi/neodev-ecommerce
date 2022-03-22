import { useCart } from '../contexts/cart-context';
import { useWishList } from '../contexts/wishlist-context';
import './wishlistproduct.css';

function WishlistProduct(props) {
  
  const {dispatch} = useCart();
  const {wishListDispatch} = useWishList()

  return (
    <div className="item">
      <div className="like_icon">
      <i className="fa-solid fa fa-heart like_solid" onClick={() => wishListDispatch({type:"REMOVE_FROM_WISHLIST", payload:props})}></i>
      </div>
        <img className="img_responsive" src={props.img} alt=""></img>
      <div className="item_desc">
        <h3 className="item_desc_heading">{props.name}</h3>
        <p>{props.type}</p>
        <p>Rs: {props.price}</p>
      </div>

      <div>
      <button className="btn wishlist_btn primary_solid_btn" type="submit"
      onClick={() => {
        dispatch({type:"ADD_TO_CART", payload: props});
      }}
      >Move to cart</button>
      </div>
    </div>
  );
}

export default WishlistProduct;
