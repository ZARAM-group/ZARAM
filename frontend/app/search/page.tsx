"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Gender from "../../components/Gender/Gender";
import Navbar from "../../components/Navbar/Navbar";
import OneItem from "../../components/OneItem/OneItem";
import "./Search.css"

interface items{}

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
        {items.map((e,index)=>{
          <OneItem key={index}/>
        })}
      </div>
    </div>
  );
};

export default page;