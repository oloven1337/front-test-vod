import styled from 'styled-components'

export const CardStyled = styled.div`
    width: 251px;
    height: 357px;
    background: #86D3F4;
    text-align: center;
    position: absolute;
    bottom: 144px;
    right: 0;

    div {
        font-weight: 500;
        padding-top: 20px;
        font-size: 16px;
        width: 231px;
        margin: 0 auto;
    }

    img {
        margin-top: 20px;
        width: 126px;
        height: 126px;
    }

    p {
        max-width: 126px;
        margin: 20px auto 0 auto;
        font-weight: 400;
        font-size: 14px;
        margin-bottom: 20px;
    }

    a {
        display: block;
        width: 156px;
        margin: 0 auto;
        padding: 16px 67px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        color: #86D3F4;
        background: #000;
        text-decoration: none;
    }
`