import React from 'react'
import { GoBook } from "react-icons/go"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const Reportdropdown = () => {

    const Sale = [
        {
            id: 1,
            title: "Closing Report",
            route: "/closingreport"
        },
        {
            id: 2,
            title: "Todays Report",
            route: "/todaysreport"
        },
        {
            id: 3,
            title: "Todays Customer Receipt",
            route: "/todayscustomerreceipt"
        },
        {
            id: 4,
            title: "Sales Report",
            route: "/salesreport"
        },
        {
            id: 5,
            title: "User Wise Sales Report",
            route: "/userwisesalesreport"
        },
        {
            id: 6,
            title: "Due Report",
            route: "/duereport"
        },
        {
            id: 7,
            title: "Shipping Cost Report",
            route: "/shippingcostreport"
        },
        {
            id: 8,
            title: "Purchase Report",
            route: "/purchasereport"
        },
        {
            id: 9,
            title: "Purchase Report (Category wise)",
            route: "/purchasereportcategorywise"
        },
        {
            id: 10,
            title: "Sales Report (Product wise)",
            route: "/salesreportproductwise"
        },
        {
            id: 11,
            title: "Sales Report (Category wise)",
            route: "/salesreportcategorywise"
        },
        {
            id: 12,
            title: "Sales Return",
            route: "/salesreturn"
        },
        {
            id: 13,
            title: "Supplier Return",
            route: "/supplierreturn"
        },
        {
            id: 14,
            title: "TAX Report",
            route: "/taxreport"
        }

    ]

    return (
        <>
            <ul className="text-menucolor text-fifteen">
                <li>
                    <details className="group">
                        <summary className="flex items-center justify-between marker:content-none cursor-pointer hover:bg-[#3E454C] hover:text-white pr-3 pl-fifteen py-3 group-open:bg-[#3E454C] group-open:text-white">
                            <div className="flex items-center">
                                <GoBook className="mr-2.5 text-lg" />
                                <span>Report</span>
                            </div>
                            <MdKeyboardArrowLeft className="w-5 h-5 text-gray-500 transition-transform duration-500 ease-in-out group-open:rotate-[-90deg]" />
                        </summary>

                        {/* Dropdown content */}
                        <article className="transition-all duration-1000 ease-in-out group-open:max-h-auto pl-9 bg-dropdownbg text-sm">
                            <ul className="flex flex-col border-l border-[#3B4648] pt-five">
                                <li className="relative pl-5 py-five pr-five">
                                    <span className="absolute left-0 top-3.5 w-4 border border-[#3B4648]"></span>
                                    <NavLink to="/closing" end className='hover:text-white'>Closing</NavLink>
                                </li>
                            </ul>
                            {
                                Sale.map((data) => {
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
                                    <NavLink to="/profitreportsalewise" className='hover:text-white'>Profit Report (Sale Wise)</NavLink>
                                </li>
                            </ul>
                        </article>
                    </details>
                </li>
            </ul>
        </>
    )
}

export default Reportdropdown
