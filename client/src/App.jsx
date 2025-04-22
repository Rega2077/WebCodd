// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-w-screen min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* Add more routes here later */}
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
