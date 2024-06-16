import { Routes, Route } from "react-router-dom";
import NavbarPizza from "./components/NavBar";
import Hero from "./components/Hero";
import Home from "./views/Home";
import Pizza from "./views/pizza";
import Carrito from "./views/carrito";

export default function App() {
  return (
    <div>
      <NavbarPizza />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/desafio-mammamia/pizza/:id" element={<Pizza />} />
        <Route path="/desafio-mammamia/carrito" element={<Carrito />} />
      </Routes>
    </div>
  );
}
