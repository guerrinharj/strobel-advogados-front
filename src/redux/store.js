import { configureStore } from '@reduxjs/toolkit';
import atuacoesReducer from './atuacoesSlice';
import aboutReducer from './aboutSlice';
import conteudoReducer from './conteudoSlice';
import publicacoesReducer from './publicacoesSlice';

export const store = configureStore({
    reducer: {
        atuacoes: atuacoesReducer,
        about: aboutReducer,
        conteudo: conteudoReducer,
        publicacoes: publicacoesReducer
    },
});
