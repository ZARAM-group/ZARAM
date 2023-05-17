"use client"
import { useState } from "react";
import "./login.css"
import axios from "axios";

const page = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleSubmit=()=>{
    const credentials={
      email: email,
      pass: password
    }
    axios.post("http://localhost:3001/user/login",credentials)
    .then(user=>{
      if(user.data==="Email Doesn't Exist"){
        alert("email doesn't exist")
      }
      else if(user.data==="Password Incorrect"){
        alert("Password Incorrect")
      }
      else{
        localStorage.setItem("currentUser",user.data)
        console.log(localStorage.getItem("currentUser"))
      }
    })
  }
  return (
    <div className="login-container">
      <h6>LOG INTO YOUR ACCOUNT</h6>
      <input type="email" placeholder="E-MAIL" onChange={e=>setEmail(e.target.value)}/>
      <input type="password" placeholder="PASSWORD" onChange={e=>setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>LOG IN</button>
    </div>
  );
};

export default page;