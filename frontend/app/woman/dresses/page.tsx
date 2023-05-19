import { useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import axios from "axios";




const page = () => {
  useEffect(()=>{
    axios.get(`localhost:3001/`)
    .then(Help=>{
      setItems(Help.data)
    })
  },[query])
  return (
    <div>
      <Navbar/>
    </div>
  );
};

export default page;