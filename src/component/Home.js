import img1 from "../images/img2.jpg";
import dress from "../images/dress.jpg";
import tshirt from "../images/tshirt.jpg";
import shirt from "../images/shirtt.jpg";
import { data } from "./data";
import { Link } from "react-router-dom";
import "./home.css";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

function Home() {

  return (
    <div className="home_container">
      <div className="home_center_img">
        <img className="img_responsive" src={img1} alt="" />
        <div className="content">
          <h1>NeoDev Store</h1>
          <h6>Upto 40% off on all products</h6>
          <Link to={"productlist/all"}>
            <button className="primary_solid_btn btn">Shop Now</button>
          </Link>
        </div>
      </div>
      <div className="heading">
        <h2>CATEGORY</h2>
      </div>

      <div className="category_grid">
        <div className="category">
          <Link to="/productlist/dress">
            <img className="img_responsive" src={dress} alt=""></img>
            <h2 className="overlap">Dress</h2>
          </Link>
        </div>
        <div className="category">
          <Link to="/productlist/tshirt">
            <img className="img_responsive" src={tshirt} alt=""></img>
            <h2 className="overlap">Tshirt</h2>
          </Link>
        </div>
        <div className="category">
          <Link to="/productlist/shirt">
            <img className="img_responsive" src={shirt} alt=""></img>
            <h2 className="overlap">Shirt</h2>
          </Link>
        </div>
      </div>

      <div className="heading">
        <h2>NEW ARRIVALS</h2>
      </div>

      <div className="arrival_grid">
        <Splide 
          className="splide-slide"
          options={{
            perPage:4,
            autoplay: true,
            rewind: true,
            pagination: false,
            focus:"center",
            gap:"2rem",
            updateOnMove: true,
            breakpoints:{
              700: {
                destroy:true
              }
            }
          }}
        >
          {data.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <div className="item">
                    <img className="img_responsive" src={item.img} alt=""></img>
                  <div className="item_desc">
                    <h3 className="item_desc_heading">{item.name}</h3>
                    <p>{item.product}</p>
                    <p>Rs {item.price}</p>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Home;
