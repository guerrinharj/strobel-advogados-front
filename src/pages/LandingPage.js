import React from 'react';
import logo from '../assets/logo-strobel.svg';
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
            <motion.img
                src={logo}
                alt="Logo"
                style={{ width: '180px', marginBottom: '1em' }}
                animate={{
                    rotate: [0, 10, -10, 10, -10, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                }}
            />
                <h1>Strobel Advocacia</h1>
            </div>
        </motion.div>
    );
}
