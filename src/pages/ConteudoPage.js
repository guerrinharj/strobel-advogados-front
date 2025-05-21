import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';

export default function ConteudoPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const { items = [] } = useSelector((state) => state.conteudo);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100vh',
                textAlign: 'center',
                padding: isMobile ? '' : '2em'
            }}
        >
            <h1 style={{ fontSize: isMobile ? '24px' : '36px', marginBottom: '1em', textDecoration: 'underline' }}>
                Conteúdo
            </h1>

            <div style={{ maxWidth: '800px', width: '100%' }}>
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        style={{
                            marginBottom: '2em',
                            paddingBottom: '1em',
                        }}
                    >
                        {item.url && (
                            <a
                                href={`https://${item.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: isMobile ? '18px' : '20px',
                                        transition: 'text-decoration 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
                                    onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
                                >
                                    •  <i>"{item.description}"</i>
                                </p>
                                <p style={{ fontSize: isMobile ? '18px' : '24px', marginBottom: '0.5em' }}>
                                    <b>{item.company}</b>, <small>{item.year}</small>
                                </p>
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
