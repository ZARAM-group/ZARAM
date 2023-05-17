"use client"
import { useState } from "react";
import "./login.css"
import axios from "axios";
import Link from "next/link"

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
     <div>
    <nav className="">
      <div className="flex justify-between items-center p-5">
        <div className="grid gap-1 grid-cols-2">
          <div>
            <Link href="/">
              
                <svg viewBox="0 0 100 80" width="25" height="25">
                  <rect width="70" height="5"></rect>
                  <rect y="30" width="70" height="5"></rect>
                  <rect y="60" width="70" height="5"></rect>
                </svg>
            
            </Link>
          </div>
        </div>
        <div className="left-logos">
          <div className="recherche">
            <Link href="/search">
              search
            </Link>
           
          </div>

          <Link href="/login">
            LOG IN
          </Link>
         
          <Link href="/help">
            AIDE
          </Link>
          
          <Link href="/cart">
            
              {" "}
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />{" "}
              </svg>
            
          </Link>
        </div>
      </div>
    </nav>
    <>

<div   className='container-login'>

{/* <label for="fname">First Name</label> */}
<div className='Left-login-form'>
<h3 className='login-heading'>LOG IN TO YOUR ACCOUNT</h3>
<div className='form-input-label'>
    <input  className='form-input-label'type="text" id="fname" name="email" placeholder='E-MAIL' onChange={(e) => setEmail(e.target.value)}/>
</div>
<div className='form-input-label'>
    <input  className='form-input-label' type="password" id="fname" name="password" placeholder='PASSWORD' style={{"outline":"none",'border':"none"}}  value={password} onChange={(e) => setPassword(e.target.value)}/>
</div>

<button  className="login-btn" onClick={handleSubmit}>LOGIN </button> <br></br>
<p>{}</p> <br></br>
<a className="forgotpassword"href='#'>HAVE YOU FORGOTTEN YOUR PASSWORD?</a>

</div>


<div className='right-login-form'>
<h4 >NEEED ACCOUNT</h4>
<Link  href="/signup" className="create-btn" type="button" >CREATE ACCOUNT </Link>
</div>

</div>
       </>
  </div>
  );
};

export default page;