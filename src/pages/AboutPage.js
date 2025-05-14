import React, { useEffect, useState } from 'react';
import isabelle from '../assets/isabelle-strobel.png';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutPage() {
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
            initial={{ opacity: 0,  }}
            animate={{ opacity: 1  }}
            exit={{ opacity: 0  }}
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
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    padding: '0 2em',
                    paddingBottom: '60px',
                    textAlign: isMobile ? 'center' : 'left',
                    maxWidth: isMobile ? '90vw' : '70vw',
                    margin: 'auto',
                    gap: '2em',
                    lineHeight: '1.5'
                }}
            >
                {/* Image on top (mobile) or left (desktop) */}
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

                {/* Text on bottom (mobile) or right (desktop) */}
                <div style={{ maxWidth: '600px' }}>
                    <h1 style={{ fontSize: isMobile ? '20px' : '34px', marginBottom: '0.5em' }}>
                        Isabelle Strobel
                    </h1>

                    <p style={{ fontSize: isMobile ? '14px' : '18px', lineHeight: '1.6' }}>
                        • Advogada formada pela melhor faculdade de direito da América Latina, o <b>Largo de São Francisco - USP
                        (Universidade de São Paulo)</b>, com mestrado também na mesma instituição, na área de Filosofia. Em 2012,
                        foi premiada pela USP por sua pesquisa <i>"A justiça à sombra da verdade e da narrativa"</i>.
                    </p>
                        
                    <p style={{ fontSize: isMobile ? '14px' : '18px', lineHeight: '1.6' }}>
                        • Trabalhou com
                        o Ministro do STF <b>Alexandre de Moraes</b> entre os anos de 2010-2014, sendo convidada pessoalmente para o
                        cargo. 
                    </p>

                    <p style={{ fontSize: isMobile ? '14px' : '18px', lineHeight: '1.6' }}>    
                        • Eleita uma das cinquenta pessoas mais criativas do Brasil em 2020 pela revista californiana <b>Wired</b>.
                    </p>

                    <p style={{ fontSize: isMobile ? '14px' : '18px', lineHeight: '1.6' }}>
                        • É inscrita na Ordem dos Advogados de São Paulo no mesmo ano em que se formou, 2012, registrada sob o
                        número <b>352.465</b>, podendo ser verificada a regularidade de sua inscrição no &nbsp;
                        <a href="https://cna.oab.org.br/" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'black', fontWeight: '700' }}>
                            Cadastro Nacional da Advocacia
                        </a>.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
