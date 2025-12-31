import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setAdjective] = useState("good")

  // const getAdjective = () => {
  //   return "another"
  // }

  /*
  In JavaScript, 
  const getAdjective = () => {return "another"}
  and
  const getAdjective_2 = () => {return "another"}
  both the functions are different, even if they return the same value.
  To check ---> console.log(getAdjective === getAdjective_2) ---> false
  So, the Navbar component will re-render on every state change because the function reference is changing 
  So, "memo" will think that the props of Navbar have changed and will re-render the component

  So, HOW TO FIX THIS???
  Like, we want to tell "memo" that the function reference is not changing, so don't re-render the component
  To fix this, we can use useCallback() hook to memoize the function reference
  */

  // const getAdjective = useCallback(
  //   () => {
  //     first
  //   },
  //   [second],
  // )

  const getAdjective = useCallback(() => {
    // return "another"
    return "another" + count
    },
    // [],    // Dependency Array ---> empty array means that the function reference will not change
    [count],    // Dependency Array ---> will only change if the "count" changes
  )
  

  return (
    <>
      <Navbar adj={"good"} getAdj={getAdjective}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
