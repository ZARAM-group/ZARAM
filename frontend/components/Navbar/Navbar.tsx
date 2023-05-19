"use client"
import { useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Link from "next/link"
import bag from "../../assets/img/bag.png"
import menu from "../../assets/img/menu.png"
import logo from "../../assets/Logo.png"
import Search from "../Search/Search"
import Offcanvas from "../Offcanvas/Offcanvas"
import "./Navbar.css"
import "../../app/Styles.css"


interface NavbarProps {
  showSearch?: boolean
  showCart?: boolean
  showOffcanvas?: boolean
}

const Navbar: React.FC<NavbarProps> = ({showSearch,showCart,showOffcanvas}) => {

  const router=useRouter()
  const currentUser=JSON.parse(localStorage.getItem("currentUser") as any)

  const logout=()=>{
    localStorage.removeItem("currentUser")
  }

  useEffect(()=>{
    console.log(currentUser)
  },[currentUser])

  const goToCart=()=>{
    if(currentUser){
      router.push("/cart")
    }
    else{
      router.push("/login")
    }
  }

  return (
    <div>
      <Offcanvas/>
      <div id="pushImg">
        
        </div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
              {showOffcanvas!==false && <Image id='menu' src={menu} alt="..." data-bs-toggle="offcanvas" data-bs-target="#myOffcanvas"/>}
              <div className="container px-4 px-lg-5">
                  <Link href="/"><Image id="logo" className="navbar-brand" src={logo} alt="..." style={{cursor: "pointer"}}/></Link>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                      <ul className="navbar-nav ms-auto">
                          {showSearch!==false && <li className="nav-item"><Link href="/search"><Search/></Link></li>}
                          {currentUser!==null && <li className="nav-item"><Link className="nav-link" href="/login">LOG IN</Link></li>}
                          {!currentUser && <li className="nav-item"><Link className="nav-link" href="/" onClick={logout}>LOGOUT</Link></li>}
                          <li className="nav-item"><a className="nav-link" href="/help">HELP</a></li>
                          {showCart!==false && <li className="nav-item"><div className="nav-link" onClick={goToCart} style={{cursor: "pointer"}}><Image id="bag" src={bag} alt=".."/></div></li>}
                      </ul>
                  </div>
              </div>
          </nav>
    </div>
  );
};

export default Navbar;