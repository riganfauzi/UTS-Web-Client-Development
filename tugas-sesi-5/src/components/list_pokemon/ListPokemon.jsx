import React from "react";
import { useNavigate } from "react-router-dom";

const dummyData = [
    {
        id: "#1001",
        type: "Grass",
        name: "Bulbasaur",
        image: "/public/assets/pokemon_1.png",
        health: 900,
        maxHealth: 1000,
        attack: 30,
        defense: 50,
    },
    {
        id: "#1002",
        type: "Rock",
        name: "Kabuto",
        image: "/public/assets/pokemon_2.png",
        health: 130,
        maxHealth: 1200,
        attack: 38,
        defense: 59,
    },
    {
        id: "#1003",
        type: "Grass",
        name: "Bulbasaur",
        image: "/public/assets/pokemon_1.png",
        health: 180,
        maxHealth: 1280,
        attack: 67,
        defense: 59,
    },
    {
        id: "#1004",
        type: "Rock",
        name: "Kabuto",
        image: "/public/assets/pokemon_2.png",
        health: 100,
        maxHealth: 1000,
        attack: 30,
        defense: 50,
    },
    {
        id: "#1005",
        type: "Grass",
        name: "Bulbasaur",
        image: "/public/assets/pokemon_1.png",
        health: 130,
        maxHealth: 1200,
        attack: 38,
        defense: 59,
    },
    {
        id: "#1006",
        type: "Rock",
        name: "Kabuto",
        image: "/public/assets/pokemon_2.png",
        health: 180,
        maxHealth: 1280,
        attack: 67,
        defense: 59,
    },
    {
        id: "#1007",
        type: "Grass",
        name: "Bulbasaur",
        image: "/public/assets/pokemon_1.png",
        health: 100,
        maxHealth: 1000,
        attack: 30,
        defense: 50,
    },
    {
        id: "#1008",
        type: "Rock",
        name: "Kabuto",
        image: "/public/assets/pokemon_2.png",
        health: 100,
        maxHealth: 1000,
        attack: 30,
        defense: 50,
    },
];

const ListPokemon = ({ view, sortBy, keyword }) => {
    const navigate = useNavigate();

    const filteredData = dummyData.filter((pokemon) => pokemon.name.toLowerCase().includes(keyword.toLowerCase()));

    const sortedData = [...filteredData].sort((a, b) => {
        switch (sortBy) {
            case "Name":
                return a.name.localeCompare(b.name);
            case "Type":
                return a.type.localeCompare(b.type);
            case "HP":
                return b.health - a.health;
            case "Attack":
                return b.attack - a.attack;
            case "Defense":
                return b.defense - a.defense;
            default:
                return 0;
        }
    });

    return (
        <div
            className={`px-5 md:px-10 pt-3 pb-40 mx-auto w-full ${
                view === "grid"
                    ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl"
                    : "flex flex-col max-w-4xl"
            }`}
        >
            {sortedData.map((pokemon, index) => (
                <div
                    key={index}
                    onClick={() =>
                        navigate(`/pokemon/${pokemon.id.replace("#", "")}`, {
                            state: { pokemon },
                        })
                    }
                    className={`bg-[#F0F3FF] px-4 py-4 rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer transition-all duration-300 ${
                        view === "grid" ? "w-full h-fit" : "w-full mb-4"
                    }`}
                >
                    {view !== "grid" && (
                        <div className="flex flex-row justify-between items-center mb-4">
                            <p className="text-[16px] text-[#11B047] font-bold">{pokemon.type}</p>
                            <p className="text-[16px] text-[#263156] font-bold">{pokemon.id}</p>
                        </div>
                    )}
                    <div className={`flex flex-col justify-center items-center ${view === "grid" ? "mt-6" : ""}`}>
                        <img src={pokemon.image} alt="pokemon" className="w-[178px]" />
                        <p className="text-[18px] text-[#263156] font-bold text-center leading-tight">{pokemon.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListPokemon;