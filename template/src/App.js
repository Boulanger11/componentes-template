import React from "react";
import "./App.css";
import Garagem from "./Componentes/Garagem";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";

export default function App() {
  

  return (
    <div className="App">
      <Header />
     <h1>Aula - Componentes React</h1>

     <Garagem />

     <Footer />
    </div>
  );
}
