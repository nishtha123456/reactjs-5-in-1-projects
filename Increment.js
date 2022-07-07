import React from 'react'
import './increment.css'
//import{changeNumber} from './Reducer/upDown'
import { incrNumber,decreNumber} from './Actions'
import { useSelector, useDispatch } from 'react-redux'
 export default function  Increment() {
  const myState=useSelector((state)=>state.changeNumber);
const Dispatch=useDispatch()
  return (
    <>
    <div>
      <h1> Increment and Decrement Counter</h1>


      <h4>Using React and Redux</h4>
      <button title='increment' onClick={()=>Dispatch(incrNumber())}><span> +</span></button>
      <input className="quantity" value={myState}/>
      <button title='decrement' onClick={()=>Dispatch(decreNumber())}><span> -</span></button>
    </div>
    </>
  )
}
