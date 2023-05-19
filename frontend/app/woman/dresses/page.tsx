import { useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import axios from "axios";




const page = () => {
  useEffect(()=>{
    axios.get(`localhost:3001/`)
    .then(women=>{
      setItems(women.data)
    })
  })
  return (
    <div>
      <Navbar/>
      <dev>
        
      </dev>
    </div>
  );
};

export default page;