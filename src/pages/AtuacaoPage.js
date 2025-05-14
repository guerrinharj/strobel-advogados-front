import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
                    <h1 style={{ fontSize: isMobile ? '20px' : '34px', marginBottom: '0.5em', textDecoration: 'underline' }}>
                        Áreas de Atuação
                    </h1>

                    <h2>Direito Constitucional</h2>
                    <p style={{ fontSize: isMobile ? '14px' : '18px', lineHeight: '1.6' }}>
                        • Elaboração de pareceres técnicos, ações diretas de inconstitucionalidade, mandados de segurança e habeas corpus.
                    </p>

                    <h2>Direito Administrativo</h2>
                    <p style={{ fontSize: isMobile ? '14px' : '18px', lineHeight: '1.6' }}>
                        • Atuação em processos licitatórios, contratos públicos, improbidade administrativa, defesa de servidores públicos.
                    </p>

                    <h2>Direito Civil e Empresarial</h2>
                    <p style={{ fontSize: isMobile ? '14px' : '18px', lineHeight: '1.6' }}>
                        • Consultoria, litígios contratuais, responsabilidade civil, direito societário.
                    </p>

                    <h2>Direito Digital</h2>
                    <p style={{ fontSize: isMobile ? '14px' : '18px', lineHeight: '1.6' }}>
                        • LGPD, proteção de dados, compliance digital, e-commerce e contratos tecnológicos.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
