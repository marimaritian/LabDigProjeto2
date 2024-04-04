import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 3rem;
    color: black;
`;

export const Container = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    gap: 40px;
`;

export const Graphic = styled.img`
    height: 200px;
    width: 400px;
`;

export const InputData = styled.input`
    height: 40px;
    width: 80px;
    border-radius: 20px;
`;

export const Button = styled.button`
    height: 40px;
    width: 80px;
    background-color: pink;
    cursor: pointer;
`;

export const InputTemp = styled.input`
    height: 40px;
    width: 80px;
    background-color: pink;
`;

export const Graphics = styled.div`
    display: flex;
`;

export const Buttons = styled.div`
    display: flex;
    gap: 80px;
`;

export const Infos = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    background-color: blue;
`;

export const Border = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    border-radius: 60px;
`;
