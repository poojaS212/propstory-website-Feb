import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Welcome to Propstory</p>
      <h1 class="text-3xl font-bold text-red-600">
        Hello world!
      </h1>
    </>
  )
}

export default App
