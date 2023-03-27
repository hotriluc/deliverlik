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
    background: ${(props) => props.theme.colors.background};
    color:  ${(props) => props.theme.colors.secondary};
    overscroll-behavior: none;
    overflow-x: hidden;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 1.28rem;
  }
`;

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const lightTheme: DefaultTheme = {
    colors: {
      primary: "#F3EBD5",
      primaryDark: "#E7D39F",
      secondary: "#101010",
      background: "#FFFFFF",

      accentOne: "#767676",
      accentTwo: "#B7B7B7",
      accentThree: "#E1E1E1",
      accentFour: "#FAFAFA",
    },
    boxShadows: {
      primaryBackground: `0rem 0.3rem 1rem rgba(176, 170, 153, 0.518)`,
      whiteBackground: `0rem 0.3rem 1rem rgba(184, 184, 184, 0.518)`,
    },
    borderRadius: "10.18px",
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
