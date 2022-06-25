import React from 'react'
import $ from 'jquery';
export default function About() {
  
  $(".button").on('click',function(){$('p').css('color','red')});
  return (<>

    <div>
    <p> <h1><u>About us:</u> React Js Website developer   </h1></p>
     <br></br>
     <p> <h1><u>contact us:</u> Asha P. Savani</h1></p>
     <button className='button' >click for jquery effect </button>
    </div>
    </>
  )
}
