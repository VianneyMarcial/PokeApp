import { HashRouter, Route, Routes } from "react-router-dom";
import PokedexId from "./components/PokedexId";
import Pokedex from "./components/Pokedex";
import InputName from "./components/InputName";
import ProtectedRoutes from "./components/ProtectedRoutes";
import './index.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<InputName />} />

        <Route element={<ProtectedRoutes/>} ></Route>
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<PokedexId />} />
      </Routes>
    </HashRouter>
  );
}

export default App;