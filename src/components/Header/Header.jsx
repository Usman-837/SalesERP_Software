import React from 'react'
import { FaBars } from "react-icons/fa"
import { FaBalanceScale } from "react-icons/fa"
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { FaPlus } from "react-icons/fa"
import { TfiAlert } from "react-icons/tfi"
import { SlSettings } from "react-icons/sl"

export default function Header() {

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
    <header className='bg-white'>
      <div className='h-sixtyone flex items-center justify-between px-fifteen'>
        {/* Sidebar Toggle */}
        <div className='py-4 px-3.5 text-twentysix text-[#2C3136]'>
          <FaBars />
        </div>
        <div className='flex gap-x-2 max-md:hidden'>
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
          <div className='relative bg-[#f5f5f5] flex items-center justify-center py-1.5 text-twentyfive hover:cursor-pointer px-three w-thirtysix h-thirtysix text-[#374767]'>
            <TfiAlert />
            <span className='absolute bg-red rounded-full text-10.5 px-five py-one text-white right-[-5px] top-[-6px]'>9</span>
          </div>
          <div className='relative bg-[#f5f5f5] flex items-center justify-center py-1.5 text-twentyfive hover:cursor-pointer px-three w-thirtysix h-thirtysix text-[#374767]'>
            <SlSettings />
          </div>
        </div>
      </div>
    </header>
  )
}
