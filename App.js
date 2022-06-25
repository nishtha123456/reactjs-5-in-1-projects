//import logo from './logo.svg';

import './App.css';
import {BrowserRouter as Router } from "react-router-dom";
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Footer from './Components/Footer';
//import About from './Components/About';
//import Footer from './component/Footer';
//import Textform from './component/Textform';
//import Home from './Components/Home';
//import About from './Components/About';
//import Textutill from './Components/Textutill';
//import Timer from './Components/Timer';
//import Todolist from './Components/Todolist';
//import Counter from './Components/Counter';

function App() {
  return (
  <Router>
    <div><Navbar/></div>
    <div><Main /></div>
   <div><Footer/></div>
</Router>         
  );
}
export default App;
