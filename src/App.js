import Home from "./component/Home";
import Header from "./component/Header";
import Cart from "./component/Cart";
import Signup from "./component/Signup";
import Wishlist from "./component/Wishlist";
import Login from "./component/Login";
import ProductList from "./component/ProductList";
import Footer from './component/Footer'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/productlist/:type" element={<ProductList/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
