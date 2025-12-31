import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stopwatch from './components/stopwatch'
import CatFriends from './components/scrollingImageView'
import VideoPlayer from './components/videoPlayer'

function App() {
  const [count, setCount] = useState(0)
  // let a = 0; 
  // problem

  // usecase 2 of usRef ---> kind of DOM manipulation in React
  let btnRef = useRef();

  useEffect(() => {
    console.log(`First rendering ...`);
    btnRef.current.style.backgroundColor = "red";
  }, []);

  return (
    <>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <button onClick={()=>{btnRef.current.style.display = "none"}}>Change Me</button>
      <Stopwatch />
      <CatFriends />
      <VideoPlayer />
    </>
  )
}

export default App
