import React from 'react'

export default function Resultcards() {

    const resultCards = [
        {
            id: 1,
            num: "1252",
            title: "Total Customer",
            bgcolor : "#37A000",
            icon : <i className="fa fa-users" aria-hidden="true"></i>
        },
        {
            id: 2,
            num: "19",
            title: "Total Products",
            bgcolor: "#6CABBC",
            icon : <i class="fa fa-shopping-bag" aria-hidden="true"></i>
        },
        {
            id: 3,
            num: "0",
            title: "Total Supplier",
            bgcolor: "#8459CF",
            icon : <i class="fa fa-user" aria-hidden="true"></i>
        },
        {
            id: 4,
            num: "23",
            title: "Total Sale",
            bgcolor: "#749057",
            icon : <i class="fa fa-money" aria-hidden="true"></i>
        }
    ]

    return (
        <div className='grid grid-cols-4 gap-7 max-xl:grid-cols-2 max-xs:grid-cols-1'>
            {
                resultCards.map((data) => {
                    return (
                        <div key={data.id} className='text-white w-full' style={{ backgroundColor: data.bgcolor }}>
                            <div className='flex items-center justify-between p-2.5'>
                                <div>
                                    <h4 className='text-lg font-bold my-2.5'>{data.num}</h4>
                                    <p className='mb-2.5 text-fifteen'>{data.title}</p>
                                </div>
                                <div className='text-7xl text-[rgba(0,0,0,0.2)] hover:scale-110 hover:z-30 transition-transform duration-300 ease-linear'>
                                    {data.icon}
                                </div>
                            </div>
                            <div className="bg-[rgba(0,0,0,0.1)] text-center text-sm py-three">
                                {data.title}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
