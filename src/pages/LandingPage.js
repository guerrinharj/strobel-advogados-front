import React from 'react';
import Logo from '../components/Logo';
import { motion, AnimatePresence } from 'framer-motion';


export default function LandingPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -500, rotate: -90 }}
            animate={{ opacity: 1, y: 0, rotate: 0, }}
            exit={{ opacity: 0, y: 0, rotate: 90  }}
            transition={{ duration: 1 }}
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
                <Logo />
                <h1>Strobel Advocacia</h1>
            </div>
        </motion.div>
    );
}
