import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';

export default function ContactPage() {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailtoLink = `mailto:gabrielguerra@strobeladvocacia.com?subject=Contato de ${encodeURIComponent(
            form.name
        )}&body=Nome: ${encodeURIComponent(form.name)}%0D%0AEmail: ${encodeURIComponent(
            form.email
        )}%0D%0AMensagem: ${encodeURIComponent(form.message)}`;

        window.location.href = mailtoLink;
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
            }}
        >

            <Logo style={{ position: 'fixed', right: 0, top: 10 }} />

                <h1 style={{ fontSize: isMobile ? '24px' : '36px', marginBottom: '1em', textDecoration: 'underline' }}>
                    Contato
                </h1>

                <div style={{ marginTop: '2em', textAlign: 'center' }}>
                    <a
                        href="mailto:gabrielguerra@strobeladvocacia.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'black',
                            textDecoration: 'underline',
                            fontSize: '16px',
                        }}
                    >
                        <h2 style={{ fontSize: '24px', marginBottom: '0.5em' }}>Email</h2>
                    </a>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <a
                        href="https://wa.me/5521999999999?text=Olá,%20gostaria%20de%20falar%20com%20vocês!"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: 'black',
                            textDecoration: 'underline',
                            fontSize: '16px',
                        }}
                    >
                        <h2 style={{ fontSize: '24px', marginBottom: '0.5em' }}>WhatsApp</h2>
                    </a>
                </div>
        </motion.div>
    );
}
