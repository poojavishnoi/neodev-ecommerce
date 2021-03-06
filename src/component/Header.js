import "./header.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import {useCart} from '../contexts/cart-context'
import { useWishList } from "../contexts/wishlist-context";
import {useFilter} from '../contexts/filter-context'

function Header() {

  const {state} = useCart();
  const {wishListState} = useWishList();
  const { filterState, filterDispatch} = useFilter();
  const [query, setQuery] = useState("")

  return (
    <div className="navigation_main_container">
      <div className="nav_section">
        <div className="burger">
          <i className="fas fa-bars"></i>
        </div>
        <div className="brand_logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="brand_title">
          <Link to="/">NeoDev</Link>
        </div>
      </div>

      <div className="nav_section">
        <div className="nav_searchbar">
          <span>
            <i className="fa fa-search fa" onClick={() => filterDispatch({type: "SEARCH", payload:query})}></i>
          </span>
          <input type="text" placeholder="Type to search" value={query} onChange={(e) => setQuery(e.target.value)}/>
        </div>
        <div className="nav_icons_container ">
          <div className="nav_icon profile_icon ">
            <Link className="nav_icon " to="/signup">
              <span>
                <i className=" fas fa-user-circle fa"></i>
              </span>

              <span className="nav_icon_name">Profile
              </span>
            </Link>
          </div>
          <div className="nav_icon">
            <Link className="nav_icon badge" to="/cart">
              <span>
                <i className="cart_icon fas fa-shopping-cart fa"></i>
                <span className="icon_badge">{state.itemCount}</span>

              </span>

              <span className="nav_icon_name">Cart</span>
            </Link>
          </div>
          <div className="nav_icon">
            <Link className="nav_icon badge" to="/wishlist">
              <span>
                <i className=" wishlist_icon fas fa-heart fa"></i>
                <span className="icon_badge">{wishListState.itemCount}</span>
              </span>

              <span className="nav_icon_name">Wishlist</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
