import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const PokemonDetail = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const pokemon = state?.pokemon;

    if (!pokemon) {
        return (
            <div className="text-center mt-10 text-red-500">
                Data Pokemon tidak tersedia. Silakan kembali ke daftar.
            </div>
        );
    }

    return (
        <div className="bg-[#252A3E] min-h-screen w-screen flex flex-col">
            <Navbar navFor="detail" setNavFor="detail" />
            <div className="p-6 md:p-10 w-full max-w-4xl mx-auto">
                <div className="flex flex-row items-center gap-3 mb-2">
                    <button
                        onClick={() => navigate("/")}
                        className="text-[#97A0CC] hover:text-white transition-colors duration-200"
                        title="Kembali"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <p className="text-left text-lg text-[#97A0CC]">{pokemon.id}</p>
                </div>

                <img src={pokemon.image} alt={pokemon.name} className="mx-auto w-[200px] mb-3" />

                <div className="flex flex-row justify-between items-end mb-2">
                    <p className="text-[28px] md:text-[36px] font-bold text-white">{pokemon.name}</p>
                    <img src={pokemon.image} className="w-[50px]" alt="" />
                </div>

                <div className="flex flex-col w-full p-4 bg-[#05091B] rounded-[8px]">
                    <p className="text-sm text-[#97A0CC] mb-[5px]">Health</p>
                    <div className="w-full h-[6px] bg-[#3D4466] rounded-full overflow-hidden mb-2">
                        <div
                            className="h-full bg-gradient-to-r from-[#6CF0A1] to-[#2AE3B7] rounded-full transition-all duration-300"
                            style={{ width: `${(pokemon.health / pokemon.maxHealth) * 100}%` }}
                        ></div>
                    </div>
                    <div className="flex flex-row items-center mb-[10px] gap-2">
                        <p className="text-white text-[20px] md:text-[24px] font-bold">{pokemon.health}</p>
                        <p className="text-white text-[14px] md:text-[16px]">from {pokemon.maxHealth}</p>
                    </div>

                    <div className="w-full h-[1px] bg-[#3D4466] my-2" />

                    <div className="flex flex-wrap justify-between gap-y-4 mt-2">
                        <div className="flex flex-col items-start">
                            <p className="text-[14px] md:text-[16px] text-[#97A0CC] mb-[1px]">Attack</p>
                            <p className="text-[20px] md:text-[24px] font-bold text-white">{pokemon.attack}</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-[14px] md:text-[16px] text-[#97A0CC] mb-[1px]">Defense</p>
                            <p className="text-[20px] md:text-[24px] font-bold text-white">{pokemon.defense}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;
