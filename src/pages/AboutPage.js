import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import isabelle from '../assets/isabelle-strobel.png';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';

export default function AboutPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const { name, paragraphs } = useSelector((state) => state.about);

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
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '100vh',
                paddingBottom: '60px',
            }}
        >
            <div style={{ display: isMobile ? 'none' : 'block' }} >
                <Logo style={{ position: 'fixed', right: 0, top: 10 }} />
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    textAlign: isMobile ? 'center' : 'left',
                    maxWidth: isMobile ? '90vw' : '70vw',
                    margin: 'auto',
                    gap: '2em',
                    lineHeight: '1.5',
                }}
            >
                <div>
                    <img
                        src={isabelle}
                        alt="Isabelle Strobel"
                        style={{
                            maxWidth: isMobile ? '180px' : '300px',
                            transform: isMobile ? 'none' : 'translateY(-65px)',
                        }}
                    />
                </div>

                <div style={{ maxWidth: '600px' }}>
                    <h1 style={{ fontSize: isMobile ? '20px' : '34px', marginBottom: '0.5em', textDecoration: 'underline' }}>
                        {name}
                    </h1>

                    {paragraphs.map((text, idx) => (
                        <p
                            key={idx}
                            style={{ fontSize: isMobile ? '16px' : '18px', lineHeight: '1.6' }}
                            dangerouslySetInnerHTML={{ __html: `• ${text}` }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
