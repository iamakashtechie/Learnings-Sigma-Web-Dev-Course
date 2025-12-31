import React from 'react'
import { useContext } from 'react'
// import {React, useContext} from 'react'
import { counterContext } from '../context/context'

    // const Component_1 = ({counter}) => {    
    {/* Without Context API */}

const Component_1 = () => {    
  const counter_value = useContext(counterContext)
  return (
    <div>
      {/* <div>Component_1</div> Counter {counter}     */}
      {/* Without Context API */}
      
      <div>Component_1</div> Counter {counter_value.count}  
    </div>
  )
}

export default Component_1