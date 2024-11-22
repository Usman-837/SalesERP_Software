import React from 'react';
import { FaUsers, FaRegClock, FaPaypal } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const dropdownData = [
    {
        title: "Human Resource",
        icon: <FaUsers className="text-lg" />,
        subItems: [
            {
                name: "HRM",
                icon: <FaUsers className="text-sm" />,
                subItems: [
                    { name: "Add Designation", route: "/adddesignation" },
                    { name: "Manage Designation", route: "/managedesignation" },
                    { name: "Add Employee", route: "/addemployee" },
                    { name: "Manage Employee", route: "/manageemployee" }
                ],
            },
            {
                name: "Attendance",
                icon: <FaRegClock className="text-sm" />,
                subItems: [
                    { name: "Attendance", route: "/attendance" },
                    { name: "Manage Attendance", route: "/manageattendave" },
                    { name: "Attendance Report", route: "/attendancereport" }
                ],
            },
            {
                name: "Payroll",
                icon: <FaPaypal className="text-lg" />,
                subItems: [
                    { name: "Salary Advance", route: "/salaryadvance" },
                    { name: "Salary Generate", route: "/salarygenerate" },
                    { name: "Manage Employee Salary", rout: "/manageemployeesalary" }
                ],
            },
        ],
    },
];

const Humandropdown = () => {
    return (
        <ul className="gap-2 text-menucolor text-fifteen">
            {dropdownData.map((item, index) => (
                <li key={index}>
                    <details className="group">
                        <summary className="flex items-center justify-between marker:content-none cursor-pointer hover:bg-[#3E454C] hover:text-white pr-3 pl-fifteen py-3 group-open:bg-[#3E454C] group-open:text-white">
                            <div className="flex items-center">
                                {item.icon}
                                <span className="ml-2">{item.title}</span>
                            </div>
                            <MdKeyboardArrowLeft className="w-5 h-5 text-gray-500 transition-transform duration-500 ease-in-out group-open:rotate-[-90deg]" />
                        </summary>

                        {/* Dropdown content */}
                        <article className="transition-all duration-1000 ease-in-out group-open:max-h-auto pl-9 bg-dropdownbg text-sm">
                            <ul className="flex flex-col border-l border-[#3B4648] pt-five pb-2.5">
                                {item.subItems?.map((subItem, subIndex) => (
                                    <li key={subIndex} className="relative pl-5 pt-five pr-3.5 pb-five">
                                        <span className="absolute left-0 top-3.5 w-4 border border-[#3B4648]"></span>
                                        <details className="group">
                                            <summary className="flex items-center justify-between cursor-pointer hover:text-white">
                                                <div className="flex items-center gap-x-2">
                                                    {subItem.icon}
                                                    <span>{subItem.name}</span>
                                                </div>
                                                {subItem.subItems && (
                                                    <MdKeyboardArrowLeft className="w-4 h-4 text-gray-500 transition-transform duration-500 ease-in-out group-open:rotate-[-90deg]" />
                                                )}
                                            </summary>

                                            {/* Sub-dropdown for HRM */}
                                            {subItem.subItems && (
                                                <ul className="mt-3 ml-1.5 space-y-1 border-l border-[#3B4648]">
                                                    {subItem.subItems.map((nestedItem, nestedIndex) => (
                                                        <li
                                                            key={nestedIndex}
                                                            className="relative pl-5 pb-2 pr-5"
                                                        >
                                                            <span className="absolute left-0 top-2 w-4 border border-[#3B4648]"></span>
                                                            <div className="flex items-center gap-x-2 hover:text-white">
                                                                <NavLink to={nestedItem.route}>{nestedItem.name}</NavLink>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </details>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </details>
                </li>
            ))}
        </ul>
    );
};

export default Humandropdown;
