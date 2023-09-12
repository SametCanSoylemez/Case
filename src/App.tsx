import React from 'react';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';  // Slider bileşenini içe aktar
import MovieCategories from './components/MovieCategories';
// Resimleri içe aktar
import foto1 from './images/foto1.jpg';
import foto2 from './images/foto2.jpg';
import foto3 from './images/foto3.jpg';
import foto4 from './images/foto4.jpg';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetail from './components/MovieDetail'; 

const slides = [
  {
    imgSrc: foto1,
    altText: 'Image 1 description',
    captionTitle: 'Image 1 Title',
    captionDescription: 'Image 1 Description'
  },
  {
    imgSrc: foto2,
    altText: 'Image 2 description',
    captionTitle: 'Image 2 Title',
    captionDescription: 'Image 2 Description'
  },
  {
    imgSrc: foto3,
    altText: 'Image 3 description',
    captionTitle: 'Image 3 Title',
    captionDescription: 'Image 3 Description'
  },
  {
    imgSrc: foto4,
    altText: 'Image 4 description',
    captionTitle: 'Image 4 Title',
    captionDescription: 'Image 4 Description'
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container mt-5">
          <Slider slides={slides} />
          <Routes>
            <Route path="/" element={<MovieCategories />} />
            <Route path="/movie/:movieId" element={<MovieDetail />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
