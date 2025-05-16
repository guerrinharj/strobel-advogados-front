// src/redux/aboutSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'Isabelle Strobel',
    paragraphs: [
        'Advogada formada pela melhor faculdade de direito da América Latina, o <b>Largo de São Francisco - USP (Universidade de São Paulo)</b>, com mestrado também na mesma instituição, na área de Filosofia. Em 2012, foi premiada pela USP por sua pesquisa <i>"A justiça à sombra da verdade e da narrativa"</i>.',
        'Trabalhou com o Ministro do STF <b>Alexandre de Moraes</b> entre os anos de 2010-2014, sendo convidada pessoalmente para o cargo.',
        'Eleita uma das cinquenta pessoas mais criativas do Brasil em 2020 pela revista californiana <b>Wired</b>.',
        'É inscrita na Ordem dos Advogados de São Paulo no mesmo ano em que se formou, 2012, registrada sob o número <b>352.465</b>, podendo ser verificada a regularidade de sua inscrição no <a href="https://cna.oab.org.br/" target="_blank" rel="noreferrer" style="text-decoration: underline; color: black; font-weight: 700;">Cadastro Nacional da Advocacia</a>.',
    ],
};

const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {},
});

export default aboutSlice.reducer;
