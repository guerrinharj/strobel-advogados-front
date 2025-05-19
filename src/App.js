import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import AtuacaoPage from './pages/AtuacaoPage';
import ContactPage from './pages/ContactPage';
import ConteudoPage from './pages/ConteudoPage';
import PublicacoesPage from './pages/PublicacoesPage';
import Navbar from './components/Navbar';

function ScrollToTopOnRouteChange() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
}

function App() {
    return (
        <div className="app">
            <ScrollToTopOnRouteChange />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/sobre" element={<AboutPage />} />
                <Route path="/areas-de-atuacao" element={<AtuacaoPage />} />
                <Route path="/conteudo" element={<ConteudoPage />} />
                <Route path="/contato" element={<ContactPage />} />
                <Route path="/publicacoes" element={<PublicacoesPage />} />
            </Routes>

            <div
                style={{
                    position: 'fixed',
                    bottom: 20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 1000,
                }}
            >
                <Navbar />
            </div>
        </div>
    );
}

export default App;
