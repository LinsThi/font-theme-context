import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import FontProvider from './context/Font';
import { Home } from './pages/Home';

function App() {
  return (
    <FontProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <Home />
      </SafeAreaView>
    </FontProvider>
  );
}

export default App;
