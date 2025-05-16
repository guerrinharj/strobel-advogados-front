import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/Logo';

const atuacoes = [
    {
        title: 'Arbitragem',
        description:
            '• Representação de clientes em procedimentos arbitrais nacionais e internacionais. Atuação em disputas complexas, especialmente nas áreas contratual, societária e empresarial. Elaboração de convenções de arbitragem e suporte técnico ao longo de todo o procedimento.',
    },
    {
        title: 'Contencioso',
        description:
            '• Atuação estratégica em processos judiciais e arbitrais, com foco na resolução de conflitos cíveis, empresariais e contratuais. Elaboração de peças processuais, sustentações orais e acompanhamento em todas as instâncias.',
    },
    {
        title: 'Contencioso Societário',
        description:
            '• Atuação em disputas entre sócios, dissolução de sociedades, apuração de haveres e conflitos societários. Representação em ações judiciais e arbitragens envolvendo questões de governança e responsabilidade de administradores.',
    },
    {
        title: 'Direito Civil e do Consumidor',
        description:
            '• Atuação em litígios envolvendo companhias aéreas (cancelamentos, overbooking, extravio de bagagem) e plataformas digitais (remoção de conteúdo, bloqueios indevidos, uso indevido de dados). Defesa dos direitos do consumidor e responsabilização civil.',
    },
    {
        title: 'Propriedade Intelectual',
        description:
            '• Registro e proteção de marcas, direitos autorais e patentes. Atuação em casos de uso indevido de imagem, nome ou conteúdo nas redes sociais e em plataformas digitais. Defesa judicial e extrajudicial dos direitos intelectuais.',
    },
];

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
                paddingBottom: '60px',
            }}
        >
            <Logo style={{ position: 'fixed', right: 0, top: 10 }} />

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

                    {atuacoes.map((area, index) => (
                        <div key={index}>
                            <h2 style={{ fontSize: isMobile ? '18px' : '26px' }}>{area.title}</h2>
                            <p style={{ fontSize: isMobile ? '16px' : '18px', lineHeight: '1.6' }}>{area.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
