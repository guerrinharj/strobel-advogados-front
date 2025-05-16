import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const linkStyle = {
        position: 'relative',
        textDecoration: 'none',
        color: 'black',
        paddingBottom: '4px',
        fontSize: isMobile ? '0.95rem' : '1rem',
        transition: 'color 0.3s ease',
    };

    const activeStyle = {
        color: 'black',
    };

    const underlineStyle = {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '2px',
        width: '100%',
        backgroundColor: 'black',
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.3s ease',
    };

    return (
        <nav
            style={{
                position: 'fixed',
                bottom: 20,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: isMobile ? '1.3em' : '2em',
                zIndex: 1000,
            }}
        >
            {[
                { to: '/sobre', label: 'Sobre' },
                { to: '/areas-de-atuacao', label: 'Atuação' },
                { to: '/publicacoes', label: 'Publicações' },
                { to: '/conteudo', label: 'Conteúdo' },
                { to: '/contato', label: 'Contato' },
            ].map(({ to, label }) => (
                <Link
                    key={to}
                    to={to}
                    style={{
                        ...linkStyle,
                        ...(location.pathname === to ? activeStyle : {}),
                    }}
                >
                    {label}
                    <span
                        style={{
                            ...underlineStyle,
                            transform:
                                location.pathname === to ? 'scaleX(1)' : 'scaleX(0)',
                        }}
                    />
                </Link>
            ))}
        </nav>
    );
}
