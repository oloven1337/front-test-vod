import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import { App } from './app'


const GlobalStyled = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    body {
        /* width: 1280px; */
        height: 720px;
    }
`

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyled />
        <App />
    </BrowserRouter>, document.getElementById('root')
)
