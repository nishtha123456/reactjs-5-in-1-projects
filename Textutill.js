//import { useState } from "react";
import React,{useState} from 'react'

export default function Textutill() {
  
    const changetext=()=> {
    
        console.log("change function was clicked");
        settext("u hv clicke tochage");
        let newtext=text.toUpperCase()
        settext(newtext)
        console.log(newtext)
    }
    const handleonchange=(event)=>{
        console.log("hanle on change clicked")
        console.log(text)
        settext(event.target.value)
    }
    const [text,settext]=useState(" ")
  return (
      
    <>
    <div>

      <h1> <u> TextUtill project</u></h1>
    <h1>Enter the text :-</h1>
    

  <textarea  classname='text1' value={text} onChange={handleonchange} ></textarea>
  </div>
  <div >
  <button  width="auto" classname='button' onClick={changetext}>Convert the text in upercase</button>
</div></>  )
}
