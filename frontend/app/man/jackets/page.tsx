"use client"
import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import axios from "axios";
import LargeOneItem from "../../../components/OneItem/LargeOneItem"

const page = () => {

  const [items,setItems]=useState<any[]>([])

  useEffect(()=>{
    axios.post(`http://localhost:3001/items/searchCategory`,{gender: "male",type: "jacket"})
    .then(man=>{
      setItems(man.data)
    })
  })
  return (
    <div>
      <Navbar/>
      <div>
      {items.map((e,i)=>{
          return <LargeOneItem key={i} image={e.image} name={e.name} price={e.price} />
        })}
      </div>
    </div>
  );
};

export default page;