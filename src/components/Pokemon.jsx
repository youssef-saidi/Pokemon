import React from "react"
import { Link, useLocation } from "react-router-dom"
import { colors } from "./Colors"

const Pokemon = () => {
    let location = useLocation();
    const pokemonInfo =location.state.pokemonInfo
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center" style={{backgroundColor:colors[pokemonInfo.type]}} >
        <Link to={"/"} className="cursor-pointer text-sm font-semibold pt-12">Retour</Link>
        <div className="flex md:flex-row flex-col w-auto items-center justify-center h-full">
            <img src={pokemonInfo.img} alt="" srcSet="" className="rounded-full bg_white w-60 h-60 md:mr-36"/>
            <div className="flex flex-col tracking-normal font-semibold">
                <h1 className="text-xs py-2">#{(pokemonInfo.id<10)?"00":(pokemonInfo.id<100)?"0":""}{pokemonInfo.id}</h1>
                <h1 className="text-sm tracking-wider py-2">{pokemonInfo.name}</h1>
                <h1 className="text-xs py-2">Type: {pokemonInfo.type}</h1>
            </div>
        </div>
    </div>
  )
}

export default Pokemon