import React from 'react'

import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {Admin,Customer} from './Collection';
export default function Postman() {

    const Navigate=useNavigate();
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
      


const handleUsernameChange = (e) => {
      setUsername(e.target.value);
         }

// function to update state of password with
// value enter by user in form
const handlePasswordChange = (e) => {
     setPassword(e.target.value);
   }

   const handleSubmit = (e) =>  {
        if(Admin.some(element=>
      element.username=== Username && element.password===Password))
    
     { console.log("user exist")
    alert("login successfully")
    Navigate('./Products');
    
    }
    else if (Customer.some(element=>
      element.username=== Username && element.password===Password))
    
     { console.log("user exist")
    alert("login successfully")
    Navigate('./Products');
    
    }

    else

  alert("login failed")
  e.preventDefault();
    
}

  return (
    <>
    <div >
    <header>
    <form onSubmit={(e) => { handleSubmit(e) }}>

      <h1> <u> Login Form</u></h1>
      
       <label>
            Username:
          </label>
          <input value={Username} required onChange={(e) => { handleUsernameChange(e) }} /><br />
          <label>
            Password:
          </label>
          <input type="password" value={Password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
          <input type="submit" value="Login" />
           </form>
          </header>
       </div>
    </>
  )
}

