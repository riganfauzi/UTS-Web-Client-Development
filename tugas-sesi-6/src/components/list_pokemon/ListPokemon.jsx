import React from "react";
import { useNavigate } from "react-router-dom";

const dummyData = [
    {
        id: "#1001",
        type: "Grass",
        name: "Bulbasaur",
        image: "/public/assets/pokemon1.png",
        health: 900,
        maxHealth: 1000,
        attack: 30,
        defense: 50,
    },
    {
        id: "#1002",
        type: "Rock",
        name: "Kabuto",
        image: "/public/assets/pokemon2.png",
        health: 130,
        maxHealth: 1200,
        attack: 38,
        defense: 59,
    },
    {
        id: "#1003",
        type: "Grass/Poison",
        name: "Ivysaur",
        image: "/public/assets/pokemon3.png",
        health: 1020,
        maxHealth: 1280,
        attack: 62,
        defense: 63,
    },
    {
        id: "#1004",
        type: "Grass/Poison",
        name: "Venusaur",
        image: "/public/assets/pokemon4.png",
        health: 755,
        maxHealth: 1000,
        attack: 82,
        defense: 83,
    },
    {
        id: "#1005",
        type: "Fire",
        name: "Chamander",
        image: "/public/assets/pokemon5.png",
        health: 886,
        maxHealth: 1200,
        attack: 52,
        defense: 43,
    },
    {
        id: "#1006",
        type: "Fire",
        name: "Charmeleon",
        image: "/public/assets/pokemon6.png",
        health: 910,
        maxHealth: 1280,
        attack: 64,
        defense: 58,
    },
    {
        id: "#1007",
        type: "Fire/Flying",
        name: "Charizard",
        image: "/public/assets/pokemon7.png",
        health: 780,
        maxHealth: 1000,
        attack: 84,
        defense: 78,
    },
    {
        id: "#1008",
        type: "Water",
        name: "Squirtle",
        image: "/public/assets/pokemon8.png",
        health: 440,
        maxHealth: 1000,
        attack: 48,
        defense: 65,
    },
    {
        id: "#1009",
        type: "Water",
        name: "Wartortle",
        image: "/public/assets/pokemon9.png",
        health: 590,
        maxHealth: 1000,
        attack: 63,
        defense: 80,
    },
    {
        id: "#1010",
        type: "Water",
        name: "Blastoise",
        image: "/public/assets/pokemon10.png",
        health: 790,
        maxHealth: 1000,
        attack: 83,
        defense: 100,
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
                    onClick={() => {
                        localStorage.setItem("selectedPokemon", JSON.stringify(pokemon));
                        navigate(`/pokemon/${pokemon.id.replace("#", "")}`, );
                    }}
                    className={`bg-[#303555] px-4 py-4 rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer transition-all duration-300 ${
                        view === "grid" ? "w-full h-fit" : "w-full mb-4"
                    }`}
                >
                    {view !== "grid" && (
                        <div className="flex flex-row justify-between items-center mb-4">
                            <p className="text-[18px] text-[#11B047] font-semibold">{pokemon.type}</p>
                            <p className="text-[18px] text-[#a9a9a9] font-semiold">{pokemon.id}</p>
                        </div>
                    )}
                    <div className={`h-42 w-full flex flex-col justify-between items-center ${view === "grid" ? "mt-6" : ""}`}>
                        <img src={pokemon.image} alt="pokemon" className="h-[120px] w-full object-contain" />
                        <p className="text-[18px] text-[#ffffff] font-semibold text-center mt-4">{pokemon.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListPokemon;
