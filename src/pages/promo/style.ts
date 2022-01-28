import styled from 'styled-components'

import bg from '../../assets/bg.jpg'

export const Wrapper = styled.div`
    background-image: url(${bg});
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
`

export const Card = styled.div`
    width: 380px;
    height: 100vh;
    background-color: #86D3F4;

    h5 {
        font-size: 26px;
        font-weight: 400;
        padding-top: 72px;
    }

    p {
        font-size: 14px;
        margin-top: 13px;
    }
`

export const TextNumber = styled.div`
    font-weight: 700;
    font-size: 32px;
`

export const WrapperItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 13px;
    
    button {
        padding: 12px 30px;
        margin: 10px;
        border: 2px solid black;
        background-color: transparent;
        cursor: pointer;
        font-weight: 500;
    }

    button[type=submit] {
        text-transform: uppercase;
        color: red;
    }
`

export const ButtonClearStyled = styled.button`
    width: 167px;
`

export const WrapperApprov = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 13px;
    
    span {
        width: 214px;
        color: #565656;
        font-size: 14px;
    }
`