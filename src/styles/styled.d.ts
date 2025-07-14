import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      danger: string;
      background: string;
      text: string;
      textLight: string;
      mainGray: string;
      darkGray: string;
    };
  }
}
