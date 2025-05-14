import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

    return (
        <nav
            style={{
                position: 'fixed',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'white',
                padding: '0.5em 2em',
                borderRadius: '12px',
                boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
                display: 'flex',
                gap: '2em',
                zIndex: 1000,
            }}
        >
            <Link
                to="/"
                style={{
                    textDecoration: 'none',
                    color: location.pathname === '/' ? 'blue' : 'black',
                }}
            >
                Home
            </Link>
            <Link
                to="/about"
                style={{
                    textDecoration: 'none',
                    color: location.pathname === '/about' ? 'blue' : 'black',
                }}
            >
                About
            </Link>
        </nav>
    );
}
