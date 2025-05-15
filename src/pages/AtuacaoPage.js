import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';

export default function AtuacaoPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
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
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '100vh',
                paddingBottom: '60px',
            }}
        >

        <Logo
        style={{position: 'fixed', right: 0, top: 10}}
        />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    padding: '0 2em',
                    paddingBottom: '60px',
                    textAlign: isMobile ? 'center' : 'left',
                    maxWidth: isMobile ? '90vw' : '70vw',
                    margin: 'auto',
                    gap: '2em',
                    lineHeight: '1.5',
                }}
            >
                <div style={{ maxWidth: '600px' }}>
                    <h1 style={{ fontSize: isMobile ? '28px' : '34px', marginBottom: '0.5em', textDecoration: 'underline' }}>
                        Áreas de Atuação
                    </h1>

                    <h2 style={{ fontSize: isMobile ? '18px' : '26px' }}>
                        Direito Civil e do Consumidor
                    </h2>
                    <p style={{ fontSize: isMobile ? '16px' : '18px', lineHeight: '1.6' }}>
                        • Atuação em litígios envolvendo companhias aéreas (cancelamentos, overbooking, extravio de bagagem) e plataformas digitais (remoção de conteúdo, bloqueios indevidos, uso indevido de dados). Defesa dos direitos do consumidor e responsabilização civil.








                    </p>

                </div>
            </div>
        </motion.div>
    );
}
