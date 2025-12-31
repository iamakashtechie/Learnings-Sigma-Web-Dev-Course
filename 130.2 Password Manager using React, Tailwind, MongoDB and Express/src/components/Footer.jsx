import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-gray-800 text-white flex flex-col justify-center items-center mt-8 p-4'>
        <div className="logo font-bold text-md ml-2 cursor-pointer select-none">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>
        <span>Made with ❤️ by iamakashtechie</span>
    </footer>
  )
}

export default Footer;
