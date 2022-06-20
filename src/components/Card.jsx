import { NavLink } from "react-router-dom"
import { colors } from "./Colors"

const Card = ({ item }) => {
  return (
    <>
      <NavLink to={`/pokemon/${item.name}`} state={{ pokemonInfo: item }}>
        <div className="cursor-pointer drop-shadow-2xl flex flex-col items-center bg-red-100 rounded-lg w-24 h-44 p-2 m-1" style={{ backgroundColor: colors[item.type] }}>
          <img src={item.img} alt="" srcSet="" className="h-1/2 w-20 h-20 rounded-full bg_white" />
          <div className="h-1/2 pt-2 flex flex-col items-center tracking-normal font-semibold">
            <h1 className="text-xs px-3 p-1 bg-color rounded-lg">#{(item.id < 10) ? "00" : (item.id < 100) ? "0" : ""}{item.id}</h1>
            <h1 className="text-sm p-1 tracking-wider">{item.name}</h1>
            <h1 className="text-xs pb-1">Type :{item.type}</h1>
          </div>
        </div>
      </NavLink>
    </>
  )
}
export default Card