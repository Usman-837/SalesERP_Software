import React from 'react'
import { FaRegMoneyBillAlt } from "react-icons/fa"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { NavLink } from 'react-router-dom'

const Accountsdropdown = () => {

    const Sale = [
        {
            id: 1,
            title: "Sub Account List",
            route: "/subaccountlist"
        },
        {
            id: 2,
            title: "Predefined Accounts",
            route: "/predefinedaccounts"
        },
        {
            id: 3,
            title: "Financial Year",
            route: "/financialyear"
        },
        {
            id: 4,
            title: "Opening Balance",
            route: "/openingbalance"
        },
        {
            id: 5,
            title: "Debit Voucher",
            route: "/debitcoucher"
        },
        {
            id: 6,
            title: "Credit Voucher",
            route: "/creditvoucher"
        },
        {
            id: 7,
            title: "Contra Voucher",
            route: "/contravoucher"
        },
        {
            id: 8,
            title: "Journal Voucher",
            route: "/journalvoucher"
        },
        {
            id: 9,
            title: "Bank Reconciliation",
            route: "/bankreconciliation"
        },
        {
            id: 10,
            title: "Add Payment Method",
            route: "/addpaymentmethod"
        },
        {
            id: 11,
            title: "Payment Method List",
            route: "/paymentmethodlist"
        },
        {
            id: 12,
            title: "Supplier Payment",
            route: "/supplierpayment"
        },
        {
            id: 13,
            title: "Customer Receive",
            route: "/customerreceive"
        },
        {
            id: 14,
            title: "Service Payment",
            route: "/servicepayment"
        },
        {
            id: 15,
            title: "Cash Adjustment",
            route: "/cashadjustment"
        },
        {
            id: 16,
            title: "Vouchar Approval",
            route: "/voucharapproval"
        },

    ]

    return (
        <>
            <ul className="text-menucolor text-fifteen">
                <li>
                    <details className="group">
                        <summary className="flex items-center justify-between marker:content-none cursor-pointer hover:bg-[#3E454C] hover:text-white pr-3 pl-fifteen py-3 group-open:bg-[#3E454C] group-open:text-white">
                            <div className="flex items-center">
                                <FaRegMoneyBillAlt className="mr-2.5 text-lg" />
                                <span>Accounts</span>
                            </div>
                            <MdKeyboardArrowLeft className="w-5 h-5 text-gray-500 transition-transform duration-500 ease-in-out group-open:rotate-[-90deg]" />
                        </summary>

                        {/* Dropdown content */}
                        <article className="transition-all duration-1000 ease-in-out group-open:max-h-auto pl-9 bg-dropdownbg text-sm">
                            <ul className="flex flex-col border-l border-[#3B4648] pt-five">
                                <li className="relative pl-5 py-five pr-five">
                                    <span className="absolute left-0 top-3.5 w-4 border border-[#3B4648]"></span>
                                    <NavLink to="/chartaccount" end className='hover:text-white'>Chart of Account</NavLink>
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
                                    <span className='hover:text-white'>Report</span>
                                </li>
                            </ul>
                        </article>
                    </details>
                </li>
            </ul>
        </>
    )
}

export default Accountsdropdown
