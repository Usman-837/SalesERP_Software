import React from 'react'
import { FaBars } from "react-icons/fa"
import { FaBalanceScale } from "react-icons/fa"
import { FaRegMoneyBillAlt } from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className='bg-white'>
      <div className='h-61  flex items-center'>
        {/* Sidebar Toggle */}
        <div className='py-4 px-3.5 text-26 text-[#2C3136]'>
          <FaBars />
        </div>
        <div className='flex gap-x-2'>
          {/* Sale Button */}
          <div className='flex items-center gap-x-1 py-1.5 px-3 text-green text-sm border border-green hover:bg-green hover:text-white'>
            <FaBalanceScale />
            <a href=''>Sale</a>
          </div>
          {/* Customer Receive button */}
          <div className='flex items-center gap-x-1 py-1.5 px-3 text-green text-sm border border-green hover:bg-green hover:text-white'>
            <FaRegMoneyBillAlt />
            <a href=''>Customer Receive</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
