import React from 'react'
import { FaUsers } from "react-icons/fa"
import { FaRegClock } from "react-icons/fa"
import { FaPaypal } from "react-icons/fa"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const Humandropdown = () => {
    return (
        <>
            <ul className="gap-2 text-menucolor text-fifteen">
                <li>
                    <details className="group">
                        <summary className="flex items-center justify-between marker:content-none cursor-pointer hover:bg-[#3E454C] hover:text-white pr-3 pl-fifteen py-3 group-open:bg-[#3E454C] group-open:text-white">
                            <div className="flex items-center">
                                <FaUsers className="mr-2.5 text-lg" />
                                <span>Human Resource</span>
                            </div>
                            <MdKeyboardArrowLeft className="w-5 h-5 text-gray-500 transition-transform duration-500 ease-in-out group-open:rotate-[-90deg]" />
                        </summary>

                        {/* Dropdown content */}
                        <article className="transition-all duration-1000 ease-in-out group-open:max-h-auto pl-9 bg-dropdownbg text-sm">
                            <ul className="flex flex-col border-l border-[#3B4648] pt-five pb-2.5">
                                <li className="relative pl-5 pt-five pr-five pb-five">
                                    <span className="absolute left-0 top-3.5 w-4 border border-[#3B4648]"></span>
                                    <div className='flex items-center gap-x-2 hover:text-white'>
                                        <FaUsers className="text-lg" />
                                        <span>HRM</span>
                                    </div>
                                </li>
                                <li className="relative pl-5 pt-five pr-five pb-five">
                                    <span className="absolute left-0 top-3.5 w-4 border border-[#3B4648]"></span>
                                    <div className='flex items-center gap-x-2 hover:text-white'>
                                        <FaRegClock className="text-sm" />
                                        <span>Attendance</span>
                                    </div>
                                </li>
                                <li className="relative pl-5 pt-five pr-five pb-five">
                                    <span className="absolute left-0 top-3.5 w-4 border border-[#3B4648]"></span>
                                    <div className='flex items-center gap-x-2 hover:text-white'>
                                        <FaPaypal className="text-lg" />
                                        <span>Payroll</span>
                                    </div>
                                </li>
                            </ul>
                        </article>
                    </details>
                </li>
            </ul>
        </>
    )
}

export default Humandropdown
