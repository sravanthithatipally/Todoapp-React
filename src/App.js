
import React, { useState, useEffect } from 'react';
import TodoContainer from './components/TodoContainer';
import TodoInput from './components/TodoInput';
import { ThreeDots } from 'react-loader-spinner';

import './App.css'

export const App = () => {
  // eslint-disable-next-line
  const [todolist, setTodolist] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setTodolist(json);
          setLoading(true);
        }, 1000);
        // console.log(todolist);
      });
  }, []);

  const addTodo = (inputtodo) => {
    if (inputtodo !== "") {
      let newTodoItem = {
        id: Date.now(),
        title: inputtodo,
        completed: false,
      };
      setTodolist([...todolist, newTodoItem]);
    }
  };

  const deleteitem = (id) => {
    let newjson = todolist.filter((item) => item.id !== id);
    setTodolist([...newjson]);
  };

  const updatestatus= (id) => {
    let updatedtask = todolist.map(item =>{
    if(item.id === id){
    return({...item,completed:!item.completed});
    }
    return item;
  })
    setTodolist(updatedtask);
    //console.log(updatedtask)
  };

  return (
    <div className="todo-bg-container">
      <h1 className="todos-heading">Todo app</h1>
      <h2 className="todo-subheading">Create Task</h2>
      <TodoInput addTodo={addTodo} />
      <hr/>
      <div className="todos-container">
      <h2 className="todo-subheading">TODO</h2>
      {loading ?
     (
    <TodoContainer todolist={todolist} deleteitem={deleteitem} updatestatus={updatestatus}/>
     )
   :<ThreeDots color="black" height="100" width="100"/>
   }
   </div>
    </div>
  )
};


export default App