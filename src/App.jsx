import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './component/Device/Device'
import Watch from './component/Watch/Watch'
import Knob from './component/Knob/Knob'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Knob steps="456"></Knob>
   
    <Device name="iphone" price="596897"></Device>
    <Device name="samsung" price="4568"></Device>
    <Watch></Watch>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
