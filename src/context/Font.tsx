import React, { createContext, useCallback, useContext, useState } from 'react';

interface FontContextData {
  delta: number;
  decrementFontSize(): void;
  restoreFontSize(): void;
  incrementFontSize(): void;
}

const FontContext = createContext<FontContextData>({} as FontContextData);

export default function FontProvider({ children }) {
  const [delta, setDelta] = useState(0);

  const decrementFontSize = useCallback(() => {
    setDelta(delta > -4 ? delta - 1 : delta);
  }, [delta]);

  const restoreFontSize = useCallback(() => {
    setDelta(0);
  }, []);
  const incrementFontSize = useCallback(() => {
    setDelta(delta < 4 ? delta + 1 : delta);
  }, [delta]);

  return (
    <FontContext.Provider
      value={{ delta, decrementFontSize, restoreFontSize, incrementFontSize }}
    >
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  const context = useContext(FontContext);

  if (!context) {
    throw new Error('useFont deve ser usado em um FontProvider');
  }

  return context;
}
