"use client"
import { useState } from "react";
import Link from "next/link"
import WomanItems from "./womanItems";
import ManItems from "./manItems";
import KidsItems from "./kidsItems";

const Offcanvas = () => {

  const [chosen,setChosen]=useState("woman")

  return (
    <div>
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="myOffcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div style={{marginLeft: "30px"}}>
          <div id="gender-container">
            <button className="search-gender" onClick={()=>setChosen("woman")}>WOMAN</button>
            <button className="search-gender" onClick={()=>setChosen("man")}>MAN</button>
            <button className="search-gender" onClick={()=>setChosen("kids")}>KIDS</button>
          </div>
        </div>
        <div>
          {chosen==="woman" && <WomanItems/>}
          {chosen==="man" && <ManItems/>}
          {chosen==="kids" && <KidsItems/>}
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;