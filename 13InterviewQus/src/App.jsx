import { useState } from 'react'
import './App.css'

function App() {
  console.log('App rendered', Math.round(Math.random()*10));
  const [value, setValue] = useState({
    value : 0,
  })
  // const [multipliedValue , setmultipliedValue] =  useState(1)
  // let multipliedValue = value * 5

  // let multiplyByfive = ()=>{
  //   // setmultipliedValue(value * 5)  
  //   setValue(value + 1)
  // }

  const clickMe = () =>{
    setValue({
      value:0,
    })
  }

  return (
    <>
      <h1>Main value : {value.value}</h1>
      <button onClick={clickMe}
      >Click to Multiply by 5</button>
      {/* <h2>Multiplied value:{multipliedValue}</h2> */}
    </>
  )
}

export default App
