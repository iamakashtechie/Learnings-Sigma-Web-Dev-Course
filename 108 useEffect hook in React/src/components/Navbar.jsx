import React, { useEffect } from 'react'

const Navbar = ({ color }) => {
  // Case 1: Run on every render 
  useEffect(() => {
    alert("Hey I will run on every render")
  })

  // Case 2: Run only on first render 
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render")
    // Everytime page reloads it gives alert
    }, []) // Empty array means it will run only once after first render
    // [] ---> array of those thing jiske change hone se useEffect trigger hoga  

  // Case 3: Run only when certain values change
  useEffect(() => {
    alert("Hey I am running because color was changed")
  }, [color])

  // Example of Cleanup function
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")

    return () => {
      alert("component was unmounted")
    }
  }, [])

  return (
    <div>
      I am navbar of {color} color hehe..
    </div>
  )
}

export default Navbar
