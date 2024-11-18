import React from 'react'
import Saleproductgraph from './Saleproductgraph'
import { FaSearch } from "react-icons/fa"
import Pichart from './Pichart'

const Bestsaleproducts = () => {
    return (
        <>
            <hr className='my-5 text-slate-200'/>
            <div className='flex gap-x-8 max-xl:flex-col max-xl:gap-y-6'>
                <div className='bg-white w-3/5 max-xl:w-full'>
                    <div className='py-2.5 p-fifteen flex justify-between border-b border-slate-300'>
                        <h4 className='text-lg text-[#374767] pb-2.5'>Best Sale Product</h4>
                        <a href='#' className='py-1.5 px-3 text-white bg-green rounded-sm'>See All</a>
                    </div>
                    <div className='p-fifteen'>
                        <Saleproductgraph />
                    </div>
                </div>
                {/* Expense Statement Box */}
                <div className='bg-white w-2/5 max-xl:w-full'>
                    <div className='py-2.5 px-fifteen flex border-b border-slate-300 p-fifteen'>
                        <input
                            type="text"
                            className="bg-red-500 py-1.5 px-3 w-2/3 rounded-md placeholder-gray-300 border border-slate-300"
                            placeholder="November 2024"
                            onFocus={(e) => {
                                e.target.type = 'month'; // Change to month input on focus
                            }}
                            onBlur={(e) => {
                                if (!e.target.value) e.target.type = 'text'; // Revert to text if no value is selected
                            }}
                        />
                        <div className='flex items-center gap-x-1 py-1.5 px-2.5 text-white bg-[#008000] rounded-sm'>
                            <FaSearch className='text-sm' />
                            <a href='#'>Filter</a>
                        </div>
                    </div>
                    {/* chart */}
                    <div className='flex flex-col items-center justify-center gap-y-5 my-10'>
                        <h1 className='text-[#008000] font-bold text-2xl'>Expense statement</h1>
                        <Pichart/>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default Bestsaleproducts
