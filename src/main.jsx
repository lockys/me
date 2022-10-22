import React from 'react';
import Portfolio from './Portfolio';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { BrowserRouter } from 'react-router-dom';
import { lightTheme, darkTheme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-family: 'Lato-Regular', sans-serif;
    transition: background .5s ease-in-out;
    background: ${({ theme }) => theme.background};
  }

  a {
    color: ${({ theme }) => theme.textColor};
  }
`;

const Main = () => {
  const [isDark, setIsDark] = React.useState(localStorage.getItem('__isDark') === 'true');
  return (
    <React.StrictMode>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Portfolio setIsDark={setIsDark} isDark={isDark} />
        </BrowserRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default Main;
