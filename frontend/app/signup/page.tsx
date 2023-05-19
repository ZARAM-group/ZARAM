"use client"
  
import { useState } from "react";
import axios from "axios"
import "./signup.css"

const page = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [fName,setFname]=useState("")
  const [lName,setLname]=useState("")

  const handleSubmit=()=>{
    const logUser={
      email: email,
      pass: password,
      fName: fName,
      lName: lName,
      isAdmin: false,
      cart: []
    }
    axios.post("http://localhost:3001/user/signup",logUser)
    .then(user=>{
      if(user.data==="Email Already Exists"){
        alert("Email Already Exists")
      }
      else{
        alert("welcome to ZARA")
      }
    })
  }

  return (
   
    <div>
      <div className="signup-container">
        <h6>LOG INTO YOUR ACCOUNT</h6>
        <input type="email" placeholder="E-MAIL" onChange={e=>setEmail(e.target.value)}/>
        <input type="password" placeholder="PASSWORD" onChange={e=>setPassword(e.target.value)}/>
        <input type="text" placeholder="NAME" onChange={e=>setFname(e.target.value)}/>
        <input type="text" placeholder="SURNAME" onChange={e=>setLname(e.target.value)}/>
        <button onClick={handleSubmit}>LOG IN</button>
      </div>

    </div>

    


   )
}

export default page;