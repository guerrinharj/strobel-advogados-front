import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo-strobel.svg';

export default function Logo({ size = 180, style = {} }) {
    return (
        <motion.img
            src={logo}
            alt="Logo"
            style={{ width: `${size}px`, marginBottom: '1em', ...style }}
            animate={{
                rotate: [0, 10, -10, 10, -10, 0],
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration: 9,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
            }}
        />
    );
}
