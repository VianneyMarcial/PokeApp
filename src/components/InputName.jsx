import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName } from "../store/slices/name.slices";

const InputName = () => {

  const [ userName, setUserName] = useState("");

  const navigate = useNavigate();
  const dispatch =useDispatch();

  const enterName = () => {
    dispatch(changeName(userName));
    navigate("/pokedex")
  }

  return (
    <div className="initial">
      <img className="imgP" src="https://i.pinimg.com/originals/34/c1/e5/34c1e5d371d64a581b1902ec5c4509f4.png" alt="" />
      <h1>Input name</h1> <img src="https://media.tenor.com/74l5y1hUdtwAAAAj/pokemon.gif" alt="" className="pika"/>
      <input type="text" onChange={e => setUserName(e.target.value)} className="inputName" placeholder="Enter your name here"/>
      <button onClick={enterName}>Enter </button>
    </div>
  );
};

export default InputName;
