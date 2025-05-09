import React, { useState } from "react";

const Filter = ({ view, setView, sortBy, setSortBy }) => {
    const [open, setOpen] = useState(false);

    const options = ["Name", "Type", "HP", "Attack", "Defense"];

    return (
        <div className="flex flex-row px-5 md:px-10 py-3 justify-between md:justify-end items-center ">
            <div className="relative w-3/4 md:w-1/4 mr-4">
                <button
                    onClick={() => setOpen(!open)}
                    className="bg-[#3D4466] text-[#97A0CC] px-4 py-2 rounded-lg w-full text-left flex justify-between items-center"
                >
                    {sortBy || "Sort by"}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="#97A0CC"
                        className="ml-2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                </button>
                {open && (
                    <ul className="absolute z-10 mt-1 w-full bg-[#2f355f] rounded-lg shadow-lg">
                        {options.map((option) => (
                            <li
                                key={option}
                                onClick={() => {
                                    setSortBy(option);
                                    setOpen(false);
                                }}
                                className="px-4 py-2 text-[#a1a6dc] hover:bg-[#3b4172] cursor-pointer"
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="flex flex-row items-cente">
                <button
                    onClick={() => setView("list")}
                    className={`${view !== "grid" ? "bg-[#3D4466]" : "bg-[#0C1231]"} px-[15px] py-3 rounded-l-[8px]`}
                >
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="9" height="9" fill="#97A0CC" />
                    </svg>
                </button>
                <div className="bg-[#97A0CC] w-[1px] h-[40px]"></div>
                <button
                    onClick={() => setView("grid")}
                    className={`${
                        view === "grid" ? "bg-[#3D4466]" : "bg-[#0C1231]"
                    } px-[13px] py-[13px] rounded-r-[8px]`}
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="4" height="4" fill="#97A0CC" />
                        <rect x="8" y="1" width="4" height="4" fill="#97A0CC" />
                        <rect x="1" y="8" width="4" height="4" fill="#97A0CC" />
                        <rect x="8" y="8" width="4" height="4" fill="#97A0CC" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Filter;