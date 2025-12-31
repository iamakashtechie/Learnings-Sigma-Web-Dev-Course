import React from 'react'
import { useContext } from 'react'
// import {React, useContext} from 'react'
import Component_1 from './Component_1'
import { counterContext } from '../context/context'

    // const Button = ({counter}) => {    
    {/* Without Context API */}

const Button = () => {    
//   const counter_value = useContext(counterContext)
  const {count, setCount} = useContext(counterContext)
  return (
    <div>
      {/* <button><Component_1 counter={counter}/>I am button</button>     */}
      {/* Without Context API */}
      
        {/* <button onClick={() => counter_value.setCount((count) => count + 1)}> */}
        <button onClick={() => setCount((count) => count + 1)}>
            <Component_1/>
            I am button
        </button>    
    </div>
  )
}

export default Button
