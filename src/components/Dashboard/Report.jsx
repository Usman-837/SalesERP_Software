import React from 'react'

const Report = () => {
    return (
        <>
            <div className='my-6'>
                {/* Sales Report */}
                <div className='bg-white w-full border border-slate-200'>
                    <div className='py-2.5 p-fifteen flex justify-between border-b border-slate-300'>
                        <h4 className='text-lg text-[#374767] pb-2.5'>Todays Sales Report</h4>
                        <a href='#' className='py-1.5 px-3 text-white bg-green rounded-sm'>See All</a>
                    </div>
                    <div className='p-fifteen'>
                        <div className='overflow-scroll h-300'>
                            <table className="text-sm border w-full text-left">
                                <tbody>
                                    <tr className='text-[#374767]'>
                                        <th className='border border-slate-300 p-2'>SL.</th>
                                        <th className='border border-slate-300 p-2'>Customer Name</th>
                                        <th className='border border-slate-300 p-2'>Invoice No</th>
                                        <th className='border border-slate-300 p-2'>Total Amount</th>
                                        <th className='border border-slate-300 p-2'>Paid Amount</th>
                                    </tr>
                                    <tr className='bg-[#F9F9F9] text-[#374767] text-center'>
                                        <th className='border border-slate-300 p-2' colSpan="5">
                                            Record not found
                                        </th>
                                    </tr>
                                    <tr className='text-right'>
                                        <th className='border border-slate-300 p-2 text-[#374767]' colSpan="3">Total:</th>
                                        <td className='border border-slate-300 p-2'>$ 0.00</td>
                                        <td className='border border-slate-300 p-2'>$ 0.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Report
