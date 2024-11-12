import React from 'react'
import { FaBars } from "react-icons/fa"
import { FaBalanceScale } from "react-icons/fa"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { FaPlus } from "react-icons/fa"

export default function Navbar() {

  const buttons = [
    {
      id: 1,
      icon: <FaBalanceScale />,
      text: "Sale"
    },
    {
      id: 2,
      icon: <FaRegMoneyBillAlt />,
      text: "Customer Receive"
    },
    {
      id: 3,
      icon: <FaRegMoneyBillAlt />,
      text: "Supplier Payment"
    },
    {
      id: 4,
      icon: <FaRegMoneyBillAlt />,
      text: "Purchase"
    }
  ]

  return (
    <nav className='bg-white'>
      <div className='h-61  flex items-center justify-between px-15'>
        {/* Sidebar Toggle */}
        <div className='py-4 px-3.5 text-26 text-[#2C3136]'>
          <FaBars />
        </div>
        <div className='flex gap-x-2'>
          {
            buttons.map((data) => {
              return (
                <div key={data.id} className='flex items-center gap-x-1 py-1.5 px-3 text-green text-sm border border-green hover:bg-green hover:text-white'>
                  {data.icon}
                  <a href=''>{data.text}</a>
                </div>
              )
            })
          }

          {/* Sale Button
          <div className='flex items-center gap-x-1 py-1.5 px-3 text-green text-sm border border-green hover:bg-green hover:text-white'>
            <FaBalanceScale />
            <a href=''>Sale</a>
          </div>
          Customer Receive button
          <div className='flex items-center gap-x-1 py-1.5 px-3 text-green text-sm border border-green hover:bg-green hover:text-white'>
            <FaRegMoneyBillAlt />
            <a href=''>Customer Receive</a>
          </div>
          Supplier Payment button
          <div className='flex items-center gap-x-1 py-1.5 px-3 text-green text-sm border border-green hover:bg-green hover:text-white'>
            <FaRegMoneyBillAlt />
            <a href=''>Supplier Payment</a>
          </div>
          Purchase button
          <div className='flex items-center gap-x-1 py-1.5 px-3 text-green text-sm border border-green hover:bg-green hover:text-white'>
            <FaRegMoneyBillAlt />
            <a href=''>Purchase</a>
          </div> */}
        </div>
        <div className='flex gap-x-2'>
          <div className='flex items-center gap-x-1 py-1.5 px-3 text-white text-sm bg-green'>
            <FaPlus />
            <a href=''>POS Sale</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
