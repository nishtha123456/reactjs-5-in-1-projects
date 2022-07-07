import React, { useState } from 'react';


import './Signup.css'
let email1;
export default function Signup() {
  const [name, setName] = useState('');
 // const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
//const[email1,setemail1]=useState('')
  // function to update state of name with
  // value enter by user in form
  const handleChange = (e) => {
    setName(e.target.value);
  }
  // function to update state of age with value
  // enter by user in form
  // function to update state of email with value
  // enter by user in form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    email1=email
  }
  // function to update state of password with
  // value enter by user in form
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  // function to update state of confirm password
  // with value enter by user in form
  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }
  // below function will be called when user
  // click on submit button .
  const handleSubmit = (e) => {
    if (password !== confPassword) {
      alert("password not math");
      console.log("password Not Match");
    } else {
      alert("Account created succesfully")
      console.log('A form was submitted with Name :"' + name +
       '" and Email :"' + email + '"');
       
    }
    e.preventDefault();
  }
  
  return (
    <div className="Signup"  >
      <header className="Signup-header">
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h2 ><u> Sign Up Form</u></h2>
        
          <label >
            Name:
          </label>
          <input type="text" value={name} required onChange={(e)=> { handleChange(e) }} /><br />
          <label>
            Email:
          </label>
          <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
          <label>
            Password:
          </label>
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
          <label>
            Confirm Password:
          </label>
          <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br />
          <input type="submit" value="Sign up" />
          
          

        </form>
      </header>
    </div>
  );
}

//export default email1;
export {email1};