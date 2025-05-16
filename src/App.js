import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import AtuacaoPage from './pages/AtuacaoPage';
import ContactPage from './pages/ContactPage';
import ConteudoPage from './pages/ConteudoPage';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/sobre" element={<AboutPage />} />
                <Route path="/areas-de-atuacao" element={<AtuacaoPage />} />
                <Route path="/conteudo" element={<ConteudoPage />} />
                <Route path="/contato" element={<ContactPage />} />
            </Routes>
            <Navbar />
        </div>
    );
}

export default App;
