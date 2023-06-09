"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import "./login.css"
import axios from "axios";
import Link from "next/link";
import Navbar from "../../components/Navbar/Navbar";
import"../styles.css"

const page = () => {

  const currentUser=JSON.parse(localStorage.getItem("currentUser") as any)
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const router=useRouter()

  useEffect(()=>{
    if(currentUser){
      router.push("/")
    }
  },[])

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
        localStorage.setItem("currentUser", JSON.stringify(user.data));
        console.log(JSON.parse(localStorage.getItem("currentUser") as string))
        router.push("/")
      }
    })
  }
  return (

    <div className='container-login'>
  <Navbar/>
  <div className='Left-login-form'>
  <h6 className='login-heading'>LOG IN TO YOUR ACCOUNT</h6>

 <div className='form-input-label'>
      <input  className='form-input-label'type="email"name="email" placeholder='E-MAIL' onChange={e=>setEmail(e.target.value)}/>
  </div>
  <div className='form-input-label'>
      <input  className='form-input-label' type="password" placeholder='PASSWORD' style={{"outline":"none",'border':"none"}} onChange={(e) => setPassword(e.target.value)}/>
  </div>

  <button  className="login-btn" onClick={handleSubmit}>LOGIN </button> <br></br>
  
  <a className="forgotpassword"href='#'>HAVE YOU FORGOTTEN YOUR PASSWORD?</a>

  </div>
 

<div className='right-login-form'>
<h4  id="need">NEED ACCOUNT ?</h4>
<Link  href="/signup" className="create-btn" type="button" >CREATE ACCOUNT </Link>
  </div>

</div>
  )
}

export default page;