import React from 'react'
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.jpg"

export default function Sidebar() {
  return (
    <aside className='max-w-250 w-full bg-custom-black fixed top-0 left-0'>
      <div className='h-svh'>
        {/* logo */}
        <div className='flex items-center justify-center bg-[#3E454C] px-fifteen h-sixtyone'>
            <img src={logo} className='h-fourtytwo'/>
        </div>
      </div>
    </aside>
  )
}
