import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

import Routes from './src/routes/routes';
import Loader from './src/components/Loader';
import theme from './src/styles/theme/light';

const App = () => {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });

  if (!fontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <Loader />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
