//import React from 'react'
import { Link ,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Textutill from './Textutill'
import Todolist from './Todolist'
import Counter from './Counter'
//import Signup from './Signup'
import './main.css'
import Timer from './Timer'
import Nomatch from './Nomatch'
import Increment from './Increment'
//import {auth} from './Login'

export default function Main() {
  return (<>

  
    <div id='box1'>
<Routes>
<Route path="/" element={<Home />} />
  <Route exact path="/About" element={<About />} />
  <Route exact path="Textutill" element={<Textutill/>} />
  
  <Route exact path="Todolist" element={<Todolist />} />
  <Route exact path="Counter" element={<Counter/>} />
  <Route exact path="Timer" element={<Timer/>} />
  <Route exact path="Increment" element={<Increment/>} />
  <Route path="*" element={<Nomatch/>} />


</Routes>
    
   
    </div>
    <div id='box2'>

      <h1><b><u>PROJECTS  LIST</u></b></h1>
      <ul>
        <li> <Link to="Timer"><b>Timer </b></Link></li>
        <li><Link to="Textutill"><b>TextUtill</b></Link></li>
        <li><Link to="Counter" ><b>Counter</b> </Link></li>
        <li><Link to="Todolist"> <b>Todolist </b> </Link></li>
        <li><Link to="Increment"> <b>Incremet using Redux  </b> </Link></li>
   </ul>
    
    </div>
    </>
  )
}
