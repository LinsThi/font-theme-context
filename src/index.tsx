import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import FontProvider from './context/Font';
import ThemeProvider from './context/Theme';
import { Home } from './pages/Home';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ThemeProvider>
        <FontProvider>
          <Home />
        </FontProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
