import React from 'react'
import ReactDOM from 'react-dom/client'
import Portfolio from './Portfolio.jsx'
import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'
import {BrowserRouter} from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-family: 'Monoid', sans-serif;
    height: 100vh;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyle/>
        <BrowserRouter>
            <Portfolio/>
        </BrowserRouter>
    </React.StrictMode>
)
