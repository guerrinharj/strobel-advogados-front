import { configureStore } from '@reduxjs/toolkit';
import atuacoesReducer from './atuacoesSlice';
import aboutReducer from './aboutSlice';

export const store = configureStore({
    reducer: {
        atuacoes: atuacoesReducer,
        about: aboutReducer,
    },
});
