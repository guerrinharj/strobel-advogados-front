import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import Logo from '../components/Logo';

export default function AtuacaoPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [openIndexes, setOpenIndexes] = useState({});
    const atuacoes = useSelector((state) => state.atuacoes);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleIndex = (index) => {
        setOpenIndexes((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

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
            <div style={{ display: isMobile ? 'none' : 'block' }} >
                <Logo style={{ position: 'fixed', right: 0, top: 10 }} />
            </div>

            <h1 style={{ fontSize: isMobile ? '24px' : '36px', marginBottom: '1em', textDecoration: 'underline' }}>
                Areas de Atuação
            </h1>

        <div style={{ width: isMobile ? '90%' : '60%', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <ul
                style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    overflowY: 'auto',
                    flex: 1,
                    paddingRight: '0.5em',
                }}
            >
                {atuacoes.map((area, index) => (
                    <li key={index} style={{ marginBottom: '1em' }}>
                        <h2
                            onClick={() => toggleIndex(index)}
                            style={{
                                fontSize: isMobile ? '18px' : '26px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '0.5em',
                                wordBreak: 'break-word',
                            }}
                        >
                            {area.title}
                            <span
                                style={{
                                    display: 'inline-block',
                                    transition: 'transform 0.2s ease',
                                    transform: openIndexes[index] ? 'rotate(180deg)' : 'rotate(0deg)',
                                    minWidth: '20px',
                                }}
                            >
                                .
                            </span>
                        </h2>

                        <AnimatePresence initial={false}>
                            {openIndexes[index] && (
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <p
                                        style={{
                                            fontSize: isMobile ? '16px' : '18px',
                                            lineHeight: '1.6',
                                            marginTop: '0.5em',
                                            textAlign: 'left'
                                        }}
                                    >
                                        {area.description}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                ))}
            </ul>
        </div>
        </motion.div>
    );
}
