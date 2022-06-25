import React from 'react'
//import Home from "./Home"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (<><div>
   <nav className="container1"  >
   
<ul>
      <li float="left"  role="presentation" class="active"><Link to="/">Home</Link></li>
   
   <li float="left" role="presentation"><Link to="/About">About us</Link></li>
 <li>
 <form classnamename="d-flex">
         <input classnamename="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <buthrefn classnamename="btn btn-outline-success" type="submit">Search</buthrefn>
       </form>
       </li>
       </ul>
 </nav>
 </div>
  </>
      )
}
