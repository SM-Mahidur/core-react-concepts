import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Core Concepts React</h3>
      <Post></Post>
    </>
  )
}

export default App
