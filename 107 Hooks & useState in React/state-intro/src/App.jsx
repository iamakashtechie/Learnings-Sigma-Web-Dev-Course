import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [variable, function] = useState(initialValue)
  // variable ---> initial value
  // function ---> function to update the value of the variable

  return (
    <>
      {/* JS ---> used in curly brackets */}
      {/* CSS ---> used in double curly brackets */}
      <div> The count is {count} </div>
      {/* here count is used as a variable */}

      <button onClick={() => setCount((count) => count + 1)}>
        Update Count
      </button>
      {/* just like here setCount function is used to update the value of count */}
    </>
  )
}

export default App
