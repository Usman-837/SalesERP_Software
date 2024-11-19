import React from 'react'
import Summarygraph from './Summarygraph'

const Salessummary = () => {
    return (
        <>
            <div className='flex gap-x-8 max-xl:flex-col max-xl:gap-y-6 my-6'>
                <div className='bg-white w-8/12 max-xl:w-full p-fifteen'>
                    <div className='mt-10 px-fifteen'>
                        <Summarygraph />
                    </div>
                </div>
                <div className='bg-white w-4/12'>
                    <div className='py-2.5 p-fifteen border-b border-slate-300'>
                        <h4 className='text-lg text-[#374767] pb-2.5'>Today Overview</h4>
                    </div>
                    <div className='p-fifteen'>
                        <table className="text-sm border w-full text-left">
                            <tbody>
                                <tr className='bg-[#F9F9F9]'>
                                    <th className='border border-slate-300 p-2 text-[#374767]'>Todays Report</th>
                                    <th className='border border-slate-300 p-2 text-[#374767]'>TK</th>
                                </tr>
                                <tr>
                                    <th className='border border-slate-300 p-2 text-[#374767]'>Total Sales</th>
                                    <td className='border border-slate-300 p-2'>$ 0.00</td>
                                </tr>
                                <tr className='bg-[#F9F9F9]'>
                                    <th className='border border-slate-300 p-2 text-[#374767]'>Total Purchase</th>
                                    <td className='border border-slate-300 p-2'>$ 0.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="text-sm border w-full text-left mt-7">
                            <tr className='bg-[#F9F9F9]'>
                                <th className='border border-slate-300 p-2 text-[#374767]'>Last Sales</th>
                                <th className='border border-slate-300 p-2 text-[#374767]'>TK</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Salessummary
