import React, { useState } from 'react';
import './App.css'


const TodoApp = () => {

    const [todos , setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if(newTodo.trim() !== '') {
            setTodos([...todos,{ id: Date.now(), text: newTodo}])
            setNewTodo('');
        }
    };

    // const addTodo = () => {
    //   if (newTodo.trim() !== '') {
    //     setTodos([...todos, { id: Date.now(), text: newTodo }]);
    //     setNewTodo('');
    //   }
    // };

    const removeTodo = (id)=>{
        const updateTodos = todos.filter(todo=>todo.id !== id);
        setTodos(updateTodos)
    };


  return (

    <div>
    <h1>TodoApp</h1>
    <div>
    <input type="text" 
    value={newTodo}
    onChange={(e)=> setNewTodo(e.target.value)}
    placeholder='Add todo here..' />
    <button
    onClick={addTodo}
    >AddTodo</button>
    </div>

    <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={()=> removeTodo(todo.id)} >Del</button>

             
          </li>
        ))}
    </ul>
    </div>
  )
};

export default TodoApp;
