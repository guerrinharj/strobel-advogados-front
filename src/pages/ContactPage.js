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
                    textAlign: 'left',
                    maxWidth: isMobile ? '90vw' : '500px',
                    width: '100%',
                    margin: 'auto',
                    gap: '1em',
                }}
            >
                <h1 style={{ fontSize: isMobile ? '20px' : '34px' }}>Fale Conosco</h1>

                <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1em' }}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Seu nome"
                        value={form.name}
                        onChange={handleChange}
                        required
                        style={{
                            padding: '0.75em',
                            fontSize: '16px',
                            border: '1px solid black',
                            borderRadius: '4px',
                            width: '50%',
                            margin: 'auto',
                        }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Seu email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        style={{
                            padding: '0.75em',
                            fontSize: '16px',
                            border: '1px solid black',
                            borderRadius: '4px',
                            width: '50%',
                            margin: 'auto',
                        }}
                    />
                    <textarea
                        name="message"
                        placeholder="Sua mensagem"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        style={{
                            padding: '0.75em',
                            fontSize: '16px',
                            border: '1px solid black',
                            borderRadius: '4px',
                            width: isMobile ? '90%' : '100%',
                            maxWidth: '100%',
                            margin: 'auto',
                        }}
                    />
                    <button
                        type="submit"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{
                            backgroundColor: isHovered ? 'white' : 'black',
                            color: isHovered ? 'black' : 'white',
                            border: '1px solid black',
                            padding: '0.75em',
                            fontSize: '16px',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            margin: 'auto',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </motion.div>
    );
}
