import React from 'react';
import ProgressProvider from './components/ProgressProvider';
import AppContent from './components/AppContent';
import TypeTasteTextureProvider from './components/TypeTasteTextureProvider';



export const App = () => {
  return (
    <ProgressProvider>
      <TypeTasteTextureProvider>
      <AppContent />
      </TypeTasteTextureProvider>
    </ProgressProvider>
  );
};


export default App;