import React from 'react'

export default function Resultcards() {
    return (
        <div className='grid grid-cols-4 gap-7'>
            <div className='bg-green text-white w-full'>
                <div className='flex items-center justify-between p-2.5'>
                    <div>
                        <h4 className='text-lg font-bold my-2.5'>1252</h4>
                        <p className='mb-2.5 text-fifteen'>Total Customer</p>
                    </div>
                    <div className='text-7xl text-[rgba(0,0,0,0.2)] hover:scale-110 hover:z-30 transition-transform duration-300 ease-linear'>
                        <i className="fa fa-users" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="bg-[rgba(0,0,0,0.1)] text-center text-sm py-three">
                    Total Customer
                </div>
            </div>
        </div>
    )
}
