import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(props) {
  return (<>
   <nav className="container1"  >
   
<ul>
      <li float="left"  role="presentation" class="active"><Link to="/">{props.title}</Link></li>
   <span classname="navbar-hrefggler-icon"></span><li float="left" role="presentation"><a href="/">Home</a></li>
   <li float="left" role="presentation"><Link to="./Main">{props.abouttext}</Link></li>
 <li>
 <form classnamename="d-flex">
         <input classnamename="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
         <buthrefn classnamename="btn btn-outline-success" type="submit">Search</buthrefn>
       </form>
       </li>
       </ul>
 </nav>
  </>
      )
}
