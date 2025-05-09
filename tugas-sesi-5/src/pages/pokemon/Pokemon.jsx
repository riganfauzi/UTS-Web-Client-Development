import { React, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Filter from "../../components/filter/Filter";
import ListPokemon from "../../components/list_pokemon/ListPokemon";

const Pokemon = () => {
    const [view, setView] = useState("grid");
    const [sortBy, setSortBy] = useState("");
    const [navFor] = useState("home");
    const [keyword, setKeyword] = useState("");

    return (
        <div className="bg-[#252A3E] h-full w-screen flex flex-col justify-start">
            <Navbar navFor={navFor} setKeyword={setKeyword} />
            <Filter view={view} setView={setView} sortBy={sortBy} setSortBy={setSortBy} />
            <ListPokemon view={view} sortBy={sortBy} keyword={keyword} />
        </div>
    );
};

export default Pokemon;
