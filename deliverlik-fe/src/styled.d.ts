import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;

      background: string;
      accentOne: string;
      accentTwo: string;
      accentThree: string;
      accentFour: string;
    };
    boxShadows: {
      primaryBackground: string;
      whiteBackground: string;
    };
    borderRadius: string;
  }
}
