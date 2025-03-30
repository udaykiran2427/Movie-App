import React from "react";
import Search from "./components/search";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="Hero Banner"></img>
            <h1>
              Find <span className="text-gradient">Movies</span> Without Hassle
            </h1>
          </header>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h1 className="text_white">{searchTerm}</h1>
        </div>
      </div>
    </main>
  );
};

export default App;
