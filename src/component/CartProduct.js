import "./cartproduct.css";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/cart-context";
import { useWishList } from "../contexts/wishlist-context";

function CartProduct(props) {
  const { state, dispatch } = useCart();
  const { wishListDispatch } = useWishList();

  return (
    <>
      <div className="cart_item">
        <Link to="/productlist">
          <img className="img_responsive" src={props.img} alt=""></img>
        </Link>
        <div className="item_desc">
          <h3 className="item_desc_heading">{props.name}</h3>
          <p>{props.type}</p>
          <p>
            Quantity:{" "}
            <button
              className="quantity_btn"
              onClick={() =>
                dispatch({
                  type: "QUANTITY_DECREMENT",
                  totalPrice: props.price,
                })
              }
            >
              -
            </button>{" "}
            {props.qty}{" "}
            <button
              className="quantity_btn"
              onClick={() =>
                dispatch({
                  type: "QUANTITY_INCREMENT",
                  totalPrice: props.price,
                })
              }
            >
              +
            </button>
          </p>
          <p>Rs: {props.price}</p>

          <button
            className="btn primary_solid_btn"
            type="submit"
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                totalPrice: props.price,
                payload: props,
              })
            }
          >
            Remove from cart
          </button>
          <button
            className="btn secondary_solid_btn"
            type="submit"
            onClick={() =>
              wishListDispatch({ type: "ADD_TO_WISHLIST", payload: props })
            }
          >
            Move to wishlist
          </button>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
