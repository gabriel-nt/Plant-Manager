import React, { createContext, useState, useContext } from 'react';
import { DefaultTheme } from 'styled-components';

import dark from '../styles/theme/dark';
import light from '../styles/theme/light';

interface ThemeContextProps {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useCustomTheme(): ThemeContextProps {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('usePlayer must be used within an PlayerProvider');
  }

  return context;
}

export { CustomThemeProvider, useCustomTheme };
