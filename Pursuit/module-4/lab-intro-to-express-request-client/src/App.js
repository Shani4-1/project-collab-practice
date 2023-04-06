import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Words from './components/words/Words';
import PokemonList from './components/pokemon/PokemonList';
import Bugs from "./components/bugs/Bugs"



function App() {
  return (
    <div className="App">
      <Router>
      <div className='container'>
        <Nav/>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:verb/:adjective/:noun' element={<Words />} />
            <Route path='/bugs' element={<Bugs />} />
            <Route path='/pokemon-pretty' element={<PokemonList />} /> 
          </Routes>
        </main>
      </div>
      </Router>
    </div>
  );
};

      

export default App;
