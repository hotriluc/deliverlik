import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize}
    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    html {
      box-sizing: border-box;
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
    padding: 0;
    margin: 0;
    background: ${(props) => props.theme.colors.primary};
    color:  ${(props) => props.theme.colors.secondary};
    overscroll-behavior: none;
    overflow-x: hidden;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
  } 
`;

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const darkTheme: DefaultTheme = {
    colors: {
      primary: "#101010",
      secondary: "#ffffff",
    },
  };

  const lightTheme: DefaultTheme = {
    colors: {
      primary: "#ffffff",
      secondary: "#101010",
    },
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
