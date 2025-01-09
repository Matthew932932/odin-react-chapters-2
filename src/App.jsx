import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './components/Clock'
import AppChat from './components/ChatMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Clock />

      <AppChat />
        
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
