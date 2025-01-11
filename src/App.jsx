import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './components/Clock'
import AppChat from './components/ChatMain'
import {CountSecretsCorr, MineSimplified, CountInputChanges, CountInputUseRef} from './InfiniteLoopProb' 
import {FunctionalInput, ClassInput} from './ClassBasedComps'
import What from './ClassCompsAss.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <What />

      <FunctionalInput name='Matt'/>

      <ClassInput name='Matthew' />

      <CountSecretsCorr />
      
      <CountInputChanges />

      <CountInputUseRef />

      <MineSimplified />
      
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
