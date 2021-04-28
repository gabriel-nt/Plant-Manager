import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      green: string;
      green_dark: string;
      green_light: string;
      heading: string;
      body_home: string;
      text: string;
      text_light: string;
      background: string;
      shape: string;
      white: string;
      gray: string;
      blue: string;
      blue_light: string;
      red: string;
      background_controller: string;
      overlay: string;
    };
    fonts: {
      heading: string;
      text: string;
      complement: string;
    };
  }
}
