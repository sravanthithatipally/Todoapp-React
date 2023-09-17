import React from 'react'
import './TodoContainer.css'

const TodoContainer = (props) => {
     // eslint-disable-next-line
    const {todolist,deleteitem,updatestatus}=props
  return (
    <div>
        <ul className="todos-list">
       {todolist.map((item,i)=>{
      return <div className="list-items-container">
        <input type="checkbox" checked={item.completed} className="checkbox" onChange={e=>{
        updatestatus(item.id)}} />

        <li key={item.id} index={i} deleteitem={deleteitem}><p className={item.completed===true?"todo-item strike-through":"todo-item"}>{item.title}</p></li>
        <button className="cross-button" onClick={e=>{
        deleteitem(item.id)}}>X</button>
      </div>
     })}
     </ul>
    </div>
  )
}

export default TodoContainer