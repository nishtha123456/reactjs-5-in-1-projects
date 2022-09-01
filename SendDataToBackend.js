

//FRONT END FILE

import React, { useEffect, useState } from 'react'
//import { ReactDOM } from 'react';
import Axios from 'axios';
import  './SendDataToBackend.css'
//import { Component } from 'react';
//import { response } from 'express';
export default function SendDataToBackend ()  {

   const[authers,setAuthers]=useState([]);
  
  const [id,setId]=useState('');
  const [img,setImg]=useState('');
  const [name,setName]=useState('');
 
useEffect(()=>{
    Axios({
      method: "GET",
      url: "http://localhost:5000/",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res=>{console.log("Authers fetched:",res.data.authers);setAuthers(res.data.authers);});
    
  },[])
     
  
const  handleId=(e)=>{
    setId(e.target.value)
  }
   const handleImg=(e)=>{
    setImg(e.target.value)
  }
 const handleName=(e)=>{
    setName(e.target.value)
  }



const  addData=()=>{
    const Data={id:id ,img:img, name:name }
    Axios({
      method: "POST",
      
      url: "http://localhost:5000/", 
      data:Data,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res =>{console.log("Authers sent:",res.data.authers);setAuthers(res.data.authers) ;});
   
    window.location.reload();
   // setAuthers({authers: prev=>[...prev,res.data.authers]}) window.location.reload();

 
  }

  return (
  
<>      
    
    <div>
      <h1>example using how to connect react api to express</h1>
      
 <h2 style={{"textAlign":'center'}} >   <u>       customers  </u>    </h2>
  <h3>

    {authers.map(auther=> <div key={auther.id} >{auther.id}  {auther.img}  {auther.name}<hr/></div>)}
  
 </h3>

 <div>
 
 <input className="quantity" placeholder=' Enter id' onChange={(e)=>{handleId(e)}}/><input className="quantity" placeholder='img' onChange={(e)=>{handleImg(e)}}/>
 <input className="quantity" placeholder='Authers name' onChange={(e)=>{handleName(e)}}/>
 <button onClick={addData} >ADD</button>
 </div>
</div>
    
    

   </> 
  )
}
