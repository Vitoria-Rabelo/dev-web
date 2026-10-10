import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { GetPokemon } from './Jogos/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GetPokemon />
    </>
  )
}

export default App
