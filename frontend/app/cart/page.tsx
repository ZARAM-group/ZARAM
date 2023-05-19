import Navbar from "../../components/Navbar/Navbar";
import "./cart.css"

const page = () => {
  return (
    <div>
      <Navbar showCart={false} showOffcanvas={false} showSearch={false}/>
      <div id="cart-container">
            <button className="search-gender">CART</button>
            <button className="search-gender">FAVORITES</button>
          </div>
    </div>
  );
};

export default page;