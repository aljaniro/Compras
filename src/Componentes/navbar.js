import React,{useContext} from 'react'
import {NavLink} from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { Contesto } from "../contextProvider/context";
function Navbar() {
  const { can } = useContext(Contesto);
  return (
    <nav class="principal flex items-center justify-between flex-wrap bg-violet-950 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    
    
    <NavLink to="/home" className="font-semibold text-xl tracking-tight">
    <AiFillHome className='fill-current h-8 w-8 mr-2 hover:text-violet-600'/>
                </NavLink>
    <NavLink to="/home" className="font-semibold text-xl tracking-tight hover:text-violet-600">
                  HOME
                </NavLink>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class=" lg:flex-grow">
      <h1 className='text-white font-bold text-2xl'>ELIZABETH MODA</h1>
      
    </div>
    <NavLink to="/pago" className="font-semibold text-xl tracking-tight">
    <BsCart4 className='fill-current h-8 w-8 mr-2 text-white hover:text-violet-600'/>
                </NavLink>
    <NavLink to="/pago" className="font-semibold text-xl tracking-tight text-white hover:text-violet-600 hover:text-violet-600">
                 {can}
                </NavLink>
  </div>
</nav>
  )
}

export default Navbar

