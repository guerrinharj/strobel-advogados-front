// src/redux/atuacoesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        title: 'Arbitragem',
        description: 'Representação em procedimentos arbitrais nacionais e internacionais. Atuação em disputas contratuais, societárias e empresariais, com elaboração de cláusulas compromissórias e acompanhamento integral do processo arbitral.',
    },
    {
        title: 'Contencioso',
        description: 'Atuação estratégica em disputas judiciais e arbitrais nas esferas cível e empresarial. Elaboração de peças processuais, sustentações orais e acompanhamento em todas as instâncias.',
    },
    {
        title: 'Contencioso Societário',
        description: 'Representação em litígios entre sócios, dissolução de sociedades, apuração de haveres e disputas envolvendo governança corporativa e responsabilidade de administradores.',
    },
    {
        title: 'Civil',
        description: 'Atuação em ações contra companhias aéreas (cancelamentos, overbooking, extravio de bagagem) e plataformas digitais (remoção de conteúdo, bloqueios indevidos). Defesa dos direitos do consumidor e responsabilização civil.',
    },
    {
        title: 'Consumidor',
        description: 'Defesa dos direitos do consumidor em ações contra empresas de grande porte, como companhias aéreas e redes sociais. Atuação em casos de falha na prestação de serviço e indenizações.',
    },
    {
        title: 'Digital',
        description: 'Consultoria em proteção de dados (LGPD), responsabilidade civil na internet, remoção de conteúdo e compliance digital. Atuação em disputas envolvendo redes sociais e plataformas online.',
    },
    {
        title: 'Imobiliario',
        description: 'Assessoria jurídica em compra e venda de imóveis, análise de contratos, regularização fundiária, locações, usucapião e disputas possessórias.',
    },
    {
        title: 'Midia e Entretenimento',
        description: 'Atuação em contratos de licenciamento, cessão de direitos autorais, produções audiovisuais e proteção jurídica de artistas, produtores e influenciadores.',
    },
    {
        title: 'Planejamento Patrimonial',
        description: 'Estruturação de planejamentos sucessórios, testamentos, doações, criação de holdings familiares e blindagem patrimonial, visando segurança jurídica e eficiência fiscal.',
    },
    {
        title: 'Propriedade Intelectual',
        description: 'Registro e proteção de marcas, patentes, direitos autorais e segredos industriais. Atuação em disputas por uso indevido de criações intelectuais e contratos de licenciamento.',
    },
    {
        title: 'Societário',
        description: 'Constituição, reorganização e dissolução de sociedades. Elaboração de contratos sociais, acordos de sócios e atuação em operações societárias complexas.',
    },
];

const atuacoesSlice = createSlice({
    name: 'atuacoes',
    initialState,
    reducers: {}
});

export default atuacoesSlice.reducer;
