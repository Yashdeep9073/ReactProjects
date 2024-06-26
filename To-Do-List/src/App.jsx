// import './App.css'

import { useState } from "react"

function App() {

  const [toDo , setToDo] = useState([]);
  const [inputValue , setInputValue] = useState("")

  const handleChange = (e) =>{
    setInputValue(e.target.value);

  } 
  
  const handleClick = (e) =>{
    e.preventDefault()
    setToDo([...toDo,inputValue])
    setInputValue("")
  }
  return (
<>
  <h2>My To Do List</h2>
  <input type="text" value={inputValue} onChange={handleChange} placeholder="Title..."/>
  <button onClick={handleClick}>Add</button>
  <ul>
    {
      toDo.map((val)=>{
        return(
          <li>{val}</li>
        )
      })
    }
  </ul>

</>
  )
}

export default App
