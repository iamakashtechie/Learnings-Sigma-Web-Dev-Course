import {React, memo} from 'react'

const Navbar = ({adj, getAdj}) => {
  console.log("Navbar is rendered");
  return (
    <div>
      I am a {adj} Navbar
      <button onClick={() => {getAdjective()}}>Button</button>
    </div>
  )
}

export default memo(Navbar)
// Navbar will only re-render if the props change  ---> thanks to memo()
// it'll not re-render on every state change, only when the props change