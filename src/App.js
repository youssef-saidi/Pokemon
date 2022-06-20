import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemons from "./components/Pokemons"
import Pokemon from "./components/Pokemon"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;