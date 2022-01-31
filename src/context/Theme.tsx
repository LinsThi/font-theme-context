import React, { createContext, useCallback, useContext, useState } from 'react';

import { DARK, LIGHT } from '~/constants/theme';

interface ThemeContextData {
  theme: string;
  handleChangeTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(LIGHT);

  const handleChangeTheme = useCallback(() => {
    setTheme(theme === LIGHT ? DARK : LIGHT);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme deve ser usado em um FontPThemeProviderrovider');
  }

  return context;
}
