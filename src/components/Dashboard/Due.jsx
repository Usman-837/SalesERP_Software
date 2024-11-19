import React from 'react'

const Due = () => {
    return (
        <>
            <div className='flex gap-x-8 max-xl:flex-col max-xl:gap-y-6'>
                <div className='bg-white w-6/12 max-xl:w-full'>
                    <div className='py-2.5 p-fifteen flex justify-between border-b border-slate-300'>
                        <h4 className='text-lg text-[#374767] pb-2.5'>Todays Sales Due</h4>
                        <a href='#' className='py-1.5 px-3 text-white bg-green rounded-sm'>See All</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Due
