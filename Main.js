//import React from 'react'
import { Link ,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Textutill from './Textutill'
import Todolist from './Todolist'
import Counter from './Counter'
import './main.css'
import Timer from './Timer'
export default function Main() {
  return (<>

  
    <div id='box1'>
<Routes>
<Route path="/" element={<Home />} />
  <Route path="/About" element={<About />} />
  <Route path="/Textutill" element={<Textutill/>} />
  <Route path="/Timer" element={<Timer/>} />
  <Route path="/Todolist" element={<Todolist />} />
  <Route path="/Counter" element={<Counter/>} />
  
</Routes>
      
   
    </div>
    <div id='box2'>

      <h1><b><u>PROJECTS  LIST</u></b></h1>
      <ul>
        <li> <Link to="/Timer"><b>Timer </b></Link></li>
        <li><Link to="/Textutill"><b>TextUtill</b></Link></li>
        <li><Link to="/Counter" ><b>Counter</b> </Link></li>
        <li><Link to="/Todolist"> <b>Todolist </b> </Link></li>
   </ul>
    
    </div>
    </>
  )
}
