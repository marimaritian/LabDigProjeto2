/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import axios from 'axios';
import GraphicComponent from 'components/Grafico';
import GraphicComponent2 from 'components/Grafico 2';
import * as S from './styles';

const HomeTemplate = () => {
    const [imagem, setImagem] = useState('');
    const [imagemPrevious, setImagemPrevious] = useState(false);
    const [reloader, setReloader] = useState(false);
    const [dia, setDia] = useState('');
    const [grafico, setGrafico] = useState('');

    const handleFimClick = async () => {
        try {
            console.error('entreii');
            const response = await axios.post('http://localhost:5000/plot');
            setImagem(response.data.grafico);
            console.error(response.data.grafico);
            setReloader(!reloader);
        } catch (error) {
            console.error('Erro ao plotar o gráfico:', error);
        }
    };

    return (
        <S.Container>
            <S.Border>
                <S.Title>
                    Aperte fim para registrar a temperatura até o momento
                </S.Title>
                <S.InputData
                    placeholder="Dia"
                    onChange={(e) => {
                        console.log(e.target.value);
                        setDia(e.target.value);
                    }}
                />
                <S.InputData
                    placeholder="Hora"
                    onChange={(e) => {
                        console.log(e.target.value);
                        setGrafico(e.target.value);
                    }}
                />
                <S.Buttons>
                    {' '}
                    <S.Button onClick={handleFimClick}>Plotar</S.Button>
                    <S.Button onClick={() => setImagemPrevious(true)}>
                        Comparar
                    </S.Button>
                </S.Buttons>
            </S.Border>

            {console.error(`essa é a imagem${imagem}`)}
            <S.Graphics>
                {' '}
                {imagem && <GraphicComponent image={imagem} />}
                {dia && grafico && imagemPrevious && (
                    <GraphicComponent2 dia={dia} grafico={grafico} />
                )}
            </S.Graphics>
        </S.Container>
    );
};
export default HomeTemplate;
