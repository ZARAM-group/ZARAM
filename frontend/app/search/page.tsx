"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Gender from "../../components/Gender/Gender";
import Navbar from "../../components/Navbar/Navbar";
import OneItem from "../../components/OneItem/OneItem";
import "./Search.css"

interface items{
  name?: string;
  price?: number;
  image?: string
}

interface OneItem{
  name: string;
}


const page = () => {

  const [query,setQuery]=useState("")
  const [items,setItems]=useState([])

  useEffect(()=>{
    axios.get(`http://localhost:3001/items/search?keyword=${query}`)
    .then(items=>{
      setItems(items.data)
    })
  },[query])

  return (
    <div>
      <Navbar showSearch={false}/>
      <div id="search-gender-container">
        <Gender/>
        <input type="text" onChange={e=>setQuery(e.target.value)} placeholder="SEARCH FOR AN ITEM, COLOR, COLLECTION..."/>
      </div>
      <div id="items-container">
        {items.map((e,i)=>{
          return <OneItem key={i} name={e.name} price={e.price} image={e.image} />
        })}
      </div>
    </div>
  );
};

export default page;