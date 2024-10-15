import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IMC from './components/imc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <IMC />
      </div>
    </>
  )
}

export default App
