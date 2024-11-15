import React from 'react'
import { HiOutlineHome } from "react-icons/hi2"

export default function Directory() {
    return (
        <div>
            <div className="text-thirteen flex justify-end my-five">
                <div className="flex gap-x-2">
                    <a href="#" className="flex items-center gap-x-1">
                        <HiOutlineHome />
                        <p>Home</p>
                    </a>
                    <span> / </span>
                    <p>Dashboard</p>
                    <span className="text-[#ABABAB]"> / </span>
                    <p className="text-[#ABABAB]">Dashboard</p>
                </div>
            </div>
        </div>
    )
}
