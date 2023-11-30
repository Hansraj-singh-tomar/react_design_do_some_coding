import './App.css'
import { useState } from 'react'
import Home from "./components/Home"
import PlayGame from './components/PlayGame'
const App = () => {
  const [isGameStart, setIsGameStart] = useState(false)

  const toggleGamePlay = () => {
    setIsGameStart((prev) => !prev)
  }

  return (
    <>
      {!isGameStart ? <Home toggleGamePlay={toggleGamePlay} /> : <PlayGame />}
    </>
  )
}

export default App