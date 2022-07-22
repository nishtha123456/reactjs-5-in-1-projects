import React from 'react'
//import Home from "./Home"
import { Link } from 'react-router-dom'
//import { auth } from './Login';
//import { loginHandler } from './Actions';
import { useSelector,useDispatch } from 'react-redux'
import { navloginHandler } from './Actions';
//import Login from './Login';

export default function Navbar(props) {
      const loginAuth=useSelector((state)=>state.changeNumber);
      
const Dispatch=useDispatch()
      
     return (<><div>
   <nav className="container1"  >
   
<ul>
      <li float="left"  role="presentation" class="active"><Link to="/Home">{props.name}</Link></li>
   
   <li float="left" role="presentation"><Link to="/About">About us</Link></li>
   <li float="left" role="presentation"><Link to="/signup">Sign up</Link></li>
 
  <li> <li float="left"  role="presentation" class="active"><Link   onclick ={()=> Dispatch(navloginHandler())}   to="/Login">{loginAuth ===0? "Login" :"Log OFF"}</Link></li>
       </li>
       
      
       </ul>
 </nav>
 </div>
  </>
      )
}
