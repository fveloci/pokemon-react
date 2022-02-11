import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { NextUIProvider } from "@nextui-org/react";
import Navbar from "./components/shared/Navbar";
import PokemonList from "./components/PokemonList";
import { PokemonDescription } from "./components/PokemonDescription";
import { Footer } from "./components/shared/Footer";

function App() {
  return (
    <NextUIProvider>
      <div className="App">        
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/pokemon/:name" element={<PokemonDescription/>}/>
          </Routes>
        <Footer/>
        </BrowserRouter>
      </div>
    </NextUIProvider>
  );
}

export default App;
