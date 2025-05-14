import React from 'react';
import logo from '../assets/logo-strobel.svg';
import { motion, AnimatePresence } from 'framer-motion';


export default function LandingPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -90 }}
            transition={{ duration: 0.4 }}
        >
            <div
                style={{
                    display: 'flex',
                    overflow: 'hidden',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100vh',
                }}
            >
                <img
                    src={logo}
                    alt="Strobel Advogados Logo"
                    style={{ maxWidth: '180px', marginBottom: '1em' }}
                />
                <h1>Strobel Advogados</h1>
            </div>
        </motion.div>
    );
}
