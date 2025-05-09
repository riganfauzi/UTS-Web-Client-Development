import React, { useState } from "react";

const Navbar = ({ navFor, setKeyword }) => {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center py-[6px] px-5 md:px-10 relative">
                <img src="/public/assets/logo.png" alt="Logo" className="h-[35px]" />

                {navFor !== "detail" && (
                    <div className="flex items-center gap-2">
                        {showSearch && (
                            <input
                                type="text"
                                placeholder="Search..."
                                onChange={(e) => setKeyword(e.target.value)}
                                className="rounded-md px-3 py-1 text-sm text-[#263156] bg-white outline-none placeholder:text-gray-400"
                            />
                        )}
                        <img
                            src="/public/assets/search.png"
                            alt="Search"
                            className="h-[20px] cursor-pointer"
                            onClick={() => setShowSearch((prev) => !prev)}
                        />
                    </div>
                )}
            </div>
            <div className="w-full h-[1px] bg-[#626a91]"></div>
        </div>
    );
};

export default Navbar;
