import React from 'react';
import { ThemeProvider } from 'styled-components';

import Welcome from './src/pages/Welcome';
import theme from './src/styles/theme/light';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  );
}

export default App;
