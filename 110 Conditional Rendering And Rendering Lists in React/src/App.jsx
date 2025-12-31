import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(false)
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      id: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done"
    },
    {
      id: 3,
      title: "Go to the school",
      desc: "You need to go to the school to get this job done"
    }
  ])

  const handleClick = () => {
    setCount((count) => count + 1);
    setShowbtn(true);
  }

  // using todo ---> props
  // const Todo = ({todo}) => {
  //   return (<>
  //     <div className="todo">{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>
  //   </>)
  // }

  return (
    <>
      {/* <Todo /> */}
      {/* to render this list either we have to use list or we have a special way of doing this in react */}
      {todos.map(todo => {
        // return <Todo key={todo.id} todo={todo} />
        // another way of doing this is
        return (
          <div key={todo.id} style={{border: "2px solid purple", display: "flex", flexDirection: "column", gap: "5px"}}> 
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>      
        )
      })}

      {/* {showbtn?<button>I will be shown only when showbtn is true and is true when Count button is clicked</button>:"thenga"} */}
      {/* But there is a better way to do this ---> Conditional Rendering*/}
      {showbtn && <button>I will be shown only when showbtn is true and is true when Count button is clicked</button>}
      {/* if showbtn is true then do --- otherwise nothing */}


      <div className="card">
        <button onClick={handleClick}>
          Click to set showbtn to true <br />
          Count is {count}
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
