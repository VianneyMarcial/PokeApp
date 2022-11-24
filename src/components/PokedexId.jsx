import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const PokedexId = () => {
  const [character, setCharacter] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => { console.log(character);
        setCharacter(res.data)});
  }, [id]);

  return (
    character && <div>
      <h1>{character.name}</h1>
      <img src={character.sprites?.other.dream_world.front_default} alt="" />
      <div className="infoPoke">
        <h2>Weight : {character.weight} </h2>
        <h2>Height : {character.height} </h2>
      </div>
      
      <div className="abilities">
        <h2 className="color">Abilities :</h2>
        {character && character.abilities.map( (ability) => {
          return <h2> {ability.ability.name} </h2>
        })}
      </div>
        <h3 className="color">Movements :</h3>
        <ul>
          {character && character.moves.map( (move) => {
                return <li>{move.move.name} </li>
              })}    
        </ul>

    </div>
  );
};

export default PokedexId;
