import React from 'react'
import logo from "../../assets/logo.png"
import profile from "../../assets/profile.jpg"
import { TfiDashboard } from "react-icons/tfi"
import { useSelector } from "react-redux"
import { NavLink } from 'react-router-dom'
import Saledropdown from './Saledropdown'
import Customerdropdown from './Customerdropdown'
import Supplierdropdown from './Supplierdropdown'
import Productdropdown from './Productdropdown'
import Purchasedropdown from './Purchasedropdown'
import Stockdropdown from './Stockdropdown'
import Accountsdropdown from './Accountsdropdown'

export default function Sidebar() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <aside className={`bg-custom-black absolute top-0 left-0 max-md:top-[123px] max-sm:z-40 transition-all duration-400 max-sm:max-w-screen-sm ${isOpen ? 'max-w-250 w-full' : 'w-0'}`}>
      {
        isOpen && <div className='h-svh'>
          {/* logo */}
          <div className='flex items-center justify-center bg-[#3E454C] px-fifteen h-sixtyone max-md:hidden'>
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
          {/* Sidebar Menus */}
          {/* Dashboard Menu */}
          <div className='flex items-center text-menucolor text-fifteen py-2.5 pr-five pl-fifteen hover:bg-[#3E454C] hover:text-white'>
            <div className='flex items-center'>
              <TfiDashboard className='mr-2.5 text-lg' />
              <NavLink to="/" end >Dashboard</NavLink>
            </div>
          </div>
          {/* Sale Menu */}
          <div>
            <Saledropdown/>
          </div>
          {/* Customer Menu */}
          <div>
            <Customerdropdown/>
          </div>
          {/* Supplier Menu */}
          <div>
            <Supplierdropdown/>
          </div>
          {/* Product Menu */}
          <div>
            <Productdropdown/>
          </div>
           {/* Purchase Menu */}
           <div>
            <Purchasedropdown/>
          </div>
           {/* Stockdropdown Menu */}
           <div>
            <Stockdropdown/>
          </div>
          {/* Accounts Menu */}
          <div>
            <Accountsdropdown/>
          </div>
        </div>
      }
    </aside>
  )
}
