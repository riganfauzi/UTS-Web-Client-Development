// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import Pokemon from "./pages/pokemon/Pokemon";
import PokemonDetail from "./pages/pokemon_detail/PokemonDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Pokemon />} />
                <Route path="/pokemon/:id" element={<PokemonDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
