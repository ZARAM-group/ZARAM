"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import "./cart.css"
import OneItem from "../../components/OneItem/OneItem";

const page = () => {

  const currentUser=JSON.parse(localStorage.getItem("currentUser") as any)
  const [items,setItems]=useState([])

  console.log(currentUser.id)
  useEffect(()=>{
    axios.get(`http://localhost:3001/items/cartItems/${currentUser.id}`)
    .then(result=>setItems(result.data))
  },[])

  return (
    <div>
      <Navbar showCart={false} showOffcanvas={false} showSearch={false}/>
      <div id="cart-container">
          <button className="search-gender">CART</button>
          <button className="search-gender">FAVORITES</button>
        </div>
        <div id="cart-image">
          {currentUser.cart.length===0 && <><div style={{marginLeft: "150px", marginBottom: "40px"}}><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="inherit" stroke="inherit"><path d="m3.146 3.854 25 25 .708-.707-25-25-.708.707ZM27.5 7.7v16.547l1 1V6.7H9.953l1 1H27.5ZM3.5 6.753V25.3h18.547l-1-1H4.5V7.753l-1-1Z"></path><path d="m14.953 11.7-1-1H24v1h-9.047ZM19.753 16.5l-1-1H24v1h-4.247ZM12.8 20.3h4.247l1 1H12.8v-1ZM24 20.747l-.447-.447H24v.447ZM7.8 16.8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7.8 21.6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path></svg></div>
          <p>YOUR SHOPPING BASKET IS EMPTY</p></>}
          {currentUser.cart.length!==0 && <div style={{display: "flex",flexDirection: "row"}}>
            {items.map((e: any,index)=>{
              return <OneItem key={index} name={e.name} price={e.price} image={e.image} showAdd={false}/> 
            })}
            </div>}
        </div>
    </div>
  );
};

export default page;