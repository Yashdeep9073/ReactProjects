// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count , setCount] = useState(0)

  // let myObj = {
  //   userName:"Yashdeep9072",
  //   age     : 21
  // }

  // let newAr = [1,2,3,4]
  return (
    <>
    <h1 className=' bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind test</h1>
    <Card username = "I'm Yashdeep"  btnTxt = "Click Here"/>
    <Card username = "I'm Guru"  /> 
    
    </>
  )
}

export default App
