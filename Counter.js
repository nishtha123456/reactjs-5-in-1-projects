import React, { useState, useEffect } from "react";
import './login.css'
//import ReactDOM from "react-dom/client";
//import $ from 'jquery'
export default function Counter() {
  const [count, setCount] = useState(0);
  const [text,settext]=useState(" ")
 // const [isRun, setIsRun] = useState<Boolean>(true);
 // const click_ref = useRef(null);
  const handleonchange=(event)=>{
  console.log("hanle on change clicked")
  console.log(text)
   settext(event.target.value)
  }
  let n=text;
  

      useEffect(() => {

      setTimeout(() => {
         if(count<=n-1)
         {  setCount((count) => count + 1);}
          }, 1000);
    
   },[count,n]);



  return (
  <><div   className="counter">
  <h1><u>COUNTER PROJECT USING USEEFFECT HOOK</u> </h1>
  <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"><b>Enter Number:  </b></label>
    <input id="text1 " type="number" class="form-control" value={text} onChange={handleonchange} />
    <button className="start"    type="submit" class="btn btn-primary">Start</button>
    <button type="submit "   className="start" id="start"  >Reset</button>
    
    </div>
</form><div> 
             <h1>COUNTER = {count}  </h1>
          </div>
             </div>
             </>
  )
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Counter />);

