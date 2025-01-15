import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeirdImageComponent from './WeirdImageComponent'
import Profile from './Profile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Profile component</h2>
      <div className="App">
        <Profile delay={1000} />
      </div>
      <h2>--------------------</h2>
      <h2>WeirdImageComponent</h2>
      <WeirdImageComponent />
      
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
