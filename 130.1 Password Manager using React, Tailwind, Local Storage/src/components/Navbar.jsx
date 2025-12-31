import React from "react";

const Navbar = () => {
  return (
    <header className="bg-slate-900 text-white flex justify-between items-center h-16">
      <nav className="flex justify-between items-center mx-auto max-w-4xl w-full">
        <div className="logo font-bold text-xl ml-2 cursor-pointer select-none">
          <span className="text-green-500">&lt;</span>
          Pass
          <span className="text-green-500">OP/&gt;</span>
        </div>

        {/* <ul>
          <li className="flex">
            <a className="hover:underline mx-2" href="#">
              Home
            </a>
            <a className="hover:underline mx-2" href="#">
              About
            </a>
            <a className="hover:underline mx-2" href="#">
              Contact
            </a>
          </li>
        </ul> */}

        <a 
          href="https://github.com/iamakashtechie/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-90"
        >
        <button className="w-24 h-10 p-1 flex justify-stretch items-center mr-2 cursor-pointer bg-green-600 rounded-full">
          <img className="h-full" src="/github.svg" alt="" />
          <span className="mx-auto text-lg">Star</span>
        </button>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
