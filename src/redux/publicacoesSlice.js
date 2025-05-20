import { createSlice } from '@reduxjs/toolkit';

const publicacoesSlice = createSlice({
    name: 'publicacoes',
    initialState: {
        items: [
            {
                company: 'Academia.edu',
                title: 'A arte de buscar a verdade em Proust',
                url: 'https://www.academia.edu/9246066/A_arte_de_re_buscar_a_verdade_em_Proust',
                year: 2022,
            },
        {
                company: "Folha de São Paulo",
                title: "Por que Juliette do BBB parece a tropa de choque bolsonarista?",
                url: "https://www1.folha.uol.com.br/ilustrissima/2021/05/por-que-juliette-do-bbb-parece-a-tropa-de-choque-bolsonarista.shtml",
                year: "2021"
        },
        ],
    },
    reducers: {},
});

export default publicacoesSlice.reducer;
