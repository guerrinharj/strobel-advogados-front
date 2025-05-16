import { createSlice } from '@reduxjs/toolkit';

const conteudoSlice = createSlice({
    name: 'conteudo',
    initialState: {
        items: [
        {
            company: "Folha de São Paulo",
            description: "Por que Juliette do BBB parece a tropa de choque bolsonarista?",
            url: "https://www1.folha.uol.com.br/ilustrissima/2021/05/por-que-juliette-do-bbb-parece-a-tropa-de-choque-bolsonarista.shtml",
            year: "2021"
        },
        {
            company: "GQ",
            description: "Saquinho de Lixo, coletivo criador de memes, por Wired Festival Creativex",
            url: "https://gq.globo.com/wired-festival-brasil/noticia/2020/11/saquinho-de-lixo-coletivo-criador-de-memes-por-wired-festival-creativex.ghtml",
            year: "2020"
        },
        {
            company: "UOL",
            description: "Este escritório de advocacia fala o idioma mais usado no Brasil: memes",
            url: "https://quicando.blogosfera.uol.com.br/2019/09/16/escritorio-de-advocacia-idioma-mais-usado-no-brasil-memes/",
            year: "2019"
        },
        {
            company: "El Pais",
            description: "Os reis da memecracia que chegam aos museus",
            url: "https://brasil.elpais.com/brasil/2019/05/17/cultura/1558109281_822792.html",
            year: "2019"
        }
    ],
    },
    reducers: {
        addConteudo(state, action) {
            state.items.push(action.payload);
        },
        removeConteudo(state, action) {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addConteudo, removeConteudo } = conteudoSlice.actions;
export default conteudoSlice.reducer;
