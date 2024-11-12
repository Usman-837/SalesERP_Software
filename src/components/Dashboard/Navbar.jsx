import React from 'react'
import { FaBars } from "react-icons/fa"
import { FaBalanceScale } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav>
        <div className='bg-white h-61  flex items-center'>
            {/* Sidebar Toggle */}
            <div className=' bg-white py-4 px-3.5 text-26 text-[#2C3136]'>
            <FaBars/>
            </div>
            <div className='flex items-center gap-x-1 py-1.5 px-3 text-green text-sm border border-green'>
                <FaBalanceScale />
                <a href=''>Sale</a>
            </div>  
        </div>
    </nav>
  )
}
