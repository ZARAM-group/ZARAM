"use client"
import { useState, useEffect } from "react";
import "./help.css";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";



interface Help{
  question?: string;
  answer?: number;
  keyword?: string
}

const Helpbar = () => {
  const [query,setQuery]=useState("")
  const [Help,setItems]=useState([])
  useEffect(()=>{
    axios.get(`localhost:3001/help/search?${query}`)
    .then(Help=>{
      setItems(Help.data)
    })
  },[query])
  // const fetchData = async (url) => {
  //   try {
  //     const response = await axios.get(url);
  //     setData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div>
      <Navbar/>
      <div className="form__group field">
        <h3>HOW CAN WE HELP YOU?</h3>
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          name="name"
          id="name"
          onChange={e=>setQuery(e.target.value)}
        />
      </div>
      <div id="items-container">
        {Help.map((e,i)=>{
          return <p>key={i} answer={e.answer} </p>
        })}
      </div>
    </div>
  );
};

export default Helpbar;






