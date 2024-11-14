import React from 'react'
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.jpg"

export default function Sidebar() {
  return (
    <aside className='max-w-250 w-full bg-custom-black fixed top-0 left-0'>
      <div className='h-svh'>
        {/* logo */}
        <div className='flex items-center justify-center bg-[#3E454C] px-fifteen h-sixtyone'>
          <img src={logo} className='h-fourtytwo' />
        </div>
        {/* Profile photo */}
        <div className='flex flex-col items-center py-5 px-2.5'>
          <div className='border-2 border-[#3E454C] rounded-full p-1'>
            <img src={profile} className='rounded-full w-12' />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='my-five text-sm text-white'>ADMIN USER</p>
            <div className='flex items-center gap-x-1'>
              <p className='w-2 h-2 bg-green rounded-full'></p>
              <p className='text-green text-eleven'>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}