import React from 'react';
import logo from './logo.svg';
import './App.css';
import BeerList from './BeerList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';  

function App() {
  return (
    <Router >
        <div className="App">
          <BeerList ></BeerList>
        </div>

        <Routes>{/* Route /about */}
          <Route path="/about" element={<About />} /> {/* Route /about */}
        </Routes>
    </Router>
  );
}

export default App;