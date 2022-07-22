//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Signup from './Components/Signup'
import Footer from './Components/Footer';
import Login from './Components/Login'

import Home from './Components/Home';
import About from './Components/About';
import Timer from './Components/Timer';
import Textutill from './Components/Textutill';
import Counter from './Components/Counter'
import Todolist from './Components/Todolist'
import ReadFile from './Components/ReadFile'
import Increment from './Components/Increment'
import ReduxTodolist from './Components/ReduxTodolist'
//import {auth} from './Components/Login';
//import reportWebvitals from './reportWebVitals'
//import Store from './Components/Store';
//import {Provider} from 'react-redux';
function App () {
 // constructor(props){
   // super(props);
   // auth=0;
  //}

  return (
  <Router>
    <div><Navbar name='Home'  /></div>

  <div >
    <Routes>
    <Route path="/" element={<Signup/>} />
    <Route path="/Home" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Signup" element={<Signup/>} />
    <Route path="/Login"  element={<Login />} />
  
  
    <Route path="/Login/Main" element={<Main/>} >

    
    <Route   path="/Login/Main/Timer" element={<Timer/>} />
    <Route   path="/Login/Main/Textutill" element={<Textutill/>} />
    <Route   path="/Login/Main/Counter" element={<Counter/>} />
    <Route   path="/Login/Main/Todolist" element={<Todolist/>} />
    <Route   path="/Login/Main/ReadFile" element={<ReadFile/>} />
    <Route   path="/Login/Main/Increment" element={<Increment/>} />
    <Route   path="/Login/Main/ReduxTodolist" element={<ReduxTodolist/>} />
    <Route   path="./About" element={<About/>} />
      </Route>
  
    

    </Routes>
  

    
    
    
    </div>
      
     <div><Footer/></div>
</Router>         
  );
}
export default App;
