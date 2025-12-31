import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-black text-white py-3 w-full">
        <div className="logo">
            <span className="font-bold text-xl mx-8 cursor-pointer">iTask</span>
        </div>
        <ul className="flex gap-8 mx-8">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
