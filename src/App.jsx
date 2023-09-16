import { useState } from 'react'
import './App.css'
import './Component/Home'
import './Component/Cart'
import Home from './Component/Home'


function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
