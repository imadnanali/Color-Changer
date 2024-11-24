import { useState } from 'react'
function App() {
  const [color, setColor] = useState("")

  return (
    <>
      <div className='flex justify-center h-lvh w-lvw duration-1000 ' style={{ backgroundColor: color }} >
        <div className='flex justify-evenly bg-black mt-3 w-1/2 rounded-full h-16'>
          <button onClick={() => setColor("#ef4444")}className='m-2 p-3 bg-red-500 rounded-full '>Red</button>
          <button onClick={() => setColor("#f97316")} className='m-2 p-3 bg-orange-500 rounded-full'>Orange</button>
          <button onClick={() => setColor("#22c55e")} className='m-2 p-3 bg-green-500 rounded-full'>Green</button>
          <button onClick={() => setColor("#eab308")} className='m-2 p-3 bg-yellow-500 rounded-full'>Yellow</button>
          <button onClick={() => setColor("hotpink")} className='m-2 p-3 bg-pink-500 rounded-full'>Pink</button>
          <button onClick={() => setColor("#3b82f6")} className='m-2 p-3 bg-blue-500 rounded-full'>Blue</button>
        </div>

      </div>
    </>
  )
}

export default App




