import React from 'react'
//import Home from "./Home"
import { Link } from 'react-router-dom'
//import { auth } from './Login';
export default function Navbar(props) {
      
     return (<><div>
   <nav className="container1"  >
   
<ul>
      <li float="left"  role="presentation" class="active"><Link to="/Home">{props.name}</Link></li>
   
   <li float="left" role="presentation"><Link to="/About">About us</Link></li>
   <li float="left" role="presentation"><Link to="/signup">Sign up</Link></li>
 
  <li> <li float="left"  role="presentation" class="active"><Link to="/Login">Login</Link></li>
       </li>
       
      
       </ul>
 </nav>
 </div>
  </>
      )
}
