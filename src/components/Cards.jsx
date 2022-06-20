import axios from "axios";
import React, { useState,useEffect } from "react"
import Card from "./Card";

const Cards = () => {
    const [Data, setData] = useState([]);
    const  getPokemon =  async  () => {
      const res= await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
      await res.data.results.map(async(data,key) => {
        const response= await axios.get(data.url)
        setData((Data) => ([ ...Data, {
           id: response.data.id,
           name: data.name,
           type: response.data.types[0].type.name,
           img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.data.id}.png`
         }]))
      })}
   
useEffect(() => {
  return () => {
    getPokemon()
  };
}, []);

    const Pokemons = [].concat(Data)
    .sort((a, b) => a.id > b.id ? 1 : -1)
    .map((item,key)=>{
      return (
        <div key={key}>
          <Card item={item} />
        </div>
      )
    })
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-center">{Pokemons}</div>
  )
}
export default Cards