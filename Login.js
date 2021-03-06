import React from 'react'
import { useState } from 'react';
//import Signup from './Signup';
import {useNavigate} from 'react-router-dom'
import './login.css';
import {email1 } from './Signup'
import { loginHandler } from './Actions';
import { useSelector,useDispatch } from 'react-redux';


export default function Login() { 
  const loginAuth=useSelector((state)=>state.changeNumber);
  const Dispatch=useDispatch();
  const Navigate=useNavigate();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
 
  
  const handleEmailChange = (e) => {
        setEmail(e.target.value);
           }

// function to update state of password with
// value enter by user in form
const handlePasswordChange = (e) => {
       setPassword(e.target.value);
     }

     const handleSubmit = (e) =>  {
      if (email===email1 || email==='asha@yahoo.com') {
        
        alert("login succesfully" +email1 +"auth="+loginAuth);
        Dispatch(loginHandler());
        
      Navigate('./Main');

       
      } else {
        
            alert("Log in failed" +email1);
            
      }
     e.preventDefault();
    }


  return (
    <>
    <div   className='Login'  >
    
      <header className="login-header">
    <form onSubmit={(e) => { handleSubmit(e) }}>

      <h1> <u> Login Form</u></h1>
       <label>
            Email:
          </label>
          <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
          <label>
            Password:
          </label>
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
         
          <input type="submit" value="Login" />
 
          </form>
        </header>
    </div>
    </>
  )
}