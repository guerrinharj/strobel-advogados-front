// src/redux/atuacoesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        title: 'Arbitragem',
        description: '• Representação de clientes em procedimentos arbitrais nacionais e internacionais...',
    },
    {
        title: 'Contencioso',
        description: '• Atuação estratégica em processos judiciais e arbitrais...',
    },
    {
        title: 'Contencioso Societário',
        description: '• Atuação em disputas entre sócios, dissolução de sociedades...',
    },
    {
        title: 'Direito Civil e do Consumidor',
        description: '• Atuação em litígios envolvendo companhias aéreas e plataformas digitais...',
    },
    {
        title: 'Propriedade Intelectual',
        description: '• Registro e proteção de marcas, direitos autorais e patentes...',
    },
];

const atuacoesSlice = createSlice({
    name: 'atuacoes',
    initialState,
    reducers: {}
});

export default atuacoesSlice.reducer;
