import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Films from "./components/films/Films";
import People from "./components/people/People";
import Locations from "./components/locations/Locations";

function App() {
  return (
    <div className="App">
      <Router>
       
      <div className="container">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/films" element={<Films/>} />
            <Route path="/people" element={<People />} />
            <Route path="/locations" element={<Locations />}/>
          </Routes>
        </main>
      </div>
      </Router>

       
       
    </div>
  );
}

export default App;
