import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import AtuacaoPage from './pages/AtuacaoPage';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/areas-de-atuacao" element={<AtuacaoPage />} />
            </Routes>
            <Navbar />
        </div>
    );
}

export default App;
