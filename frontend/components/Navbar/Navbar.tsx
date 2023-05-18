import Image from "next/image"
import Link from "next/link"
import bag from "../../assets/img/bag.png"
import menu from "../../assets/img/menu.png"
import logo from "../../assets/Logo.png"
import Search from "../Search/Search"
import "../../app/styles.css"
import "./Navbar.css"


const Navbar = () => {
  return (
    <div>
      <div id="pushImg">
        </div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
              <Image id='menu' src={menu} alt="..." data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas"/>
              <div className="container px-4 px-lg-5">
                  <Image id="logo" className="navbar-brand" src={logo} alt="..." />
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                      <ul className="navbar-nav ms-auto">
                          <li className="nav-item"><Link href="/search"><Search/></Link></li>
                          <li className="nav-item"><Link className="nav-link" href="/login">LOG IN</Link></li>
                          <li className="nav-item"><a className="nav-link" href="/help">HELP</a></li>
                          <li className="nav-item"><a className="nav-link" href="#bag"><Image id="bag" src={bag} alt=".."/></a></li>
                      </ul>
                  </div>
              </div>
          </nav>
    </div>
  );
};

export default Navbar;