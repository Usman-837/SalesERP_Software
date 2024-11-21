import React from 'react'
import { TfiShoppingCart } from "react-icons/tfi"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const Purchasedropdown = () => {
    return (
        <>
            <ul className="flex flex-col gap-2 text-menucolor text-fifteen">
                <li>
                    <details className="group">
                        <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none cursor-pointer hover:bg-[#3E454C] hover:text-white pr-3 pl-fifteen group-open:bg-[#3E454C] group-open:text-white">
                            <div className="flex items-center">
                                <TfiShoppingCart className="mr-2.5 text-lg" />
                                <span>Purchase</span>
                            </div>
                            <MdKeyboardArrowLeft className="w-5 h-5 text-gray-500 transition-transform duration-500 ease-in-out group-open:rotate-[-90deg]" />
                        </summary>

                        {/* Dropdown content */}
                        <article className="overflow-hidden transition-all duration-1000 ease-in-out max-h-0 group-open:max-h-64 pl-9 bg-dropdownbg text-sm">
                            <ul className="flex flex-col border-l border-[#3B4648] pt-five pb-2.5">
                                <li className="relative pl-5 pt-five pr-five pb-five">
                                    <span className="absolute left-0 top-3.5 w-4 border border-[#3B4648]"></span>
                                    <NavLink to="/addpurchase" end className='hover:text-white'>Add Purchase</NavLink>
                                </li>
                                <li className="relative pl-5 pt-five pr-five pb-five">
                                    <span className="absolute left-0 top-3.5 w-4 border border-[#3B4648]"></span>
                                    <NavLink to="/managepurchase" end className='hover:text-white'>Manage Purchase</NavLink>
                                </li>
                            </ul>
                        </article>
                    </details>
                </li>
            </ul>
        </>
    )
}

export default Purchasedropdown
