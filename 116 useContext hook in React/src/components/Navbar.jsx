import React from 'react'
import Button from './Button'

    // const Navbar = (props) => {
    // const Navbar = ({counter}) => {   
    {/* Without Context API */}

const Navbar = () => {   

    return (
    <>
        <div>
            I am the Navbar
        </div>
        {/* <Button counter={props.count} /> */}
        {/* <Button counter={counter} />     */}
        {/* Without Context API */}
        
        <Button/>    
    </>
  )
}

export default Navbar
