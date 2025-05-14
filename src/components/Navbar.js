import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

    return (
        <nav
            style={{
                position: 'fixed',
                bottom: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '2em',
                zIndex: 1000,
            }}
        >
            <Link
                to="/"
                style={{
                    textDecoration: 'none',
                    color: location.pathname === '/' ? 'white' : 'black',
                }}
            >
                Home
            </Link>
            <Link
                to="/sobre"
                style={{
                    textDecoration: 'none',
                    color: location.pathname === '/about' ? 'white' : 'black',
                }}
            >
                Sobre
            </Link>
            <Link
                to="/areas-de-atuacao"
                style={{
                    textDecoration: 'none',
                    color: location.pathname === '/about' ? 'white' : 'black',
                }}
            >
                Atuação
            </Link>
            <Link
                to="/contato"
                style={{
                    textDecoration: 'none',
                    color: location.pathname === '/about' ? 'white' : 'black',
                }}
            >
                Contato
            </Link>
        </nav>
    );
}
