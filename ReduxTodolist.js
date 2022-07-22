import { data } from 'jquery';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import todoList from './Reducer/addTodo'
import { AddData } from './Actions/index'
//import rootReducer from './Reducer/index'
export default function ReduxTodolist() {
  const [inputData,setinputData]=useState("")
 // const [List,setList]=useState([]);
//let  List=[];
 const  List=useSelector((state)=>state.todoList.list);
 console.log(List.map((key)=>key.data))

  const Dispatch=useDispatch()
  return (
<>
    <div>
      <h1>Add Todolistusing redux</h1>
      
      <input className='todoredux' placeholder='add your list here'  value={inputData} onChange={(event)=>setinputData(event.target.value)}></input>
      <button className='fa fa-plus add-btn'  onClick={()=>Dispatch(AddData(inputData),setinputData(''))}>+</button>
    </div>
  <div>
 { List.map((elem) => {return(<p key={elem.id}><h3>{data}</h3></p>)})}
         
 </div>
        
              
        
    </>
)  
}
