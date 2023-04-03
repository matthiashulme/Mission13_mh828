import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MovieList from './Movies';
import Home from './Home';
import Podcasts from './Podcasts';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />

      {/* Routing Container */}
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Home saying="Joel Hilton's Movie Collection" />}
          />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/movies" element={<MovieList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
