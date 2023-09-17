import React,{useState} from 'react'
import './TodoInput.css'

const TodoInput = (props) => {
    const {addTodo}=props
  const [inputtodo,setInputtodo]=useState("");

  return (
    <div className="input-field-container">
        <input type="text" className="input-field" placeholder="Enter your todo here" value={inputtodo}
        onChange={e=>{
            setInputtodo(e.target.value);
        }}/>
        <button className="add-button" onClick={()=>{
            addTodo(inputtodo)
            setInputtodo("")
        }}>Add</button>
        
    </div>
  )
}

export default TodoInput

