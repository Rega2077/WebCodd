// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';
import ProblemsPage from './pages/Problems';

function App() {
  return (
    <div className="flex flex-col min-w-screen min-h-screen bg-white ">
      <ScrollToTop />
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/problems" element={<ProblemsPage />} />

        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
