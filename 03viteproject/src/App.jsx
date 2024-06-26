import { useState } from "react"

function App() {
  const [color,setColor] = useState("white")

  return (
    <>
    
    <div className="w-full h-screen duration-300 "  style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-white"  >
          <button onClick={()=>{setColor('red')}} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"red"}}  >Red</button>
          <button onClick={()=>{setColor('green')}} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"green"}}  >Green</button>
          <button onClick={()=>{setColor('blue')}} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"blue"}}  >Blue</button>
          <button onClick={()=>{setColor('yellow')}} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"yellow"}}  >Yellow</button>
          <button onClick={()=>{setColor('pink')}} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"pink"}}  >Pink</button>
          <button onClick={()=>{setColor('lavender')}} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"lavender"}}  >Lavender</button>
          <button onClick={()=>{setColor('purple')}} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"purple"}}  >Purple</button>
          <button onClick={()=>{setColor('skyblue')}} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"skyblue"}}  >Skyblue</button>
          <button onClick={()=>{setColor('black')}} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"black"}}  >Black</button>
          <button onClick={()=>{setColor('grey')}} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"grey"}}  >Grey</button>
          <button onClick={()=>{setColor('gold')}} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"gold"}}  >Gold</button>
          <button onClick={()=>{setColor('aquamarine')}} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"aquamarine"}}  >Aquamarine</button>
          <button onClick={()=>{setColor('coral')}} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"coral"}}  >Coral</button>

        </div>
      </div>
    </div>
    </>
    )
}

export default App
