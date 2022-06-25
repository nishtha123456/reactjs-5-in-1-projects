//import { memo } from "react";
import React from 'react'
import { useCallback,useState } from "react";
export default function Todolist() {
  const [todos, setTodos] = useState([]);
  const [text,settext]=useState(" ")
  const handleonchange=(event)=>{
    console.log("hanle on change clicked")
    console.log(text)
    settext(event.target.value)
}
//const addTodo=useCallback(()=>{setTodos(text);},[todos])


  const addTodo = useCallback(() => {
  
   setTodos((t) => [...t, text]);
    
  }, [text]);
  

   return (
      <>
      <h2>  <label ><b>  Enter TodoName-</b></label>
    

    <textarea  classname='text1' value={text} onChange={handleonchange} ></textarea></h2>
    <button onClick={addTodo}>Add Todo</button>
    {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
          
      </>
    );
  };
  
  


//export default memo(Todos);

