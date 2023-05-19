"use client"
  
import { useState } from "react";
import axios from "axios"
import "./signup.css"
import Navbar from "../../components/Navbar/Navbar"
import"../styles.css"

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
   
    <div className='container-login'>
    <Navbar/>
    <div className='Left-login-form'>
    <h6 className='login-heading'>CREATE AN ACCOUNT</h6>
  
   <div className='form-input-label'>
        <input  className='form-input-label'type="email"name="email" placeholder='E-MAIL' onChange={e=>setEmail(e.target.value)}/>
    </div>
    <div className='form-input-label'>
        <input  className='form-input-label' type="password" placeholder='PASSWORD'  onChange={(e) => setPassword(e.target.value)}/>
    </div>
  <div className='form-input-label'>
        <input  className='form-input-label'type="Name"name="fName" placeholder='FirstName' onChange={e=>setFname(e.target.value)}/>
    </div>
  <div className='form-input-label'>
        <input  className='form-input-label'type="email"name="lname" placeholder='LastName' onChange={e=>setLname(e.target.value)}/>
    </div>
    <button  className="login-btn" onClick={handleSubmit}>CREATE ACCOUNT</button> <br></br>
    
  
    </div>
   </div>
   )
}

export default page;