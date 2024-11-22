import React from 'react'
import { FaRetweet } from "react-icons/fa"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { NavLink} from 'react-router-dom'

const Returndropdown = () => {

    const Service = [
        {
            id: 1,
            title: "Stock Return List",
            route: "/stockreturnlist"
        },
        {
            id: 2,
            title: "Supplier Return List",
            route: "/supplierreturnlist"
        }
    ]

    return (
        <>
            <ul className="text-menucolor text-fifteen">
                <li>
                    <details className="group">
                        <summary className="flex items-center justify-between marker:content-none cursor-pointer hover:bg-[#3E454C] hover:text-white pr-3 pl-fifteen py-3 group-open:bg-[#3E454C] group-open:text-white">
                            <div className="flex items-center">
                                <FaRetweet className="mr-2.5 text-lg" />
                                <span>Return</span>
                            </div>
                            <MdKeyboardArrowLeft className="w-5 h-5 text-gray-500 transition-transform duration-500 ease-in-out group-open:rotate-[-90deg]" />
                        </summary>

                        {/* Dropdown content */}
                        <article className="transition-all duration-1000 ease-in-out group-open:max-h-auto pl-9 bg-dropdownbg text-sm">
                            <ul className="flex flex-col border-l border-[#3B4648] pt-five">
                                <li className="relative pl-5 py-five pr-five">
                                    <span className="absolute left-0 top-3.5 w-4 border border-[#3B4648]"></span>
                                    <NavLink to="/return" end className='hover:text-white'>Return</NavLink>
                                </li>
                            </ul>
                            {
                                Service.map((data) => {
                                    return (
                                        <ul key={data.id} className="flex flex-col border-l border-[#3B4648]">
                                            <li className="relative pl-5 py-five pr-five">
                                                <span className="absolute left-0 top-3.5 w-4 border border-[#3B4648]"></span>
                                                <NavLink to={data.route} end className='hover:text-white'>{data.title}</NavLink>
                                            </li>
                                        </ul>
                                    )
                                })
                            }
                            <ul className="flex flex-col border-l border-[#3B4648] pb-2.5">
                                <li className="relative pl-5 py-five pr-five">
                                    <span className="absolute left-0 top-3.5 w-4 border border-[#3B4648]"></span>
                                    <NavLink to="/wastagereturnlist" end className='hover:text-white'>Wastage Return List</NavLink>
                                </li>
                            </ul>
                        </article>
                    </details>
                </li>
            </ul>
        </>
    )
}

export default Returndropdown
