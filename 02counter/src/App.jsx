import { useState } from 'react';
import './App.css'

function App() {

   const [counter,setCounter] = useState(1)

  // let counter = 5;

  const addValue = () =>{
    // setCounter(counter + 1)
    // console.log('value added',counter);

    setCounter((preCounter) => preCounter + 1)
    setCounter((preCounter) => preCounter + 1)
    setCounter((preCounter) => preCounter + 1)
    setCounter((preCounter) => preCounter + 1)

    

    // let lessTwin = counter + 1
    // if(lessTwin<=20){
    //   setCounter(lessTwin)
    //   console.log('value added',counter);
    // }
      
  }

  const removeValues = () =>{

    let lessZero = counter - 1;
    if(lessZero >= 0){
      setCounter(lessZero);
      console.log('value added',counter);

    }
  }
  
  return (
    <>
    <h1>Chai and React </h1>
    <h2>Counter value {counter}</h2>

    <button 
    onClick={addValue}>Add values</button>
    <br />

    <button onClick={removeValues} >Remove values </button>


    </>
  )
}

export default App
