import React from 'react'

const Due = () => {
    return (
        <>
            <div className='flex gap-x-8 max-xl:flex-col max-xl:gap-y-6'>
                {/* Sales Due */}
                <div className='bg-white w-6/12 max-xl:w-full border border-slate-200'>
                    <div className='py-2.5 p-fifteen flex justify-between border-b border-slate-300'>
                        <h4 className='text-lg text-[#374767] pb-2.5'>Todays Sales Due</h4>
                        <a href='#' className='py-1.5 px-3 text-white bg-green rounded-sm'>See All</a>
                    </div>
                    <div className='p-fifteen'>
                        <div className='overflow-scroll h-300'>
                            <table className="text-sm border w-full text-left">
                                <tbody>
                                    <tr className='text-[#374767]'>
                                        <th className='border border-slate-300 p-2'>SL.</th>
                                        <th className='border border-slate-300 p-2'>Customer Name</th>
                                        <th className='border border-slate-300 p-2'>Voucher No</th>
                                        <th className='border border-slate-300 p-2'>Due Amount</th>
                                    </tr>
                                    <tr className='bg-[#F9F9F9] text-[#374767] text-center'>
                                        <th className='border border-slate-300 p-2' colSpan="4">
                                            Record not found
                                        </th>
                                    </tr>
                                    <tr className='text-right'>
                                        <th className='border border-slate-300 p-2 text-[#374767]' colSpan="3">Total:</th>
                                        <td className='border border-slate-300 p-2'>$ 0.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* Purchase Due */}
                <div className='bg-white w-6/12 max-xl:w-full border border-slate-200'>
                    <div className='py-2.5 p-fifteen flex justify-between border-b border-slate-300'>
                        <h4 className='text-lg text-[#374767] pb-2.5'>Todays Purchase Due</h4>
                        <a href='#' className='py-1.5 px-3 text-white bg-green rounded-sm'>See All</a>
                    </div>
                    <div className='p-fifteen'>
                        <div className='overflow-scroll h-300'>
                            <table className="text-sm border w-full text-left">
                                <tbody>
                                    <tr className='text-[#374767]'>
                                        <th className='border border-slate-300 p-2'>SL.</th>
                                        <th className='border border-slate-300 p-2'>Supplier Name</th>
                                        <th className='border border-slate-300 p-2'>Purchase ID</th>
                                        <th className='border border-slate-300 p-2'>Due Amount</th>
                                    </tr>
                                    <tr className='bg-[#F9F9F9] text-[#374767] text-center'>
                                        <th className='border border-slate-300 p-2' colSpan="4">
                                            Record not found
                                        </th>
                                    </tr>
                                    <tr className='text-right'>
                                        <th className='border border-slate-300 p-2 text-[#374767]' colSpan="3">Total:</th>
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

export default Due
