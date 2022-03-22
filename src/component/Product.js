import "./product.css";
import { useCart } from "../contexts/cart-context";
import Rating from "./Rating";
import { useWishList } from "../contexts/wishlist-context";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const navigate = useNavigate();
  const data = props.data;
  const { state, dispatch } = useCart();
  const { wishListDispatch } = useWishList();

  return (
    <div className="product_item">
      <img className="img_responsive" src={props.img} alt=""></img>
      <div className="item_desc">
        <h3 className="item_desc_heading">{props.name}</h3>
        <p>{props.type}</p>
        <p>Rs: {props.price}</p>
      </div>

      <div className="rating">
        <Rating rating={props.rating} />
      </div>

      <div>
        <button
          className="btn wishlist_btn primary_solid_btn"
          type="submit"
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              totalPrice: props.price,
              payload: props,
            });
          }}
        >
          Add to cart
        </button>

        <button
          className="btn wishlist_btn secondary_solid_btn"
          type="submit"
          onClick={() => {
            wishListDispatch({ type: "ADD_TO_WISHLIST", payload: props });
          }}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}

export default Product;
