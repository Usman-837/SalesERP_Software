import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi2"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const Customerdropdown = () => {
    return (
        <>
            <ul className="flex flex-col gap-2 text-menucolor text-fifteen">
                <li>
                    <details className="group">
                        <summary className="flex items-center justify-between marker:content-none cursor-pointer hover:bg-[#3E454C] hover:text-white pr-3 pl-fifteen py-3 group-open:bg-[#3E454C] group-open:text-white">
                            <div className="flex items-center">
                                <HiOutlineUserCircle className="mr-2.5 text-lg" />
                                <span>Customer</span>
                            </div>
                            <MdKeyboardArrowLeft className="w-5 h-5 text-gray-500 transition-transform duration-500 ease-in-out group-open:rotate-[-90deg]" />
                        </summary>

                        {/* Dropdown content */}
                        <article className="overflow-hidden transition-all duration-1000 ease-in-out max-h-0 group-open:max-h-64 pl-9 bg-dropdownbg text-sm">
                            <ul className="flex flex-col border-l border-[#3B4648] pt-five pb-2.5">
                                <li className="relative pl-5 pt-five pr-five pb-five">
                                    <span className="absolute left-0 top-3.5 w-4 border border-[#3B4648]"></span>
                                    <NavLink to="/addcustomer" end className='hover:text-white'>Add Customer</NavLink>
                                </li>
                                <li className="relative pl-5 pt-five pr-five pb-five">
                                    <span className="absolute left-0 top-3.5 w-4 border border-[#3B4648]"></span>
                                    <NavLink to="/customerlist" end className='hover:text-white'>Customer List</NavLink>
                                </li>
                            </ul>
                        </article>
                    </details>
                </li>
            </ul>
        </>
    )
}

export default Customerdropdown
