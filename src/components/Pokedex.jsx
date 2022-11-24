import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const Pokedex = () => {
  const userName = useSelector((state) => state.name);
  const [characters, setCharacters] = useState([]);
  const [charaterName, setCharacterName] =useState("");
  const [types, setTypes] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => setCharacters(res.data.results));


      axios.get('https://pokeapi.co/api/v2/type/')
        .then(res => {
          setTypes(res.data.results)})
  }, []);

  const searchCharacter = () => {
    navigate(`/pokedex/${charaterName.toLowerCase()}`);
  }

  const filterType = (e) => {
    const url = e.target.value;
    axios.get(url).then((res) => setCharacters(res.data.pokemon));
  };


  const [page, setPage] = useState(1);
  const pokemonPerPage = 5;
  const lastIndex= page*pokemonPerPage;
  const firstIndex = lastIndex-pokemonPerPage;
  const pokemonPaginated = characters.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(characters.length/pokemonPerPage);

  return (
    <div >
      <h1>Characters</h1>
      <p>Welcome {userName}!</p>
      <div className="infoSet">
        <input type="text" placeholder="'search character" value={charaterName} onChange={(e) => setCharacterName(e.target.value)} />
        <button onClick={searchCharacter}> Search </button>
      </div>
      <div className="infoSet">
        <button 
          onClick={() => setPage(page+1) }
          disabled={page === 1}
        >Prev Page</button>
        <button 
          onClick={() => setPage(page-1) }
          disabled={page === totalPages}
        >Next Page</button>
      </div>
      {types && <select className="filter" onChange={filterType} name="" id="">
        {types.map(type => (
            <option value={type.url}  key={type.name}>{type.name}</option>
          ))}
          </select>
          }
      <ul>
        {pokemonPaginated.map((character) => (
          <CharacterCard 
            url={character.url ? character.url: character.pokemon.url} 
            key={character.url ? character.url: character.pokemon.url} 
          />
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
