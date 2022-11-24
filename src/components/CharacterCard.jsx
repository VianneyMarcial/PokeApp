import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ url }) => {
  const [character, setCharacter] = useState({});
  
  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data));
  }, []);


  return (
    <Link to={`/pokedex/${character.name}`}>
      <h1>{character.name}</h1>
      <img src={character.sprites?.other.dream_world.front_default} alt="" />
    </Link>
  );
};

export default CharacterCard;
