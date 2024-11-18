import React from 'react'
import Summarygraph from './Summarygraph'

const Salessummary = () => {
    return (
        <>
            <div className='flex gap-x-8 max-xl:flex-col max-xl:gap-y-6'>
                <div className='bg-white w-3/5 max-xl:w-full'>
                    <Summarygraph/>
                </div>
            </div>
        </>
    )
}

export default Salessummary
